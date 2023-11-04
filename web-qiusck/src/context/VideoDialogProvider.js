import { useState, createContext, useContext } from "react";
import './videoDialog.css';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CachedIcon from '@mui/icons-material/Cached';
const videoDialogContext=createContext();


export default function VideoDialogProvider({children}){
  const [videoUrl,setVideoUrl]=useState('');
  const [showModal,setShowModal]=useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  
  
  
  const openVideoDialog=(item)=>{
      setShowModal(true);
      setVideoUrl(item)
  }
  const closeDialog=()=>{
      setShowModal(false);
      setVideoUrl('');
      setVideoLoading(false)
  }
  
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

    return (
        <videoDialogContext.Provider value={{openVideoDialog}}>
            {children}
            {showModal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" showModal={showModal}>
                <CloseIcon
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={closeDialog}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <CachedIcon
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        </videoDialogContext.Provider>
    )
}
export const useVideoDialog = () => useContext(videoDialogContext);
