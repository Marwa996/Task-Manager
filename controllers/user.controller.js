const userModel = require("../models/user.model");

let allUsers = async (req, res) => {
  const users = await userModel.find();
  res.send("users");
};
module.exports = { allUsers };
