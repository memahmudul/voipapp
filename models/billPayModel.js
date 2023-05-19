import mongoose from "mongoose";

const billPaySchema = new mongoose.Schema({
    transaction:{
        type:String,
        default:'bill-pay'
        
    },

    bill_service:{
        type:String,
        required:true,
        trim:true
    },
    
     type:{
        type:String,
        required:true,
        
    },
     month:{
        type:String,
        
        
    },
    meter_no:{
        type:String,
    
        
    },
    account_no:{
        type:String,
        required:true,
        
    },
    contact_no:{
        type:String,
        
        
    },
    biller_name:{
        type:String,
      
        
    },
    amount:{
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
    
    

},{timestamps:true})

export default mongoose.model('billpay',billPaySchema)