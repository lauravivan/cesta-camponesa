import { useParams, useLocation } from "react-router-dom";
import { Breadcrumb, Card, Footer, Header } from "../components";
import { products } from "../util";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Product() {
  const location = useLocation();
  const { id } = useParams();

  const product = products.filter((prod) => prod.id === Number(id))[0];

  const firstPage = location.pathname.split("/")[1];

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

  return (
    <>
      <Header />
      <main>
        <Breadcrumb crumbs={crumbs} />
        <div>
          <div>
            <div>
              <img />
            </div>
            <div>
              <div>
                <img />
              </div>
              <div>
                <img />
              </div>
              <div>
                <img />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1>{product.productName.toUpperCase()}</h1>
              <p></p>
              <span>Preço: R${product.productPrice},00</span>
              <div>
                <span>Quantidade:</span>
                <form>
                  <select></select>
                </form>
              </div>
            </div>
            <div>
              <button>Colocar na cesta</button>
            </div>
          </div>
        </div>
        <div>
          <h3>VEJA OUTROS PRODUTOS DA MESMA CATEGORIA</h3>
          <Carousel responsive={responsive}>
            {productsSameCategory.map((prod) => (
              <Card product={prod} />
            ))}
          </Carousel>
        </div>
      </main>
      <Footer />
    </>
  );
}
