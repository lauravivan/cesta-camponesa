import { useState } from "react";
import { Card, Footer, Header, Pagination } from "../components";
import { getBasketProductsInPage, QNT_OF_PAGES_BASKET_PRODUCTS } from "../util";

export function Cart() {
  const [productsToShow, setProductsToShow] = useState(
    getBasketProductsInPage(1)
  );

  const handlePageChange = (pageNumber: number) => {
    setProductsToShow(getBasketProductsInPage(pageNumber));
  };

  return (
    <>
      <Header />
      <main className="cart main">
        <div className="cart__title">
          <h3>SUA CESTA</h3>
          <span>Há um total de 20 itens na lista</span>
        </div>
        <div className="cart__cards cards">
          {productsToShow.length > 0 &&
            productsToShow.map((basket) => (
              <Card
                key={basket.product.id}
                product={basket.product}
                showSelectQnt={true}
                selectedQnt={basket.selectedQnt}
              />
            ))}
        </div>
        <div className="cart__footer">
          <Pagination
            handlePageChange={handlePageChange}
            qntOfPages={QNT_OF_PAGES_BASKET_PRODUCTS}
          />
          <div className="cart__footer__total">
            <span>
              Total:{" "}
              <span className="cart__footer__total--value">R$200,00</span>
            </span>
            <button className="button">Continuar</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
