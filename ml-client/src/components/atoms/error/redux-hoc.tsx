import React from "react";
import { useSelector } from "react-redux";
import { Error } from ".";
import { getError } from "~/store/error/selectors";

const ErrorHOC = () => {
  const error = useSelector(getError);

  if (!error) {
    return null;
  }

  return <Error />;
};

export default ErrorHOC;
