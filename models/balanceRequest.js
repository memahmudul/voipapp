import mongoose from "mongoose";

const balanceRequest = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        required:true,

        

    },
    user_phone:{
        type: String,
        required: true,


    },
    sender_phone:{
        type:String,
        required:true,

    },
    
    trx_id:{
        type:String,
        required: true
    },
    
    amount:{
        type:String,
        required:true,
    },
   
    

},{timestamps:true})

export default mongoose.model('balancerequest',balanceRequest)