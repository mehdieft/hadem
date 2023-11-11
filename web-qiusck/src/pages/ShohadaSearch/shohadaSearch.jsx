import ShahidCard from "../../components/ShahidCard/shahidCard";
import shohada from '../../assets/images/shohada.jpg'

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export const ShohadaSearch=()=>{
    const [shahidList,setShahidList]=useState([]);
    const location = useLocation();
    const myData = location.state.dataList[0].data.data;
    console.log("my data",myData)
    useEffect(()=>{
        setShahidList(location.state.searchList);
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
    {/* <div className="search-bar">daskjjdghasjghdjh</div> */}
    </div>
    <div className="shahid-container">

 <ShahidCard/>   
 <ShahidCard/>  
 <ShahidCard/>  
 <ShahidCard/>  
    </div>
    
    </>
  );
}