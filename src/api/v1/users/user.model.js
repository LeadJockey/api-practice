const Joi = require('joi');
const users = [
    { id: 1, name: 'shawn' },
    { id: 2, name: 'thecool' },
    { id: 3, name: 'siwon' },
    { id: 4, name: 'siwon2' },
    { id: 5, name: 'siwon3' },
    { id: 6, name: 'siwon4' },
    { id: 7, name: 'merlin' },
];
const schema = {
    name: Joi.string().min(3).required()
}

exports.validateUser = (user) => Joi.validate(user, schema);
exports.getUsers = ()=> users;