import "./style.css";
import SingleDiaryComponent from  '../../components/SingleDiary/singleDiaryComponent';
import cityImage from "../../assets/images/City-1-1310x500-e1565952871524-1400x499.png";
import diaryImage from '../../assets/images/diary/samadi.jpg'
import samadi from '../../assets/Video/houshangSamadi.mp4'
import khoram1 from '../../assets/images/khoram1.jpg';
import khoram2 from '../../assets/images/khoram2.jpg'



const Diary = () => {
  return (
    <>
      <div className="diary-main">
      <SingleDiaryComponent backgroundImage={khoram1}  titleImage={diaryImage} degree="ناخدا" name="هوشنگ صمدی"  diary="خاطره نجات سرباز رایان"  quete="زمانی که ناقوس مرگ به صدا در آمد جایی برای فرار نیست" videoItem={samadi}  />

      <SingleDiaryComponent backgroundImage={khoram2}  titleImage={diaryImage} degree="ناخدا" name="هوشنگ صمدی"  diary="خاطره نجات سرباز رایان"  quete="زمانی که ناقوس مرگ به صدا در آمد جایی برای فرار نیست"   />

        <SingleDiaryComponent backgroundImage={cityImage}  titleImage={diaryImage} degree="ناخدا" name="هوشنگ صمدی"  diary="خاطره نجات سرباز رایان"  quete="زمانی که ناقوس مرگ به صدا در آمد جایی برای فرار نیست"   />
        
       

        
      </div>
    </>
  );
};
export default Diary;
