const model = require("../models/products");
const category = require("../models/category");
const fs = require("fs");
const path = require("path");

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

async function insertController(req, res, files, status) {
    if(req.body.isActive === "true") {
        const data = await model.insertProduct(req.body, files, status);
        if(data) {
            res.status(201)
                .json({ message: "Product successfully added!", id: data.id });
        } else {
            res.status(400)
                .json({ message: "Bad request, please try again!" });
        };
    } else {
        const data = await model.insertProduct(req.body, files, status);
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
        files = JSON.stringify(files);

        const data = req.body;
        let status = '';

        if(data.new == "false" && data.discount == "false") {
            status = '0';
            data.newCost = null;
            insertController(req, res, files, status);
        } else if(data.new == "true" && data.discount == "false") {
            status = '1';
            data.newCost = null;
            insertController(req, res, files, status);
        } else if(data.new == "false" && data.discount == "true") {
            status = '2'
            insertController(req, res, files, status);
        } else if(data.new == "true" && data.discount == "true") {
            status = '3'
            insertController(req, res, files, status);
        };
    } catch(error) {
        console.log(error);
    };
};

async function updateController(id, req, res, files, status) {
    let images = await model.selectImages(req.params.id);
    images = JSON.parse(images.product_images);

    if(req.body.isActive === "true") {
        const data = await model.updateProducts(id, req.body, files, status);

        if(data) {
            for(let image of images) {
                fs.unlinkSync(path.join(process.cwd(), "src", "uploads", "products", image));
            };

            res.status(202)
                .json({ message: "Product successfully updated!", id: data.id });
        } else {
            res.status(204)
                .json({ message: "There is an error, please try again!" });
        };
    } else {
        const data = await model.updateProducts(id, req.body, files, status);
        await model.updateIsActive(data.id);

        if(data) {
            for(let image of images) {
                fs.unlinkSync(path.join(process.cwd(), "src", "uploads", "products", image));
            };

            res.status(202)
                .json({ message: "Product successfully updated!", id: data.id });
        } else {
            res.status(204)
                .json({ message: "There is an error, please try again!" });
        };
    };
};

exports.updateData = async (req, res) => {
    try {
        let files = [];
        req.files.forEach(element => files.push(element.filename));
        files = JSON.stringify(files);

        let id = req.params.id;
        id = id > 0 ? id : null;

        const data = req.body;
        let status = '';

        if(data.new == "false" && data.discount == "false") {
            status = '0';
            data.newCost = null;
            updateController(id, req, res, files, status);
        } else if(data.new == "true" && data.discount == "false") {
            status = '1';
            data.newCost = null;
            updateController(id, req, res, files, status);
        } else if(data.new == "false" && data.discount == "true") {
            status = '2'
            updateController(id, req, res, files, status);
        } else if(data.new == "true" && data.discount == "true") {
            status = '3'
            updateController(id, req, res, files, status);
        };
    } catch(error) {
        console.log(error);
    };
};

exports.deleteData = async (req, res) => {
    const data = await model.deleteProducts(req.params.id);
    let images = await model.selectImages(data.id);
    images = JSON.parse(images.product_images);

    if(data) {
        for(let image of images) {
            fs.unlinkSync(path.join(process.cwd(), "src", "uploads", "products", image));
        };

        res.status(200) 
            .json({ message: "Successfully deleted!", id: data.id });
    } else {
        res.status(400) 
            .json({ message: "Bad request, please try again!", id: data.id });
    };
};