import React from "react";
import { ProductBuyWrapper } from "./styles";
import { Button } from "~/components/atoms";

interface Props {
  status: string;
  quantity: string;
  title: string;
  price: string;
}

const ProductBuy = ({ status, quantity, title, price }: Props) => {
  return (
    <ProductBuyWrapper>
      <span>
        {status} - {quantity} Vendidos
      </span>
      <h2>{title}</h2>
      <strong>{price}</strong>
      <Button primary>Comprar</Button>
    </ProductBuyWrapper>
  );
};

export default ProductBuy;
