import express from "express";
import {loginController, registerController,confirmPinController} from '../controllers/authController.js'
import { getBalanceController,addBalanceRequestController} from "../controllers/balanceController.js";
import { isReseller, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router()
//routing
//Register || METHOD  POST

// router.post('/add-balance',addBalanceController)
router.post('/get-balance',getBalanceController)
router.post('/add-balance-request',addBalanceRequestController)



// //test route
// router.get('/test',requireSignIn,isReseller,(req,res)=>{
//     res.status(200).send({
//         message: 'testing'
//     })

// })
export default router;