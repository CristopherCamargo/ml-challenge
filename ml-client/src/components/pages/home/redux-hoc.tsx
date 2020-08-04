import React from "react";
import { Home } from "./";
import { useSelector } from "react-redux";
import { getProducts } from "~/store/products/selectors";
import { getLoading } from "~/store/loading/selectors";

const HomeHOC = () => {
  const products = useSelector(getProducts);
  const loading = useSelector(getLoading);

  return <Home loading={loading} products={products} />;
};

export default HomeHOC;
