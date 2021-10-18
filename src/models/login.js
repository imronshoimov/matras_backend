const { fetch } = require("../lib/connectdb");

const LOGIN_ADMIN = `
SELECT 
    u.id
FROM users u
WHERE u.username = $1 AND
u.password = crypt($2, u.password);
`;

exports.login = ({ userName, password }) => fetch(LOGIN_ADMIN, userName, password);