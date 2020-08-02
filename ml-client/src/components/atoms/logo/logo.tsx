import React from "react";
import { LogoWrapper } from "./styles";
import LogoML from "~/assets/Logo_ML.png";
import LogoMLX2 from "~/assets/Logo_ML@2x.png";

const Logo = () => {
  return (
    <LogoWrapper
      srcSet={`${LogoML}, ${LogoMLX2} 2x`}
      alt="Mercado Libre - Compra y vende"
    />
  );
};

export default Logo;
