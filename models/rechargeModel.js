import mongoose from "mongoose";

const rechargeSchema = new mongoose.Schema({
    transaction:{
        type:String,
        default:'mobile-recharge'
        
    },

    recipient:{
        type:String,
        required:true,
        trim:true
    },
    operators:{
        type:String,
        required:true,
        
    },
    
     amount:{
        type:String,
        required:true,
        
    },

    type:{
        type:String,
        required:true,
        
    },
    sender_username:{
        type:String,
        required:true,
       
       
    },
    sender_email:{
        type:String,
        required:true,
        
       
    },
    sender_phone:{
        type:String,
        required:true,
        
       
    },
    status:{
        type:String,
        required:true,
        
       
    },
    commission:{
        type:String,
        required:true,

    }
    
    

},{timestamps:true})

export default mongoose.model('recharge',rechargeSchema)