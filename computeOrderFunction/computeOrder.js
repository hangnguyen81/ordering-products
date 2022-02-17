const computeOrder = (products, number_of_batch, products_batch_size, batch_size, maxBatch=true) => {    
    const listOfItems = products.map(product => {
        return computeOneProduct(product, number_of_batch, products_batch_size, batch_size, maxBatch);
        });
    const overall_price = listOfItems.reduce((sum, item) => sum + item.total_price, 0);
    return {listOfItems, overall_price};
};

const computeOneProduct = (product, number_of_batch, products_batch_size, batch_size, maxBatch) => {
    const batch_quantity = computeBatchQuantity(product, number_of_batch );
    const correctBatch = computeCorrectBatch(product, products_batch_size, batch_size, maxBatch);
    const total_price = product.price_per_unit * batch_quantity * correctBatch.size;
    return {
        product_code: product.product_code,
        product_name: product.product_name,
        batch_size_code: correctBatch.batch_size_code,
        batch_size: correctBatch.size,
        batch_quantity,
        price_per_unit: product.price_per_unit,
        total_price
    };
}

const computeBatchQuantity = (product, number_of_batch) => {
    const numberOfBatch = number_of_batch.filter(item => item.product_code === product.product_code);
    if (numberOfBatch.length === 0)
        return 1;
    else
        return numberOfBatch[0].batch_quantity;
}

const computeCorrectBatch = (product, products_batch_size, batch_size, maxBatch) => {
    const productsBatchSizeArr = products_batch_size.filter(item => item.product_code === product.product_code);
    if (productsBatchSizeArr.length === 0)
        return {
            batch_size_code: `BS_GENERATED_${product.product_code}`,
            size: 1
        };
    else {
        const batchSizes = productsBatchSizeArr.map(item => 
            batch_size.filter(s => s.batch_size_code === item.batch_size_code)).flat();
        if (maxBatch)
            return batchSizes.reduce((max, obj) => (max.size > obj.size) ? max : obj, {});
        else
            return batchSizes.reduce((min, obj) => (min.size < obj.size) ? min : obj, {});
    }
}

module.exports = computeOrder;