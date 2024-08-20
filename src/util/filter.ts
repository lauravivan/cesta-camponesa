export function getProductsByNavigationCategory(
  products: ProductType[],
  category: string
) {
  return products.filter(
    (product) =>
      product.productCategory ===
      category.trim().toLowerCase().replaceAll("%20", " ")
  );
}

export function getProductsBySearch(products: ProductType[], search: string) {
  const userSearch = search.split("=")[1];

  return products.filter((prod) =>
    prod.productName.toLowerCase().includes(userSearch.toLowerCase())
  );
}

export function getProductsByFilter(
  products: ProductType[],
  filters: FilterType[]
) {
  return products.filter((product) => {
    return filters.every((filter) => {
      switch (filter.desc) {
        case "Categoria":
          return filter.options.includes(product.productCategory);
        case "Tipo":
          return filter.options.includes(product.productType);
        case "Nome":
          return filter.options.includes(product.productName);
        case "Preço":
          return filter.options.includes(product.productPrice.toString());
        default:
          return true;
      }
    });
  });
}
