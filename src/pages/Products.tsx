import { useParams, useLocation } from "react-router-dom";
import { Header, Footer, Breadcrumb } from "../components";
import { Card } from "../components/Card";
import { filters, sorts } from "../util";
import { FilterBtn } from "../components/FilterBtn";
import { ReactElement, useState } from "react";

interface ProductsType {
  products: ProductType[];
}

export function Products({ products }: ProductsType) {
  const { category } = useParams();
  const location = useLocation();
  const [filterSectionContent, setFilterSectionContent] =
    useState<ReactElement>();

  const prods = category
    ? products.filter((product) => product.productCategory == category)
    : products;

  const firstPage = location.pathname.split("/")[1];

  const crumbs = [
    {
      desc: firstPage,
      link: `/${firstPage}`,
    },
  ];

  if (category) {
    crumbs.push({
      desc: category,
      link: `/${firstPage}/${category}`,
    });
  }

  const handleFilterClick = () => {
    setFilterSectionContent(
      <div>
        {filters.map((filter, i) => (
          <div key={i}>
            <FilterBtn desc={filter.desc} options={filter.options} />
          </div>
        ))}
      </div>
    );
  };

  const handleSortClick = () => {
    setFilterSectionContent(
      <div>
        {sorts.map((sort, i) => (
          <div key={i}>
            <div>{sort}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Header />
      <main>
        <div>
          <Breadcrumb crumbs={crumbs}></Breadcrumb>
          <div>
            <div onClick={handleFilterClick}>
              <ion-icon name="filter-sharp"></ion-icon>
            </div>
            <div onClick={handleSortClick}>
              <ion-icon name="swap-vertical-sharp"></ion-icon>
            </div>
          </div>
        </div>
        <div className={`filter-section`}>{filterSectionContent}</div>
        <div>
          <div>
            <h3>
              {category ? `${category.toUpperCase()}` : "PRODUTOS"} DISPONÍVEIS
            </h3>
            <span>Foram encontrados 50 produtos</span>
          </div>
          <div>
            {prods.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
