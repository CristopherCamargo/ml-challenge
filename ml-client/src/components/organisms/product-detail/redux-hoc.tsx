import React from "react";
import { useSelector } from "react-redux";
import { ProductDetail } from "./";
import { getCurrentProduct } from "~/store/products/selectors";

const ProductDetailHOC = () => {
  const currentProduct = useSelector(getCurrentProduct);

  if (!currentProduct) {
    return null;
  }

  return (
    <ProductDetail
      image={currentProduct.imageURI}
      altImage={currentProduct.shortDescription}
      description={currentProduct.description}
    />
  );
};

export default ProductDetailHOC;
