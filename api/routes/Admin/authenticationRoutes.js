const express=require('express');
const router=express.Router();
const adminAuthController=require('../../controllers/authAdminController')
const authMiddleware=require('../../middleware/authMiddleware')


router.post('/login',authMiddleware,adminAuthController.login)
router.post('/register',adminAuthController.register)
router.post('/test',adminAuthController.testRegister)

router.post('/changePassword',)






module.exports=router