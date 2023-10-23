import { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const imageDialogContext = createContext();
export default function ImageDialogProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");
  const openDialog = (imageUrl) => {
    setShowModal(true);
    setImage(imageUrl);
  };
  const closeDialog = () => {
    setShowModal(false);
    setImage("");
  };
  return (
    <imageDialogContext.Provider value={{ openDialog }}>
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
            transition={{ duration: 1 }}
            className="backdrop"
          >
            <motion.div>
              <div style={{direction:'rtl'}}>
                <IconButton
                  onKeyDownCapture={closeDialog}
                  onClick={closeDialog}
                  color="secondary"
                  aria-label="add an alarm"
                >
                  <CloseIcon />
                </IconButton>
              </div>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={image} style={{ height: "90vh", width: "90vw" }} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </imageDialogContext.Provider>
  );
}
export const useImageDialog = () => useContext(imageDialogContext);
