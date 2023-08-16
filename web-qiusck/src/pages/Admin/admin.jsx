import "./style.css";
import AdminHeaderIcon from "../.../../../assets/icon/AdminHeaderIcon.svg";
import uk from "../.../../../assets/icon/uk.svg";
import GrapicSide from '../../assets/icon/GrapicSide.svg'
import { Outlet } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, InputAdornment,TextField,FormControl} from "@mui/material";
import { useState } from "react";
export const Admin = () => {
 const [showCancelIcon,setShowIcon]=useState(false);
 const [Search,setSearch]=useState('');

  const clickCancelButton=()=>{

  }










  return (
    <>
      <div className="admin-header">
        <div className="header-left">
          <img src={AdminHeaderIcon} />
          <h1 style={{ fontFamily: "Diba", display: "inline" }}>حادم</h1>
        </div>
        <div className="header-center">
          <FormControl>
            <TextField variant="outlined"size="medium" placeholder="لطفا کلمه مورد نظر را جستجو کنید" onChange={(e)=>setSearch(e.target.value)} inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ display:(showCancelIcon? 'none':'-ms-flexbox')  }}
                      onClick={clickCancelButton}
                    >
                      <ClearIcon />
                    </InputAdornment>
                  )
            }}></TextField>
          </FormControl>
       
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
          <div style={{backgroundImage:`url(${GrapicSide})`,height:'330px',width:'100%',backgroundSize:'cover'}}>
            <h2 style={{transform:'translate(43%,120px)',color:'white',fontSize:24,fontFamily:'Diba'}}>خوش آمدید جناب</h2>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
