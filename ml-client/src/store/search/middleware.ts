import { Middleware, AnyAction } from "redux";
import { setText } from "./actions";
import { fetchProducts } from "../products/actions";

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
      }
    }
  }
  return next(action);
};

export default SearchMiddleware;
