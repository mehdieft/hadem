import axios from "axios";
import FormData from "form-data";

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
      "http://localhost:4848/api/admin/videoManagment/getAll",
      axiosConfig
    );
    console.log("this is response");
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
export const insertVideo = async (alt, title, file) => {
  try {
    const form = new FormData();
    form.append("video", file);
    form.append("alt", alt);
    form.append("title", title);
    const response = await axios.post(
      "http://localhost:4848/api/admin/videoManagment/insert",
      form,
      fileAxiosConfig
    );
    if (response) {
      console.log("fucking response", response);

      return { data: response.data, error: null };
    } else {
      console.log("this is some bug");
    }
  } catch (error) {
    return { data: null, error: error.message };
  }
};
export const deleteVideo = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:4848/api/admin/videoManagment/delete",
      { id: id }
    );
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
