import Api from "~/services/api";

export const fetchProductsQuery = async (query: string) => {
  const api = new Api("/items", "GET", `q=${query}`);
  const result = await api.fetch();
  return result;
};

export const fetchProductDetail = async (productId: string) => {
  const api = new Api(`/items/${productId}`, "GET");
  const result = await api.fetch();
  return result;
};
