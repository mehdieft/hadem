import "./style.css";
import defaultShahid from "../../assets/Image/defaultShahid.jpg";
const ShahidCard = ({
  name,
  family,
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
  dieDay,
}) => {
  return (
    <>
      <div className="card-container" style={{background:`url(${defaultShahid})`,backgroundSize:'cover',filter:'opacity(0.8)'}}>
        <div className="shahid-image-container">

        <div className="card-image">
          <img src={defaultShahid} height={'120px'} width={'120px'} style={{borderRadius:'50%'}} />
        </div>
          <span className="shahid-name">شهید {name}  {family}</span>
        </div>
        <div className="card-detail">
          {/* <span className="card-title">شهید امروز</span> */}
          <span>تاریخ تولد:<span className="shahid-detail-span" style={{rotate:'180deg'}}>{birthdate !==''&& birthdate?birthdate.split('T')[0].replaceAll('-','/'):'موجود نیست'}</span> </span>
          <span>زادگاه:<span className="shahid-detail-span">{birthdayPlace !=='' || birthdayPlace !==''?birthdayPlace:'موجود نیست'}</span>  </span>
          <span>تاریخ شهادت:<span className="shahid-detail-span" style={{rotate:'180deg'}}>{dieDate !=='' && dieDate?dieDate.split('T')[0].replaceAll('-','/'):'موجود نیست'}</span>  </span>
          <span>نحوه شهادت:<span className="shahid-detail-span">{wayOfDie !==''?wayOfDie:'موجود نیست'}</span>   </span>
          <span>آخرین محل خدمت:<span className="shahid-detail-span">{lastServePlace !==''?lastServePlace:'موجود نیست'}</span> </span>
          <span>تحصیلات نظامی:<span className="shahid-detail-span">{militiryEducation !==''?militiryEducation:'موجود نیست'}</span> </span>
          <span>محل آرامگاه:<span className="shahid-detail-span"> {cemeteryPlace !==''?cemeteryPlace:'موجود نیست'}</span> </span>


        </div>
      </div>
    </>
  );
};
export default ShahidCard;
