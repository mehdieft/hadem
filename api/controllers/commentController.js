const Comment=require('../Models/Comments');
const moment = require("jalali-moment");

exports.insertComment=async(req,res,next)=>{
   const {name,family,comment}=req.body
   const storeComment=await new Comment({

   }).save()

}