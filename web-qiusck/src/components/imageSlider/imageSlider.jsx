import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from '../../assets/images/nopadid/نماز جماعت بر عرشه ناوشکن دنا - پهنه اقیانوس اطلس .JPG'
import image2 from '../../assets/images/nopadid/رزمایش بزرک ذوالفقار ارتش - شمال اقیانوس هند.jpg'
import image3 from '../../assets/images/nopadid/مسابقات بین المللی غواصی عمق - نیروهای دریایی جهان.jpg'
import image4 from '../../assets/images/nopadid/fourth.jpg'
import image5 from '../../assets/images/nopadid/takaver.JPG'
import image6 from '../../assets/images/nopadid/sixth.JPG'
import image7 from '../../assets/images/nopadid/seventh.JPG'
import image8 from '../../assets/images/nopadid/motor.JPG'
import image9 from '../../assets/images/nopadid/ninth.JPG'
import "./style.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
    image1  },
  {
    url:
    image2  },
  //Second image url
  {
    url:
    image3  },
  //Third image url
  {
    url:
      image4
  },

  //Fourth image url

  {
    url:
      image5
  },  {
    url:
    image6  },
  {
    url:
    image7  },
  //Second image url
  {
    url:
    image8  },
  //Third image url
  {
    url:
      image9
  },


];
const ImageSlider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default ImageSlider;