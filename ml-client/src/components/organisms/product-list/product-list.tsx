import React from "react";
import { ProductListWrapper } from "./styles";
import { ProductItemHOC } from "~/components/molecules";
import { ListTemplate } from "~/components/templates/list-template";

interface Props {
  products: Products[];
}

const ProductList = ({ products }: Props) => {
  return (
    <ListTemplate
      list={
        <ProductListWrapper>
          {products.map((product) => (
            <ProductItemHOC id={product.id} />
          ))}
        </ProductListWrapper>
      }
    />
  );
};

export default ProductList;
