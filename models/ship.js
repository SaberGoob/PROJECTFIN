const Mongoose = require("Mongoose");

const Schema = Mongoose.Schema;
const ShipSchema = new Schema({
//   name: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },

etat:{
type:String,
default:"Pending",

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

  },

  phone: {
    type: String,

  },

  Adress: {
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

  methode: {
    type: String,
  },
  message: {
    type: String,
  },
},{timestamps:true});
module.exports = Mongoose.model("Ship", ShipSchema);
