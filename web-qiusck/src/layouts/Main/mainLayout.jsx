import './style.css';
import {AnimationImageCard} from '../../components/animationImageCard/animationImageCard'

export const MainLayout=()=>{
    return (
        <div style={{backgroundColor:'#01202C',paddingTop:'120px'}}>
            <div className="main-image-container">
            <AnimationImageCard/>
                <div style={{borderRadius:'5px',backgroundColor:'yellow'}}></div>
                <div style={{borderRadius:'5px',backgroundColor:'green'}}></div>

            </div>

        
        </div>
    )
}