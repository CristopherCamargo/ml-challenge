type ProductsActionsTypes =
  | {
      type: "START-FETCHING-PRODUCTS";
    }
  | {
      type: "END-FETCHING-PRODUCTS";
    }
  | {
      type: "NORMALIZE-PRODUCTS";
      payload: FetchProducts;
    }
  | {
      type: "NORMALIZE-DETAIL";
      payload: FetchProductDetail;
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
