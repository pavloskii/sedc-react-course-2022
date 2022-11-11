/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Pagination.css";

function createPagesArray(totalPages) {
  const pagesArray = [];

  for (let index = 1; index <= totalPages; index++) {
    pagesArray.push(index);
  }

  return pagesArray;
}

export function Pagination({ totalPages, page, setPage }) {
  const pages = createPagesArray(totalPages);

  function decrementPageNumber(event) {
    event.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function incrementPageNumber(event) {
    event.preventDefault();
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <div className="pagination">
      <a href="#" onClick={decrementPageNumber}>
        &laquo;
      </a>
      {pages.map((numberOfPage) => (
        <a
          key={numberOfPage}
          href="#"
          className={page === numberOfPage ? "active" : undefined}
          onClick={(event) => {
            event.preventDefault();
            setPage(numberOfPage);
          }}
        >
          {numberOfPage}
        </a>
      ))}
      <a href="#" onClick={incrementPageNumber}>
        &raquo;
      </a>
    </div>
  );
}
