const express=require('express');
const router=express.Router();
const shahidController=require('../../controllers/shahidController')


router.get('/getByDate',shahidController.todayShahid);





module.exports=router