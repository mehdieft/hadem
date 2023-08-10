import './style.css'
import IconButton from '../IconButton/iconButton'
import menuIcon from '../../assets/icon/Image.svg';
import navyIcon from '../../assets/icon/harbor.svg';
import flowerIcon from '../../assets/icon/tulip.svg';
import { useNavigate } from 'react-router-dom';

const BlackContainer=()=>{
    const Navigate = useNavigate();
    const clickGalleryIcon=()=>{
        console.log("this is not working")
        Navigate('/gallery')
    }
    const clickShahidIcon=()=>{
        Navigate('/shohada')
    }
    const clickNedajaMissions=()=>{
        Navigate('/nedajaMissions')
    }
    return(
        <>
        <div className="container">
            <div className="icon-inner">
                <IconButton className="black-container-icon"  clickHandler={clickGalleryIcon}  title={'گالری'} icon={menuIcon}/>
                <IconButton className="black-container-icon" clickHandler={clickShahidIcon} title={'شهدا'} icon={flowerIcon}/>
                <IconButton className="black-container-icon" clickHandler={clickNedajaMissions} title={'عملیات های نداجا'} icon={navyIcon}/>
                

            </div>

        </div>

        </>
    )
}
export default BlackContainer