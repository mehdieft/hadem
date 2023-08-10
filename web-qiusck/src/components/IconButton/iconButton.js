import "./style.css";
const IconButton = ({ title, icon, clickHandler, width='64px', height='64px' }) => {
  return (
    <>
      <div onClick={clickHandler} className="icon-button-container">
        <div className="icon-button">
          <img src={icon} style={{width:`${width}`,height:`${height}`}} />
        </div>
          <span className="icon-text">{title}</span>
      </div>
    </>
  );
};
export default IconButton;
