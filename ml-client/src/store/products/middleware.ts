import { Middleware, AnyAction } from 'redux';

const ProductsMiddleware: Middleware = ({ getState, dispatch }) => next => (
  action: AnyAction
) => {
  return next(action);
}

export default ProductsMiddleware;