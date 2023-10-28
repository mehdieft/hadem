const express=require('express');

const router=express.Router()
const shahidController=require('../../controllers/shahidController')




router.get('/insert',shahidController.insert);
router.post('/update',shahidController.update);
router.post('/delete',shahidController.delete);
router.post('/getAll',shahidController.getAll);



module.exports=router