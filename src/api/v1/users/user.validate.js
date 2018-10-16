const Joi = require('joi');
const joiSchema = {
    name: Joi.string().min(3).lowercase().trim().required(),
    pwd: Joi.string().min(3).trim().required()
}
module.exports = (requestBody) => Joi.validate(requestBody, joiSchema);