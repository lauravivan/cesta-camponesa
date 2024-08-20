export {
  filters,
  productCategories,
  productTypes,
  products,
  sorts,
} from "./data";
export { getBasket, setBasket } from "./localStorage";
export {
  DEFAULT_THEME,
  TOGGLE_THEME,
  DEFAULT_PRODUCTS_PER_PAGE,
  QNT_OF_PAGES_BASKET_PRODUCTS,
  QNT_OF_PAGES_PRODUCTS_DEFAULT,
} from "./variable";
export { getAllProductsInPage, getBasketProductsInPage } from "./math";
export {
  getProductsByNavigationCategory,
  getProductsBySearch,
  getProductsByFilter,
} from "./filter";
