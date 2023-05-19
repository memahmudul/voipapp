
import userModel from "../models/userModel.js";


// export const addBalanceController = async(req,res)=>{
//     try { 
//         const {username,amount} = req.body
//     if(!username){
//         return res.send({error: 'can not find account with this username'})
//     }
//     if(!balance){
//         return res.send({error: 'You have  to add at least any amount'})
//     }
//     const balance = await new balanceModel({username,balance}).save()
//     res.status(201).send({
//         success:true,
//         message: 'balance added successfully',
//         balance
//     })
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success:false,
//             message: "error in adding balance",
//             error

//         })
        
//     }
// }


export const getBalanceController = async(req,res)=>{
    try { 
        
        const {email} = req.body
        
        
    if(!email){
        return res.send({error: 'can not find account with this email'})
    }
    
    const result = await userModel.findOne({email})
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any account with this email"
            })
        }else{
           
            const balance = result.balance
            console.log(balance);
            
            res.status(200).send({
                success:true,
                message: 'balance fetched successfully',
                
                balance
            })
        }
    
    
    
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: "error in fetching balance",
            error

        })
        
    }
}