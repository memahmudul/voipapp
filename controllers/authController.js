import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken"



export const registerController = async(req,res)=>{
    try {
        const {name, username, country, phone, email, password, pin, role} = req.body
        //validations
        if(!name){
            return res.send({error: 'name is required'})
        }
        if(!username){
            return res.send({error: 'username is required'})
        }
        if(!country){
            return res.send({error: 'country is required'})
        }
        if(!phone){
            return res.send({error: 'phone number is required'})
        }
        if(!email){
            return res.send({error: 'Email is required'})
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

         //check username
         const existingUsername = await userModel.findOne({username})
         //existing username
         if(existingUsername){
             return res.status(200).send({
                 success:true,
                 message: 'Username already exists'
             })
         }

        //check Email
        const existingEmail = await userModel.findOne({email})
        //existing Email
        if(existingEmail){
            return res.status(200).send({
                success:true,
                message: 'Email already exists'
            })
        }

        

         //check phone
         const existingPhone = await userModel.findOne({phone})
         //existing phone
         if(existingPhone){
             return res.status(200).send({
                 success:true,
                 message: 'Phone number already existsxx'
             })
         }

        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({name,username,country, phone, email, password:hashedPassword, pin, role}).save()
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
      
        const {phone,password} = req.body
        if(!phone){
            return res.send({error: 'phone is required'})
        }
        if(!password){
            return res.send({error: 'Password is required'})
        }

        //check user
        const user = await userModel.findOne({phone})
        if(!user){
            return res.status(404).send({
                success:false,
                message: "Phone number is not registered"
            })
        }

        

        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            })
        }

        //token
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        res.status(200).send({
            success:true,
            message:'Login successfull',
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                country: user.country
                
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