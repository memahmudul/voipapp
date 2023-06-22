import paymentModel from "../../models/paymentModel.js"




export const editFirstPaymentController = async(req,res)=>{
    try { 
        const {payment_method_1} = req.body
        
        
        if(!payment_method_1){
            return res.send({error: 'can not find payment_method_1'})
        }
   
       

        

       


        const data = await paymentModel.findOneAndUpdate({},{payment_method_1})
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happened"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "first payment method   updated successfully",
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



export const editSecondPaymentController = async(req,res)=>{
    try { 
        const {payment_method_2} = req.body
        
        
        if(!payment_method_2){
            return res.send({error: 'can not find payment_method_2'})
        }
      

        

       


        const data = await paymentModel.findOneAndUpdate({},{payment_method_2})
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happened"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "second payment method   updated successfully",
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
