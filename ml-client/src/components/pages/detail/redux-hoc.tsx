import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Detail } from "./";
import { fetchCurrentProduct } from "~/store/products/actions";
import { getLoading } from "~/store/loading/selectors";

const DetailHOC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchCurrentProduct());
  }, []);

  return <Detail loading={loading} />;
};

export default DetailHOC;
