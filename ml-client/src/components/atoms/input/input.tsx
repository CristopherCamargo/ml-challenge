import React from "react";
import { InputWrapper } from "./styles";

interface Props {
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
}

const Input = ({ value, placeholder, onChange = () => {} }: Props) => {
  return (
    <InputWrapper
      className="input"
      placeholder={placeholder}
      {...(value && { value })}
      onChange={({ target: { value } }) => onChange(value || "")}
    ></InputWrapper>
  );
};

export default Input;
