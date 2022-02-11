import { computeOrder } from "./ordersContext";
import { data } from '../utils/test_helper';

describe('When use max batch in the order',() =>{
    const maxBatch = true;
    test('Return same amout of items', () => {        
        const result = computeOrder(data, maxBatch);
        expect(result).toHaveLength(2);
    });
    test('Return the biggest batch_size', () => {
        const result = computeOrder(data, maxBatch);
        expect(result[0].batch_size).toBe(40);
        expect(result[1].batch_size).toBe(100);
    })
});

describe('When use min batch in the order',() =>{
    const maxBatch = false;
    test('Return same amout of items', () => {        
        const result = computeOrder(data, maxBatch);
        expect(result).toHaveLength(2);
    });
    test('Return the smallest batch_size', () => {
        const result = computeOrder(data, maxBatch);
        expect(result[0].batch_size).toBe(20);
        expect(result[1].batch_size).toBe(50);
    })
});
