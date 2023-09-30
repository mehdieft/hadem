import { Link } from "react-router-dom";
import videoheader from "../../assets/video/navyHeader.mp4";
import navy from "../../assets/icon/navy2.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import logoHeader from "../../assets/icon/logo.svg";
import nedaja from '../../assets/icon/nedaja.png'
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
            <img src={nedaja} width={100} height={100}/>
          </div>
          <div className="nav-menu">
            <ul>
              <li>
              </li>
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
