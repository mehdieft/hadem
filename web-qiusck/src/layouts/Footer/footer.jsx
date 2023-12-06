import './style.css';
import { RadiusButton } from '../../components/RadiusButton/radiusButton';
import footerImage from '../../assets/images/footer.png'
import { FramerCarouselOne } from '../../components/framerCarouselOne/framerCarouselOne';






export  const Footer=()=>{
    return(
        <>
        <FramerCarouselOne/>
        <div className="footer-container" style={{background:`url(${footerImage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
         <span atyle={{margin:'0'}}>ارتش قوی بود قوی هست و قوی و استوار خواهد ماند</span>
        </div>

        </>
    )
}
// export default Footer;