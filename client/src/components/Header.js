import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome } from 'react-icons/fa';
import {useOrderContext} from '../context/ordersContext';
const Header = () =>{
    const {order} = useOrderContext();
    return(
        <header className="products-orders-app-header">
            <div>
                <p className="header-title">Order our products</p>        
                <p className="header-subtitle">Just choose and leave the rest for us!</p>
            </div>
            <Link to='/' className="nav-links"><FaHome/> Home </Link>
            <Link to='/order' className="nav-links"><FaShoppingCart/><span className="move-up">{order.length === 0? null: order.length}</span> Your cart</Link>
        </header>
    )
}

export default Header;