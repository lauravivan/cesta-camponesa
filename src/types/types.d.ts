declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": unknown;
  }
}

interface ProductType {
  id: string;
  imgPath: string;
  productCategory: string;
  productType: string;
  productName: string;
  productPrice: number;
  productStock: number;
  productDesc: string;
  imgSec?: [string, string, string];
}

interface CrumbType {
  desc: string;
  link: string;
}

interface FilterType {
  desc: string;
  options: string[];
}

interface BasketType {
  product: ProductType;
  selectedQnt: number;
}
