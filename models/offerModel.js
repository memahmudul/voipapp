import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({


    operator:{
        type:String,
        required:true,
       
    },
    offer_type:{
        type:String,
        required:true,
        
    },
    
     name:{
        type:String,
        required:true,
        
    },

    validity:{
        type:String,
        required:true,
        
    },
    price:{
        type:String,
        required:true,
       
       
    }
    
    

},{timestamps:true})

export default mongoose.model('offer',offerSchema)