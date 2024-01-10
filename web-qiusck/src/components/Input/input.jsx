import './style.css'
const Input=({label,changeHanler})=>{
    return(
        <>
         <div class="field field_v3">
    <label for="email" class="ha-screen-reader">{label}</label>
    <input id="email" class="field__input" onChange={changeHanler} />
    <span class="field__label-wrap" aria-hidden="true">
      <span class="field__label">{label}</span>
    </span>
  </div>
        </>
    )
}
export default Input