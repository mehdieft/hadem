import './style.css';
import {delay, motion} from 'framer-motion'
export const AnimationImageCard=({animationImage})=>{
    return (
        <motion.div initial={{backgroundImage: `url(${animationImage})`,backgroundSize:'cover',display:'flex',justifyContent:'flex-end',flexDirection:'column',height:'71vh'}} 
        animate={{boxShadow: ' 0px 5px 15px transparent'}}
        whileHover={{boxShadow: ' 0px 5px 15px white',scale:1.03,transition: { duration:1 },}}
        transition={{delay:'0.9s',}}
        style={{height:'100%'}}>
            <motion.div className="animation-card-container"  >
                <motion.div>
                    <span>مشاهده خاطرات</span>
                </motion.div>
                <motion.div whileHover={{display:'visible',backgroundColor:'red',opacity:1}} initial={{opacity:0,color:'white'}}>
                    خاطرات به یاد ماندنی جانبازان معزز نیروی دریایی ارتش جمهوری اسلامی ایران
                    از دوران دفاع مقدس
                </motion.div>

            </motion.div>

        
        </motion.div>
    )
}