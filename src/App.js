import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Homepage from './Components/HomePage/Homepage';
import Mens from './Components/Sections/Mens';
import Womens from './Components/Sections/Womens';
import Kids from './Components/Sections/Kids';
import data from './sectionsdata';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';

function App() {
  const {menData, womenData, kidsData} = data;
  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleCart = (product) => {
    const productExist = cartItems.find((item)=> item.id === product.id);

    if(!productExist) {
      setCartItems([...cartItems, product]);
    } else {
      setCartItems(
          cartItems.map((item)=>
          item.id === product.id
            ? {...productExist, quantity: productExist.quantity+1}
            : item
          )
        );
    }
  }

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item)=> item.id === product.id);
    if(productExist.quantity===1){
      setCartItems(cartItems.filter((item)=> item.id!==product.id))
    } else {
      setCartItems(
        cartItems.map((item)=>
        item.id === product.id
          ? {...productExist, quantity: productExist.quantity-1}
          : item
        )
      )
    }
  }

  const handleWishlist = (product) => {
    const productExist = wishList.find((item)=> item.id === product.id);

    if(!productExist) {
      setWishList([...wishList, product])
    }
  }

  const handleRemoveWish = (product) => {
    const productExist = wishList.find((item)=> item.id === product.id);
    if(productExist.quantity===1){
      setWishList(wishList.filter((item)=> item.id!==product.id))
    }
  }

  const handleClearcart = () => {
    setCartItems([]);
  }

  const handleClearWishlist = () => {
    setWishList([]);
  }

  const handleRemovefromCart = (product) => {
    const productExist = cartItems.find((item)=> item.id === product.id);
    if(productExist.quantity>=1){
      setCartItems(cartItems.filter((item)=> item.id!==product.id))
    }
  }

  const handleMoveWish = (product) => {
    const productExist = wishList.find((item)=> item.id === product.id);
    if(productExist){
      setWishList(
        wishList.map((item)=>
        item.id === product.id
          ? {...productExist, quantity: 1}
          : item
        )
      )
      setCartItems(cartItems.filter((item)=> item.id!==product.id))
    } else {
      setWishList([...wishList, {...product, quantity:1}])
      setCartItems(cartItems.filter((item)=> item.id!==product.id))
    }
  }

  const handleMoveCart = (product) => {
    const productExist = cartItems.find((item)=> item.id === product.id);
    if(productExist){
      setCartItems(
        cartItems.map((item)=>
        item.id === product.id
          ? {...productExist, quantity: 1}
          : item
        )
      )
      setWishList(wishList.filter((item)=> item.id!==product.id))
    } else {
      setCartItems([...cartItems, {...product, quantity:1}])
      setWishList(wishList.filter((item)=> item.id!==product.id))
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cartItems={cartItems}/>
      </div>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/men' element={<Mens products={menData} handleWishlist={handleWishlist} handleCart={handleCart}/>}/>
        <Route path='/women' element={<Womens products={womenData} handleWishlist={handleWishlist} handleCart={handleCart}/>}/>
        <Route path='/kids' element={<Kids products={kidsData} handleWishlist={handleWishlist} handleCart={handleCart}/>}/>
        <Route 
          path='/cart' 
          element={
            <Cart cartItems={cartItems} 
                  handleCart={handleCart} 
                  handleRemoveProduct={handleRemoveProduct} 
                  handleClearcart={handleClearcart} 
                  handleRemovefromCart={handleRemovefromCart} 
                  handleMoveWish={handleMoveWish}
            />
          }
        />
        <Route 
          path='/wishlist' 
          element={
            <Wishlist 
              wishList={wishList} 
              handleRemoveWish={handleRemoveWish} 
              handleClearWishlist={handleClearWishlist}
              handleMoveCart={handleMoveCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
