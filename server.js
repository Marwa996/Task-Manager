const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const dbConnect = require("./config/database.config");

const taskRoute = require("./routes/task.route");
const userRoute = require("./routes/user.route");

const app = express();

dotenv.config();
dbConnect();

app.use(bodyParser.json());
app.use(express.static("images"));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:4200",
  })
);

app.use("/tasks", taskRoute);
app.use("/users", userRoute);

app.listen(5000, () => {
  console.log("Connected to localhost:5000");
});
