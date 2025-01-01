import React, { useRef, useState, useEffect } from "react";
import "./module2.scss";
import banner from "../../../assets/images/module_img/module_2_banner.webp";
import SimpleBanner from "../../banner/SimpleBanner";
import SimpleBanner3 from "../../banner/SimpleBanner3";
import BannerGlobalWrapper from "../../BannerGlobalWrapper";
import Contact from "../../Contact";
import NewsShelter from "../../NewsShelter";
import Testimonial from "../../Testimonial";
import CheckWrapper from "../../CheckWrapper";
import ParralaxWrapper from "../../ParralaxWrapper";
import axios from "axios";
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
      setActiveIndex7(activeIndex7 === index ? null : index);
    }
  };

  const faqItems1 = [
    {
      question:
        "Welches Zertifikat bekomme ich? Kann ich nach Modul 2 unterrichten?",
      answer: [
        "Du erhältst ein Turiya Yoga Zertifikat, das von der Yoga Alliance zertifiziert und anerkannt ist. Mit diesem Zertifikat kannst du dich in diese weltweite Gemeinschaft von Yogalehrern eintragen und natürlich auch Yoga unterrichten. Das 200-Stunden-Zertifikat ist international anerkannt und ist eine bekannte Voraussetzung, um Yoga in Studios und Fitnessstudios zu unterrichten. Es ist wichtig zu wissen, dass von den Schülern verlangt wird, die Klassen zu besuchen, Engagement zu zeigen und die wichtigsten Themen aufzunehmen. Wir sind nicht Teil einer heutzutage sehr präsenten ahnungslosen Gemeinschaft, die einfach Zertifikate verteilt. So sind wir in der Lage, unsere hohen Standards zu halten. Auf der anderen Seite ist es wichtig zu wissen, dass die Schüler in diesem Modul keine traditionellen Prüfungen ablegen, sondern ständig von den leitenden Lehrern unterstützt, bewertet und angeleitet werden. Es ist so einfach: Wenn du wirklich interessiert bist, den Unterricht besuchst und aufpasst, gibt es nichts zu befürchten.",
        "Wenn du bereit bist, nicht nur dein Wissen, deine Erfahrung und deine Möglichkeiten zu erweitern, kannst du weiter studieren und die Reise der 500 Stunden Yogalehrerausbildung mit Modul 3, 4 und 5 abschließen. Diese umfassen zusammen die. weiteren 300 Stunden, die es dir zusätzlich zu deinen dann bestehenden 200 Stunden Yogalehrerausbildung (nach Modul 2) ermöglichen, dich bei der yoga alliance als 500RYT anzumelden. Ein großer praktischer Vorteil als 500h-Lehrer in Deutschland ist, dass deine Schüler einen Teil ihres Unterrichts bei dir von der Krankenkasse finanziert bekommen können.",
      ],
    },
  ];

  const faqItems2 = [
    {
      question: "Welche Yogastile lerne und praktiziere ich in der Ausbildung?",
      answer: [
        "Du wirst deine Entwicklung im traditionellen und modernen Hatha Yoga fortsetzen, wobei du in die zeitgenössische Version und den ausgiebigen Einsatz von Requisiten tiefer einsteigst. Es ist ein wichtiger Moment in der Yogalehrerausbildung 200h, wenn wir nicht nur tiefer in die Hilfsmittel gehen. Hier schaffen wir die Möglichkeit, mit ihrer Hilfe die Auswirkungen der verschiedenen Körperhaltungen auf Körper, Geist und Emotionen deutlicher wahrzunehmen. Das geschieht dadurch, dass wir sicher länger in Schlüsselhaltungen verweilen können, die das Potential der verschiedenen Praktiken verdeutlichen.",
        "Nebenbei wirst du systematisch in den Vinyasa Flow eingeführt und bekommst einen Einblick in den Vater dieses Stils, Ashtanga Vinyasa. Wichtig ist, dass die fließenden Praktiken in allen unseren Yogalehrerausbildungen zugänglich gemacht werden. Das gilt nicht nur für dich als Auszubildenden, sondern auch für deine zukünftigen Schüler. Diese Vorgehensweise ist von entscheidender Bedeutung und wird in eine Reihe von Klassen von Alignment, Assisting und Hands-on Assisting aufgeteilt. Diese Klassen nähern sich den Schlüsselstellungen und umfassen Teil 1 des Assisting-Kurses in unseren Yogalehrer-Ausbildungen.",
      ],
    },
  ];

  const faqItems3 = [
    {
      question: "Was werde ich Ã¼ber Anatomie und Physiologie lernen?",
      answer: [
        "Du beendest die Einheit Anatomie und Physiologie, die das grundlegende Wissen für das sichere Unterrichten der wichtigsten Yoga-Asanas (und ihrer umfangreichen Variationen) betrifft. Wir werden eine wertvolle Zeit damit verbringen, die Anatomie hinter z.B. Vorwärtsbeugen, Rückbeugen, Drehungen und anderen wichtigen Aspekten innerhalb der Yoga-Asana-Praxis funktionell zu behandeln. Hier werden wir auch bereits das Studium der Atemtechniken einführen, die in der Yogatradition von zentraler Bedeutung sind und die in einer Yogalehrerausbildung 200h nicht fehlen dürfen. Denke daran, dass wie immer auch die Kontraindikationen und die präventiven Aspekte, die eine wichtige Yogapraxis mit sich bringt, mit diesen Themen angesprochen werden. Dieses Studium ist wichtig, um den Anforderungen des Marktes als Yogalehrer gerecht zu werden, es leitet dich an, ein Yogalehrer mit hohen Standards zu werden, der eine zeitgemäße Perspektive einnimmt. Aus diesem Grund liefern wir noch mehr, als die Standards der Yoga Alliance verlangen.",
      ],
    },
  ];

  const faqItems4 = [
    {
      question:
        "Was werde ich Ã¼ber die Geschichte und Philosophie des Yoga lernen?",
      answer: [
        "In diesem Modul unserer Yogalehrerausbildung nähern wir uns dem klassischen Yoga, speziell der als Patanjali Yoga Sutras bekannten Schrift. Der 8-Glieder-Pfad (Yoga Sutras) wird mit Aufmerksamkeit betrachtet, während wir auch verstehen, in welcher Weise er mit der heutigen und früheren Yogapraxis verbunden ist. In diesem Modul werden wir auch einen Einblick in das Tantra als Hintergrund des Hatha Yoga haben und uns den Hauptkonzepten des hatha yogischen Weges wie Kundalini, Susumna, Nadis/Energiekanäle, Mudras, usw. nähern. Die Themen werden so behandelt, dass nicht nur die Philosophie, die Metaphysik, sondern auch die geschichtliche Entwicklung mit einbezogen wird. Die Turiya Yoga Akademie legt großen Wert auf die Tradition, aber auch auf die wissenschaftliche Sichtweise der Yogapraxis. Die Philosophie hilft uns, inspiriert zu praktizieren und die Praxis inspiriert uns, weiter Philosophie zu studieren - wir glauben an diesen Tugendkreis in unserer Yoga-Gemeinschaft und arbeiten daran, auch dich zu inspirieren.",
      ],
    },
  ];

  const faqItems5 = [
    {
      question:
        "Wie sieht es mit der Entwicklung meiner QualitÃ¤ten als Yogalehrer aus? Werde ich Erfahrung im Unterrichten haben?",
      answer: [
        "Das Modul 2 ermöglicht es dem Schüler, tiefer in die Unterrichtsstrategien des Yoga hineinzuwachsen. Allgemeine Grundlagen der Kommunikation, die verschiedenen Arten des Lernens sowie die Prinzipien von Instruktion, Demonstration, Beobachtung und Assistenz werden nicht nur angesprochen, sondern auch geübt. Wir nehmen uns Zeit und schaffen eine Umgebung, in der die Schüler die Erfahrung machen können, alleine und mit anderen zu unterrichten und dabei nicht nur die Möglichkeit haben, nützliches Feedback zu erhalten, sondern auch Vertrauen aufzubauen. Zusätzlich zu all dem ist es notwendig, die Grundlagen des Sequencing im Vinyasa Flow abzudecken (besonders für Anfänger & Mittelstufe). Wissen und Selbstvertrauen ermöglicht es dem Schüler, sein volles Potential zu erreichen und letztendlich inspirierende Yogaklassen auf hohem Niveau zu geben.",
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
        "12h30-13h30 - Mittagessen ",

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

  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [mainData, setMainData] = useState("");
  console.log("Mallorca");

  const fetchData = () => {
    axios
      .get(
        // "http://127.0.0.1:7000/api/module_webpages_by_category/200H/AYA Yogalehrer Ausbildung I Mallorca"
        BASE_URL + `/module_webpages_by_category/Modul 2`
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

  const bannerRef = useRef(null);
  const faqRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const payload = {
  //   `<h5>8 Intensive Tage (+100 Std.) Yoga Alliance zertifiziert, international anerkannt!</h5>
  //   <p>Nach Abschluss von Modul 1 haben die Teilnehmer die Möglichkeit, Modul 2 zu besuchen. Modul 2 führt zur Erlangung der 200-Stunden AYA Yogalehrer Ausbildung. Diese 8 Tage vertiefen nicht nur dein Wissen und deine Praxis, sondern legen auch eine solide Grundlage für den Yogapfad und seine Weitergabe. Es ermöglicht dir, ein international anerkannter Yogalehrer zu werden – ein wundervoller Moment auf deiner Yoga-Ausbildungsreise. In diesem Modul werden wichtige Themen wie funktionale Anatomie, inspirierende Philosophie und Lehrfähigkeiten behandelt, die es dir ermöglichen, unterschiedliche Niveaus und Anforderungen im Unterricht zu meistern. Teilnehmer können nach erfolgreichem Abschluss bereits ihr 200-Stunden-Yoga Alliance-zertifiziertes Turiya Yoga-Diplom erhalten.</p><p>Unsere +200-Stunden-Yogalehrer Ausbildung entspricht dem höchsten Standard auf dem Markt, wie jeder andere Kurs in der Turiya Yoga-Akademie. Höchste Qualität, die Verbindung zur Yoga-Tradition und gleichzeitig eine westliche, nicht dogmatische Perspektive bilden unsere Grundlage. Wir schaffen ein angenehmes und liebevolles Umfeld, in dem jeder Auszubildende individuell unterrichtet wird und seine eigenen Fähigkeiten optimal einbringen kann. Wenn du daran interessiert bist, ein 500 RYT-Lehrer zu werden, heißen wir dich in unseren anderen Yogalehrer-Ausbildungsmodulen (Modul 3, Modul 4 und Modul 5) herzlich willkommen.</p><p>* Bei Gesamtbuchung | Blockausbildung M1 - M5 (500h) : 7.390 € AYA zertifiziert</p>`
  // }

  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }

  return (
    <>
      <div ref={bannerRef}>
        {/* <SimpleBanner
          banner={banner}
          heading="Yogalehrer Ausbildung
auf höchstem Niveau"
          para="8 Tage Hatha - Vinyasa Yogalehrer Intensivausbildung 200H - AYA zertifiziert ab 2.099 €.   "
          buttonTxt="  KUNDENSTIMMEN VIDEO "
        /> */}

        <SimpleBanner3
          banner={bannerImg && bannerImg}
          heading={mainData.yogaTeamSliderHeading}
          para={mainData.yogaTeamSliderParagraph}
          videoLink={mainData.yogaTeamSliderVideoLink}
          buttonTxt="KUNDENSTIMMEN VIDEO"
        />
      </div>
      <div id="content" className="section">
        <section className="global_wrapper about_wrapper" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="about_wrapper__left" data-aos="fade-up">
                  {/* <h3>MODUL 1</h3>
                  <h1>Yogalehrer Ausbildung 200H / AYA</h1> */}

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
                    Nach Abschluss von Modul 1 haben die Teilnehmer die
                    Möglichkeit, Modul 2 zu besuchen. Modul 2 führt zur
                    Erlangung der 200-Stunden AYA Yogalehrer Ausbildung. Diese 8
                    Tage vertiefen nicht nur dein Wissen und deine Praxis,
                    sondern legen auch eine solide Grundlage für den Yogapfad
                    und seine Weitergabe. Es ermöglicht dir, ein international
                    anerkannter Yogalehrer zu werden – ein wundervoller Moment
                    auf deiner Yoga-Ausbildungsreise. In diesem Modul werden
                    wichtige Themen wie funktionale Anatomie, inspirierende
                    Philosophie und Lehrfähigkeiten behandelt, die es dir
                    ermöglichen, unterschiedliche Niveaus und Anforderungen im
                    Unterricht zu meistern. Teilnehmer können nach erfolgreichem
                    Abschluss bereits ihr 200-Stunden-Yoga
                    Alliance-zertifiziertes Turiya Yoga-Diplom erhalten.
                  </p>
                  <p>
                    Unsere +200-Stunden-Yogalehrer Ausbildung entspricht dem
                    höchsten Standard auf dem Markt, wie jeder andere Kurs in
                    der Turiya Yoga-Akademie. Höchste Qualität, die Verbindung
                    zur Yoga-Tradition und gleichzeitig eine westliche, nicht
                    dogmatische Perspektive bilden unsere Grundlage. Wir
                    schaffen ein angenehmes und liebevolles Umfeld, in dem jeder
                    Auszubildende individuell unterrichtet wird und seine
                    eigenen Fähigkeiten optimal einbringen kann. Wenn du daran
                    interessiert bist, ein 500 RYT-Lehrer zu werden, heißen wir
                    dich in unseren anderen Yogalehrer-Ausbildungsmodulen (Modul
                    3, Modul 4 und Modul 5) herzlich willkommen.
                  </p>

                  <h5>
                    * Bei Gesamtbuchung | Blockausbildung M1 - M5 (500h) : 7.390
                    € AYA zertifiziert
                  </h5> */}
                </div>
              </div>
              <div className="col-lg-3">
              <div className="about_wrapper__right mb-3">
              {
                    closestUpcomingCourse[0] ? (
                      <div>

                  
                        <h3>{closestUpcomingCourse[0]? closestUpcomingCourse[0].Ausbildung:null}</h3>
                      <div className="price-tag">
                      <h6>
                              <i className="bx bxs-purchase-tag" />
                              
{                              console.log("closest upcoming price",closestUpcomingCourse[0].Offerprice, closestUpcomingCourse[0].price)}
                            {closestUpcomingCourse[0] && closestUpcomingCourse[0].Offerprice ? closestUpcomingCourse[0].Offerprice : closestUpcomingCourse[0].price}€
                            <sub><del style={{color:"rgb(255, 87, 34)",fontSize:"17px",marginLeft:'10px'}}>{ closestUpcomingCourse[0] &&  closestUpcomingCourse[0].Offerprice?closestUpcomingCourse[0].price:null}</del></sub>
                        </h6>
                      </div>
                      <div className="about-date">
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
          <div className="faq_wrapper__content" data-aos="fade-up">
            <div className="faq_heading">
              <h3>Yogausbildungsinhalte & Wichtige Informationen</h3>
            </div>

            {/* ======================================================== */}
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
            <div className="faq_box">
              {faqItems4.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${
                    activeIndex4 === index ? "active" : ""
                  }`}
                  onClick={() => handleToggle(4, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${
                          activeIndex4 === index ? "bx-minus" : "bx-plus"
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

            {/* ============================================================= */}
          </div>
        </div>

        <div className="container">
          <div className="faq_wrapper__content" data-aos="fade-up">
            {/* ======================================================== */}

            <div className="faq_box">
              {faqItems5.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${
                    activeIndex5 === index ? "active" : ""
                  }`}
                  onClick={() => handleToggle(5, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${
                          activeIndex5 === index ? "bx-minus" : "bx-plus"
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
            <div className="faq_heading">
              <h3>Tagesablauf</h3>
            </div>
            <div className="faq_box">
              {faqItems6.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${
                    activeIndex6 === index ? "active" : ""
                  }`}
                  onClick={() => handleToggle(6, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${
                          activeIndex6 === index ? "bx-minus" : "bx-plus"
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

            {/* ============================================================= */}
            <div className="faq_box">
              {faqItems7.map((faq, index) => (
                <div
                  key={index}
                  className={`faq_box__content ${
                    activeIndex7 === index ? "active" : ""
                  }`}
                  onClick={() => handleToggle(7, index)}>
                  <div className="question">
                    <div className="plus">
                      <i
                        className={`bx ${
                          activeIndex7 === index ? "bx-minus" : "bx-plus"
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
          </div>
        </div>

        {/* -==================================2 ==================================================================== */}

        {/* =============================================== */}
      </section>
      <Testimonial />
      <CheckWrapper />
      <ParralaxWrapper />
      <Contact />
      <NewsShelter />
    </>
  );
};

export default Index2;
