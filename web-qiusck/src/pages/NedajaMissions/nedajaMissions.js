import {useRef} from 'react'
import {image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
} from "../../helper/imagesList";
import HTMLFlipBook from "react-pageflip";
const NedajaMissions=()=>{
    const book = useRef();
    book.loadFromImages=[image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32,
        image33,]
    return (
        <>
         <HTMLFlipBook  ref={book} showCover={true} orientation="horizontal" pageBackground="red"  flippingTime={1200} width={700} height={'600'}>
        <div style={{overflow:'hidden'}} className="demoPage"   >
            <div style={{backgroundImage:`url(${image26})`}}>

            </div>
            <img src={image26} width={700} height={600} alt="" />
            dasdasdasdasdsadasd
        </div>
        <div className="demoPage">Page 2</div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
        <div className="demoPage">Page 5</div>
        <div className="demoPage">Page 6</div>
        <div className="demoPage">Page 7</div>
        <div className="demoPage">Page 8</div>
        <div className="demoPage">Page 9</div>
        <div className="demoPage">Page 10</div>
      </HTMLFlipBook>{" "}
    </>

    )
}
export default NedajaMissions