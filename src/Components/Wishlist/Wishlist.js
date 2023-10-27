import { Link } from "react-router-dom";
import './Wishlist.css';

export default function Wishlist({wishList, handleClearWishlist, handleRemoveWish, handleMoveCart}) {
    return(
        <div className="wishList">
            <div className='header'>
            <h1 className="wishListHeader">My Wishlist</h1>
            {wishList.length>=1 && (
            <button className='clear-button' onClick={handleClearWishlist}>Clear Wishlist</button>
            )}
            </div>
            {
                wishList.length === 0 && (
                    <div className="wishlistEmpty">
                        <span>Your Wishlist is Empty</span>
                        <Link to={"/"}>
                            <button className='continue-button'>Continue Shopping</button>
                        </Link>
                    </div>
                )
            }
            <div className="wishLists">
                {
                    wishList.map((item)=>(
                        <div key={item.id} className="wishListItem">
                            <img className="wishListImage" src={item.img} alt="productImage"/>
                            <div className="price-remove">
                                <div className="price">
                                    <h4>₹{item.price}</h4>
                                </div>
                                <button className='remove-button' onClick={()=>handleRemoveWish(item)}>Remove</button>  
                            </div> 
                            <div>
                                <button className="move-button" onClick={()=>handleMoveCart(item)}>Move to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div> 

        </div>
    )
}