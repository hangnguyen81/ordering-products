import React, {useState} from "react";
import { useOrderContext } from "../context/ordersContext";
const Order = () => {
    const {order, placed_order, clearCart, placeOrder, clearOrder} = useOrderContext();
    const [maxBatch, setMaxBatch] = useState(true);

    if (order.length === 0)
      if (placed_order.length !==0 )
        return (
          <> 
            <h2 className="table-title">Your order was placed!</h2>
            <table className="orderd-table">
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Product Code</th>
                  <th>Product Name</th>                
                  <th>Batch size code</th>
                  <th>Batch size</th>
                  <th>Number of batch</th>
                  <th>Price per unit</th>
                </tr>
                { placed_order.map((item,i) => 
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{item.product_code}</td>
                  <td>{item.product_name}</td>                
                  <td>{item.batch_size_code}</td>
                  <td>{item.batch_size}</td>
                  <td>{item.batch_quantity}</td>
                  <td>{item.price_per_unit} € </td>
                </tr>)}
              </tbody>
            </table>
            <button onClick={clearOrder}>Clear order</button>
        </>)
      else return <h2 className="table-title">You have no item in your cart</h2>
    return(
        <>
        <h2 className="table-title">Current products in your cart</h2>
        <table id='order-table'>
          <tbody>
            <tr>
              <th>#</th>
              <th>Product Code</th>
              <th>Product Name</th>              
              <th>Batch size</th>
              <th>Number of batch</th>
              <th>Price per unit</th>
            </tr>
            { order.map((item,i) => <tr key={i}>
                <td>{i+1}</td>
                <td>{item.product_code}</td>
                <td>{item.product_name}</td>                
                <td>{item.batch_size.map(item => item.size + '  ' )}</td>
                <td>{item.batch_quantity}</td>
                <td>{item.price_per_unit} € </td>
            </tr>)}
          </tbody>
        </table>
        <div className="order-summary">
            <p>Total items in your order: {order.length}</p>
            <div onChange={() => setMaxBatch(!maxBatch)}>
                <label>Use batch size: </label>
                <input type="radio" value={maxBatch === true} name="batchOption" defaultChecked/> Max batch
                <input type="radio" value={maxBatch === false} name="batchOption" /> Min batch
            </div>
            <button onClick={() => placeOrder(maxBatch)}>Place order</button><button onClick={clearCart}>Clear cart</button>
        </div>
        </>

        
    )
}

export default Order;