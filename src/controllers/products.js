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
