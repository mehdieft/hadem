const express=require('express');
const path=require('path')
const router=express.Router()
const shahidController=require('../../controllers/shahidController')
const multer = require('multer');
// const testController=require('../../controllers/test')
var storage = multer.diskStorage({
    destination: './public/uploads/shahid',
    filename: function(req, file, callback) {
        var ext = path.extname(file.originalname);
        callback(null, path.basename(file.originalname, ext) + Date.now() + ext)
    }
});
var upload = multer({ storage: storage })



router.get('/insert',shahidController.insert);

router.post('/insertOne',upload.single('image'),shahidController.insertOne)
router.post('/update',shahidController.update);
router.post('/delete',shahidController.delete);
router.get('/getAll',shahidController.getAll);



module.exports=router