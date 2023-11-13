import client from "./client";
import FormData from "form-data";
import axios from "axios";
let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
  maxBodyLength: Infinity,
  maxContentLength: Infinity,
};
let fileAxiosConfig = {
  headers: { "Content-Type": "multipart/form-data" },
};

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4848/api/admin/shahidManagment/getAll",
      axiosConfig
    );
    console.log("this is response");
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
export const insertShahidManagementData = async (
  name,
  family,
  image,
  lastServePlace,
  placeOfDeath,
  militiryEducation,
  wayOfDie,
  birthdate,
  cemeteryPlace,
  birthdayPlace,
  dieDay,
  dieMonth,
  fatherName,
  dieDate
) => {
  try {
    const form = new FormData();
    form.append("image", image);
    form.append("name", name);
    form.append("family", family);
    form.append("lastServePlace", lastServePlace);
    form.append("placeOfDeath", placeOfDeath);
    form.append("militiryEducation", militiryEducation);
    form.append("wayOfDie", wayOfDie);
    form.append("cemeteryPlace", cemeteryPlace);
    form.append("birthdate", birthdate);
    form.append("birthdayPlace", birthdayPlace);
    form.append("dieDay", dieDay);
    form.append("dieMonth", dieMonth);
    form.append("fatherName", fatherName);
    form.append("dieDate", dieDate);
    const response = await axios.post(
      "my/insertOne",
      form,
      axiosConfig
    );
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
export const deleteShahid= async (id)=>{
  try {
    console.log('this is delete_____',id)
    const response = await axios.post(
      "http://localhost:4848/api/admin/shahidManagment/delete",
      { id: id }
    );
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
}

export const searchShahid=async(nameAndFamily)=>{
  try{

    const response= await axios.get(`http://localhost:4848/api/user/getByName?name=${nameAndFamily}`)
    return {data:response.data,error:null};
  }
  catch(error){
    return {data:null,error:error.message}
  }
  
}
export const getTodayShahid=async()=>{
  try{

    const response= await axios.get(`http://localhost:4848/api/user/getByDate`)
    return {data:response.data,error:null};
  }
  catch(error){
    return {data:null,error:error.message}
  }
  
}
export const updateShahidManagment = async (
  _id,
  name,
  family,
  image,
  lastServePlace,
  placeOfDeath,
  militiryEducation,
  wayOfDie,
  birthdate,
  cemeteryPlace,
  birthdayPlace,
  dieDay,
  dieMonth,
  fatherName,
  dieDate
) => {
  try {
    console.log(_id,
      name,
      family,
      image,
      lastServePlace,
      placeOfDeath,
      militiryEducation,
      wayOfDie,
      birthdate,
      cemeteryPlace,
      birthdayPlace,
      dieDay,
      dieMonth,
      fatherName,
      dieDate)
    const myform = new FormData();
    myform.append("id",_id);
    myform.append("image", image);
    myform.append("name", name);
    myform.append("family", family);
    myform.append("lastServePlace", lastServePlace);
    myform.append("placeOfDeath", placeOfDeath);
    myform.append("militiryEducation", militiryEducation);
    myform.append("wayOfDie", wayOfDie);
    myform.append("cemeteryPlace", cemeteryPlace);
    myform.append("birthdate", birthdate);
    myform.append("birthdayPlace", birthdayPlace);
    myform.append("dieDay", dieDay);
    myform.append("dieMonth", dieMonth);
    myform.append("fatherName", fatherName);
    myform.append("dieDate", dieDate);
    const response = await axios.post(
      "http://localhost:4848/api/admin/shahidManagment/update",
      myform,
      axiosConfig
    );
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};