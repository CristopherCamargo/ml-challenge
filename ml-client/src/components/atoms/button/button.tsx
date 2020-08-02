import React from "react";
import { ButtonWrapper } from "./styles";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  color?: Color;
  children: JSX.Element;
  size?: Size;
}

const Button = ({
  primary = false,
  secondary = false,
  color = "default",
  children,
  size = "medium"
}: Props) => {
  return (
    <ButtonWrapper
      className="button"
      primary={primary}
      secondary={secondary}
      color={color}
      size={size}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
