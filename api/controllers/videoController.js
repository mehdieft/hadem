const VideoModel = require("../Models/Video");
const multer = require("multer");

exports.insert = async (req, res, next) => {
  console.log("_____", req.body);
  if (req.file) {
    var storage = multer.diskStorage({
      destination: "./public/uploads/video",
      filename: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        callback(null, path.basename(ext) + Date.now() + ext);
      },
    });
    var upload = multer({ storage: storage });
    upload.single("video");
    console.log("____in the controleer___", req.file.filename);
    const videoName = req.file.filename;
    const alt = req.body.alt;
    const title = req.body.title;
    const storeVideo = await new VideoModel({
      url: videoName,
      alt: alt,
      title: title,
    }).save();
    if (storeVideo) {
      res
        .status(200)
        .json({ message: "succesfuly inserted", video: storeVideo });
    } else {
      res.status(500).json({ message: "error somethings wrong" });
    }
  } else {
    res.status(500).json({ message: "you must insert video" });
  }
};

exports.update = async (req, res, next) => {
  const id = req.body.id.trim();
  const findedVideo = await VideoModel.findById(id);
  if (findedVideo) {
    if (req.file) {
      console.log("*****************request has file************");
      var storage = multer.diskStorage({
        destination: "./public/uploads/video",
        filename: function (req, file, callback) {
          var ext = path.extname(file.originalname);
          callback(null, path.basename(ext) + Date.now() + ext);
        },
      });
      var upload = multer({ storage: storage });
      upload.single("video");
      const url = req.file.filename;
      const alt = req.body.alt;
      const title = req.body.title;
      const savedUploadVideo = await findedVideo.updateOne({
        url,
        alt,
        title,
      });
      if (savedUploadVideo) {
        res.status(200).json({ message: "successfuly updated" });
      } else {
        res.status(500).json({ message: "opps  somethings wrong " });
      }
    }
  } else {
    res.status(500).json({ message: "error somethings wrong" });
  }
};

exports.delete = async (req, res, next) => {
  const id = req.body.id.trim();
  const deleteVideo = await VideoModel.findByIdAndDelete(id);
  if (deleteVideo) {
    res.status(200).json({ message: "successfult deleted" });
  }
};
exports.getAll=async(req,res,next)=>{
    const videos= await VideoModel.find();
    if(videos)res.status(200).json(videos)
    else  res.status(500).json({message:"error somethings wrong on get data"})

}