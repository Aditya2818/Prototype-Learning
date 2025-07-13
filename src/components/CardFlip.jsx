import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import "../styles/CardFlip.css"

const CardFlip = ({ frontText,backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped(!isFlipped);
  return (
    <div className="mcq-screen">
      <div className="mcq-card ">
        <h2 className="mcq-question">Let's revise! Flip the card to know more</h2>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className="card front" onClick={handleClick}>
            <p>{frontText}</p>
          </div>

          <div className="card back" onClick={handleClick}>
            <p>{backText}</p>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default CardFlip;
