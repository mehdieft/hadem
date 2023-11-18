import "./style.css";
import shohada from "../../assets/images/shohada.jpg";
import ShahidCard from "../../components/ShahidCard/shahidCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTodayShahid } from "../../api/shahidDetailRequest";
import monthConverter from '../../utils/monthConverter'
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';
// import { Calendar } from "react-modern-calendar-datepicker";


const Shohada = () => {
  let month=''
  let day=''
const [monthName,seMonthName]=useState('')  
const [dayName,setDayName]=useState('')
  const Availble = () => {
    // const minimumDate = {
    //   year: 2019,
    //   month: 4,
    //   day: 10
    // };
  
    // const maximumDate = {
    //   year: 2019,
    //   month: 4,
    //   day: 21
    // }
    return (
      <>
        <div style={{ background: "rgb(1, 32, 44)" }}>
          {/* <img src={shohada} style={{ width: "100%", width: "100%" }} alt="" /> */}
          {/* <div className="search-bar">daskjjdghasjghdjh</div> */}
        </div>
        <div className="shahid-container">
          {shahidList.map((item, index) => {
            return (
              <>
              {/* <Calendar  locale="fa" /> */}
                <ShahidCard
                  name={item.name}
                  family={item.family}
                  lastServePlace={item.lastServePlace}
                  placeOfDeath={item.placeOfDeath}
                  birthdate={item.birthdate}
                  dieDate={item.dieDate}
                  wayOfDie={item.wayOfDie}
                  image={item.image}
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
        <p style={{color:'white',fontSize:32,margin:'120px 0',fontFamily:'diba'}}>در تاریخ 
        {dayName} 
        {monthConverter(monthName)}
        معززی به شهادت نرسیده است
         </p>
      </>
    );
  };

  const [shahidList, setShahidList] = useState([]);
  const fetchAndSetData = async () => {

    const result = await getTodayShahid();
    console.log("ress----->", result);
    seMonthName(result.data.todayDate.month)
    setDayName(result.data.todayDate.day)
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
    console.log(monthConverter(monthName))
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
     <div style={{ background: "rgb(1, 32, 44)" }}>
          <img src={shohada} style={{ width: "80%", height: "60%",display:'block', margin:'0 auto' }} alt="" />
          {/* <div className="search-bar">daskjjdghasjghdjh</div> */}
        </div>
        <div className="shahid-container">
         
        
      {shahidList.length > 0 ? <Availble /> : <NotshahidToday />}
        </div>
    </>
  );
};
export default Shohada;
