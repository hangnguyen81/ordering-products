const computeOrder = (products, number_of_batch, products_batch_size, batch_size, maxBatch=true) => {    
    const listOfItems = products.map(product => {
        let batch_quantity
        const numberOfBatch = number_of_batch.filter(item => item.product_code === product.product_code);
        if (numberOfBatch.length === 0)
            batch_quantity = 1
        else
            batch_quantity = numberOfBatch[0].batch_quantity
        
        let productsBatchSizeArr = products_batch_size.filter(item =>item.product_code === product.product_code);
        if (productsBatchSizeArr.length === 0)
            productsBatchSizeArr = [{
                batch_size_code: `BS_GENERATED_${product.product_code}`, 
                size: 1
            }]
        else {
            productsBatchSizeArr = productsBatchSizeArr.map(item => {
                const size = batch_size.filter(s => s.batch_size_code === item.batch_size_code)
               
                return size
            })
        }

        const productsBatchSize = productsBatchSizeArr.flat();

        let correctBatch;
        if (maxBatch)
           correctBatch = productsBatchSize.reduce((max, obj) => (max.size > obj.size) ? max : obj, 0);
        else   
            correctBatch = productsBatchSize.reduce((min, obj) => (min.size < obj.size) ? min : obj, 0);

        return {
            product_code: product.product_code,
            product_name: product.product_name,
            batch_size_code: correctBatch.batch_size_code,
            batch_size: correctBatch.size,
            batch_quantity,
            price_per_unit: product.price_per_unit
        };
      });
      return listOfItems;
};

module.exports = computeOrder;



