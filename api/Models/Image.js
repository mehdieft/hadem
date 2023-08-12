const mongoose =require('mongoose');
const ImageSchema=mongoose.Schema({
   name:{type:String,required:true},
   usagePlace:{type:String,required:true},
   alt:{type:String,required:true}
})
module.exports=mongoose.model('Image',ImageSchema);