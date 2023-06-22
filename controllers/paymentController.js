import paymentModel from "../models/paymentModel.js";




export const getPaymentController = async(req,res)=>{
    try {
       

    
    const result = await paymentModel.find({})
  
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any payment method"
            })
        }else{
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'payment method fetched Successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        
        res.status(200).send({
            success:false,
            message: "error in fetching payment met",
            error

        })
        
    }
}

