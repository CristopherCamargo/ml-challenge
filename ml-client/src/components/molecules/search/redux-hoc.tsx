import React, { useCallback } from "react";
import { Search } from "./";
import { useSelector, useDispatch } from "react-redux";
import { getText } from "~/store/search/selectors";
import { setText } from "~/store/search/actions";

const SearchHOC = () => {
  const dispatch = useDispatch();
  const text = useSelector(getText);

  const onChangeText = useCallback((text: string) => {
    dispatch(setText(text));
  }, []);

  return <Search value={text} onChange={onChangeText} />;
};

export default SearchHOC;
