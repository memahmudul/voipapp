import express from "express";


import {requireAdminSignIn, requireSignIn } from "../middlewares/authMiddleware.js";
import {  getPaymentController } from "../controllers/paymentController.js";
const router = express.Router()



router.post('/get-payment-method',requireSignIn,getPaymentController)

//admin




export default router;