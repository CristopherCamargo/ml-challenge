import React, { useMemo } from "react";
import { NavBarHOC, ProductDetailHOC } from "~/components/organisms";
import { Loading, ErrorHOC } from "~/components/atoms";

interface Props {
  loading: boolean;
}

const Detail = ({ loading }: Props) => {
  const renderMemo = useMemo(() => {
    if (loading) {
      return <Loading />;
    }
    return <ProductDetailHOC />;
  }, [loading]);

  return (
    <>
      <NavBarHOC />
      <ErrorHOC />
      {renderMemo}
    </>
  );
};

export default Detail;
