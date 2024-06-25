const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tasks: { type: [mongoose.Schema.ObjectId], ref: "Task" },
});
const userModel = model("User", userSchema);
module.exports = userModel;
