const model = require("../models/products");
const category = require("../models/category");

exports.getData = async (req, res) => {
    const products = await model.getProducts();
    const categories = await category.getCategories();
    if(data) {
        res.status(200)
        .send({ products, categories });
    } else {
        res.status(401)
        .json({ message: "There is an error, please try again!" });
    };
};

exports.insertData = async (req, res) => {
    console.log(req.files);
    // let id = req.params.id;
    // if(!id || !req.body.newCost) {
    //     id = null;
    //     req.body.newCost = null;
    //     const data = await model.insertProduct(id, req.body);
    //     if(data) {
    //         res.status(201)
    //         .json({ message: "Product successfully added!", id: data.id });
    //     } else {
    //         res.status(400)
    //         .json({ message: "Bad request, please try again!" });
    //     };
    // }
};
