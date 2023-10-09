import "./style.css";
import { delay, motion } from "framer-motion";

export const AnimationImageCard = ({ animationImage }) => {
    const containerAnimate = {
      init: {
        backgroundImage: `url(${animationImage})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        height: "71vh",
        transition:{delay: "0.9s" }
      },
      hover:{ boxShadow: " 0px 5px 15px white",
      scale: 1.03,
      transition: { duration: 1 },},
      animate:{boxShadow: " 0px 5px 15px transparent" }
    };
    const titleAnimation={
        init:{
            color:'white',
            fontSize:32,
            fontWeight:'bold'

        },
        hover:{color:'#ff9800'}
    }

    const contextAnimation={
        init:{opacity: 0, color: "white" },
        hover:{
            display: "visible",
            opacity: 1,
            padding:'32px 0'

        }
    }
    return (
    <motion.div
    variants={containerAnimate}
      initial="init"
      animate="animate"
      whileHover="hover"
      style={{ height: "100%" }}
    >
      <motion.div className="animation-card-container">
        <motion.div variants={titleAnimation}>
          <span>مشاهده خاطرات</span>
        </motion.div>
        <motion.div
        variants={contextAnimation}
        >
          خاطرات به یاد ماندنی جانبازان معزز نیروی دریایی ارتش جمهوری اسلامی
          ایران از دوران دفاع مقدس
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
