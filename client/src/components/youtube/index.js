// import React, { useRef, useState, useEffect } from "react";

// const index = ({ videoId, title }) => {

//     const [isIntersecting, setIntersecting] = useState(false);
//     const iframeRef = useRef();
  
//     useEffect(() => {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           if (entries[0].isIntersecting) {
//             setIntersecting(true);
//             observer.disconnect();
//           }
//         },
//         { threshold: 0.5 }
//       );
  
//       observer.observe(iframeRef.current);
//       return () => observer.disconnect();
//     }, []);

//   return (
//       <>
//       <div className="turiya_video__box">
//       <div className="turiya_img__box youtube_feedback">
//         <i className="bx bx-play" />
//         <div ref={iframeRef}>
//       {isIntersecting ? (
//         <iframe
//           width="560"
//           height="315"
//           loading="lazy"
//           src={`https://www.youtube.com/embed/${videoId}`}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           `allowFullScreen></iframe>
//       ) : (
//         <img
//           src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
//           alt="Video thumbnail"
//           width="560"
//           loading="lazy"
//           height="315"
//           style={{ cursor: "pointer" }}
//           onClick={() => setIntersecting(true)}
//         />
//       )}
//     </div>
//       </div>
//       <h6>{title}</h6>
//       <div className="turiya_video__box-yt">
//         <div className="turiya--yt">
//           <div className="turiya--yt-cancel">
//             <i className="bx bx-x" />
//           </div>
//           {isIntersecting ? (
//         <iframe
//           width="560"
//           height="315"
//           loading="lazy"
//           src={`https://www.youtube.com/embed/${videoId}`}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           `allowFullScreen></iframe>
//       ) : (
//         <img
//           src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
//           alt="Video thumbnail"
//           width="560"
//           loading="lazy"
//           height="315"
//           style={{ cursor: "pointer" }}
//           onClick={() => setIntersecting(true)}
//         />
//       )}
//           </div>
    
//       </div>
//     </div>
      
      
//       </>
//   )
// }

// export default index