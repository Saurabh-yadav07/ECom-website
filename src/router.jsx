import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      //  Product list
      { path: "store", element: <Store /> },

      //  Single product page (DYNAMIC ROUTE)
      { path: "store/:productId", element: <ProductDetails /> },

      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> }
    ]
  }
]);

export default router;
