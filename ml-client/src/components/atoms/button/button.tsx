import React from "react";
import { ButtonWrapper } from "./styles";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  color?: Color;
  children: JSX.Element | string;
  size?: Size;
  onClick?: () => void;
}

const Button = ({
  primary = false,
  secondary = false,
  color = "default",
  children,
  size = "medium",
  onClick = () => {}
}: Props) => {
  return (
    <ButtonWrapper
      className="button"
      primary={primary}
      secondary={secondary}
      color={color}
      size={size}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
