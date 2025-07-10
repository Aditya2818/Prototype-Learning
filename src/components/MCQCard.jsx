import React, { useState } from "react";
import "../styles/MCQCard.css";

export default function MCQCard({text,options,correctIndex}) {
  const [selected, setSelected] = useState(null);


  const handleOptionClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="mcq-screen">
      <div className="mcq-card">
        <h2 className="mcq-question">{text}</h2>
        <div className="mcq-options">
          {options.map((option, index) => (
            <button
              key={index}
              className={`mcq-option ${
                selected === index
                  ? index === correctIndex
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              onClick={() => handleOptionClick(index)}
              disabled={selected !== null}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
