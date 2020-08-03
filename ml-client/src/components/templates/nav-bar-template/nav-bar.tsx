import React from "react";
import { NavBarWrapper, Logo, Search, Center } from "./styles";

interface Props {
  logo: JSX.Element;
  search: JSX.Element;
}

const NavBar = ({ logo, search }: Props) => {
  return (
    <NavBarWrapper>
      <Center>
        <Logo>{logo}</Logo>
        <Search>{search}</Search>
      </Center>
    </NavBarWrapper>
  );
};

export default NavBar;
