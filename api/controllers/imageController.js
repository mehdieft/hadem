const Image = require("../Models/Image");
const uploaadImage = require("../middleware/multer");
const multer = require("multer");

exports.insert = async (req, res, next) => {
  console.log("insert on  imager controller");
  if (req.file) {
    var storage = multer.diskStorage({
      destination: "./public/uploads/",
      filename: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        callback(null, path.basename(ext) + Date.now() + ext);
      },
    });
    var upload = multer({ storage: storage });
    upload.single("image");
    console.log("____in the controleer___", req.file.filename);
    const imageName = req.file.filename;
    const alt = req.body.alt;
    const title = req.body.title;
    const storeImage = await new Image({
      url: imageName,
      alt: alt,
      title: title,
    }).save();
    if (storeImage) {
      res
        .status(200)
        .json({ message: "successfuly inserted", image: storeImage });
    } else {
      res.status(500).json({ message: "error somethings wrong" });
    }
  } else {
    res.status(500).json({ message: "it should be file with request" });
  }
};
exports.update = async (req, res, next) => {
  console.log("why you not working",req.body.id,req.body.title,req.body.alt);
id= req.body.id.trim(); 
  const findedImage = await Image.findById(id);
  if (findedImage) {
    if (req.file) {
      var storage = multer.diskStorage({
        destination: "./public/uploads/",
        filename: function (req, file, callback) {
          var ext = path.extname(file.originalname);
          callback(null, path.basename(ext) + Date.now() + ext);
        },
      });
      var upload = multer({ storage: storage });
      upload.single("image");
      console.log("____in the controleer___", req.file.filename);
      const url = req.file.filename;
      const alt = req.body.alt;
      const title = req.body.title;
      const savedUpdateImage = await findedImage.updateOne({
        url,
        alt,
        title,
      });

      if (savedUpdateImage) {
        res.status(200).json({ message: "successfuly updated" });
      } else {
        res.status(500).json({ message: "somethings wrong" });
      }
    } else {
      const savedImage = await findedImage.updateOne({
        
        alt: req.body.alt,
        title: req.body.title,
      });
      if (savedImage) {
        res.status(200).json({ message: "successfuly updated" });
      } else {
        res.status(500).json({ message: "opps something wrong try later" });
      }
    }
  }else{
    console.log("not finded____")
  }
};
exports.delete=async(req,res,next)=>{
  console.log("here___",req.body.id)
 id=req.body.id.trim()
  const deletedImage=await Image.findByIdAndDelete(id)
  if(deletedImage){
    res.status(200).json({message:"successfuly deleted"})
  }else{
    res.status(500).json({message:"error somethings wrong"});
  }
}
exports.getAll=async(req,res,next)=>{
  console.log("tttttttttt")
  const data=await Image.find();
  if(data)res.status(200).json({data})
  else res.status(500).json({error:"error something wrong check your connection"});
}
