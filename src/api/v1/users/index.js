const controller = require('./user.controller');
const model = require('./user.model');
const express = require('express');
const router = express.Router();

router.post('/', controller.createUser, model.createUser);
router.get('/', controller.readUsers, model.readUsers);
router.get('/:id', controller.readUser, model.readUserById);
router.put('/:id', controller.updateUserById, model.updateUserById);
router.delete('/:id', controller.deleteUser, model.deleteUserById);

module.exports = router;


