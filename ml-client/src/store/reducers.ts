import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";

// Reducers
import LoadingReducer from "~/store/loading";
import ProductsReducer from "~/store/products";
import SearchReducer from "~/store/search";
import ErrorReducer from "~/store/error";

export const AppReducers = (history: History<LocationState>) =>
  combineReducers({
    loading: LoadingReducer,
    products: ProductsReducer,
    search: SearchReducer,
    router: connectRouter(history),
    error: ErrorReducer
  });
