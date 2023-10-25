import "./style.css";
import { AnimationImageCard } from "../../components/animationImageCard/animationImageCard";
import firstImage from "../../assets/images/navy-aviation-jobs-careers.jpg";
import secondImage from '../../assets/images/find-careers-united-states-navy-electronics-technician-nuclear.jpg'
import thirdImage from '../../assets/images/find-careers-united-states-navy-hospital-corpsman-advanced-technical-field.jpeg'
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
export const MainLayout = () => {
  const navigate=useNavigate()
  const galleryHandler=()=>{
    console.log("hello world")
    navigate('/gallery')
  }
  const historyHandler=()=>{
    console.log("hello world")
    navigate('/diary')

  }
  const shahidHandler=()=>{
    console.log("hello world")
    navigate('/shahid')


  }
  return (
    <motion.div

    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1,transition:{duration:1} }}
    transition={{duration:1}}
      style={{
        direction:'rtl',
        backgroundColor: "#01202C",
        paddingTop: "120px",
        paddingBottom: "160px",
      }}
    >
      <div className="main-image-container">
        <AnimationImageCard
        clilHandler={historyHandler}
        animationImage={firstImage}
          content="خاطرات به یاد ماندنی جانبازان معزز نیروی دریایی ارتش جمهوری اسلامی
          ایران از دوران دفاع مقدس"
          title="مشاهده خاطرات"
        />
        <AnimationImageCard
        clilHandler={galleryHandler}
        animationImage={secondImage}
          content="خاطرات به یاد ماندنی جانبازان معزز نیروی دریایی ارتش جمهوری اسلامی
          ایران از دوران دفاع مقدس"
          title="گالری تصاویر"
        />
        <AnimationImageCard
        clilHandler={shahidHandler}
        animationImage={thirdImage}
          content="خاطرات به یاد ماندنی جانبازان معزز نیروی دریایی ارتش جمهوری اسلامی
          ایران از دوران دفاع مقدس"
          title="آرشیو شهدا"
        />
      </div>
    </motion.div>
  );
};
