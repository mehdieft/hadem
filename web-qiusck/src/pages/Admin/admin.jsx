import "./style.css";
import AdminHeaderIcon from "../.../../../assets/icon/AdminHeaderIcon.svg";
import uk from "../.../../../assets/icon/uk.svg";
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
          <a href="#">click me</a>
          <a href="#">click me</a>
          <a href="#">click me</a>
          <a href="#">click me</a>
        </div>
        <div className="content"></div>
      </div>
    </>
  );
};
