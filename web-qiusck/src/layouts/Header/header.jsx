import { Link } from "react-router-dom";
import videoheader from "../../assets/video/navyHeader.mp4";
import navy from "../../assets/icon/navy2.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import logoHeader from "../../assets/icon/logo.svg";
import "./style.css";
export const Header = () => {
  return (
    <>
      <div className="header">
        <video id="header-video" autoPlay muted loop>
          <source type="video/mp4" src={videoheader} />
        </video>
        <nav className="nav-container">
          <div className="logo-header"></div>
          <div className="nav-menu">
            <ul>
              <li>
              </li>
                <a href="">خانه</a>
              <li>
                <a href="">خانه</a>
              </li>
              <li>
                <a href="">خانه</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-content">
          <div id="content">
            <h1>we will fight for you bitches</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              fugiat temporibus eveniet quibusdam quisquam aspernatur fuga
              praesentium vitae quaerat itaque consectetur, sed distinctio
              assumenda id, deserunt voluptatibus suscipit explicabo. Minus.
            </p>
            <input type="button" value="lets play" />
            <input type="button" value="lets play" />

          </div>
        </div>
      </div>
    </>
  );
};
