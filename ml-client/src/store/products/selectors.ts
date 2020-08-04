const getInitial = (state: ReduxStore) => {
  return state.products;
};

export const getProducts = (state: ReduxStore) => {
  return getInitial(state).products.slice(0, 4);
};

export const getCurrentProduct = (state: ReduxStore) => {
  return getInitial(state).currentProduct;
};

export const getProductById = (state: ReduxStore, id: string) => {
  const { products } = getInitial(state);
  const product = products.find((item) => item.id === id);
  return product;
};
