const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./utils/config');
const logger = require('./utils/logger');
const client = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//routes

app.get("/api/products", async(req, res) =>{  
  const fetchExtendInfo = async(code) =>{
    const batchQuantity = await client.query("SELECT batch_quantity FROM number_of_batch  WHERE product_code =$1",[code]);
    let quantity   
    if (batchQuantity.rows.length === 0)
      quantity = 1
    else  
      quantity = batchQuantity.rows[0].batch_quantity

    const batchSizeData = await client.query("SELECT a.batch_size_code, size FROM batch_size a, products_batch_size b WHERE a.batch_size_code = b.batch_size_code AND b.product_code =$1",[code]);
    let batchSize
    if (batchSizeData.rows.length === 0)
        batchSize = [{
          batch_size_code: `BS_GENERATED_${code}`, 
          size: 1
        }]
    else
      batchSize = batchSizeData.rows
      
    return {
      product_code: code,
      batch_quantity: quantity,
      batch_size: batchSize
    }
  }

  const fetchProductsInfo = async(products) =>{
    const requests = products.map(item => {
      return fetchExtendInfo(item.product_code)
        .then(a => {
          return {
            ...a,
            product_name: item.product_name,
            price_per_unit: item.price_per_unit,
          }
        });
    });
    return Promise.all(requests);
  }
  
  let products = await client.query("select * from products");
  products = products.rows;
  fetchProductsInfo(products).then(a => res.json((a)));
});


app.listen(config.PORT, () => {
    logger.info(`Server is running on port ${config.PORT}`);
});