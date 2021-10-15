const fs = require("fs");
const path = require("path");
const { 
    carouselSchema, 
    statisticsSchema, 
    ordersSchema, 
    contactSchema, 
    categorySchema,
    productsSchema
} = require("../lib/joi");

exports.validateCarousel = (req, res, next) => {
    const data = carouselSchema.validate(req.body);
    if(!req.file) {
        res.status(403)
            .json({ message: "image is required" })
    } else if(data.error) {
        fs.unlinkSync(path.join(process.cwd(), "src", "uploads", req.file.filename));

        res.status(403)
            .json({ message: data.error.details[0].message });
    } else {
        next()
    };
};

exports.validateStatistics = (req, res, next) => {
    const data = statisticsSchema.validate(req.body);
    if(data.error) {
        res.status(403)
            .json({ message: data.error.details[0].message });
    } else {
        next();
    };
};

exports.validateOrders = (req, res, next) => {
    const data = ordersSchema.validate(req.body);
    if(data.error) {
        res.status(403)
            .json({ message: data.error.details[0].message });
    } else {
        next();
    };
};

exports.validateContact = (req, res, next) => {
    const data = contactSchema.validate(req.body);
    if(data.error) {
        res.status(403)
            .json({ message: data.error.details[0].message });
    } else {
        next();
    };
};

exports.validateCategory = (req, res, next) => {
    const data = categorySchema.validate(req.body);
    if(data.error) {
        res.status(403)
            .json({ message: data.error.details[0].message });
    } else {
        next();
    };
};

exports.validateProducts = (req, res, next) => {
    const data = productsSchema.validate(req.body);
    if(!req.files.length) {
        res.status(403)
                .json({ message: "image is required" })
    } else if(data.error) {
        for(let image of req.files) {
            fs.unlinkSync(path.join(process.cwd(), "src", "uploads", image.filename));
        }

        res.status(403)
            .json({ message: data.error.details[0].message });
    } else {
        next()
    };
};