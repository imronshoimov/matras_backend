const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_CONTACT = `
SELECT 
    id,
    '+998' || number as number, 
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time,
    contacted
FROM contact;
`

const INSERT_CONTACT = `
INSERT INTO contact (
    number
) VALUES ($1)
RETURNING id;
`;

const CONTACTED = `
UPDATE contact
SET contacted = '1'
WHERE id = $1
RETURNING id;
`;

exports.getContacts = () => fetchAll(SELECT_CONTACT);
exports.insertContact = ({ number }) => fetch(INSERT_CONTACT, number);
exports.contacted = (id) => fetch(CONTACTED, id);