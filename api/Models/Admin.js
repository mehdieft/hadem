const mongoose =require('mongoose');

const AdminSchema= mongoose.Schema({
     name:{required:true,type:String},
     password:{required:true,type:String ,min:8,},
     userName:{required:true,min:5}
    })

module.exports=mongoose.model('Admin',AdminSchema)