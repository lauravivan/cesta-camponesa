import { filters, products, sorts } from "./data";
import { getBasket } from "./localStorage";

export const DEFAULT_THEME = "light-theme";
export const TOGGLE_THEME = "dark-theme";
export const DEFAULT_SORT = sorts[2];
export const DEFAULT_FILTER = filters[2];
export const DEFAULT_PRODUCTS_PER_PAGE = 20;
export const QNT_OF_PAGES_PRODUCTS_DEFAULT = Math.ceil(
  products.length / DEFAULT_PRODUCTS_PER_PAGE
);
export const QNT_OF_PAGES_BASKET_PRODUCTS = Math.ceil(
  getBasket().length / DEFAULT_PRODUCTS_PER_PAGE
);
