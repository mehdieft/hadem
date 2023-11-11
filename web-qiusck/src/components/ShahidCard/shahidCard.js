import "./style.css";
import defaultShahid from "../../assets/Image/defaultShahid.jpg";
const ShahidCard = ({
  imageSrc = defaultShahid,
  height = "120px",
  width = "100px",
  name = "شهید محمدعلی کلینی",
  birthDay = "30/3-fsd",
  dieDay = "fsdfsdfsdf",
  detailDie = "fsdfsdfsdfsdfsdf",
}) => {
  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <img src={imageSrc} height={height} width={width} style={{borderRadius:'50%'}} />
        </div>
        <div className="card-detail">
          {/* <span className="card-title">شهید امروز</span> */}
          <span className="shahid-name">{name}</span>
          <span>تاریخ تولد: {birthDay}</span>
          <span>تاریخ شهادت:  {dieDay}</span>
          <span>نحوه شهادت {detailDie}</span>
        </div>
      </div>
    </>
  );
};
export default ShahidCard;
