const express=require('express')
const router=express.Router();
const testController=require('../../controllers/test')








router.post('/insert',testController.test);

module.exports=router