import { Middleware, AnyAction } from "redux";
import { setText } from "./actions";
import { fetchProducts } from "../products/actions";
import { push } from "connected-react-router";

const SearchMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action: AnyAction
) => {
  if (action.type === "@@router/LOCATION_CHANGE") {
    const {
      router: {
        location: { query }
      }
    }: ReduxStore = getState();
    if (query) {
      const { search = "" } = query;
      if (search) {
        dispatch(setText(search));
        dispatch(fetchProducts());
      } else {
        dispatch(setText(""));
      }
    }
  }
  if (action.type === "START-FETCHING-PRODUCTS") {
    const {
      router: {
        location: { pathname }
      },
      search: { text }
    }: ReduxStore = getState();
    if (pathname.split("/").length > 2) {
      dispatch(push(`/items?search=${text}`));
    }
  }
  return next(action);
};

export default SearchMiddleware;
