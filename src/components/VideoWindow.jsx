import React, { useEffect, useRef } from "react";
import "./VideoWindow.css";

const VideoWindow = ({ video1 }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (video) {
        const windowHeight = window.innerHeight;
        const videoHeight = video.offsetHeight;
        const videoOffsetTop = video.offsetTop;
        const scrollTop = window.pageYOffset;
        const scrollPercentage =
          (scrollTop - videoOffsetTop) / (videoHeight - windowHeight);
        const translateY = Math.max(
          0,
          Math.min(scrollPercentage * 100, videoHeight)
        ); // Aumenta il valore per un effetto parallasse più pronunciato
        video.style.transform = `translate3d(0, ${translateY}px, 100)`;
      }
    };

    const supportsPassive = () => {
      let passiveSupported = false;
      try {
        const options = {
          get passive() {
            passiveSupported = true;
            return false;
          },
        };
        window.addEventListener("test", null, options);
        window.removeEventListener("test", null, options);
      } catch (err) {
        passiveSupported = false;
      }
      return passiveSupported;
    };

    const addEvent = (name, handler) => {
      const options = supportsPassive() ? { passive: true } : false;
      window.addEventListener(name, handler, options);
    };

    const removeEvent = (name, handler) => {
      window.removeEventListener(name, handler);
    };

    addEvent("scroll", handleScroll);

    return () => removeEvent("scroll", handleScroll);
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="video-element"
      >
        <source src={video1} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoWindow;
