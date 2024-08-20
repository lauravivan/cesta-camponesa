import { getBasket } from "./localStorage";
import { DEFAULT_PRODUCTS_PER_PAGE } from "./variable";

function getProductsInPage(pageNumber: number, numberOfProducts: number) {
  const productsPerPage = DEFAULT_PRODUCTS_PER_PAGE;

  const firstIndex = (pageNumber - 1) * productsPerPage;
  const lastIndex = Math.min(firstIndex + productsPerPage, numberOfProducts);

  return {
    firstIndex,
    lastIndex,
  };
}

export function getBasketProductsInPage(pageNumber: number) {
  const basketProducts = getBasket();
  const { firstIndex, lastIndex } = getProductsInPage(
    pageNumber,
    basketProducts.length
  );
  return basketProducts.slice(firstIndex, lastIndex);
}

export function getAllProductsInPage(
  products: ProductType[],
  pageNumber: number
) {
  const { firstIndex, lastIndex } = getProductsInPage(
    pageNumber,
    products.length
  );
  return products.slice(firstIndex, lastIndex);
}
