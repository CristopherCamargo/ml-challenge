function utilDecimals(price) {
  var split = price.toString().split(".");
  if (!split[1]) {
    return 0;
  }
  return split[1].length;
}

module.exports = {
  utilDecimals
}