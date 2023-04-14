
const {MongoClient, Admin}=require("mongoose");
const mongoose = require("mongoose");
const Schema=mongoose.Schema;
// _id:Number,

const donor = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    
    dob:{
        type:String,
        required:true
    },
    firstline:{
        type:String,
        required:true
    },
    
    pin:{
        type:Number,
        required:true
    },
    contact:{
        type:Number,
       required:true  
    },
    gender:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// const userRegistration = new mongoose.model("User", donor);
// module.exports = userRegistration;   
module.exports = mongoose.model("Donor" , donor)