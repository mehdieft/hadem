const Comment=require('../Models/Comments');
const moment = require("jalali-moment");

exports.insertComment=async(req,res,next)=>{
    const time=moment.locale('fa', { useGregorianParser: true }); 
    console.log('this is time',time)

}