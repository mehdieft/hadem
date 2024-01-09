import { Link } from "react-router-dom";
import videoheader from "../../assets/Video/navyHeader.mp4";
import navy from "../../assets/icon/navy2.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { AnimationImageCard } from "../../components/animationImageCard/animationImageCard";
import logoHeader from "../../assets/icon/logo.svg";
import searchHeaderImage from "../../assets/images/iranNavy.jpeg";
import nedaja from "../../assets/icon/nedaja.png";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import { searchShahid } from "../../api/shahidDetailRequest";
import { useState } from "react";
import { useNotification } from "../../context/NotificationProvider";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";


import "./style.css";
import { useEffect } from "react";
export const Header = () => {
  const { openNotification } = useNotification();

  const navigate = useNavigate();
  const ShahidUlList = ({ shahid }) => {
    return <>
    <ul>
      {shahid.map((item,index)=>{
        <li key={index} >{item.name}  {item.family}</li>
      })}
    </ul>
    </>;
  };

  let [searchList, setSearchList] = useState([]);
  let [shahidName, setShahidName] = useState("");
  let dataList=[]
  useEffect(() => {}, []);

  const svgLogoAnimation = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  const fetchAndSetData = async (name) => {
    console.log("fuck you");
    const result = await searchShahid(name);
    console.log("ress----->", result.data.searchedShahid);
    if (result.data !== null) {
    
      console.log("res----------یسشیشسی->", result);
      dataList.push(result.data.searchedShahid)

      console.log("dataList------->",dataList)
      openNotification("hjajkshda", "success");
      // console.log(searchList);
    } else {
      openNotification(result.error, "error");
      // openNotification("متن جایگزین نباید خالی باشد", "error");
    }
  };
  const searchClkickHandler = async () => {
    if (shahidName == "") {
      openNotification(
        "لطفا نام و نام خانوادگی شهید معزز را وارد کنید",
        "error"
      );
    } else {
      setShahidName(shahidName.replace('شهید',''));
      console.log("shahid name-------------------->",shahidName)
      await fetchAndSetData(shahidName);
      console.log("shahid sented there",searchList)
      navigate('/ShohadaSearch',{state:{dataList}})
      setShahidName("");
    }
  };
  const searchInputHandler = (e) => {
    setShahidName(e.target.value);
    console.log("fuckckkk");
  };
  return (
    <>

      <div className="header">
        <video id="header-video" autoPlay muted loop>
          <source type="video/mp4" src={videoheader} />
        </video>
        {/* <nav className="nav-container">
          <div className="logo-header">
       
            <motion.svg
              variants={svgLogoAnimation}
              initial="hidden"
              animate="visible"
              style={{
                height: "100px",
                color: "white",
                filter: `brightness(0) invert(1)`,
              }}
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.9 }}
                    fill="transparent"
                    strokeWidth="12"
                    stroke="rgba(255, 255, 255, 0.69)"
                    strokeLinecap="round"
                    d="M502.486,319.51l-52.975-44.139c-8.983-7.459-21.992-8.149-31.638-1.683l-52.967,35.311 c-5.888,3.925-9.888,9.897-11.276,16.837c-1.397,6.942,0.009,14.002,3.931,19.89c8.103,12.156,24.569,15.421,36.725,7.345 l5.347-3.226c-16.673,52.701-63.152,92.642-116.118,102.444V122.021c19.862-9.938,34.798-31.223,34.798-55.818 c0-34.07-27.979-61.794-62.049-61.794c-34.07,0-61.41,27.725-61.41,61.794c0,24.595,13.625,45.88,35.695,55.818v330.267 c-55.173-9.802-100.472-49.742-117.144-102.444l4.582,3.226c12.13,8.084,28.475,4.81,36.595-7.354 c8.095-12.157,4.739-28.63-7.407-36.718l-52.99-35.311c-9.698-6.474-22.716-5.765-31.673,1.683L9.544,319.51 c-5.44,4.533-8.787,10.905-9.433,17.949c-0.638,7.052,1.506,13.931,6.032,19.354c9.353,11.216,26.067,12.722,37.3,3.396 l14.259-11.89c20.233,91.806,102.89,159.272,198.305,159.272c95.416,0,178.072-67.467,198.297-159.281l14.276,11.899 c11.207,9.326,27.932,7.826,37.294-3.396C515.219,345.597,513.702,328.861,502.486,319.51z M211.869,66.203 c0-24.337,19.802-44.139,44.139-44.139c24.337,0,44.139,19.802,44.139,44.139s-19.802,44.139-44.139,44.139 C231.671,110.342,211.869,90.54,211.869,66.203z M492.305,345.517c-3.103,3.724-8.672,4.261-12.423,1.121l-38.104-31.748 l-2.207,15.707c-12.767,90.836-91.683,159.339-183.564,159.339S85.211,421.432,72.435,330.596l-2.207-15.707l-38.087,31.748 c-3.759,3.14-9.31,2.612-12.44-1.127c-1.509-1.81-2.224-4.106-2.009-6.448c0.215-2.356,1.328-4.474,3.146-5.983l52.958-44.139 c3.035-2.517,7.276-2.75,10.552-0.56l52.966,35.311c4.052,2.696,5.147,8.188,2.448,12.241c-2.698,4.043-8.207,5.147-12.242,2.446 l-40.32-26.88l3.224,19.974c11.966,74.062,72.909,131.539,147.471,139.781l10.306,1.075V128.071h17.656V472.33l9.28-1.076 c74.57-8.242,134.74-65.719,146.697-139.781l3.095-19.983l-40.374,26.888c-1.957,1.304-4.317,1.759-6.662,1.313 c-2.31-0.468-4.319-1.793-5.629-3.759c-1.31-1.968-1.784-4.319-1.317-6.629c0.457-2.31,1.789-4.304,3.754-5.612l52.973-35.32 c3.233-2.166,7.567-1.922,10.532,0.569l52.975,44.139C494.917,336.189,495.426,341.769,492.305,345.517z"
                  />
                </g>
              </g>
            </motion.svg>
       
          </div>
          <div className="nav-menu">
            <ul>
              <li></li>
              <Link to="/Gallery">گالری تصاویر</Link>
              <li>
                <Link to="/diary">خاطرات دفاع مقدس</Link>
              </li>
              <li>
                <Link to="/shohada">شهدا</Link>
              </li>
            </ul>
          </div>
        </nav> */}
        <s style={{    backgroundColor: 'rgb(5 129 129)',
    opacity: 0.5,
    width: '100vw',
    height: '100vh',
    position: 'absolute',}}>

        </s>
        {/* <div className="header-navbar">
          <div></div>

          <div></div>
          <div><a href="/"></a></div>
          <div><a href="/shohada">شهدای امروز</a></div>
          <div><a href="/diary">خاطرات پیشکسوتان</a></div>
          <div>ششش</div>
          <div></div>
          <div></div>
        </div> */}

        <div className="header-content">
          <div className="header-image-iran"></div>
          <div id="content">
            <h1 style={{ fontFamily: "diba", color: "rgb(52 255 255)" }}>
              ما برای شما میجنگیم
            </h1>
            <motion.button
              initial={{
                x: "100vw",

                borderRadius: 12,
                backgroundColor: "#ff7b00",
                color:'white',
                boxShadow: "5px 5px 0 rgba(20, 20, 120, 0.2)",
              }}
              transition={{
                delay: 1.4,
                duration: 0.3,
                damping: 40,
                type: "spring",
              }}
              animate={{
                padding: "12px 32px",
                fontSize: 12,
                x: 0,
              }}
              
            >
              گالری تصاویر
            </motion.button>
          </div>
        </div>
      </div>
      <div style={{ height: "120px", backgroundColor: "rgb(1, 32, 44)" }}></div>
      <div
        className="header-search-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "60vh",
          backgroundImage: `url(${searchHeaderImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="header-content-wrapper">
          <div className="search-input-container">
            <div className="header-content-icon-wrapper">
              <IconButton onClick={searchClkickHandler}>
                <SearchIcon color="black" />
              </IconButton>
            </div>
            <input
              onChange={searchInputHandler}
              type="text"
              value={shahidName}
              placeholder="نام خانوادگی  شهید جستجو کنید"
              style={{ backgroundColor: "inherit", border: 0, color: "black" }}
            />
            {searchList.length > 0 ? (
              <ShahidUlList shahid={searchList} />
            ) : null}
            {/* {searchList.length>0? <>
            <ul >
              {searchList.map((item)=>{
                <li>{item.name}  {item.family}</li>
              })

              }
            </ul>
            </>
            :null 
            }
            */}
          </div>
          <hr />
        </div>
      </div>
    </>
  );

};

