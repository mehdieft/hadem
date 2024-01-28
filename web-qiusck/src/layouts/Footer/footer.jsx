import './style.css';
import { RadiusButton } from '../../components/RadiusButton/radiusButton';
import footerImage from '../../assets/images/footer.png'
import { FramerCarouselOne } from '../../components/framerCarouselOne/framerCarouselOne';






export  const Footer=()=>{
    return(
        <>
        <FramerCarouselOne/>
        <div className="footer-container" style={{background:`url(${footerImage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
         <span style={{margin:'0',fontSize:'32px',position: 'absolute',right:'32%',paddingTop:'82px'}}>نیروی دریایی راهبردی ارتش جمهوری اسلامی ایران</span>
         <div>
            
         </div>
        </div>

        </>
    )
}
// export default Footer;