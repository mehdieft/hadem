import "./style.css";
import { Header } from "../../layouts/Header/header";
// import CarouselComponent from "../../layouts/Carousel/carousel";
// import mainHeaderImage from "../../assets/Image/mainheader.png";

import { useRef } from "react";

const Index = () => {
  // const windowWidth=useRef(window.innerWidth)
  return (
    <>
    <Header/>
   
      {/* <div  style={{
          backgroundImage: `url(${mainHeaderImage})`,
          backgroundSize: "cover",
        }}>

      <CarouselComponent />
      </div> */}
      {/* <h1>{windowWidth}</h1> */}
    </>
  );
};
export default Index;
