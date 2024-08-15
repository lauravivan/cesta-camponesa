import { useParams, useLocation } from "react-router-dom";
import { Header, Footer, Breadcrumb, Pagination } from "../components";
import { Card } from "../components/Card";
import {
  filters,
  getFilters,
  setFilters,
  setSort,
  sorts,
  getAllProductsInPage,
  QNT_OF_PAGES_PRODUCTS_DEFAULT,
} from "../util";
import { useEffect, useState } from "react";

interface ProductsType {
  products: ProductType[];
}

export function Products({ products }: ProductsType) {
  const { category } = useParams();
  const location = useLocation();
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isSortActive, setIsSortActive] = useState(false);
  const [prods, setProds] = useState(() => {
    let p = [...products];

    if (category) {
      p = p.filter(
        (product) =>
          product.productCategory ===
          category.trim().toLowerCase().replaceAll("%20", " ")
      );
    } else if (location.search) {
      const userSearch = location.search.split("=")[1];

      p = p.filter((prod) =>
        prod.productName.toLowerCase().includes(userSearch.toLowerCase())
      );
    }

    return p;
  });
  const [prodsPerPage, setProdsPerPage] = useState(
    getAllProductsInPage(prods, 1)
  );
  const [sortSelected, setSortSelected] = useState("");
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [filtersSelected, setFiltersSelected] = useState(getFilters());
  const firstPage = location.pathname.split("/")[1];

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
    setSort(sortSelected);
  }, [sortSelected]);

  useEffect(() => {
    setFilters(filtersSelected);
  }, [filtersSelected]);

  const handleFilterClick = () => {
    setIsFilterActive((active) => !active);
  };

  const handleSortClick = () => {
    setIsSortActive((active) => !active);
  };

  const handleSortSelection = (sort: string) => {
    setSortSelected(sort);
  };

  const handleFilterSelection = (desc: string, option: string | number) => {
    setFiltersSelected((prevVal) => {
      const fs = [...prevVal];

      const descFind = fs.filter((val) => val.desc === desc)[0];
      const optionsFind = fs.filter((val) => {
        if (val.desc === desc) {
          return val.options;
        }
      })[0].options;

      if (descFind) {
        if (!optionsFind.includes(option)) {
          for (const f of fs) {
            if (descFind.desc === f.desc) {
              f.options.push(option);
            }
          }
        }
      } else {
        fs.push({
          desc: desc,
          options: [option],
        });
      }

      return fs;
    });
  };

  const handleFilterOptions = () => {
    setShowFilterOptions((showOptionsState) => !showOptionsState);
  };

  const handlePageChange = (page: number) => {
    setProdsPerPage(getAllProductsInPage(prods, page));
  };

  return (
    <>
      <Header />
      <main className="products">
        <div className="products__header">
          <Breadcrumb crumbs={crumbs} />
          <div className="products__header--buttons">
            <div onClick={handleFilterClick}>
              <ion-icon name="filter-sharp"></ion-icon>
            </div>
            <div onClick={handleSortClick}>
              <ion-icon name="swap-vertical-sharp"></ion-icon>
            </div>
          </div>
        </div>
        <div className="products__filter-container">
          {isFilterActive &&
            filters.map((filter, i) => (
              <div key={i} className="products__filter-btn">
                <div
                  className="products__filter-btn__btn"
                  onClick={handleFilterOptions}
                >
                  {filter.desc}
                </div>
                <div
                  className={`filter-btn__filter-options ${
                    showFilterOptions ? "filter-btn__filter-options-show" : ""
                  }`}
                >
                  <span>reset</span>
                  {filter.options.map((option, i) => (
                    <span
                      key={i}
                      onClick={handleFilterSelection.bind(
                        self,
                        filter.desc,
                        option
                      )}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          {isSortActive &&
            sorts.map((sort, i) => (
              <div
                className="products__sort-btn"
                key={i}
                onClick={handleSortSelection.bind(self, sort)}
              >
                {sort}
              </div>
            ))}
        </div>
        <div className="products__products">
          <div className="products__products--title-container">
            <h3>
              {category ? `${category.toUpperCase()}` : "PRODUTOS"} DISPONÍVEIS
            </h3>
            {prods.length > 0 && (
              <span>Foram encontrados {products.length} produtos</span>
            )}
            {prods.length === 0 && <span>Não foram encontrados produtos</span>}
          </div>
          {prodsPerPage.length > 0 && (
            <div className="cards">
              {prodsPerPage.map((product) => (
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
