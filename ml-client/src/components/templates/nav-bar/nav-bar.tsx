import React from "react";
import { NavBarWrapper, Logo, Search } from "./styles";

interface Props {
  logo: JSX.Element;
  search: JSX.Element;
}

const NavBar = ({ logo, search }: Props) => {
  return (
    <NavBarWrapper>
      <Logo>{logo}</Logo>
      <Search>{search}</Search>
    </NavBarWrapper>
  );
};

export default NavBar;
