import React from "react";
import { useSelector } from "react-redux";
import { ProductList } from "./";
import { getProducts } from "~/store/products/selectors";

const ProductListHOC = () => {
  const products = useSelector(getProducts);

  return <ProductList products={products} />;
};

export default ProductListHOC;
