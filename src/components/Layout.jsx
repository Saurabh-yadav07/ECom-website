import { useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Cart from "./cart/Cart";
import { CartContext } from "../context/CartContext";

function Layout() {
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (showCart) {
      cartCtx.fetchCartItems();
    }
  }, [showCart]);

  return (
    <>
      <Header onShowCart={() => setShowCart(true)} />
      <Cart show={showCart} onHide={() => setShowCart(false)} />
      <Outlet />
    </>
  );
}

export default Layout;