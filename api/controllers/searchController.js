const Shahid = require("../Models/Shahid");
const moment = require('moment-jalaali')

exports.nameAndFamilySearch = async (req, res, next) => {

  const { name, family } = req.body
  name.replace('', 'شهید', '');
  name.split(" ").join("")
  family.replace('', 'شهید', '');
  family.split(" ").join("")
  console.log("this is searchh query", name, family)
  const myName = name;
  const myFamily = family
  console.log('this is data--------------->', myFamily, myName)


  const searchedShahid = await Shahid.find({
    // $or: [{ name: name }, { family: family }]
    $or: [
      { name: { $regex: new RegExp(myName, "i") } },
      { family: { $regex: new RegExp(myFamily, "i") } }
  ]

  }).limit(100)
  if (searchedShahid) {
    res.json({ searchedShahid })
  }

}
exports.city = async (req, res, next) => {
  console.log("hello");
  const { city } = req.body;
  const searchedShahid = await Shahid.find({ birthdayPlace: city })
  if (searchedShahid) {
    res.json({ searchedShahid })
  }


}
exports.birthDate = async (req, res, next) => {
  const { birthDate } = req.body;
  const numbericSearch = birthDate.split('/');
  console.log('this is test for my search', numbericSearch)
  console.log("this is city____>", birthDate);
  const searchedShahid = await Shahid.find({
    $and: [{ birthMonth: Number(numbericSearch[1]) }, { birthDay: Number(numbericSearch[2]) }]
  })
  console.log('_______________>shahid', searchedShahid)
  if (searchedShahid) {
    res.json({ searchedShahid });
  }
}
exports.secondAppDieDate = async (req, res, next) => {
  console.log("im here ",req.body);
  const { day, month } = req.body;
  const searchedShahid = await Shahid.find({
    $and: [{ dieMonth: Number(month) }, { dieDay: Number(day) }]
  })
  if (searchedShahid) {
    res.json({ searchedShahid });
  }

}
exports.dieDate = async (req, res, next) => {
  const { dieDate } = req.body;
  console.log("this is die date", dieDate)
}