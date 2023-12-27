import { Pagination } from "react-bootstrap";

const Pagenation = ({ totalPages, setCurrentPage, currentPage }) => {
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastPageData = () => {
    setCurrentPage(totalPages);
  };

  const pagesArray = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <>
      <Pagination className="pagination-group">
        {pagesArray?.map((item, index) => {
          return (
            <>
              <Pagination.Item
                className="pagination-items"
                key={index}
                active={currentPage === item}
                onClick={() => handlePageClick(item)}
              >
                {item}
              </Pagination.Item>
            </>
          );
        })}
        <Pagination.Next
          className="pagination-next"
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
        />
        <Pagination.Last
          className=" pagination-last"
          disabled={currentPage === totalPages}
          onClick={lastPageData}
        />
      </Pagination>

      {/* <Pagination>
        <Pagination.First
          disabled={currentPage === 1}
          onClick={() => handlePageClick(1)}
        />
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        />
        {pagesArray.map((item, index) => (
          <Pagination.Item
            key={index}
            active={currentPage === item}
            onClick={() => handlePageClick(item)}
          >
            {item}
          </Pagination.Item>
        ))}

        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
        />
        <Pagination.Last
          disabled={currentPage === totalPages}
          onClick={lastPageData}
        />
      </Pagination> */}
    </>
  );
};

export default Pagenation;
