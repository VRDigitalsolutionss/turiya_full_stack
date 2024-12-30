import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/gallery-images/img_1.webp";
import img2 from "../../assets/images/gallery-images/img_2.webp";
import img3 from "../../assets/images/gallery-images/img_3.webp";
import img4 from "../../assets/images/gallery-images/img_4.webp";
import img5 from "../../assets/images/gallery-images/img_5.webp";
import img6 from "../../assets/images/gallery-images/img_6.webp";
import img7 from "../../assets/images/gallery-images/img_7.webp";
import banner from "../../assets/banner/philosophie_banner.webp";
import turiaImg1 from "../../assets/images/turiya_yoga_home_manu_akash.webp";
import turiaImg2 from "../../assets/images/turiya_yoga_yogalehrer_ausbildung_block.webp";
import turiaImg3 from "../../assets/images/turiya_yoga_yogalehrer_ausbildung.webp";
import logo1 from "../../assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys200-150x150.webp";
import logo2 from "../../assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys300-150x150.webp";
import logo3 from "../../assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys500-150x150.webp";
import NewsShelter from "../NewsShelter";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import axios from "axios";
import Gallery from "../gallery/Index";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";
const Ourphilosophy = () => {
  const [data, setData] = useState("");

  const fetchData = () => {
    axios
      .get(`${BASE_URL}/galleries`)
      .then((response) => {
        console.log("response", response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("gallery data", data);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img3,
    img4,
    img2,
    img1,
    img6,
  ];

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImgDialog = (index) => {
    setCurrentIndex(index); // Set the clicked image index as current
    setIsOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false); // Hide the overlay
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to the next image
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ); // Move to the previous image
  };

  return (
    <>
      <section id="our-philosophy">
        {/* cart-overlay */}
        <div className="cart-overlay">
          <div className="cart-overlay-content">
            <div className="cart-overlay-heading">
              <div className="cart_wrapper__left-box">
                <div className="cart_left__heading">
                  <h6>200H Yogalehrer Ausbildung M1 + M2</h6>
                  <div className="del">
                    <button>
                      <i className="bx bx-trash" />
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  <p>€2799</p>
                </div>
                <div className="cart-list">
                  <ul>
                    <li>
                      <i className="bx bxs-calendar" /> 30.09.2024 - 15.10.2024
                    </li>
                    <li>Sampurna Seminarhaus</li>
                    <li>Noch 5 Platz frei</li>
                  </ul>
                </div>
                <div className="cart-total">
                  <h6>TOTAL</h6>
                  <p>€2799</p>
                </div>
              </div>
              <div className="anmeldung">
                <a href="registration.php" className="global_btn">
                  ANMELDUNG
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* banner section */}
        <section className="banner_wrapper">
          <div
            className="banner_bg unsere_philosophie "
            style={{ backgroundImage: banner }}>
            <div className="banner-content container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner_bg__content" data-aos="fade-up">
                    <h1
                      className="animate__animated"
                      data-animation-in="animate__fadeInUp"
                      data-duration-in={1}>
                      Unsere Philosophie als Yoga Akademie
                    </h1>
                    <p>
                      <span
                        style={{
                          color: "rgb(33, 37, 41)",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: 16,
                          backgroundColor: "rgba(255, 255, 255, 0.7)",
                        }}>
                        Hoher Standard, weil wir deine Zeit respektieren.
                        Leidenschaft, weil wir uns nicht von Gier leiten lassen.
                        Authentisch, weil wir eigenartig moderne und
                        traditionelle Perspektiven kombinieren.
                      </span>
                      <br />
                    </p>{" "}
                    {/*<p>*/}
                    {/*    Hoher Standard, weil wir deine Zeit respektieren. Leidenschaft, weil wir uns nicht von*/}
                    {/*    Gier leiten lassen. Authentisch, weil wir eigenartig moderne und traditionelle*/}
                    {/*    Perspektiven kombinieren.*/}
                    {/*</p>*/}
                    <div
                      className="banner_bg__content-btn animate__animated"
                      data-animation-in="animate__fadeInUp"
                      data-duration-in={3}>
                      <div
                        className="video-btn mehr-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal-yt">
                        <button>
                          <i className="bx bx-play" /> KUNDENSTIMMEN VIDEO{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* modal youtube video */}
        <div className="youtube_video">
          <div
            className="modal fade"
            id="exampleModal-yt"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  {/*<iframe id="youtube-video" width="560" height="315"*/}
                  {/*    src="https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"*/}
                  {/*    title="YouTube video player" frameborder="0"*/}
                  {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                  {/*    referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>*/}
                  {/*</iframe>*/}
                  <iframe
                    id="youtube-video"
                    width={560}
                    height={315}
                    src="https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about turiya */}
        <section className="about_turiya">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="about_turiya__right">
                  <h6>DIE TURIYA PHILOSOPHIE</h6>
                  <h1>Unsere Philosophie als Yoga Ausbildungs Akademie</h1>
                  <p
                    style={{
                      margin: "1rem 0px 6px",
                      padding: 0,
                      fontFamily: "Roboto, sans-serif",
                      fontSize: 15,
                      lineHeight: "1.8",
                      color: "rgb(33, 37, 41)",
                      backgroundColor: "rgb(249, 249, 249)",
                    }}>
                    Selbstredend konnten wir unsere Philosophie als
                    Yoga-Ausbildungsakademie nicht von unserer Lebensphilosophie
                    trennen. In einer der größen Schriften des Yoga, den
                    Patanjali Yoga Sutras, ist unsere Haltung gegenüber anderen
                    und der Welt um uns herum durch das zu bestärken was man
                    Yamas nennt:
                  </p>
                  <ul
                    style={{
                      marginTop: 20,
                      marginRight: 0,
                      marginLeft: 0,
                      paddingTop: 0,
                      paddingRight: 0,
                      paddingBottom: 0,
                      fontFamily: "Roboto, sans-serif",
                      color: "rgb(33, 37, 41)",
                      fontSize: 16,
                      backgroundColor: "rgb(249, 249, 249)",
                    }}>
                    <li
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginLeft: 0,
                        padding: 0,
                        lineHeight: "1.8",
                        fontSize: 15,
                        marginBottom: "0.5rem !important",
                        listStyle: "none !important",
                      }}>
                      <span
                        style={{ margin: 0, padding: 0, fontWeight: "bolder" }}>
                        Gewaltlosigkeit und Wahrhaftigkeit.
                      </span>
                      Für uns als Team geht es darum, ehrlich und sicher darin
                      zu sein, was wir euch mitteilen und anbieten, sowie, was
                      wir wissen und lehren. Wir bieten auch&nbsp;
                      <span
                        style={{ margin: 0, padding: 0, fontWeight: "bolder" }}>
                        Transparenz
                      </span>
                      &nbsp;darüber, wo sonst (oder mit wem sonst) ihr nach dem
                      Kurs selbstständig lernen und wachsen könnt. Wir ermutigen
                      euch darin, eure eigenen Flügel auszubreiten und die Reise
                      fortzusetzen.
                    </li>
                    <li
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginLeft: 0,
                        padding: 0,
                        lineHeight: "1.8",
                        fontSize: 15,
                        marginBottom: "0.5rem !important",
                        listStyle: "none !important",
                      }}>
                      <span
                        style={{ margin: 0, padding: 0, fontWeight: "bolder" }}>
                        Nicht stehlen.
                      </span>
                      &nbsp;Wir schätzen deine Zeit sehr und versprechen, sie
                      niemals als selbstverständlich zu betrachten. In unseren
                      Yogalehrerausbildungen, Kursen und in der Gemeinschaft
                      bemühen wir uns, eure Erfahrungen zu optimieren. Eure
                      Investition in persönliches Wachstum ist uns wichtig,
                      deshalb planen wir jede Session sorgfältig, um das Beste
                      daraus zu machen.
                    </li>
                    <li
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginLeft: 0,
                        padding: 0,
                        lineHeight: "1.8",
                        fontSize: 15,
                        marginBottom: "0.5rem !important",
                        listStyle: "none !important",
                      }}>
                      Brahmacharya wird oft nur mit Zölibat in Verbindung
                      gebracht. Doch ein weiser Lehrer hat uns einmal gelehrt,
                      dass es eigentlich bedeutet, alles mit vollem Herzen zu
                      tun. Auf diese Weise wird jede Handlung zu einer Hingabe
                      an das wahre Selbst oder wie auch immer du es nennen
                      magst. Das bildet den Kern unserer Arbeit und ist stets
                      unser Ziel.
                    </li>
                    <li
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginLeft: 0,
                        padding: 0,
                        lineHeight: "1.8",
                        fontSize: 15,
                        marginBottom: "0.5rem !important",
                        listStyle: "none !important",
                      }}>
                      Unsere Handlungen werden nicht von Gier geleitet. Obwohl
                      wir Geld, Wohlstand und Komfort begrüßen, sind sie nicht
                      der Hauptantrieb unserer Akademie. Wir streben jedoch nach
                      herausragenden Standards, und Qualität erfordert natürlich
                      auch Investitionen.
                    </li>
                  </ul>{" "}
                  {/*<h6>DIE TURIYA PHILOSOPHIE</h6>*/}
                  {/*<h1>Unsere Philosophie als Yoga Ausbildungs Akademie</h1>*/}
                  {/*<p>Selbstredend konnten wir unsere Philosophie als Yoga-Ausbildungsakademie nicht von unserer*/}
                  {/*    Lebensphilosophie trennen. In einer der größen Schriften des Yoga, den Patanjali Yoga*/}
                  {/*    Sutras, ist unsere Haltung gegenüber anderen und der Welt um uns herum durch das zu*/}
                  {/*    bestärken was man Yamas nennt:*/}
                  {/*</p>*/}
                  {/*<ul>*/}
                  {/*    <li>*/}
                  {/*        <strong> Gewaltlosigkeit und Wahrhaftigkeit.</strong>Für uns als Team geht es darum,*/}
                  {/*        ehrlich und sicher*/}
                  {/*        darin zu sein, was wir euch mitteilen und anbieten, sowie, was wir wissen und*/}
                  {/*        lehren.*/}
                  {/*        Wir bieten auch <strong> Transparenz</strong> darüber, wo sonst (oder mit wem sonst)*/}
                  {/*        ihr nach dem Kurs*/}
                  {/*        selbstständig lernen und wachsen könnt. Wir ermutigen euch darin, eure eigenen*/}
                  {/*        Flügel*/}
                  {/*        auszubreiten und die Reise fortzusetzen.*/}
                  {/*    </li>*/}
                  {/*    <li><strong> Nicht stehlen.</strong> Wir schätzen deine Zeit sehr und versprechen, sie*/}
                  {/*        niemals als*/}
                  {/*        selbstverständlich zu betrachten. In unseren Yogalehrerausbildungen, Kursen und in der*/}
                  {/*        Gemeinschaft bemühen wir uns, eure Erfahrungen zu optimieren. Eure Investition in*/}
                  {/*        persönliches Wachstum ist uns wichtig, deshalb planen wir jede Session sorgfältig, um*/}
                  {/*        das Beste daraus zu machen.</li>*/}
                  {/*    <li>Brahmacharya wird oft nur mit Zölibat in Verbindung gebracht. Doch ein weiser Lehrer hat*/}
                  {/*        uns einmal gelehrt, dass es eigentlich bedeutet, alles mit vollem Herzen zu tun. Auf*/}
                  {/*        diese Weise wird jede Handlung zu einer Hingabe an das wahre Selbst oder wie auch immer*/}
                  {/*        du es nennen magst. Das bildet den Kern unserer Arbeit und ist stets unser Ziel.</li>*/}
                  {/*    <li>Unsere Handlungen werden nicht von Gier geleitet. Obwohl wir Geld, Wohlstand und Komfort*/}
                  {/*        begrüßen, sind sie nicht der Hauptantrieb unserer Akademie. Wir streben jedoch nach*/}
                  {/*        herausragenden Standards, und Qualität erfordert natürlich auch Investitionen.</li>*/}
                  {/*</ul>*/}
                  <div
                    className="slower_wrapper__center-icon"
                    data-aos="fade-up">
                    <img
                      src={logo1}
                      className="img-fluid"
                      alt="Turiya Yoga Yogalehrer Ausbildungen AYA RYS 200"
                    />
                    <img
                      src={logo2}
                      className="img-fluid"
                      alt="Turiya Yoga Yogalehrer Ausbildungen AYA RYS 300"
                    />
                    <img
                      src={logo3}
                      className="img-fluid"
                      alt="Turiya Yoga Yogalehrer Ausbildungen AYA RYS 500"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="about_turiya__left philosophie_right"
                  data-aos="fade-up">
                  <div className="about_turiya__box">
                    <Link to="/yogalehrer_Ausbildung">
                      <div className="about_turiya__box-img">
                        <img
                          src={turiaImg1}
                          className="img-fluid"
                          alt="turiya_yoga_yogalehrer_ausbildung_16tage_aya"
                        />
                      </div>
                      <div className="about_turiya__box-content">
                        <p>200H Yogalehrer</p>
                        <p>Ausbildung </p>
                      </div>
                    </Link>
                  </div>
                  <div className="about_turiya__box">
                    <Link to="/block_yogaTraning">
                      <div className="about_turiya__box-img">
                        <img
                          src={turiaImg1}
                          className="img-fluid"
                          alt="turiya_yoga_yogalehrer_ausbildung_block_aya-1"
                        />
                      </div>
                      <div className="about_turiya__box-content">
                        <p>Blockausbildungen </p>
                      </div>
                    </Link>
                  </div>
                  <div className="about_turiya__box">
                    <Link to="/kundenstimmen">
                      <div className="about_turiya__box-img">
                        <img
                          src={turiaImg1}
                          className="img-fluid"
                          alt="turiya_yoga_home_manu_akash_breaker_v8-1"
                        />
                      </div>
                      <div className="about_turiya__box-content">
                        <p>Kundenstimmen</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="parralax_wrapper2">
          <div className="container">
            <div className="parralax_wrapper__content" data-aos="fade-right">
              <div className="line" />
              <h6>YOGALEHRER WERDEN</h6>
              <h1>
                Yogalehrer Ausbildung <br />
                auf höchstem Niveau
              </h1>
            </div>
          </div>
        </section>
        {/* contact form */}
        <Contact />
        {/* gallery */}
        {/* ==================== new Gallery =========================== */}

        <section id="gallery" className="global_wrapper">
          <div className="container-fluid">
            <div id="image-gallery">
              <div className="row">
                {/* {images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                      <div
                        className="img-wrapper"
                        onClick={() => handleImgDialog(index)}>
                        <Link to="media/gallery-images/162406476_1.webp">
                          <img src={image} className="img-responsive" />
                        </Link>
                        <div className="img-overlay">
                          <i className="fa fa-plus-circle" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  );
                })} */}

                {/* <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                  <div className="img-wrapper">
                      <Link to="assets/images/img3.webp"><img src="assets/images/img3.webp"
                              className="img-responsive"></Link>
                      <div className="img-overlay">
                          <i className="fa fa-plus-circle" aria-hidden="true"></i>
                      </div>
                  </div>
              </div> */}

                {/* End row */}

                {/* ============================================================================= */}

                {data &&
                  data.map((image, index) => {
                    console.log("image", image);
                    return (
                      <div
                        key={index}
                        className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                        <div
                          className="img-wrapper"
                          onClick={() => handleImgDialog(index)}>
                          {/* <Link to="media/gallery-images/162406476_1.webp"></Link> */}
                          <img
                            src={
                              `${BASE_URL_IMAGE}/images/gallery/` + image.file
                            }
                            alt={image.file}
                            // src={data:image/jpeg;base64,${imageBase64}}

                            // src={`data:image/jpeg;image,${image}`}

                            className="img-responsive"
                          />
                          {/* <Link to="media/gallery-images/162406476_1.webp">
                        <img
                        
                          
                          src={`http://127.0.0.1:7000/uploads/images/gallery/`+image}  
                          
                          
                          // src={data:image/jpeg;base64,${imageBase64}}  
                        
                        // src={`data:image/jpeg;image,${image}`}
                        
                        
                        className="img-responsive" />
                      </Link> */}
                          <div className="img-overlay">
                            <i
                              className="fa fa-plus-circle"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              {/* ========================================================================================= */}
            </div>
            {/* End image gallery */}
          </div>
          {isOverlayVisible && (
            <div id="overlay">
              <div id="prevButton">
                <i className="bx bx-chevron-left" onClick={handlePrev} />
              </div>

              <img
                src={images[currentIndex]}
                style={{ width: "60%" }}
                alt={`Gallery Image ${currentIndex + 1}`}
              />
              <div id="nextButton">
                <i className="bx bxs-chevron-right" onClick={handleNext} />
              </div>
              <div id="exitButton">
                <i className="bx bx-x" onClick={handleCloseOverlay} />
              </div>
            </div>
          )}
        </section>

        {/* =============================================== */}
        <Gallery />
        <NewsShelter />
      </section>
    </>
  );
};

export default Ourphilosophy;
