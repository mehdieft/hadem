import client from "./client";
import FormData from "form-data";
import axios from "axios";

export const searchByNameAndFamily=async(name,family)=>{
    try{
  
      const response= await axios.post(`http://localhost:4848/api/search/searchByName`,{name:name,family:family})
      return {data:response.data,error:null};
    }
    catch(error){
      return {data:null,error:error.message}
    }
    
  }