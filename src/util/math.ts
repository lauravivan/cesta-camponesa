import { products } from "./data";
import { DEFAULT_PRODUCTS_PER_PAGE } from "./variable";

export function getProductsPerPage() {
  const totalOfProducts = products.length;
  const productsPerPage = [];

  if (totalOfProducts <= DEFAULT_PRODUCTS_PER_PAGE) {
    productsPerPage.push(totalOfProducts);
  } else {
    let total = totalOfProducts;
    let difference = total - DEFAULT_PRODUCTS_PER_PAGE;
    let remainingValue = total - difference;
    productsPerPage.push(remainingValue);

    while (difference !== 0) {
      total = difference;
      difference = difference - DEFAULT_PRODUCTS_PER_PAGE;
      remainingValue = total - difference;
      productsPerPage.push(remainingValue);
    }
  }

  return productsPerPage;
}
