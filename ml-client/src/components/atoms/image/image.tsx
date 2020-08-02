import React from "react";
import { ImageWrapper } from "./styles";

interface Props {
  src?: string;
  srcSet?: string;
  alt: string;
}

const Image = ({ src = "", srcSet = "", alt }: Props) => {
  return <ImageWrapper src={src} srcSet={srcSet} alt={alt} />;
};

export default Image;
