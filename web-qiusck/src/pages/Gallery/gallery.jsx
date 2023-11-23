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
import { useImageDialog } from "../../context/ImageDialogProvider";
import { RadiusButton } from "../../components/RadiusButton/radiusButton";
import UploadIcon from "@mui/icons-material/Upload";
import anotherImage from "../../assets/Image/mainheader.png";
import { getByTitle } from "../../api/imageGalleryRequests";
import { LazyLoadComponent } from "../../components/lazyLoad/lazyLoad";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
} from "../../helper/imagesList";

const Gallery = () => {
  const { openDialog } = useImageDialog();
  // openDialog('kir')
  const customRef = useRef();
  const imageRef = useRef();
  const { scrollYProgress } = useScroll();
  const [selectedImageBackground, setselectedImageBackground] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [indexForLoadedImage, setIndexForLoadedImage] = useState(1);
  const [titleImage, setTitleImage] = useState("دفاع مقدس");
  const [imageArray,setImageArray]=useState([]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });
  const fetchAndSetData = async (title) => {
    console.log("fuck you");
    const result = await getByTitle(title);
    console.log("ress----->", result.data);
    if (result.data !== null) {
      setImageArray (result.data.images);
      console.log("image array", imageArray);

      console.log("res----------یسشیشسی->", result);

      // console.log("dataList------->",dataList)
      // openNotification("hjajkshda", "success");
      // console.log(searchList);
    } else {
      // openNotification(result.error, "error");
      // openNotification("متن جایگزین نباید خالی باشد", "error");
    }
  };

  useEffect(() => {
    fetchAndSetData(titleImage);
  }, [titleImage]);
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
  // let imageArray = [
    // image1,
    // image2,
    // image3,
    // image4,
    // image5,
    // image6,
    // image7,
    // image8,
    // image9,
    // image10,
    // image11,
    // image12,
    // image13,
    // image14,
    // image15,
    // image16,
    // image17,
    // image18,
    // image19,
    // image20,
    // image21,
    // image22,
    // image23,
    // image24,
    // image25,
    // image26,
    // image27,
    // image28,
    // image29,
    // image30,
    // image31,
    // image32,
    // image33,
  // ];
  const [value, setValue] = useState(0);
  useEffect(() => {
    // addToArray();
    setselectedImageBackground(imageList[0]);
  }, []);
  // const addToArray = () => {
  //   imageArray = [];
  //   for (let i = 0; i < 20 * indexForLoadedImage; i++) {
  //     imageArray.push(i);
  //   }
  //   console.log(imageArray, "_________________>");
  // };
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
      initial={{ backgroundColor: " rgb(1, 32, 44)", opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* <LazyLoadComponent/> */}
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          padding: "32px",
          flexWrap: "wrap",
        }}
      >
        <RadiusButton
          clickEvent={() => {
            setTitleImage("دفاع مقدس");
          }}
          title="دفاع مقدس"
        />
        <RadiusButton
          clickEvent={() => {
            setTitleImage('متفرقه');
            console.log(titleImage)
          }}
          title="متفرقه"
        />
        <RadiusButton
          clickEvent={() => {
            setTitleImage();
          }}
          title="سلام"
        />
        <RadiusButton
          onClick={() => {
            setTitleImage();
          }}
          title="سلام"
        />
        <RadiusButton
          onClick={() => {
            setTitleImage();
          }}
          title="سلام"
        />
      </div>
      <main id="image-container">
        {imageArray.map((item, index) => {
          return (
            <div className="image-item">
              <div className="title">عکس</div>
              <img
                className="gallery-single-image"
                src={`http://localhost:4848/static/uploads/imageGallery/${item.url}`}
                onClick={() => {
                  openDialog(imageArray, index);
                }}
                style={{ aspectRatio: 1 / 1.1, borderRadius: "5px" }}
                alt=""
              />
              <div className="content">دفاع مقدس</div>
            </div>
          );
        })}
      </main>
    </motion.div>
  );
};
export default Gallery;
