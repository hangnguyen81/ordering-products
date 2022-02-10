import {
    ADD_TO_ORDER,
    CLEAR_ORDER,
    PLACE_ORDER,
  } from '../actions';
  
const orders_reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_ORDER:
            return { 
                ...state, 
                order: [...state.order, action.payload] 
            }
        case PLACE_ORDER:

            return { ...state, order: [] } 
        case CLEAR_ORDER:
            return { ...state, order: [] }    
        default:
            throw new Error(`No Matching "${action.type}" - action type`)
  }
}
export default orders_reducer;