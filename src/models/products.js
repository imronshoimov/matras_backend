const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_PRODUCTS = `

`;

exports.getProducts = () => fetchAll(SELECT_PRODUCTS);