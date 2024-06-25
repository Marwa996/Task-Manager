const express = require("express");
const taskController = require("../controllers/task.controller");
const Router = express.Router;
const router = Router();

router.get("/", taskController.allTasks);

router.get("/:id", taskController.getTaskById);

router.post("/", taskController.addTask);

router.put("/:id", taskController.editTask);

router.patch("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
