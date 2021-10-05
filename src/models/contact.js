const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_CONTACT = `
SELECT 
    id,
    number,
    time
FROM contact;
`

const INSERT_CONTACT = `
INSERT INTO contact (
    number
) VALUES ($1)
RETURNING id;
`;

exports.getContacts = () => fetchAll(SELECT_CONTACT);
exports.insertContact = ({ number }) => fetch(INSERT_CONTACT, number);