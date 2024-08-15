import { getBasket } from "./localStorage";
import { DEFAULT_PRODUCTS_PER_PAGE } from "./variable";

function getProductsInPage(pageNumber: number, numberOfProducts: number) {
  const productsPerPage = [];

  if (numberOfProducts <= DEFAULT_PRODUCTS_PER_PAGE) {
    productsPerPage.push({
      firstIndex: 0,
      lastIndex: numberOfProducts,
    });
  } else {
    let productsPerPageIndex = 0;
    let total = numberOfProducts; //30
    let remainingProducts = total - DEFAULT_PRODUCTS_PER_PAGE; //30 - 20 = 10
    let productsInPage = total - remainingProducts; //30 - 10 = 20

    productsPerPage.push({
      firstIndex: 0,
      lastIndex: productsInPage,
    });

    while (remainingProducts !== 0) {
      total = remainingProducts; //10
      remainingProducts = Math.max(total - DEFAULT_PRODUCTS_PER_PAGE, 0); // 10 - 20 = -10 = 0
      productsInPage = total - remainingProducts; // 10 - 0 = 10
      const firstIndex: number =
        productsPerPage[productsPerPageIndex].lastIndex;

      productsPerPage.push({
        firstIndex: firstIndex,
        lastIndex: firstIndex + productsInPage,
      });

      productsPerPageIndex += 1;
    }
  }

  const pageNumberIndex = pageNumber - 1;

  return productsPerPage[pageNumberIndex];
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
