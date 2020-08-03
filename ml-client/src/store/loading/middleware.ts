import { Middleware, AnyAction } from 'redux';

const LoadingMiddleware: Middleware = ({ getState, dispatch }) => next => (
  action: AnyAction
) => {
  return next(action);
}

export default LoadingMiddleware;