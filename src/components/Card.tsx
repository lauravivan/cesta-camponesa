import { Link } from "react-router-dom";
import { SelectQnt } from "./SelectQnt";

interface CardType {
  product: ProductType;
  showSelectQnt: boolean;
  selectedQnt?: number;
}

export function Card({
  product,
  showSelectQnt = false,
  selectedQnt,
}: CardType) {
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
          <span>Em estoque: </span>
          {showSelectQnt && (
            <span>
              Quantidade: <SelectQnt qnt={selectedQnt!} />
            </span>
          )}
          <span>R${product.productPrice},00</span>
        </div>
      </article>
    </Link>
  );
}
