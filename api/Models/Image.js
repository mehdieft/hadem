const mongoose =require('mongoose');
const ImageSchema=mongoose.Schema({
   name:{type:String,required:true},
   title:{type:String,required:false},
   alt:{type:String,required:true}
})
module.exports=mongoose.model('Image',ImageSchema);