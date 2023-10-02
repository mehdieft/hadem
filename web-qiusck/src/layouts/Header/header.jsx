import { Link } from "react-router-dom";
import videoheader from "../../assets/video/navyHeader.mp4";
import navy from "../../assets/icon/navy2.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import logoHeader from "../../assets/icon/logo.svg";
import searchHeaderImage from "../../assets/images/searchHeader.jpg";
import nedaja from "../../assets/icon/nedaja.png";
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
            <input type="button" value="lets play" />
            <input type="button" value="lets play" />
          </div>
        </div>
      </div>
      <div
        className="header-search-container"
        style={{
          height:'30vw',
          backgroundImage: `url(${searchHeaderImage})`,
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
};
