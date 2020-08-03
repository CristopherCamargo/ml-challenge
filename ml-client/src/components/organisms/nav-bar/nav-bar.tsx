import React from "react";
import { NavBarWrapper } from "./styles";
import { NavBarTemplate } from "~/components/templates";
import { Logo } from "~/components/atoms";
import { SearchHOC } from "~/components/molecules";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarTemplate search={<SearchHOC />} logo={<Logo />} />
    </NavBarWrapper>
  );
};

export default NavBar;
