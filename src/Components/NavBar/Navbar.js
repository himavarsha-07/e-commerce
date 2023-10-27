import { Link } from 'react-router-dom';
import './Navbar.css';
import { VscHeart } from "react-icons/vsc";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {TbLogin2} from 'react-icons/tb';

export default function Navbar({cartItems}) {
    return(
        <nav className="Navbar">
                <div className='Maincontainer'>
            <div className="Website">
                <Link to={"/"} className="websitename">
                Shopping Hub
                </Link>
            </div>
            <ul className="menu">
                <li>
                <Link to={"/"} className="menuitem">
                    Home
                    {/* <VscChevronDown className="downarrow"/> */}
                </Link>
                </li>
                <li>
                <Link to={"./men"} className="menuitem">
                    Men's
                    {/* <VscChevronDown className="downarrow"/> */}
                </Link>
                </li>
                <li>
                <Link to={"./women"} className="menuitem">
                    Women's
                    {/* <VscChevronDown className="downarrow"/> */}
                </Link>
                </li>
                <li>
                <Link to={"./kids"} className="menuitem">
                    Kids
                    {/* <VscChevronDown className="downarrow"/> */}
                </Link>
                </li>
            </ul>
            <div className='cart-wishlist'>
                <Link to={"/wishlist"} className="wishlist">
                    <VscHeart/>
                </Link>
                <Link to={"/cart"} className="cart">
                    <AiOutlineShoppingCart/>
                    <span className='cart-count'>
                        {cartItems.length===0 ? "" : cartItems.length}
                    </span>
                </Link>
                <Link to={"/"} className="login">
                    <TbLogin2/>
                </Link>
            </div>
        </div>
        </nav>
    );
}