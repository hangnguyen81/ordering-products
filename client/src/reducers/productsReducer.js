import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,

  } from '../utils/actions';
  
  const products_reducer = (state, action) => {
      switch (action.type) {
        case GET_PRODUCTS_BEGIN:
          return {
            ...state, 
            products_loading: true
          };
        case GET_PRODUCTS_SUCCESS:
          let maxPrice = action.payload.map(p => p.price_per_unit)
          maxPrice = Math.max(...maxPrice);
            return {
              ...state, 
              products_loading: false,
              filtered_products: action.payload,
              products: action.payload,
              filters: {
                ...state.filters,
                max_price: maxPrice,
                price: maxPrice,
              }
            };
        case GET_PRODUCTS_ERROR:
          return {
            ...state,
            products_loading: false,
            products_error: true
          };
          default:
            throw new Error(`No Matching "${action.type}" - action type`);
      } 
  }
  
  export default products_reducer;