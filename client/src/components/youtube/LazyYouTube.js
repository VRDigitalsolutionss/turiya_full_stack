import React, { useRef, useState, useEffect } from "react";

function LazyYouTube({ videoId, feedbackContent, feedbackType, status }) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [isVideoLoaded, setVideoLoaded] = useState(false); // Track video load state
  const [cleanVideoId, setCleanVideoId] = useState("");
  const iframeRef = useRef();

  const extractVideoId = (url) => {
    // Match the pattern for YouTube embed links
    const regex = /(?:youtube\.com\/(?:embed|v)\/|youtu\.be\/)([^?&\s]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    // const cleanId = videoId.includes('?') ? videoId.split('?')[0] : videoId;
    // setCleanVideoId(cleanId);

    const videoIde = extractVideoId(videoId);
    setCleanVideoId(videoIde);
  }, [videoId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(iframeRef.current);
    return () => observer.disconnect();
  }, []);

  const [videoModal, setVideoModal] = useState(false);

  const openModal = () => {
    setVideoModal(true);
  };

  return (
    <>
      {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
      {/* {videoModal && (
        <div className="card">
          <div className="card-body">
            <h3>card title</h3>
          </div>
        </div>
      )} */}

      <div ref={iframeRef} onClick={openModal} className="video_wrapper">
        {isIntersecting ? (
          <>
            {/* Show thumbnail until the video iframe is fully loaded */}
            {!isVideoLoaded && (
              <img
                src={`https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`}
                alt="Video thumbnail"
                width="560"
                height="315"
                // style={{ position: "absolute", top: 0, left: 0, cursor: "pointer" }}
                onClick={() => setIntersecting(true)}
              />
            )}
            <iframe
              width="560"
              height="315"
              loading="lazy"
              src={videoId}
              allow=" clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setVideoLoaded(true)} // Hide thumbnail once video is loaded
              style={{ visibility: isVideoLoaded ? "visible" : "hidden" }} // Hide iframe until fully loaded
            ></iframe>
          </>
        ) : (
          <p>hello</p>
        )}
      </div>
    </>
  );
}

export default LazyYouTube;

// ==================================================================
