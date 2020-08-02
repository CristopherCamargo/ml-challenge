import React from "react";
import { NavBarWrapper } from "./styles";
import { NavBarTemplate } from "~/components/templates";
import { Logo } from "~/components/atoms";
import { Search } from "~/components/molecules";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarTemplate search={<Search />} logo={<Logo />} />
    </NavBarWrapper>
  );
};

export default NavBar;
