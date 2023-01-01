const express = require("express");
const router = express.Router();
const FilesController = require("../controllers/filesController");
const filesController = new FilesController();
const wrapAsyncController = require('../middlewares/wrapAsyncController');

router.post('/', wrapAsyncController(filesController.addExtensions)); //회원가입

module.exports = router;