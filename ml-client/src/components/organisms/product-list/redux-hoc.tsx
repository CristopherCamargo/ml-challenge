import React from "react";
import { ProductList } from "./";

const ProductListHOC = () => {
  const products = [
    {
      id: "1"
    },
    {
      id: "2"
    },
    {
      id: "3"
    },
    {
      id: "4"
    }
  ];
  return <ProductList products={products} />;
};

export default ProductListHOC;
