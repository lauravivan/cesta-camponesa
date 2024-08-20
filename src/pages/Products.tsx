import { useParams, useLocation } from "react-router-dom";
import {
  Header,
  Footer,
  Breadcrumb,
  Pagination,
  Dropdown,
} from "../components";
import { Card } from "../components/Card";
import {
  filters,
  sorts,
  getAllProductsInPage,
  QNT_OF_PAGES_PRODUCTS_DEFAULT,
  getProductsByNavigationCategory,
  getProductsBySearch,
  getProductsByFilter,
} from "../util";
import { ReactNode, useEffect, useState } from "react";

interface ProductsType {
  products: ProductType[];
}

export function Products({ products }: ProductsType) {
  const { category } = useParams();
  const location = useLocation();
  const [pageSelected, setPageSelected] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(() => {
    if (category) {
      return getProductsByNavigationCategory(products, category);
    } else if (location.search) {
      return getProductsBySearch(products, location.search);
    }

    return products;
  });
  const firstPage = location.pathname.split("/")[1];
  const [filterContainerContent, setFilterContainerContent] =
    useState<ReactNode>(<div></div>);
  const [paginatedProducts, setPaginatedProducts] = useState(
    getAllProductsInPage(filteredProducts, pageSelected)
  );

  const crumbs = [
    {
      desc: firstPage,
      link: `/${firstPage}/`,
    },
    {
      desc: category ? category.replace("%", "") : "",
      link: category ? `/${firstPage}/${category}` : "",
    },
  ];

  useEffect(() => {
    setPaginatedProducts(getAllProductsInPage(filteredProducts, pageSelected));
  }, [filteredProducts, pageSelected]);

  const handleFilterClick = () => {
    setFilterContainerContent((prevVal) => {
      if (Array.isArray(prevVal)) {
        return <div></div>;
      }

      return filters.map((filter, i) => {
        return (
          <Dropdown
            key={i}
            desc={filter.desc}
            options={filter.options}
            handleOptionSelect={handleOptionSelect}
          />
        );
      });
    });
  };

  const handleSortClick = () => {
    setFilterContainerContent((prevVal) => {
      if (Array.isArray(prevVal)) {
        return <div></div>;
      }

      return sorts.map((sort, i) => {
        return (
          <div className="products__sort-btn" key={i}>
            {sort}
          </div>
        );
      });
    });
  };

  const handlePageChange = (page: number) => {
    setPageSelected(page);
  };

  const handleOptionSelect = (filters: FilterType[]) => {
    setFilteredProducts(getProductsByFilter(filteredProducts, filters));
  };

  return (
    <>
      <Header />
      <main className="products main">
        <div className="products__header">
          <Breadcrumb crumbs={crumbs} />
          <div className="products__header--buttons">
            <div onClick={handleFilterClick} className="button-2">
              <ion-icon name="filter-sharp"></ion-icon>
            </div>
            <div onClick={handleSortClick} className="button-2">
              <ion-icon name="swap-vertical-sharp"></ion-icon>
            </div>
          </div>
        </div>
        <div className="products__filter-container">
          {filterContainerContent}
        </div>
        <div className="products__products">
          <div className="products__products--title-container">
            <h3>PRODUTOS DISPONÍVEIS</h3>
            {filteredProducts.length > 0 && (
              <span>Foram encontrados {filteredProducts.length} produtos</span>
            )}
            {filteredProducts.length === 0 && (
              <span>Não foram encontrados produtos</span>
            )}
          </div>
          {paginatedProducts.length > 0 && (
            <div className="cards">
              {paginatedProducts.map((product) => (
                <Card key={product.id} product={product} isLinkable={true} />
              ))}
            </div>
          )}
          <div className="products__pagination-container">
            <Pagination
              handlePageChange={handlePageChange}
              qntOfPages={QNT_OF_PAGES_PRODUCTS_DEFAULT}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
