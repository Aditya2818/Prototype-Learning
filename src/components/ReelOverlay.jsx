import React from 'react'
import '../styles/ReelOverlay.css';

const ReelOverlay = ({reel}) => {
  return (
    <div className="reel-caption">
        <p className="caption-text">{reel.caption}</p>
    </div>
  )
}

export default ReelOverlay