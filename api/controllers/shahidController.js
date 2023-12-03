const Shahid = require("../Models/Shahid");
const moment = require("jalali-moment");
const multer = require('multer');


var fs = require("fs");
const { date } = require("joi");

exports.insert = async (req, res, next) => {
  filePath = "./public/uploads/excel/convertcsv.json";
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.json({ error: err, message: "oops! somethings wrong" });
    }
    var source = JSON.parse(data);

    console.log(source);

    var arrayToInsert = [];

    for (var i = 1; i < source.length; i++) {
      var singleRow = {
        name: source[i].I,
        family: source[i].J,
        fatherName: source[i].L,
        lastServePlace: source[i].M,
        placeOfDeath: source[i].O,
        militiryEducation: source[i].W,
        birthdate: moment(source[i].S).format("DD-MMM-YYYY"),
        dieDate: source[i].N,
        image: "",
        wayOfDie: source[i].P,
        cemeteryPlace: source[i].AE,
        birthdayPlace: source[i].R,
        dieYear:Number(source[i].N.split("/")[0])?Number(source[i].N.split("/")[0]):0,
        dieMonth: Number(source[i].N.split("/")[1])?Number(source[i].N.split("/")[1]):0,
        dieDay: Number(source[i].N.split("/")[2])?Number(source[i].N.split("/")[2]-1):0 ,
      };
      if (
        singleRow.birthdate == null ||
        singleRow.birthdate == "Invalid date"
      ) {
        singleRow.birthdate = "";
      }
      if (singleRow.dieDate == null || singleRow.dieDate == "Invalid date") {
        singleRow.dieDate = "";
      }
      if (
        singleRow.shamsiDieDate == null ||
        singleRow.shamsiDieDate == "Invalid date"
      ) {
        singleRow.shamsiDieDate = "";
      }
      if (
        singleRow.shamsiBirthdate == null ||
        singleRow.shamsiBirthdate == "Invalid date"
      ) {
        singleRow.shamsiBirthdate = "";
      }
      if (singleRow.name == null || singleRow.name == "") {
        singleRow.name = "نام ندارد";
      }
      if (singleRow.family == null || singleRow.family == "") {
        singleRow.family = "فامیلی ندارد";
      }
      if (singleRow.fatherName == null || singleRow.fatherName == "") {
        singleRow.fatherName = "نام پدر موجود نیست";
      }
      if (typeof singleRow.dieMonth !== "number"||singleRow.dieMonth==NaN ||singleRow.dieMonth==null||singleRow.dieMonth=='') {
        singleRow.dieMonth = 0;
      }
      if (typeof singleRow.dieDay !== "number"||singleRow.dieMonth==NaN ||singleRow.dieMonth==null||singleRow.dieMonth=='' ) {
        singleRow.dieDay = 0;
      }
      if (typeof singleRow.dieYear !== "number" ||singleRow.dieMonth==NaN ||singleRow.dieMonth==null||singleRow.dieMonth=='') {
        singleRow.dieYear = 0;
      }

      console.log("_________>", singleRow.birthdate);
      arrayToInsert.push(singleRow);
    }
    Shahid.insertMany(arrayToInsert)
      .then(function () {
        console.log("Data inserted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
  });
  res.status(200).json({message:'successfully inserted'})
};

exports.update = async (req, res, next) => {
  console.log(req.body);
  const id = req.body.id.trim();
  const findedShahid = await Shahid.findById(id);
  if (findedShahid) {
    if (req.file) {
      console.log("*****************request has file************");
      var storage = multer.diskStorage({
        destination: "./public/uploads/",
        filename: function (req, file, callback) {
          var ext = path.extname(file.originalname);
          callback(null, path.basename(ext) + Date.now() + ext);
        },
      });
      var upload = multer({ storage: storage });
      upload.single("image");
      console.log("____in the controleer___update--------->", req.file.filename);
      const image = req.file.filename;
      const name = req.body.name;
      const family = req.body.family;
      const fatherName = req.body.fatherName;
      const placeBorn = req.body.placeBorn;
      const lastServePlace = req.body.lastServePlace;
      const placeOfDeath = req.body.placeOfDeath;
      const birthdate = req.body.birthdate;
      const dieDate = req.body.dieDate;
      const wayOfDie = req.body.wayOfDie;
      const militiryEducation=req.body.militiryEducation;
      const cemeteryPlace = req.body.cemeteryPlace;
      const birthdayPlace = req.body.birthdayPlace;
      const dieMonth = req.body.dieMonth;
      const dieDay = req.body.dieDay;
      console.log('finded shahid--------->',findedShahid)
      // try{
      //   findedShahid.updateOne({
      //     image,
      //     placeBorn,
      //     name,
      //     family,
      //     fatherName,
      //     lastServePlace,
      //     placeOfDeath,
      //     birthdate,
      //     militiryEducation,
      //     dieDate,
      //     wayOfDie,
      //     cemeteryPlace,
      //     birthdayPlace,
      //     dieMonth,
      //     dieDay,
      //   });
      //   res.status(200).json({ message: "successfuly updated" });

      // }
      // catch(error){
      //   next({messgae:'somethings wrong'})

      // }
      console.log("********",image,
      name,
      family,
      fatherName,
      lastServePlace,
      placeOfDeath,
      birthdate,
      militiryEducation,
      dieDate,
      wayOfDie,
      cemeteryPlace,
      birthdayPlace,
      dieMonth,
      dieDay)
      const savedUpdateShahid = await findedShahid.updateOne({
        image,
        name,
        family,
        fatherName,
        lastServePlace,
        placeOfDeath,
        birthdate,
        militiryEducation,
        dieDate,
        wayOfDie,
        cemeteryPlace,
        birthdayPlace,
        dieMonth,
        dieDay,
      });

      if (savedUpdateShahid) {
        res.status(200).json({ message: "successfuly updated" });
      } else {
        next({messgae:'somethings wrong'})
        // res.status(500).json({ message: "somethings wrong" });
      }
    } else {
      console.log("****** without image*********")
      const name = req.body.name;
      const family = req.body.family;
      const fatherName = req.body.fatherName;
      // const placeBorn = req.body.placeBorn;
      const lastServePlace = req.body.lastServePlace;
      const placeOfDeath = req.body.placeOfDeath;
      const birthdate = req.body.birthdate;
      const dieDate = req.body.dieDate;
      const militiryEducation=req.body.militiryEducation;
      const wayOfDie = req.body.wayOfDie;
      const cemeteryPlace = req.body.cemeteryPlace;
      const birthdayPlace = req.body.birthdayPlace;
      const dieMonth = req.body.dieMonth;
      const dieDay = req.body.dieDay;
      // try{
      //   findedShahid.updateOne({
      //     name,
      //     family,
      //     fatherName,
      //     lastServePlace,
      //     placeOfDeath,
      //     birthdate,
      //     dieDate,
      //     militiryEducation,
      //     wayOfDie,
      //     cemeteryPlace,
      //     birthdayPlace,
      //     dieMonth,
      //     dieDay,
      //   });
      //   res.status(200).json({ message: "successfuly updated" });
  

      // }
      // catch(error){
      //   res.status(500).json({ message: "somethings wrong" });

      // }
      const savedUpdateShahid = await findedShahid.updateOne({
        name,
        family,
        fatherName,
        lastServePlace,
        placeOfDeath,
        birthdate,
        dieDate,
        militiryEducation,
        wayOfDie,
        cemeteryPlace,
        birthdayPlace,
        dieMonth,
        dieDay,
      });

      if (savedUpdateShahid) {
        res.status(200).json({ message: "successfuly updated" });
      } else {
        res.status(500).json({ message: "somethings wrong" });
      }
    }

   
  } else {
    res.status(500).json({ message: "oops something wrong" });
  }
};
exports.delete = async (req, res, next) => {
  const id = req.body.id.trim();
  console.log("id on delete",id)
  const deletedShahid = await Shahid.findByIdAndDelete(id);
  if (deletedShahid) {
    res.status(200).json({ message: "delete successfully" });
  } else {
    res.status(500).json({ message: "oops somethings wrong!" });
  }
};

exports.getbyDate = async (req, res, next) => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const days = today.getDate();
  const dieDate = moment.from(today, "fa", "YYYY/MM/DD");

  console.log("_________________________________>>>>>>>", dieDate);
  console.log("this is date", today);
  return res.json({ month, days, dieDate });
};

exports.getAll = async (req, res, next) => {
  const data = await Shahid.find().sort({date: 'desc'});
  if (data) res.status(200).json({ data });
  else
    res
      .status(500)
      .json({ error: "error something wrong check your connection" });
};
exports.insertOne=async(req,res,next)=>{
  console.log("eqwwwwwwwwwwwww",req.body)
  if (req.file) {
    console.log("*****************request has file************");
    var storage = multer.diskStorage({
      destination: "./public/uploads/shahid",
      filename: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        callback(null, path.basename(ext) + Date.now() + ext);
      },
    });
    var upload = multer({ storage: storage });
    upload.single("image");
    console.log("____in the controleer___", req.file.filename);
    const image = req.file.filename;
    const name = req.body.name;
    const family = req.body.family;
    const fatherName = req.body.fatherName;
    // const placeBorn = req.body.placeBorn;
    const lastServePlace = req.body.lastServePlace;
    const placeOfDeath = req.body.placeOfDeath;
    const birthdate = req.body.birthdate;
    const dieDate = req.body.dieDate;
    const militiryEducation=req.body.militiryEducation
    const wayOfDie = req.body.wayOfDie;
    const cemeteryPlace = req.body.cemeteryPlace;
    const birthdayPlace = req.body.birthdayPlace;
    const dieMonth = req.body.dieDate.split('/')[1];
    const dieDay = req.body.dieDate.split('/')[2]
    console.log("fuckkkkkkk",req.body.dieDate.split('/'))
    const savedUpdateShahid = await new Shahid ({
      image,
      name,
      family,
      fatherName,
      lastServePlace,
      placeOfDeath,
      militiryEducation,
      birthdate,
      dieDate,
      wayOfDie,
      cemeteryPlace,
      birthdayPlace,
      dieMonth,
      dieDay,
    }).save();

    if (savedUpdateShahid) {
      console.log("inserted")
      res.status(200).json({ message: "successfuly updated" });
    } else {
      console.log("bug")
      res.status(500).json({ message: "somethings wrong" });
    }
  } else {
    console.log("****** without image*********")
    const name = req.body.name;
    const family = req.body.family;
    const fatherName = req.body.fatherName;
    // const placeBorn = req.body.placeBorn;
    const lastServePlace = req.body.lastServePlace;
    const placeOfDeath = req.body.placeOfDeath;
    const birthdate = req.body.birthdate;
    const dieDate = req.body.dieDate;
    const wayOfDie = req.body.wayOfDie;
    const militiryEducation=req.body.militiryEducation;
    const cemeteryPlace = req.body.cemeteryPlace;
    const birthdayPlace = req.body.birthdayPlace;
    const dieMonth = req.body.dieMonth;
    const dieDay = req.body.dieDay;
    const savedInsertShahid = await new Shahid ({
      name,
      family,
      fatherName,
      lastServePlace,
      militiryEducation,
      placeOfDeath,
      birthdate,
      dieDate,
      wayOfDie,
      cemeteryPlace,
      birthdayPlace,
      dieMonth,
      dieDay,
    }).save();

    if (savedInsertShahid) {
      res.status(200).json({ message: "successfuly inserted" });
    } else {
      res.status(500).json({ message: "somethings wrong" });
    }
  }

  // const savedInsertShahid = await Shahid.updateOne(req.body.shahid);
  // if (savedInsertShahid) {
  //   res.status(200).json({ message: "insert successfully" });
  // } else {
  //   res.status(500).json({ message: "oops somethings wrong!" });
  // }
} 
exports.todayShahid=async(req,res,next)=>{
  const today=new Date()
  
  console.log("miladi----->",today)
console.log('this is shamsi----->', moment(today).format('jYYYY/jMM/jDD'))
const todayMoment= moment(today).format('jYYYY/jMM/jDD').split('/');
console.log('-------->>>',todayMoment)
const todayShahid=await Shahid.find({dieMonth:todayMoment[1],dieDay:todayMoment[2]})
const todayDate={month:Number(todayMoment[1]),day:Number(todayMoment[2])}
console.log('_______________>', todayShahid);
res.json({todayShahid,todayDate})

}
exports.getByName=async(req,res,next)=>{
  const {name}=req.query
  name.replace('','شهید','');
  name.split(" ").join("")
  console.log("this is searchh query",name)
  let QUERY="محمد"
  let regex = new RegExp(name, 'i');
const searchedShahid=await Shahid.find({
  $or: [
    { 'name': regex },
    { 'family': regex }
  ]
}).limit(100)
if(searchedShahid){
  res.json({searchedShahid})
}

}
exports.getByCustomDate=async(req,res,next)=>{
  console.log("reqq----->",req.query);

  const {day,month}=req.query;
  console.log("this req")
  console.log('_______________>',day,month)
  const searchedShahid=await Shahid.find({dieMonth:month,dieDay:day}).exec();
  res.json({searchedShahid});
  
}
exports.searchShahidQuery=async(req,res,next)=>{
  const {name,family,birthdate,diedate}=req.body;
  console.log(name,family,birthdate,diedate);
  const findedShahid=await Shahid.find({$or: [ { name: name }, {family: family } ]});
  console.log
  
  res.json({data:findedShahid});
}



