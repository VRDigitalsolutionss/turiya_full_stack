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
import { BASE_URL, BASE_URL_IMAGE } from "../../config.js";

const Ourphilosophy = () => {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);

  const [closestUpcomingCourse, setClosestUpcomingCourse] = useState("");

  const fetchNextUpcomingCourse = () => {
    axios
      .get(BASE_URL + "/getClosestUpcomingCourseswithNull")
      .then((response) => {
        console.log("response of fetchNextUpcomingCourse", response.data.data);
        setClosestUpcomingCourse(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchNextUpcomingCourse();
  }, []);

  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }


  const [earlyData, setEarlyData] = useState("");

  const fetchEarlyBirdData = () => {
    axios
      .get(BASE_URL + `/getClosestUpcomingCourseswithNull`)
      // .get("http://127.0.0.1:7000/api/getClosestUpcomingCourseswithNull")
      .then((response) => {
        console.log("respnse of fetchEarlyBirdData", response.data.data[0]);
        const data = response.data.data[0];
        const startDate = data && data.StartDate;
        console.log("start date", data);
        setEarlyData(response.data.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchEarlyBirdData();
  }, []);

  console.log("earlyData", earlyData);

  const [bannerImg, setBannerImg] = useState("");

  const [data, setData] = useState("");


  const [Ourphilosophy, setOurphilosophy] = useState({
    Slide_Image: "",
    Slider_Heading: "",
    Slider_Paragraph: "",
    Slider_videolink: "",
    about_First_Section_Peragraph_Content: "",
    about_First_Section_Sub_Peragraph: "",
    about_First_Section_heading: "",
    about_Second_Section_Heading: "",
    about_Second_Section_Peragraph_Content: "",
    about_Second_Section_Sub_Peragraph: "",
    meta_Description: "",
    meta_Keywords: "",
    meta_Title: "",
    status: "",
  });
  const [videoId, setVideoId] = useState("")

  useEffect(() => {
    if (!videoId && Ourphilosophy && Ourphilosophy.Slider_videolink) {
      setVideoId(Ourphilosophy.Slider_videolink)
    }
  }, [videoId])

  const fetchData = () => {
    axios
      .get(BASE_URL + `/our_philosophy`)
      .then((response) => {
        console.log("response of our story", response);

        if (response.status == 200) {
          const data = response.data.data[0];
          console.log("real data", response.data.data[0]);
          setOurphilosophy({
            Slide_Image: data.Slide_Image,
            Slider_Heading: data.Slider_Heading,
            Slider_Paragraph: data.Slider_Paragraph,
            Slider_videolink: data.Slider_videolink,
            about_First_Section_Peragraph_Content:
              data.about_First_Section_Peragraph_Content,
            about_First_Section_Sub_Peragraph:
              data.about_First_Section_Sub_Peragraph,
            about_First_Section_heading: data.about_First_Section_heading,
            about_Second_Section_Heading: data.about_Second_Section_Heading,
            about_Second_Section_Peragraph_Content:
              data.about_Second_Section_Peragraph_Content,
            about_Second_Section_Sub_Peragraph:
              data.about_Second_Section_Sub_Peragraph,
            meta_Description: data.meta_Description,
            meta_Keywords: data.meta_Keywords,
            meta_Title: data.meta_Title,
            status: data.status,
          });

          setVideoId(data.Slider_videolink)




          var imageUrlcustum = data.Slide_Image
            ? BASE_URL_IMAGE + `/images/our_philoshpy/${data.Slide_Image}`
            : ""; // Fallback image or empty string

          setBannerImg(imageUrlcustum);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("ourPhloshpy", Ourphilosophy);
  // ===========================================================================================================

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

  //   const pyload = {
  // `<p>Selbstredend konnten wir unsere Philosophie als Yoga-Ausbildungsakademie nicht von unserer Lebensphilosophie trennen. In einer der größen Schriften des Yoga, den Patanjali Yoga Sutras, ist unsere Haltung gegenüber anderen und der Welt um uns herum durch das zu bestärken was man Yamas nennt</p><p>Gewaltlosigkeit und Wahrhaftigkeit.Für uns als Team geht es darum, ehrlich und sicher darin zu sein, was wir euch mitteilen und anbieten, sowie, was wir wissen und lehren. Wir bieten auch Transparenz darüber, wo sonst (oder mit wem sonst) ihr nach dem Kurs selbstständig lernen und wachsen könnt. Wir ermutigen euch darin, eure eigenen Flügel auszubreiten und die Reise fortzusetzen.</p><p>Nicht stehlen. Wir schätzen deine Zeit sehr und versprechen, sie niemals als selbstverständlich zu betrachten. In unseren Yogalehrerausbildungen, Kursen und in der Gemeinschaft bemühen wir uns, eure Erfahrungen zu optimieren. Eure Investition in persönliches Wachstum ist uns wichtig, deshalb planen wir jede Session sorgfältig, um das Beste daraus zu machen.</p><p>Brahmacharya wird oft nur mit Zölibat in Verbindung gebracht. Doch ein weiser Lehrer hat uns einmal gelehrt, dass es eigentlich bedeutet, alles mit vollem Herzen zu tun. Auf diese Weise wird jede Handlung zu einer Hingabe an das wahre Selbst oder wie auch immer du es nennen magst. Das bildet den Kern unserer Arbeit und ist stets unser Ziel.</p><p>Unsere Handlungen werden nicht von Gier geleitet. Obwohl wir Geld, Wohlstand und Komfort begrüßen, sind sie nicht der Hauptantrieb unserer Akademie. Wir streben jedoch nach herausragenden Standards, und Qualität erfordert natürlich auch Investitionen.</p>`
  //   };

  function isOfferValid(offerEndDate) {
    if (!offerEndDate) return false;

    const today = new Date();
    const offerEnd = new Date(offerEndDate);

    return today <= offerEnd;
  }

  return (
    <>
      <section id="our-philosophy">
        {/* cart-overlay */}
        <div className="cart-overlay">

        </div>
        {/* banner section unsere-Philosophie */}
        <section className="banner_wrapper">
          <div
            className="banner_bg"
            // style={{ backgroundImage: banner }}
            style={{
              backgroundImage: bannerImg ? `url(${bannerImg})` : "none",
            }}>
            <div className="banner-content container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner_bg__content" data-aos="fade-up">
                    <h1
                      className="animate__animated"
                      data-animation-in="animate__fadeInUp"
                      data-duration-in={1}>
                      {Ourphilosophy.Slider_Heading}
                    </h1>

                    <p
                      className="p-3"
                      dangerouslySetInnerHTML={{
                        __html: Ourphilosophy.Slider_Paragraph,
                      }}></p>
                    <div
                      className="banner_bg__content-btn animate__animated"
                      data-animation-in="animate__fadeInUp"
                      data-duration-in={3}>
                      <div
                        className="video-btn mehr-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal-yt">
                        {/*<a href="#"><i className='bx bx-play'></i> KUNDENSTIMMEN VIDEO </Link>*/}
                        <button>
                          <i className="bx bx-play" /> KUNDENSTIMMEN VIDEO
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
                    onClick={() => setVideoId(null)}
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
                    width="560"
                    height="315"
                    src={videoId} // src="https://www.youtube.com/embed/z6z4-bnDhws"
                    title="YouTube video player"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
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
                  <h6>{Ourphilosophy.about_First_Section_heading}</h6>
                  <h1> {Ourphilosophy.about_First_Section_Sub_Peragraph}</h1>
                  <p
                    style={{
                      margin: "1rem 0px 6px",
                      padding: 0,
                      fontFamily: "Roboto, sans-serif",
                      fontSize: 15,
                      lineHeight: "1.8",
                      color: "rgb(33, 37, 41)",
                      backgroundColor: "rgb(249, 249, 249)",
                    }}
                    className="p-3"
                    dangerouslySetInnerHTML={{
                      __html:
                        Ourphilosophy.about_First_Section_Peragraph_Content,
                    }}></p>
                  {/* <ul
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
                  </ul> */}
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
                <div className="about_wrapper__right mb-3">
                  {
                    closestUpcomingCourse[0] ? (
                      <div>


                        <h3>{closestUpcomingCourse[0] ? closestUpcomingCourse[0].Ausbildung : null}</h3>
                        <div className="price-tag">
                          <h6>
                            <i className="bx bxs-purchase-tag" />
                            {closestUpcomingCourse[0] && isOfferValid(closestUpcomingCourse[0].OfferEndDate) && closestUpcomingCourse[0].Offerprice > 0 ? (
                              <>
                                {closestUpcomingCourse[0].Offerprice}€
                                <sub>
                                  <del
                                    style={{
                                      color: "rgb(255, 87, 34)",
                                      fontSize: "17px",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {closestUpcomingCourse[0].price}
                                  </del>
                                </sub>
                              </>
                            ) : (
                              <>
                                {closestUpcomingCourse[0] && closestUpcomingCourse[0].price}€
                              </>
                            )}
                          </h6>
                        </div>
                        <div className="about-date">
                          {closestUpcomingCourse[0] && isOfferValid(closestUpcomingCourse[0].OfferEndDate) && closestUpcomingCourse[0].Offerprice > 0 && <p>
                            Das Angebot endet am
                            <i className="bx bxs-calendar" />
                            {closestUpcomingCourse[0].OfferEndDate}
                          </p>}
                          <p>
                            <i className="bx bxs-map" />
                            {
                              closestUpcomingCourse[0] ? closestUpcomingCourse[0].Location : null
                            }
                          </p>
                          <p>
                            <i className="bx bxs-calendar" />



                            {/* {
                             closestUpcomingCourse[0]? closestUpcomingCourse[0].StartDate:null + "-" +  closestUpcomingCourse[0]? closestUpcomingCourse[0].EndDate
                             :null
                            } */}
                            {
                              formatDate(closestUpcomingCourse[0] ? closestUpcomingCourse[0].StartDate : null)
                            }
                            <span className="my-2">-</span>
                            {
                              formatDate(closestUpcomingCourse[0] ? closestUpcomingCourse[0].EndDate : null)
                            }

                          </p>
                        </div>

                        <div className="about-contact">
                          <a href="tel:+4906920134987">
                            <i className="bx bxs-phone-call" /> +49 (0)69 - 20134987
                          </a>
                          <a href="mailto:info@turiyayoga.de">
                            <i className="bx bxs-envelope" /> info@turiyayoga.de
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="div">
                        <div className="about-text">
                          <p>
                            Reise und Unterkunft sind nicht immer im Schulungspreis
                            enthalten. Wenn Sie weitere Fragen haben, rufen Sie uns
                            einfach an. Wir helfen Ihnen gerne weiter.
                          </p>
                        </div>
                        <div className="about-contact">
                          <a href="tel:+4906920134987">
                            <i className="bx bxs-phone-call" /> +49 (0)69 - 20134987
                          </a>
                          <a href="mailto:info@turiyayoga.de">
                            <i className="bx bxs-envelope" /> info@turiyayoga.de
                          </a>
                        </div>
                      </div>

                    )
                  }
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

        {/* =============================================== */}
        <Gallery />
        <NewsShelter />
      </section>
    </>
  );
};

export default Ourphilosophy;
