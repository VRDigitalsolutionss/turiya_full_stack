import React, { useRef, useState, useEffect } from "react";
import "./module.scss";
import banner from "../../../assets/images/module_img/banner_5.webp";
import SimpleBanner5 from "../../banner/SimpleBanner5";
import BannerGlobalWrapper from "../../BannerGlobalWrapper";
import Contact from "../../Contact";
import NewsShelter from "../../NewsShelter";
import Testimonial from "../../Testimonial";
import CheckWrapper from "../../CheckWrapper";
import ParralaxWrapper from "../../ParralaxWrapper";
import dilogImg from "../../../assets/images/high-important.png";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../../config";

const Index = () => {

  const [closestUpcomingCourse, setClosestUpcomingCourse] = useState("");

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



  const [earlyData, setEarlyData] = useState("");

  const fetchEarlyBirdData = () => {
    axios
      .get(`${BASE_URL}/getClosestUpcomingCourseswithNull`)
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
    fetchNextUpcomingCourse();
  }, []);

  console.log("earlyData", earlyData);

  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [activeIndex3, setActiveIndex3] = useState(null);
  const [activeIndex4, setActiveIndex4] = useState(null);
  const [activeIndex5, setActiveIndex5] = useState(null);
  const [activeIndex6, setActiveIndex6] = useState(null);
  const [activeIndex7, setActiveIndex7] = useState(null);

  const handleToggle = (section, index) => {
    if (section === 1) {
      setActiveIndex1(activeIndex1 === index ? null : index);
    } else if (section === 2) {
      setActiveIndex2(activeIndex2 === index ? null : index);
    }
    if (section === 3) {
      setActiveIndex3(activeIndex3 === index ? null : index);
    } else if (section === 4) {
      setActiveIndex4(activeIndex4 === index ? null : index);
    } else if (section === 5) {
      setActiveIndex5(activeIndex5 === index ? null : index);
    } else if (section === 6) {
      setActiveIndex6(activeIndex6 === index ? null : index);
    } else if (section === 7) {
      setActiveIndex6(activeIndex7 === index ? null : index);
    }
  };

  const faqItems1 = [
    {
      question:
        "Welche Kurse kann ich im Rahmen meiner 500-Stunden-Yogalehrerausbildung belegen (Modul 5)?",
      answer: [
        "Gegenwärtig kannst du folgende abschnitte wählen:",
        "Yin Yoga (60h)",
        "Senior Yoga (60h)",
        "In Vorbereitung sind zwei weitere fantastische Kurse! Und weil sie so speziell sind, brauchen sie noch Zeit in der Yogaschmiede.",
      ],
    },
  ];

  const faqItems2 = [
    {
      question: "Bekomme ich schon ein Zertifikat?",
      answer: [
        "Im Rahmen der 500H Yoga Ausbildung: Zu diesem Zeitpunkt hättest du bereits nach dem Modul 1 und dem Modul 2 das 200-Stunden-Zertifikat der Yogalehrer-Ausbildung Yoga Alliance erworben. Danach bist du berechtigt, 500 RYT zu werden, indem du die 300-stündige Yogalehrer-Ausbildung durch Absolvieren von Modul 3, Modul 4 und Modul 5 absolvierst. Wenn du Modul 5 erfolgreich abgeschlossen hast, erwirbst du dein 300-stündiges Zertifikat und kannst dich registrieren in Yoga Alliance als RYT 500.",
        "Du kannst uns auch einfach ein Schreiben zusenden, indem du angibst, welche Bereiche du weiter studiert hast.",
      ],
    },
  ];

  const faqItems3 = [
    {
      question: "Was sind die Teilnahmevoraussetzungen?",
      answer: [
        "Teilnahmevoraussetzungen: Mindestalter 18 Jahre",
        "Es wird empfohlen, mindestens das Modul 1 und Modul 2 aus unserer Yogalehrer-Ausbildung zu nehmen. Wenn du über ein anerkanntes Zertifikat für eine 200-stündige Yogalehrer-Ausbildung verfügst, sollte dies ausreichen, um das Programm vollständig in Anspruch zu nehmen.",
        "Die Yogalehrer-Ausbildung ist für alle körperlichen Konditionsstufen geeignet. Wenn du dich wegen einer besonderen Situation unsicher fühlst, kontaktiere uns einfach.",
      ],
    },
  ];

  const faqItems4 = [
    {
      question:
        "Was werde ich Ã¼ber die Geschichte und Philosophie des Yoga lernen?",
      answer: [
        "Unsere Yogalehrer-Ausbildungsmodule sind so konzipiert, dass sie nicht nur die Geschichte des Yoga, die Annäherung an die wichtigsten Schriften, sondern auch die wichtigsten philosophischen und metaphysischen Konzepte auf eine greifbare Art und Weise vermitteln. Im Modul 4 wird die Entwicklung des Hatha Yoga vertieft, aber auch ein Blick auf den Yoga in anderen Traditionen wie dem Buddhismus und natürlich auf seine Reise nach Westen geworfen. Außerdem werden wir auf die historischen Dialoge zwischen Yoga und Ayurverda eingehen.",
      ],
    },
  ];

  const faqItems5 = [
    {
      question: "Wie kann ich meine QualitÃ¤ten als Yogalehrer entwickeln?",
      answer: [
        "An diesem Punkt unserer Yogalehrer-Ausbildungsreise werden wir gemeinsam wichtige und essentielle Schritte aufgebaut haben, so dass wir auf die Unterschiede im Unterrichten von Basis-Gruppenstunden, Privatstunden und Klassen im Workshop-Stil eingehen können. Ein Yogalehrer kann neben dem üblichen Studio-/Gymnastikunterricht leicht in den Personal Trainer Bereich, die leitende Retreat-Sphäre oder das Workshop-Universum schweben. Obwohl das eine sehr persönliche Reise ist, soll diese Session einen Überblick über die Besonderheiten dieser Bereiche geben und dir so helfen, deine nächsten Schritte auf deiner Reise zu gestalten, um das zu erfüllen, was du dir als deine Arbeit vorstellst. Unsere Dynamik des Unterrichtens - der Moment, in dem du unterrichtest - basiert auf diesen Bereichen der Entwicklung entsprechend den Interessen der Schüler.",
      ],
    },
  ];

  const faqItems6 = [
    {
      question: "Wie sieht mein Tag aus?",
      answer: [
        "Unser Tagesablauf ist in allen unseren Yogalehrerausbildungen recht ähnlich. Er basiert auf jahrelanger Erfahrung und konzentriert sich darauf, die Wissensaufnahme und -speicherung zu maximieren und gleichzeitig deine Zeit achtsam zu nutzen.",
        "Du magst deinen Yogalehrer-Ausbildungstag als lang empfinden, aber er ist mit Sicherheit erfüllend und was notwendig ist, um die höchsten Standards zu halten und gleichzeitig die Anforderungen der Yoga Alliance Standards zu respektieren. Obwohl die Reihenfolge der Klassen variiert, versuchen wir, die tägliche Yogapraxis am Morgen und am Ende des Tages zu halten. Das bedeutet, dass wir in der Regel 4 Stunden am Tag Yoga üben. Es ist wichtig zu erwähnen, dass der Kurs bereits darauf ausgelegt ist, den Körper nicht zu überfordern und natürlich auch, um die Reise und die Grenzen jedes Einzelnen zu respektieren. Das ist ohnehin essentiell für Yoga",
        "Beispiel eines täglichen Stundenplans",
      ],
    },
  ];

  const faqItems7 = [
    {
      question: "Ablauf Beispiel",
      answer: [
        "7h - 9h Yogapraxis (Asana, Pranayama und/oder Meditation)",
        "Snack-Pause",
        "9h30 - 11h00: Philosophie/ Geschichte",
        "11h-12h30 Unterrichtsmethodik",
        "12h30-13h30 - Mittagessen",
        "13h30 - 15h00 Ausrichtung und Hilfsmittel",
        "15h-16h30 Philosophie/ Geschichte",
        "16h30 - 17h Snack Pause",
        "17h - 18h00 Unterrichtsmethodik",
        "18h - 20h Asana, Pranayama und/oder Meditation",
        "Frage- und Antwortzeit finden in der Regel 2 mal innerhalb des Kurses statt",
        "*Der Schüler absolviert täglich mindestens 11 Yoga Alliance Stunden (50min/Stunde) in unserer Yogalehrerausbildung. Es gibt ein paar Tage, an denen die Ausbildung 12 Stunden umfasst. Nach UE-Standards (45min/Stunde) absolviert der Schüler mehr als 12 Stunden. Von diesen Stunden sind etwa 4 Stunden pro Tag Yogapraxis.",
      ],
    },
  ];

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  // Function to toggle the dialog visibility
  const handletriggerDialogBox = () => {
    setIsDialogVisible(true); // Show the dialog
  };

  // Function to close the dialog
  const closeDialogBox = () => {
    setIsDialogVisible(false); // Hide the dialog
  };

  const handleredirect = () => {
    closeDialogBox(); // Close
    //  onClick="window.location.href='registration.php';"
  };

  const bannerRef = useRef(null);
  const faqRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [mainData, setMainData] = useState("");
  console.log("Mallorca");

  const fetchData = () => {
    axios
      .get(
        // "http://127.0.0.1:7000/api/module_webpages_by_category/200H/AYA Yogalehrer Ausbildung I Mallorca"
        `${BASE_URL}/module_webpages_by_category/Modul 5`
      )
      .then((response) => {
        console.log("response of yoga Himalaya Indien", response.data.data[0]);

        if (response.status == 200) {
          const data = response.data.data[0];
          console.log("real data", response.data.data[0]);
          console.log("banner imggg", data.yogaTeamSlideImage);
          setMainData(response.data.data[0]);

          var imageUrlcustum =
            data && data.yogaTeamSlideImage
              ? `${BASE_URL_IMAGE}/images/modulewebpage/${data.yogaTeamSlideImage}`
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

  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }

  function isOfferValid(offerEndDate) {
    if (!offerEndDate) return false;

    const today = new Date();
    const offerEnd = new Date(offerEndDate);

    return today <= offerEnd;
  }


  return (
    <>
      <div ref={bannerRef}>
        {/* <SimpleBanner
        banner={banner}
        heading="500H Yogalehrer Ausbildung
"
        para="Yin Yoga und Senioren Yoga jeweils über 6 Intensivtage angeboten. Das bedeutet auch, dass du zwei kleinere Kurse kombinieren wirst, um die verbleibenden 100 Stunden zu absolvieren. (Modul5)"
        buttonTxt="null"
        /> */}

        <SimpleBanner5
          banner={bannerImg && bannerImg}
          heading={mainData && mainData.yogaTeamSliderHeading}
          para={mainData && mainData.yogaTeamSliderParagraph}
           buttonTxt="null"
        />
      </div>
      <div id="content" className="section">
        <section className="global_wrapper about_wrapper" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="about_wrapper__left" data-aos="fade-up">
                  {/* <h3>MODUL 3</h3>
                  <h1>Yogalehrer Ausbildung 500H / AYA</h1> */}

                  <h3>
                    {mainData && mainData.about_first_section_sub_Paragraph}
                  </h3>
                  <h1> {mainData && mainData.about_first_section_Heading}</h1>
                  <div className="kurse_link">
                    {/* Attach event handlers to trigger scroll */}
                    <a
                      onClick={() => scrollToSection(faqRef)}
                      style={{ color: "#9bbb59" }}>
                      wichtige info
                    </a>
                    <a
                      onClick={() => scrollToSection(bannerRef)}
                      style={{ color: "#9bbb59" }}>
                      termine
                    </a>
                  </div>

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
                  {/* <h6>
                    8 Intensive Tage (+100 Std.) Yoga Alliance zertifiziert,
                    international anerkannt!
                  </h6>
                  <p>
                    Mit Modul 5 hast du die Möglichkeit, deine
                    500-Stunden-Yogalehrerausbildung erfolgreich abzuschließen,
                    indem du die letzten 100 Stunden absolvierst. Dieses Modul
                    ist speziell darauf ausgelegt, dir die Möglichkeit zu geben,
                    dein Wissen und deine Fähigkeiten in zwei wichtigen
                    Bereichen des Yoga zu vertiefen: Yin Yoga und Senioren Yoga.
                    Beide Trainings, jeweils mit einem Umfang von 60 Stunden,
                    werden in sechs intensiven Tagen angeboten.
                  </p>
                  <p>
                    Durch die Kombination dieser beiden Trainings erhältst du
                    die verbleibenden 100 Stunden, die für den Abschluss deiner
                    500-Stunden-Yogalehrerausbildung erforderlich sind. Diese
                    beiden Kurse zusammen bilden das abschließende Modul deiner
                    Ausbildung und erweitern nicht nur deine Lehrkompetenzen,
                    sondern auch deine Fähigkeit, vielfältigere und kreativere
                    Unterrichtsstile anzubieten.
                  </p>

                  <p>
                    Es ist wichtig zu beachten, dass diese 100 Stunden
                    ausschließlich im Rahmen deiner
                    500-Stunden-Yogalehrerausbildung angerechnet werden.
                    Separate Zertifikate für Yin Yoga und Senioren Yoga werden
                    nicht ausgestellt, da diese beiden Trainings zusammen die
                    abschließenden Komponenten deiner vollständigen
                    500-Stunden-Ausbildung darstellen. Dies stellt sicher, dass
                    deine Ausbildung vollständig und nach den höchsten Standards
                    abgeschlossen wird.
                  </p>
                  <h5>
                    Bei Buchung aller Module M1 – M5 (500h): 7.390 € –
                    AYA-zertifiziert
                  </h5> */}
                </div>
              </div>

              {/* 
                          
                          ===========================================================
                          
                          */}

        
<div className="col-lg-3">
              <div className="about_wrapper__right mb-3">
              {
                    closestUpcomingCourse[0] ? (
                      <div>

                  
                        <h3>{closestUpcomingCourse[0]? closestUpcomingCourse[0].Ausbildung:null}</h3>
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
                            {formatDate(closestUpcomingCourse[0].OfferEndDate)}
                          </p>}
                        <p>
                            <i className="bx bxs-map" />
                            {
                             closestUpcomingCourse[0]? closestUpcomingCourse[0].Location:null  
                            }
                       
                        </p>
                        <p>
                            <i className="bx bxs-calendar" />
                            


                            {/* {
                             closestUpcomingCourse[0]? closestUpcomingCourse[0].StartDate:null + "-" +  closestUpcomingCourse[0]? closestUpcomingCourse[0].EndDate
                             :null
                            } */}
                            {
                            formatDate(closestUpcomingCourse[0]? closestUpcomingCourse[0].StartDate:null) 
                            }
                           <span className="my-2">-</span>  
                            {
                             formatDate(closestUpcomingCourse[0]? closestUpcomingCourse[0].EndDate:null) 
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
              {/* =================================================================== */}
            </div>
          </div>
        </section>
        {/* third section */}
      </div>

      <section className="yin_yoga_faq" ref={faqRef}>
        <div className="container">
          <div className="faq_wrapper__content" data-aos="fade-up">
            <div className="faq_heading">
              <h3>Zertifizierung & Teilnahmevoraussetzung</h3>
            </div>
            {/* Section 1 */}
            <div className="faq_box">
              {faqItems1.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${
                    activeIndex1 === index ? "active" : ""
                  }`}
                  onClick={() => handleToggle(1, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${
                          activeIndex1 === index ? "bx-minus" : "bx-plus"
                        }`}
                      />
                    </div>
                    <h6>{faq.question}</h6>
                  </div>
                  {activeIndex1 === index && (
                    <div className="answer">
                      {faq.answer.map((paragraph, idx) => (
                        <p key={idx} className="mb-3">
                          <span
                            style={{
                              fontWeight:
                                idx === 1 || idx === 2 ? "bold" : "normal",
                            }}>
                            {paragraph}
                          </span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="faq_box">
              {faqItems2.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${
                    activeIndex2 === index ? "active" : ""
                  }`}
                  onClick={() => handleToggle(2, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${
                          activeIndex2 === index ? "bx-minus" : "bx-plus"
                        }`}
                      />
                    </div>
                    <h6>{faq.question}</h6>
                  </div>
                  {/* {activeIndex2 === index && (
                    <div className="answer">
                      {faq.answer.map((paragraph, index) => (
                        <p key={index} className="mb-3">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )} */}

                  {/* =============================================================== */}

                  <div className="answer">

                  <p  className="mb-3">
                  Im Rahmen der 500H Yoga Ausbildung: Zu diesem Zeitpunkt hättest du bereits nach dem <strong>Modul 1 </strong> und dem <strong> Modul 2</strong> das 200-Stunden-Zertifikat der Yogalehrer-Ausbildung <strong>Yoga Alliance</strong>  erworben. Danach bist du berechtigt, 500 RYT zu werden, indem du die 300-stündige Yogalehrer-Ausbildung durch Absolvieren von <strong>Modul 3</strong>, <strong>Modul 4</strong> und <strong> Modul 5</strong> absolvierst. Wenn du Modul 5 erfolgreich abgeschlossen hast, erwirbst du dein 300-stündiges Zertifikat und kannst dich registrieren in Yoga Alliance als RYT 500.
                    </p>
                    <p className="mb-3">
                    Du kannst uns auch einfach ein Schreiben zusenden, indem du angibst, welche Bereiche du weiter studiert hast.

                    </p>
                   
                  </div>
                  
                  {/* ================================================================ */}
                </div>
              ))}
            </div>
            <div className="faq_box">
              {faqItems3.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${
                    activeIndex3 === index ? "active" : ""
                  }`}
                  onClick={() => handleToggle(3, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${
                          activeIndex3 === index ? "bx-minus" : "bx-plus"
                        }`}
                      />
                    </div>
                    <h6>{faq.question}</h6>
                  </div>
                  {activeIndex3 === index && (
                    <div className="answer">
                      {faq.answer.map((paragraph, index) => (
                        <p key={index} className="mb-3">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Section 2 */}
          </div>
        </div>

        {/* -==================================2 ==================================================================== */}

        {/* =============================================== */}
      </section>

  

      {isDialogVisible && (
        <div
          id="modalOverlay"
          className="hiddenOverlayContainer"
          style={{ display: "block" }}>
          <div className="customDialogBox">
            <span className="exitButtonTrigger" onClick={closeDialogBox}>
              ×
            </span>
            <div className="dialogIcon">
              <img src={dilogImg} style={{ width: 80 }} alt />
            </div>
            <p className="mt-3">
              Um den Kauf abzuschließen, musst du dich zuerst einloggen!
            </p>
            <button className="dialogActionButton" onClick={handleredirect}>
              Go to Login/Registrierung.
            </button>
          </div>
        </div>
      )}

      <Testimonial />
      <CheckWrapper />
      <ParralaxWrapper />
      <Contact />
      <NewsShelter />
    </>
  );
};

export default Index;