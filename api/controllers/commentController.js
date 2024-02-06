const Comment=require('../Models/Comments');
const moment = require("jalali-moment");

exports.insertComment=async(req,res,next)=>{
   const {name,family,comment}=req.body
   console.log(req.body)
   date=new Date()
   const storeComment=await new Comment({
      name,family,comment,date
   }).save()
   if(storeComment){
      return res.json({success:'نظر شما با موفقیت ثبت شد'})
   }

}