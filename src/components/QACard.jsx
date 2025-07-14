import React, { useState } from "react";
import "../styles/QACard.css";

const QACard = ({ index, question, solution, image }) => {
  const [text, setText] = useState("");
  const [correct, setCorrect] = useState(null);
  const [label, setLabel] = useState("Submit");
  const handleSubmit = (answer) => {
    if (answer === solution) {
      setCorrect(true);
      setLabel("Correct");
    } else {
      setCorrect(false);
      setLabel("Wrong");
    }
    setSelected(index);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [selected, setSelected] = useState(null);

  return (
    <div className="mcq-screen">
      <div className="mcq-card qna-card">
        {image ? (
          <img src={image} />
        ) : (
          <h2 className="qna-question">{question}</h2>
        )}
        <div className="question-container">
          <input
            className="question-input"
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Type your answer"
          />
          <button
            key={index}
            className={`submit-btn ${
              selected === index ? (correct ? "correct" : "wrong") : ""
            }`}
            onClick={() => handleSubmit(text)}
          >
            {label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QACard;
