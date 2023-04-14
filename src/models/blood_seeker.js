
const {MongoClient, Admin}=require("mongoose");
const mongoose = require("mongoose");
const Schema=mongoose.Schema;
// _id:Number,

const request= new mongoose.Schema({
    patient_name:{
        type:String,
        required:true
    },
    
    disease:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    Mob:{
        type:Number,
       required:true  
    },

    unit: {
        type: Number,
        required: true
    }
})

// const userRegistration = new mongoose.model("User", donor);
// module.exports = userRegistration;   
module.exports = mongoose.model("Blood_Seeker" , request)