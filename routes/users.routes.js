const express = require('express');
const router = express.Router();
const authMiddleware = require('../utils/authMiddleware');

const UsersController = require('../controllers/user.controller');

router.get(`/user`, UsersController.getUsers);
router.get(`/user/:id`, authMiddleware, UsersController.getUserByID,);
router.post(`/login`, UsersController.postUserLogin);
router.post(`/register`, UsersController.postUserRegister);
router.post(`/logout`, authMiddleware, UsersController.postLogOut);

module.exports = router;