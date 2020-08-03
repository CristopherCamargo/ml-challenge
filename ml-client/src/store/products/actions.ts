export const fetchProducts = (): ProductsActionsTypes => ({
  type: "START-FETCHING-PRODUCTS"
});

export const fetchCurrentProduct = (): ProductsActionsTypes => ({
  type: "START-FETCHING-CURRENT-PRODUCT"
});

export const endFetchProducts = (): ProductsActionsTypes => ({
  type: "END-FETCHING-PRODUCTS"
});

export const endFetchCurrentProduct = (): ProductsActionsTypes => ({
  type: "END-FETCHING-CURRENT-PRODUCT"
});
