const model = require('./user.model');
const users = model.getUsers();
const errorMsg = {
    400:'The user with the given ID was not found.',
    404:'The user with the given NAME was alread exist.'
};

exports.readUsers = (req, res) => res.send(users);

exports.readUser = (req, res) => {
    const targetUser = users.find(user => user.id === parseInt(req.params.id, 10));
    if (!targetUser) return res.status(404).send(errorMsg[400]);

    res.send(targetUser);
};

exports.createUser = (req, res) => {
    const sameNameUser = users.find(user => user.name === req.body.name);
    if (sameNameUser) return res.status(400).send(errorMsg[404]);

    const { error } = model.validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.send(newUser);
};

exports.updateUser = (req, res) => {
    const targetUser = users.find(user => user.id === parseInt(req.params.id, 10));
    if (!targetUser) return res.status(400).send(errorMsg[400]);

    const sameNameUser = users.find(user => user.name === req.body.name);
    if (sameNameUser) return res.status(400).send(errorMsg[404]);

    const { error } = model.validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    targetUser.name = req.body.name;
    res.send(targetUser);
};

exports.deleteUser = (req, res) => {
    const targetUser = users.find(user => user.id === parseInt(req.params.id, 10));
    if (!targetUser) return res.status(400).send(errorMsg[400]);

    users.splice(targetUser.id, 1);
    res.send(users)
};
