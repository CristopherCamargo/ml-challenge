import React from "react";
import {
  ProductDetailTemplateWrapper,
  Top,
  Bottom,
  Image,
  Aside
} from "./styles";

interface Props {
  image: JSX.Element;
  aside: JSX.Element;
  description: JSX.Element;
}

const ProductDetailTemplate = ({ image, aside, description }: Props) => {
  return (
    <ProductDetailTemplateWrapper>
      <Top>
        <Image>{image}</Image>
        <Aside>{aside}</Aside>
      </Top>
      <Bottom>{description}</Bottom>
    </ProductDetailTemplateWrapper>
  );
};

export default ProductDetailTemplate;
