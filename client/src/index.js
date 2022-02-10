import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import { ProductsProvider } from './context/productsContext'; 
import { OrderProvider } from './context/ordersContext';

ReactDOM.render(    
  <React.StrictMode>
    <ProductsProvider>
      <OrderProvider>
        <Router>
          <App />
        </Router>       
      </OrderProvider> 
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

