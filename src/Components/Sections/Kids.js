import './Sections.css';
import {VscHeart} from "react-icons/vsc";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Kids({products, handleWishlist, handleCart}) {
    return (
        <div className="MainContainer">
            {products && products.map((item, index) => (
                <div className='prod-row'>
                    <div className='product'>
                        <div className='prod-div'>
                        <img className="productpic" alt="product" src={item.img} key={index}/>
                        </div>
                        <div className='cartfunc'>
                            <div>
                            ₹{item.price}
                            </div>
                            <div className='cart-wishlist'>
                                <div className="heart" onClick={()=>handleWishlist(item)}><VscHeart /></div>
                                <div className="cart" onClick={()=>handleCart(item)}><AiOutlineShoppingCart/></div>
                            </div>
                        </div>
                        <Link to={'/cart'}>
                            <button className='buynow-btn' onClick={() => handleCart(item)}>Buy Now</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}