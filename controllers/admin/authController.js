import adminModel from "../../models/admin/adminModel.js";
import { comparePassword, hashPassword } from "../../helpers/authHelper.js";
import JWT from "jsonwebtoken"





export const registerController = async(req,res)=>{
    try {
        const {name,email, password,status} = req.body
        //validations
        if(!name){
            return res.send({error: 'name is required'})
        }
       
       
       
        if(!email){
            return res.send({error: 'Email is required'})
        }
        if(!password){
            return res.send({error: 'password is required'})
        }
       
        if(!status){
            return res.send({error: 'status is required'})
        }

         //check Email
       const existingEmail = await adminModel.findOne({email})
       //existing Email
       if(existingEmail){
           return res.status(200).send({
               success:false,
               message: 'Email already exists'
           })
       }


       
        //register user
        const hashedPassword = await hashPassword(password)
        //save
       
        const admin = await new adminModel({name, email, password:hashedPassword, status}).save()
        res.status(200).send({
            success:true,
            message: 'Admin registered successfully',
            admin
        })

        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in Admin Registration",
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
        const admin = await adminModel.findOne({email})
        
        if(!admin){
            return res.status(201).send({
                success:false,
                message: "Email number is not registered As Admin"
            })
        }

        if(admin.status==='pending'){
            return res.status(200).send({
                success: false,
                message: "The Account is pending."
            })

        }

        

        const match = await comparePassword(password,admin.password)
        if(!match){
            return res.status(200).send({
                success: false,
                message: "Password does not match"
            })
        }

        //token
        const token =  JWT.sign({_id:admin._id},process.env.JWT_SECRET)
        res.status(200).send({
            success:true,
            message:'Login successfull',
            admin:{
                name: admin.name,            
                email: admin.email,
                status: admin.status,    
            },
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in login",
            error

        })
        
    }


}
