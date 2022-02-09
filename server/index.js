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
  const products = await client.query("select * from products");
  res.json(products.rows);
});

app.listen(config.PORT, () => {
    logger.info(`Server is running on port ${config.PORT}`);
});