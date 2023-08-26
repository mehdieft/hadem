const mongoose=require('mongoose')

const shahidSchema=mongoose.Schema({
    birthday:{type:Date,required:false},
    name:{type:String,required:true},
    family:{type:String,required:true},
    dieDate:{type:Date,required:true},
    wayOfDie:{type:String,required:true}

})
module.exports.mongoose.Schema('Shahid',shahidSchema);