import { forwardRef, useState } from "react";
import { QNT_OF_PAGES } from "../util";

export const Pagination = forwardRef<HTMLDivElement>(function Pagination(
  _,
  ref
) {
  const pages = Array(QNT_OF_PAGES)
    .fill(0)
    .map((_, i) => i + 1);
  const [pageSelected, setPageSelected] = useState(1);

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
      if (page < pages[pages.length - 1]) {
        return page;
      }

      return prevPage;
    });
  };

  return (
    <div>
      <div onClick={handlePageDec}>Anterior</div>
      {pages.map((page, i) => (
        <div key={i} onClick={() => setPageSelected(page)} ref={ref}>
          {page}
        </div>
      ))}
      <div onClick={handlePageInc}>Próxima</div>

      <div>PAGE SELECTED: {pageSelected}</div>
    </div>
  );
});
