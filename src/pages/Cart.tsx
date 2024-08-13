import { useState } from "react";
import { Card, Footer, Header } from "../components";
import { getBasket } from "../util";

export function Cart() {
  const [basketState, setBasketState] = useState(getBasket());
  return (
    <>
      <Header />
      <main>
        <div>
          <h3>SUA CESTA</h3>
          <span></span>
        </div>
        <div>
          {basketState.length > 0 &&
            basketState.map((basket, i) => (
              <div key={i}>
                <Card
                  product={basket.product}
                  showSelectQnt={true}
                  selectedQnt={basket.selectedQnt}
                />
              </div>
            ))}
        </div>
        <div>
          <span>Total: </span>
          <button></button>
        </div>
      </main>
      <Footer />
    </>
  );
}
