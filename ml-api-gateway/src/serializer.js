var { utilDecimals } = require("./utils");

function serializeQuery(data) {
  var values = data.available_filters.map((filter) => filter.values);

  var allCategories = [];
  values.forEach((category) => {
    allCategories = [...allCategories, ...category];
  });

  var categories = allCategories.map((category) => category.name);

  return {
    author: {
      name: "",
      lastname: ""
    },
    categories,
    items: data.results.map((item) => ({
      id: item.id,
      title: item.title,
      city: item.address.city_name,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: utilDecimals(item.price)
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping || false
    }))
  };
}

function serializeItem(data) {
  return {
    author: {
      name: "",
      lastname: ""
    },
    item: {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: utilDecimals(data.price)
      },
      picture: data.pictures[0].url,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping || false,
      sold_quantity: data.sold_quantity,
      description: data.plain_text
    }
  };
}

module.exports = { serializeItem, serializeQuery };
