import React from "react";
const Product = ({product}) => { 
    const {product_code, product_name, price_per_unit} = product;
    return(
        <tr className='product_detail'>
            <td>{product_code}</td>
            <td>{product_name}</td>
            <td>€ {price_per_unit}</td>
            <button>Add to order</button>
      </tr>
    )
}

export default Product;