const Admin=require('../Models/Admin')
const byript=require('bcryptjs')
const jwt=require('jsonwebtoken');
exports.login=async (req, res,next)=>{
    console.log("this is the login method lets test",req.body)

}
exports.register= async (req,res,next) =>{
    console.log("register",req.body)
    const hashedPassword=await byript.hash(req.body.password,10)
    const admin=new Admin({
        name:req.body.name,
        username:req.body.username,
        password:hashedPassword
    }) 
    await   admin.save();
    res.status(201).send({message:"register succesfully done",admin})

}
exports.testRegister=async(req,res,next)=>{
    console.log("this is fucking testt",req)
}