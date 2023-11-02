import './Sections.css';
import {VscHeart,VscHeartFilled} from "react-icons/vsc";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Mens({products, handleWishlist, handleCart}) {
    const handleHeart = () => {

    }
    return (
        <div className="MainContainer">
            {  products && products.map((item, index) => (
                <div className='prod-row' key={index}>
                    <div className='product' data-test="Product">
                        <div className='prod-div'>
                            <img className="productpic" alt="product" src={item.img}/>
                        </div>
                        <div className='cartfunc'>
                            <div>
                                ₹{item.price}
                            </div>
                            <div className='cart-wishlist'>
                                <div className="heart" onClick={()=>{handleWishlist(item); handleHeart(item)}}><VscHeart /></div>
                                <div className="cart" onClick={()=>handleCart(item)}><AiOutlineShoppingCart/></div>
                            </div>
                        </div>
                        <div>
                        <Link to={'/cart'}>
                            <button className='buynow-btn' onClick={() => handleCart(item)}>Buy Now</button>
                        </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}