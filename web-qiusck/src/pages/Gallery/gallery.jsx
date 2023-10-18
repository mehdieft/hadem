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
      {/* <Box 
        sx={{
          width: "100%",
          backgroundImage:
            " linear-gradient(to top, #b1ab8c8c 0%, #eddea7 100%)",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider", direction: "rtl" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab sx={{ fontFamily: "diba" }} label="عکس " {...a11yProps(0)} />
            <Tab sx={{ fontFamily: "diba" }} label="ویدیو" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ImageGalleryLayout />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div style={{width:'50%',margin:'0 auto'}}>

          <CarouselComponent />
          </div>
        </CustomTabPanel>
      </Box> */}
      <motion.div id="image-gallery-container">
        <div
          ref={imageRef}
          id="main-image-image-gallery"
          style={{
            backgroundImage: `url(${selectedImageBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "end",
            backgroundColor: "red",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <IconButton
              style={{ scale: 1.7 }}
              aria-label="delete"
              disabled
              color="primary"
            >
              <CropSquareIcon style={{ color: "black" }} color="black" />
            </IconButton>
            <IconButton
              style={{ scale: 1.7 }}
              aria-label="delete"
              disabled
              color="primary"
            >
              <UploadIcon style={{ color: "black" }} />
            </IconButton>
          </div>
          <div id="image-gallery-image-wrapper"></div>
        </div>
        <div
          id="carousel-image-image-gallery"
          style={{ backgroundColor: "green" }}
        >
          {imageList.map((item, index) => {
            return (
              <motion.img
                animate={
                  selectedImageIndex === index
                    ? { x: [0, 10, -10, 0], scale: [1.1] }
                    : {}
                }
                className={selectedImageIndex === index ? "active" : ""}
                onClick={() => imageClickHandler(index, item)}
                key={index}
                src={item}
                alt=""
              />
            );
          })}
          {/* <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" />
          <img src={galleryBackgroundImage} alt="" /> */}
          <button>مشاهده بیشتر</button>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Gallery;
