declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": unknown;
  }
}

interface ProductType {
  id: string;
  imgSrc: string;
  productCategory: string;
  productType: string;
  productName: string;
  productPrice: number;
  productStock: number;
  imgSec?: [string, string, string];
}

interface CrumbType {
  desc: string;
  link: string;
}

interface FilterType {
  desc: string;
  options: (string | number)[];
}

interface BasketType {
  product: ProductType;
  selectedQnt: number;
}
