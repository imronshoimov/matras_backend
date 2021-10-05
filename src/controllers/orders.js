const model = require("../models/orders");

exports.getData = async (req, res) => {   
    const data = await model.getOrders();
    if(data) {
        res.status(200)
            .send(data);
    } else {
        res.status(401)
            .json({ message: "There is an error, please try again!" });
    };
};

exports.insertData = async (req, res) => {
    const data = await model.insertOrders(req.body);
    if(data) {
        res.status(201)
            .json({ message: "Order successfully added!", id: data.id });
    } else {
        res.status(400)
            .json({ message: "Bad request, please try again!" });
    };
};

exports.updateData = async (req, res) => {
    const data = await model.updateOrders(req.params.id);
    if(data) {
        res.status(200)
            .json({ message: "Order successfully updated", id: data.id });
    } else {
        res.status(400)
            .json({ message: "There is an error, please try again!" });
    };
};