import { Link } from "react-router-dom";
import { SelectQnt } from "./SelectQnt";

interface CardType {
  product: ProductType;
  showSelectQnt?: boolean;
  selectedQnt?: number;
  isLinkable?: boolean;
}

export function Card({
  product,
  showSelectQnt = false,
  selectedQnt,
  isLinkable = false,
}: CardType) {
  const cardContent = (
    <article className="card">
      <div className="card__img-container">
        <img src={product.imgPath} />
      </div>
      <div className="card__content">
        <span className="card__category">
          <span className="card__category--category">
            {product.productCategory}
          </span>
          - {product.productType}
        </span>
        <span className="card__name">{product.productName}</span>
        <span className="card__stock">Em estoque: </span>
        {showSelectQnt && (
          <span className="card__qnt">
            Quantidade: <SelectQnt qnt={selectedQnt!} />
          </span>
        )}
        <span className="card__price">
          R$
          <span className="card__price--price">{product.productPrice},00</span>
        </span>
      </div>
    </article>
  );

  return isLinkable ? (
    <Link to={`/produtos/${product.productCategory}/${product.id}`}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
