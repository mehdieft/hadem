const express=require('express');
const router=express.Router()
const shahidController=require('../../controllers/shahidController')




router.post('/insert',shahidController.insert);
router.post('/update',shahidController.update);
router.post('/delete',shahidController.delete);



module.exports=router