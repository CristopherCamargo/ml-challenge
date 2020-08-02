import React from "react";
import { ListTemplateWrapper } from "./styles";

interface Props {
  list: JSX.Element;
}

const ListTemplate = ({ list }: Props) => {
  return <ListTemplateWrapper>{list}</ListTemplateWrapper>;
};

export default ListTemplate;
