import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },{
              path: "/contact",
              element: <Contact />,
            },
            {
              path: "/product-details",
              element: <ProductDetails />,
            }
        ],
    },
  ]);

export default router;