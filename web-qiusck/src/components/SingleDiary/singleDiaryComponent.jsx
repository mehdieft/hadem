import "./style.css";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { motion } from "framer-motion";
import {useVideoDialog} from '../../context/VideoDialogProvider';

const SingleDiaryComponent = ({
  backgroundImage,
  titleImage,
  degree,
  name,
  diary,
  quete,
  videoItem
}) => {
  const {openVideoDialog}=useVideoDialog();
  const variants = {

    visible: (custom) => ({
      opacity: 1,
      scale:1,
      transition: { delay: custom * 0.8 }
    }),
    hidden:{opacity:0,scale:0.3}
  }
  const setingTheVideo=(item)=>{
    openVideoDialog(item)

  }
  return (
    <>
      <motion.div className="diar-image-container">
        <s></s>
        <div
          className="diary-image-inner"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <motion.div
          className="image-content-container"
          initial={{ opacity: 0, x: "-10vw" }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1, x: 0 }}
         
          
        >
          <div className="video-content">
            <img src={titleImage} width={250} height={343} alt="" />
            <div onClick={()=>{setingTheVideo(videoItem)}} className="video-radius-Button">
              <PlayArrowOutlinedIcon
              
                style={{ position: "relative", top: "14px" }}
                fontSize={"large"}
              />
            </div>
          </div>
          <div className="image-content-text">
            <motion.div 
            initial="hidden"
            variants={variants}
            animate="visible"
            custom={0}
               >
              <span
               
                style={{ fontSize: 40, fontFamily: "diba", color: "white" }}
              >
                {degree}
              </span>
            </motion.div>
            <motion.div  initial="hidden"
            variants={variants}
            animate="visible"
            custom={1}>
              <span
                style={{ fontSize: 30, fontFamily: "diba", color: "#34ffff" }}
              >
                {name}
              </span>
            </motion.div>
            <motion.div  initial="hidden"
            variants={variants}
            animate="visible"
            custom={2}>
              <span
                id="white-text"
                style={{ fontSize: 30, fontFamily: "diba" }}
              >
                {diary}
              </span>
            </motion.div>
            <motion.blockquote  initial="hidden"
            variants={variants}
            animate="visible"
            custom={3} style={{ margin: "10px 0" }}>
              <svg
                className="icon-quote"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 16"
              >
                <g>
                  <g>
                    <path
                      fill="#fff"
                      d="M15.836 7.506c0-2.393.904-3.841 2.71-4.346V.45c-4.817.423-7.226 3.621-7.226 9.595v5.468h7.226V8.287h-2.71zm-10.84 0c0-2.393.904-3.841 2.71-4.346V.45C2.89.873.48 4.071.48 10.045v5.468h7.227V8.287h-2.71z"
                    ></path>
                  </g>
                </g>
              </svg>{" "}
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                  letterSpacing: "3px",
                  fontFamily: "iranSans",
                  fontSize: 20,
                }}
              >
                {quete}
              </span>
            </motion.blockquote>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
export default SingleDiaryComponent;
