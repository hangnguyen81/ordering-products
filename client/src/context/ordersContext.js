import React, {  useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/ordersReducer';
import {
  ADD_TO_ORDER,
  CLEAR_ORDER,
  PLACE_ORDER
} from '../actions';

const getLocalStorage = () => {
  let order = localStorage.getItem('order')
  if (order) {
    return JSON.parse(localStorage.getItem('order'))
  } else {
    return []
  }
}

const initialState = {
  order: getLocalStorage()
}

const OrderContext = React.createContext()

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToOrder = (product) => {
    dispatch({ type: ADD_TO_ORDER, payload: product })
  }

  const clearOrder = () => {
    dispatch({ type: CLEAR_ORDER })
  }

  const placeOrder = () =>{
      dispatch({type: PLACE_ORDER})
  }

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(state.order))
  }, [state.order])

  return (
    <OrderContext.Provider
      value={{ 
        ...state, 
        addToOrder, 
        clearOrder, 
        placeOrder }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderContext = () => {
  return useContext(OrderContext);
}