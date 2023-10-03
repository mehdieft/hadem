import './style.css';
export const AnimationImageCard=({animationImage})=>{
    return (
        <div style={{height:'100%'}}>
            <div className="animation-card-container" style={{backgroundImage: `url(${animationImage})`}}>


            </div>

        
        </div>
    )
}