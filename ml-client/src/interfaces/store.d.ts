interface SearchStore {
  text: string;
}

type ProductStatus = "free-shipping" | "none";

interface Product {
  id: string;
  price: number;
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
}
