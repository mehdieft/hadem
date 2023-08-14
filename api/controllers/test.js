const Image=require('../Models/Image')

exports.test=async (req,res)=>{
    console.log("the request is working");
   
    console.log("this is my test for usage",req.body);
    console.log("this is only res",req);

}   