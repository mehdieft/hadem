import { Link } from 'react-router-dom'
import videoheader from '../../assets/video/navyHeader.mp4'
import navy from '../../assets/icon/navy2.png'
import './style.css'
export const Header=()=>{
    return (
        <>
        <div className="header-main-wrapper" style={{background:`url(${navy}) 0 0 `}}>
            <div className="header-links">
                <Link className="header-link-item"> خانه</Link>
                <Link className="header-link-item"> خانه</Link>
                <Link className="header-link-item"> خانه</Link>
                <Link className="header-link-item"> خانه</Link>
            </div>
            <div className="header-text-container">
                <div className="image-header-section"></div>
                <div className="heder-text">
                    <p>نیرویی راهبردی در جهت حفظ تمامیت ارضی آب های نیلگون خلیج فارس</p>

                </div>

            </div>
        </div>
     

        </>
    )
}
