import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

import ProductSkeleton from "./ProductSkeleton";
import Product from "./Product/Product";
import GuidePagination from "../../Common/Pagination/GuidePagination";
import Pagenation from "../Pagination/pagination";

const ProductListing = React.memo(({ products, isLoading, setIsLoading }) => {
  const [visibleProducts, setVisibleProducts] = useState(25);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [products, setIsLoading]);

  const productsWithAttributeGroup = {};
  products.forEach((product) => {
    const productCopy = { ...product };
    const productAttributes = {};
    product.attributes.forEach((attribute) => {
      const categoryName = attribute.attribute_category.name;
      if (!productAttributes[categoryName]) {
        productAttributes[categoryName] = [];
      }
      productAttributes[categoryName].push(attribute);
    });
    productCopy.attributes = productAttributes;
    productsWithAttributeGroup[product.name] = productCopy;
  });
  const finalProducts = Object.values(productsWithAttributeGroup);

  // implementing loadmore and  pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 25;
  const totalPages = Math.ceil(finalProducts.length / productsPerPage);

  const currentProducts = finalProducts.slice(
    (currentPage - 1) * productsPerPage,
    visibleProducts
  );
  const loadMore = () => {
    const nextPage = currentPage;
    setCurrentPage(nextPage);
    setVisibleProducts(
      (prevVisibleProducts) => prevVisibleProducts + productsPerPage
    );
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setVisibleProducts(pageNumber * productsPerPage);
  };

  return (
    <div className="best-product-wrapper">
      {isLoading ? (
        <>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </>
      ) : (
        <>
          {currentProducts.map((product, index) => {
            return (
              <>
                <Product
                  currentPage={currentPage}
                  setCurrentPage={currentPage}
                  productsPerPage={productsPerPage}
                  product={product}
                  key={index}
                />
              </>
            );
          })}
          {totalPages > 1 && (
            <section className="paginationSec pb-5">
              <Container>
                <GuidePagination
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  setPageData={currentProducts}
                  loadMore={loadMore}
                  paginate={paginate}

                  // setLoadMore={setLoadMore}
                />
              </Container>
            </section>
          )}
        </>
      )}

      <div className="text-center d-none">
        <Button className="see_all_btn_filled">
          Load More Products <i className="ri-arrow-down-s-line"></i>
        </Button>
      </div>
    </div>
  );
});
ProductListing.displayName = "ProductListing";
export default ProductListing;
// fsfsdfsdf
