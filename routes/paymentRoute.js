import express from "express";


import {requireSignIn } from "../middlewares/authMiddleware.js";
import { addPaymentController, getPaymentController } from "../controllers/paymentController.js";
const router = express.Router()



router.post('/get-payment-method',requireSignIn,getPaymentController)

//admin
router.post('/add-payment-method',addPaymentController)



export default router;