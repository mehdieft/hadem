const Admin=require('../Models/Admin')
const byript=require('bcryptjs')
const jwt=require('jsonwebtoken');
exports.login=async (req, res,next)=>{
    console.log("this is the login method lets test",req.body)

}