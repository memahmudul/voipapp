
import balanceRequest from "../../models/balanceRequest.js";
import userModel from "../../models/userModel.js";
import { conn } from "../../config/db.js"



export const getBalanceRequestListController = async(req,res)=>{
    try { 



        
 
    const result = await balanceRequest.find({})

    


    
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any Balance Request"
            })
        }else{
           
          
       
            
            res.status(200).send({
                success:true,
                message: 'balance request List fetched successfully',
                
                result
            })
        }
    
    
    
        
    } catch (error) {
        console.log(error);
       
        res.status(200).send({
            success:false,
            message: "error in fetching balance",
            error

        })
        
    }
}



export const addBalanceToUserController = async(req,res)=>{
    try { 

        const {email,amount} = req.body


        const balance = amount





        
 
    const result = await userModel.findOneAndUpdate({email},{balance})

    


    
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Can not update balance"
            })
        }else{

            res.status(200).send({
                success:true,
                message: 'balance Added Successfully',
                
               
            })
        }
    
    
    
        
    } catch (error) {
        console.log(error);
       
        res.status(200).send({
            success:false,
            message: "error in fetching balance",
            error

        })
        
    }
}



export const cancelBalanceRequestController = async(req,res)=>{
    try { 

        const {id} = req.body


   





        
 
    const result = await balanceRequest.findOneAndDelete({_id:id})

    


    
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Can not delete balance request"
            })
        }else{
            console.log(result.data);

            res.status(200).send({
                success:true,
                message: 'balance Request Deleted Successfully',
                result
                
               
            })
        }
    
    
    
        
    } catch (error) {
        console.log(error);
       
        res.status(200).send({
            success:false,
            message: "error in deleting balance request",
            error

        })
        
    }
}



export const confirmBalanceRequestController = async(req,res)=>{
    const session = await conn.startSession();
    try { 
       

        const {email,balance,id} = req.body
        

        
const user = await userModel.findOne({email}).exec()



const currentBalance = user.balance

const newbalance = parseInt(currentBalance)+parseInt(balance)

const updatedBalance = newbalance.toString()

   



session.startTransaction();  

        
 
    const result = await userModel.findOneAndUpdate({email},{balance:updatedBalance},{session})
    await balanceRequest.findOneAndDelete({_id:id},{session})


    await session.commitTransaction();

    //balanceRequestList theke request ta delete kore dite hobe

    


    
        if(!result){
            
            return res.status(201).send({
                success:false,
                message: "Can not Add Balance"
            })
        }else{
          
           

            res.status(200).send({
                success:true,
                message: 'balance Added Successfully',
                result
                
               
            })
        }
    
    
    
        
    } catch (error) {
        console.log(error);
        await session.abortTransaction();
       
        res.status(200).send({
            success:false,
            message: "error in adding balance",
            error

        })
        
    }
}






export const editBalanceController = async(req,res)=>{
   
    try { 
       

        const {email,balance} = req.body
        

        
const user = await userModel.findOne({email}).exec()



const currentBalance = user.balance

const newbalance = parseInt(currentBalance)+parseInt(balance)

const updatedBalance = newbalance.toString()

   


 

        
 
    const result = await userModel.findOneAndUpdate({email},{balance:updatedBalance})
    





    


    
        if(!result){
            
            return res.status(201).send({
                success:false,
                message: "Can not Edit Balance"
            })
        }else{
          
           

            res.status(200).send({
                success:true,
                message: 'balance Edited Successfully',
                result
                
               
            })
        }
    
    
    
        
    } catch (error) {
        console.log(error);
        
       
        res.status(200).send({
            success:false,
            message: "error in editing balance",
            error

        })
        
    }
}

