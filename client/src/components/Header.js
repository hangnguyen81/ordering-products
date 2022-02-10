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
            <Link to='/'><FaHome/></Link>
            <Link to='/order'><FaShoppingCart/>{order.length === 0? null: order.length}</Link>
        </header>
    )
}

export default Header;