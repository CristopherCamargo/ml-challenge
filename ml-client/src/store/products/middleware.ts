import { Middleware, AnyAction } from "redux";

import { fetchProductsQuery, fetchProductDetail } from "~/services/products";
import { setFetching } from "~/store/loading/actions";
import {
  normalizeProducts,
  normalizeCurrentProduct,
  setProducts,
  setCurrentProduct,
  endFetchProducts
} from "./actions";
import { normalizerProducts, normalizerProductDetail } from "./normalizer";

const onFetchProducts = async (
  getState: () => ReduxStore,
  dispatch: AsyncDispatch
) => {
  const {
    search: { text }
  } = getState();
  dispatch(setFetching(true));

  try {
    const result = await fetchProductsQuery(text);
    dispatch(normalizeProducts(result));
  } catch (error) {
    throw new Error(error);
  }
};

const onFetchCurrentProduct = async (
  getState: () => ReduxStore,
  dispatch: AsyncDispatch
) => {
  const {
    router: {
      location: { pathname }
    }
  } = getState();
  const id = pathname.split("/")[2];
  dispatch(setFetching(true));
  try {
    const result = await fetchProductDetail(id);
    dispatch(normalizeCurrentProduct(result));
  } catch (error) {
    throw new Error(error);
  }
};

const normalizeFetchProducts = async (
  dispatch: AsyncDispatch,
  action: AnyAction
) => {
  const products = normalizerProducts(action.payload);
  dispatch(setProducts(products));
  dispatch(endFetchProducts());
};

const normalizeFetchProductDetail = async (
  dispatch: AsyncDispatch,
  action: AnyAction
) => {
  const product = normalizerProductDetail(action.payload);
  dispatch(setCurrentProduct(product));
  dispatch(endFetchProducts());
};

const offFetchProducts = (dispatch: AsyncDispatch) => {
  dispatch(setFetching(false));
};

const ProductsMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action: AnyAction
) => {
  const actions: Record<string, Function> = {
    "START-FETCHING-PRODUCTS": () => onFetchProducts(getState, dispatch),
    "END-FETCHING-PRODUCTS": () => offFetchProducts(dispatch),
    "NORMALIZE-PRODUCTS": () => normalizeFetchProducts(dispatch, action),
    "START-FETCHING-CURRENT-PRODUCT": () =>
      onFetchCurrentProduct(getState, dispatch),
    "END-FETCHING-CURRENT-PRODUCT": () => offFetchProducts(dispatch),
    "NORMALIZE-DETAIL": () => normalizeFetchProductDetail(dispatch, action)
  };

  if (actions[action.type]) {
    actions[action.type]();
  }

  return next(action);
};

export default ProductsMiddleware;
