import { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { ImageList } from "@mui/material";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const imageShowAnimation={
  hidden:{
    y:'-100vh',
    opacity:0
  },
  visible:{
    y:0,
    opacity:1,
    transition:{
      delay:0.8
    }
  }

}

const imageDialogContext = createContext();
export default function ImageDialogProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");
  const [imageIndex,setImageIndex]=useState(null);
  const [maxImageIndex,setMaxImageIndex]=useState(null);
  const [imageList,setImageList]=useState([]);
  const openDialog = (item,index) => {
    setShowModal(true);
    setImageList(item)
    console.log("imageList--------",imageList)
    setMaxImageIndex(imageList.length)
    setImage(item[index]);
    setImageIndex(index)
    console.log('_____________dialog___________>',image)
  };
  const closeDialog = () => {
    setShowModal(false);
    // setImageList([]);
    // setMaxImageIndex(null);
    // setImage("");
    // setImageIndex(null);
  };
  const nextImage=()=>{
    setImageIndex(imageIndex+1)
    console.log("______>",maxImageIndex)
    if(imageIndex>= maxImageIndex){
      closeDialog()
    }
    setImage(imageList[imageIndex])
    

  }
  const prevImage=()=>{
    setImageIndex(imageIndex-1)
    if(imageIndex <0){
      closeDialog();
    }
    setImage(imageList[imageIndex])
  }
  return (
    <imageDialogContext.Provider value={{ openDialog ,nextImage}}>
      {children}
      <AnimatePresence mode="wait">
        {showModal && (
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.95)",
              zIndex: 1,
            }}
            variants={backdrop}
            animate="visible"
            initial="hidden"
            exit="hidden"
            transition={{ duration: 1 }}
            className="backdrop"
          >
            <motion.div variants={imageShowAnimation}>
              <div style={{direction:'rtl'}}>
                <IconButton
                  onKeyDownCapture={closeDialog}
                  onClick={closeDialog}
                  style={{color:'white'}}
                  // color="secondary"
                  aria-label="add an alarm"
                >
                  <CloseIcon />
                </IconButton>
              </div>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <IconButton
                  onKeyDownCapture={prevImage}
                  onClick={prevImage}
                  style={{color:'white'}}
                  // color="secondary"
                  aria-label="add an alarm"
                >
                  <CloseIcon />
                </IconButton>
                
                <img 
                   src={`http://localhost:4848/static/uploads/imageGallery/${image.url}`}
                // src={image}
                 style={{  maxWidth: "90VW",maxHeight:'90vh',width:'99vh',aspectRatio:1 }} />
              <IconButton
                  onKeyDownCapture={nextImage}
                  onClick={nextImage}
                  style={{color:'white'}}
                  // color="secondary"
                  aria-label="add an alarm"
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </imageDialogContext.Provider>
  );
}
export const useImageDialog = () => useContext(imageDialogContext);
