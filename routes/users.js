const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersController");
const usersController = new UsersController();
const wrapAsyncController = require('../middlewares/wrapAsyncController');

router.post('/signup', wrapAsyncController(usersController.signup)); //회원가입
router.post('/login', wrapAsyncController(usersController.login)); //로그인

module.exports = router;