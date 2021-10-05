const { carouselSchema, statisticsSchema, ordersSchema } = require("../lib/joi");

exports.validateCarousel = (req, res, next) => {
    const data = carouselSchema.validate(req.body);
    if(req.file == undefined) {
        if(data.error) {
            res.status(403)
                .json({ message: data.error.details[0].message });
        } else {
            res.status(403)
                .json({ message: "image is required" });
        }
    } else {
        next();
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
}