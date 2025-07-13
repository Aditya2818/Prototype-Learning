import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "../styles/Draw.css";

const Draw = () => {
  const firstCanvas = useRef(null);
  const clear = (e) => {
    e.preventDefault();
    firstCanvas.current.clear();
  };
  const undo = (e) => {
    e.preventDefault();
    firstCanvas.current.undo();
  };
  return (
    <div className="mcq-screen canvas-screen">
      <h2>Canvas</h2>
      <div className="canvas">
        <div className="btns">
          <button onClick={clear}>Clear</button>
          <button onClick={undo}>Undo</button>
        </div>
        <CanvasDraw brushRadius={1} ref={firstCanvas} />
      </div>
    </div>
  );
};

export default Draw;
