import "./style.css";
import defaultShahid from "../../assets/Image/defaultShahid.jpg";
const ShahidCard = ({
  name,
  family,
  image,
  fatherName,
  lastServePlace,
  militiryEducation,
  placeOfDeath,
  birthdate,
  dieDate,
  wayOfDie,
  cemeteryPlace,
  birthdayPlace,
  dieMonth,
  dieYear,
  dieDay,
}) => {
  return (
    <>
      <div className="card-container" style={{background:`url(${defaultShahid})`,backgroundSize:'cover',filter:'opacity(0.8)'}}>
        <div className="shahid-image-container">

        <div className="card-image">
          <img src={image !==''?image: defaultShahid} height={'120px'} width={'120px'} style={{borderRadius:'50%'}} />
        </div>
          <span className="shahid-name">شهید {name}  {family}</span>
        </div>
        <div className="card-detail">
          {/* <span className="card-title">شهید امروز</span> */}
          <span>تاریخ تولد:<span className="shahid-detail-span" style={{rotate:'180deg'}}>{birthdate !==''&& birthdate &&birthdate !==''&& birthdate ?birthdate.split('T')[0].replaceAll('-','/'):'____'}</span> </span>
          <span>زادگاه:<span className="shahid-detail-span">{birthdayPlace !=='' || birthdayPlace !==''?birthdayPlace:'____'}</span>  </span>
          <span>تاریخ شهادت:<span className="shahid-detail-span" style={{rotate:'180deg'}}>{dieDate !=='' && dieDate? `${dieYear}/${dieMonth}/${dieDay}`:'____'}</span>  </span>
          <span>نحوه شهادت:<span className="shahid-detail-span">{wayOfDie !==''?wayOfDie:'____'}</span>   </span>
          <span>آخرین محل خدمت:<span className="shahid-detail-span">{lastServePlace !==''?lastServePlace:'____'}</span> </span>
          <span>تحصیلات نظامی:<span className="shahid-detail-span">{militiryEducation !==''?militiryEducation:'____'}</span> </span>
          <span>محل آرامگاه:<span className="shahid-detail-span"> {cemeteryPlace !==''?cemeteryPlace:'____'}</span> </span>


        </div>
      </div>
    </>
  );
};
export default ShahidCard;