const express=require('express');
const videoController=require('../../controllers/videoController')

const router=express.Router()

router.post('/insert',videoController.insert)
router.post('/update',videoController.update);
router.post('/delete',videoController.delete)


module.exports=router