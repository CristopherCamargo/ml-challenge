import { Middleware, AnyAction } from "redux";
import { setError } from "./actions";

const ErrorMiddleware: Middleware = ({ dispatch }) => (next) => (
  action: AnyAction
) => {
  if (action.type === "@@router/LOCATION_CHANGE") {
    dispatch(setError(false));
  }
  return next(action);
};

export default ErrorMiddleware;
