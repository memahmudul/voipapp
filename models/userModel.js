import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique: true
    },
    country:{
        type:String,
        required: true,

    },
    phone:{
        type: String,
        required:true,
        trim:true,
        

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
    
    pin:{
        type:String,
        required: true
    },
    
    role:{
        type:String,
        required:true,
    }

},{timestamps:true})

export default mongoose.model('users',userSchema)