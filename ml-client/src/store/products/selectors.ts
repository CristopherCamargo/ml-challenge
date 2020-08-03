const getInitial = (state: ReduxStore) => {
  return state.products;
};

export const getProducts = (state: ReduxStore) => {
  return getInitial(state).products;
};

export const getCurrentProduct = (state: ReduxStore) => {
  return getInitial(state).currentProduct;
};
