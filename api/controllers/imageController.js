const Image=require('../Models/Image');
const uploaadImage=require('../middleware/multer')

exports.insert=async (req,res,next)=>{
    if(req.file){
        uploaadImage()

    }

}