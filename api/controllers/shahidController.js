const csvtojson = require('csvtojson')
const Shahid=require('../Models/Shahid')

exports.insert=async(req,res,next)=>{
    importFile('./public/uploads/excel/'  + req.file.filename);
            function importFile(filePath){
                var arrayToInsert = [];
                csvtojson().fromFile(filePath).then((source)=>{
                    res.json(source)
                    console.log("this is source",source)
                    for (var i = 0; i < source.length; i++){
                        var singleRow={
                            name:source[i]['name'],
                            family:source[i]['family'],
                            fatherName:source[i]['fatherName'],
                            lastServePlace:source[i]['lastServePlace'],
                            placeOfDeath:source[i]['placeOfDeath'],
                            militiryEducation:source[i]['militiryEducation'],
                            birthdate:source[i]['birthdate'],
                            // dieDate:[source][i]['die'],
                            wayOfDie:[source][i]['wayOfDie']

                        }
                        arrayToInsert.push(singleRow)
                    }
                    shahidModel.insertMany(arrayToInsert, (err, result) => {
                        if (err) console.log(err);
                            if(result){
                                console.log("File imported successfully.");
                                res.redirect('/')
                            }
                        });
                    });
                

                

            }


}
exports.update= async (req,res,next)=>{

}
exports.delete=async(req,res,next)=>{
    
}