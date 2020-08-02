import React from "react";
import { NavBarHOC, ProductListHOC } from "~/components/organisms";

const Home = () => {
  return (
    <>
      <NavBarHOC />
      <ProductListHOC />
    </>
  );
};

export default Home;
