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





export const editThirdPaymentController = async(req,res)=>{
    try { 
        const {payment_method_3} = req.body

        console.log(payment_method_3);
        
        
        if(!payment_method_3){
            return res.send({error: 'can not find payment_method_3'})
        }
      

        

       


        const data = await paymentModel.findOneAndUpdate({},{payment_method_3})

        
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happened"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "Third payment method   updated successfully",
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





export const addPaymentController = async(req,res)=>{
    try { 
        const {payment_method_1,payment_method_2,payment_method_3} = req.body


        console.log(req.body);

        
        
        
        

        

       


        const data = await new paymentModel({payment_method_1,payment_method_2,payment_method_3}).save()

        
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happened"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "Third payment method   updated successfully",
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


