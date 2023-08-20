const Admin=require('../Models/Admin')
const byript=require('bcryptjs')
const jwt=require('jsonwebtoken');
exports.login=async (req, res,next)=>{
 const findedAdmin=  await Admin.findOne({username:req.body.username})
 if(findedAdmin){
const comparePassword=await byript.compare(req.body.password,findedAdmin.password)
if(comparePassword==false)return res.status(500).json({message:"username or password is not correct"})
else{
    console.log("this is for create token______>")
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
    await   admin.save();
    res.status(201).json({message:"register succesfully done",admin})

}
exports.testRegister=async(req,res,next)=>{
    console.log("this is fucking testt",req)
}