const computeOrder  = require('./computeOrder');
const { products, batch_size, products_batch_size, number_of_batch} = require('./data');

console.log('-----Order with MAX batch------')
const max_order = computeOrder(products, number_of_batch, products_batch_size, batch_size, true);
console.log(max_order.listOfItems);
console.log('Total price of order:',max_order.overall_price);

console.log('-----Order with MIN batch------')
const min_order = computeOrder(products, number_of_batch, products_batch_size, batch_size, false);
console.log(min_order.listOfItems);
console.log('Total price of order:', min_order.overall_price);