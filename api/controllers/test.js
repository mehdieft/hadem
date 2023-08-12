const Image=require('../Models/Image')

const test=async (req,res)=>{
    const {name,alt,usagePlace}=req.body
    console.log("this is my test for usage",name,alt,usagePlace)

}