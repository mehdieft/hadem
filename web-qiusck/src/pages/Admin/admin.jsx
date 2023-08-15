import './style.css';
import AdminHeaderIcon from '../.../../../assets/icon/AdminHeaderIcon.svg'
export const Admin=()=>{
    


  return(
  <>
  <div className="admin-header">
    <div className="header-left">
        <img src={AdminHeaderIcon}/>
        <h1  style={{fontFamily:'Diba',display:'inline'}}>حادم</h1>
    </div>
    <div className="header-center">
        <input placeholder='کلمه مورد نظر را جستجو کنید' type="text" className="header-searchInput" />
    </div>
    <div className="header-right">
       
    </div>

  </div>
  
  </>
   
  )
    
}