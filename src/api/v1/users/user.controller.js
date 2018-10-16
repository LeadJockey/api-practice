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

exports.readUserByName = (req, res, next) => {
    next();
};

exports.updateUserByName = (req, res, next) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    next();
};

exports.deleteUserByName = (req, res, next) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    next();
};