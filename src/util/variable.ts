import { filters, products, sorts } from "./data";

export const DEFAULT_THEME = "light-theme";
export const TOGGLE_THEME = "dark-theme";
export const DEFAULT_SORT = sorts[2];
export const DEFAULT_FILTER = filters[2];
export const DEFAULT_PRODUCTS_PER_PAGE = 20;
export const QNT_OF_PAGES = Math.ceil(
  products.length / DEFAULT_PRODUCTS_PER_PAGE
);
