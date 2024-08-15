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
      <main className="cart">
        <div>
          <h3>SUA CESTA</h3>
          <span></span>
        </div>
        <div className="cards">
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
        <div>
          <Pagination
            handlePageChange={handlePageChange}
            qntOfPages={QNT_OF_PAGES_BASKET_PRODUCTS}
          />
          <div>
            <span>Total: </span>
            <button></button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
