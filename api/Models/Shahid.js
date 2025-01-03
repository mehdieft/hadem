const mongoose=require('mongoose')

const shahidSchema=mongoose.Schema({
    name:{type:String,required:true},
    family:{type:String,required:true},
    fatherName:{type:String,required:false},
    placeBorn:{type:String},
    lastServePlace:{type:String},
    placeOfDeath:{type:String,required:false},
    militiryEducation:{type:String},
    image:{type:String},
    birthdate:{type:Date,required:false},
    birthMonth:{type:Number},
    birthDay:{type:Number},
    birthYear:{type:Number},
    // shamsiBirthdate:{type:Date,required:false},
    // shamsiDieDate:{type:Date,required:false},
    dieDate:{type:Date,required:false},
    wayOfDie:{type:String},
    cemeteryPlace:{type:String},
    birthdayPlace:{type:String},
    dieMonth:{type:Number},
    dieDay:{type:Number},
    dieYear:{type:Number}

})
module.exports=mongoose.model('Shahid',shahidSchema);