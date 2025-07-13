import React, { useRef } from "react";
import Draggable from "react-draggable";
import "../styles/DragText.css";

const DragText = ({ options }) => {
  // Create an array of refs
  const nodeRefs = useRef(options.map(() => React.createRef()));

  return (
    <div className="mcq-screen drag-screen">
      <h2>Drag and drop the options anywhere on screen!</h2>
      <div className="drag-div ">
        {options.map((option, index) => (
          <Draggable key={index} nodeRef={nodeRefs.current[index]}>
            <div ref={nodeRefs.current[index]} className="mcq-option">
              {option}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default DragText;
