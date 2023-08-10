import "./style.css";
export const CarouselItemComponent = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{  }}>
      <div></div>
      <img className="carousel-img" src={item.icon.default} />
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};
