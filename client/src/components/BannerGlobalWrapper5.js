// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const BannerGlobalWrapper5 = () => {
//   // Define original video URLs
//   const originalVideo1 = "https://www.youtube.com/embed/izCAn3uvYLo?si=G3ONv3CWqpgPietY";
//   const originalVideo2 = "https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a";
//   const originalVideo3 = "https://www.youtube.com/embed/m09ZGlZXq54?si=Q6TsbqQ-qeKboBoo";
//   const originalVideo4 = "https://www.youtube.com/embed/Fixnb004sWk?si=o3XtHn4ZJ6nly4EN";
//   // const originalVideo5 = "https://www.youtube.com/embed/yT8hzUAffxE?si=2Q8KhIRiT5VESU-o";
//   const originalVideo5 = "https://www.youtube.com/embed/sEVO75-2msA";
//   const originalVideo6 = "https://www.youtube.com/embed/z6z4-bnDhws?si=_xadRPMnyrLNH4uc";
//   // Define videoId states for each modal
//   const [videoId1, setVideoId1] = useState(originalVideo1);
//   const [videoId2, setVideoId2] = useState(originalVideo2);
//   const [videoId3, setVideoId3] = useState(originalVideo3);
//   const [videoId4, setVideoId4] = useState(originalVideo4);
//   const [videoId5, setVideoId5] = useState(originalVideo5);
//   const [videoId6, setVideoId6] = useState(originalVideo6);

//   useEffect(() => {
//     // Function to handle resetting videoId for a specific modal
//     const attachModalEvent = (modalId, setVideoId, originalVideo) => {
//       const modal = document.getElementById(modalId);
//       if (modal) {
//         const handleModalClose = () => setVideoId(null);
//         modal.addEventListener("hidden.bs.modal", handleModalClose);

//         // Cleanup event listener on component unmount
//         return () => modal.removeEventListener("hidden.bs.modal", handleModalClose);
//       }
//     };

//     // Attach event listeners to modals
//     const cleanup1 = attachModalEvent("exampleModal", setVideoId1, originalVideo1);
//     const cleanup2 = attachModalEvent("exampleModal2", setVideoId2, originalVideo2);
//     const cleanup3 = attachModalEvent("exampleModal3", setVideoId3, originalVideo3);
//     const cleanup4 = attachModalEvent("exampleModal4", setVideoId4, originalVideo4);
//     const cleanup5 = attachModalEvent("exampleModal5", setVideoId5, originalVideo5);
//     const cleanup6 = attachModalEvent("exampleModalLabel6", setVideoId6, originalVideo6);

//     return () => {
//       if (cleanup1) cleanup1();
//       if (cleanup2) cleanup2();
//       if (cleanup3) cleanup3();
//       if (cleanup4) cleanup4();
//       if (cleanup5) cleanup5();
//       if (cleanup6) cleanup6();
//     };
//   }, []);

//   // Reset videoId when null
//   useEffect(() => {
//     if (!videoId1) setVideoId1(originalVideo1);
//     if (!videoId2) setVideoId2(originalVideo2);
//     if (!videoId3) setVideoId3(originalVideo3);
//     if (!videoId4) setVideoId4(originalVideo4);
//     if (!videoId5) setVideoId5(originalVideo5);
//     if (!videoId6) setVideoId6(originalVideo6);
//   }, [videoId1, videoId2, videoId3, videoId4, videoId5, videoId6]);

//   return (
//     <>
//       <section className="global_wrapper fifth_section">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4">
//               <div
//                 className="fifth_section__left aos-init aos-animate"
//                 data-aos="fade-up"
//                 data-aos-delay={100}>
//                 <h3>AUSBILDUNG AUF HÖCHSTEM NIVEAU</h3>
//                 <h1>Das sagen unsere Teilnehmer</h1>
//                 <p>
//                   Die Gründer von Turiya Yoga sind die Kursleiter unserer
//                   Yogalehrer Ausbildungen und werden in jedem Schritt zusammen
//                   mit anderen Experten für dich da sein. Bei uns verlierest du
//                   dich nicht in der Menge. Hier weißt du genau, wer während
//                   dieses transformativen Wegs wirklich für dich da sein wird.
//                 </p>
//               </div>
//             </div>
//             <div className="col-lg-4 col-sm-6">
//               <div
//                 className="fifth_section__bg aos-init aos-animate"
//                 data-aos="fade-up"
//                 data-aos-delay={200}>
//                 <div className="fifth_section__bg-img">
//                   <img
//                     src="https://api.turiyayoga.de/uploads/assets/new/yogamen.webp"
//                     className="img-fluid"
//                     alt="yogamen"
//                   />
//                 </div>
//                 <div className="fifth_section__bg-content">
//                   <p>
//                     {" "}
//                     "Manu’s Unterricht ist immer voller Liebe &amp; Energie für
//                     alle!"
//                   </p>
//                   <h6>Chantal Berot, Frankreich</h6>
//                   <div className="more--btn"  >
//                     <Link to="/kundenstimmen">MEHR</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-sm-6">
//               <div
//                 className="fifth_section__bg aos-init aos-animate"
//                 data-aos="fade-up"
//                 data-aos-delay={300}>
//                 <div className="fifth_section__bg-img">
//                   <img
//                     src="https://api.turiyayoga.de/uploads/assets/new/yogalady.webp"
//                     className="img-fluid"
//                     alt="yogalady"
//                   />
//                 </div>
//                 <div className="fifth_section__bg-content">
//                   <p>
//                     {" "}
//                     "Eine Erfahrung, die ich definitiv jedem empfehlen würde."
//                   </p>
//                   <h6>Jade Deanna Mc Sorley, UK</h6>
//                   <div
//                     className="mehr--btn"
//                     data-bs-toggle="modal"
//                     data-bs-target="#exampleModalLabel6">
//                     <button>
//                       <i className="bx bx-play" />
//                       VIDEO
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="youtube_video">
//             <div
//               className="modal fade"
//               id="exampleModal"
//               tabIndex={-1}
//               aria-labelledby="exampleModalLabel"
//               aria-hidden="true">
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <button
//                       type="button"
//                       className="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     />
//                   </div>
//                   <div className="modal-body">
//                     <iframe
//                       id="youtube-video"
//                       width={560}
//                       height={315}
//                       src={videoId1}
//                       title="YouTube video player"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       referrerPolicy="strict-origin-when-cross-origin"
//                       allowFullScreen
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="youtube_video">
//             <div
//               className="modal fade"
//               id="exampleModal2"
//               tabIndex={-1}
//               aria-labelledby="exampleModalLabel"
//               aria-hidden="true">
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <button
//                       type="button"
//                       className="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     />
//                   </div>
//                   <div className="modal-body">
//                     <iframe
//                       id="youtube-video2"
//                       width={560}
//                       height={315}
//                       src={videoId2}
//                       title="YouTube video player"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       referrerPolicy="strict-origin-when-cross-origin"
//                       allowFullScreen></iframe>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="youtube_video">
//             <div
//               className="modal fade"
//               id="exampleModal3"
//               tabIndex={-1}
//               aria-labelledby="exampleModalLabel3"
//               aria-hidden="true">
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <button
//                       type="button"
//                       className="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     />
//                   </div>
//                   <div className="modal-body">
//                     <iframe
//                       id="youtube-video3"
//                       width={560}
//                       height={315}
//                       src={videoId3}
//                       title="YouTube video player"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       referrerPolicy="strict-origin-when-cross-origin"
//                       allowFullScreen
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="youtube_video">
//             <div
//               className="modal fade"
//               id="exampleModal4"
//               tabIndex={-1}
//               aria-labelledby="exampleModalLabel4"
//               aria-hidden="true">
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <button
//                       type="button"
//                       className="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     />
//                   </div>
//                   <div className="modal-body">
//                     <iframe
//                       id="youtube-video4"
//                       width={560}
//                       height={315}
//                       src={videoId4}
//                       title="YouTube video player"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       referrerPolicy="strict-origin-when-cross-origin"
//                       allowFullScreen
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="youtube_video">
//             <div
//               className="modal fade"
//               id="exampleModal5"
//               tabIndex={-1}
//               aria-labelledby="exampleModalLabel5"
//               aria-hidden="true">
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <button
//                       type="button"
//                       className="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     />
//                   </div>
//                   <div className="modal-body">
//                     <iframe
//                       id="youtube-video5"
//                       width={560}
//                       height={315}
//                       src={videoId5}
//                       title="YouTube video player"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       referrerPolicy="strict-origin-when-cross-origin"
//                       allowFullScreen
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="youtube_video">
//             <div
//               className="modal fade"
//               id="exampleModalLabel6"
//               tabIndex={-1}
//               aria-labelledby="exampleModalLabel6"
//               aria-hidden="true">
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <button
//                       type="button"
//                       className="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     />
//                   </div>
//                   <div className="modal-body">
//                     <iframe
//                       id="youtube-video6"
//                       width={560}
//                       height={315}
//                       src={videoId6}
//                       title="YouTube video player"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       referrerPolicy="strict-origin-when-cross-origin"
//                       allowFullScreen
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BannerGlobalWrapper5;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../src/config";

const BannerGlobalWrapper5 = () => {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetchVideoTestimonials();
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const fetchVideoTestimonials = async () => {
    try {
      const response = await axios.get(BASE_URL + "/video_testimonials");
      const filteredData = response?.data?.data.filter(
        (item) => item.feedbackType === "Turiya Yogalehrer Ausbildung"
      );
      setVideos(filteredData.slice(0, 6)); // Take first 6 videos for the slider
      setLoading(false);
    } catch (error) {
      console.error("Error fetching video data", error);
      setLoading(false);
    }
  };

  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:embed|v)\/|youtu\.be\/)([^?&\s]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    const modal = document.getElementById("exampleModalTestimonials");
    if (modal) {
      const handleModalClose = () => setVideoId(null);
      modal.addEventListener("hidden.bs.modal", handleModalClose);
      return () =>
        modal.removeEventListener("hidden.bs.modal", handleModalClose);
    }
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (videos.length > 0) {
      const interval = setInterval(() => {
        const maxSlides = isMobile
          ? videos.length
          : Math.ceil(videos.length / 2);
        setCurrentSlide((prev) => (prev + 1) % maxSlides);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [videos, isMobile]);

  const nextSlide = () => {
    const maxSlides = isMobile ? videos.length : Math.ceil(videos.length / 2);
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const maxSlides = isMobile ? videos.length : Math.ceil(videos.length / 2);
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getSlideWidth = () => {
    return isMobile ? 100 : 50;
  };

  const getMaxSlides = () => {
    return isMobile ? videos.length : Math.ceil(videos.length / 2);
  };

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>Loading...</div>
    );

  return (
    <>
      <section className="global_wrapper fifth_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="fifth_section__left aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={100}
                style={{
                  marginBottom: window.innerWidth < 992 ? "30px" : "0",
                }}
              >
                <h3>AUSBILDUNG AUF HÖCHSTEM NIVEAU</h3>
                <h1>Das sagen unsere Teilnehmer</h1>
                <p>
                  Die Gründer von Turiya Yoga sind die Kursleiter unserer
                  Yogalehrer Ausbildungen und werden in jedem Schritt zusammen
                  mit anderen Experten für dich da sein. Bei uns verlierest du
                  dich nicht in der Menge. Hier weißt du genau, wer während
                  dieses transformativen Wegs wirklich für dich da sein wird.
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "8px",
                  minHeight: isMobile ? "auto" : "450px",
                  padding: isMobile ? "0 15px" : "0", // Added horizontal padding for mobile
                }}
              >
                <div
                  style={{
                    display: "flex",
                    transition: "transform 0.5s ease",
                    transform: `translateX(-${
                      currentSlide * getSlideWidth()
                    }%)`,
                    height: "100%",
                  }}
                >
                  {videos.map((video, index) => {
                    const videoIde = extractVideoId(video.youtubeLink);
                    return (
                      <div
                        key={index}
                        style={{
                          minWidth: isMobile ? "100%" : "50%",
                          padding: "0 8px",
                          flexShrink: 0,
                          height: "100%",
                        }}
                        data-aos="fade-up"
                        data-aos-delay={200 + index * 100}
                      >
                        <div
                          style={{
                            height: isMobile ? "auto" : "400px", // Fixed height for desktop videos
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: "8px",
                            overflow: "hidden",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            backgroundColor: "#fff",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              paddingBottom: isMobile ? "56.25%" : "0", // Only use aspect ratio on mobile
                              height: isMobile ? "0" : "320px", // Increased from 250px to 300px
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={`https://img.youtube.com/vi/${videoIde}/hqdefault.jpg`}
                              className="img-fluid"
                              alt={`Video testimonial ${index}`}
                              style={{
                                position: isMobile ? "absolute" : "static",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                cursor: "pointer",
                              }}
                              onClick={() => setVideoId(video.youtubeLink)}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalTestimonials"
                            >
                              <i
                                className="bx bx-play"
                                style={{
                                  fontSize: isMobile ? "40px" : "50px",
                                  color: "#fff",
                                  background: "rgba(0,0,0,0.7)",
                                  borderRadius: "50%",
                                  padding: isMobile ? "8px" : "12px",
                                  transition:
                                    "background-color 0.3s ease, opacity 0.3s ease",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: isMobile ? "56px" : "74px",
                                  height: isMobile ? "56px" : "74px",
                                }}
                                onMouseOver={(e) => {
                                  e.target.style.background = "rgba(0,0,0,0.9)";
                                  e.target.style.opacity = "0.9";
                                }}
                                onMouseOut={(e) => {
                                  e.target.style.background = "rgba(0,0,0,0.7)";
                                  e.target.style.opacity = "1";
                                }}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              flexGrow: 1,
                              background: "#fff",
                              padding: isMobile ? "15px" : "20px",
                              color: "#000",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <p
                              style={{
                                fontSize: isMobile ? "14px" : "16px",
                                lineHeight: "1.5",
                                marginBottom: "10px",
                                display: "-webkit-box",
                                WebkitLineClamp: isMobile ? "3" : "4",
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {video.feedbackContent}
                            </p>
                            <h6
                              style={{
                                fontSize: isMobile ? "14px" : "16px",
                                fontWeight: "600",
                                margin: "0",
                                color: "#333",
                              }}
                            >
                              {video.name}
                            </h6>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: isMobile ? "5px" : "10px",
                    transform: "translateY(-50%)",
                    background: "rgba(0,0,0,0.6)",
                    color: "white",
                    border: "none",
                    width: isMobile ? "35px" : "40px",
                    height: isMobile ? "35px" : "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 10,
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.background = "rgba(0,0,0,0.8)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.background = "rgba(0,0,0,0.6)")
                  }
                >
                  <i
                    className="bx bx-chevron-left"
                    style={{ fontSize: isMobile ? "20px" : "24px" }}
                  ></i>
                </button>
                <button
                  onClick={nextSlide}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: isMobile ? "5px" : "10px",
                    transform: "translateY(-50%)",
                    background: "rgba(0,0,0,0.6)",
                    color: "white",
                    border: "none",
                    width: isMobile ? "35px" : "40px",
                    height: isMobile ? "35px" : "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 10,
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.background = "rgba(0,0,0,0.8)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.background = "rgba(0,0,0,0.6)")
                  }
                >
                  <i
                    className="bx bx-chevron-right"
                    style={{ fontSize: isMobile ? "20px" : "24px" }}
                  ></i>
                </button>

                {/* Dots indicator */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    gap: "8px",
                  }}
                >
                  {Array.from({ length: getMaxSlides() }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      style={{
                        width: isMobile ? "10px" : "12px",
                        height: isMobile ? "10px" : "12px",
                        borderRadius: "50%",
                        background: index === currentSlide ? "#333" : "#ccc",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal for video playback */}
          <div className="youtube_video">
            <div
              className="modal fade"
              id="exampleModalTestimonials"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg"
                style={{
                  maxWidth: isMobile ? "95%" : "800px",
                  margin: isMobile ? "1.75rem 15px" : "1.75rem auto", // Added horizontal margin for mobile
                }}
              >
                <div
                  className="modal-content"
                  style={{
                    border: "none",
                    height: isMobile ? "300px" : "560px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    className="modal-header"
                    style={{
                      borderBottom: "none",
                      paddingBottom: "0",
                    }}
                  >
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: "0",
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        id="youtube-video"
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                        }}
                        src={videoId}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerGlobalWrapper5;
