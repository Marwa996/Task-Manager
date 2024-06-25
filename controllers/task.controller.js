const taskModel = require("../models/task.model");

let allTasks = async (req, res) => {
  const tasks = await taskModel.find();
  res.send("tasks");
};
module.exports = { allTasks };
