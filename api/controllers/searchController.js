const Shahid = require("../Models/Shahid");

exports.nameAndFamilySearch=async(req,res,next)=>{
  
    const {name,family}=req.body
    name.replace('','شهید','');
    name.split(" ").join("")
    family.replace('','شهید','');
    family.split(" ").join("")
    console.log("this is searchh query",name,family)
    
  const searchedShahid=await Shahid.find({
     $or: [{ name:name }, { family: {'$regex': `${family}`}}]
   
  }).limit(100)
  if(searchedShahid){
    res.json({searchedShahid})
  }
  
}
exports.city=async(req,res,next)=>{
    console.log("hello");
const {city}=req.body;
const searchedShahid=await Shahid.find({birthdayPlace:city})
if(searchedShahid){
    res.json({searchedShahid})
}


}