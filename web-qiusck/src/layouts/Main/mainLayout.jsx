import "./style.css";
import { AnimationImageCard } from "../../components/animationImageCard/animationImageCard";
import firstImage from "../../assets/images/khatere.jpg";
import secondImage from '../../assets/images/iran.jpg'
import thirdImage from '../../assets/images/shahid.jpg'
import { useNavigate } from "react-router-dom";
import CountUp from 'react-countup';
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
    navigate('/shohada')


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
          title="شهدای امروز"
        />
      </div>
      <div>
      <CountUp scrollSpyDelay={1} enableScrollSpy={true} duration={10} className="counter" end={1304320} />
      <span style={{fontSize:43,color:'white'}}>dsadasdas</span>
      </div>
    </motion.div>
    
  );
};
