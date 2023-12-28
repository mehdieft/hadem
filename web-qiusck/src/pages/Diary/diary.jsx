import "./style.css";
import SingleDiaryComponent from  '../../components/SingleDiary/singleDiaryComponent';
import cityImage from "../../assets/images/City-1-1310x500-e1565952871524-1400x499.png";
import diaryImage from '../../assets/images/diary/samadi.jpg'
import samadi from '../../assets/Video/houshangSamadi.mp4'
import mahbubiVideo from '../../assets/Video/nakhoda-mahboobi.mp4'
import khoram1 from '../../assets/images/khoram1.jpg';
import khoram2 from '../../assets/images/khoram2.jpg';
import mahbubi from '../../assets/images/diary/mahboobi.gif';
import sayari from '../../assets/images/diary/sayari.jpg';
import sayariVideo from '../../assets/Video/amir-sayari.mp4';
import VideoHeader from "../../layouts/VideoHeader/videoHeader";



const Diary = () => {
  return (
    <>
    {/* <VideoHeader/> */}
      <div className="diary-main">
      <SingleDiaryComponent backgroundImage={khoram1}  titleImage={diaryImage} degree="ناخدا" name="هوشنگ صمدی"  diary="خاطره نجات سرباز رایان"  quete="زمانی که ناقوس مرگ به صدا در آمد جایی برای فرار نیست" videoItem={samadi}  />

      <SingleDiaryComponent backgroundImage={khoram2}  titleImage={mahbubi} degree="ناخدا" name="سلیمان محبوبی"  diary="گردان مستقر در خرمشهر"  quete="لحظه به لحظه از تعداد باقی مونده ها کم میشد و این بدان معنا بود که باقی مانده ها باید دوبرابر مقاومت کند" videoItem={mahbubiVideo}  />

        <SingleDiaryComponent backgroundImage={cityImage}  titleImage={sayari} degree="دریادار اول" name="امیر سیاری"  diary="خاطره نجات سرباز رایان"  quete="زمانی که ناقوس مرگ به صدا در آمد جایی برای فرار نیست" videoItem={sayariVideo}   />
        
       

        
      </div>
    </>
  );
};
export default Diary;
