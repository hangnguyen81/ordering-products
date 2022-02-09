import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
  } from '../actions';
  
  const products_reducer = (state, action) => {
      switch (action.type) {
        case GET_PRODUCTS_BEGIN:
          return {
            ...state, 
            products_loading: true
          };
        case GET_PRODUCTS_SUCCESS:
            return {
              ...state, 
              products_loading: false,
              products: action.payload
            };
        case GET_PRODUCTS_ERROR:
          return {
            ...state,
            products_loading: false,
            products_error: true
          };
          default:
            throw new Error(`No Matching "${action.type}" - action type`)
      } 
  }
  
  export default products_reducer