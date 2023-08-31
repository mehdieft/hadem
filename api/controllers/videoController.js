const VideoModel = require("../Models/Video");
exports.insert = async (req, res, next) => {
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
    if(storeVideo){
        res.status(200).json({message:"succesfuly inserted",video:storeVideo})
    }else{
        res.status(500).json({message:"error somethings wrong"})
    }
  } else {
    req.status(5000).json({ message: "you must insert video" });
  }
};

exports.update = async (req, res, next) => {};

exports.delete = async (req, res, next) => {
    const id=req.body.id.trim()
    const deleteVideo=await VideoModel.findByIdAndDelete(id)
    if(deleteVideo){
        res.status(200).json({message:"successfult deleted"})
    }
};
