const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/user.controller');

router.get(`/user/:id`, UsersController.getUserByID);
router.post(`/login`, UsersController.postUserLogin);
router.post(`/register`, UsersController.postUserRegister);

module.exports = router;