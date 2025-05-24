import React, { useState, useEffect } from "react";
import "./YogaTraningMallorca.scss";
import SimpleBanner3 from "../banner/SimpleBanner3";
import banner from "../../assets/banner/banner4.webp";
import img1 from "../../assets/images/training_malcornia/training_Mallorca.webp";
import img2 from "../../assets/images/training_malcornia/img2.webp";
import hotelImg1 from "../../assets/images/training_malcornia/hotel_room_img/img1.webp";
import hotelImg2 from "../../assets/images/training_malcornia/hotel_room_img/img2.webp";
import hotelImg3 from "../../assets/images/training_malcornia/hotel_room_img/img3.webp";
import hotelImg4 from "../../assets/images/training_malcornia/hotel_room_img/img4.webp";

import travelImg1 from "../../assets/images/training_malcornia/travelImg1.webp";
import travelImg2 from "../../assets/images/training_malcornia/travelimg2.webp";

import routineImg1 from "../../assets/images/training_malcornia/routine/img1.webp";
import routineImg2 from "../../assets/images/training_malcornia/routine/img2.webp";

import activiti_img1 from "../../assets/images/training_malcornia/activities/img1.webp";
import activiti_img2 from "../../assets/images/training_malcornia/activities/img2.webp";
import activiti_img3 from "../../assets/images/training_malcornia/activities/img3.webp";
import activiti_img4 from "../../assets/images/training_malcornia/activities/img4.webp";
import activiti_img5 from "../../assets/images/training_malcornia/activities/img5.webp";
import activiti_img6 from "../../assets/images/training_malcornia/activities/img6.webp";
import activiti_img7 from "../../assets/images/training_malcornia/activities/img7.webp";
import activiti_img8 from "../../assets/images/training_malcornia/activities/img8.webp";

import videoImg1 from "../../assets/images/sampurna_img/video_testimonial/img1.webp";
import videoImg2 from "../../assets/images/sampurna_img/video_testimonial/img2.webp";
import videoImg3 from "../../assets/images/sampurna_img/video_testimonial/img3.webp";
import NewsShelter from "../NewsShelter";
import Contact from "../Contact";
import Testimonial from "../Testimonial";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";

import Swal from 'sweetalert2'

const YogaTraningMallorca = () => {
  const [closestUpcomingCourse, setClosestUpcomingCourse] = useState("");
  const UserId = localStorage.getItem('turiya_auth_id');

  const fetchNextUpcomingCourse = () => {
    axios
      .get(BASE_URL + "/getClosestUpcomingCourseswithNull")
      .then((response) => {
        console.log("response of banner slower wrapper", response.data.data);
        setClosestUpcomingCourse(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const [isloginOpen, setisloginOpen] = useState(false);

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const navigate = useNavigate();
  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [mainData, setMainData] = useState("");
  console.log("Mallorca");

  const [earlyData, setEarlyData] = useState("");

  const [upcomingCourse, setUpcomingCourse] = useState("");

  const getUpcomingCourse = () => {
    axios
      .get(BASE_URL + "/getModuleByLocation/Mallorca")
      .then((response) => {
        console.log("respnse of getUpcomingCourse", response.data);
        const data = response.data.data;
        setUpcomingCourse(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  console.log("upcoming courses", upcomingCourse);
  useEffect(() => {
    getUpcomingCourse();
    fetchNextUpcomingCourse();
  }, []);

  const fetchEarlyBirdData = () => {
    axios
      .get(BASE_URL + "/getClosestUpcomingCourseswithNull")
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

  const fetchData = () => {
    axios
      .get(
        // "http://127.0.0.1:7000/api/module_webpages_by_category/200H/AYA Yogalehrer Ausbildung I Mallorca"

        BASE_URL +
        `/module_webpages_by_category/200H Yogalehrerausbildung auf Mallorca`
      )
      .then((response) => {
        console.log(
          "response of yoga YogaTraningMallorca",
          response.data.data[0]
        );

        if (response.status == 200) {
          const data = response.data.data[0];
          console.log("real data", response.data.data[0]);
          console.log("banner imggg", data.yogaTeamSlideImage);
          setMainData(response.data.data[0]);

          var imageUrlcustum =
            data && data.yogaTeamSlideImage
              ? BASE_URL_IMAGE +
              `/images/modulewebpage/${data.yogaTeamSlideImage}`
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

  console.log("all courses data", mainData, bannerImg);
  console.log("banner image", bannerImg);

  // Function to toggle the dialog visibility
  const handletriggerDialogBox = (courseid) => {

    const auth_token = localStorage.getItem("turiya_auth_token");

    console.log("course id: handletriggerDialogBox" + courseid, auth_token);
    if (auth_token) {
      addToCart(courseid);
    } else {
      setIsDialogVisible(true);
    }

    // handletriggerDialogBox
  };


  const addToCart = (courseid) => {
    const payload = {
      moduleId: courseid,
      userId: UserId,
      status: "active",
    };

    axios
      .post(BASE_URL + "/add_course_in_cart", payload)
      .then((response) => {
        console.log("response of cart", response.data.data);
        Swal.fire({
          title: "Danke!",
          text: "Kurs im Warenkorb hinzugefügt!",
          icon: "success"
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        console.log("error", error);
        Swal.fire({
          Symbol: 'error',
          Titel: "Benachrichtigung",
          Text: "Etwas ist schiefgelaufen!",
          Fußzeile: '<a href="#">Warum habe ich dieses Problem?</a>'
        });

      });
  };

  // Function to close the dialog
  const closeDialogBox = () => {
    setIsDialogVisible(false); // Hide the dialog
  };

  const handleredirect = () => {
    setisloginOpen(true);
    closeDialogBox(); // Close
    //  onClick="window.location.href='registration.php';"
  };

  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }

  // Example usage:
  const formattedDate = formatDate("2025-01-09");
  console.log(formattedDate); // Output: 09.01.2025

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);

  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }

  const originalVideo1 = "https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a";
  const originalVideo2 = "https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a";

  // Define videoId states for each modal
  const [videoId1, setVideoId1] = useState(originalVideo1);
  const [videoId2, setVideoId2] = useState(originalVideo2);

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
    const cleanup1 = attachModalEvent("exampleModal1", setVideoId1, originalVideo1);
    const cleanup2 = attachModalEvent("exampleModal2", setVideoId2, originalVideo2);

    return () => {
      if (cleanup1) cleanup1();
      if (cleanup2) cleanup2();
    };
  }, []);

  // Reset videoId when null
  useEffect(() => {
    if (!videoId1) setVideoId1(originalVideo1);
    if (!videoId2) setVideoId2(originalVideo2);
  }, [videoId1, videoId2]);


  function isOfferValid(offerEndDate) {
    if (!offerEndDate) return false;

    const today = new Date();
    const offerEnd = new Date(offerEndDate);

    return today <= offerEnd;
  }


  return (
    <>
      {/* <SimpleBanner
        banner={banner}
        heading="200H Yogalehrerausbildung auf Mallorca"
        para="18-tägige 200H AYA Intensivausbildung (auf Deutsch) in einem 4 Sterne Hotel am Strand in Mallorca. Hatha-Vinyasa Yogalehrer Intensivausbildung ab 2.999 € zzgl. Verpflegung & Unterkunft, Yoga Alliance zertifiziert, International anerkannt! Werde ein selbstsicherer Yogalehrer."
        buttonTxt=" KUNDENSTIMMEN VIDEO "
      /> */}

      <SimpleBanner3
        banner={bannerImg && bannerImg}
        heading={mainData.yogaTeamSliderHeading}
        para={mainData.yogaTeamSliderParagraph}
        videoLink={mainData.yogaTeamSliderVideoLink}
        buttonTxt="KUNDENSTIMMEN VIDEO"
      />

      <div>
        <section className="global_wrapper about_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="about_wrapper__left">
                  {/* <h3>Yogalehrer Ausbildung 200 Std. AYA Hatha-Flow</h3> */}

                  <h3>
                    {" "}
                    {mainData && mainData.about_first_section_sub_Paragraph}
                  </h3>
                  {/* <h1>Yogalehrer Ausbildung in Goa, Indien</h1> */}
                  <h1> {mainData && mainData.about_first_section_Heading}</h1>

                  <p
                    className="p-0"
                    //   style={{
                    //       color: "rgb(33, 37, 41)",
                    //       fontFamily: "Roboto, sans-serif",
                    //       fontSize: 16,
                    // }}

                    dangerouslySetInnerHTML={{
                      __html: mainData.about_first_section_Paragraph_Content,
                    }}></p>
                  {/* <h1>Yogalehrer Ausbildung auf Mallorca</h1>
            <p>Turiya Yoga Akademie bietet eine 18 Tägige YogaleherInnen Ausbildung im traumhaften Mar Hotel
              Playa Mar &amp; Spa auf Mallorca, auf den Balearen an. Eine international anerkannte Ausbildung
              in deutscher Sprache.</p> */}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="about_wrapper__right mb-3">
                  {closestUpcomingCourse[0] ? (
                    <div>
                      <h3>
                        {closestUpcomingCourse[0]
                          ? closestUpcomingCourse[0].Ausbildung
                          : null}
                      </h3>
                      <div className="price-tag">
                        <h6>
                          <i className="bx bxs-purchase-tag" />
                          {closestUpcomingCourse[0] && isOfferValid(closestUpcomingCourse[0].OfferEndDate) && closestUpcomingCourse[0].Offerprice > 0 ? (
                            <>
                              {closestUpcomingCourse[0].Offerprice}€
                              <sub>
                                <del
                                  style={{
                                    color: "#E07542",
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
                          {formatDate(closestUpcomingCourse[0].OfferEndDate)}
                        </p>}
                        <p>
                          <i className="bx bxs-map" />
                          {closestUpcomingCourse[0]
                            ? closestUpcomingCourse[0].Location
                            : null}
                        </p>
                        <p>
                          <i className="bx bxs-calendar" />

                          {/* {
                             closestUpcomingCourse[0]? closestUpcomingCourse[0].StartDate:null + "-" +  closestUpcomingCourse[0]? closestUpcomingCourse[0].EndDate
                             :null
                            } */}
                          {formatDate(
                            closestUpcomingCourse[0]
                              ? closestUpcomingCourse[0].StartDate
                              : null
                          )}
                          <span className="my-2">-</span>
                          {formatDate(
                            closestUpcomingCourse[0]
                              ? closestUpcomingCourse[0].EndDate
                              : null
                          )}
                        </p>
                      </div>

                      <div className="about-contact">
                        <a href="tel:+4906920134987">
                          <i className="bx bxs-phone-call" /> +49 (0)69 -
                          20134987
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
                          Reise und Unterkunft sind nicht immer im
                          Schulungspreis enthalten. Wenn Sie weitere Fragen
                          haben, rufen Sie uns einfach an. Wir helfen Ihnen
                          gerne weiter.
                        </p>
                      </div>
                      <div className="about-contact">
                        <a href="tel:+4906920134987">
                          <i className="bx bxs-phone-call" /> +49 (0)69 -
                          20134987
                        </a>
                        <a href="mailto:info@turiyayoga.de">
                          <i className="bx bxs-envelope" /> info@turiyayoga.de
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sampurna_wrapper">
          <div className="container">
            <div className="sampurna_wrapper__content">
              <div className="yoga-list-img">
                <img
                  src={img1}
                  className="img-fluid"
                  alt="ccclip_image002_0001"
                />
                <p className="text-center">
                  Photo by <a href="#"> DJ Nick Otronic</a> on{" "}
                  <a href="#"> Unsplash</a>
                </p>
              </div>
              <p>
                Unsere 200-Stunden-Yogalehrer-Ausbildung ist von der Yoga
                Alliance zertifiziert. Sie vermittelt eine solide Grundlage in
                Hatha-Vinyasa-Flow Yoga. Unser Programm kombiniert das Wissen
                des traditionellen und modernen Hatha Yoga mit Vinyasa Flow. Das
                ermöglicht es dir, nach Abschluss der Ausbildung Hatha Classic /
                Modern, Hatha Flow und Vinyasa Flow zu unterrichten.
              </p>
              <p>
                Im ersten Teil unserer Ausbildung liegt der Fokus auf Hatha
                Yoga. Dies ermöglicht den Teilnehmenden, Ausrichtung und
                Sicherheit zu verstehen, ohne den fließenden Aspekt von Vinyasa
                zu integrieren. Die Teilnehmenden vertiefen ihr Verständnis für
                Yoga-Asanas und entwickeln ein Gespür für die Haltungen. Sie
                lernen verschiedene Hilfsmittel und ihre Anwendung kennen und
                verstehen die Haltungen sowohl in einer traditionellen als auch
                in einer modernen Sichtweise.
              </p>
              <p>
                Im zweiten Teil des Trainings führen wir behutsam den fließenden
                Aspekt ein, der es den Teilnehmenden ermöglicht, verschiedene
                Yogastile in ihre zukünftige Lehrpraxis zu integrieren,
                unterstützt durch das Konzept des Sequencing. Anatomie- und
                Biomechanik-Kurse sind sorgfältig über das gesamte Programm
                verteilt, damit die Teilnehmenden ein grundlegendes Verständnis
                für sichere Bewegungen und korrekte Hands-On-Anpassungen
                entwickeln können.
              </p>
              <p>
                Unsere Vision bei Turiya Yoga ist es, aufrichtige
                Yoga-Praktizierende zu authentischen Yogalehrern auszubilden,
                die Sicherheit, Integrität, Selbstvertrauen und Freude
                ausstrahlen. Die Zertifizierung von Turiya Yoga durch die Yoga
                Alliance wird weltweit anerkannt. Unser Team setzt sich stets
                dafür ein, eine unterstützende und liebevolle Lernumgebung zu
                schaffen und jedem Teilnehmer Aufmerksamkeit zu schenken, damit
                jeder sein Potenzial erreichen und während der Ausbildung
                persönliches Wachstum erfahren kann. Turiya Yoga bietet Kurse in
                Indien, Deutschland und Spanien an und erfüllt dabei hohe
                internationale Standards. Nach Abschluss der Ausbildung kannst
                du sicher mit dem Unterrichten beginnen, sei es in deinem
                Heimatland oder an einem Ort deiner Wahl.
              </p>
              <div className="yoga-list-img">
                <img
                  src={img2}
                  className="img-fluid"
                  alt="ccclip_image006_0000"
                />
              </div>
              <p>
                *Die 200-stündige Yogalehrerausbildung von Turiya Yoga ist ein
                intensiver 17-tägiger Kurs, der für alle körperlichen
                Konditionen geeignet ist. Dieser umfasst die Inhalte sowohl des
                Moduls 1 (ein 8-tägiger Intensivkurs) als auch des Moduls 2
                (ebenfalls ein 8-tägiger Intensivkurs) unserer Yoga-Ausbildung.
              </p>
              <h4>Unterkunft &amp; Verpflegung</h4>
              <h6>Mar Hotel Playa Mar &amp; Spa, Mallorca </h6>
              <p>
                Dieses wunderschön gelegene Hotel befindet sich nur 50 Meter vom
                schönen Strand von Puerto Pollensa entfernt. Puerto Pollensa ist
                ein bedeutendes Touristenzentrum und gilt als ein kleines Stück
                vom Paradies. Hier gibt es einen wunderschönen Sandstrand, einen
                Blick auf die Berge, einen Jachthafen und eine Promenade
              </p>
              <div className="sampurna_wrapper__grid">
                <div className="sampurna_wrapper__grid-box">
                  <img
                    src={hotelImg1}
                    className="img-fluid"
                    alt="Mar_Hotels_Playa_Mar_and_Spa-Piscina_22"
                  />
                </div>
                <div className="sampurna_wrapper__grid-box">
                  <img
                    src={hotelImg2}
                    className="img-fluid"
                    alt="Mar_Hotels_Playa_Mar_and_Spa-Restaurante_principal_13"
                  />
                </div>
                <div className="sampurna_wrapper__grid-box">
                  <img
                    src={hotelImg3}
                    className="img-fluid"
                    alt="Mar_Hotels_Playa_Mar_and_Spa-Suite_01"
                  />
                </div>
                <div className="sampurna_wrapper__grid-box">
                  <img
                    src={hotelImg4}
                    className="img-fluid"
                    alt="IMG_20220915_164155"
                  />
                </div>
              </div>
              <p>
                {" "}
                Das Hotel bietet allen eine tolle Zeit! Eine großzügig
                gestaltete Landschaft, zwei unvergessliche Swimmingpools (ein
                Außen- und ein Innenpool), ein Whirlpool, ein komplettes Spa mit
                Schönheitsbehandlungen, Gärten mit Olivenbäumen, gemütliche und
                angenehme Lounges sowie ein Restaurant mit Buffet und
                Showcooking sind nur einige der Annehmlichkeiten dieses
                4-Sterne-Hotels. Praktiziere mit uns Yoga in einem gemütlichen
                und dennoch anspruchsvollen Hotel, von dem aus du die
                wunderschöne Landschaft der Serra de Tramuntana genießen und im
                warmen Wasser des Mittelmeers entspannen kannst.
              </p>
              <p>
                Nicht zuletzt bietet unser Yogasaal einen herrlichen Blick auf
                die Berge. Bereite dich darauf vor, deine Yogaübungen in einem
                schönen, geräumigen und lichtdurchfluteten Raum zu genießen. Für
                weitere Bilder des Hotels...{" "}
                <a
                  href="https://www.marhotels.com/hoteles/mallorca/puerto-de-pollensa/mar-hotels-playa-mar-spa/galeria"
                  target="_blank">
                  klicke hier.{" "}
                </a>
              </p>
              <p>
                <a
                  href="https://www.marhotels.com/hoteles/mallorca/puerto-de-pollensa/mar-hotels-playa-mar-spa/galeria"
                  target="_blank">
                  https://www.marhotels.com/hoteles/mallorca/puerto-de-pollensa/mar-hotels-playa-mar-spa/galeria
                </a>
              </p>
              <p>
                {" "}
                Wir verstehen, wie wichtig es ist, sich ein Bild davon zu
                machen, wo du deine lang ersehnten 18 Tage Yogaausbildung auf
                der wunderschönen Insel Mallorca verbringen wirst. Die
                Kursteilnehmer*innen übernachten in einer Junior Suite mit zwei
                Schlafbereichen, ausgestattet mit einem Doppelbett und einem
                Queensize-Bett. Jeder Bereich hat einen eigenen Zugang zum
                Balkon, was für Privatsphäre sorgt. Hier kannst du sicher sein,
                dass du dich wohl und willkommen fühlst. *Es ist auch möglich,
                Einzelzimmer zu buchen.
              </p>
              <p>
                Die Vollpension ist im Preis inbegriffen. Frühstück, Mittag- und
                Abendessen sowie Säfte, Tees, Cappuccinos usw. stehen für jeden
                Teilnehmer zur Verfügung. Während der Mahlzeiten werden Getränke
                serviert. Es gibt vegane und vegetarische Optionen.
              </p>
              <p>
                Wenn du weitere Informationen zu den Mahlzeiten benötigst,
                zögere nicht, uns anzurufen. Wir bieten vegane und vegetarische
                Optionen an."
              </p>
              <h6>
                Unterkunft (17 Nächte) &amp; Verpflegung: ca. 2.106 Euro.
                (Junior Suit){" "}
              </h6>
              <h6>
                Unterkunft (17 Nächte) &amp; Verpflegung: ca. 3.400 Euro (
                Single){" "}
              </h6>
              <h6>
                Plus Tourist Tax- wird Vorort bei Ankunft bezahlt. ca. 3.30 Euro
                Pro tag.{" "}
              </h6>
              <h4>Buchung</h4>
              <p>
                Um die Unterkunft deiner Wahl zu buchen und mehr über den Ort,
                die Ausbildung und die verfügbaren Plätze zu erfahren, rufe uns
                an Tel. 069 2013 4987 oder schreibe uns eine E-mail. Wir helfen
                immer gerne.
              </p>
              <p>*Anreise ist nicht im Ausbildungspreis enthalten.</p>
              <div className="sampurna_wrapper__grid">
                <div className="sampurna_wrapper__grid-box">
                  <img
                    src={travelImg1}
                    className="img-fluid"
                    alt="mallorca001"
                  />
                </div>
                <div className="sampurna_wrapper__grid-box">
                  <img
                    src={travelImg2}
                    className="img-fluid"
                    alt="mallorca002"
                  />
                </div>
              </div>
              <h4>200H Yogalehrer Ausbildung -18 Tage</h4>
              <h4>Zeitplan - Yogalehrer Ausbildung auf Mallorca </h4>
              <p>
                Unser einzigartiges 200-Stunden-Programm und die Zeit, die du
                mit uns verbringst, werden dich tief berühren. Dein Tag beginnt
                früh mit einer Yogapraxis - Kriyas, Asanas, Pranayama,
                Meditation - umgeben von Natur und Stille. Nach dem Frühstück
                nimmst du an theoretischem Unterricht und Technikklassen teil.
                Diese werden von professionellen Yogalehrern und
                -praktizierenden geleitet, Menschen, die ihre Yogapraxis sowohl
                auf als auch neben der Matte pflegen. Am Ende des Tages
                schließen wir mit einer Asana-, Pranayama- und Meditationspraxis
                ab.
              </p>
              <p>
                Es ist wichtig zu erwähnen, dass unsere Yogalehrerausbildung auf
                Mallorca denselben Standards und dem gleichen Programm wie all
                unsere anderen 200-Stunden-Yogalehrerausbildungen folgt. Um
                unseren Teilnehmern die Natur und die wundervolle Zeit in
                Spanien genießen zu lassen, haben wir uns entschieden, unsere
                Struktur leicht zu ändern und bieten daher zwei freie Tage
                zwischen den Ausbildungseinheiten an. Zusätzlich werden einige
                Klassen zu Anatomie und Philosophie online stattfinden, was
                unseren Tagen in der Natur einen flexibleren Zeitplan und einen
                erholsameren Rhythmus ermöglicht.
              </p>
              <div className="text-center">
                <h4>Beispiel eines Tagesablaufs</h4>
                <p>7:00 - 9:00 Yogapraxis</p>
                <h6>Pause Frühstück</h6>
                <p>09:30 - 11:30 Anatomie-Theorie</p>
                <p>11:30 - 13:00 Unterrichtsmethodik oder Anpassung</p>
                <h6>Pause Mittagessen</h6>
                <p>14:30 - 16:00 Unterrichtsmethodik oder Anpassung</p>
                <p>16:00 - 17:30 Yoga Asana &amp; Spezialtechniken</p>
                <p>18:00 - 19:30 Yogapraxis</p>
              </div>
              <p>
                Zwischen Modul 1 und Modul 2 haben die Teilnehmer*innen die
                Möglichkeit, 2 freie Tage zu genießen, da sich der Zeitplan wie
                im Leben üblich leicht ändern kann. Dies hängt von der
                Gruppendynamik ab.
              </p>
              <div className="yoga-list-img">
                <img
                  src={routineImg1}
                  className="img-fluid"
                  alt="ccclip_image026"
                />
              </div>
              <h4>Aktivitäten</h4>
              <p>
                Mallorca bietet dir eine Vielzahl von Möglichkeiten, dich und
                die Natur während deiner Auszeit zu genießen. Kajakfahren,
                Schnorcheln und entspannte Strandtage sind nur einige der Dinge,
                die du auf dieser paradiesischen Insel erleben kannst. Wir
                helfen dir gerne dabei, deine Tage so zu planen, dass sie all
                deine Erwartungen erfüllen. Schau dir einige der Aktivitäten an,
                die du erkunden kannst:
              </p>
              <div className="malcora--grid">
                <div className="malcora_box">
                  <div className="malcora--grid-box">
                    <img src={activiti_img1} className="img-fluid" alt="golf" />
                  </div>
                  <div className="malcora--grid-content">
                    <h3>Golf</h3>
                  </div>
                </div>
                <div className="malcora_box">
                  <div className="malcora--grid-box">
                    <img src={activiti_img2} className="img-fluid" alt="golf" />
                  </div>
                  <div className="malcora--grid-content">
                    <h3>kajak</h3>
                  </div>
                </div>
                <div className="malcora_box">
                  <div className="malcora--grid-box">
                    <img src={activiti_img3} className="img-fluid" alt="golf" />
                  </div>
                  <div className="malcora--grid-content">
                    <h3>tauchen</h3>
                  </div>
                </div>
                <div className="malcora_box">
                  <div className="malcora--grid-box">
                    <img src={activiti_img4} className="img-fluid" alt="golf" />
                  </div>
                  <div className="malcora--grid-content">
                    <h3>SUP</h3>
                  </div>
                </div>
                <div className="malcora_box">
                  <div className="malcora--grid-box">
                    <img
                      src={activiti_img5}
                      className="img-fluid"
                      alt="horseriding"
                    />
                  </div>
                  <div className="malcora--grid-content">
                    <h3>reiten</h3>
                  </div>
                </div>
                <div className="malcora_box">
                  <div className="malcora--grid-box">
                    <img
                      src={activiti_img6}
                      className="img-fluid"
                      alt="cycling1"
                    />
                  </div>
                  <div className="malcora--grid-content">
                    <h3>radfahren</h3>
                  </div>
                </div>
                <div className="malcora_box">
                  <div className="malcora--grid-box">
                    <img
                      src={activiti_img7}
                      className="img-fluid"
                      alt="Fallschirmspringen"
                    />
                  </div>
                  <div className="malcora--grid-content">
                    <h3>Fallschirmspringen</h3>
                  </div>
                </div>
                <div className="malcora_box">
                  <div className="malcora--grid-box">
                    <img src={activiti_img8} className="img-fluid" alt="sea" />
                  </div>
                  <div className="malcora--grid-content">
                    <h3>strand</h3>
                  </div>
                </div>
              </div>
              <h4>Ein wenig darüber, was du lernen wirst :</h4>
              {/* about turiya */}
              <div>
                <div className="col-lg-12">
                  <div className="about_turiya__right">
                    <ul>
                      <li>
                        <strong> Gewaltlosigkeit und Wahrhaftigkeit.</strong>Für
                        uns als Team geht es darum, ehrlich und sicher darin zu
                        sein, was wir euch mitteilen und anbieten, sowie, was
                        wir wissen und lehren. Wir bieten auch{" "}
                        <strong> Transparenz</strong> darüber, wo sonst (oder
                        mit wem sonst) ihr nach dem Kurs selbstständig lernen
                        und wachsen könnt. Wir ermutigen euch darin, eure
                        eigenen Flügel auszubreiten und die Reise fortzusetzen.
                      </li>
                      <li>
                        <strong> Nicht stehlen.</strong> Wir schätzen deine Zeit
                        sehr und versprechen, sie niemals als selbstverständlich
                        zu betrachten. In unseren Yogalehrerausbildungen, Kursen
                        und in der Gemeinschaft bemühen wir uns, eure
                        Erfahrungen zu optimieren. Eure Investition in
                        persönliches Wachstum ist uns wichtig, deshalb planen
                        wir jede Session sorgfältig, um das Beste daraus zu
                        machen.
                      </li>
                      <li>
                        Brahmacharya wird oft nur mit Zölibat in Verbindung
                        gebracht. Doch ein weiser Lehrer hat uns einmal gelehrt,
                        dass es eigentlich bedeutet, alles mit vollem Herzen zu
                        tun. Auf diese Weise wird jede Handlung zu einer Hingabe
                        an das wahre Selbst oder wie auch immer du es nennen
                        magst. Das bildet den Kern unserer Arbeit und ist stets
                        unser Ziel.
                      </li>
                      <li>
                        Unsere Handlungen werden nicht von Gier geleitet. Obwohl
                        wir Geld, Wohlstand und Komfort begrüßen, sind sie nicht
                        der Hauptantrieb unserer Akademie. Wir streben jedoch
                        nach herausragenden Standards, und Qualität erfordert
                        natürlich auch Investitionen.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>
                Um mehr zu erfahren, besuche unsere 200h Yogalehrerausbildung
                Seite. Du kannst alles über unser Programm in der 200h
                Yogalehrerausbildung FAQ erfahren.
              </p>
              <h4>Video Testimonials</h4>
              <p>
                Wir sind es gewohnt, Gruppen von Yogis im Ausland und Yogalehrer
                Ausbildungen zu betreuen - es ist eine Leidenschaft von uns. Das
                kannst du an den vielen glücklichen Gesichtern in dem Video
                sehen, das wir hier unten zusammengestellt haben. Diese Art von
                Erfahrung erfordert nicht nur Herzlichkeit von allen Lehrern,
                sondern auch die Offenheit, nicht nur Spaß zu haben, sondern
                auch zu wissen, wann und wie unsere wunderbaren Teilnehmerdazu
                bringen können, all das große Potenzial, das sie in sich tragen,
                zum Strahlen zu bringen. Wir sind für dich da, für deine Praxis
                und um diese lebensverändernde Praxis namens Yoga zu feiern.
              </p>
              <div className="sampurna_wrapper__grid">
                <div
                  className="sampurna_wrapper__grid-box"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1">
                  <img src={videoImg1} className="img-fluid" alt="hqdefault" />
                </div>
                <div
                  className="sampurna_wrapper__grid-box"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2">
                  <img
                    src={videoImg2}
                    className="img-fluid"
                    alt="W1JGeAxS6gQ"
                  />
                </div>
              </div>
              <h4>Der Kurs ist geeignet für...</h4>
              <p>
                Unser Kurs richtet sich an alle aufrichtigen
                Yoga-Praktizierenden, die nach einer friedlichen Umgebung
                suchen, um sich auf ihre eigene Praxis zu konzentrieren und
                gleichzeitig zu lernen, wie sie Yoga mit anderen teilen können.
                Mallorca ist wahrlich ein magischer Ort, um die Kunst des Yoga
                zu erlernen, umgeben von faszinierender Natur und angenehmem
                Wetter. Der Kurs bereitet dich hauptsächlich darauf vor, sicher
                Hatha-Flow zu unterrichten, von Anfängern bis Fortgeschrittenen!
                Es ist jedoch wichtig zu beachten, dass die Fähigkeit,
                fortgeschrittene Asanas zu unterrichten, stark mit deiner
                eigenen Praxis verbunden ist.
              </p>
              <div className="yoga-list-img">
                <img
                  src={videoImg3}
                  className="img-fluid"
                  alt="ccclip_image030"
                />
              </div>
              <h4>Zertifikat &amp; Yoga Alliance</h4>
              <p>
                Unser 200-Stunden-Yogalehrer-Ausbildungsprogramm (AYA) ist von
                der Yoga Alliance zertifiziert und bietet eine solide Basis im
                Hatha-Flow-Yoga. Unsere Vision ist es, aufrichtige
                Yoga-Praktizierende zu Lehrern zu formen, die Sicherheit,
                Integrität, Selbstvertrauen und Freude ausstrahlen. Diese
                Zertifizierung wird weltweit respektiert. Es ist wichtig zu
                erwähnen, dass für den Erhalt der RYT200-Zertifizierung die
                100%ige Anwesenheit bei allen Kursen Pflicht ist. Nach der
                Yogalehrer-Ausbildung werden einige Online-Videokurse angeboten,
                und auch Hausaufgaben werden entweder während des Kurses
                und/oder danach (abhängig von den Teilnehmer*innen) erteilt.
              </p>
              <p>
                Darüber hinaus nehmen die Teilnehmerinnen der
                Yogalehrerausbildung an mehreren praktischen Übungen (Praktika)
                teil. Wir nennen sie 'Übungen', weil es wichtig ist zu wissen,
                dass ihre Teilnahme an der gesamten Ausbildung bewertet wird und
                nicht nur zu einem bestimmten Zeitpunkt. Es gibt zwar wichtige
                praktische Sitzungen, in denen die Teilnehmerinnen unterrichten
                und Feedback erhalten, aber diese sind nicht der alleinige
                Maßstab für den Fortschritt unserer Teilnehmer*innen. Wir
                bewerten deinen Fortschritt und bieten durch Feedback die
                Möglichkeit zu wachsen. Am Ende der Ausbildung wirst du sehen,
                dass du durch unsere besondere Unterrichtsmethodik und die
                Erfahrung, die wir in den Kurs einbringen und kontinuierlich
                weiterentwickeln, einen großen Entwicklungssprung gemacht hast.
                Du wirst sehen, dass du nach der Ausbildung in der Lage bist,
                Yoga sicher zu unterichten.
              </p>
            </div>
            {/* ============================================== upcoming courses =================================== */}

            {/* ========================================================================================================== */}
            {/* Modal */}
            <div className="youtube_video">
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <iframe
                        id="youtube-video"
                        width={560}
                        height={315}
                        src="https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="youtube_video">
              <div
                className="modal fade"
                id="exampleModal1"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <iframe
                        id="youtube-video"
                        width={560}
                        height={315}
                        src={videoId1}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="youtube_video">
              <div
                className="modal fade"
                id="exampleModal2"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <iframe
                        id="youtube-video"
                        width={560}
                        height={315}
                        src={videoId2}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        style={{
          backgroundColor: "#F9F9F9",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}>
        <div className="container">
          <div
            className="table-responsive index-table"
            style={{ backgroundColor: "#F9F9F9" }}>
            <table
              className="table custom-table aos-init"
              data-aos="zoom-in-up">
              <thead style={{ backgroundColor: "#F9F9F9" }}>
                <tr
                  className="table-heading"
                  style={{ backgroundColor: "#F9F9F9" }}>
                  <th scope="col" style={{ backgroundColor: "#F9F9F9" }}>
                    Ausbildungsorte
                  </th>
                  <th scope="col" style={{ backgroundColor: "#F9F9F9" }}>
                    Datum
                  </th>
                  <th scope="col" style={{ backgroundColor: "#F9F9F9" }}>
                    Ort
                  </th>
                  <th
                    scope="col"
                    className="germany-price"
                    style={{ backgroundColor: "#F9F9F9" }}>
                    Preis/Frühbucher
                  </th>
                  <th scope="col" style={{ backgroundColor: "#F9F9F9" }}>
                    Freie Plätze
                  </th>
                  <th scope="col" style={{ backgroundColor: "#F9F9F9" }}>
                    
                  </th>
                </tr>
              </thead>
              <tbody
                className="table-body desktop"
                style={{ backgroundColor: "#F9F9F9" }}>
                {upcomingCourse &&
                  upcomingCourse.map((item, index) => {
                    console.log("row of upcoming courses", item);

                    return item.Place && item.Place !== "0" ? (
                      <tr style={{ backgroundColor: "#F9F9F9" }} key={index}>
                        <th style={{ backgroundColor: "#F9F9F9" }}>
                          {item.Ausbildung}
                        </th>
                        <td style={{ backgroundColor: "#F9F9F9" }}>
                          <i className="bx bxs-calendar me-1" />
                          {formatDate(item.StartDate)} &nbsp;-&nbsp;
                          <i className="bx bxs-calendar me-1" />
                          {formatDate(item.EndDate)}{" "}
                        </td>
                        <td style={{ backgroundColor: "#F9F9F9" }}>
                          <a href="#" className="location">
                            <i className="bx bxs-map me-1" />

                            {item.Location}
                            {/* Goa, Indien */}
                          </a>
                        </td>
                        <td style={{ backgroundColor: "#F9F9F9" }}>
                          {isOfferValid(item.OfferEndDate) && item.Offerprice > 0 ? (
                            <>
                              <span
                                style={{
                                  color: "#E07542",
                                }}
                              >
                                € {item.Offerprice}
                              </span>
                              <span className="ms-2">
                                <del>€{item.price}</del>
                              </span>
                              <br />
                              <small>
                                Das Angebot endet am{" "}
                                <br />
                                <i className="bx bxs-calendar"></i> {formatDate(item.OfferEndDate)}
                              </small>
                            </>
                          ) : (
                            <span>€{item.price}</span>
                          )}
                        </td>

                        <td
                          style={{
                            backgroundColor: "#F9F9F9",
                            color: item.Place <= 3 ? "#E07542" : "black", // Optional: change text color to white if background is #E07542
                          }}>
                          {item.Place <= 3
                            ? `Noch ${item.Place} Plätze frei`
                            : `Noch ${item.Place} Plätze frei`}
                        </td>

                        <td style={{ backgroundColor: "#F9F9F9" }}>
                          <button
                            onClick={() => handletriggerDialogBox(item._id)}
                            style={{
                              // background-color: #FF5722;

                              backgroundColor:
                                item.Place <= 3 ? "#FF5722" : "#9BBB59",
                              border: "0px solid",
                            }}
                            className="table-btn triggerDialogBox"
                            data-id={9}>
                            ANMELDEN
                          </button>{" "}
                        </td>
                      </tr>
                    ) : null;
                  })}
              </tbody>

              <tbody
                class="table-body mobile"
                style={{ backgroundColor: "#EDEDED" }}>
                {upcomingCourse &&
                  upcomingCourse.map((item, index) => {
                    console.log("row of upcoming courses", item);

                    return item.Place && item.Place !== "0" ? (
                      <tr style={{ backgroundColor: "#F9F9F9" }} key={index}>
                        <th style={{ backgroundColor: "#F9F9F9" }}>
                          {item.Ausbildung}
                        </th>
                        <td style={{ backgroundColor: "#F9F9F9" }}>
                          <i className="bx bxs-calendar me-1" />
                          {formatDate(item.StartDate)} &nbsp;-&nbsp;
                          <i className="bx bxs-calendar me-1" />
                          {formatDate(item.EndDate)}{" "}
                        </td>
                        <td style={{ backgroundColor: "#F9F9F9" }}>
                          <a href="#" className="location">
                            <i className="bx bxs-map me-1" />

                            {item.Location}
                            {/* Goa, Indien */}
                          </a>
                        </td>
                        <td style={{ backgroundColor: "#F9F9F9" }}>
                          {/* {'Frühbucherangebot' + " " + item.Offerprice > 0 ? item.Offerprice : null} */}
                          {item.Offerprice > 0 ? (
                            <>
                              <span
                                style={{
                                  color:
                                    item.Offerprice > 0 ? "#E07542" : "inherit",
                                }}>
                                €{" "}
                                {item.Offerprice > 0
                                  ? item.Offerprice
                                  : item.price}
                              </span>
                            </>
                          ) : null}

                          <span
                            // style={{
                            //   color: item.Offerprice > 0 ? "#E07542" : "inherit",
                            // }}
                            className="ms-2">
                            {item.Offerprice > 0 ? (
                              <del>€{item.price} </del>
                            ) : (
                              <span>€{item.price}</span>
                            )}
                          </span>
                          <br />
                          {item.OfferEndDate ? (
                            <>
                              <small>Das Angebot endet am </small>
                              <small>
                                <br />
                                <i class="bx bxs-calendar"></i>
                                {formatDate(
                                  item.OfferEndDate ? item.OfferEndDate : null
                                )}
                              </small>
                            </>
                          ) : null}
                        </td>

                        <td
                          style={{
                            backgroundColor: "#F9F9F9",
                            color: item.Place <= 3 ? "#E07542" : "black", // Optional: change text color to white if background is #E07542
                          }}>
                          {item.Place <= 3
                            ? `Noch ${item.Place} Plätze frei`
                            : `Noch ${item.Place} Plätze frei`}
                        </td>

                        <td style={{ backgroundColor: "#F9F9F9" }}>
                          <button
                            onClick={() => handletriggerDialogBox(item._id)}
                            style={{
                              // background-color: #FF5722;

                              backgroundColor:
                                item.Place <= 3 ? "#FF5722" : "#9BBB59",
                              border: "0px solid",
                            }}
                            className="table-btn triggerDialogBox"
                            data-id={9}>
                            ANMELDEN
                          </button>{" "}
                        </td>
                      </tr>
                    ) : null;
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Contact />
      <NewsShelter />
    </>
  );
};

export default YogaTraningMallorca;
