import './style.css';
function RadiusButton({title,clickEvent}){
    return(
        <>
        <span onClick={clickEvent} className="radius-Button">{title}</span>
   

        </>
    )
}
export default RadiusButton 