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

  const removeDuplicateParagraphs = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const paragraphs = Array.from(doc.querySelectorAll("p"));

    // Use a Set to track unique content
    const seen = new Set();
    const uniqueParagraphs = paragraphs.filter((p) => {
      const text = p.textContent.trim();
      if (seen.has(text)) {
        return false;
      }
      seen.add(text);
      return true;
    });

    // Convert the filtered paragraphs back to HTML
    return uniqueParagraphs.map((p) => `<p>${p.innerHTML}</p>`).join("");
  };

  const fetchData = () => {
    axios
      .get(BASE_URL + `/our_philosophy`)
      .then((response) => {
        console.log("response of our story", response);

        if (response.status == 200) {
          const data = response.data.data[0];
          console.log("real data", response.data.data[0]);

          const uniqueContent = removeDuplicateParagraphs(
            data.about_First_Section_Peragraph_Content
          );


          setOurphilosophy({
            Slide_Image: data.Slide_Image,
            Slider_Heading: data.Slider_Heading,
            Slider_Paragraph: data.Slider_Paragraph,
            Slider_videolink: data.Slider_videolink,
            about_First_Section_Peragraph_Content: uniqueContent,
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
                <div className="about_turiya__left" data-aos="fade-up">
                  <div className="about_turiya__box">
                    <Link to="/category/200h-aya-yogalehrer-ausbildung-intensiv">
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
                    <Link to="/module/blockausbildung-berblick">
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
