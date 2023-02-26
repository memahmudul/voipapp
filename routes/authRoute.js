import express from "express";
import {loginController, registerController} from '../controllers/authController.js'
import { isReseller, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router()
//routing
//Register || METHOD  POST
router.post('/register',registerController)

//login
router.post('/login',loginController)

//test route
router.get('/test',requireSignIn,isReseller,(req,res)=>{
    res.status(200).send({
        message: 'testing'
    })

})
export default router;