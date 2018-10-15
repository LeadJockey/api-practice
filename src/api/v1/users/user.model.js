const User = require('./user.schema');

exports.createUser = (req, res) => {
    const newUser = new User(Object.assign(req.body));
    const query = newUser.save();
    query.then((result) => res.send(result)).catch((err) => res.send(err));
};

exports.readUsers = (req, res) => {
    const query = User.find({}, 'name').select('name');
    query.then((users) => res.send(users)).catch((err) => res.status(404).send('user not found'));
};

exports.readUserById = (req, res) => {
    const query = User.findOne({ _id: req.params.id }, '').select('');
    query.then((user) => res.send(user)).catch((err) => res.status(404).send('user not found'));
};

exports.updateUserById = (req, res) => {
    const query = User.update({ _id: req.params.id }, { $set: req.body });
    query.then((result) => res.send(result)).catch((err) => res.send(err));
}

exports.deleteUserById = (req, res) => {
    const query = User.remove({ _id: req.params.id });
    query.then((result) => res.send(result)).catch((err) => res.status(404).send('user not found'));
};