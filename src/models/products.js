const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_PRODUCTS = `
SELECT * FROM products;
`;

const INSERT_PRODUCTS = `
INSERT INTO products (
    category_id,
    name,
    product_images,
    weight,
    warranty,
    size,
    capacity,
    body,
    cost,
    status
) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10 );
RETURNING id;
`;

exports.getProducts = () => fetchAll(SELECT_PRODUCTS);
exports.insertProduct = (data) => fetch(INSERT_PRODUCTS);