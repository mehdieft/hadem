import client from "./client";
import FormData from "form-data";
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