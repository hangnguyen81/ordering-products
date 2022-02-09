import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="products-orders-app">
      <Header/>
      <ProductsList/>
      <Footer/>
    </div>
  );
}

export default App;
