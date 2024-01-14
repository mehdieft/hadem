
import './App.css';
import SideBar from './components/sideBar/sideBar';
import { AnimatedRoutes } from './AnimatedRoute';
import {Footer} from './layouts/Footer/footer';
import { useSearch } from "./context/searchDialogProvider";
import { useNavigate } from "react-router-dom";





function App() {
  const navigate = useNavigate();
  const {openSearchDialogMethod}=useSearch()
 const openSearchFuck=()=>{
  openSearchDialogMethod()
  navigate("/")
 } 
  

  return (
    <div className="App">
       <div className="header-navbar">
          <div></div>

          <div></div>
          <div><a href="/shohada">شهدای امروز</a></div>
          <div><a href="/diary">خاطرات پیشکسوتان</a></div>
          <div onClick={openSearchFuck}><a>جستجو</a></div>
          <div><a href="/">صفحه اصلی</a></div>
          <div></div>
          <div></div>
        </div>
      
      <AnimatedRoutes/>
      
      <div id="fixed-navbar">
      {/* <SideBar id="fixed-navbar" /> */}
        
      </div>
      <Footer/>

    </div>
   
  );
}

export default App;
