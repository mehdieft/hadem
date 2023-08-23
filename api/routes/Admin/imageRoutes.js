const express=require('express')
const router=express.Router();
const multer = require('multer');
// const testController=require('../../controllers/test')
const imageCoontroller=require('../../controllers/imageController')
var storage = multer.diskStorage({
    destination: 'publlic/uploads/',
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = multer({ storage: storage })

router.post('/insert',upload.single('image'),imageCoontroller.insert);

module.exports=router




