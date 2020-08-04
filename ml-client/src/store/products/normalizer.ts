export const normalizerProducts = (data: FetchProducts): Product[] => {
  const products: Product[] = [];
  data.items.forEach((item) => {
    const product: Product = {
      id: item.id,
      price: item.price.amount,
      decimals: item.price.decimals,
      city: item.city,
      currency: item.price.currency,
      description: "",
      condition: "",
      shortDescription: item.title,
      imageURI: item.picture,
      quantity: 0,
      status: item.free_shipping ? "free-shipping" : "none"
    };
    products.push(product);
  });

  return products;
};

export const normalizerProductDetail = (data: FetchProductDetail): Product => {
  const { item } = data;
  const product: Product = {
    id: item.id,
    price: item.price.amount,
    currency: item.price.currency,
    decimals: item.price.decimals,
    city: "",
    condition: item.condition === "new" ? "Nuevo" : "Usado",
    description: item.description,
    shortDescription: item.title,
    imageURI: item.picture,
    quantity: item.sold_quantity,
    status: item.free_shipping ? "free-shipping" : "none"
  };

  return product;
};
