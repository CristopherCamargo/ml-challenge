import React from "react";
import { ProductItemWrapper, PriceWrapper } from "./styles";
import { ProductItemTemplate } from "~/components/templates";
import { Image, Icon } from "~/components/atoms";
import FreeShiping from "~/assets/ic_shipping.png";
import FreeShiping2x from "~/assets/ic_shipping@2x.png";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  alt: string;
  price: string;
  description: string;
  city: string;
  status: "free-shipping" | "none";
  urlItem: string;
}

const ProductItem = ({
  price,
  description,
  city,
  image,
  alt,
  status,
  urlItem
}: Props) => {
  return (
    <ProductItemWrapper>
      <ProductItemTemplate
        image={
          <Link to={urlItem} href={urlItem}>
            <Image src={image} alt={alt} />
          </Link>
        }
        price={
          <PriceWrapper>
            <strong>{price}</strong>
            {status === "free-shipping" && (
              <Icon srcSet={`${FreeShiping}, ${FreeShiping2x} 2x`} />
            )}
          </PriceWrapper>
        }
        description={
          <Link to={urlItem} href={urlItem}>
            <p>{description}</p>
          </Link>
        }
        city={<p className="city">{city}</p>}
      />
    </ProductItemWrapper>
  );
};

export default ProductItem;
