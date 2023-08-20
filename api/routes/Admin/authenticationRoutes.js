const express=require('express');
const router=express.Router();
const adminAuthController=require('../../controllers/authAdminController')


router.post('/login',adminAuthController.login)
router.post('/changePassword',)






module.exports=router