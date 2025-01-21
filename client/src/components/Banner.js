import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './custum_animate.scss';
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
// =============================================================================================================================================

import "animate.css";


function Banner() {
  // State to trigger animation re-render
  const [animationKey, setAnimationKey] = useState(0);

  // Function to handle slide change and update the animation key
  const handleSlideChange = () => {
    setAnimationKey(prevKey => prevKey + 1);
  };

  return (
    <Swiper
      navigation={true}
      // autoplay={{
      //   delay: 3500,
      //   disableOnInteraction: false,
      // }}
      lazy={{
        loadPrevNext: true,
      }}
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
                      {/* <Link to="/yogaTraningSampurna">MEHR</Link> */}
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
                    Yogalehrer Ausbildung in
                    Himalaya, Indien
                  </h1>
                  <p data-animation-in="animate__fadeInUp" data-duration-in={2} style={{ opacity: 9 }} className>
                    Hatha Vinyasa <strong>200H Yogalehrer Ausbildung</strong> (auf Deutsch) in Himalaya,
                    Indien ab <strong>2699 €</strong> exkl. Unterkunft &amp; Verpflegung. </p>

                  <div className="banner_bg__content-btn animate__animated animate__fadeInUp">
                    <div className="mehr-btn">
                      {/* <Link to="#">MEHR</Link> */}
                      <Link to="/module/yogalehrerausbildung-himalaya-indien">MEHR</Link>
                    </div>
                    {/* <div
                      className="video-btn mehr-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <button>
                        <i className="bx bx-play" /> video
                      </button>
                    </div> */}
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
                    Tauche ein in eine 21-tägige transformative YogalehrerInnen-Ausbildung im paradiesischen Bali. Lerne in deutscher Sprache, vertiefe deine Praxis und werde zertifizierter Yogalehrer – umgeben von atemberaubender Natur und einer friedlichen Atmosphäre.
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
  );
}

export default Banner;




