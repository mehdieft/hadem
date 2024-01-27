const mongoose =require('mongoose');

const CommentsSchema= mongoose.Schema({
     name:{required:true,type:String},
     description:{required:true,type:String},
     time:{required:true}
    })

module.exports=mongoose.model('Comment',CommentsSchema)