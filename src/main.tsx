import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/main.css";
import { Homepage, Products, Product, Cart } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { products } from "./util";
import { ThemeProvider } from "./context/ThemeContext/ThemeProvider";

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
  {
    path: "/cesta",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
