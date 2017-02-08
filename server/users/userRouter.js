'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const users = require('./userEntity');
const userController = require('./userController');

router.post('/add', userController.add);

router.patch('/updateUser/:id',userController.update);

router.delete('/deleteUser/:id', userController.delete);
router.get('/viewUser', userController.view);
module.exports = router;
