import React, { forwardRef } from "react";
import { Play, Volume2, VolumeX } from "lucide-react"; // Added volume icons
import "../styles/ReelPlayer.css";

const ReelPlayer = forwardRef(({
  reel,
  isActive,
  isPlaying,
  isMuted,
  onTogglePlayPause,
  onToggleMute,
}, ref) => {
  return (
    <div className="reel-player">
      <video
        ref={ref}
        className="reel-video"
        src={reel.video}
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          background: "black",
        }}
      />
      <div className="video-overlay" />

      {isActive && (
        <>
          <div
            className="play-pause-overlay"
            onClick={onTogglePlayPause}
            style={{ cursor: "pointer" }}
          >
            {!isPlaying && (
              <button className="play-button">
                <Play className="play-icon" />
              </button>
            )}
          </div>
          
          <button 
            onClick={onToggleMute}
            className="mute-button"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </>
      )}
    </div>
  );
});

export default ReelPlayer;