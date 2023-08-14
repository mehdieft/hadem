import client from './client'
import axios from 'axios'


export const insertImageGallery=async(data)=>{
    const ImageForm=new FormData();

    try {
        const data = await axios({
            method: 'post',
            url: 'http://localhost:4848/api/post/insert',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        console.log("fucking data",data)



    }
    catch (error) {
        const { response } = error
        if (response?.data) {
            return response.data
        } return { error: error.message || error }
    }
}

}





