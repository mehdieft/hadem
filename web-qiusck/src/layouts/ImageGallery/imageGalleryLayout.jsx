import './style.css'
import shahid from '../../assets/Image/shahid1.png';
import ImageGallery from "react-image-gallery";
const images = [
    {
      original: shahid,
      thumbnail:shahid ,
    },
    {
      original: shahid,
      thumbnail:shahid ,
    },
    {
      original: shahid,
      thumbnail:shahid ,
    },
    {
      original: shahid,
      thumbnail:shahid ,
    },
    {
      original: shahid,
      thumbnail:shahid ,
    },
    {
      original: shahid,
      thumbnail:shahid ,
    },
    {
      original: shahid,
      thumbnail:shahid ,
    },
    
  ];




export const ImageGalleryLayout=()=>{
    return (

        <>
      

        <ImageGallery items={images} fullScreen={true} height={'100px'}  sizes={'100'}  />
        
        {/* <div className="image-gallery-container">
            <div className="image-gallery-selects">
                عملیات مرصاد

            </div>
            <div className="image-gallery-images">
                <img className="image-item" src={shahid}/>
                <img className="image-item" src={shahid}/>
                <img className="image-item" src={shahid}/>
                <img className="image-item" src={shahid}/>
                <img className="image-item" src={shahid}/>
                <img className="image-item" src={shahid}/>
            </div>
        </div> */}
        </>
    )
}   