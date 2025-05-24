import React, { useRef, useState, useEffect } from "react";
import "./module4.scss";
import banner from "../../../assets/images/module_img/banner_4.webp";

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

  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [mainData, setMainData] = useState("");
  console.log("Mallorca");

  const fetchData = () => {
    axios
      .get(
        // "http://127.0.0.1:7000/api/module_webpages_by_category/200H/AYA Yogalehrer Ausbildung I Mallorca"
        `${BASE_URL}/module_webpages_by_category/Modul 4`
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
      setActiveIndex7(activeIndex7 === index ? null : index);
    }
  };

  const faqItems1 = [
    {
      question: "Welches Zertifikat erhalte ich?",
      answer: [
        "Nach Abschluss dieses Moduls der Yogalehrerausbildung erhältst du ein Turiya Yoga Diplom (100-H/ M4). Der erfolgreiche Abschluss dieses Moduls bedeutet, dass du 2/3 deines Weges in der Weiterbildung der 300-H Yogalehrerausbildung abgeschlossen hast und ein 500AYA (Yoga Alliance zertifizierter Lehrer) wirst.",
      ],
    },
  ];

  const faqItems2 = [
    {
      question: "Welche Stile lerne und praktiziere ich in der Ausbildung?",
      answer: [
        "Bis hierhin ist es gut, sich daran zu erinnern, dass wir uns in unseren bisherigen Yogalehrerausbildungen im ersten und zweiten Modul auf Hatha (Traditionell und Modern mit und ohne Requisiten) fokussiert haben, in Modul 2 Vinyasa Flow eingeführt und weiter praktiziert haben, zusammen mit einer besseren Einführung von Ashtanga Vinyasa in Modul 3. Das Modul 4 ist ein Moment der Vertiefung und Weiterentwicklung dieser fließenden Praktiken und der kreativen Möglichkeiten von Vinyasa Flow. Außerdem werden wir die Reihe der Hands-On, Assisting und Alignment Klassen (Teil 3) endlich abschließen, während wir auch spezifische Klassen für Variationen von Inversionen und Armbalancen mit und ohne Requisiten trennen.",
      ],
    },
  ];

  const faqItems3 = [
    {
      question: "Was werde ich Ã¼ber Anatomie und Physiologie lernen?",
      answer: [
        "In unserem Modul 4 der 500RYT Yogalehrerausbildung gehen wir tiefer in Yoga als Mittel zur Unterstützung von Gesundheit und Wohlbefinden, indem wir die Anatomie und Physiologie der subtileren Yogapraktiken verstehen. Hier werden wir z.B. die Grundlagen des Nervensystems und seine Verbindung zur Meditation, die Reinigungstechniken (Kriyas) und die wissenschaftliche Sichtweise auf die Atemtechniken behandeln und deren Wirkung auf Körper und Geist genauer beleuchten.",
        "Es ist wichtig zu wissen, dass wir uns hier bemühen, immer wissenschaftlich fundiertes Wissen über Yogapraktiken und deren Unterstützung für Wohlbefinden und integrative Gesundheit zu vermitteln. Wir bieten keine Yogatherapie-Zertifizierung an, da nach den Standards der Yoga Alliance die Yogalehrerausbildungen den Begriff nicht verwenden dürfen",
        "Um mehr darüber zu erfahren, gehe hier",
      ],
    },
  ];

  const faqItems4 = [
    {
      question:
        "Was werde ich in der Yogageschichte und Yogaphilosophie lernen?",
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
        "Unser Kurs dauert 60 Stunden in 6 Tagen, daher absolvieren wir ungefähr 10 Stunden pro Tag gemäß den Standards der Yoga-Allianz. Von diesen sind ungefähr 4 Stunden pro Tag für Yogapraxis geplant. Keine Sorge, der Kurs ist durchdacht, damit euer Körper nicht überfordert wird und ein großer Teil der Senior-Yoga-Praxis nicht anstrengend wird - obwohl wir mit herausfordernden und straffenden Muskeln arbeiten können. Denkt daran: Ein Kurs in Yoga Alliance dauert 60 Minuten. Innerhalb dieses Kurses dürfen wir 10 Minuten Pause einlegen!",
        "Du magst deinen Yogalehrer-Ausbildungstag als lang empfinden, aber er ist mit Sicherheit erfüllend und was notwendig ist, um die höchsten Standards zu halten und gleichzeitig die Anforderungen der Yoga Alliance Standards zu respektieren. Obwohl die Reihenfolge der Klassen variiert, versuchen wir, die tägliche Yogapraxis am Morgen und am Ende des Tages zu halten. Das bedeutet, dass wir in der Regel 4 Stunden am Tag Yoga üben. Es ist wichtig zu erwähnen, dass der Kurs bereits darauf ausgelegt ist, den Körper nicht zu überfordern und natürlich auch, um die Reise und die Grenzen jedes Einzelnen zu respektieren. Das ist beim Yoga ohnehin essentiell.",
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
        heading="400H Yogalehrer Ausbildung
"
        para="Vertiefe deine Praxis in komplexeren Asanas und lerne, wie du deine Praxis deiner eigenen Teilnehmer zugänglicher machen kannst. Lerne und lass dich von den therapeutischen Aspekten anderer wesentlicher Yoga-übungen wie Reinigungstechniken, Atmung und Meditation inspirieren. (Modul 4)"
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
        <section className="global_wrapper about_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="about_wrapper__left">
                  {/* <h3>MODUL 3</h3>
                  <h1>Yogalehrer Ausbildung +400H / AYA 500</h1> */}

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
                  8 Intensive Tage (+100 Std.) Yoga Alliance zertifiziert, international anerkannt!
                  </h6>
                  <p>
                  Nach Abschluss von Modul 1 bis Modul 3 (oder der 200-Stunden-Yogalehrer-Ausbildung plus Modul 3) bist du bereit, dich in den Lehrinhalten unseres Moduls 4 zu vertiefen. Durchlaufe unseren eindrucksvollen Assistenzkurs und entwickle das Vertrauen, praktische Techniken sicher auf Teilnehmer unterschiedlicher Niveaus anzuwenden – alles in einem intensiven 8-tägigen Modul! Vertiefe deine Praxis in komplexeren Asanas und lerne, wie du sie für deine eigenen Teilnehmer zugänglich machen kannst. Tauche ein und lass dich von den therapeutischen Aspekten weiterer wichtiger Yoga-Übungen wie Reinigungstechniken, Atmung und Meditation inspirieren. Nimm dir Zeit, um die Ausbreitung des Yoga im Westen zu erforschen und zu verstehen, wie er Europa, die USA und große Teile der Welt eroberte. Dadurch erhältst du ein klareres Bild von der enormen Veränderung im Yoga, wobei du die Wurzeln und Hauptaspekte seiner Tradition berücksichtigst.
                  </p>
                  <p>
                  Abschließend wirst du verschiedene berufliche Perspektiven eines Yogalehrers genauer kennenlernen, indem du deine Unterrichtsfähigkeiten über normale Studio-Klassen hinaus ausweitest und weiterentwickelst! Wir unterstützen dich gerne bei der Gestaltung deiner beruflichen Laufbahn, indem wir dich ausführlicher in die Anforderungen und Qualitäten für das Unterrichten von Workshops, privaten Schulungen und Retreats einführen. Sei bereit, einen Schritt weiterzugehen, wähle Modul 5 und werde schließlich ein 500 RYT-Lehrer, indem du die 500-Stunden-Yogalehrer-Ausbildung abschließt.
                  </p>
            
                  <h5>Bei Buchung aller Module M1 – M5 (500h): 7.390 € – AYA-zertifiziert</h5> */}
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
        {/* third section */}
      </div>

      <section className="yin_yoga_faq" ref={faqRef}>
        <div className="container">
          <div className="faq_wrapper__content">
            <div className="faq_heading">
              <h3>Zertifizierung & Teilnahmevoraussetzung</h3>
            </div>
            {/* Section 1 */}
            <div className="faq_box">
              {faqItems1.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${activeIndex1 === index ? "active" : ""
                    }`}
                  onClick={() => handleToggle(1, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${activeIndex1 === index ? "bx-minus" : "bx-plus"
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
                                idx === 2 || idx === 3 ? "bold" : "normal",
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

            {/* Section 2 */}
          </div>
        </div>

        <div className="container">
          <div className="faq_wrapper__content">
            <div className="faq_heading">
              <h3>Yogausbildungsinhalte & Wichtige Informationen</h3>
            </div>

            {/* ======================================================== */}
            <div className="faq_box">
              {faqItems2.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${activeIndex2 === index ? "active" : ""
                    }`}
                  onClick={() => handleToggle(2, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${activeIndex2 === index ? "bx-minus" : "bx-plus"
                          }`}
                      />
                    </div>
                    <h6>{faq.question}</h6>
                  </div>
                  {activeIndex2 === index && (
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
            <div className="faq_box">
              {faqItems3.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${activeIndex3 === index ? "active" : ""
                    }`}
                  onClick={() => handleToggle(3, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${activeIndex3 === index ? "bx-minus" : "bx-plus"
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
            <div className="faq_box">
              {faqItems4.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${activeIndex4 === index ? "active" : ""
                    }`}
                  onClick={() => handleToggle(4, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${activeIndex4 === index ? "bx-minus" : "bx-plus"
                          }`}
                      />
                    </div>
                    <h6>{faq.question}</h6>
                  </div>
                  {activeIndex4 === index && (
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

            <div className="faq_box">
              {faqItems5.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${activeIndex5 === index ? "active" : ""
                    }`}
                  onClick={() => handleToggle(5, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${activeIndex5 === index ? "bx-minus" : "bx-plus"
                          }`}
                      />
                    </div>
                    <h6>{faq.question}</h6>
                  </div>
                  {activeIndex5 === index && (
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
          </div>
        </div>

        <div className="container">
          <div className="faq_wrapper__content">
            <div className="faq_heading">
              <h3>Tagesablauf</h3>
            </div>

            {/* ======================================================== */}

            <div className="faq_box">
              {faqItems6.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${activeIndex6 === index ? "active" : ""
                    }`}
                  onClick={() => handleToggle(6, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${activeIndex6 === index ? "bx-minus" : "bx-plus"
                          }`}
                      />
                    </div>
                    <h6>{faq.question}</h6>
                  </div>
                  {activeIndex6 === index && (
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

            <div className="faq_box">
              {faqItems7.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${activeIndex7 === index ? "active" : ""
                    }`}
                  onClick={() => handleToggle(7, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${activeIndex7 === index ? "bx-minus" : "bx-plus"
                          }`}
                      />
                    </div>
                    <h6>{faq.question}</h6>
                  </div>
                  {activeIndex7 === index && (
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
            {/* ============================================================= */}
          </div>
        </div>

        {/* -==================================2 ==================================================================== */}

        {/* =============================================== */}
      </section>

      {/* <section className="global_wrapper kommende_table"   style={{backgroundColor:"white"}}>
  <div className="container">
    <div className="kommende_table__heading index-table">
      <table className="table aos-init aos-animate" data-aos="zoom-in-up">
        <thead>
          <tr className="table-heading">
            <th scope="col">Ausbildungsorte</th>
            <th scope="col">Datum</th>
            <th scope="col">Ort</th>
            <th scope="col" className="germany-price">Preis/Frühbucher</th>
            <th scope="col">Freie Plätze</th>
            <th scope="col">Kontakt</th>
          </tr>
        </thead>
        <tbody className="table-body"><tr>
            <th>* All Inklusive Yogalehrer Ausbildung M3</th>
            <td><i className="bx bxs-calendar me-1" />15.11.2024&nbsp;-&nbsp;22.11.2024</td>
            <td><a href="#" className="location"><i className="bx bxs-map" />Goa, Indien</a></td>
            <td>€1699</td>
            <td>Noch 5 Plätze frei</td>
            <td><button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={11}     onClick={handletriggerDialogBox}>ANMELDEN</button></td></tr></tbody>
      </table>
    </div>
  </div>
</section> */}

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
