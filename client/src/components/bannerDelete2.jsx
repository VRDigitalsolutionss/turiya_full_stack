


/*

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './custum_animate.scss';
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {

  const [animationKey, setAnimationKey] = useState(0);

  const handleSlideChange = () => {
    // Update the animation key to re-trigger animations
    setAnimationKey(prevKey => prevKey + 1);
  };




  return (
    <>
      <section className="banner_wrapper">
        <div className="banner_slider">

          <Swiper
            navigation={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              {" "}
              <div className="banner_bg banner_bg1">
                <div className="banner-content container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner_bg__content" data-aos="fade-up" >
                        <h1
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={1}>
                          Yogalehrer Ausbildungen- Frankfurt am Main
                        </h1>
                        <p
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={2}>
                          16 Tage Hatha - Vinyasa Yogalehrer Intensivausbildung{" "}
                          <strong>200H - AYA zertifiziert</strong>ab 2.999€
                          zzgl. Unterkunft &amp; Verpflegung in Frankfurt am
                          Main.
                        </p>
                        <div
                          className="banner_bg__content-btn"
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={3}>
                          <div className="mehr-btn">
                            <Link to="/yogaTraningSampurna" >MEHR</Link>
                          </div>
                          <div
                            className="video-btn mehr-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            {/*<a href="#"><i className='bx bx-play'></i> video</a>*/}
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
            <SwiperSlide>
            <SwiperSlide>
              <div className="banner_bg banner_bg2">
                <div className="banner-content container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner_bg__content fade-up-animation" data-aos="fade-up">
                        <h1 data-animation-in="animate__fadeInUp" data-duration-in={1}>
                          Yogalehrer Ausbildungen- Frankfurt am Main
                        </h1>
                        <p data-animation-in="animate__fadeInUp" data-duration-in={2}>
                          16 Tage Hatha - Vinyasa Yogalehrer Intensivausbildung <strong>200H - AYA zertifiziert</strong> ab 2.999€ zzgl. Unterkunft & Verpflegung in Frankfurt am Main.
                        </p>
                        <div className="banner_bg__content-btn" data-animation-in="animate__fadeInUp" data-duration-in={3}>
                          <div className="mehr-btn">
                            <Link to="/yogaTraningSampurna">MEHR</Link>
                          </div>
                          <div className="video-btn mehr-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <button><i className="bx bx-play" /> video</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="banner_bg banner_bg3">
                <div className="banner-content container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner_bg__content" data-aos="fade-up">
                        <h1
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={1}>
                          200H Yogalehrer Ausbildung- Schlangenbad
                        </h1>
                        <p
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={2}>
                          <strong>16 Tage</strong> Hatha- Vinyasa Yogalehrer
                          Intensivausbildung 200H -
                          <strong>AYA zertifiziert </strong>ab 2.000€ zzgl.
                          Unterkunft &amp; Verpflegung in
                          <strong>
                            Sampurna- Seminarhaus, Schlangenbad-Wiesbaden.
                          </strong>
                        </p>
                        <div
                          className="banner_bg__content-btn"
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={3}>
                          <div className="mehr-btn">
                          <Link to="/yogaTraningSampurna" >MEHR</Link>
                          </div>
                          <div
                            className="video-btn mehr-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal3">
                            {/*<a href="#"><i className='bx bx-play'></i> video</a>*/}
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
            <SwiperSlide>
              {" "}
              <div className="banner_bg banner_bg4">
                <div className="banner-content container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner_bg__content" data-aos="fade-up">
                        <h1
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={1}>
                          200h Yogalehrer Ausbildung -Mallorca
                        </h1>
                        <p
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={2}>
                          <strong>18-tägige 200H Intensivausbildun</strong>g -
                          (auf Deutsch) 4 Sterne Hotel am Strand in Mallorca .
                          Hatha-Vinyasa Yogalehrer Intensivausbildung ab
                          <strong>2.999€-</strong> zzgl. Verpflegung &amp;
                          Unterkunft Yoga Alliance zertifiziert (AYA),
                          International anerkannt! Werde ein selbstsicherer
                          Yogalehrer.
                        </p>
                        <div
                          className="banner_bg__content-btn"
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={3}>
                          <div className="mehr-btn">
                          <Link to="/yogalehrer_Ausbildung" >MEHR</Link>
                          </div>
                          <div
                            className="video-btn mehr-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal4">
                            {/*<a href="#"><i className='bx bx-play'></i> video</a>*/}
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
            <SwiperSlide>
              {" "}
              <div className="banner_bg banner_bg5">
                <div className="banner-content container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner_bg__content" data-aos="fade-up">
                        <h1
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={1}>
                          Yogalehrer Ausbildung Goa, Indien *all inklusive
                        </h1>
                        <p
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={2}>
                          21 Tage Hatha - Vinyasa Yogalehrer Intensivausbildung
                          (auf Deutsch) 200H - AYA zertifiziert, Unterkunft
                          &amp; Verpflegung im Yoga Resort nahe Strand ab 2.799€
                          inkl. Verpflegung &amp; Unterkunft in{" "}
                          <strong>Goa, Indien</strong>
                        </p>
                        <div
                          className="banner_bg__content-btn"
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={3}>
                          <div className="mehr-btn">
                          <Link to="/yoga_Traning_Goa" >MEHR</Link>
                          </div>
                          <div
                            className="video-btn mehr-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal5">
                            {/*<a href="#"><i className='bx bx-play'></i> video</a>*/}
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
          </Swiper>

        </div>
      </section>

    </>
  );
};

export default Banner;
