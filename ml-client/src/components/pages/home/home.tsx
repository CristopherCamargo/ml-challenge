import React, { useMemo } from "react";
import { NavBarHOC, ProductListHOC } from "~/components/organisms";
import { Empty, Loading, ErrorHOC } from "~/components/atoms";

interface Props {
  loading: boolean;
  products: Product[];
}

const Home = ({ loading, products }: Props) => {
  const ProductsMemo = useMemo(() => {
    if (loading) {
      return <Loading />;
    }

    if (!products.length) {
      return <Empty>Bienvenido a Mercado Libre</Empty>;
    }

    return <ProductListHOC />;
  }, [products, loading]);

  return (
    <>
      <NavBarHOC />
      <ErrorHOC />
      {ProductsMemo}
    </>
  );
};

export default Home;
