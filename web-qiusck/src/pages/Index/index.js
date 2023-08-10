import "./style.css";
import CarouselComponent from "../../layouts/Carousel/carousel";
import mainHeaderImage from "../../assets/Image/mainheader.png";

import { useRef } from "react";

const Index = () => {
  // const windowWidth=useRef(window.innerWidth)
  return (
    <>
      <div  style={{
          backgroundImage: `url(${mainHeaderImage})`,
          backgroundSize: "cover",
        }}>

      {/* <h1>{windowWidth}</h1> */}
      <CarouselComponent />
      lkasjdklajsldkjalksdjla;sjdlkasjdl;ajsld;kjasdasdasd
      </div>
    </>
  );
};
export default Index;
