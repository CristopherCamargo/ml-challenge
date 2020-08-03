import initialState from "./init-state";

export const setProducts = (
  state: ProductsStore,
  action: ProductsActionsTypes
) => {
  if (action.type === "SET-PRODUCTS") {
    return {
      ...state,
      products: action.payload
    };
  }
  return state;
};

export const setCurrentProduct = (
  state: ProductsStore,
  action: ProductsActionsTypes
) => {
  if (action.type === "SET-CURRENT_PRODUCT") {
    return {
      ...state,
      currentProduct: action.payload
    };
  }
  return state;
};

const actions: Record<
  string,
  (state: ProductsStore, action: ProductsActionsTypes) => ProductsStore
> = {
  "SET-PRODUCTS": setProducts,
  "SET-CURRENT_PRODUCT": setCurrentProduct
};

const ProductsReducer = (
  state: ProductsStore = initialState,
  action: ProductsActionsTypes
): ProductsStore => {
  const handler = actions[action.type];

  if (typeof handler === "function") {
    return handler(state, action);
  }

  return state;
};

export default ProductsReducer;
