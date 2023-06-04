import express from "express";
import {loginController, registerController,registerFirstPageController,confirmPinController} from '../controllers/authController.js'
import { isReseller, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router()
//routing
//Register || METHOD  POST
router.post('/register',registerController)
router.post('/register-first-page',registerFirstPageController)

//login
router.post('/login',loginController)
router.post('/confirmpin',confirmPinController)

//test route
router.get('/test',requireSignIn,isReseller,(req,res)=>{
    res.status(200).send({
        message: 'testing'
    })

})
export default router;