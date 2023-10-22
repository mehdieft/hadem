import "./style.css";
import cityImage from "../../assets/images/City-1-1310x500-e1565952871524-1400x499.png";
import diaryImage from '../../assets/images/diary/samadi.jpg'
const Diary = () => {
  return (
    <>
      <div className="diary-main">
        <div className="diar-image-container">
          <s></s>
          <div
            className="diary-image-inner"
            style={{ backgroundImage: `url(${cityImage})` }}
          ></div>
          <div className="image-content-container">
            <div className="video-content" >
                <img src={diaryImage} height={343} alt="" />
            </div>
            <div className="image-content-text">
              <div>
                <span style={{fontSize:40,fontFamily:'diba',color:'white'}}>سرهنگ صمدی</span>
              </div>
              <div>
                <span id="white-text" style={{fontSize:40,fontFamily:'diba',}}>خاطره تلخه</span>
              </div>
              <blockquote>
                <svg
                  className="icon-quote"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 16"
                >
                  <g>
                    <g>
                      <path
                        fill="#fff"
                        d="M15.836 7.506c0-2.393.904-3.841 2.71-4.346V.45c-4.817.423-7.226 3.621-7.226 9.595v5.468h7.226V8.287h-2.71zm-10.84 0c0-2.393.904-3.841 2.71-4.346V.45C2.89.873.48 4.071.48 10.045v5.468h7.227V8.287h-2.71z"
                      ></path>
                    </g>
                  </g>
                </svg>{" "}
                <span style={{color:'white'}}>

                There is a natural question on whether AI will make us
                redundant. The answer is no."{" "}
                </span>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="diar-image-container">
          <s></s>
          <div
            className="diary-image-inner"
            style={{ backgroundImage: `url(${cityImage})` }}
          ></div>
          <div className="image-content-container">
            <div className="video-content" >
                <img src={diaryImage} height={343} alt="" />
            </div>
            <div className="image-content-text">
              <div>
                <span style={{fontSize:40,fontFamily:'diba',color:'white'}}>سرهنگ صمدی</span>
              </div>
              <div>
                <span id="white-text" style={{fontSize:40,fontFamily:'diba',}}>خاطره تلخه</span>
              </div>
              <blockquote>
                <svg
                  className="icon-quote"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 16"
                >
                  <g>
                    <g>
                      <path
                        fill="#fff"
                        d="M15.836 7.506c0-2.393.904-3.841 2.71-4.346V.45c-4.817.423-7.226 3.621-7.226 9.595v5.468h7.226V8.287h-2.71zm-10.84 0c0-2.393.904-3.841 2.71-4.346V.45C2.89.873.48 4.071.48 10.045v5.468h7.227V8.287h-2.71z"
                      ></path>
                    </g>
                  </g>
                </svg>{" "}
                <span style={{color:'white'}}>

                There is a natural question on whether AI will make us
                redundant. The answer is no."{" "}
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Diary;
