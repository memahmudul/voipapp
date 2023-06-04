import paymentModel from "../models/paymentModel.js";
import sliderImageModel from "../models/sliderImageModel.js";

export const addPaymentController = async(req,res)=>{
    try { 
        const {payment_method_1,payment_method_2} = req.body
        
        
        if(!payment_method_1){
            return res.send({error: 'can not find payment_method_1'})
        }
        if(!payment_method_2){
            return res.send({error: 'can not find payment_method_2'})
        }
       

        

       


        const data = await new paymentModel({payment_method_1,payment_method_2}).save()
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happened"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "new payment method   table added successfully",
                    data
        
                })
               
            
                
           
            }
        
    } catch (error) {
       
        res.status(200).send({
            success:false,
            message: "error in adding new payment method table",
            error

        })
    }
       
}


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

