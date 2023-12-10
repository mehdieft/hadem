import "./style.css";
import { Header } from "../../layouts/Header/header";
import { MainLayout} from "../../layouts/Main/mainLayout";

import {motion} from 'framer-motion'
// import CarouselComponent from "../../layouts/Carousel/carousel";
// import mainHeaderImage from "../../assets/Image/mainheader.png";

import { useRef } from "react";

const Index = () => {
  // const windowWidth=useRef(window.innerWidth)
  return (
    <>
    <Header/>
    <MainLayout/>
   
      {/* <div  style={{
          backgroundImage: `url(${mainHeaderImage})`,
          backgroundSize: "cover",
        }}>

      <CarouselComponent />
      </div> */}
      {/* <h1>{windowWidth}</h1> */}
      <a href="../../../../test/index.html" >dasdasdsa</a>
    </>
  );
};
export default Index;
