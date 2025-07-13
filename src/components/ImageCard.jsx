import React from "react";
import "../styles/ImageCard.css";
const ImageCard = ({ text, images }) => {
  return (
    <div className="mcq-screen img-screen">
      <h2>{text}</h2>
      <div className="image-card">
        {images.map((img, index) => {
          return <img key={index} className="image" src={img} />;
        })}
      </div>
    </div>
  );
};

export default ImageCard;
