import { useEffect, useRef } from "react";
import galleryBackgroundImage from "../../assets/Image/museums-victoria-CzsHs8A87Y0-unsplash.jpg";
import "./style.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { ImageGalleryLayout } from "../../layouts/ImageGallery/imageGalleryLayout";
import { CarouselComponent } from "../../components/CarouselComponent/carousel";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion, useScroll, useSpring } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import UploadIcon from "@mui/icons-material/Upload";
import anotherImage from "../../assets/Image/mainheader.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Gallery = () => {
  const customRef = useRef();
  const imageRef = useRef();
  const { scrollYProgress } = useScroll();
  const [selectedImageBackground, setselectedImageBackground] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });
  let imageList = [
    galleryBackgroundImage,
    anotherImage,
    galleryBackgroundImage,
    galleryBackgroundImage,
    galleryBackgroundImage,
    anotherImage,
    galleryBackgroundImage,
    galleryBackgroundImage,
    galleryBackgroundImage,
    galleryBackgroundImage,
    galleryBackgroundImage,
  ];
  const [value, setValue] = useState(0);
  useEffect(() => {
    setselectedImageBackground(imageList[0]);
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const imageClickHandler = (index, item) => {
    setSelectedImageIndex(index);
    setselectedImageBackground(item);
    console.log("this is------>", imageRef.current.style);
    imageRef.current.backgroundImage = `url('${item}')`;
  
    
  };
  return (
    <motion.div
      initial={{ width: 0, backgroundColor: " rgb(1, 32, 44)" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <motion.div
        animate={{
          transition: {
            duration: 0.6,
            type: "spring",
            damping: 140,
            stiffness: 100,
          },
        }}
        style={{ scaleX }}
        className="gallery-container"
      ></motion.div>
      {/* <LazyLoadImage
        src={galleryBackgroundImage}
        width={600}
        height={400}
        PlaceholderSrc={galleryBackgroundImage}
        effect="black-and-white"      /> */}
      <div
        id="gallery-container"
        style={{
          backgroundImage: `url(${galleryBackgroundImage})`,
        }}
      >
        <div className="text-header-gallery">
          <div ref={customRef} className="text-header-1">
            جنگی که گذشت
          </div>
          <div className="text-header-2">پایی که ماند</div>
          <div className="text-header-red">پایی که ماند</div>
        </div>
      </div>
      <main id="image-container">
        
        <div className="image-item"></div>
      </main>
     
    
    </motion.div>
  );
};
export default Gallery;
