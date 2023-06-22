
import mobileBankingModel from "../models/mobileBankingModel.js"
import userModel from "../models/userModel.js"
import { conn } from "../config/db.js"
import bankTransferModel from "../models/bankTransferModel.js"
import billPayModel from "../models/billPayModel.js"
import rechargeModel from "../models/rechargeModel.js"
import placeOfferOrderModel from "../models/placeOfferOrderModel.js"



export const addMobileBankingOrderController = async(req,res)=>{
    try { 
        const {receiver,banking_method,type,amount,sender_username,sender_email,sender_phone,status,commission} = req.body
        
        if(!receiver){
            return res.send({error: 'can not find receiver'})
        }
        if(!banking_method){
            return res.send({error: 'can not find banking_method'})
        }
        if(!type){
            return res.send({error: 'can not find type'})
        }
        if(!amount){
            return res.send({error: 'can not find amount'})
        }
        if(!sender_username){
            return res.send({error: 'can not find sender username'})
        }
        if(!sender_email){
            return res.send({error: 'can not find sender email'})
        }
        if(!sender_phone){
            return res.send({error: 'can not find sender phone'})
        }
        if(!status){
            return res.send({error: 'can not find status'})
        }
        if(!commission){
            return res.send({error: 'can not find commission'})
        }


        const data = await new mobileBankingModel({receiver,banking_method,type,amount,sender_username,sender_email,sender_phone,status,commission}).save()
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happend"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "mobile banking order placed successfully",
                    data
        
                })
               
            
                
           
            }
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in placing mobile banking order",
            error

        })
    }
       
}

export const addBankingOrderController = async(req,res)=>{
    try { 
        
        const {bank,branch,account_name,account_no,type,amount,sender_username,sender_email,sender_phone,status,commission} = req.body
        
        if(!bank){
            return res.send({error: 'can not find bank'})
        }
        if(!branch){
            return res.send({error: 'can not find branch'})
        }
        if(!account_name){
            return res.send({error: 'can not find account_name'})
        }
        if(!account_no){
            return res.send({error: 'can not find account_no'})
        }
        if(!type){
            return res.send({error: 'can not find type'})
        }
        if(!amount){
            return res.send({error: 'can not find amount'})
        }
        if(!sender_username){
            return res.send({error: 'can not find sender username'})
        }
        if(!sender_email){
            return res.send({error: 'can not find sender email'})
        }
        if(!sender_phone){
            return res.send({error: 'can not find sender phone'})
        }
        if(!status){
            return res.send({error: 'can not find status'})
        }
        if(!commission){
            return res.send({error: 'can not find commission'})
        }



        const data = await new bankTransferModel({bank,branch,account_name,account_no,type,amount,sender_username,sender_email,sender_phone,status,commission}).save()
       
        
        console.log(data);
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happend"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "banking order placed successfully",
                    data
        
                })
               
            
                
           
            }
        
    } catch (error) {
        
        res.status(200).send({
            success:false,
            message: "error in placing banking order",
            error

        })
    }
       
}



export const addBillPayOrderController = async(req,res)=>{
    try { 
        
        let data;
        
        const {bill_service,type,month,meter_no,account_no,contact_no,biller_name,amount,sender_username,sender_email,sender_phone,status,commission} = req.body
        
        if(!type){
            return res.send({error: 'can not find type'})

        }
        if(type==='prepaid'){
            if(!bill_service){
                return res.send({error: 'can not find bill service'})
            }
          
            if(!month){
                return res.send({error: 'can not find month'})
            }
            if(!meter_no){
                return res.send({error: 'can not find meter no'})
            }
            if(!account_no){
                return res.send({error: 'can not find account no'})
            }
            if(!contact_no){
                return res.send({error: 'can not find contact no'})
            }
    
            if(!biller_name){
                return res.send({error: 'can not find biller name'})
            }
            if(!sender_username){
                return res.send({error: 'can not find sender username'})
            }
            if(!sender_email){
                return res.send({error: 'can not find sender email'})
            }
            if(!sender_phone){
                return res.send({error: 'can not find sender phone'})
            }
            if(!status){
                return res.send({error: 'can not find status'})
            }
            if(!amount){
                return res.send({error: 'can not find amount'})
            }
            if(!commission){
                return res.send({error: 'can not find commission'})
            }
    


            data = await new billPayModel({bill_service,type,month,meter_no,account_no,contact_no,biller_name,amount,sender_username,sender_email,sender_phone,status,commission}).save()

        }else if(type==='postpaid'){
            if(!bill_service){
                return res.send({error: 'can not find bill service'})
            }
          
            if(!account_no){
                return res.send({error: 'can not find account no'})
            }
            if(!sender_username){
                return res.send({error: 'can not find sender username'})
            }
            if(!sender_email){
                return res.send({error: 'can not find sender email'})
            }
            if(!sender_phone){
                return res.send({error: 'can not find sender phone'})
            }
            if(!status){
                return res.send({error: 'can not find status'})
            }
            if(!amount){
                return res.send({error: 'can not find amount'})
            }
            if(!commission){
                return res.send({error: 'can not find commission'})
            }
    

            data = await new billPayModel({bill_service,type,account_no,amount,sender_username,sender_email,sender_phone,status,commission}).save()

        }
        
        



      
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happend"
                })
            }else{
                
                res.status(200).send({
                    success:true,
                    message: "Bill Pay Order placed successfully",
                    data
        
                })
               
            
                
           
            }
        
    } catch (error) {
        
        res.status(200).send({
            success:false,
            message: "error in placing pill pay order",
            error

        })
    }
       
}



export const addRechargeOrderController = async(req,res)=>{
    try { 
        const {recipient,operators,type,amount,sender_username,sender_email,sender_phone,status,commission} = req.body
        
        if(!recipient){
            return res.send({error: 'can not find receiver'})
        }
        if(!operators){
            return res.send({error: 'can not find operator'})
        }
        if(!type){
            return res.send({error: 'can not find type'})
        }
        if(!amount){
            return res.send({error: 'can not find amount'})
        }
        if(!sender_username){
            return res.send({error: 'can not find sender username'})
        }
        if(!sender_email){
            return res.send({error: 'can not find sender email'})
        }
        if(!sender_phone){
            return res.send({error: 'can not find sender phone'})
        }
        if(!status){
            return res.send({error: 'can not find status'})
        }
        if(!commission){
            return res.send({error: 'can not find commission'})
        }


       
        const data = await new rechargeModel({recipient,operators,type,amount,sender_username,sender_email,sender_phone,status,commission}).save()
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happend"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "recharge order placed successfully",
                    data
        
                })
               
            
                
           
            }
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in placing recharge order",
            error

        })
    }
       
}


export const placeOfferOrderController = async(req,res)=>{
    try { 
        const {recipient,operators,price,offer_name,sender_username,sender_email,sender_phone,status,commission} = req.body
        
        if(!recipient){
            return res.send({error: 'can not find receiver'})
        }
        if(!operators){
            return res.send({error: 'can not find operator'})
        }
        if(!price){
            return res.send({error: 'enter price'})
        }
        if(!offer_name){
            return res.send({error: 'can not find offer_name'})
        }
        if(!sender_username){
            return res.send({error: 'can not find sender username'})
        }
        if(!sender_email){
            return res.send({error: 'can not find sender email'})
        }
        if(!sender_phone){
            return res.send({error: 'can not find sender phone'})
        }
        if(!status){
            return res.send({error: 'can not find status'})
        }
        if(!commission){
            return res.send({error: 'can not find commission'})
        }


       
        const data = await new placeOfferOrderModel({recipient,operators,price,offer_name,sender_username,sender_email,sender_phone,status,commission}).save()
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happened"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "recharge order placed successfully",
                    data
        
                })
               
            
                
           
            }
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in placing recharge order",
            error

        })
    }
       
}
























export const getAllMobileBankingOrderController = async(req,res)=>{
    try {
        const {sender_email} = req.body;
        
        
        
    if(!sender_email){
        return res.send({error: 'can not find account with this email'})
    }
    
    const result = await mobileBankingModel.find({sender_email})
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any account with this email"
            })
        }else{
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'Transaction history fetched successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching all transaction history",
            error

        })
        
    }
}

export const getAllBankingOrderController = async(req,res)=>{
   
    try {
        
        
     
       const {sender_email} = req.body;
     
      
       
        
        
    if(!sender_email){
        return res.send({error: 'can not find account with this email'})
    }
    
    const result = await bankTransferModel.find({sender_email})
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any account with this email"
            })
        }else{
            
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'Banking Transaction history fetched successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching all Banking transaction history",
            error

        })
        
    }
}








export const getAllBillPayOrderController = async(req,res)=>{
   
    try {
        
        
     
       const {sender_email} = req.body;
     
      
       
        
        
    if(!sender_email){
        return res.send({error: 'can not find account with this email'})
    }
    
    const result = await billPayModel.find({sender_email})
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any account with this email"
            })
        }else{
            
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'Bill Pay Transaction history fetched successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching all bill pay transaction history",
            error

        })
        
    }
}


export const getAllRechargeOrderController = async(req,res)=>{
   
    try {
        
        
     
       const {sender_email} = req.body;
     
      
       
        
        
    if(!sender_email){
        return res.send({error: 'can not find account with this email'})
    }
    
    const result = await rechargeModel.find({sender_email})
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any account with this email"
            })
        }else{
            
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'Recharge history fetched successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching all recharge  history",
            error

        })
        
    }
}



export const getAllOfferOrderController = async(req,res)=>{
   
    try {
        
        
     
       const {sender_email} = req.body;
     
      
       
        
        
    if(!sender_email){
        return res.send({error: 'can not find account with this email'})
    }
    
    const result = await placeOfferOrderModel.find({sender_email})
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any account with this email"
            })
        }else{
            
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'Offer Order history fetched successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching all offer order history",
            error

        })
        
    }
}






export const performTransactionController = async(req,res)=>{
    const session = await conn.startSession();
    try {
        const {id,status,email,transaction,amount,commission} = req.body

       

        
    if(!id){
        return res.send({error: 'can not find transaction with this id'})
    }
    if(!status){
        return res.send({error: 'can not find status'})
    }
    if(!transaction){
        return res.send({error: 'can not find transaction type'})
    }
    if(!amount){
        return res.send({error: 'can not find amount'})
    }
    if(!commission){
        return res.send({error: 'can not find commission'})
    }


    
    
    session.startTransaction();  
    if(transaction==='mobile-banking'){
        await mobileBankingModel.findOneAndUpdate({_id:id},{status},{session})
        
        

    }else if(transaction==='bill-pay'){
        await mobileBankingModel.findOneAndUpdate({_id:id},{status},{session})

        

    }else if(transaction==='bank-transfer'){
        await bankTransferModel.findOneAndUpdate({_id:id},{status},{session})

    }else if(transaction==='mobile-recharge'){
        await rechargeModel.findOneAndUpdate({_id:id},{status},{session})

    }else if(transaction==='drive-offer'){
        await placeOfferOrderModel.findOneAndUpdate({_id:id},{status},{session})

    }

    

    if(status==='success'){
        
        const doc = await userModel.findOne({email}).exec()
        const prevBalance = doc.balance
        
       
            const newBalance = parseInt(prevBalance)-parseInt(amount)

            
            const commission_total = parseInt(prevBalance)*parseInt(commission)
            const finalBalance = newBalance+commission_total

       
        
    
    await userModel.findOneAndUpdate({email},{balance:finalBalance.toString()},{session})

    }

   
   

    
  
    
    

    await session.commitTransaction();
    
    res.status(201).send({
        success:true,
        message: 'transaction updated successfully',
        
        
       
    })
        
           
            
            
            
          
    
        
    } catch (error) {
        await session.abortTransaction();
        res.status(200).send({
            success:false,
            message: "error in editing transaction status",
            error

        })
        
    }
    session.endSession();
}