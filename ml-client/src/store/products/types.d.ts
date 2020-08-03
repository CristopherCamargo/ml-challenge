type ProductsActionsTypes =
  | {
      type: "START-FETCHING-PRODUCTS";
    }
  | {
      type: "END-FETCHING-PRODUCTS";
    }
  | {
      type: "SET-PRODUCTS";
      payload: Product[];
    }
  | {
      type: "START-FETCHING-CURRENT-PRODUCT";
    }
  | {
      type: "END-FETCHING-CURRENT-PRODUCT";
    }
  | {
      type: "SET-CURRENT_PRODUCT";
      payload: Product;
    };
