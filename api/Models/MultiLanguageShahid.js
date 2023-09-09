const mongoose=require('mongoose');
const mulotiLanguageShahid=mongoose.Schema({
    name:{
        en:{type:String,required:false},fa:{type:String,required:false},fr:{type:String,required:false}
    },
    family:{
        en:{type:String,required:false},fa:{type:String,required:false},fr:{type:String,required:false}
    },
    placeBorn:{
        en:{type:String,required:false},fa:{type:String,required:false},fr:{type:String,required:false}
    },
    lastServePlace:{
        en:{type:String,required:false},fa:{type:String,required:false},fr:{type:String,required:false}
    },
    placeOfDeath:{
        en:{type:String,required:false},fa:{type:String,required:false},fr:{type:String,required:false}
    },
    militiryEducation:{
        en:{type:String,required:false},fa:{type:String,required:false},fr:{type:String,required:false}
    },
    wayOfDie:{
        en:{type:String,required:false},fa:{type:String,required:false},fr:{type:String,required:false}
    },
    cemeteryPlace:{
        en:{type:String,required:false},fa:{type:String,required:false},fr:{type:String,required:false}
    },
    birthdayPlace:{
        en:{type:String,required:false},fa:{type:String,required:false},fr:{type:String,required:false}
    },
    })
    module.exports=mongoose.model('ShahidMultiLanguage',mulotiLanguageShahid);