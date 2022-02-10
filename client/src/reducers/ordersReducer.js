import {
    ADD_TO_ORDER,
    CLEAR_ORDER,
    PLACE_ORDER,
    REMOVE_FROM_ORDER,
    CLEAR_CART
  } from '../utils/actions';
  
const orders_reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_ORDER:
            return { 
                ...state, 
                order: [...state.order, action.payload] 
            }
        case REMOVE_FROM_ORDER:
            return {
                ...state,
                order: state.order.filter(item => item.product_code !== action.payload)
            }
        case PLACE_ORDER:            
            return { 
                ...state,
                order: [],
                placed_order: action.payload } 
        case CLEAR_ORDER:
            return {
                ...state,
                order:[],
                placed_order: []
            }
        case CLEAR_CART:
            return { 
                ...state, 
                order: [] 
            }    
        default:
            throw new Error(`No Matching "${action.type}" - action type`)
  }
}
export default orders_reducer;