const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_ORDERS = `
SELECT 
    id,
    name,
    '+998' || number as number,
    product_name,
    count
FROM orders
WHERE is_active = '1';
`;

const INSERT_ORDERS = `
INSERT INTO orders (
    name,
    number,
    product_name,
    count
) VALUES ( $1, $2, $3, $4 )
RETURNING id;
`;

const UPDATE_ORDERS = `
UPDATE orders
SET is_active = '0'
WHERE id = $1
RETURNING id;
`

exports.getOrders = () => fetchAll(SELECT_ORDERS);
exports.insertOrders = (data) => fetch(
    INSERT_ORDERS, 
    data.name,
    data.number,
    data.productName,
    data.count
);
exports.updateOrders = (id) => fetch(UPDATE_ORDERS, id);