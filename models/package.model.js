import mongoose from "mongoose";

const userPackage=new mongoose.Schema({
name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true   },

eventdate:{
    type:Date,
    required:true,
},
bookeddate:{
    type:Date,
    required:true,
},

description:{
    type:String,
    required:true},

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true
    }
 

   
})





const model=mongoose.model("userPackage",userPackage)
export default model