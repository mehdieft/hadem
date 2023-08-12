const Image=require('../Models/Image')

exports.test=async (req,res)=>{
    console.log("the request is working");
    const {name,alt,usagePlace}=req.body
    console.log("this is my test for usage",name,alt,usagePlace)

}