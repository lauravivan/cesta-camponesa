import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/main.css";
import { Homepage, Products, Product } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { products } from "./util";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/produtos",
    element: <Products products={products} />,
  },
  {
    path: "/produtos/:category",
    element: <Products products={products} />,
  },
  {
    path: "/produtos/:category/:id",
    element: <Product />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
