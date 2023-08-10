import "./style.css";

import mainHeaderImage from "../../assets/Image/mainheader.png";
import IconButton from "../../components/IconButton/iconButton";
import gallery from "../../assets/icon/Image.svg";
import BlackContainer from "../../components/BlackContainer/blackContainer";
import shahid from "../../assets/Image/shahid1.png";
import ShahidCard from "../../components/ShahidCard/shahidCard";
import { useState, useEffect, useRef } from "react";
// import { ConfirmationDialogRaw } from "../../components/DialogComponent/dialogComponent";

// props of shahid card is imageSrc width height name birthday dieDay and detailDie
const data=[

  {name:'شهید علی',imageSrc:shahid,birthDay:'21/21/21',dieDay:'21/21/21',detailDie:'21/21/21'},
  {name:'شهید علی',imageSrc:shahid,birthDay:'21/21/21',dieDay:'21/21/21',detailDie:'21/21/21'},
  {name:'شهید علی',imageSrc:shahid,birthDay:'21/21/21',dieDay:'21/21/21',detailDie:'21/21/21'},
  {name:'شهید علی',imageSrc:shahid,birthDay:'21/21/21',dieDay:'21/21/21',detailDie:'21/21/21'},
  {name:'شهید علی',imageSrc:shahid,birthDay:'21/21/21',dieDay:'21/21/21',detailDie:'21/21/21'},
  {name:'شهید علی',imageSrc:shahid,birthDay:'21/21/21',dieDay:'21/21/21',detailDie:'21/21/21'},
  {name:'شهید علی',imageSrc:shahid,birthDay:'21/21/21',dieDay:'21/21/21',detailDie:'21/21/21'},
  {name:'شهید علی',imageSrc:shahid,birthDay:'21/21/21',dieDay:'21/21/21',detailDie:'21/21/21'},
]


function Carousel() {
  const windowWidth=useRef(window.innerWidth)

 useEffect(()=>{
  console.log("this is width",windowWidth.current)
 
  console.log(typeof(windowWidth.current),'this is type of')

 })
  return (
    <>
     
       <div
        className="main"
       
      >
        <div className="shahid-container">
          <div className="shahid-text-container">
            <span className="shahid-text">
              نیروی دریایی راهبردی
              <br />
              <span>ارتش جمهوری اسلامی ایران</span>
            </span>
          </div>
          <ShahidCard
            imageSrc={shahid}
            name={"شهید دریادار محمد وطن خواه"}
            birthDay={"30/6/74"}
            dieDay={"30/2/89"}
            detailDie={"شهادت در اسارت"}
          />
        </div>
        {
          (windowWidth.current >  752) ?  <BlackContainer />:<></>
        }
      </div> 
    </>
  );
}
export default Carousel;
