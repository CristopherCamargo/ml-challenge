export const fetchProducts = (): ProductsActionsTypes => ({
  type: "START-FETCHING-PRODUCTS"
});

export const fetchCurrentProduct = (): ProductsActionsTypes => ({
  type: "START-FETCHING-CURRENT-PRODUCT"
});

export const normalizeProducts = (
  payload: FetchProducts
): ProductsActionsTypes => ({
  type: "NORMALIZE-PRODUCTS",
  payload
});

export const normalizeCurrentProduct = (
  payload: FetchProductDetail
): ProductsActionsTypes => ({
  type: "NORMALIZE-DETAIL",
  payload
});

export const setProducts = (payload: Product[]): ProductsActionsTypes => ({
  type: "SET-PRODUCTS",
  payload
});

export const setCurrentProduct = (payload: Product): ProductsActionsTypes => ({
  type: "SET-CURRENT_PRODUCT",
  payload
});

export const endFetchProducts = (): ProductsActionsTypes => ({
  type: "END-FETCHING-PRODUCTS"
});

export const endFetchCurrentProduct = (): ProductsActionsTypes => ({
  type: "END-FETCHING-CURRENT-PRODUCT"
});
