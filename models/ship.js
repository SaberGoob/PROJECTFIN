const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ShipSchema = new Schema({
//   name: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },

Etat:{
type:String,
},

pickup:{
  type:String,
  default:"Pending",
},

userId: {
  type:String,
},
company: {
    type: String,
    required: true,

  },

  phone: {
    type: String,
    required: true,

  },

  Adress: {
    type: String,
    required: true,

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

  methode: {
    type: String,
  },
  message: {
    type: String,
  },
},{timestamps:true});
module.exports = mongoose.model("Ship", ShipSchema);
