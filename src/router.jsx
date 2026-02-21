import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

//  Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Store = lazy(() => import("./pages/Store"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));

//  Suspense Wrapper
const suspenseWrapper = (Component) => (
  <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
    {Component}
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: suspenseWrapper(<Home />) },

      {
        path: "store",
        element: suspenseWrapper(
          <ProtectedRoute>
            <Store />
          </ProtectedRoute>
        ),
      },

      {
        path: "store/:productId",
        element: suspenseWrapper(
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },

      { path: "about", element: suspenseWrapper(<About />) },
      { path: "contact", element: suspenseWrapper(<Contact />) },
      { path: "login", element: suspenseWrapper(<Login />) },
    ],
  },
]);

export default router;