const express=require('express');
const router=express.Router();
const shahidController=require('../../controllers/shahidController');
const ImageController=require('../../controllers/imageController');


router.get('/getByDate',shahidController.todayShahid);
router.get('/getByName',shahidController.getByName);
router.get('/getImageByTitle',ImageController.getImageByTitle);





module.exports=router