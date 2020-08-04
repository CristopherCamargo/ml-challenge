import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavBarHOC, ProductListHOC } from "~/components/organisms";
import { getProducts } from "~/store/products/selectors";
import { getLoading } from "~/store/loading/selectors";
import { Empty, Loading } from "~/components/atoms";

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
      {ProductsMemo}
    </>
  );
};

export default Home;
