import React, { useRef, useState, useEffect } from "react";
import "./module3.scss";
import banner from "../../../assets/images/module_img/banner_3.webp";

import SimpleBanner3 from "../../banner/SimpleBanner3";
import BannerGlobalWrapper from "../../BannerGlobalWrapper";
import Contact from "../../Contact";
import NewsShelter from "../../NewsShelter";
import Testimonial from "../../Testimonial";
import CheckWrapper from "../../CheckWrapper";
import ParralaxWrapper from "../../ParralaxWrapper";
import dilogImg from "../../../assets/images/high-important.png";
import axios from "axios";
import SimpleBanner from "../../banner/SimpleBanner3";
import { BASE_URL, BASE_URL_IMAGE } from "../../../config";
const Index2 = () => {

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
        console.log("start date", data)
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

  console.log("earlyData", earlyData
  );



  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [mainData, setMainData] = useState("");
  console.log("Mallorca");

  const fetchData = () => {
    axios
      .get(
        // "http://127.0.0.1:7000/api/module_webpages_by_category/200H/AYA Yogalehrer Ausbildung I Mallorca"
        `${BASE_URL}/module_webpages_by_category/Modul 3`
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
      setActiveIndex6(activeIndex7 === index ? null : index);
    }
  };

  const faqItems1 = [
    {
      question: "Welches Zertifikat erhalte ich?",
      answer: [
        "Du erhältst eine Turiya Yoga Zertifizierung (100H/M3). Der erfolgreiche Abschluss dieses Moduls bedeutet, dass du 1/3 deines Weges zur 500-H-Weiterbildung und zum 500H Yoga Alliance zertifizierten Lehrer abgeschlossen hast. Mit anderen Worten, das Modul 3 vervollständigt weitere 100 Stunden zu deiner bestehenden 200-Stunden Yogalehrerausbildung.",
        "Das Modul 1 ist der erste Schritt auf deiner Reise, um Yogalehrer zu werden. Es wird in 8 intensiven Tagen unterrichtet und damit erwirbst du ein Turiya Yoga Basis Zertifikat von 100 Stunden. Um Yogalehrer nach Yoga Alliance zu werden, muss der Schüler dann die geforderten 200 Stunden erfolgreich absolvieren. Hierfür bieten wir das Modul 2 (100 Stunden) an. Es ist gut zu wissen, dass von den 200 Stunden die Yoga Alliance verlangt, dass Schüler und Lehrer 90% dieser Stunden gemeinsam in einer Lernumgebung verbringen.",
      ],
    },
  ];

  const faqItems2 = [
    {
      question: "Welche Stile lerne und praktiziere ich in der Ausbildung?",
      answer: [
        "In diesem Modul unserer Yogalehrerausbildung steigen wir noch tiefer in den Vinyasa Flow und dessen Vater Ashtanga Vinyasa Praxis ein. Wohlgemerkt, obwohl wir auch weiterhin Variationen des Hatha Yoga üben werden. Der Stundenplan vertieft also nicht nur das Gelernte, sondern achtet auch darauf, dass dein Körper nicht mit den üblichen 4 Stunden täglicher Yogapraxis überfordert wird (natürlich sind darin auch Atemtechniken und Meditation enthalten). Wie immer werden auch hier die fließenden Praktiken zugänglich gemacht, während sie immer noch ihre Herausforderung für diejenigen liefern, die bereit dafür sind. Ausrichtung, Einsatz von Requisiten und Hands-on-Techniken für diese fließenden Traditionen werden weiter entwickelt und vervollständigen den Teil 2 unserer Assistenz-Yogalehrer-Ausbildung.",
      ],
    },
  ];

  const faqItems3 = [
    {
      question: "Was werde ich Ã¼ber Anatomie und Physiologie lernen?",
      answer: [
        "Nachdem in den anderen Modulen eine Grundlage für die Asanapraxis gelegt wurde und auch der Umgang mit häufigen Beschwerden angesprochen wurde, ist es hier an der Zeit, tiefer in die Physiologie zu schauen. Ein Überblick über die wichtigsten Systeme wie das Verdauungssystem, das Herz-Kreislauf-System, das endokrine System und das Lymphsystem sowie die wichtigsten Yogapraktiken, die deren Gesundheit unterstützen, stehen im Mittelpunkt dieses Moduls. Alle unsere Module befassen sich mit der Vorbeugung von Verletzungen in den Yogapraktiken, hier nehmen wir uns auch die Zeit, um zu sehen, wie man speziell die üblichen Yoga-Verletzungen anspricht.",
        "Es ist wichtig, sich daran zu erinnern, dass wir uns hier bemühen, immer wissenschaftlich fundiertes Wissen über Yogapraktiken und deren Unterstützung für Wohlbefinden und integrative Gesundheit zu vermitteln. Wir bieten keine Yogatherapie-Zertifizierung an, da nach den Standards der Yoga Alliance die Yogalehrerausbildungen den Begriff nicht verwenden dürfen.",
        "Um mehr darüber zu erfahren, gehe hier",
      ],
    },
  ];

  const faqItems4 = [
    {
      question:
        "Was werde ich Ã¼ber die Geschichte und Philosophie des Yoga lernen?",
      answer: [
        "An diesem Punkt unserer Yogalehrer-Ausbildungsreise sind wir bereit, ein wenig tiefer in das Samkhya einzutauchen und die Grundlagen der Bhagavad Gita zu verstehen - der berühmten Schrift, die normalerweise mit den Pfaden Karma Yoga, Jnana Yoga und Bhakti Yoga in Verbindung gebracht wird - obwohl sie weit mehr als das gibt! Außerdem wirst du in die Tradition des Tantra als wichtigen Hintergrund für die Entwicklung des Hatha Yoga eingeführt, dem wir uns hier ebenfalls nähern, indem wir uns einen Überblick über verschiedene Schriften wie die Hatha Pradipika und die Gheranda Samhita verschaffen. Unsere Methode verbindet ständig die philosophische, metaphysische Entwicklung mit der Geschichte des Yoga und wählt Schlüsselschriften aus, um in die Tiefe zu gehen. Dies ist wichtig, um den Auszubildenden nicht nur ein breites Bild der Entwicklung des Yoga zu vermitteln, sondern auch einen tieferen Einblick und ein tieferes Verständnis dieser Tradition zu ermöglichen, um den höchsten Standard für alle unsere Auszubildenden zu halten.",
      ],
    },
  ];

  const faqItems5 = [
    {
      question:
        "Wie sieht es mit der Entwicklung meiner QualitÃ¤ten als Yogalehrer und meiner Unterrichtserfahrung aus?",
      answer: [
        "In unserer Yogalehrer-Ausbildung lernen wir den Umgang mit speziellen Gruppenpopulationen wie Senioren und Schwangeren (verschiedene Trimester). Wir üben auch den Umgang mit üblichen Beschwerden, Variationen und den erweiterten Einsatz von Requisiten dafür. Als Teil der Erfahrung im Unterrichten von Yoga, werden die Schüler ,neben anderen unterrichtsmethodischen Dynamiken, der praktische Assistent und der leitende Lehrer sein.",
      ],
    },
  ];

  const faqItems6 = [
    {
      question: "Wie sieht mein Tagesablauf aus?",
      answer: [
        "Unser Tagesablauf ist in allen unseren Yogalehrerausbildungen recht ähnlich. Er basiert auf jahrelanger Erfahrung und konzentriert sich darauf, die Wissensaufnahme und -speicherung zu maximieren und gleichzeitig deine Zeit achtsam zu nutzen.",
        "Du magst deinen Yogalehrer-Ausbildungstag als lang empfinden, aber er ist mit Sicherheit erfüllend und was notwendig ist, um die höchsten Standards zu halten und gleichzeitig die Anforderungen der Yoga Alliance Standards zu respektieren. Obwohl die Reihenfolge der Klassen variiert, versuchen wir, die tägliche Yogapraxis am Morgen und am Ende des Tages zu halten. Das bedeutet, dass wir in der Regel 4 Stunden am Tag Yoga üben. Es ist wichtig zu erwähnen, dass der Kurs bereits darauf ausgelegt ist, den Körper nicht zu überfordern und natürlich auch, um die Reise und die Grenzen jedes Einzelnen zu respektieren. Das ist ohnehin essentiell für Yoga",
      ],
    },
  ];

  const faqItems7 = [
    {
      question: "Ablauf Beispiel?",
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
        heading="Yogalehrer Ausbildung +300"
        para="Yogalehrer Ausbildung Basiskurs intensiv in 8 Tagen schon ab 1.399 €! 100H - Turiya Yoga-Diplom zertifiziert."
        buttonTxt=" KUNDENSTIMMEN VIDEO "
      /> */}
        <SimpleBanner3
          banner={bannerImg && bannerImg}
          heading={mainData && mainData.yogaTeamSliderHeading}
          para={mainData && mainData.yogaTeamSliderParagraph}
          videoLink={mainData.yogaTeamSliderVideoLink}
          buttonTxt=" KUNDENSTIMMEN VIDEO"
        />
      </div>
      <div id="content" className="section">
        <section className="global_wrapper about_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="about_wrapper__left">
                  {/* <h3>MODUL 3</h3>
                  <h1>Yogalehrer Ausbildung +300H / AYA 500</h1> */}

                  <h3>
                    {mainData && mainData.about_first_section_sub_Paragraph}
                  </h3>
                  <h1> {mainData && mainData.about_first_section_Heading}</h1>
                  <div className="kurse_link">
                    {/* Attach event handlers to trigger scroll */}
                    <a onClick={() => scrollToSection(faqRef)} style={{ color: "#9bbb59" }}>
                      wichtige info
                    </a>
                    <a onClick={() => scrollToSection(bannerRef)} style={{ color: "#9bbb59" }}>termine</a>
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

                  {/* 
                  <p>
                 Mit Modul 5 hast du die Möglichkeit, deine 500-Stunden-Yogalehrerausbildung erfolgreich abzuschließen, indem du die letzten 100 Stunden absolvierst. Dieses Modul ist speziell darauf ausgelegt, dir die Möglichkeit zu geben, dein Wissen und deine Fähigkeiten in zwei wichtigen Bereichen des Yoga zu vertiefen: Yin Yoga und Senioren Yoga. Beide Trainings, jeweils mit einem Umfang von 60 Stunden, werden in sechs intensiven Tagen angeboten.
                  </p>
                  <p>
                    Durch die Kombination dieser beiden Trainings erhältst du die verbleibenden 100 Stunden, die für den Abschluss deiner 500-Stunden-Yogalehrerausbildung erforderlich sind. Diese beiden Kurse zusammen bilden das abschließende Modul deiner Ausbildung und erweitern nicht nur deine Lehrkompetenzen, sondern auch deine Fähigkeit, vielfältigere und kreativere Unterrichtsstile anzubieten.
                  </p>
                  <p>
                 Es ist wichtig zu beachten, dass diese 100 Stunden ausschließlich im Rahmen deiner 500-Stunden-Yogalehrerausbildung angerechnet werden. Separate Zertifikate für Yin Yoga und Senioren Yoga werden nicht ausgestellt, da diese beiden Trainings zusammen die abschließenden Komponenten deiner vollständigen 500-Stunden-Ausbildung darstellen. Dies stellt sicher, dass deine Ausbildung vollständig und nach den höchsten Standards abgeschlossen wird.
                  </p>
                  
               
                 */}
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
                  onClick={() => handleToggle(6, index)}>
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

      <section
        className="global_wrapper kommende_table"
        style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="kommende_table__heading index-table">
            <table className="table aos-init aos-animate" data-aos="zoom-in-up">
              <thead>
                <tr className="table-heading">
                  <th scope="col">Ausbildungsorte</th>
                  <th scope="col">Datum</th>
                  <th scope="col">Ort</th>
                  <th scope="col" className="germany-price">
                    Preis/Frühbucher
                  </th>
                  <th scope="col">Freie Plätze</th>
                  <th scope="col">Kontakt</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <th>* All Inklusive Yogalehrer Ausbildung M3</th>
                  <td>
                    <i className="bx bxs-calendar me-1" />
                    15.11.2024&nbsp;-&nbsp;22.11.2024
                  </td>
                  <td>
                    <a href="#" className="location">
                      <i className="bx bxs-map" />
                      Goa, Indien
                    </a>
                  </td>
                  <td>€1699</td>
                  <td>Noch 5 Plätze frei</td>
                  <td>
                    <button
                      className="table-btn triggerDialogBox"
                      style={{ border: "0px solid" }}
                      data-id={11}
                      onClick={handletriggerDialogBox}>
                      ANMELDEN
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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

export default Index2;