

// import React, { useRef, useState, useEffect } from "react";

// function LazyYouTube({ videoId,feedbackContent,feedbackType,status }) {
//   const [isIntersecting, setIntersecting] = useState(false);
//   const [isVideoLoaded, setVideoLoaded] = useState(false); // Track video load state
//   const [cleanVideoId, setCleanVideoId] = useState('');
//   const iframeRef = useRef();


//   const extractVideoId = (url) => {
//     // Match the pattern for YouTube embed links
//     const regex = /(?:youtube\.com\/(?:embed|v)\/|youtu\.be\/)([^?&\s]+)/;
//     const match = url.match(regex);
//     return match ? match[1] : null;
//   };




//   useEffect(() => {
//     // const cleanId = videoId.includes('?') ? videoId.split('?')[0] : videoId;
//     // setCleanVideoId(cleanId);

//     const videoIde = extractVideoId(videoId);
//     setCleanVideoId(videoIde)
//   }, [videoId]);







//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIntersecting(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     observer.observe(iframeRef.current);
//     return () => observer.disconnect();
//   }, []);


//   const [videoModal, setVideoModal] = useState(false);
  

//   const handlevideoModal = () => {
//     setVideoModal(true);
// }


//   return (


//     <>
    
    
//     {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
//     <div class="modal modal-dialog modal-dialog-centered"aria-labelledby="exampleModalLabel" hidden="true" id="exampleModal">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
//       </div>
//       <button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">
        
        
//         open modal</button>

//       <div ref={iframeRef} className="video_wrapper">
//       {isIntersecting ? (
//         <>
//           {/* Show thumbnail until the video iframe is fully loaded */}
//           {!isVideoLoaded && (
//             <img
//               src={`https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`}
//               alt="Video thumbnail"
//               width="560"
//               height="315"
//               // style={{ position: "absolute", top: 0, left: 0, cursor: "pointer" }}
//               onClick={() => setIntersecting(true)}
//             />
//           )}
//           <iframe
//             width="560"
//             height="315"
//             loading="lazy"
//             src={videoId}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             onLoad={() => setVideoLoaded(true)} // Hide thumbnail once video is loaded
//             style={{ visibility: isVideoLoaded ? "visible" : "hidden" }} // Hide iframe until fully loaded
//           ></iframe>
//         </>
//       ) : (
//         <img
//           src={`https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`}
//           alt="Video thumbnail"
//           width="560"
//           height="315"
//           style={{ cursor: "pointer" }}
//           onClick={() => setIntersecting(true)}
//         />
//       )}
//     </div>

//     </>
    
//   );
// }

// export default LazyYouTube;



// ==================================================================

import React, { useRef, useState, useEffect } from "react";

function LazyYouTube({ videoId, feedbackContent, feedbackType, status }) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [isVideoLoaded, setVideoLoaded] = useState(false); // Track video load state
  const [cleanVideoId, setCleanVideoId] = useState('');
  const iframeRef = useRef();

  const extractVideoId = (url) => {
    // Match the pattern for YouTube embed links
    const regex = /(?:youtube\.com\/(?:embed|v)\/|youtu\.be\/)([^?&\s]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
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

  return (
    <>
      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="videoModalLabel">YouTube Video</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${cleanVideoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={iframeRef}
        className="video_wrapper"
        style={{ cursor: "pointer" }}
        onClick={() => {
          const modalElement = document.getElementById("videoModal");
          const bootstrapModal = new window.bootstrap.Modal(modalElement);
          bootstrapModal.show();
        }}
      >
        {isIntersecting ? (
          <>
            {!isVideoLoaded && (
              <img
                src={`https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`}
                alt="Video thumbnail"
                width="560"
                height="315"
              />
            )}
            <iframe
              width="560"
              height="315"
              loading="lazy"
              src={`https://www.youtube.com/embed/${cleanVideoId}?enablejsapi=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setVideoLoaded(true)}
              style={{ visibility: isVideoLoaded ? "visible" : "hidden" }}
            ></iframe>
          </>
        ) : (
          <img
            src={`https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`}
            alt="Video thumbnail"
            width="560"
            height="315"
          />
        )}
      </div>
    </>
  );
}

export default LazyYouTube;
