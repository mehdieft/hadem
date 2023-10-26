const Shahid = require("../Models/Shahid");
const moment = require('jalali-moment');
var fs = require("fs");
const { date } = require("joi");

exports.insert = async (req, res, next) => {
  filePath = "./public/uploads/excel/convertcsv.json";
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.json({ error: err, message: "oops! somethings wrong" });
    }
    var source = JSON.parse(data);

    console.log(source)

    var arrayToInsert = [];

    for (var i = 1; i < source.length; i++) {
       
      var singleRow = {
        name: source[i].I,
        family: source[i].J,
        fatherName: source[i].L,
        lastServePlace: source[i].M,
        placeOfDeath: source[i].O,
        militiryEducation: source[i].W,
        birthdate: moment.from(source[i].S,'fa', 'YYYY/MM/DD').format('YYYY/MM/DD'),
        shamsiBirthdate:moment(source[i].S).format('DD-MMM-YYYY'),
        dieDate:moment.from(source[i].N,'fa', 'YYYY/MM/DD').format('YYYY/MM/DD'),
        shamsiDieDate:source[i].N,
        wayOfDie: source[i].P,
        cemeteryPlace:source[i].AE,
        birthdayPlace:source[i].R,
        dieMonth:Number(source[i].N.split('/')[1]),
        dieDay:Number(source[i].N.split('/')[2])
      };
      if(singleRow.birthdate == null || singleRow.birthdate=='Invalid date' ){
        singleRow.birthdate=''
      }
      if(singleRow.dieDate == null || singleRow.dieDate=='Invalid date'){
        singleRow.dieDate=''
      }
      if(singleRow.shamsiDieDate == null || singleRow.shamsiDieDate=='Invalid date' ){
        singleRow.shamsiDieDate=''
      }
      if(singleRow.shamsiBirthdate == null || singleRow.shamsiBirthdate=='Invalid date'){
        singleRow.shamsiBirthdate=''
      }
      if(singleRow.name ==null || singleRow.name== '' ){
        singleRow.name ='نام ندارد'
      }
      if(singleRow.family ==null || singleRow.family==''){
        singleRow.family= 'فامیلی ندارد'
      }
      if(singleRow.fatherName ==null || singleRow.fatherName==''){
        singleRow.fatherName= 'نام پدر موجود نیست'
      }
      if(typeof(singleRow.dieMonth) !== 'number'){
        singleRow.dieMonth =null
      }
      if(typeof(singleRow.dieDay) !== 'number'){
        singleRow.dieDay =null
      }




      console.log("_________>",singleRow.birthdate )
      arrayToInsert.push(singleRow);
    }
    Shahid.insertMany(arrayToInsert).then(function(){
      console.log("Data inserted")  // Success
  }).catch(function(error){
      console.log(error)      // Failure
  });
  });
};

exports.update = async (req, res, next) => {
  const id=req.body.id.trim()
  const findedShahid=await Shahid.findById(id)
  if (findedShahid){
    const updatedShahid=await findedShahid.updateOne(req.body.shahid)
    if(updatedShahid){
      res.status(200).json({message:'updated successfully'})
    }else{
      res.status(500).json({message:'oops somethings wrong!'})
    }
  }else{
    res.status(500).json({message:'oops something wrong'})
  }

};
exports.delete = async (req, res, next) => {
  const id=req.body.id.trim()
  const deletedShahid=await Shahid.findByIdAndDelete(id);
  if(deletedShahid){
    res.status(200).json({message:'delete successfully'})
  }else{
    res.status(500).json({message:'oops somethings wrong!'})
  }
};

exports.getbyDate=async(req, res,next)=>{
  const today = new Date();
  const month=today.getMonth()+1;
  const days=today.getDate();
 const dieDate=moment.from(today,'fa', 'YYYY/MM/DD')

  console.log("_________________________________>>>>>>>",dieDate)
  console.log("this is date",today)
  return res.json({month,days,dieDate})

}