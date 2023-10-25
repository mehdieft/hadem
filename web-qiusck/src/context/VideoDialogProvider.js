import { useState, createContext, useContext } from "react";
import './videoDialog.css';
const videoDialogContext=createContext();
const [videoUrl,setVideoUrl]=useState('');
const [showModal,setShowModal]=useState(false);
const [videoLoading, setVideoLoading] = useState(true);



const openDialog=(video)=>{
    setShowModal(true);
    setVideoUrl(video)
}
const closeDialog=()=>{
    setShowModal(false);
    setVideoUrl('');
}

const spinner = () => {
  setVideoLoading(!videoLoading);
};


export default function VideoDialogProvider({children}){

    return (
        <videoDialogContext.Provider value={{openVideoDialog}}>
            {children}
            {showModal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
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
                    src="https://freefrontend.com/css-cards/page/2/"
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
