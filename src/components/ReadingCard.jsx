import React from "react";
import "../styles/ReadingCard.css";

export default function ReadingCard({ title, content, image }) {
  return (
    <div className="screen">
      <h2>{title}</h2>
      <div className="content">
        {image ? <img src={image} /> : ""}
        <p>{content}</p>
      </div>
    </div>
  );
}
