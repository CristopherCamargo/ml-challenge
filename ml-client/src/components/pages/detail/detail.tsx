import React, { useMemo } from "react";
import { NavBarHOC, ProductDetailHOC } from "~/components/organisms";
import { Loading } from "~/components/atoms";
import { render } from "enzyme";

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
      {renderMemo}
    </>
  );
};

export default Detail;
