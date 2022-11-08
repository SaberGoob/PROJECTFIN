console.clear();

const cors = require("cors");
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/dbconnect");
const app = express();
connectDB();

app.use(cors());

// routes
app.use(express.json());
app.use("/user", require("./routs/user"));
app.use("/ship", require("./routs/ship"));


const Port = process.env.PORT;
app.listen(Port, (err) =>
  err ? console.log(err) : console.log(`server is running on ${Port}`)
);
