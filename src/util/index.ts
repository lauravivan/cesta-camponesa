export const productCategories: string[] = [
  "bebidas",
  "carnes e derivados",
  "caseiros",
  "chás e temperos",
  "frutas",
  "grãos e cereais",
  "leites e derivados",
  "mel",
  "processados de origem vegetal",
  "verduras e legumes",
  "outros",
];

export const productTypes: string[] = ["lata"];

export const products: ProductType[] = [
  {
    id: 1,
    imgSrc: "teste",
    productCategory: productCategories[2],
    productType: "teste",
    productName: "teste",
    productPrice: 30,
  },
  {
    id: 2,
    imgSrc: "teste",
    productCategory: productCategories[2],
    productType: "teste",
    productName: "teste",
    productPrice: 30,
  },
];

export const filters: FilterType[] = [
  {
    desc: "Categoria",
    options: productCategories,
  },
  {
    desc: "Tipo",
    options: productTypes,
  },
  {
    desc: "Nome",
    options: products.map((product) => product.productName),
  },
  {
    desc: "Preço",
    options: products.map((product) => product.productPrice),
  },
];

export const sorts: string[] = ["categoria", "tipo", "nome", "preço"];
