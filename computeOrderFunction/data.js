const products = [
    {
        product_code: "P1",
        product_name: "Milk",
        price_per_unit: 1.99
    },
    {
        product_code: "P2",
        product_name: "Sour Milk",
        price_per_unit: 2.05
    },
    {
        product_code: "P3",
        product_name: "Cream",
        price_per_unit: 3.59
    },
    {
        product_code: "P4",
        product_name: "Yoghurt",
        price_per_unit: 4.99
    },
    {
        product_code: "P5",
        product_name: "Buttermilk",
        price_per_unit: "3.10"
    }
]

const number_of_batch = [
    {
        product_code: "P1",
        batch_quantity: 20
    },
    {
        product_code: "P2",
        batch_quantity: 500
    },
    {
        product_code: "P3",
        batch_quantity: 40
    },
    {
        product_code: "P4",
        batch_quantity: 234
    }
]

const batch_size = [
    {
        batch_size_code: "BS1",
        size: 20
    },
    {
        batch_size_code: "BS2",
        size: 30
    },
    {
        batch_size_code: "BS3",
        size: 40
    },
    {
        batch_size_code: "BS4",
        size: 50
    },
    {
        batch_size_code: "BS5",
        size: 100
    },
    {
        batch_size_code: "BS6",
        size: 20
    },
    {
        batch_size_code: "BS7",
        size: 50
    }
]

const products_batch_size = [
    {
        product_code:"P1",
        batch_size_code:"BS6"
    },
    {
        product_code:"P2",
        batch_size_code:"BS1"
    },
    {
        product_code:"P2",
        batch_size_code:"BS2"
    },
    {
        product_code:"P2",
        batch_size_code:"BS3"
    },
    {
        product_code:"P3",
        batch_size_code:"BS4"
    },
    {
        product_code:"P3",
        batch_size_code:"BS5"
    },
    {
        product_code:"P5",
        batch_size_code:"BS7"
    }
]

module.exports = { products, batch_size, products_batch_size, number_of_batch}