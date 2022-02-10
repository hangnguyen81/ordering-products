import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/productsReducer';
import { products_url as url } from '../utils';
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  UPDATE_FILTERS,
  FILTER_PRODUCTS
} from '../actions';

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  filtered_products: [],
  filters: {
    text: '',
    min_price: 0,
    max_price: 0,
    price: 0,
  }
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async(url) =>{
    dispatch({type: GET_PRODUCTS_BEGIN});
    try {
      const response = await axios.get(url);
      const data = response.data
      dispatch({type:GET_PRODUCTS_SUCCESS, payload: data});
    } catch (error) {
      dispatch({type:GET_PRODUCTS_ERROR});
    }
  };

  useEffect(()=>{
    fetchProducts(url);
  },[]);

  useEffect(() => {
    dispatch({type: FILTER_PRODUCTS})
  },[state.filters]);

  const updateFilters = (e) => {  
    let name = e.target.name;
    let value = e.target.value
    dispatch({type: UPDATE_FILTERS, payload: { name: value} })
  };

  const clearFilters = () => {};

  return (
    <ProductsContext.Provider 
      value={{
        ...state,
        updateFilters,
        clearFilters
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext);
}