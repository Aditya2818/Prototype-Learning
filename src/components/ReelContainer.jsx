import React, { useState, useEffect, useRef } from "react";
import "../styles/ReelContainer.css";
import { reelsData } from "../data/reelsData";
import ReelPlayer from "./ReelPlayer.jsx";
import ReelOverlay from "./ReelOverlay";
import ReadingCard from "./ReadingCard.jsx";

const ReelContainer = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef(null);
  const videoRefs = useRef([]);

  // Initialize videoRefs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, reelsData.length);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const itemHeight = container.clientHeight;
      const newCurrentReel = Math.round(scrollTop / itemHeight);

      if (
        newCurrentReel !== currentReel &&
        newCurrentReel >= 0 &&
        newCurrentReel < reelsData.length
      ) {
        // Pause previous video
        if (videoRefs.current[currentReel]) {
          videoRefs.current[currentReel].pause();
        }

        // Update current reel and play new video
        setCurrentReel(newCurrentReel);
        setIsPlaying(true);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [currentReel]);

  useEffect(() => {
    if (videoRefs.current[currentReel]) {
      const playPromise = videoRefs.current[currentReel].play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Auto-play prevented:", error);
          // Fallback to manual play
          setIsPlaying(false);
        });
      }
    }
  }, [currentReel]);

  const togglePlayPause = () => {
    if (!videoRefs.current[currentReel]) return;

    if (isPlaying) {
      videoRefs.current[currentReel].pause();
    } else {
      videoRefs.current[currentReel]
        .play()
        .catch((e) => console.log("Manual play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (videoRefs.current[currentReel]) {
      videoRefs.current[currentReel].muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="reels-app">
      <div
        className="reels-container"
        ref={containerRef}
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        {reelsData.map((reel, index) => (
          <div
            key={reel.id}
            style={{
              height: "100vh",
              scrollSnapAlign: "start",
              position: "relative",
            }}
          >
            {reel.flag === "video" ? (
              <>
                <ReelPlayer
                  reel={reel}
                  isActive={index === currentReel}
                  isPlaying={isPlaying && index === currentReel}
                  onTogglePlayPause={togglePlayPause}
                  ref={(el) => (videoRefs.current[index] = el)}
                  isMuted={isMuted}
                  onToggleMute={toggleMute}
                />
                <ReelOverlay reel={reel} />
              </>
            ) : (
              <ReadingCard
                title="Welcome to Reading Mode"
                content={reel.caption}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelContainer;
