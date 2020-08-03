import React from "react";
import { useSelector } from "react-redux";
import { ProductDetail } from "./";
import { getCurrentProduct } from "~/store/products/selectors";

const ProductDetailHOC = () => {
  const currentProduct = useSelector(getCurrentProduct);
  return <ProductDetail image="" altImage="" description="" />;
};

export default ProductDetailHOC;
