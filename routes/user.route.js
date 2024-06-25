const express = require("express");
const userController = require("../controllers/user.controller");
const Router = express.Router;
const router = Router();

router.get("/", userController.allUsers);

module.exports = router;
