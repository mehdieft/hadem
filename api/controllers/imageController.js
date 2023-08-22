const Image=require('../Models/Image');
const uploaadImage=require('../middleware/multer')
const multer = require('multer');


exports.insert=async (req,res,next)=>{
    console.log("insert on  imager controller")
    if(req.file){
        console.log("hello world this is noobe sag mehdi saedi")
        

    }

}