import React, { useState } from 'react'
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/cart/Cart';

function App() {
  const [showCart,setShowCart]=useState(false);
  // const removeItemHandler=()={

  // }

  return (
    <>
    <Header onShowCart={()=>setShowCart(true)}/>
    <Cart 
    show={showCart}
    onHide={()=>setShowCart(false)}
    
    />
    <ProductList/>
  </>
  )
}

export default App
