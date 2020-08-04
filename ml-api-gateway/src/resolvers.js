var axios = require("axios").default;

async function getQuery(query) {
  var params = {
    params: {
      q: query
    }
  };
  const response = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search`,
    params
  );
  return response.data;
}

async function getItem(id) {
  const item = await axios.get(`https://api.mercadolibre.com/items/${id}`);
  const itemDescription = await axios.get(
    `https://api.mercadolibre.com/items/${id}/description`
  );
  return { ...item.data, ...itemDescription.data };
}

module.exports = {
  getQuery,
  getItem
};
