const mongoose =require('mongoose');

const CommentsSchema= mongoose.Schema({
     name:{required:true,type:String},
     description:{required:true,type:String},
     time:{required:true,type:String},
     date:{required:true,Type:string},
     accepted:{required:true,type:Boolean,default:false}
    })

module.exports=mongoose.model('Comment',CommentsSchema)