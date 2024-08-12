import { Link } from "react-router-dom";

interface CardType {
  product: ProductType;
}

export function Card({ product }: CardType) {
  return (
    <Link to={`/produtos/${product.productCategory}/${product.id}`}>
      <article>
        <div>
          <img src={product.imgSrc} />
        </div>
        <div>
          <span>
            {product.productCategory} - {product.productType}
          </span>
          <span>{product.productName}</span>
          <span></span>
          <span>R${product.productPrice},00</span>
        </div>
      </article>
    </Link>
  );
}
