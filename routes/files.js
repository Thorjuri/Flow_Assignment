const express = require("express");
const router = express.Router();
const FilesController = require("../controllers/filesController");
const filesController = new FilesController();
const wrapAsyncController = require('../middlewares/wrapAsyncController');

router.post('/', wrapAsyncController(filesController.addExtensions)); //확장자 추가
router.patch('/', wrapAsyncController(filesController.deleteExtensions)); //확장자 삭제(soft-delete)

module.exports = router;