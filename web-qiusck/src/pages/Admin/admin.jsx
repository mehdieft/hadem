import "./style.css";
import AdminHeaderIcon from "../.../../../assets/icon/AdminHeaderIcon.svg";
import uk from "../.../../../assets/icon/uk.svg";
import { Outlet } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button } from "@mui/material";
export const Admin = () => {
  return (
    <>
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
          <Button variant="outlined" sx={{padding: '9px 65px',color:'black',opacity:'0.9',fontFamily:'Diba'}} startIcon={<InstagramIcon/>} >
            عکس ها
          </Button>
          <Button variant="outlined" sx={{padding: '9px 65px',color:'black',opacity:'0.9',fontFamily:'Diba'}} startIcon={<InstagramIcon/>} >
            ویدیو ها
          </Button>
          <Button variant="outlined" sx={{padding: '9px 65px',color:'black',opacity:'0.9',fontFamily:'Diba'}} startIcon={<InstagramIcon/>} >
            روایت ها
          </Button>
          <Button variant="outlined" sx={{padding: '9px 65px',color:'black',opacity:'0.9',fontFamily:'Diba',width:' -webkit-fill-available'}} startIcon={<InstagramIcon/>} >
            نبرد  ها
          </Button>
          <Button variant="outlined" sx={{padding: '9px 65px',color:'black',opacity:'0.9',fontFamily:'Diba'}} startIcon={<InstagramIcon/>} >
            Send
          </Button>
          
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};
