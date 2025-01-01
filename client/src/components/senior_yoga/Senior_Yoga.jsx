import React, { useRef, useState, useEffect } from "react";
import "./senior.scss";
import banner from "../../assets/images/senior_yoga/banner.webp";
import SimpleBanner from "../banner/SimpleBanner";
import BannerGlobalWrapper from "../BannerGlobalWrapper";
import Contact from "../Contact";
import NewsShelter from "../NewsShelter";
import Testimonial from "../Testimonial";
import CheckWrapper from "../CheckWrapper";
import ParralaxWrapper from "../ParralaxWrapper";
import dilogImg from "../../assets/images/high-important.png";
import PriceCard from "../price_card/Index";
import SimpleBanner3 from "../banner/SimpleBanner3";
import axios from "axios";
import { BASE_URL_IMAGE,BASE_URL } from "../../config";
const Senior_Yoga = () => {
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

  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }



  useEffect(() => {
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

  //   const payload = {
  //   `<h6>Yin Yogalehrer Ausbildung 60h</h6>
  //   <p>Yin Yoga ist eine Übung für völlige Entspannung und ein weltweites Phänomen. Es ist dafür bekannt, dass praktisch keine Muskelaktivierung erforderlich ist und sanfte Körperhaltungen verwendet werden. Die Auswahl an Haltungen in einem typischen Yin-Yoga-Kurs wird meistens im Sitzen oder Liegen ausgeführt. Dies liegt daran, dass die Körperhaltungen über einen längeren Zeitraum gehalten werden, wodurch verschiedene Körperbereiche (insbesondere Faszien) ohne Anstrengung effektiv gedehnt werden können. Warum ist das wichtig? Es ist für einen Yogalehrer wichtig, auf die Dehnung der Faszien zu achten, da aktuelle Studien Schmerzen im unteren Rücken mit verklebten Faszien in Verbindung gebracht haben.</p>
  //   <p>Unser Yoga-Studio ist durch verschiedene Yoga-Requisiten, die dafür bekannt sind, eine breite und abwechslungsreiche Yin-Technik zu unterstützen, sehr gut vorbereitet. Der Kurs konzentriert sich auf die Entwicklung praktischer Yin-Techniken, die effektiv mit Hatha und Vinyasa kombiniert und verwendet werden können.</p>
  //   <p>Yin Yoga ist ein Teil der Yoga-Praxis, der im Westen florierte, obwohl der Name auf seine Inspiration in der chinesischen Kultur hinweist. Aus dieser Perspektive steht Yin für das weibliche Prinzip, das in allem liegt und sich als Ruhe, Sanftmut und Passivität ausdrückt. Das männliche Prinzip ist Yang, das im Gegensatz dazu eine dynamischere und energischere Natur aufweist.</p>`

  //   ;
  // }

  //   "_id": "67504a2e5afdcc63b9199138",
  //   "courseCategory": "Alle Kommenden Kurse",
  //   "pageUrl": "Alle-kommenden-Yogalehrer-Ausbildungen",
  //   "metaTitle": "Alle kommenden Yogalehrer Ausbildungen",
  //   "metaDescription": "Alle kommenden\\r\\nYogalehrer Ausbildungen",
  //   "metaKeywords": "Alle kommenden\\r\\nYogalehrer Ausbildungen",
  //   "yogaTeamSliderHeading": "Alle kommenden Yogalehrer Ausbildungen",
  //   "yogaTeamSliderParagraph": "Alle Kommenden 200h und 500h Yoga Alliance zertifizierte Yoga Ausbildungen sind unten aufgeführt 16-Tage intensiv 200H Yogalehrer Ausbildungen 8-Tage intensiv 100H Module, Module 1 bis Modul 5!",
  //   "yogaTeamSliderVideoLink": "https://www.youtube.com/watch?v=z6z4-bnDhws",
  //   "yogaTeamSlideImage": "1733315118779-kommende-kurse-bg.webp",
  //   "about_first_section_Heading": "alle Kurse",
  //   "about_first_section_sub_Paragraph": "KURSE IM ÜBERBLICK",
  //   "about_first_section_Paragraph_Content": "<p>Hier findest du alle Termine unserer Yogalehrerausbildungen. Unsere 200h und 500h Yogalehrer Ausbildungen sind international anerkannt und entsprechen den Qualtätskriterien der Yoga Alliance. In der folgende liste sind unsere 16 Tage (200 Std.) oder 8-Tage (100 Std.) Yogalehrerausbildung.</p>\n  <p>In Modul Systemen (Blockausbildungen) aufgelistet. Du kannst dich durch die unten aufgeführten Termine oder im oben aufgeführten Menu über unsere Kurse informieren.</p>\n  <p>Bitte beachte, dass für das Modul 5 mehr als ein Kurs als Alternative angeboten wird. Wir freuen uns aber auch über inspirierende Veranstaltungen, Sondervorträge und andere fröhliche Zusammenkünfte. Wenn du ein Teil der Community sein möchtest und über Veranstaltungen informiert werden möchtest, abonniere einfach unseren Newsletter.</p>\n  <p>* Bei Gesamtbuchung | Blockausbildung M1 - M5 (500h) : 7.390-€ AYA zertifiziert</p>",
  //   "faqs": [
  //       "yogaTeamSliderHeading",
  //       "about_first_section_Heading",
  //       "faqs"
  //   ],
  //   "modules": [
  //       "yogaTeamSliderHeading",
  //       "about_first_section_Heading",
  //       "faqs"
  //   ],
  //   "selectedButton": [
  //       "yogaTeamSliderHeading",
  //       "about_first_section_Heading",
  //       "faqs"
  //   ],
  //   "selectedSections": [
  //       "yogaTeamSliderHeading",
  //       "about_first_section_Heading",
  //       "faqs"
  //   ],
  //   "status": "active",
  //   "createdAt": "2024-12-04T12:25:18.785Z",
  //   "updatedAt": "2024-12-04T12:25:18.785Z",
  //   "__v": 0
  // }

  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [senior_Yoga, setSenior_Yoga] = useState("");

  const fetchData = () => {
    axios
      .get(
        BASE_URL +  "/course_web_page_by_course_category/60H Senioren Yoga"
      )
      .then((response) => {
        console.log("response of senior yoga", response.data);

        if (response.status == 200) {
          const data = response.data;
          console.log("real data", response.data);
          setSenior_Yoga(response.data);

          var imageUrlcustum =
            data && data.yogaTeamSlideImage
              ? BASE_URL_IMAGE + `/images/coursewebpage/${data.yogaTeamSlideImage}`
              : ""; // Fallback image or empty string

          console.log("imageUrlcustum", imageUrlcustum);
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

  //   const payload = {
  //   `<h6>Senioren Yoga Ausbildung 60h</h6><p>Die Faszination für das Praktizieren von Yoga ist inzwischen nicht nur weltweit verbreitet, sondern wird auch von verschiedenen Altersgruppen ausgeübt. Besonders Senioren zeigen ein wachsendes Interesse am Yoga, da es einen gesunden Körper und Geist unterstützt, Kraft aufbaut und gleichzeitig Flexibilität fördert. Dieses Segment im Fachbereich der Yogalehrer ist eines der am schnellsten wachsenden und stellt sowohl eine Chance als auch eine Herausforderung für Yogalehrer dar.</p><p>Yogalehrer (und diejenigen, die sich für das Fachgebiet „Senioren“ interessieren) müssen daher nicht nur verstehen, wie Körper und Geist altern, sondern auch die häufigsten Risiken kennen, die mit verschiedenen Yoga-Praktiken verbunden sind, die in anderen Umgebungen als größtenteils harmlos gelten. Es reicht jedoch nicht aus, informiert, geschult und bewusst im Unterrichten von Senioren zu sein. Der Auszubildende muss auch mit grundlegenden und wesentlichen Informationen zu den häufigsten Gesundheitszuständen wie Arthritis, chronischen Schmerzen, Herzerkrankungen, Osteoporose usw. vertraut sein.</p><p>Zudem ist es entscheidend, zu verstehen, wie Yoga durch Bewegung Heilung und Linderung fördern kann. Es ist wichtig zu erkennen, dass dies nicht nur für Senioren gilt, sondern auch für andere, die Bewegungseinschränkungen haben. Der Kurs basiert hauptsächlich auf medizinischer Evidenz, wobei die traditionellere Perspektive der Praxis natürlich nicht außer Acht gelassen wird.</p>`
  // }

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
      question: "Bekomme ich ein Zertifikat? Welches?",
      answer: [
        "Wenn du NICHT an der 500-stündigen Yogalehrer-Ausbildung teilnimmst:",
        "Nach erfolgreichem Abschluss dieses Kurses erhältst du ein Senior Yoga Ausbildung Zertifikat. Wir sind eine von der Yoga Alliance zertifizierte Schule und dieser Kurs wird auch im Rahmen unserer 500HYogalehrer-Ausbildung angeboten.",
        "Wenn du diesen Kurs im Rahmen Ihrer 500H Yogalehrer Ausbildung belegst:",
      ],
    },
  ];

  const faqItems2 = [
    {
      question: "Was sind die Teilnahmevoraussetzungen?",
      answer: [
        "Teilnahmevoraussetzungen: Mindestalter 18 Jahre. Es wird empfohlen, mindestens das Modul 1 aus unserer Yogalehrer-Ausbildung zu nehmen. Wenn du über ein anerkanntes Zertifikat für eine 200-stündige Yogalehrer-Ausbildung verfügst, sollte dies ausreichen, um das Programm vollständig in Anspruch zu nehmen.",
        "Die Yogalehrer Ausbildung ist für alle körperlichen Konditionsstufen geeignet. Wenn du dich wegen einer besonderen Situation unsicher fühlst, wende dich einfach an uns!",
      ],
    },
  ];

  const faqItems3 = [
    {
      question: "Was werde ich in der Senior Yoga Lehrer Ausbildung lernen?",
      answer: [
        "Du lernst die wesentlichen Bestandteile eines Senior Yoga Kurses kennen und wirst dessen Unterschiede zu einer normalen gemischten Klassenumgebung verstehen. Du wirst auch die Grundlagen der Unterrichtsplanung für Senioren-Yoga verstehen, dabei auf Bewegungseinschränkungen achten und eine gekonnte Methode zum sicheren und effektiven Anpassen von Yogapraktiken üben und integrieren. Auf diese Weise lernen und trainieren wir, wie man verschiedene Requisiten verwendet, um eine erfüllende Senior Yoga-Praxis zu unterstützen - unter Verwendung von Stühlen, Polstern, Blöcken, Gurten usw.",
        "Neben dem Training in einer bestimmten Methode und dem Erlernen des Umgangs mit bestimmten Ressourcen ist es wichtig, die Bedingungen im Auge zu behalten, die möglicherweise nicht so direkt sichtbar sind, aber für den Umgang mit dieser bestimmten Gruppe von entscheidender Bedeutung sind. Mit anderen Worten, unsere Theoriestunden helfen den Schülern, die Grundlagen der Anatomie und Physiologie des Alterns zu verstehen und die körperlichen und geistigen Veränderungen zu erkennen. Es werden daher wichtige Informationen zu den häufigsten Gesundheitsproblemen im Zusammenhang mit dem Altern und der Wechselwirkung von Yoga-Praktiken mit diesen behandelt - Herzproblemen, Osteoporose, Arthritis usw. Indikationen, Kontraindikationen und Vorsichtsmaßnahmen sind daher ein sehr wichtiger Bestandteil dieses Trainings.",
        "Als Teil nicht nur der traditionellen Perspektive, sondern auch der medizinisch fundierten Evidenz dürfen wir nicht vernachlässigen, die Hilfe subtilerer Praktiken wie Pranayama und Meditation zur Aufrechterhaltung eines allgemeinen Wohlbefindens in das Programm aufzunehmen.",
        "Es ist sehr wichtig, hier zu erwähnen, dass dieser Kurs wunderbar zu der soliden Basis passt, die unsere Yogalehrer-Ausbildender in den Modulen 1, 2, 3 und 4 abdecken sollen. Unsere Anatomie- und Physiologie-Sitzungen zu diesen Modulen befassten sich ausführlich mit der Vorgehensweise, wie gemäß unserer Körperanatomie Yoga sicher praktiziert wird und wie vielfältige Yoga-Praktiken das gute Funktionieren unserer verschiedenen inneren Systeme unterstützen (zusätzliche Anmerkung zum Nervensystem, hier!). Der Teilnehmer wird an dieser Stelle auch eine ziemliche Vertrautheit mit dem Umgang mit Hilfsmitteln entwickelt haben, mit einer sichereren Ausrichtung (und Ausrichtungsoptionen!) und die Angst, die Schüler zu berühren, überwunden haben. Schließlich geht es bei der praktischen Unterstützung nicht nur darum, die Körperhaltung zu intensivieren, sondern auch Verletzungen vorzubeugen, die Teilnehmer zu unterstützen, und es dem Körper des Teilnehmers zu ermöglichen, das Beste aus dem Niveau und dem Zustand herauszuholen, in dem er sich im Moment befindet.",
      ],
    },
  ];

  const faqItems4 = [
    {
      question: "Wie sieht mein Tag aus?",
      answer: [
        "Unser Kurs dauert 60 Stunden in 6 Tagen, daher absolvieren wir ungefähr 10 Stunden pro Tag gemäß den Standards der Yoga-Allianz. Von diesen sind ungefähr 4 Stunden pro Tag für Yogapraxis geplant. Keine Sorge, der Kurs ist durchdacht, damit euer Körper nicht überfordert wird und ein großer Teil der Senior-Yoga-Praxis nicht anstrengend wird - obwohl wir mit herausfordernden und straffenden Muskeln arbeiten können. Denkt daran: Ein Kurs in Yoga Alliance dauert 60 Minuten. Innerhalb dieses Kurses dürfen wir 10 Minuten Pause einlegen!",
      ],
    },
  ];

  const faqItems5 = [
    {
      question: "Ablauf Beispiel",
      answer: [
        "Beispiel für einen täglichen Fahrplan",
        "8h - 10h Yogapraxis (Asana, Pranayama und / oder Meditation)",
        "30 Minuten Pause",
        "10.30 - 12.30 Uhr: Theorie (Anatomie & Physiologie)",
        "1h Mittagspause",
        "13.30–15.30 Uhr Training: Techniken und Hilfsmittel",
        "15h30 - 16h30 Unterrichtsmethodik",
        "30 Minuten Pause",
        "17h-19h Übung",
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

  console.log("senior yoga", senior_Yoga);

  return (
    <>
      <div ref={bannerRef}>
        {/* <SimpleBanner2
        banner={banner}
        heading="Senioren Yogalehrer Ausbildung
"
        para="Absolviere deine 500H Yoga-Ausbildung und erhalte ein Turiya Yoga Diplom! Melde dich hier für unsere spezialisierte Senioren-Yogalehrer-Ausbildung an."
        buttonTxt="null"
      /> */}

        <SimpleBanner3
          banner={senior_Yoga && bannerImg}
          heading={senior_Yoga && senior_Yoga.yogaTeamSliderHeading}
          para={senior_Yoga && senior_Yoga.yogaTeamSliderParagraph}
          videoLink={senior_Yoga && senior_Yoga.yogaTeamSliderVideoLink}
        />
      </div>
      <div id="content" className="section">
        <section className="global_wrapper about_wrapper" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="about_wrapper__left" data-aos="fade-up">
                  <h3>
                    {senior_Yoga &&
                      senior_Yoga.about_first_section_sub_Paragraph}
                  </h3>
                  <h1>
                    {" "}
                    {senior_Yoga && senior_Yoga.about_first_section_Heading}
                  </h1>

                  {/* <h3>SPEZIALISIERUNG</h3>
                  <h1>Yogalehrer für Senioren - Ausbildung</h1> */}
                  <div className="kurse_link">
                    {/* Attach event handlers to trigger scroll */}
                    <a onClick={() => scrollToSection(faqRef)}>
                      wichtige info
                    </a>
                    <a onClick={() => scrollToSection(bannerRef)}>termine</a>
                  </div>

                  <p
                    className="p-0"
                    //   style={{
                    //       color: "rgb(33, 37, 41)",
                    //       fontFamily: "Roboto, sans-serif",
                    //       fontSize: 16,
                    // }}

                    dangerouslySetInnerHTML={{
                      __html: senior_Yoga.about_first_section_Paragraph_Content,
                    }}></p>
                  {/* <h6>
                  Senioren Yoga Ausbildung 60h
                  </h6>
                  <p>
                  Die Faszination für das Praktizieren von Yoga ist inzwischen nicht nur weltweit verbreitet, sondern wird auch von verschiedenen Altersgruppen ausgeübt. Besonders Senioren zeigen ein wachsendes Interesse am Yoga, da es einen gesunden Körper und Geist unterstützt, Kraft aufbaut und gleichzeitig Flexibilität fördert. Dieses Segment im Fachbereich der Yogalehrer ist eines der am schnellsten wachsenden und stellt sowohl eine Chance als auch eine Herausforderung für Yogalehrer dar.
                  </p>
                  <p>
                  Yogalehrer (und diejenigen, die sich für das Fachgebiet „Senioren“ interessieren) müssen daher nicht nur verstehen, wie Körper und Geist altern, sondern auch die häufigsten Risiken kennen, die mit verschiedenen Yoga-Praktiken verbunden sind, die in anderen Umgebungen als größtenteils harmlos gelten. Es reicht jedoch nicht aus, informiert, geschult und bewusst im Unterrichten von Senioren zu sein. Der Auszubildende muss auch mit grundlegenden und wesentlichen Informationen zu den häufigsten Gesundheitszuständen wie Arthritis, chronischen Schmerzen, Herzerkrankungen, Osteoporose usw. vertraut sein.
                  </p>

                  <p>
                  Zudem ist es entscheidend, zu verstehen, wie Yoga durch Bewegung Heilung und Linderung fördern kann. Es ist wichtig zu erkennen, dass dies nicht nur für Senioren gilt, sondern auch für andere, die Bewegungseinschränkungen haben. Der Kurs basiert hauptsächlich auf medizinischer Evidenz, wobei die traditionellere Perspektive der Praxis natürlich nicht außer Acht gelassen wird.
                  </p> */}
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
                              
{                              console.log("closest upcoming price",closestUpcomingCourse[0].Offerprice, closestUpcomingCourse[0].price)}
                            {closestUpcomingCourse[0] && closestUpcomingCourse[0].Offerprice ? closestUpcomingCourse[0].Offerprice : closestUpcomingCourse[0].price}€
                            <sub><del style={{color:"rgb(255, 87, 34)",fontSize:"17px",marginLeft:'10px'}}>{ closestUpcomingCourse[0] &&  closestUpcomingCourse[0].Offerprice?closestUpcomingCourse[0].price:null}</del></sub>
                        </h6>
                      </div>
                      <div className="about-date">
                          {
                            closestUpcomingCourse[0] &&
                            closestUpcomingCourse[0].Offerprice?   ( <p>
                            Das Angebot endet am
                            <i className="bx bxs-calendar" />
                            {formatDate(
                              closestUpcomingCourse[0] &&
                                closestUpcomingCourse[0].Offerprice
                                ? closestUpcomingCourse[0].OfferEndDate
                                : null
                            )}
                          </p>):null
                          }
                      
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
                                idx === 1 || idx === 2 ? "normal" : "normal",
                            }}>
                            {paragraph}
                          </span>
                        </p>
                      ))}

                      <p className="mb-3">
                        Zu diesem Zeitpunkt hättest du bereits nach{" "}
                        <strong>Modul 1</strong> und <strong>Modul 2</strong>{" "}
                        das zertifizierte 200-stündige Yogalehrer-Ausbildung
                        Yoga Alliance-Diplom erworben. Danach bist du
                        berechtigt, 500 RYT zu werden, indem du die 300-stündige
                        Yogalehrer-Ausbildung absolvierst, indem du{" "}
                        <strong>Modul 3</strong>, <strong>Modul 4</strong> und{" "}
                        <strong>Modul 5</strong> abschließt.
                      </p>

                      <p className="mb-3">
                        <strong>
                          Der Seniorenkurs ist Teil des Kursangebots der Modul5
                          -Optionen{" "}
                        </strong>
                        und absolviert 60 Stunden der verbleibenden 100 Stunden.
                        Wenn du deine verbleibenden 100 Stunden, von denen der
                        Senior Yoga Kurs 60% abschließt, erfolgreich beendet
                        hast, erhältst du dein 300-Stunden-Zertifikat und kannst
                        dich in der{" "}
                        <strong>Yoga Alliance als RYT 500 registrieren.</strong>
                      </p>

                      <p className="mb-3">
                        Denke daran, dass du bei Turiya Yoga einen Brief
                        anfordern kannst, indem du angeben kannst, was du genau
                        gelernt hast. Wir helfen dir gerne weiter!
                      </p>
                    </div>
                    // ===================================
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

            <div className="faq_heading">
              <h3>Yogausbildungsinhalte & Wichtige Informationen</h3>
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
                      {faq.answer.map((paragraph, idx) => (
                        <p key={idx} className="mb-3">
                          <span
                            style={{
                              fontWeight:
                                idx === 1 || idx === 2 ? "normal" : "normal",
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

            <div className="faq_heading">
              <h3>Tagesablauf</h3>
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
                      {faq.answer.map((paragraph, idx) => (
                        <p key={idx} className="mb-3">
                          <span
                            style={{
                              fontWeight:
                                idx === 1 || idx === 2 ? "normal" : "normal",
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

export default Senior_Yoga;
