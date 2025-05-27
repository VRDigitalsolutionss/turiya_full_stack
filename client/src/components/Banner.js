import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './custum_animate.scss';
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "animate.css";

function Banner() {
  const [animationKey, setAnimationKey] = useState(0);
  
  // Define video URLs for each modal
  const originalVideo1 = "https://www.youtube.com/embed/izCAn3uvYLo?si=G3ONv3CWqpgPietY";
  const originalVideo2 = "https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a";
  const originalVideo3 = "https://www.youtube.com/embed/m09ZGlZXq54?si=Q6TsbqQ-qeKboBoo";
  const originalVideo4 = "https://www.youtube.com/embed/Fixnb004sWk?si=o3XtHn4ZJ6nly4EN";
  const originalVideo5 = "https://www.youtube.com/embed/sEVO75-2msA";
  
  // State for each video
  const [videoId1, setVideoId1] = useState(originalVideo1);
  const [videoId2, setVideoId2] = useState(originalVideo2);
  const [videoId3, setVideoId3] = useState(originalVideo3);
  const [videoId4, setVideoId4] = useState(originalVideo4);
  const [videoId5, setVideoId5] = useState(originalVideo5);

  const handleSlideChange = () => {
    setAnimationKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    // Function to handle resetting videoId for a specific modal
    const attachModalEvent = (modalId, setVideoId, originalVideo) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        const handleModalClose = () => setVideoId(null);
        modal.addEventListener("hidden.bs.modal", handleModalClose);

        // Cleanup event listener on component unmount
        return () => modal.removeEventListener("hidden.bs.modal", handleModalClose);
      }
    };

    // Attach event listeners to modals
    const cleanup1 = attachModalEvent("exampleModal", setVideoId1, originalVideo1);
    const cleanup2 = attachModalEvent("exampleModal", setVideoId2, originalVideo2);
    const cleanup3 = attachModalEvent("exampleModal3", setVideoId3, originalVideo3);
    const cleanup4 = attachModalEvent("exampleModal4", setVideoId4, originalVideo4);
    const cleanup5 = attachModalEvent("exampleModal5", setVideoId5, originalVideo5);

    return () => {
      if (cleanup1) cleanup1();
      if (cleanup2) cleanup2();
      if (cleanup3) cleanup3();
      if (cleanup4) cleanup4();
      if (cleanup5) cleanup5();
    };
  }, []);

  // Reset videoId when null
  useEffect(() => {
    if (!videoId1) setVideoId1(originalVideo1);
    if (!videoId2) setVideoId2(originalVideo2);
    if (!videoId3) setVideoId3(originalVideo3);
    if (!videoId4) setVideoId4(originalVideo4);
    if (!videoId5) setVideoId5(originalVideo5);
  }, [videoId1, videoId2, videoId3, videoId4, videoId5]);

  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        lazy={{
          loadPrevNext: true,
        }}
        speed={1500}
        modules={[Autoplay, Navigation]}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        <SwiperSlide key={`${animationKey}-1`}>
          <div className="banner_bg banner_bg1">
            <div className="banner-content container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner_bg__content" data-aos="fade-up">
                    <h1 className="animate__animated animate__fadeInUp">
                      Yogalehrer Ausbildungen- Frankfurt am Main
                    </h1>
                    <p className="animate__animated animate__fadeInUp">
                      16 Tage Hatha - Vinyasa Yogalehrer Intensivausbildung{" "}
                      <strong>200H - AYA zertifiziert</strong> ab 2.999€ zzgl.
                      Unterkunft &amp; Verpflegung in Frankfurt am Main.
                    </p>
                    <div className="banner_bg__content-btn animate__animated animate__fadeInUp">
                      <div className="mehr-btn">
                        <Link to="/">MEHR</Link>
                      </div>
                      <div
                        className="video-btn mehr-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <button>
                          <i className="bx bx-play" /> video
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide key={`${animationKey}-2`}>
          <div className="banner_bg banner_bg2">
            <div className="banner-content container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner_bg__content" data-aos="fade-up">
                    <h1 className="animate__animated animate__fadeInUp">
                      Yogalehrer Ausbildung in Himalaya, Indien
                    </h1>
                    <p data-animation-in="animate__fadeInUp" data-duration-in={2} style={{ opacity: 9 }} className>
                      Hatha Vinyasa <strong>200H Yogalehrer Ausbildung</strong> (auf Deutsch) in Himalaya,
                      Indien ab <strong>2699 €</strong> exkl. Unterkunft &amp; Verpflegung. </p>

                    <div className="banner_bg__content-btn animate__animated animate__fadeInUp">
                      <div className="mehr-btn">
                        <Link to="/module/yogalehrerausbildung-himalaya-indien">MEHR</Link>
                      </div>
                      <div
                        className="video-btn mehr-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <button>
                          <i className="bx bx-play" /> video
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide key={`${animationKey}-3`}>
          <div className="banner_bg banner_bg3">
            <div className="banner-content container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner_bg__content" data-aos="fade-up">
                    <h1 className="animate__animated animate__fadeInUp">
                      200H Yogalehrer Ausbildung- Schlangenbad
                    </h1>
                    <p className="animate__animated animate__fadeInUp">
                      <strong>16 Tage</strong> Hatha- Vinyasa Yogalehrer
                      Intensivausbildung 200H - <strong>AYA zertifiziert </strong>
                      ab 2.000€ zzgl. Unterkunft &amp; Verpflegung in
                      <strong> Sampurna- Seminarhaus, Schlangenbad-Wiesbaden.</strong>
                    </p>
                    <div className="banner_bg__content-btn animate__animated animate__fadeInUp">
                      <div className="mehr-btn">
                        <Link to="/module/200h-aya-yogalehrer-ausbildung-sampurna-seminarhaus">MEHR</Link>
                      </div>
                      <div
                        className="video-btn mehr-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                      >
                        <button>
                          <i className="bx bx-play" /> video
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide key={`${animationKey}-4`}>
          <div className="banner_bg banner_bg4">
            <div className="banner-content container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner_bg__content" data-aos="fade-up">
                    <h1 className="animate__animated animate__fadeInUp">
                      200h Yogalehrer Ausbildung -Mallorca
                    </h1>
                    <p className="animate__animated animate__fadeInUp">
                      <strong>18-tägige 200H Intensivausbildung</strong> -
                      (auf Deutsch) 4 Sterne Hotel am Strand in Mallorca .
                      Hatha-Vinyasa Yogalehrer Intensivausbildung ab{" "}
                      <strong>2.999€</strong> zzgl. Verpflegung &amp; Unterkunft
                      Yoga Alliance zertifiziert (AYA), International anerkannt!
                      Werde ein selbstsicherer Yogalehrer.
                    </p>
                    <div className="banner_bg__content-btn animate__animated animate__fadeInUp">
                      <div className="mehr-btn">
                        <Link to="/module/200h-aya-yogalehrer-ausbildung-i-mallorca">MEHR</Link>
                      </div>
                      <div
                        className="video-btn mehr-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal4"
                      >
                        <button>
                          <i className="bx bx-play" /> video
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide key={`${animationKey}-5`}>
          <div className="banner_bg banner_bg5">
            <div className="banner-content container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner_bg__content" data-aos="fade-up">
                    <h1 className="animate__animated animate__fadeInUp">
                      Yogalehrer Ausbildung Goa, Indien *all inklusive
                    </h1>
                    <p className="animate__animated animate__fadeInUp">
                      21 Tage Hatha - Vinyasa Yogalehrer Intensivausbildung
                      (auf Deutsch) 200H - AYA zertifiziert, Unterkunft &amp;
                      Verpflegung im Yoga Resort nahe Strand ab 2.799€ inkl.
                      Verpflegung &amp; Unterkunft in{" "}
                      <strong>Goa, Indien</strong>
                    </p>
                    <div className="banner_bg__content-btn animate__animated animate__fadeInUp">
                      <div className="mehr-btn">
                        <Link to="/module/200h-aya-yogalehrer-ausbildung-goa-indien">MEHR</Link>
                      </div>
                      <div
                        className="video-btn mehr-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal5"
                      >
                        <button>
                          <i className="bx bx-play" /> video
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={`${animationKey}-6`}>
          <div className="banner_bg banner_bg6">
            <div className="banner-content container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner_bg__content" data-aos="fade-up">
                    <h1 className="animate__animated animate__fadeInUp">
                      YogalehrerInnen Ausbildung auf Bali
                    </h1>
                    <p className="animate__animated animate__fadeInUp">
                      Tauche ein in eine 21-tägige transformative YogalehrerInnen-Ausbildung im paradiesischen Bali. Lerne in deutscher Sprache, vertiefe deine Praxis und werde zertifizierter Yogalehrer - umgeben von atemberaubender Natur und einer friedlichen Atmosphäre.
                    </p>
                    <div className="banner_bg__content-btn animate__animated animate__fadeInUp">
                      <div className="mehr-btn">
                        <Link to="/module/yogalehrerinnen-ausbildung-bali">MEHR</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Video Modals */}
      <div className="youtube_video">
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <iframe
                  id="youtube-video"
                  width={560}
                  height={315}
                  src={videoId1}
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

      <div className="youtube_video">
        <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel3" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <iframe
                  id="youtube-video3"
                  width={560}
                  height={315}
                  src={videoId3}
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

      <div className="youtube_video">
        <div className="modal fade" id="exampleModal4" tabIndex={-1} aria-labelledby="exampleModalLabel4" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <iframe
                  id="youtube-video4"
                  width={560}
                  height={315}
                  src={videoId4}
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

      <div className="youtube_video">
        <div className="modal fade" id="exampleModal5" tabIndex={-1} aria-labelledby="exampleModalLabel5" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <iframe
                  id="youtube-video5"
                  width={560}
                  height={315}
                  src={videoId5}
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
    </>
  );
}

export default Banner;