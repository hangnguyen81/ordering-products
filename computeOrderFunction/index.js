const computeOrder  = require('./computeOrder');
const { products, batch_size, products_batch_size, number_of_batch} = require('./data');

const order_max = computeOrder(products, number_of_batch, products_batch_size, batch_size, true);
console.log('-----Order with MAX batch------')
console.log(order_max);

const order_min = computeOrder(products, number_of_batch, products_batch_size, batch_size, false);
console.log('-----Order with MIN batch------')
console.log(order_min);