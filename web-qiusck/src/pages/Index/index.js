import "./style.css";
import { Header } from "../../layouts/Header/header";
import { MainLayout } from "../../layouts/Main/mainLayout";
import TimeLineComponent from "../../components/timeLineComponent/timeLineComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageSlider from "../../components/imageSlider/imageSlider";
import  A4Animation from '../../components/animationText/a4Layout';

import { motion } from "framer-motion";
// import CarouselComponent from "../../layouts/Carousel/carousel";
// import mainHeaderImage from "../../assets/Image/mainheader.png";

import { useRef } from "react";

const Index = () => {
 
  // const windowWidth=useRef(window.innerWidth)
  return (
    <>
      <Header />
      <A4Animation/>
      <ImageSlider/>
     
      <TimeLineComponent />
      <MainLayout />
      {/* <div  style={{
          backgroundImage: `url(${mainHeaderImage})`,
          backgroundSize: "cover",
        }}>

      <CarouselComponent />
      </div> */}
      {/* <h1>{windowWidth}</h1> */}
      <a href={window.location.origin + "/test/index.html"}>dasdasdsa</a>
    </>
  );
};
export default Index;
