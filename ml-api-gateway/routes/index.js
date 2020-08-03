var express = require("express");
var router = express.Router();

var { getQuery, getItem } = require("./resolvers");
var { serializeItem, serializeQuery } = require("./serializer");

router.get("/api/items", async function (req, res, next) {
  const {
    query: { q: query }
  } = req;
  const resultFromQuery = await getQuery(query);
  const result = serializeQuery(resultFromQuery);
  res.json(result);
});

router.get("/api/items/:id", async function (req, res, next) {
  const {
    params: { id }
  } = req;
  const resultFromQuery = await getItem(id);
  const result = serializeItem(resultFromQuery);
  res.json(result);
});

module.exports = router;
