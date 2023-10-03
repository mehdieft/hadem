import { Link } from "react-router-dom";
import videoheader from "../../assets/video/navyHeader.mp4";
import navy from "../../assets/icon/navy2.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import logoHeader from "../../assets/icon/logo.svg";
import searchHeaderImage from "../../assets/images/searchHeader.jpg";
import nedaja from "../../assets/icon/nedaja.png";
import SearchIcon from '@mui/icons-material/Search';
import {motion} from 'framer-motion'
import "./style.css";
export const Header = () => {
  return (
    <>
      <div className="header">
        <video id="header-video" autoPlay muted loop>
          <source type="video/mp4" src={videoheader} />
        </video>
        <nav className="nav-container">
          <div className="logo-header">
            <img src={nedaja} width={100} height={100} />
          </div>
          <div className="nav-menu">
            <ul>
              <li></li>
              <Link href="">خانه</Link>
              <li>
                <Link href="">خانه</Link>
              </li>
              <li>
                <Link href="">خانه</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-content">
          <div className="header-image-iran"></div>
          <div id="content">
            <h1>we will fight for you bitches</h1>
            <motion.button initial={{
              x:'100vw',
            
              borderRadius:12,
              backgroundColor: "white",
              boxShadow: "5px 5px 0 rgba(20, 20, 120, 0.2)",
            }}
            transition={{delay:1.4,duration:0.3,damping:40, type:'spring'}}
            animate={{
              padding:'12px 32px',
              fontSize:12,
              x:0
            }}
            >مشاهده کن کیری</motion.button>
           
            
        
          </div>
        </div>
      </div>
      <div
        className="header-search-container"
        style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',

          height:'30vw',
          backgroundImage: `url(${searchHeaderImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="header-content-wrapper">

        <div className="search-input-container">
          <div className="header-content-icon-wrapper">

          <SearchIcon color="inhert" />
          </div>
          <input  type="text" placeholder="نام شهید جستجو کنید" style={{backgroundColor:'inherit' ,border:0}} />
        </div>
        <hr></hr>
        </div>
      </div>
    </>
  );
};
