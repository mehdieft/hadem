const Admin=require('../Models/Admin')
const byript=require('bcryptjs')
const jwt=require('jsonwebtoken');


 function generateToken(username){
    return jwt.sign(username,process.env.ACCESS_TOKEN,{expiresIn:"10h"})
}



exports.login=async (req, res,next)=>{
 const findedAdmin=  await Admin.findOne({username:req.body.username})
 if(findedAdmin){
const comparePassword=await byript.compare(req.body.password,findedAdmin.password)
if(comparePassword==false)return res.status(500).json({message:"username or password is not correct"})
else{
    console.log("this is for create token______>")
    const token= generateToken({username:req.body.username})
    console.log("this is token")
    res.json({token,username:findedAdmin.username,name:findedAdmin.name})
  
}

 }else res.status(500).json({message:"username or password is not correct"})

}
exports.register= async (req,res,next) =>{
    console.log("register",req.body)
    const hashedPassword=await byript.hash(req.body.password,10)
    const admin=new Admin({
        name:req.body.name,
        username:req.body.username,
        password:hashedPassword
    }) 
    const savedUser=await admin.save();
    if(savedUser){

        res.status(201).json({message:"register succesfully done",admin})
    }else{
        res.status(500).json({message:"oops somethings  wrong"});
    }

}
exports.testRegister=async(req,res,next)=>{
    console.log("this is fucking testt",req)
}