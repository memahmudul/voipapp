import express from "express";

import { requireAdminSignIn, requireSignIn } from "../middlewares/authMiddleware.js";
import { loginController, registerController } from "../controllers/admin/authController.js";
import { addBalanceToUserController, cancelBalanceRequestController, confirmBalanceRequestController, editBalanceController, getBalanceRequestListController } from "../controllers/admin/balanceController.js";
import { addPaymentController, editFirstPaymentController, editSecondPaymentController, editThirdPaymentController } from "../controllers/admin/paymentController.js";
import { addCommissionController, editCommissionController, getCommissionController } from "../controllers/comissionControler.js";
import { editSliderImageController } from "../controllers/sliderController.js";
import { deleteUserController, getAllUserController, getSingleUserController } from "../controllers/admin/userController.js";
import { fetchAllBankingOrderController, fetchAllBillPayOrderController, fetchAllMobileBankingOrderController, fetchAllOfferOrderController, fetchAllRechargeOrderController } from "../controllers/admin/orderController.js";
import { deleteAnOfferController, getAllOfferByAdminController, getAllOfferController } from "../controllers/offerController.js";
import {  addNotificationController, deleteNotificationController, getAllNotificationController } from "../controllers/admin/notificationController.js";

//router object
const router = express.Router()
//routing
//Register || METHOD  POST
router.post('/register',registerController)


//login
router.post('/login',loginController)

router.post('/get-balance-request-list',requireAdminSignIn,getBalanceRequestListController)
router.post('/add-balance-to-user',requireAdminSignIn,addBalanceToUserController)
router.post('/cancel-balance-request',requireAdminSignIn,cancelBalanceRequestController)
router.post('/confirm-balance-request',requireAdminSignIn,confirmBalanceRequestController)
router.post('/edit-balance',requireAdminSignIn,editBalanceController)



router.post('/edit-first-payment-method',requireAdminSignIn,editFirstPaymentController)
router.post('/edit-second-payment-method',requireAdminSignIn,editSecondPaymentController)
router.post('/edit-third-payment-method',requireAdminSignIn,editThirdPaymentController)


router.post('/add-all-payment-method',addPaymentController)





router.post('/edit-commission',requireAdminSignIn,editCommissionController)
router.post('/get-commission',requireAdminSignIn,getCommissionController)



router.post('/edit-slider-images',requireAdminSignIn,editSliderImageController)



router.post('/get-all-users',requireAdminSignIn,getAllUserController)
router.post('/get-single-user',requireAdminSignIn,getSingleUserController)
router.post('/delete-user',requireAdminSignIn,deleteUserController)







router.post('/get-all-mobile-banking-order',requireAdminSignIn,fetchAllMobileBankingOrderController)
router.post('/get-all-banking-order',requireAdminSignIn,fetchAllBankingOrderController)
router.post('/get-all-bill-pay-order',requireAdminSignIn,fetchAllBillPayOrderController)
router.post('/get-all-recharge-order',requireAdminSignIn,fetchAllRechargeOrderController)
router.post('/get-all-offer-order',requireAdminSignIn,fetchAllOfferOrderController)






router.post('/get-all-offers',requireAdminSignIn,getAllOfferByAdminController)

router.post('/delete-an-offers',requireAdminSignIn,deleteAnOfferController)


router.post('/add-notification',requireAdminSignIn,addNotificationController)
router.post('/get-all-notification-by-user',requireSignIn,getAllNotificationController)
router.post('/get-all-notification',requireAdminSignIn,getAllNotificationController)
router.post('/delete-notification',requireAdminSignIn,deleteNotificationController)



export default router;