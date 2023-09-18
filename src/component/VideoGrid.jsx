import "./VideoGrid.css";

const VideoGrid = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const playVideo = (index) => {
    setActiveVideo(index);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <div className="video-box" key={index}>
          <video className="video-player" src={video.src} controls></video>
          {activeVideo === index && (
            <div className="overlay" onClick={closeVideo}>
              <video
                className="fullscreen-video"
                src={video.src}
                autoPlay
                controls
                muted // Aggiungi l'attributo muted qui
              />
            </div>
          )}
          {/* <button className="play-button" onClick={() => playVideo(index)}>
            Play
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
