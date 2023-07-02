import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken"



export const registerFirstPageController = async(req,res)=>{
    try {
        const {name, username, phone, email,admin} = req.body
        if(!name){
            return res.send({error: 'name is required'})
        }
        if(!username){
            return res.send({error: 'username is required'})
        }
       
        if(!phone){
            return res.send({error: 'phone number is required'})
        }
        if(!email){
            return res.send({error: 'Email is required'})
        }

        if(!admin){
            return res.send({error: 'Admin Name is required'})
        }

        //check username
        const existingUsername = await userModel.findOne({username})
        //existing username
        if(existingUsername){
            return res.status(200).send({
                success:false,
                message: 'Username already exists'
            })
        }

       //check Email
       const existingEmail = await userModel.findOne({email})
       //existing Email
       if(existingEmail){
           return res.status(200).send({
               success:false,
               message: 'Email already exists'
           })
       }

       

        //check phone
        const existingPhone = await userModel.findOne({phone})
        //existing phone
        if(existingPhone){
            return res.status(200).send({
                success:false,
                message: 'Phone number already exists'
            })
        }

        res.status(201).send({
            success:true,
            message: 'Registartion first page validation success',
    
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: "error in registration first page",
            error

        })
        
        
    }
}


export const registerController = async(req,res)=>{
    try {
        const {name, username, phone, email,admin, password, pin, role} = req.body
        //validations
        if(!name){
            return res.send({error: 'name is required'})
        }
        if(!username){
            return res.send({error: 'username is required'})
        }
       
        if(!phone){
            return res.send({error: 'phone number is required'})
        }
        if(!email){
            return res.send({error: 'Email is required'})
        }

        if(!admin){
            return res.send({error: 'Admin name is required'})
        }
        if(!password){
            return res.send({error: 'password is required'})
        }
        if(!pin){
            return res.send({error: 'pin is required'})
        }
        if(!role){
            return res.send({error: 'role is required'})
        }

       
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const balance='0'
        const user = await new userModel({name,username, phone, email,admin, password:hashedPassword, pin, role,balance}).save()
        res.status(201).send({
            success:true,
            message: 'user registered successfully',
            user
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: "error in registration",
            error

        })
        
    }

}

export const loginController = async(req,res)=>{
    try {
      
        const {email,password} = req.body
        if(!email){
            return res.send({error: 'Email is required'})
        }
        if(!password){
            return res.send({error: 'Password is required'})
        }

        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(201).send({
                success:false,
                message: "Email number is not registered"
            })
        }

        

        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(201).send({
                success: false,
                message: "Password does not match"
            })
        }

        //token
        const token =  JWT.sign({_id:user._id},process.env.JWT_SECRET)
        res.status(200).send({
            success:true,
            message:'Login successfull',
            user:{
                admin: user.admin,
                name: user.name,
                username:user.username,
                email: user.email,
                phone: user.phone,
                role: user.role,
                balance:user.balance

                
                
            },
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: "error in login",
            error

        })
        
    }


}

export const confirmPinController = async(req,res)=>{
    try {
        const {pin,email} = req.body
        if(!pin){
            return res.send({error: 'Pin is required'})
        }
        if(!email){
            return res.send({error: 'User is not registered'})
        }

        ///verify pin
         
         const user = await userModel.findOne({email})
         if(!user){
             return res.status(201).send({
                 success:false,
                 message: "Email number is not registered"
             })
         }
         const matchPin = user.pin===pin
         if(!matchPin){
             return res.status(201).send({
                 success: false,
                 message: "পিন সঠিক নয়।"
             })
         }
         res.status(200).send({
            success:true,
            message: 'পিন সফলভাবে নিশ্চিত করা হয়েছে',
           
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: "error in pin confirm",
            error

        })
        
    }
}