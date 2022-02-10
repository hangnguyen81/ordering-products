import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import ProductsList from './components/ProductsList';
import Order from './components/Order';
// import Filter from './components/Filter';

function App() {
  return (
    <div className="products-orders-app">
      <Header/>
      <Routes>
        <Route exact path='/' element={<ProductsList/>} />
        <Route path='/order' element={<Order/>} />
      </Routes>
      {/* <main className='products'>
        <Filter/>
        <ProductsList/>
      </main> */}
      <Footer/>
    </div>
  );
}

export default App;
