const express=require('express')
const path=require('path')
const router=express.Router();
const multer = require('multer');
// const testController=require('../../controllers/test')
const imageController=require('../../controllers/imageController')
var storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, callback) {
        var ext = path.extname(file.originalname);
        callback(null, path.basename(file.originalname, ext) + Date.now() + ext)
    }
});
var upload = multer({ storage: storage })

router.post('/insert',upload.single('image'),imageController.insert);
router.post('./update',upload.single('image'),imageController.update)
// router.delete('/delete-item/:id',imageController.deleteImage)
module.exports=router




