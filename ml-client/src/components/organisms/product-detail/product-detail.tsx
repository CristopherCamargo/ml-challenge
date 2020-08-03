import React from "react";
import { Description } from "./styles";
import { ProductDetailTemplate } from "~/components/templates";
import { ProductBuyHOC } from "~/components/molecules";
import { Image } from "~/components/atoms";

interface Props {
  image: string;
  altImage: string;
  description: string;
}

const ProductDetail = ({ image, description, altImage }: Props) => {
  return (
    <ProductDetailTemplate
      image={<Image src={image} alt={altImage} />}
      aside={<ProductBuyHOC />}
      description={
        <Description>
          <h3>Descripcion del producto</h3>
          <p>{description}</p>
        </Description>
      }
    />
  );
};

export default ProductDetail;
