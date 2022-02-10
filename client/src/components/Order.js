import React, {useState} from "react";
import { useOrderContext } from "../context/ordersContext";
const Order = () => {
    const {order, clearOrder, placeOrder} = useOrderContext();
    const [maxBatch, setMaxBatch] = useState(true);
    console.log(maxBatch)
    if (order.length === 0)
        return <h2>Your order is empty</h2>
    return(
        <>
        <h2>Your current order</h2>
        <table id='order-table'>
          <tbody>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price per unit</th>
              <th>Batch size</th>
              <th>Number of batch</th>
            </tr>
            { order.map((item,i) => <tr key={i}>
                <td>{i+1}</td>
                <td>{item.product_name}</td>
                <td>{item.price_per_unit} € </td>
                <td>{item.batch_size.map(item => item.size + '  ' )}</td>
                <td>{item.batch_quantity}</td>
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
            <button onClick={placeOrder}>Place order</button><button onClick={clearOrder}>Clear order</button>
        </div>
        </>

        
    )
}

export default Order;