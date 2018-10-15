const Joi = require('joi');
const joiSchema = {
    name: Joi.string().min(3).required(),
    pwd: Joi.string().min(3).required()
}
module.exports = (requestBody) => Joi.validate(requestBody, joiSchema);