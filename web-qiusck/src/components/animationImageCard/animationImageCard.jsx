import './style.css';
import {delay, motion} from 'framer-motion'
export const AnimationImageCard=({animationImage})=>{
    return (
        <motion.div initial={{}} 
        animate={{boxShadow: ' 0px 5px 15px transparent'}}
        whileHover={{boxShadow: ' 0px 5px 15px white',scale:1.03,transition: { duration:1 },}}
        transition={{delay:'0.9s',}}
        style={{height:'100%'}}>
            <motion.div className="animation-card-container" style={{backgroundImage: `url(${animationImage})`}}>

             بیسمنتبسیتمبسی
            </motion.div>

        
        </motion.div>
    )
}