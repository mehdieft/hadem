const Comment=require('../Models/Comments');
const moment = require("jalali-moment");

exports.insertComment=async(req,res,next)=>{
    const time=moment.locale('fa', { useGregorianParser: true }); 
    let today = new Date().toLocaleTimeString('fa-IR');
    console.log(today);
    console.log('this is time',time)
    res.json({today})

}