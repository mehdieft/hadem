import "./style.css";
import shohada from "../../assets/images/shohada.jpg";
import ShahidCard from "../../components/ShahidCard/shahidCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTodayShahid } from "../../api/shahidDetailRequest";

const Shohada = () => {
  const Availble = () => {
    return (
      <>
        <div style={{ background: "rgb(1, 32, 44)" }}>
          <img src={shohada} style={{ width: "100%", width: "100%" }} alt="" />
          <div className="search-bar">daskjjdghasjghdjh</div>
        </div>
        <div className="shahid-container">
          {shahidList.map((item, index) => {
            return (
              <>
                <ShahidCard name={item.name}
      family={item.family}
      lastServePlace={item.lastServePlace}
      placeOfDeath={item.placeOfDeath}
      birthdate={item.birthdate}
      dieDate={item.dieDate}
      wayOfDie={item.wayOfDie}
      cemeteryPlace={item.cemeteryPlace}
      birthdayPlace={item.birthdayPlace}
      militiryEducation={item.militiryEducation}
     
     />
              </>
            );
          })}

          
        </div>
      </>
    );
  };
  const NotshahidToday = () => {
    return (
      <>
        <p>not shdasdadasddddddddddddddddddddddahid</p>
      </>
    );
  };

  const [shahidList, setShahidList] = useState([]);
  const fetchAndSetData = async () => {
    console.log("fuck you");
    const result = await getTodayShahid();
    console.log("ress----->", result);
    if (result.data !== null) {
      setShahidList(result.data.todayShahid);
      console.log("if statement", shahidList);
    } else {
      // openNotification(result.error, "error");
      // // openNotification("متن جایگزین نباید خالی باشد", "error");
      // setErorr(result.error);
    }
  };

  useEffect(() => {
    fetchAndSetData();
    console.log("this is data-----", shahidList);
  }, []);

  return (
    <>
      {/* <div className="shahid-container">
      <section className="search-background" style={{backgroundImage:`url(${shohada})`,backgroundSize:'cover'}}>
        <div className="search-bar"></div>
      </section>
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
    </div> */}
      {shahidList.length > 0 ? <Availble /> : <NotshahidToday />}
    </>
  );
};
export default Shohada;
