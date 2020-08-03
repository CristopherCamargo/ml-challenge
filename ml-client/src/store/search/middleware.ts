import { Middleware, AnyAction } from 'redux';

const SearchMiddleware: Middleware = ({ getState, dispatch }) => next => (
  action: AnyAction
) => {
  return next(action);
}

export default SearchMiddleware;