import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart({cartItems, handleCart, handleRemoveProduct, handleClearcart, handleRemovefromCart, handleMoveWish}) {
    const totalPrice = cartItems.reduce((price,item)=> price+item.quantity*item.price, 0);
    return(
        <div className="cartItems">
            <div className='header'>
            <h1 className="cartItemsHeader">My Cart</h1>
            {cartItems.length>=1 && (
            <button className='clear-button' onClick={handleClearcart}>Clear Cart</button>
            )}
            </div>
            {
                cartItems.length === 0 && (
                    <div className="cartEmpty">
                        <span>Cart is empty!!</span>
                        <Link to={"/"}>
                            <button className='continue-button'>Continue Shopping</button>
                        </Link>
                    </div>
                )
            }
            <div className='cartList'>
                {
                    cartItems.map((item)=>(
                        <div key={item.id} className="cartListItem">
                            <img className="cartItemImage" src={item.img} alt="productImage"/>
                            <div className="price-count">
                                <h4>₹{item.price*item.quantity}</h4>
                                <div>
                                <button className='count-button' onClick={()=>handleRemoveProduct(item)}>-</button>
                                <span> {item.quantity} </span>
                                <button className='count-button' onClick={()=>handleCart(item)}>+</button>
                                </div>    
                            </div> 
                            <button className='moveremove-btn' onClick={() => handleMoveWish(item)}>Move to Wishlist</button>
                            <button className='moveremove-btn' onClick={()=>handleRemovefromCart(item)}>Remove from Cart</button>
                        </div>
                    ))
                }
            </div> 
            {
                 cartItems.length>=1 && (
                    <div className='Payment'>
                <div className='price'>
                <h3>Total price: </h3>
                <div className='total'>₹{totalPrice}</div>
                </div>
                <button className='checkout-btn'>Checkout</button>
            </div>
                )
            }
        </div>
    )
}