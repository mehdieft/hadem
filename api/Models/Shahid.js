const mongoose=require('mongoose')

const shahidSchema=mongoose.Schema({
    name:{type:String,required:true},
    family:{type:String,required:true},
    fatherName:{type:String,required:true},
    placeBorn:{type:String},
    lastServePlace:{type:String},
    placeOfDeath:{type:String,required:true},
    militiryEducation:{type:String},
    image:{type:String},
    birthdate:{type:Date,required:false},
    dieDate:{type:Date,required:true},
    wayOfDie:{type:String}

})
module.exports=mongoose.model('Shahid',shahidSchema);