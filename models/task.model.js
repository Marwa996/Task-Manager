const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  user: { type: [mongoose.Schema.ObjectId], ref: "User" },
});
const taskModel = model("Task", taskSchema);
module.exports = taskModel;
