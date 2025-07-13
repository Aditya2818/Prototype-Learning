import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import "../styles/CardFlip.css";
import { data } from "../data/flipData";

const CardFlip = () => {
  const [indexFlipped, setIndexFlipped] = useState([]);
  const handleClick = (index) => {
    if (indexFlipped.includes(index)) {
      const newFlipped = indexFlipped.filter((i) => i !== index);
      setIndexFlipped(newFlipped);
    } else {
      setIndexFlipped([...indexFlipped, index]);
    }
  };
  return (
    <div className="mcq-screen card-screen">
      <h2 className="mcq-title">Let's revise! Flip the card to know more</h2>
      <div className="flip-cards">
        {data.map((flip, index) => {
          return (
            <ReactCardFlip
              isFlipped={indexFlipped.includes(index)}
              flipDirection="vertical"
              key={index}
            >
              <div className="card front" onClick={() => handleClick(index)}>
                <p>{flip.frontText}</p>
              </div>

              <div className="card back" onClick={() => handleClick(index)}>
                <p>{flip.backText}</p>
              </div>
            </ReactCardFlip>
          );
        })}
      </div>
    </div>
  );
};

export default CardFlip;
