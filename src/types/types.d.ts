declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": unknown;
  }
}

interface ProductType {
  id: number;
  imgSrc: string;
  productCategory: string;
  productType: string;
  productName: string;
  productPrice: number;
}

interface CrumbType {
  desc: string;
  link: string;
}

interface FilterType {
  desc: string;
  options: string[] | number[];
}
