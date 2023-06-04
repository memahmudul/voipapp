import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    payment_method_1:{
        type:String,
        required:true,

    },
    payment_method_2:{
        type:String,
        required:true,
    },
    
})

export default mongoose.model('payment',paymentSchema)