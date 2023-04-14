
const {MongoClient, Admin}=require("mongoose");
const mongoose = require("mongoose");
const Schema=mongoose.Schema;
// _id:Number,

const bloodbank = new mongoose.Schema({
    bankname:{
        type:String,
        required:true
    },
    // middlename:{
    //     type:String,
    //     required:true
    // },
    // lastname:{
    //     type:String,
    //     required:true
    // },
    firstline:{
        type:String,
        required:true
    },
    secondline:{
        type:String,
    },
    // thirdline:{
    //     type:String,

    // },
    pin:{
        type:Number,
        required:true
    },
    contact:{
        type:Number,
       required:true  
    },
    // gender:{
    //     type:String,
    //     required:true
    // },
    // bloodgroup:{
    //     type:String,
    //     required:true
    // },
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
module.exports = mongoose.model("Admin" , bloodbank)