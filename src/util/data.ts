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

export const productTypes: string[] = ["lata", "kg"];

export const products: ProductType[] = Array.from({ length: 57 }, () => ({
  id: uuidv4(),
  imgPath: "/biscuit.jpg",
  productCategory: productCategories[2],
  productType: "teste",
  productName: `BISCOITOS BANHADOS NO CHOCOLATE ${Math.floor(
    Math.random() * 100000
  )}`,
  productPrice: 30,
  productStock: 10,
  productDesc: `Lata com Biscoitos Banhados no Chocolate 45% ao Leite – 300g

Delicie-se com a combinação perfeita de crocância e sabor com nossa lata de biscoitos banhados em chocolate 45% ao leite. Cada biscoito é cuidadosamente coberto com um generoso layer de chocolate ao leite, criando uma experiência irresistível para os amantes de doces.

O chocolate de alta qualidade, com 45% de cacau, proporciona um sabor rico e aveludado, equilibrando a doçura com notas sutis de cacau. O toque crocante dos biscoitos se une à suavidade do chocolate, criando uma explosão de texturas e sabores a cada mordida.

A embalagem em lata é prática e elegante, mantendo os biscoitos frescos e protegidos, perfeita para presentear ou saborear em qualquer momento do dia.

Características:
Quantidade: 300g
Chocolate ao leite com 45% de cacau
Biscoitos crocantes e saborosos
Embalagem prática e elegante`,
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
    options: Array.from(
      new Set(products.map((product) => "R$" + product.productPrice.toString()))
    ),
  },
];

export const sorts: string[] = ["categoria", "tipo", "nome", "preço"];
