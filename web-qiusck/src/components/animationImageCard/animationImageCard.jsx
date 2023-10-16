import "./style.css";
import { delay, motion } from "framer-motion";

export const AnimationImageCard = ({ animationImage,title,content }) => {
    const containerAnimate = {
      init: {
        backgroundImage: `url(${animationImage})`,
        backgroundSize: "cover",
      
        transition:{delay: "0.9s" }
      },
      hover:{ boxShadow: " 0px 5px 15px white",
      scale: 1.03,
      transition: { duration: 1 },},
      animate:{boxShadow: " 0px 5px 15px transparent" }
    };
    const titleAnimation={
        init:{
            color:'#fffff',
            fontSize:32,
            fontWeight:'bold'

        },
        animte:{color:'#ffffff'},
        hover:{color:'#ff9800'},
       
    }

    const contextAnimation={
        init:{opacity: 0, color: "white",fontSize:18 },
        hover:{
            display: "visible",
            opacity: 1,
            padding:'32px 0'

        },

    }
    return (
    <motion.div
    className="animation-card-container"
    variants={containerAnimate}
      initial="init"
      animate="animate"
      whileHover="hover"
      style={{ height: "100%" }}
    >
      <motion.div className="animation-card-container">
        <motion.div >
          <motion.span style={{color:'white'}} variants={titleAnimation}  >{title}</motion.span>
        </motion.div>
        <motion.div
        variants={contextAnimation}
        >
          {content}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
