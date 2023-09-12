import "./style.css";
import AdminHeaderIcon from "../.../../../assets/icon/AdminHeaderIcon.svg";
import InstagramIcon from "@mui/icons-material/Instagram";

import uk from "../.../../../assets/icon/uk.svg";
import GrapicSide from "../../assets/icon/GrapicSide.svg";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {motion,useScroll} from 'framer-motion'


import { useState } from "react";
export const Admin = () => {
  const { scrollYProgress } = useScroll();

  const [showCancelIcon, setShowIcon] = useState(false);
  const [Search, setSearch] = useState("");
  const navigate = useNavigate();
  const imageGalleryClickHandler = () => {
    navigate("/admin/imageGalleryManagment");
  };
  const videoGalleryClickHandler=()=>{
    navigate('/admin/videoGalleryManagment');
  }
const shshidManagamentClickHandler=()=>{
  navigate('/admin/shahidManagament')
}
const warHistoryManagmentClickHandler=()=>{
  navigate('/admin/warHistoryManagament')
}

  return (
    <motion.div 
   
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth,transition:{duration:0.1}}}
    >
      <div className="admin-header">
        <div className="header-left">
          <img src={AdminHeaderIcon} />
          <h1 style={{ fontFamily: "Diba", display: "inline" }}>حادم</h1>
        </div>
        <div className="header-center">
          <input
            placeholder="کلمه مورد نظر را جستجو کنید"
            type="text"
            className="header-searchInput"
          />
        </div>
        <div className="header-right">
          <img src={uk} />
          <img src={uk} />
          <img src={uk} />
          <img src={uk} />
        </div>
      </div>
      <div className="admin-main">
        <div className="left-nav">
          <Button
          onClick={imageGalleryClickHandler}
            variant="outlined"
            sx={{
              padding: "9px 65px",
              color: "black",
              opacity: "0.9",
              fontFamily: "Diba",
            }}
            startIcon={<InstagramIcon />}
          >
            مدیریت عکس ها
          </Button>
          <Button
          onClick={videoGalleryClickHandler}
            variant="outlined"
            sx={{
              padding: "9px 65px",
              color: "black",
              opacity: "0.9",
              fontFamily: "Diba",
            }}
            startIcon={<InstagramIcon />}
          >
            مدیریت ویدیوها{" "}
          </Button>
          <Button
            variant="outlined"
            sx={{
              padding: "9px 65px",
              color: "black",
              opacity: "0.9",
              fontFamily: "Diba",
            }}
            startIcon={<InstagramIcon />}
          >
            مدیریت روایت ها{" "}
          </Button>
          <Button
           onClick={shshidManagamentClickHandler}
            variant="outlined"
            sx={{
              padding: "9px 65px",
              color: "black",
              opacity: "0.9",
              fontFamily: "Diba",
            }}
            startIcon={<InstagramIcon />}
          >
            مدیریت شهید ها{" "}
          </Button>
          <Button
          onClick={warHistoryManagmentClickHandler}
         
            variant="outlined"
            sx={{
              padding: "9px 65px",
              color: "black",
              opacity: "0.9",
              fontFamily: "Diba",
              width: " -webkit-fill-available",
            }}
            startIcon={<InstagramIcon />}
          >
            مدیریت نبرد ها{" "}
          </Button>
        
        </div>
        <div className="content">
          <div
            style={{
              backgroundImage: `url(${GrapicSide})`,
              height: "100px",
              width: "100%",
              backgroundSize: "cover",
            }}
          >
            <h2
              style={{
                position: "relative",
                display: "inline",
                top: "44%",
                left: "44%",
                color: "white",
                fontSize: 24,
                fontFamily: "Diba",
              }}
            >
              سامانه مدیریتی حادم
            </h2>
          </div>
          <Outlet />
        </div>
      </div>
      </motion.div> 
       );
};
