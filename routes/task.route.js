const express = require("express");
const taskController = require("../controllers/task.controller");
const Router = express.Router;
const router = Router();

router.get("/", taskController.allTasks);

module.exports = router;
