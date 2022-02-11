const computeOrder  = require('./computeOrder');
const { products, batch_size, products_batch_size, number_of_batch} = require('./data');

describe('Return same amout of items',() =>{    
    test('When use MAX batch in the order', () => {  
        const maxBatch = true;      
        const result = computeOrder(products, batch_size, products_batch_size, number_of_batch, maxBatch);
        expect(result).toHaveLength(products.length);
    });
    test('When use MIN batch in the order', () => {  
        const maxBatch = false;      
        const result = computeOrder(products, batch_size, products_batch_size, number_of_batch, maxBatch);
        expect(result).toHaveLength(products.length);
    });
});

describe('Check all criteria of order data', () =>{
    test('Default batch size', () =>{
        const result = computeOrder(products, batch_size, products_batch_size, number_of_batch);
        expect(result[3].batch_size_code).toBe('BS_GENERATED_P4')
        expect(result[3].batch_size).toBe(1)
    });

    test('No number of batch given for a product, batch_quantity = 1', () =>{
        const result = computeOrder(products, batch_size, products_batch_size, number_of_batch);
        expect(result[4].batch_quantity).toBe(1)
    });
    test('Return the biggest batch_size', () => {
        const maxBatch = true;
        const result = computeOrder(products, batch_size, products_batch_size, number_of_batch, maxBatch);
        expect(result[1].batch_size).toBe(4);
        expect(result[2].batch_size).toBe(100);
    })
    test('Return the smallest batch_size', () => {
        const maxBatch = false;
        const result = computeOrder(products, batch_size, products_batch_size, number_of_batch, maxBatch);
        expect(result[1].batch_size).toBe(20);
        expect(result[2].batch_size).toBe(50);
    })
});

