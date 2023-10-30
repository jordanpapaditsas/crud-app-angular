const users = require('./users.json');
const products = require('./products.json');
const units = require('./unitOfMeasurement.json');

module.exports = () => ({
  users: users,
  products: products,
  units: units
});