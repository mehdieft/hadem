const express=require('express');
const path=require('path')
const multer = require('multer');
const router=express.Router()
const shahidController=require('../../controllers/shahidController')
var storage = multer.diskStorage({
    destination: './public/uploads/excel',
    filename: function(req, file, callback) {
       
        callback(null, path.basename(file.originalname))
    }
});
var upload = multer({ storage: storage })



router.post('/insert',upload.single("uploadfile"),shahidController.insert);
router.post('/update',shahidController.update);
router.post('/delete',shahidController.delete);



module.exports=router