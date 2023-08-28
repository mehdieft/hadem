import client from "./client";
import FormData from 'form-data';
import axios from "axios";
let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

let fileAxiosConfig = {
 
  headers: { "Content-Type": "multipart/form-data" },
};
// export const insertImageGallery=async(data)=>{
//     const ImageForm=new FormData();

//     try {
//         const data = await client({
//             method: 'post',
//             url: 'http://localhost:4848/api/post/insert',
//             data: formData,
//             headers: { 'Content-Type': 'multipart/form-data' }
//         })
//         console.log("fucking data",data)

//     }
//     catch (error) {
//         const { response } = error
//         if (response?.data) {
//             return response.data
//         } return { error: error.message || error }
//     }
// }
export const fetchData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4848/api/admin/imageManagment/getAll",
      axiosConfig
    );
    console.log("this is response");
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const insertImageManagamentData = async (title, alt, file) => {
  try{
    const form = new FormData();
    form.append('image',file)
    form.append('alt',alt)
    form.append('title',title)
    const response = await axios.post(
      "http://localhost:4848/api/admin/imageManagment/insert",form,
      fileAxiosConfig,
    );
    return { data: response.data, error: null };

  }catch(error){
    return { data: null, error: error.message };
  }
};
