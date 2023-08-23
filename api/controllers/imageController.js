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
      name: imageName,
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
  const findedImage = await Image.finOne({ id: req.params.id });
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
      const name = req.file.filename;
      const alt = req.body.alt;
      const title = req.body.title;
      const savedUpdateImage = await findedImage
        .update({
          name,
          alt,
          title,
        })
        .save();
      if (savedUpdateImage) {
        res.status(200).json({ message: "successfuly updated" });
      } else {
        res.status(500).json({ message: "somethings wrong" });
      }
    } else {
       const savedImage=await findedImage.update({
        name:req.body.name,
        alt:req.body.alt,
        title:req.body.title
       }).save()
       if(savedImage){
        res.status(200).json({message:"successfuly updated"})
       }else{
        res.status(500).json({message:"opps something wrong try later"})
       }
        
    }
  }
};
