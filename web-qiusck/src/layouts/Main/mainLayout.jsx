import "./style.css";
import { AnimationImageCard } from "../../components/animationImageCard/animationImageCard";
import firstImage from "../../assets/images/navy-aviation-jobs-careers.jpg";
import secondImage from '../../assets/images/find-careers-united-states-navy-electronics-technician-nuclear.jpg'
import thirdImage from '../../assets/images/find-careers-united-states-navy-hospital-corpsman-advanced-technical-field.jpeg'

export const MainLayout = () => {
  return (
    <div
      style={{
        backgroundColor: "#01202C",
        paddingTop: "120px",
        paddingBottom: "160px",
      }}
    >
      <div className="main-image-container">
        <AnimationImageCard
          animationImage={firstImage}
          content="خاطرات به یاد ماندنی جانبازان معزز نیروی دریایی ارتش جمهوری اسلامی
          ایران از دوران دفاع مقدس"
          title="مشاهده خاطرات"
        />
        <AnimationImageCard
          animationImage={secondImage}
          content="خاطرات به یاد ماندنی جانبازان معزز نیروی دریایی ارتش جمهوری اسلامی
          ایران از دوران دفاع مقدس"
          title="گالری تصاویر"
        />
        <AnimationImageCard
          animationImage={thirdImage}
          content="خاطرات به یاد ماندنی جانبازان معزز نیروی دریایی ارتش جمهوری اسلامی
          ایران از دوران دفاع مقدس"
          title="آرشیو شهدا"
        />
      </div>
    </div>
  );
};
