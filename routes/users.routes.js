const express = require('express');
const router = express.Router();
const authMiddleware = require('../utils/authMiddleware');
const imageUpload = require('../utils/imageUpload');
// const cors = require('cors')

const UsersController = require('../controllers/user.controller');

router.get(`/user`, UsersController.getUsers);
router.get(`/user/:id`, authMiddleware, UsersController.getUserByID,);
router.post(`/login`, UsersController.postUserLogin);
router.post(`/register`, imageUpload.single(`avatar`), UsersController.postUserRegister);
router.post(`/logout`, authMiddleware, UsersController.postLogOut);

module.exports = router;