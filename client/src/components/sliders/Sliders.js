import ImageSlider from "./ImageSlider";
import React from "react";
const Sliders = () => {
  const slides = [
    { url: "http://localhost:3000/truck1.png", title: "beach" },
    { url: "http://localhost:3000/truck2.png", title: "boat" },
    { url: "http://localhost:3000/truck3.png", title: "forest" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Sliders;