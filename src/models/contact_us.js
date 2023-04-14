
const {MongoClient, Admin}=require("mongoose");
const mongoose = require("mongoose");
const Schema=mongoose.Schema;
// _id:Number,

const contact = new mongoose.Schema({
  email:{
    type:String,
    require:true
  },
  name:{
    type:String,
    required:true
  },
  Mob:{
    type:Number,
    required:true
  },
  Sub:{
    type:String,
    required:"type something....."
  }
})

// const userRegistration = new mongoose.model("User", donor);
// module.exports = userRegistration;   
module.exports = mongoose.model("Queries" , contact)