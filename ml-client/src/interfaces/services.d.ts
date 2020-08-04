interface ItemResult {
  id: string;
  title: string;
  city: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface ItemDetail extends ItemResult {
  sold_quantity: number;
  description: string;
}

interface FetchProducts {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: ItemResult[];
}

interface FetchProductDetail {
  author: {
    name: string;
    lastname: string;
  };
  item: ItemDetail;
}
