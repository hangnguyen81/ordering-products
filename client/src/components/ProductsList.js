import React from "react";
import { useProductsContext } from "../context/productsContext";
import Product from "./Product";

const ProductsList = () => {
    const {products, products_loading} = useProductsContext();
  
    if (products_loading)
        return <p>Loading</p>
    return(
        <main className="products-grid">    
            { products.map((p,i) => <Product key={i} product={p}/>)}
        </main>
    )
}

export default ProductsList;
