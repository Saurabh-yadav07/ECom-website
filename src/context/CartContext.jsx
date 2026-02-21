import { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

function CartProvider({ children }) {
  const authCtx = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  const userCartKey = authCtx.email
    ? authCtx.email.replace(/[@.]/g, "")
    : "";

  //  FETCH CART
  const fetchCartItems = async () => {
    if (!userCartKey) return;

    try {
      const response = await fetch(
        `https://crudcrud.com/api/e3c6bf5a8e0d4500a28913db29cace09/cart${userCartKey}`
      );

      const data = await response.json();
      setCartItems(data);
    } catch (err) {
      console.log("Error fetching cart:", err);
    }
  };

  // ADD TO CART
  const addToCart = async (item) => {
    if (!userCartKey) return;

    try {
      await fetch(
        `https://crudcrud.com/api/e3c6bf5a8e0d4500a28913db29cace09/cart${userCartKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        }
      );

      fetchCartItems(); // refresh cart
    } catch (err) {
      console.log("Error adding item:", err);
    }
  };

  // DELETE ITEM
  const deleteFromCart = async (id) => {
    if (!userCartKey) return;

    try {
      await fetch(
        `https://crudcrud.com/api/e3c6bf5a8e0d4500a28913db29cace09/cart${userCartKey}/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchCartItems();
    } catch (err) {
      console.log("Error deleting item:", err);
    }
  };

  const value = {
    cartItems,
    addToCart,
    deleteFromCart,
    fetchCartItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export const useCart = () => {
  return useContext(CartContext);
};