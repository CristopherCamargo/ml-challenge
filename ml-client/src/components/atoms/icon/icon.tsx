import React from "react";
import { IconWrapper } from "./styles";

interface Props {
  size?: Size;
  src?: string;
  srcSet?: string;
}

const Icon = ({ src = "", size = "small", srcSet = "" }: Props) => {
  return <IconWrapper src={src} srcSet={srcSet} size={size}></IconWrapper>;
};

export default Icon;
