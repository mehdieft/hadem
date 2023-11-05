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

  const [searchList, setSearchList] = useState([]);
  const [shahidName, setShahidName] = useState("");
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
    console.log("ress----->", result);
    if (result.data !== null) {
      setSearchList(result.data.data);
      openNotification("hjajkshda", "success");
      console.log(searchList)
    } else {
      openNotification(result.error, "error");
      // openNotification("متن جایگزین نباید خالی باشد", "error");
    }
  };
  const searchClkickHandler = () => {
    if (shahidName == "") {
      openNotification(
        "لطفا نام و نام خانوادگی شهید معزز را وارد کنید",
        "error"
      );
    } else {
      fetchAndSetData(shahidName);
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
        <nav className="nav-container">
          <div className="logo-header">
            {/* <svg
              id="_1_copy_2"
              enable-background="new 0 0 256 256"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m235.0747 156.3018c-.1102-1.6532-1.6997-3.2393-3.9214-2.6533l-36.0776 11.7415c-1.5753.5124-2.4371 2.2048-1.9247 3.7801.2065.6349.6189 1.1827 1.1718 1.5568l10.8828 7.3652c-3.9349 3.9263-8.0972 7.6178-12.4656 11.0554-9.4971 7.1523-32.5225 17.9844-42.6729 13.1943-3.2979-1.5576-5.0083-4.8008-5.2295-9.915-.0093-.2158-3.0041-69.5889-3.0041-69.5889h39.0977c1.6569 0 3-1.3431 3-3v-17.1719c0-1.6569-1.3431-3-3-3h-40.0982l-.7646-17.7139c16.9045-5.9829 25.7582-24.5368 19.7753-41.4413s-24.5368-25.7582-41.4413-19.7753-25.7582 24.5368-19.7753 41.4413c3.2697 9.2383 10.537 16.5057 19.7753 19.7753l-.7646 17.7139h-40.0978c-1.6569 0-3 1.3431-3 3v17.1719c0 1.6569 1.3431 3 3 3h39.0977s-2.9952 69.3732-3.0046 69.5881c-.2212 5.1152-1.9316 8.3584-5.2295 9.916-10.1509 4.7881-33.1758-6.043-42.6724-13.1943-4.3687-3.4375-8.5314-7.1291-12.4663-11.0557l10.8828-7.3652c1.3721-.9282 1.732-2.7929.8039-4.1651-.3741-.553-.9219-.9653-1.5568-1.1718l-36.0774-11.7415c-1.5756-.5125-3.6924.4141-3.9214 2.6533l-2.5171 37.8574c-.1097 1.6532 1.1415 3.0824 2.7947 3.1921.6656.0442 1.327-.1348 1.8796-.5085l11.5474-7.8135c7.918 11.7529 34.5244 44.9277 80.5732 41.6309 1.2959.1416 8.27 1.165 8.27 6.791 0 1.6569 1.3431 3 3 3h.584c1.6569 0 3-1.3431 3-3 0-5.6357 7-6.6533 8.2676-6.791 2.1807.1572 4.3071.2324 6.4.2324 42.1133-.0029 66.6313-30.666 74.1743-41.8633l11.5479 7.8135c1.3724.9283 3.2374.5684 4.1658-.804.3738-.5526.5527-1.214.5085-1.8796zm-12.8818 26.04c-2.5054-1.5918-4.2145.8771-4.2383.916-4.62 7.53-30.0371 44.9238-76.9639 41.4-.7407.0297-6.9282.1547-11.7554 5.2314-3.0928-3.583-8.2353-5.0142-11.7554-5.2314-46.9185 3.5225-72.3442-33.8691-76.9639-41.4-.8633-1.5959-2.891-1.7578-4.2383-.916l-9.0054 6.0938 1.8545-27.8887 26.5771 8.6494-8.6634 5.8637c-1.5849.8227-1.6655 3.3775-.6294 4.3984 4.7456 5.7285 14.415 13.5068 15.71 14.4824 8.0386 6.0537 34.5459 20.5732 48.8437 13.8271 3.73-1.7617 8.2612-5.8076 8.6621-15.083.0093-.2168 3.1388-72.7178 3.1388-72.7178.151-2.3838-2.1645-3.2667-2.9971-3.1289h-39.2286v-11.1722h39.9717c1.6067-.0001 2.9281-1.2659 2.9971-2.8711l.9878-22.8867c.0606-1.4012-.8575-2.6575-2.2109-3.0254-14.1054-3.8384-22.4284-18.3847-18.5901-32.4901 3.8384-14.1054 18.3847-22.4284 32.4901-18.5901s22.4285 18.3847 18.5901 32.4901c-2.4637 9.0537-9.5364 16.1264-18.5901 18.5901-1.3534.3679-2.2715 1.6242-2.2109 3.0254l.9878 22.8867c.069 1.6052 1.3904 2.871 2.9971 2.8711h39.9717v11.1719h-39.23c-1.6569.0001-2.9999 1.3433-2.9999 3.0001 0 .0429 3.1327 72.6298 3.1416 72.8476.4009 9.2744 4.9321 13.32 8.6621 15.082 14.2969 6.7471 40.8052-7.7734 48.8442-13.8271 1.2949-.9756 10.9644-8.7539 15.71-14.4824 1.0569-1.276.8792-3.1672-.3968-4.224-.0747-.0618-8.8962-6.0377-8.8962-6.0377l26.5771-8.6494 1.8545 27.8887z" />
              <path d="m144.7729 51.3438c-.0003-8.5812-6.9569-15.5374-15.5381-15.5371s-15.5374 6.9569-15.5371 15.5381c.0003 8.581 6.9566 15.5371 15.5376 15.5371 8.5774-.0095 15.5283-6.9607 15.5376-15.5381zm-15.5376 9.5381c-5.2675 0-9.5376-4.2701-9.5376-9.5376s4.2701-9.5376 9.5376-9.5376c5.2673 0 9.5373 4.2698 9.5376 9.5371-.0056 5.2652-4.2723 9.5321-9.5376 9.5381z" />
            </svg> */}
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
            {/* <img src={nedaja} width={100} height={100} /> */}
          </div>
          <div className="nav-menu">
            <ul>
              <li></li>
              <Link href="">خانه</Link>
              <li>
                <Link href="">خانه</Link>
              </li>
              <li>
                <Link href="">خانه</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-content">
          <div className="header-image-iran"></div>
          <div id="content">
            <h1 style={{ fontFamily: "diba", color: "white" }}>
              ما برای شما میجنگیم
            </h1>
            <motion.button
              initial={{
                x: "100vw",

                borderRadius: 12,
                backgroundColor: "white",
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
              مشاهده کن
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
              placeholder="نام شهید جستجو کنید"
              style={{ backgroundColor: "inherit", border: 0, color: "black" }}
            />
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};
