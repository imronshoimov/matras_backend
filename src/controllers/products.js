const model = require("../models/products");
const category = require("../models/category");

exports.getData = async (req, res) => {
    const products = await model.getProducts();
    const categories = await category.getCategories();
    if(products && categories) {
        res.status(200)
        .send({ products, categories });
    } else {
        res.status(401)
        .json({ message: "There is an error, please try again!" });
    };
};

async function productController(id, req, res, files, status) {
    if(req.body.isActive == "true") {
        const data = await model.insertProduct(id, req.body, files, status);

        if(data) {
            res.status(201)
                .json({ message: "Product successfully added!", id: data.id });
        } else {
            res.status(400)
                .json({ message: "Bad request, please try again!" });
        };
    } else {
        const data = await model.insertProduct(id, req.body, files, status);
        await model.updateIsActive(data.id);

        if(data) {
            res.status(201)
                .json({ message: "Product successfully added!", id: data.id });
        } else {
            res.status(400)
                .json({ message: "Bad request, please try again!" });
        };
    };
};

exports.insertData = async (req, res) => {
    try {
        let files = [];
        req.files.forEach(element => files.push(element.filename));
        files = JSON.stringify(files)

        let id = req.params.id;
        id = id > 0 ? id : null;

        const data = req.body;
        let status = '';

        if(data.new == "false" && data.discount == "false") {
            status = '0'
            productController(id, req, res, files, status);
        } else if(data.new == "true" && data.discount == "false") {
            status = '1'
            productController(id, req, res, files, status);
        } else if(data.new == "false" && data.discount == "true") {
            status = '2'
            productController(id, req, res, files, status);
        } else if(data.new == "true" && data.discount == "true") {
            status = '3'
            productController(id, req, res, files, status);
        };
    } catch(error) {
        console.log(error);
    };
};

exports.updateData = (req, res) => {

};