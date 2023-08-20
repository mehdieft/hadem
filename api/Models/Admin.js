const mongoose =require('mongoose');

const AdminSchema=mongoose.Schema({
     name:{required:[true,'نام اجبازی می باشد'],type:[String,'نمیتوان از اعداد استفاده کرد']
    },
    password:{required:true,type:String,min:[8,"رمز عبور باید حداقل 8 رقم باشد"]},
    userName:{required:true,min:5}

})
module.exports=mongoose.model('Admin',AdminSchema)