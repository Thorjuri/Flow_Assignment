const express = require("express");
const router = express.Router();
const fileRouter = require("./files.js");

router.use("/files", fileRouter);

module.exports = router;
