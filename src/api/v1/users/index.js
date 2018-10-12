const controller = require('./user.controller');
const express = require('express');
const router = express.Router();

router.get('/', controller.readUsers);
router.get('/:id', controller.readUser);
router.post('/', controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;


