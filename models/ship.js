const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ShipSchema = new Schema({
//   name: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },
company: {
    type: String,
  },

  phone: {
    type: String,
  },

  AtoB: {
    type: String,
  },

 weight: {
    type: String,
  },

  material: {
    type: String,
  },

  demensions: {
    type: String,
  },

  weight: {
    type: String,
  },

  van: {
    type: String,
  },
  message: {
    type: String,
  },
});
module.exports = mongoose.model("Ship", ShipSchema);
