import './style.css';
export function RadiusButton({title,clickEvent}){
    return(
        <>
        <span onClick={clickEvent} className="radius-Button">{title}</span>
   

        </>
    )
}
// export default RadiusButton 