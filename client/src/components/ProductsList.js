import React from "react";
import { useProductsContext } from "../context/productsContext";
import Product from "./Product";

const ProductsList = () => {
    const {products, products_loading} = useProductsContext();
    if (products_loading)
        return <p>Loading</p>
    return(
        <table id='products-table'>
          <tbody>
            <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Price per unit</th>
              <th></th>
            </tr>
            { products.map((p,i) => <Product key={i} product={p}/>)}
          </tbody>
        </table>
    )
}

export default ProductsList;