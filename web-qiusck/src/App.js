// import logo from './logo.svg';
import './App.css';
import SideBar from './components/sideBar/sideBar';
import { AnimatedRoutes } from './AnimatedRoute';



function App() {
  

  return (
    <div className="App">
      <AnimatedRoutes/>
      <SideBar id="fixed-navbar" />
      {/* <div id="fixed-navbar">
        flkkdsjflkdsfsdf
      </div> */}
    </div>
   
  );
}

export default App;
