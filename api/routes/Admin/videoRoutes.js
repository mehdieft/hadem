const express=require('express');
const videoController=require('../../controllers/videoController')
const router=express.Router()
const path=require('path')


const multer = require('multer');
// const testController=require('../../controllers/test')
const imageController=require('../../controllers/imageController')
var storage = multer.diskStorage({
    destination: './public/uploads/video',
    filename: function(req, file, callback) {
        var ext = path.extname(file.originalname);
        callback(null, path.basename(file.originalname, ext) + Date.now() + ext)
    }
});
var upload = multer({ storage: storage })


router.post('/insert',upload.single('video'),videoController.insert)
router.post('/update',upload.single('video'),videoController.update);
router.post('/delete',videoController.delete)


module.exports=router