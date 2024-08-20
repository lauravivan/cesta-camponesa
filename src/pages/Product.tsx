import { useParams, useLocation } from "react-router-dom";
import { Breadcrumb, Card, Footer, Header, SelectQnt } from "../components";
import { products } from "../util";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RefObject, useEffect, useRef, useState } from "react";
import { getBasket, setBasket } from "../util/localStorage";

export function Product() {
  const location = useLocation();
  const { id } = useParams();
  const selectQntRef: RefObject<HTMLDivElement> = useRef(null);
  const product = products.filter((prod) => prod.id === id)[0];
  const firstPage = location.pathname.split("/")[1];
  const [basketState, setBasketState] = useState(getBasket());

  useEffect(() => {
    setBasket(basketState);
  }, [basketState]);

  const crumbs = [
    {
      desc: firstPage,
      link: `/${firstPage}`,
    },
    {
      desc: product.productCategory,
      link: `/${firstPage}/${product.productCategory}`,
    },
    {
      desc: product.productName,
      link: `/${firstPage}/${product.productCategory}/${product.id}`,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const productsSameCategory = products.filter(
    (prod) => prod.productCategory === product.productCategory
  );

  const handleCartAddition = () => {
    let newQnt: number = 0;

    if (selectQntRef && selectQntRef.current) {
      newQnt = Number(selectQntRef.current.innerText);
    }

    setBasketState((prevVal) => {
      const basket = [...prevVal];

      const productFind = basket.filter((p) => p.product.id === product.id)[0];

      if (productFind) {
        for (const b of basket) {
          if (b.product.id === product.id) {
            const sum = newQnt + b.selectedQnt;
            if (sum <= b.product.productStock) {
              b.selectedQnt += newQnt;
            }
          }
        }
      } else {
        basket.push({
          product: product,
          selectedQnt: newQnt,
        });
      }

      return basket;
    });
  };

  return (
    <>
      <Header />
      <main className="product main">
        <Breadcrumb crumbs={crumbs} />
        <div className="product__info">
          <div className="product__info--imgs">
            <div className="product__info--imgs-main">
              <img src={product.imgPath} />
            </div>
            <div className="product__info--imgs--gallery">
              <div>
                <img src={product.imgPath} />
              </div>
              <div>
                <img src={product.imgPath} />
              </div>
              <div>
                <img src={product.imgPath} />
              </div>
            </div>
          </div>
          <div className="product__info--info">
            <div>
              <h1>{product.productName.toUpperCase()}</h1>
              <p>{product.productDesc}</p>
              <span>Preço: R${product.productPrice},00</span>
              <div>
                <span>Quantidade:</span>
                <SelectQnt qnt={product.productStock} ref={selectQntRef} />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="button"
                onClick={handleCartAddition}
              >
                Colocar na cesta
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3>VEJA OUTROS PRODUTOS DA MESMA CATEGORIA</h3>
          <Carousel responsive={responsive}>
            {productsSameCategory.map((prod, i) => (
              <div key={i}>
                <Card product={prod} />
              </div>
            ))}
          </Carousel>
        </div>
      </main>
      <Footer />
    </>
  );
}
