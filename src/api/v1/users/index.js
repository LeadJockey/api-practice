const controller = require('./user.controller');
const model = require('./user.model');
const express = require('express');
const router = express.Router();

router.post('/', controller.createUser, model.createUser);
router.get('/', controller.readUsers, model.readUsers);
router.get('/:name', controller.readUserByName, model.readUserByName);
router.put('/:name', controller.updateUserByName, model.updateUserByName);
router.delete('/:name', controller.deleteUserByName, model.deleteUserByName);

module.exports = router;


