const mongoose=require('mongoose')
const videoSchema=mongoose.Schema({
    url:{type:String,required:true},
    alt:{type:String,required:true},
    title:{type:String,required:true}

})
module.exports=mongoose.model('Video',videoSchema);
