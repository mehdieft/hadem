import "./style.css";
import exampleVideo from '../../assets/Video/navyHeader.mp4';
const VideoHeader = () => {
  return <>
     
     
     <div id="videoDiv"> 
<video id="video1" preload="" autoplay="" muted="" playsinline="" loop="">
<source src={exampleVideo} type="video/mp4"/>
</video> 
<div id="videoMessage" class="styling">
<h1>The Early Bird...</h1>
<h2>...gets the food.</h2>
<h3>Don't be late!</h3>
<p class="videoClick">
<a href="https://www.imi21.com/background-video-full-screen.php">Click here and be impressed</a>
</p> 
</div>
</div>
  
  </>;
};
export default VideoHeader;
