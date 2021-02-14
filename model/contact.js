const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
     name:{
          type: String,
          required:true
     },
     lastName:{
          type: String,
          // required:true
     },
     companyName:{
          type:String,
     },
     telephone:{
          type:Number,
          required:true
     },
     mobile:{
          type:Number,
          required:true
     },
     address:{
          type:String,
          required:true
     },
     area:{
          type:String,
          // required:true
     },
     email:{
          type:String,
          required:true
     },
     description:{
          type:String,
     },
     
})
module.exports = mongoose.model("Contact",userSchema)