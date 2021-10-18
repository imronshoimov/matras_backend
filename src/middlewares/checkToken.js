const { verify } = require("../lib/jwt");
const { secretKey } = require("../config/keys");
const model = require("../models/login");

exports.checkToken = async (req, res, next) => {
    const token = req.headers.authorization;
    
    if(!token) {
        res.status(401)
            .json({ message: "You are not logged in!" });
    } else {
        try {
            const payload = verify(token, secretKey);
            const admin = await model.getId();
            if(payload.id === admin.id) {
                next();
            } else {
                res.status(401)
                    .json({ message: "You are not logged in!" });
            }
        } catch(error) {
            res.status(401)
                .json({ message: "You are not logged in!" });
            throw error;
        };
    };
};