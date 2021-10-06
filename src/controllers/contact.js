const model = require("../models/contact");

exports.getData = async (req, res) => {
    const data = await model.getContacts(req.body);
    if(data) {
        res.status(200)
            .send(data);
    } else {
        res.status(401)
            .json({ message: "There is an error, please try again!" });
    };
}

exports.insertData = async (req, res) => {
    const data = await model.insertContact(req.body);
    if(data) {
        res.status(201)
            .json({ message: "Your contact successfully added!", id: data.id });
    } else {
        res.status(400)
            .json({ message: "Bad request, please try again!" });
    };
};

exports.updateData = async (req, res) => {  
    const data = await model.contacted(req.params.id);
    if(data) {
        res.status(200)
            .json({ message: "Successfully updated!", id: data.id });
    } else {
        res.status(400)
            .json({ message: "Error, please try again!" });
    };
};