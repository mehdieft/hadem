import ShahidCard from "../../components/ShahidCard/shahidCard";
import shohada from "../../assets/images/shohada.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export const ShohadaSearch = () => {
  const Availble = () => {
    return (
      <>
         {shahidList.map((item, index) => {
            return (
              <>
                <ShahidCard 
                key={Math.random()*100}
                  name={item.name}
                  family={item.family}
                  lastServePlace={item.lastServePlace}
                  placeOfDeath={item.placeOfDeath}
                  birthdate={item.birthdate}
                  dieDate={item.dieDate}
                  wayOfDie={item.wayOfDie}
                  cemeteryPlace={item.cemeteryPlace}
                  image={item.image}
                  birthdayPlace={item.birthdayPlace}
                  militiryEducation={item.militiryEducation}
                  dieDay={item.dieDay}
                  dieYear={item.dieYear}
                  dieMonth={item.dieMonth}
                />
              </>
            );
          })}
      </>
    );
  };
  const NotshahidToday = () => {
    return (
      <>
        <p style={{color:'white',fontSize:32,margin:'120px 0',fontFamily:'diba'}}>شهیدی یافت نشد</p>
      </>
    );
  };

  const [shahidList, setShahidList] = useState([]);
  const location = useLocation();
  const myData = location.state.dataList[0];
  console.log("my data", myData);
  useEffect(() => {
    setShahidList(location.state.dataList[0]);
    console.log("this is data-----", shahidList);
  }, []);

  return (
    <>
      {/* <div className="shahid-container">
      <section className="search-background" style={{backgroundImage:`url(${shohada})`,backgroundSize:'cover'}}>
        <div className="search-bar"></div>
      </section>
      <div style={{ background: "rgb(1, 32, 44)" }}>
        <img src={shohada} style={{ width: "100%", width: "100%" }} alt="" />
      </div>
      <div className="shahid-container">
        <ShahidCard />
        <ShahidCard />
        <ShahidCard />
        <ShahidCard />
      </div>
    </div> */}
        {/* <div className="search-bar">daskjjdghasjghdjh</div> */}
        <div style={{ background: "rgb(1, 32, 44)" }}>
          <img src={shohada} style={{ width: "70%", width: "70%",margin:'0 auto',display:'block' }} alt="" />
          {/* <div className="search-bar">daskjjdghasjghdjh</div> */}
        </div>
        <div className="shahid-container" style={{padding:'64px 0'}}>
      
        {shahidList !==undefined && shahidList.length > 0   ? <Availble /> : <NotshahidToday />}
        </div>
    </>
  );
};
