import express from "express";


import { isReseller, requireSignIn } from "../middlewares/authMiddleware.js";
import { addCommissionController, getCommissionController } from "../controllers/comissionControler.js";
const router = express.Router()



router.post('/get-commission',requireSignIn,getCommissionController)

//admin
router.post('/add-new-commission',addCommissionController)



export default router;