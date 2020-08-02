import React from "react";
import { ProductItem } from "./";

interface Props {
  id: string;
}

const ProductItemHOC = ({ id }: Props) => {
  return (
    <ProductItem
      alt="first"
      description="Descripcion completa"
      price="$1980"
      city="Bogota"
      image="https://mac-center.com/wp-content/uploads/2020/06/Position-2-8-1.jpg"
      status="free-shipping"
    />
  );
};

export default ProductItemHOC;
