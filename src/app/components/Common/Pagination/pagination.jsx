import { Pagination } from "react-bootstrap";
export default function Pagenation() {
  return (
    <>
      <Pagination className="pagination-group">
        <Pagination.Item className="pagination-items" active>
          {1}
        </Pagination.Item>
        <Pagination.Item className="pagination-items">{2}</Pagination.Item>
        <Pagination.Item className="pagination-items">{3}</Pagination.Item>
        <Pagination.Item className="pagination-items">{4}</Pagination.Item>
        <Pagination.Item className="pagination-items">{5}</Pagination.Item>
        <Pagination.Next className=" pagination-next" />
        <Pagination.Last className=" pagination-last" />
      </Pagination>
    </>
  );
}
