const express=require('express')
const router=express.Router();
const multer = require('multer');
// const testController=require('../../controllers/test')
const imageCoontroller=require('../../controllers/imageController')

var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads') // specify the path to save the file
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) // use originalname as the new filename
  }
})

var upload = multer({ storage: storage })



router.post('/insert',upload.single('image'),imageCoontroller.insert);

module.exports=router