import { useState } from "react";
import { CarouselItemComponent } from "./carouselItem";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Button from "@mui/material/Button";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const CarouselComponent = ({ data, showNavigateButtons }) => {
  data = [
    {
      title: "Baseball",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      icon: require("./../../assets/icon/example1.svg"),
    },
    {
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
      icon: require("./../../assets/icon/example2.svg"),
    },
    {
      title: "Weights",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: require("./../../assets/icon/example3.svg"),
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
        className="inner"
      >
        {data.map((item) => {
          return <CarouselItemComponent key={Math.random()*100} item={item} width={"100%"} />;
        })}
      </div>
    
    
      <div className="carousel-buttons" >
        <Button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          startIcon={<NavigateBeforeIcon />}
        ></Button>
        <div className="indicators">
          {data.map((item, index) => {
            return (
              <Button
                className="indicator-button"
                startIcon={
                  index == activeIndex ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <PanoramaFishEyeIcon />
                  )
                }
                onClick={() => {
                  updateIndex(index);
                }}
              ></Button>
            );
          })}
        </div>
        <Button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          startIcon={<NavigateNextIcon />}
        ></Button>
        
      </div>
    </div>
  );
};
