const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://nikshep_paliwal:A234e%40123@user.aoicuzf.mongodb.net/?retryWrites=true&w=majority")
.then((result)=>{
    console.log(`connection successful`);
    // console.log(result);
}).catch((e)=>{
    // console.log(`no connection`); 
    console.log(e);
});

//  working part
// const { MongoClient, Admin } = require("mongodb");
// const url = "mongodb+srv://nikshep_paliwal:A234e%40123@user.aoicuzf.mongodb.net/?retryWrites=true&w=majority";
// const database = "Donor"
// const client = new MongoClient(url);
// async function getData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection("Login");
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }
// getData();


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://nikshep_paliwal:A234e@123@user.aoicuzf.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("Donor").collection("Login");
//   // perform actions on the collection object
//   client.close();
// });




// ,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// }