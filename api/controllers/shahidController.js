const Shahid = require("../Models/Shahid");
var fs = require("fs");

exports.insert = async (req, res, next) => {
  filePath = "./public/uploads/excel/convertcsv.json";
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.json({ error: err, message: "oops! somethings wrong" });
    }
    var source = JSON.parse(data);

    console.log(source)

    var arrayToInsert = [];

    for (var i = 1; i < source.length; i++) {
       
      var singleRow = {
        name: source[i].I,
        family: source[i].J,
        fatherName: source[i].L,
        lastServePlace: source[i].M,
        placeOfDeath: source[i].O,
        militiryEducation: source[i].W,
        birthdate: source[i].S,
        dieDate:source[i].N,
        wayOfDie: source[i].P,
      };
      arrayToInsert.push(singleRow);
    }
    Shahid.insertMany(arrayToInsert).then(function(){
      console.log("Data inserted")  // Success
  }).catch(function(error){
      console.log(error)      // Failure
  });
  });
};

exports.update = async (req, res, next) => {};
exports.delete = async (req, res, next) => {};
