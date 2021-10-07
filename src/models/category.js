const  { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_CATEGORY = `SELECT 
    id,
    category,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time,
    is_active
FROM categories;`;

const INSERT_CATEGORY = `
INSERT INTO categories (
    category
) VALUES ($1)
RETURNING id;
`;

const IS_ACTIVE = `
UPDATE categories
SET is_active = '0'
WHERE id = $1;
`;

exports.getCategories = () => fetchAll(SELECT_CATEGORY);
exports.insertCategory = (category) => fetch(INSERT_CATEGORY, category);
exports.updateIsActive = (id) => fetch(IS_ACTIVE, id);

