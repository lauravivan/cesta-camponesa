import { useEffect, useState } from "react";

interface PaginationType {
  handlePageChange: (page: number) => void;
  qntOfPages: number;
}

export function Pagination({ handlePageChange, qntOfPages }: PaginationType) {
  const pages = Array(qntOfPages)
    .fill(0)
    .map((_, i) => i + 1);
  const [pageSelected, setPageSelected] = useState(1);

  useEffect(() => {
    handlePageChange(pageSelected);
  }, [pageSelected]);

  const handlePageDec = () => {
    setPageSelected((prevPage) => {
      const page = prevPage - 1;
      if (page > 0) {
        return page;
      }
      return prevPage;
    });
  };

  const handlePageInc = () => {
    setPageSelected((prevPage) => {
      const page = prevPage + 1;
      if (page <= pages.length) {
        return page;
      }

      return prevPage;
    });
  };

  return (
    <div className="pagination">
      <div className="pagination__navigation" onClick={handlePageDec}>
        Anterior
      </div>
      {pages.map((page, i) => (
        <div
          className={`pagination__page-number ${
            page === pageSelected
              ? "pagination__page-number--page-selected"
              : ""
          }`}
          key={i}
          onClick={() => {
            setPageSelected(page);
            handlePageChange(page);
          }}
        >
          {page}
        </div>
      ))}
      <div className="pagination__navigation" onClick={handlePageInc}>
        Próxima
      </div>
    </div>
  );
}
