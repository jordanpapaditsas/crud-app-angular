const users = require('./users.json');
const products = require('./products.json');

module.exports = () => ({
  users: users,
  products: products
});