import { v4 as uuidv4 } from "uuid";

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

export const products: ProductType[] = Array.from({ length: 55 }, () => ({
  id: uuidv4(),
  imgSrc: "/biscuit.jpg",
  productCategory: productCategories[2],
  productType: "teste",
  productName: `teste-${Math.floor(Math.random() * 100000)}`,
  productPrice: 30,
  productStock: 10,
}));

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
