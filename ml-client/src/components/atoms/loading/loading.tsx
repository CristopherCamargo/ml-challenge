import React from "react";
import LoadingAsset from "~/assets/loader.gif";
import { LoadingWrapper } from "./styles";

const Loading = () => {
  return (
    <LoadingWrapper>
      <img src={LoadingAsset} />
    </LoadingWrapper>
  );
};

export default Loading;
