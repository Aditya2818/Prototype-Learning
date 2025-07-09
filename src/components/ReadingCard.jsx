import React from "react";
import "../styles/ReadingCard.css";

export default function ReadingCard({ title, content }) {
  return (
    <div className="screen">
      <div className="reading-card">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
