import React, { useCallback } from "react";
import { ProductItem } from "./";
import { useSelector } from "react-redux";
import { getProductById } from "~/store/products/selectors";

interface Props {
  id: string;
}

const ProductItemHOC = ({ id }: Props) => {
  const product = useSelector((state: ReduxStore) => getProductById(state, id));
  const urlItem = `/items/${id}`;

  if (!product) {
    return null;
  }

  return (
    <ProductItem
      alt="first"
      urlItem={urlItem}
      description={product.shortDescription}
      price={`$ ${new Intl.NumberFormat("de-DE", {
        currency: product.currency
      }).format(product.price)}`}
      city={product.city}
      image={product.imageURI}
      status={product.status}
    />
  );
};

export default ProductItemHOC;
