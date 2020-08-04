interface SearchStore {
  text: string;
}

interface Route {
  location: {
    pathname: string;
    query: {
      search: string;
    };
  };
  action: string;
}

type ProductStatus = "free-shipping" | "none";

interface Product {
  id: string;
  price: number;
  currency: string;
  decimals: number;
  condition: string;
  shortDescription: string;
  description: string;
  imageURI: string;
  city: string;
  quantity: number;
  status: ProductStatus;
}
interface ProductsStore {
  products: Product[];
  currentProduct: Product;
}

interface LoadingStore {
  isFetching: boolean;
}

interface ReduxStore {
  products: ProductsStore;
  loading: LoadingStore;
  search: Search;
  router: Route;
}
