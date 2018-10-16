const User = require('./user.schema');

exports.createUser = (req, res) => {
    const newUser = new User(req.body);
    const query = newUser.save();
    query.then((result) => res.send(result)).catch((err) => res.status(400).send('bad request : duplicate name'));
};

exports.readUsers = (req, res) => {
    const query = User.find({}, 'name created_at').select('name created_at');
    query.then((users) => res.send(users)).catch((err) => res.status(404).send('not found : id of user'));
};

exports.readUserByName = (req, res) => {
    const query = User.findOne({ name: req.params.name }, '').select('');
    query.then((user) => res.send(user)).catch((err) => res.status(404).send('not found : id of user'));
};

exports.updateUserByName = (req, res) => {
    const query = User.findOneAndUpdate({ name: req.params.name }, { $set: req.body });
    query.then((result) => res.send(result)).catch((err) => res.status(400).send('bad request : something'));
}

exports.deleteUserByName = (req, res) => {
    const query = User.findOneAndDelete({ name: req.params.name });
    query.then((result) => res.send(result)).catch((err) => res.status(404).send('not found : id of user'));
};