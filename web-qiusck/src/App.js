// import logo from './logo.svg';
import './App.css';
import SideBar from './components/sideBar/sideBar';
import { AnimatedRoutes } from './AnimatedRoute';
import {Footer} from './layouts/Footer/footer'



function App() {
  

  return (
    <div className="App">
      <AnimatedRoutes/>
      
      <div id="fixed-navbar">
      <SideBar id="fixed-navbar" />
        
      </div>
      <Footer/>

    </div>
   
  );
}

export default App;
