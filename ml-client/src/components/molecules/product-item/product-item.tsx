import React from "react";
import { ProductItemWrapper, PriceWrapper } from "./styles";
import { ProductItemTemplate } from "~/components/templates";
import { Image, Icon } from "~/components/atoms";
import FreeShiping from "~/assets/ic_shipping.png";
import FreeShiping2x from "~/assets/ic_shipping@2x.png";

interface Props {
  image: string;
  alt: string;
  price: string;
  description: string;
  city: string;
  status: "free-shipping" | "none";
}

const ProductItem = ({
  price,
  description,
  city,
  image,
  alt,
  status
}: Props) => {
  return (
    <ProductItemWrapper>
      <ProductItemTemplate
        image={<Image src={image} alt={alt} />}
        price={
          <PriceWrapper>
            <strong>{price}</strong>
            {status === "free-shipping" && (
              <Icon srcSet={`${FreeShiping}, ${FreeShiping2x} 2x`} />
            )}
          </PriceWrapper>
        }
        description={<p>{description}</p>}
        city={<p className="city">{city}</p>}
      />
    </ProductItemWrapper>
  );
};

export default ProductItem;
