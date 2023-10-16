import "./style.css";
import { AnimationImageCard } from "../../components/animationImageCard/animationImageCard";
import firstImage from "../../assets/images/navy-aviation-jobs-careers.jpg";
import secondImage from '../../assets/images/find-careers-united-states-navy-electronics-technician-nuclear.jpg'
import thirdImage from '../../assets/images/find-careers-united-states-navy-hospital-corpsman-advanced-technical-field.jpeg'
import { useNavigate } from "react-router-dom";
export const MainLayout = () => {
  const navigate=useNavigate()
  const galleryHandler=()=>{
    console.log("hello world")
    navigate('/gallery')
  }
  return (
    <div
      style={{
        direction:'rtl',
        backgroundColor: "#01202C",
        paddingTop: "120px",
        paddingBottom: "160px",
      }}
    >
      <div className="main-image-container">
        <AnimationImageCard
        onClick={()=>{galleryHandler}}
          animationImage={firstImage}
          content="خاطرات به یاد ماندنی جانبازان معزز نیروی دریایی ارتش جمهوری اسلامی
          ایران از دوران دفاع مقدس"
          title="مشاهده خاطرات"
        />
        <AnimationImageCard
        onClick={()=>{galleryHandler}}
        animationImage={secondImage}
          content="خاطرات به یاد ماندنی جانبازان معزز نیروی دریایی ارتش جمهوری اسلامی
          ایران از دوران دفاع مقدس"
          title="گالری تصاویر"
        />
        <AnimationImageCard
        onClick={galleryHandler}
        animationImage={thirdImage}
          content="خاطرات به یاد ماندنی جانبازان معزز نیروی دریایی ارتش جمهوری اسلامی
          ایران از دوران دفاع مقدس"
          title="آرشیو شهدا"
        />
      </div>
    </div>
  );
};
