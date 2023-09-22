import { Link } from "react-router-dom";
import videoheader from "../../assets/video/navyHeader.mp4";
import navy from "../../assets/icon/navy2.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import logoHeader from "../../assets/icon/logo.svg";
import "./style.css";
export const Header = () => {
  return (
    <>
      <div
        className="header-main-wrapper"
        style={{ background: `url(${navy}) 0 0 ` }}
      >
        <div className="header-links">
          <Link className="header-link-item"> خانه</Link>
          <Link className="header-link-item"> خانه</Link>
          <Link className="header-link-item"> خانه</Link>
          <Link className="header-link-item"> خانه</Link>
        </div>
        <div className="header-text-container">
          <div className="image-header-section">
            <img src={logoHeader} alt="" />
          </div>
          <div className="heder-text">
            <p
              style={{
                color: "white",
                fontFamily: "iranSans",
                fontSize: "30px",
              }}
            >
              {" "}
              آرشیوی از افتخارات نیروی دریایی جمهوری اسلامی ایران در دوران دفاع
              مقدس
            </p>
            <span className="header-button">
              <PlayArrowIcon className="header-icon" />
              مشاهده بیشتر
            </span>
          </div>
        </div>
        <div className="header-video-container">
          <video
            className="video-header"
            preload="metadata"
            loop
            muted
            autoPlay
          >
            <source type="video/mp4" src={videoheader}></source>
          </video>
        </div>
        <div>dasljkdajklfjksdfsdfsdf</div>
      </div>
    </>
  );
};
