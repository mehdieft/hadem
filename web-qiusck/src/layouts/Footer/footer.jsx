import './style.css';
import { RadiusButton } from '../../components/RadiusButton/radiusButton';
import footerImage from '../../assets/images/footer.png'






export  const Footer=()=>{
    return(
        <>
        <div className="footer-container" style={{background:`url(${footerImage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <div className="footer-content-inner">
                <div className="footer-header-title">
                   fdsfdsfsdfsdfsd ما برای شما شما برای ما
                </div>
                <div className="footer-links-inner">
                    <div className="footer-links-section">
                        <div className="footer-link-and-button-container">
                            <div className="footer-button">
                                <RadiusButton title="see more"/>
                            </div>
                            <div className="footer-links">
                                <div><a href="">jjaskdghha</a><a href=""></a>kllfdjlkdsjflsjdf<a href="">dfkjlklsdjfklsjdkfljsd</a></div>
                                <div><a href="">jjaskdghha</a><a href=""></a>kllfdjlkdsjflsjdf<a href="">dfkjlklsdjfklsjdkfljsd</a></div>
                               
                            </div>
                        </div>
                        <div className="footer-link-line"></div>
                        <div className="footer-icons-group"></div>
                    </div>
                    <div className="footer-icon"></div>
                </div>
            </div>
        </div>

        </>
    )
}
// export default Footer;