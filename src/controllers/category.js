const model = require("../models/category");

exports.getData = async (req, res) => {
    const data = await model.getCategories();
    if(data) {
        res.status(200)
            .send(data);
    } else {
        res.status(401)
            .json({ message: "There is an error, please try again!" });
    };
};

exports.insertData = async (req, res) => {
    if(req.body.isActive) {
        const data = await model.insertCategory(req.body.category);
        if(data) {
            res.status(201)
                .json({ message: "Category successfully added!", id: data.id });
        } else {
            res.status(400)
                .json({ message: "Bad request, please try again!" });
        };
    } else {
        const data = await model.insertCategory(req.body.category);
        await model.updateIsActive(data.id);
        if(data) {
            res.status(201)
                .json({ message: "Category successfully added!", id: data.id });
        } else {
            res.status(400)
                .json({ message: "Bad request, please try again!" });
        };
    }
};