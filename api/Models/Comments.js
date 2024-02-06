const mongoose =require('mongoose');

const CommentsSchema= mongoose.Schema({
     name:{required:true,type:String},
     family:{required:true,type:String},
     comment:{required:true,type:String},
    
     date:{required:true,type:String},
     accepted:{required:true,type:Boolean,default:false},
    
    
    })

module.exports=mongoose.model('Comment',CommentsSchema)