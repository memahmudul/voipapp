import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    
    email:{
        type: String,
        required: true,
        unique: true,


    },
    password:{
        type:String,
        required:true,

    },
    
    status:{
        type:String,
        required:true,
    },
   
    

},{timestamps:true})

export default mongoose.model('admin',adminSchema)