const express = require("express");
const router = express.Router();
const fileRouter = require("./files.js");
const userRouter = require("./users.js");

router.use("/files", fileRouter);
// router.use("/users", userRouter);

module.exports = router;
