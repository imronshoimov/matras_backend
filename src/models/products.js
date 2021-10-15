const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_PRODUCTS = `
SELECT * FROM products;
`;

const UPDATE_AVCTIVE = `
UPDATE products
SET is_active = '0'
WHERE id = $1;
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
    new_cost,
    status
) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 )
RETURNING id;
`;

exports.getProducts = () => fetchAll(SELECT_PRODUCTS);
exports.updateIsActive = (id) => fetch(UPDATE_AVCTIVE, id);
exports.insertProduct = (id, data, files, status) => fetch(
    INSERT_PRODUCTS, 
    id, 
    data.name,
    files,
    data.weigth,
    data.warranty,
    data.size,
    data.capacity,
    data.body,
    data.cost,
    data.newCost,
    status
);