import React from "react";
import { SearchTemplateWrapper, Left, Right } from "./styles";

interface Props {
  input: JSX.Element;
  button: JSX.Element;
}

const SearchTemplate = ({ input, button }: Props) => {
  return (
    <SearchTemplateWrapper>
      <Left>{input}</Left>
      <Right>{button}</Right>
    </SearchTemplateWrapper>
  );
};

export default SearchTemplate;
