const Mongoose = require("Mongoose");

const connectDB = async () => {
  try {
    await Mongoose.connect(process.env.DB_URI);
    console.log("data base is connected");
  } catch (error) {
    console.log("data base is not connected");
  }
};

module.exports = connectDB;
