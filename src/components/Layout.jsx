import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Cart from "./cart/Cart";

function Layout() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Header onShowCart={() => setShowCart(true)} />
      <Cart show={showCart} onHide={() => setShowCart(false)} />
      <Outlet />
    </>
  );
}

export default Layout;
