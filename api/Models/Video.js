const mongoose=require('mongoose')
const videoSchema=mongoose.Schema({
    name:{type:String,required:true},
    alt:{type:String,required:true},
    title:{type:String,required:true}

})
module.exports=mongoose.model('Video',videoSchema);
