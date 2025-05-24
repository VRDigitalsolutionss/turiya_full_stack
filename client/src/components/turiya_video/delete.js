



// import React, { useRef, useState, useEffect } from "react";

// function LazyYouTube({ videoId, feedbackContent, feedbackType, status }) {
//   const [isIntersecting, setIntersecting] = useState(false);
//   const [isVideoLoaded, setVideoLoaded] = useState(false); // Track video load state
//   const [showOverlayText, setShowOverlayText] = useState(false); // Manage overlay text visibility
//   const [cleanVideoId, setCleanVideoId] = useState("");
//   const iframeRef = useRef();

//   const extractVideoId = (url) => {
//     // Match the pattern for YouTube embed links
//     const regex = /(?:youtube\.com\/(?:embed|v)\/|youtu\.be\/)([^?&\s]+)/;
//     const match = url.match(regex);
//     return match ? match[1] : null;
//   };

//   useEffect(() => {
//     const videoIde = extractVideoId(videoId);
//     setCleanVideoId(videoIde);
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

//   useEffect(() => {
//     if (isVideoLoaded) {
//       setShowOverlayText(true);
//       const timer = setTimeout(() => {
//         setShowOverlayText(false);
//       }, 3000); // Hide text after 3 seconds

//       return () => clearTimeout(timer);
//     }
//   }, [isVideoLoaded]);

//   return (
//     <div ref={iframeRef} style={{ position: "relative", width: "560px", height: "315px" }}>
//       {isIntersecting ? (
//         <>
//           {/* Show thumbnail until the video iframe is fully loaded */}
//           {!isVideoLoaded && (
//             <img
//               src={`https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`}
//               alt="Video thumbnail"
//               width="560"
//               height="315"
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
//           {showOverlayText && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 backgroundColor: "rgba(255, 0, 0, 0.8)", // Red background with some transparency
//                 color: "white",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 zIndex: 2,
//               }}
//             >
//               Custom Overlay Text
//             </div>
//           )}
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
//   );
// }

// export default LazyYouTube;

// ============================================================================================


// import React, { useRef, useState, useEffect } from "react";

// function LazyYouTube({ videoId, feedbackContent, feedbackType, status }) {
//   const [isIntersecting, setIntersecting] = useState(false);
//   const [isVideoLoaded, setVideoLoaded] = useState(false); // Track video load state
//   const [showOverlayText, setShowOverlayText] = useState(false); // Manage overlay text visibility
//   const [cleanVideoId, setCleanVideoId] = useState("");
//   const iframeRef = useRef();

//   const extractVideoId = (url) => {
//     if (!url) return null; // Handle undefined or null videoId
//     const regex = /(?:youtube\.com\/(?:embed|v)\/|youtu\.be\/)([^?&\s]+)/;
//     const match = url.match(regex);
//     return match ? match[1] : null;
//   };

//   useEffect(() => {
//     if (videoId) {
//       const videoIde = extractVideoId(videoId);
//       setCleanVideoId(videoIde || videoId); // Use the extracted ID or fallback to original videoId
//     }
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

//   useEffect(() => {
//     if (isVideoLoaded) {
//       setShowOverlayText(true);
//       const timer = setTimeout(() => {
//         setShowOverlayText(false);
//       }, 3000); // Hide text after 3 seconds

//       return () => clearTimeout(timer);
//     }
//   }, [isVideoLoaded]);

//   return (
//     <div ref={iframeRef} style={{ position: "relative", width: "560px", height: "315px" }}>
//       {isIntersecting ? (
//         <>
//           {!isVideoLoaded && (
//             <img
//               src={`https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`}
//               alt="Video thumbnail"
//               width="560"
//               height="315"
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
//           {showOverlayText && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 backgroundColor: "rgba(255, 0, 0, 0.8)", // Red background with some transparency
//                 color: "white",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 zIndex: 2,
//               }}
//             >
//               Custom Overlay Text
//             </div>
//           )}
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
//   );
// }

// export default LazyYouTube;
