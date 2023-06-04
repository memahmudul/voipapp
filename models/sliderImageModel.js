import mongoose from "mongoose";

const sliderImageSchema = new mongoose.Schema({
    images:{
        type:Array,
        required:true,

    }
    

    
    

})

export default mongoose.model('sliderimage',sliderImageSchema)