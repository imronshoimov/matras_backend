const Joi = require("joi");

exports.carouselSchema = Joi.object({
    title:Joi.string().not("")
});

exports.statisticsSchema = Joi.object({
    experience: Joi.number().not(""),
    clients: Joi.string().not(""),
    warranty: Joi.number().not(""),
    delivery: Joi.number().not("")
})

exports.ordersSchema = Joi.object({
    name: Joi.string().not(""),
    number: Joi.string().min(9).required(),
    productName: Joi.string().not(""),
    count: Joi.number().not("")
})

exports.contactSchema = Joi.object({
    number: Joi.string().min(9).required()
})
