import React from "react";
import { useProductsContext } from "../context/productsContext";
import { formatPrice } from '../utils';


const Filter = () => {
    const { 
        updateFilters,
        clearFilters,  
        filters: {
          text,
          min_price,
          max_price,
          price
        }
      } = useProductsContext();
    return (
        <div className="products-filter">       
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type='text'
                    name='text'
                    placeholder='search products'
                    value={text}
                    onChange={updateFilters}
                />
                <h5 className="price">Price</h5>
                <p> {formatPrice(price)}</p>
                <input 
                    type="range"
                    name="price"
                    value={price}
                    onChange={updateFilters}
                    min={min_price}
                    max={max_price}
                />
            </form> 
            <button type='button' onClick={clearFilters}>
                clear filters
            </button>  
        </div>

    )
}

export default Filter;