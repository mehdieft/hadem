const express=require('express');
const router=express.Router();
const shahidController=require('../../controllers/shahidController')


router.get('/getByDate',shahidController.todayShahid);
router.get('/getByName',shahidController.getByName);





module.exports=router