const taskModel = require("../models/task.model");
const userModel = require("../models/user.model");

/* GET ALL TASKS */

const allTasks = async (req, res) => {
  const tasks = await taskModel.find();
  res.send("tasks");
};

/* GET TASK BY ID */

const getTaskById = async (req, res) => {
  const taskId = req.params.id;
  const task = await taskModel.findById({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: "Task not found" });
  }
  return res.status(200).json({ data: task });
};

/* ADD TASK */

const addTask = async (req, res) => {
  const taskExist = await taskModel.find({ title: req.body.taskTitle });
  if (taskExist.length == 0) {
    const taskUser = await userModel.find({ _id: req.body.taskUserId });

    const task = new taskModel({
      title: req.body.taskTitle,
      description: req.body.taskDescription,
      status: req.body.taskStatus,
      user: taskUser,
    });
    try {
      await task.save();
      console.log("task saved");
      return res.status(200).json({ data: task });
    } catch (e) {
      console.log("Error adding task", e);
    }
  } else {
    return res.status(500).json({ msg: "Task already exist" });
  }
};

/* EDIT TASK */

const editTask = async (req, res) => {
  console.log(req.params.id);
  const taskId = req.params.id;
  const taskUser = await userModel.find({ _id: req.body.taskUserId });

  try {
    const updatedTask = await taskModel.findOneAndUpdate(
      { _id: taskId },
      {
        title: req.body.taskTitle,
        description: req.body.taskDescription,
        user: taskUser,
      }
    );

    if (!updatedTask) {
      return res.status(404).json({ msg: `No task found with id ${taskId}` });
    }

    console.log("task updated successfully");
    return res.status(200).json({ data: updatedTask });
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ msg: "Error updating task" });
  }
};

/* UPDATE TASK */

const updateTask = async (req, res) => {
  console.log(req.body.taskStatus);
  const taskId = req.params.id;

  try {
    const updatedTask = await taskModel.findOneAndUpdate(
      { _id: taskId },
      {
        status: req.body.taskStatus,
      }
    );
    if (!updatedTask) {
      return res.status(404).json({ msg: `No task found with id ${taskId}` });
    }
    console.log("task updated successfully");
    return res.status(200).json({});
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ msg: "Error updating task" }); // Handle errors
  }
};

/* DELETE TASK */

const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  const task = await taskModel.findByIdAndDelete(taskId);

  if (!task) {
    return res.status(404).json({ msg: `No task found with id ${taskId}` });
  } else {
    console.log("deleted");
    return res.status(200).json({});
  }
};

module.exports = {
  allTasks,
  getTaskById,
  addTask,
  editTask,
  updateTask,
  deleteTask,
};
