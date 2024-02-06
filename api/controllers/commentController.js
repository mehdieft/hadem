const Comment=require('../Models/Comments');
const moment = require("jalali-moment");

exports.insertComment=async(req,res,next)=>{
   const {name,family,comment}=req.body
   date=new Date()
   const storeComment=await new Comment({
      name,family,comment,date
   }).save()

}