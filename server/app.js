const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');
const client = require('./connect_db');

//middleware
app.use(cors());
app.use(express.static('build'));
app.use(express.json());

//routes

app.get("/api/products", async(req, res) =>{  
  const fetchExtendInfo = async(code) =>{
    const batchQuantity = await client.query("SELECT batch_quantity FROM number_of_batch  WHERE product_code =$1",[code]);
    let quantity;
    if (batchQuantity.rows.length === 0)
      quantity = 1;
    else  
      quantity = batchQuantity.rows[0].batch_quantity;

    const batchSizeData = await client.query("SELECT a.batch_size_code, size FROM batch_size a, products_batch_size b WHERE a.batch_size_code = b.batch_size_code AND b.product_code =$1",[code]);
    let batchSize;
    if (batchSizeData.rows.length === 0)
        batchSize = [{
          batch_size_code: `BS_GENERATED_${code}`, 
          size: 1
        }];
    else
      batchSize = batchSizeData.rows;
      
    return {
      product_code: code,
      batch_quantity: quantity,
      batch_size: batchSize
    };
  };

  const fetchProductsInfo = async(products) =>{
    const requests = products.map(item => {
      return fetchExtendInfo(item.product_code)
        .then(a => {
          return {
            ...a,
            product_name: item.product_name,
            price_per_unit: item.price_per_unit,
          };
        });
    });
    return Promise.all(requests);
  }
  
  let products = await client.query("select * from products");
  products = products.rows;
  fetchProductsInfo(products).then(a => res.json((a)));
});

app.post('/order', async(req, res) => {
  // create new order
  try {
    const date_of_order = new Date();
    const data = req.body;
    const order_info = await client.query("INSERT INTO orders (date_of_order) VALUES ($1) RETURNING order_code",[date_of_order]);
    const order_code = order_info.rows[0].order_code;
    res.json('Order was created');
    try {
      // insert data into table products_orders
      const Promises = data.map(item => {
        client.query("INSERT INTO products_orders (order_code, product_code, batch_size_code, batch_size, batch_quantity) VALUES($1,$2,$3,$4,$5)",[order_code,item.product_code,item.batch_size_code, item.batch_size, item.batch_quantity])
      });
      await Promise.all(Promises);
    } catch (err) {
      logger.error(err);
    }
  } catch (error) {
    logger.error(error);
  }
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;