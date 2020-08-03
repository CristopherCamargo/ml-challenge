import React from "react";
import { EmptyWrapper } from "./styles";

interface Props {
  children: JSX.Element | string;
}

const Empty = ({ children }: Props) => {
  return <EmptyWrapper>{children}</EmptyWrapper>;
};

export default Empty;
