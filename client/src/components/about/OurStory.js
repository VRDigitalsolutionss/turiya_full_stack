import React, { useEffect, useState } from "react";
// import "./about.scss";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/gallery-images/img_1.webp";
import img2 from "../../assets/images/gallery-images/img_2.webp";
import img3 from "../../assets/images/gallery-images/img_3.webp";
import img4 from "../../assets/images/gallery-images/img_4.webp";
import img5 from "../../assets/images/gallery-images/img_5.webp";
import img6 from "../../assets/images/gallery-images/img_6.webp";
import img7 from "../../assets/images/gallery-images/img_7.webp";
import turiaImg1 from "../../assets/images/turiya_yoga_home_manu_akash.webp";
import turiaImg2 from "../../assets/images/turiya_yoga_yogalehrer_ausbildung_block.webp";
import turiaImg3 from "../../assets/images/turiya_yoga_yogalehrer_ausbildung.webp";
import turiaImg4 from "../../assets/images/turiya_yoga_home_manu_akash.webp";
import NewsShelter from "../NewsShelter";
import Contact from "../Contact";
import axios from "axios";
import Gallery from "../gallery/Index";
import { BASE_URL, BASE_URL_IMAGE } from "../../config.js";



const OurStory = () => {
  const [earlyData, setEarlyData] = useState("");

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


  const [upcomingCourse, setUpcomingCourse] = useState("");

  const getUpcomingCourse = () => {
    axios
      .get(BASE_URL + "/getModuleByLocation/Goa")
      .then((response) => {
        console.log("response of Goa courses", response.data);
        const data = response.data.data;
        setUpcomingCourse(data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }



  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);


  const fetchEarlyBirdData = () => {
    axios
      .get(BASE_URL + `/getClosestUpcomingCourseswithNull`)
      .then((response) => {
        console.log("respnse of fetchEarlyBirdData 1", response.data.data[0]);
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
    getUpcomingCourse();
  }, []);

  console.log("earlyData", earlyData);

  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [ourStory, setOurStory] = useState({
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
    if (!videoId && ourStory && ourStory.Slider_videolink) {
      setVideoId(ourStory.Slider_videolink)
    }
  }, [videoId])

  const fetchData = () => {
    axios
      .get(BASE_URL + `/our_stories`)
      .then((response) => {
        console.log("response of our story", response);

        if (response.status == 200) {
          const data = response.data.data[0];
          console.log("real data", response.data.data[0]);
          setOurStory({
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


          // var imageUrlcustum2 = data.Slide_Image
          // ? `http://127.0.0.1:7000/uploads/images/our_story/${data.Slide_Image}`
          //       : ''; // Fallback image or empty string

          var imageUrlcustum = data.Slide_Image
            ? BASE_URL_IMAGE + `/images/our_story/${data.Slide_Image}`
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

  console.log("display it", ourStory);
  //   const d = {
  //   <p>Ausgezeichnete <b>Ausbildungsqualität</b> , hohe <b>Kundenzufriedenheit</b>, solides<b> Wissen</b>, internationale <b>Erfahrung </b>und absolute <b>Begeisterung</b> – Das sind wir!</p>
  // }

  function isOfferValid(offerEndDate) {
    if (!offerEndDate) return false;

    const today = new Date();
    const offerEnd = new Date(offerEndDate);

    return today <= offerEnd;
  }

  return (
    <>
      <section id="OurStory">
        <div>
          <div className="form-body">
            <div
              className="modal fade"
              id="exampleModal-form"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel-form"
              aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="form-body-top">
                      <form method="POST" id="user_login_form">
                        <div className="modal_input">
                          <label>
                            E-Mail<span>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="user_email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="modal_input">
                          <label>
                            Passwort <span>*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="user_password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="submit-form">
                          <button
                            name="login_info"
                            type="submit"
                            className="global_btn">
                            Einloggen
                          </button>
                        </div>
                        <div className="mt-3 text-danger" id="login_alert" />
                      </form>
                    </div>
                    <div className="form-body-bottom card-footer">
                      <div className="password-forgot">
                        <Link to="forgot-login.php" className="btn btn-primary">
                          Passwort vergessen?
                        </Link>
                      </div>
                      <h3>Hast du noch keinen Account?</h3>
                      <div className="annmelden">
                        <Link to="registration.php">Anmelden</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-overlay">
            <div className="cart-overlay-content">
              <button id="update-cart">
                <i className="bx bx-trash" />
              </button>
              <div className="cart-overlay-heading" id="cart_content"></div>
            </div>
          </div>
          {/* cart-overlay */}
          <div className="cart-overlay">

          </div>
          {/* banner section  // unsere_geschite */}
          <section className="banner_wrapper">
            <div
              className="banner_bg"
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
                        {ourStory.Slider_Heading}
                      </h1>
                      <p
                        className="p-0"
                        //   style={{
                        //       color: "rgb(33, 37, 41)",
                        //       fontFamily: "Roboto, sans-serif",
                        //       fontSize: 16,
                        // }}

                        dangerouslySetInnerHTML={{
                          __html: ourStory.Slider_Paragraph,
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

                    {/* ============================================= */}
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
          {/* about us section */}
          <section className="global_wrapper about_wrapper" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="about_wrapper__left" data-aos="fade-up">
                    <h3>{ourStory.about_First_Section_heading}</h3>
                    <h1>{ourStory.about_First_Section_Sub_Peragraph}</h1>
                    <p
                      style={{
                        marginTop: 20,
                        marginRight: 0,
                        marginLeft: 0,
                        padding: 0,
                        fontFamily: "Roboto, sans-serif",
                        fontSize: 15,
                        lineHeight: "1.8",
                        color: "rgb(33, 37, 41)",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: ourStory.about_First_Section_Peragraph_Content,
                      }}>
                      {/* {ourStory.about_First_Section_Peragraph_Content} */}
                    </p>
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
          {/* Modal */}
          <div className="form-body">
            <div
              className="modal fade"
              id="exampleModal-form"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel-form"
              aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="form-body-top">
                      <div className="modal_input">
                        <label>
                          Benutzername <span>*</span>
                        </label>
                        <input type="text" />
                      </div>
                      <div className="modal_input">
                        <label>
                          Passwort <span>*</span>
                        </label>
                        <input type="text" />
                      </div>
                      <div className="submit-form">
                        <button className="global_btn">Einloggen</button>
                      </div>
                    </div>
                    <div className="form-body-bottom card-footer">
                      <div className="password-forgot">
                        <Link to="forgot-login.php" className="btn btn-primary">
                          Passwort vergessen?
                        </Link>
                      </div>
                      <h3>Hast du noch keinen Account?</h3>
                      <div className="annmelden">
                        <Link to="registration.php">Anmelden</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* about turiya */}
          <section className="about_turiya">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="about_turiya__left" data-aos="fade-up">
                    <div className="about_turiya__box">
                      <Link to="/yogalehrer-ausbildung-200h">
                        <div className="about_turiya__box-img">
                          <img
                            src={turiaImg3}
                            className="img-fluid"
                            alt="turiya_yoga_home_manu_akash_breaker_v8-1"
                          />
                        </div>

                        <div className="about_turiya__box-content">
                          <p>200H Yogalehrer</p>
                          <p>Ausbildung </p>
                        </div>
                      </Link>

                      {/* ========================= */}
                    </div>
                    <div className="about_turiya__box">
                      <Link to="/blockausbildung-im-ueberblick">
                        <div className="about_turiya__box-img">
                          <img
                            src={turiaImg2}
                            className="img-fluid"
                            alt="turiya_yoga_yogalehrer_ausbildung_block_aya-1"
                          />
                        </div>
                        <div className="about_turiya__box-content">
                          <p>Blockausbildungen</p>
                        </div>
                      </Link>
                    </div>
                    <div className="about_turiya__box">
                      <Link to="/kundenstimmen">
                        <div className="about_turiya__box-img">
                          <img
                            src={turiaImg1}
                            className="img-fluid"
                            alt="turiya_yoga_yogalehrer_ausbildung_16tage_aya"
                          />
                        </div>
                        <div className="about_turiya__box-content">
                          <p>Kundenstimmen</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="about_turiya__right">
                    {/* <h1>Die Turiya Yoga Gründung</h1> */}
                    <h1>{ourStory.about_Second_Section_Heading}</h1>
                    <div
                      style={{
                        color: "rgb(33, 37, 41)",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "14.4px",
                        backgroundColor: "rgb(249, 249, 249)",
                      }}>
                      <p
                        style={{
                          margin: "1rem 0px 6px",
                          padding: 0,
                          fontSize: 15,
                          lineHeight: "1.8",
                        }}>
                        Bald darauf traf ich Suzana, eine brasilianische
                        Rucksackreisende, die eine einjährige
                        Yogalehrer-Ausbildung am renommierten
                        Kaivalyadhama-Institut absolviert hatte. Gemeinsam
                        reisten wir nach Indien, Deutschland, Thailand und
                        Brasilien, boten erschwingliche Yoga-Kurse an und
                        vertieften unsere Praxis durch Iyengar- und Vinyasa
                        Flow-Trainings. Währenddessen entstand unsere Vision,
                        eine Yoga-Akademie zu gründen. Wir wollten bessere
                        Yogalehrer ausbilden und verbesserte Programme anbieten.
                      </p>
                      <p
                        style={{
                          margin: "1rem 0px 6px",
                          padding: 0,
                          fontSize: 15,
                          lineHeight: "1.8",
                        }}>
                        Suzana hatte vor ihrer Indienreise bereits umfassende
                        Yoga-Praxiserfahrung. Sie erkannte die Bedeutung eines
                        klaren Verständnisses der Yoga-Geschichte und
                        philosophischen Traditionen, die oft in
                        Yogalehrerausbildungen vernachlässigt wurden. Wir fanden
                        viele schlecht ausgebildete Yogalehrer in verschiedenen
                        Ländern, was uns dazu motivierte, hochwertige
                        Ausbildungen anzubieten.
                      </p>
                      <p
                        style={{
                          margin: "1rem 0px 6px",
                          padding: 0,
                          fontSize: 15,
                          lineHeight: "1.8",
                        }}>
                        Suzanas familiärer Hintergrund umfasste eine Vielzahl
                        spiritueller Praktiken und tiefgründiger Perspektiven
                        zur menschlichen Psyche, darunter japanisches Zen,
                        christliche Mystik, jungianische Psychologie und
                        Hypnotherapie. Diese Vielfalt inspirierte sie früh, das
                        Potenzial des Glücks durch Yoga zu erkennen. Sie
                        absolvierte ihre Hatha Yoga-Lehrerausbildung und wagte
                        dann den Neuanfang in Indien, eine prägende Entscheidung
                        für ihr Leben.
                      </p>
                      <p
                        style={{
                          margin: "1rem 0px 6px",
                          padding: 0,
                          fontSize: 15,
                          lineHeight: "1.8",
                        }}>
                        Unsere Zusammenkunft mit der indischen Kultur und unsere
                        persönliche Begegnung veränderten uns nachhaltig. Turiya
                        Yoga entstand aus diesem Austausch heraus, eine Mischung
                        aus vielen Elementen, geschaffen von leidenschaftlichen
                        Yogalehrern. Nach erfolgreichen internationalen
                        Ausbildungen in Indien sind wir nun bereit, unsere
                        Programme auch in Deutschland anzubieten.
                      </p>
                      <p
                        style={{
                          margin: "1rem 0px 6px",
                          padding: 0,
                          fontSize: 15,
                          lineHeight: "1.8",
                        }}>
                        Wir gründeten diese Akademie als Antwort auf eine Welt,
                        in der Yogalehrerausbildungen oft vernachlässigt werden.
                        Trotz des florierenden Yoga-Geschäfts verdient dieser
                        Beruf Respekt und Anerkennung. Unsere Akademie bietet
                        eine sichere Lernumgebung, qualitativ hochwertigen
                        Unterricht und hat zahlreichen Schülern geholfen,
                        selbstbewusste internationale Yogalehrer zu werden.
                      </p>
                      <p
                        style={{
                          margin: "1rem 0px 6px",
                          padding: 0,
                          fontSize: 15,
                          lineHeight: "1.8",
                        }}>
                        Unsere Mission ist es, einen integrativen
                        Gesundheitsstil zugänglich zu machen und Menschen zu
                        vereinen, die die uralte Schule der Selbsterkenntnis
                        lernen, lehren und erleben möchten. Die Akademie fördert
                        den ehrlichen Austausch zwischen Lehrern,
                        Praktizierenden, Studenten und unterstützenden
                        Unternehmen.
                      </p>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* contact form */}
          <Contact />
          {/* gallery */}
          <Gallery />
          {/* newsletter */}
          <NewsShelter />
          {/* Modal */}
          <div className="form-body">
            <div
              className="modal fade"
              id="exampleModal-form"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel-form"
              aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="form-body-top">
                      <div className="modal_input">
                        <label>
                          Benutzername <span>*</span>
                        </label>
                        <input type="text" />
                      </div>
                      <div className="modal_input">
                        <label>
                          Passwort <span>*</span>
                        </label>
                        <input type="text" />
                      </div>
                      <div className="submit-form">
                        <button className="global_btn">Einloggen</button>
                      </div>
                    </div>
                    <div className="form-body-bottom card-footer">
                      <div className="password-forgot">
                        <Link to="forgot-login.php" className="btn btn-primary">
                          Passwort vergessen?
                        </Link>
                      </div>
                      <h3>Hast du noch keinen Account?</h3>
                      <div className="annmelden">
                        <Link to="registration.php">Anmelden</Link>
                      </div>
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

export default OurStory;
