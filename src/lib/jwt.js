const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/keys");

module.exports = {
    sign: payload => jwt.sign(payload, secretKey, { expiresIn: "60h" }),
    verify: token => jwt.verify(token, secretKey)
};