const model = require("../models/address");

exports.getData = async (req, res) => {
    const data = await model.getAddress();
    if(data) {
        res.status(200) 
            .send(data);
    } else {
        res.status(401)
            .json({ message: "There is an error, please try again!" });
    };
};

exports.insertData = async (req, res) => {
    let files = [];
    req.files.forEach(element => files.push(element.filename));
    files = JSON.stringify(files);

    if(req.body.isActive == "true") {
        req.body.isActive = '1'
        const data = await model.insertAddress(req.body, files);
        if(data) {
            res.status(201)
                .json({ message: "Successfully added!", id: data.id });
        } else {
            res.status(400)
                .json({ message: "There is an error, please try again!" });
        };
    } else if(req.body.isActive == "false") {
        req.body.isActive = '0'
        const data = await model.insertAddress(req.body, files);
        if(data) {
            res.status(201)
                .json({ message: "Successfully added!", id: data.id });
        } else {
            res.status(400)
                .json({ message: "There is an error, please try again!" });
        };
    };
};

exports.updateData = async (req, res) => {
    let files = [];
    req.files.forEach(element => files.push(element.filename));
    files = JSON.stringify(files);

    if(req.body.isActive == "true") {
        req.body.isActive = '1';
        const data = await model.updateAddress(req.params.id, req.body, files);
        if(data) {
            res.status(200)
                .json({ message: "Successfully updated!", id: data.id });
        } else {
            res.status(400)
                .json({ message: "There is an error, please try again!" });
        };
    } else if(req.body.isActive == "false") {
        req.body.isActive = '0';
        const data = await model.updateAddress(req.params.id, req.body, files);
        if(data) {
            res.status(200)
                .json({ message: "Successfully updated!", id: data.id });
        } else {
            res.status(400)
                .json({ message: "There is an error, please try again!" });
        };
    };
};

exports.deleteData = async (req, res) => {
    const data = await model.deleteAddress(req.params.id);
    if(data) {
        res.status(200) 
            .json({ message: "Successfully deleted!", id: data.id });
    } else {
        res.status(400) 
            .json({ message: "There is an error, please try again!" });
    };
};