import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

import ProductSkeleton from "./ProductSkeleton";
import Product from "./Product/Product";

const ProductListing = React.memo(({ products, isLoading, setIsLoading }) => {
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
          {finalProducts.map((product, index) => {
            return <Product product={product} key={index} />;
          })}
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