import { Pagination } from "react-bootstrap";
export default function Pagenation({
  NextPageData,
  totalPages,
  setCurrentPage,
  currentPage,
  setPageData,
  setStartIndex,
  itemsPerPage,
}) {
  const pagesArray = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPageData(16*pageNumber)
    setStartIndex((pageNumber - 1) * itemsPerPage)
  };
  const lastPageData = () => {
    setCurrentPage(totalPages);
    setPageData(prev=>prev*totalPages);
    setStartIndex((totalPages - 1) * itemsPerPage)
  };
  return (
    <>
      <Pagination className="pagination-group">
        {pagesArray?.map((item, index) => {
          return (
            <>
              <Pagination.Item
                className="pagination-items"
                onClick={() => {
                  handlePageClick(item);
                }}
                active={currentPage == item}
              >
                {item}
              </Pagination.Item>
            </>
          );
        })}
        <Pagination.Next className=" pagination-next" disabled={currentPage == totalPages} onClick={NextPageData} />
        <Pagination.Last className=" pagination-last" onClick={lastPageData}/>
      </Pagination>
    </>
  );
}
