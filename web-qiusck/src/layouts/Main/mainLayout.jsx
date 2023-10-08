import './style.css';
import {AnimationImageCard} from '../../components/animationImageCard/animationImageCard'
import firstImage from '../../assets/images/navy-aviation-jobs-careers.jpg'

export const MainLayout=()=>{
    return (
        <div style={{backgroundColor:'#01202C',paddingTop:'120px',paddingBottom:'160px'}}>
            <div className="main-image-container">
            <AnimationImageCard animationImage={firstImage} />
                <div style={{height:'120px',borderRadius:'5px',backgroundColor:'yellow'}}></div>
                <div style={{height:'120px',borderRadius:'5px',backgroundColor:'green'}}></div>

            </div>

        
        </div>
    )
}