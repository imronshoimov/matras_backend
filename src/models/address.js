const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_ADDRESS = `
SELECT * FROM address;
`;

const INSERT_ADDRESS = `
INSERT INTO address (
    location,
    destination,
    geolacation,
    images,
    is_active
) VALUES ( $1, $2, $3, $4, $5 )
RETURNING id;
`;

const UPDATE_ADDRESS = `
UPDATE address
SET location = $1,
    destination = $2,
    geolacation = $3,
    images = $4,
    is_active = $5
WHERE id = $6
RETURNING id;
`;

const DELETE_ADDRESS = `
UPDATE address
SET is_active = '0'
WHERE id = $1
RETURNING id;
`;

exports.getAddress = () => fetchAll(SELECT_ADDRESS);
exports.insertAddress = (data, files) => fetch(
    INSERT_ADDRESS,
    data.location,
    data.destination,
    data.geolacation,
    files,
    isActive
);
exports.updateAddress = (id, data, files) => fetch(
    UPDATE_ADDRESS,
    data.location,
    data.destination,
    data.geolacation,
    files,
    isActive,
    id
);
exports.deleteAddress = (id) => fetch(DELETE_ADDRESS, id);