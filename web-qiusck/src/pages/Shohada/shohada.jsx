import "./style.css";
import shohada from '../../assets/images/shohada.jpg'
import ShahidCard from "../../components/ShahidCard/shahidCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Shohada = () => {
  const [shahidList,setShahidList]=useState([]);
 
  useEffect(()=>{
      
    console.log("this is data-----",shahidList)
  },[])

  
  return (
    <>
    {/* <div className="shahid-container">
      <section className="search-background" style={{backgroundImage:`url(${shohada})`,backgroundSize:'cover'}}>
        <div className="search-bar"></div>
      </section>
    </div> */}
    <div style={{background:'rgb(1, 32, 44)'}}>
    <img src={shohada} style={{width:'100%',width:'100%'}} alt="" />
    <div className="search-bar">daskjjdghasjghdjh</div>
    </div>
    <div className="shahid-container">

 <ShahidCard/>   
 <ShahidCard/>  
 <ShahidCard/>  
 <ShahidCard/>  
    </div>
    
    </>
  );
};
export default Shohada;
