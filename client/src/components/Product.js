import React from "react";
import { FaCartPlus } from 'react-icons/fa';
import { useOrderContext } from "../context/ordersContext";

const Product = ({product}) => { 
    const {product_code, product_name, price_per_unit, batch_quantity, batch_size} = product;
    const { addToOrder } = useOrderContext();
    return(
        <div className='product-detail'>
            <h4>{product_name}</h4>
            <div>
                <p className="product-info">Product code: {product_code}</p>
                <p className="product-info">Price per unit: € {price_per_unit}</p>
                <p className="product-info">Batch size: {batch_size.map(item => item.size + '  ' )}</p>
                <p className="product-info">Number of batch: {batch_quantity}</p>                
            </div>
            <p onClick={() => addToOrder(product)}><FaCartPlus className="add-to-order"/></p>
      </div>
    )
}

export default Product;