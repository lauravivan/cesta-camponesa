import { useParams, useLocation } from "react-router-dom";
import { Header, Footer, Breadcrumb, Pagination } from "../components";
import { Card } from "../components/Card";
import {
  DEFAULT_PRODUCTS_PER_PAGE,
  filters,
  getFilters,
  getProductsPerPage,
  QNT_OF_PAGES,
  setFilters,
  setSort,
  sorts,
} from "../util";
import { useEffect, useState, RefObject, useRef } from "react";

interface ProductsType {
  products: ProductType[];
}

export function Products({ products }: ProductsType) {
  const { category } = useParams();
  const location = useLocation();
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isSortActive, setIsSortActive] = useState(false);
  const [prods, setProds] = useState(() => [...products]);
  const [sortSelected, setSortSelected] = useState("");
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [filtersSelected, setFiltersSelected] = useState(getFilters());
  const firstPage = location.pathname.split("/")[1];
  const pageRef: RefObject<HTMLDivElement> = useRef(null);
  const [productsToShowPerPage, setProductsToShowPerPage] = useState({
    lastIndex: getProductsPerPage()[0],
    products: prods.slice(0, getProductsPerPage()[0]),
  });
  const crumbs = [
    {
      desc: firstPage,
      link: `/${firstPage}`,
    },
  ];

  useEffect(() => {
    setSort(sortSelected);
  }, [sortSelected]);

  useEffect(() => {
    setFilters(filtersSelected);
  }, [filtersSelected]);

  useEffect(() => {
    if (pageRef && pageRef.current) {
      setProductsToShowPerPage((prevVal) => {
        const p = [...prevVal.products];
        return {
          lastIndex:
            prevVal.lastIndex +
            getProductsPerPage()[Number(pageRef.current?.innerText)],
          products: p.slice(
            getProductsPerPage()[Number(pageRef.current?.innerText)]
          ),
        };
      });
    }
  }, [pageRef]);

  useEffect(() => {
    if (category) {
      setProds(
        products.filter((product) => product.productCategory == category)
      );
      crumbs.push({
        desc: category,
        link: `/${firstPage}/${category}`,
      });
    }

    if (location.search) {
      const userSearch = location.search.split("=")[1];

      setProds(
        products.filter((prod) =>
          prod.productName.toLowerCase().includes(userSearch.toLowerCase())
        )
      );
    }
  }, []);

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
        <div>
          {isFilterActive && (
            <div>
              {filters.map((filter, i) => (
                <div key={i}>
                  <div className="filter-btn">
                    <button onClick={handleFilterOptions}>{filter.desc}</button>
                    <div
                      className={`filter-btn__filter-options ${
                        showFilterOptions
                          ? "filter-btn__filter-options-show"
                          : ""
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
                </div>
              ))}
            </div>
          )}
          {isSortActive && (
            <div>
              {sorts.map((sort, i) => (
                <div key={i} onClick={handleSortSelection.bind(self, sort)}>
                  <div>{sort}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div>
            <h3>
              {category ? `${category.toUpperCase()}` : "PRODUTOS"} DISPONÍVEIS
            </h3>
            <span>Foram encontrados {products.length} produtos</span>
          </div>
          <div>
            {productsToShowPerPage.products.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </div>
          <div>
            <Pagination ref={pageRef} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
