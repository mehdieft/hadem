
import './App.css';
import SideBar from './components/sideBar/sideBar';
import { AnimatedRoutes } from './AnimatedRoute';
import {Footer} from './layouts/Footer/footer';
import { useSearch } from "./context/searchDialogProvider";




function App() {
  const {openSearchDialogMethod}=useSearch()
  

  return (
    <div className="App">
       <div className="header-navbar">
          <div></div>

          <div></div>
          <div><a href="/"></a></div>
          <div><a href="/shohada">شهدای امروز</a></div>
          <div><a href="/diary">خاطرات پیشکسوتان</a></div>
          <div onClick={openSearchDialogMethod}><a>جستجو</a></div>
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
