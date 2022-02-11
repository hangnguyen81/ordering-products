import React, {  useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/ordersReducer';
import { order_url as url } from '../utils';
import axios from 'axios';
import {
  ADD_TO_ORDER,
  CLEAR_ORDER,
  PLACE_ORDER, 
  CLEAR_CART,
  REMOVE_FROM_ORDER
} from '../utils/actions';

const getLocalStorage = () => {
  let order = localStorage.getItem('order')
  if (order) {
    return JSON.parse(localStorage.getItem('order'))
  } else {
    return []
  }
}

const initialState = {
  order: getLocalStorage(),
  placed_order:[]
}

const OrderContext = React.createContext()

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToOrder = (product) => {
    dispatch({ type: ADD_TO_ORDER, payload: product })
  }

  const removeFromOrder = (id) =>{
    dispatch({type: REMOVE_FROM_ORDER, payload: id})
  }

  const clearOrder = () => {
    dispatch({ type: CLEAR_ORDER })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART})
  }

  const placeOrder = async(maxBatch) =>{
    const data = state.order;
    const orderItems = computeOrder(data, maxBatch);
    await axios.post(url, orderItems);
    dispatch({type: PLACE_ORDER, payload: orderItems})
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
        placeOrder,
        clearCart,
        removeFromOrder }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderContext = () => {
  return useContext(OrderContext);
}

export const computeOrder = (data, maxBatch) => {
  const listOfItems = data.map(item => {
    let correctBatch
    if (maxBatch)
      correctBatch = item.batch_size.reduce((max, obj) => (max.size > obj.size) ? max : obj);
    else
      correctBatch = item.batch_size.reduce((min, obj) => (min.size < obj.size) ? min : obj);
    return {
        product_code: item.product_code,
        product_name: item.product_name,
        price_per_unit: item.price_per_unit,
        batch_size_code: correctBatch.batch_size_code,
        batch_size: correctBatch.size,
        batch_quantity: item.batch_quantity
    }
  });
  return listOfItems;
}  
  