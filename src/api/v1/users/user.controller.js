const model = require('./user.model');
const validateUser = require('./user.validate');

exports.createUser = (req, res, next) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    next();
};

exports.readUsers = (req, res, next) => {
    next();
};

exports.readUser = (req, res, next) => {
    next();
};

exports.updateUserById = (req, res, next) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    next();
};

exports.deleteUser = (req, res, next) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    next();
};