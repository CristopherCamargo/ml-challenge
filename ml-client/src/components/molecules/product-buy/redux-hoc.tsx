import React from "react";
import { useSelector } from "react-redux";
import { ProductBuy } from "./";
import { getCurrentProduct } from "~/store/products/selectors";

const ProductBuyHOC = () => {
  const product = useSelector(getCurrentProduct);

  if (!product.price) {
    return null;
  }

  return (
    <ProductBuy
      price={`$ ${new Intl.NumberFormat("de-DE", {
        currency: product.currency
      }).format(product.price)}`}
      quantity={product.quantity.toString()}
      status={product.condition}
      title={product.shortDescription}
    />
  );
};

export default ProductBuyHOC;
