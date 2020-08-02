import React from "react";
import {
  ProductItemTemplateWrapper,
  City,
  Thumbnail,
  Description,
  Information,
  Price
} from "./styles";

interface Props {
  image: JSX.Element;
  price: JSX.Element;
  description: JSX.Element;
  city: JSX.Element;
}

const ProductItemTemplate = ({ image, price, description, city }: Props) => {
  return (
    <ProductItemTemplateWrapper>
      <Thumbnail>{image}</Thumbnail>
      <Information>
        <Price>{price}</Price>
        <Description>{description}</Description>
      </Information>
      <City>{city}</City>
    </ProductItemTemplateWrapper>
  );
};

export default ProductItemTemplate;
