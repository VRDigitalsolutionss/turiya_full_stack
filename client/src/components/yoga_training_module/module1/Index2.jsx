// import React, { useRef, useState,useEffect } from "react";
// import "./module1.scss";
// import banner from "../../../assets/images/module_img/banner.webp";
// import SimpleBanner3 from "../../banner/SimpleBanner3";
// import BannerGlobalWrapper from "../../BannerGlobalWrapper";
// import Contact from "../../Contact";
// import NewsShelter from "../../NewsShelter";
// import Testimonial from "../../Testimonial";
// import CheckWrapper from "../../CheckWrapper";
// import ParralaxWrapper from "../../ParralaxWrapper";
// import axios from 'axios'
// import { BASE_URL,BASE_URL_IMAGE } from "../../../config";

// const Index2 = () => {


//   const [earlyData, setEarlyData] = useState("");

//   const fetchEarlyBirdData = () => {
//     axios
//       .get(BASE_URL + "/getClosestUpcomingCourseswithNull")
//       .then((response) => {
//         console.log("respnse of fetchEarlyBirdData", response.data.data[0]);
//         const data = response.data.data[0];
//         const startDate = data && data.StartDate;
//         console.log("start date",data)
//         setEarlyData(response.data.data[0]);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//       });
//   };

//   useEffect(() => {
//     fetchEarlyBirdData();
//   }, []);

//   console.log("earlyData", earlyData
//   );

  
//   // const payload = {
//   //   `<h5>8 Intensive Tage (100 Std. ) nach 200h AYA zertifiziert!</h5>
//   //   <p>Dieser Basiskurs startet mit intensivem Lernen, Praktizieren und dem Erleben von Yoga mit Gleichgesinnten über 8 Tage. Es ist wichtig zu betonen, dass dieses Modul für alle körperlichen Konditionsstufen geeignet ist. Unsere 100-Stunden-Yogalehrer-Ausbildung bietet eine einzigartige Gelegenheit, eine solide und fundierte Grundlage für die Yogalehrerausbildung zu schaffen, deine eigene Yogapraxis zu vertiefen und natürlich herauszufinden, ob die Arbeit als Yogalehrer zu dir passt. Es ist eine großartige Möglichkeit, tiefer in den umfassenden und wissenschaftlich fundierten Pfad des Yoga einzutauchen, der Gesundheit und inneres Gleichgewicht miteinander verbindet.</p>
//   //   <p>Unsere 100-Stunden-Yogalehrer-Ausbildung entspricht den höchsten Standards auf dem Markt, genauso wie jeder andere Kurs in der Turiya Yoga-Akademie. Höchste Qualitätsniveaus, die Verbindung zur Yoga-Tradition und gleichzeitig eine westliche, nicht dogmatische Perspektive bilden unsere Grundprinzipien. Du hast die Möglichkeit, nicht nur unsere Methode, sondern auch unsere Yoga-Community kennenzulernen, ohne viel Geld oder Zeit zu investieren. All dies geschieht unter der Anleitung unserer erfahrenen und engagierten Lehrer, die deine persönliche Entwicklung im Auge behalten. Dies ist von entscheidender Bedeutung, wenn du dich unserer Community für die 5-Module der 500-Stunden-Yogalehrer-Ausbildung anschließt.</p><h5>Bei Buchung aller Module M1 – M5 (500h): 7.390 € – AYA-zertifiziert</h5>`
//   // }Modul 1

//   const [bannerImg, setBannerImg] = useState("");

//   const [galleries, setGalleries] = useState("");
//   const [mainData, setMainData] = useState("");
//   console.log("Mallorca");


//   const fetchData = () => {
//     axios
//       .get(
//       // "http://127.0.0.1:7000/api/module_webpages_by_category/200H/AYA Yogalehrer Ausbildung I Mallorca"
//       BASE_URL +
// `/module_webpages_by_category/Modul 1`
//       )
//       .then((response) => {
//         console.log("response of yoga Himalaya Indien", response.data.data[0]);

//         if (response.status == 200) {
//           const data = response.data.data[0];
//           console.log("real data", response.data.data[0]);
//           console.log("banner imggg", data.yogaTeamSlideImage);
//           setMainData(response.data.data[0]);

//           var imageUrlcustum =
//             data && data.yogaTeamSlideImage
//               ? BASE_URL_IMAGE + `/images/modulewebpage/${data.yogaTeamSlideImage}`
//               : ""; // Fallback image or empty string

//           setBannerImg(imageUrlcustum);
//         }
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);


//   console.log("all courses data", mainData, bannerImg);
//   console.log("banner image", bannerImg);
// console.log("main data", mainData);
//   const [activeIndex1, setActiveIndex1] = useState(null);
//   const [activeIndex2, setActiveIndex2] = useState(null);
//   const [activeIndex3, setActiveIndex3] = useState(null);
//   const [activeIndex4, setActiveIndex4] = useState(null);
//   const [activeIndex5, setActiveIndex5] = useState(null);
//   const [activeIndex6, setActiveIndex6] = useState(null);
//   const [activeIndex7, setActiveIndex7] = useState(null);

//   const handleToggle = (section, index) => {
//     if (section === 1) {
//       setActiveIndex1(activeIndex1 === index ? null : index);
//     } else if (section === 2) {
//       setActiveIndex2(activeIndex2 === index ? null : index);
//     }
//     if (section === 3) {
//       setActiveIndex3(activeIndex3 === index ? null : index);
//     } else if (section === 4) {
//       setActiveIndex4(activeIndex4 === index ? null : index);
//     } else if (section === 5) {
//       setActiveIndex5(activeIndex5 === index ? null : index);
//     }
//     else if (section === 6) {
//       setActiveIndex6(activeIndex6 === index ? null : index);
//     }
//     else if (section === 7) {
//       setActiveIndex7(activeIndex7 === index ? null : index);
//     }
//   };

//   const faqItems1 = [
//     {
//       question:
//         "Bekomme ich bereits ein Zertifikat? Kann ich nach Modul 1 unterrichten??",
//       answer: [
//         "Viele Schulen behaupten, dass man nach einer 100-stündigen Yogalehrer-Ausbildung unterrichten kann, aber die Wahrheit ist, dass Yogastudios und Gyms in der Regel nicht bereit sind, jemanden einzustellen, ohne dass man eine Yogalehrer-Ausbildung absolviert hat, die von der Yoga Alliance zertifiziert ist (was natürlich 200 Stunden erfordert). Turiya Yoga gibt und hält einen wirklich hohen Standard und aus Erfahrung wissen wir, dass die große Mehrheit der Schüler wirklich die 200 Stunden benötigt, um sicher unterrichten zu können und an verschiedenen Fähigkeiten teilnehmen zu können (auch als Anfänger!).",
//         "Das Modul 1 ist der erste Schritt auf deiner Reise, um Yogalehrer zu werden. Es wird in 8 intensiven Tagen unterrichtet und damit erwirbst du ein Turiya Yoga Basis Zertifikat von 100 Stunden. Um Yogalehrer nach Yoga Alliance zu werden, muss der Schüler dann die geforderten 200 Stunden erfolgreich absolvieren. Hierfür bieten wir das Modul 2 (100 Stunden) an. Es ist gut zu wissen, dass von den 200 Stunden die Yoga Alliance verlangt, dass Schüler und Lehrer 90% dieser Stunden gemeinsam in einer Lernumgebung verbringen.",
//       ],
//     },
//   ];

//   const faqItems2 = [
//     {
//       question:
//         "Was werde ich Ã¼ber Anatomie und Physiologie lernen?",
//       answer: [
//         "Im ersten Teil der Yogalehrerausbildung wirst du Anatomie und Physiologie in Bezug auf die Hauptgelenke und die Wirbelsäule kennenlernen, d.h. wir behandeln die wichtigsten Bewegungsabläufe und wie du verschiedene Kategorien von Asanas sicher üben kannst. Der Fokus des Moduls 1 und eines Teils des Moduls 2 unserer Yogalehrerausbildung liegt auf den Yogastellungen und wie man sie sicher mit und ohne den Einsatz von Requisiten praktiziert. Ebenfalls essentiell für das Teilen einer sicheren Yogapraxis ist die Ausrichtung, die eine starke Säule unserer Kurse ist. Diese Schwerpunkte unserer Yogalehrerausbildung kommen als Antwort auf die Anforderungen der heutigen Arbeit als Yogalehrer. Typischerweise unterrichten Yogalehrer Klassen, die sich überwiegend um die Haltungen der Yogapraxis drehen. Wir nehmen uns hier sehr viel Zeit, um diese Session verständlich und funktional zu gestalten.",
//       ],
//     },
//   ];

//   const faqItems3 = [
//     {
//       question:
//         "Was werde ich in der Yogageschichte und Yogaphilosophie lernen?",
//       answer: [
//         "Unsere Yogalehrerausbildung geht in jedem Modul in verschiedene Themen tiefer. Ein Überblick über die Geschichte des Yoga ist wichtig! Das Modul 1 beginnt damit, ein grobes Bild von den Wurzeln des Yoga zu zeichnen und gibt einen Überblick über die wichtigsten Veränderungen innerhalb dieser Tradition der Praxis. In dieser Yogalehrer-Ausbildung nehmen wir uns Zeit, um uns wichtigen Konzepten innerhalb der Veden und der inspirierenden Upanisaden zu nähern und führen in die Samkhya-Philosophie und Vedanta ein. Samkhya ist die Grundlage für das Verständnis der essentiellen klassischen Schriften, die als Yoga Sutras bekannt sind, während Vedanta der Schlüssel zum Verständnis der vorherrschenden Sichtweise des Yoga heute ist. Sich die Zeit zu nehmen, auf verschiedene Schlüsselmomente in der Geschichte durch bestimmte Schriften einzugehen, ist wichtig, um die Yogatradition zu verstehen und wo wir heute als Yogalehrer (und werdende Yogalehrer) stehen.",
//       ],
//     },
//   ];

//   const faqItems4 = [
//     {
//       question:
//         "Wie sieht es mit der Entwicklung meiner QualitÃ¤ten als Yogalehrer aus? Werde ich Erfahrung im Unterrichten haben",
//       answer: [
//         "Sicherlich, da es sich um eine Yoga-Ausbildung handelt, ist es wichtig, dass du bereits in die Lehrmethodik eingeführt wirst. Hier besprechen wir die Qualitäten eines Yogalehrers und helfen gleichzeitig den Auszubildenden, ihre eigenen persönlichen Qualitäten zu erfassen. Schließlich tragen wir alle schon etwas in uns, das auf unserem Weg zum Yogalehrer hilfreich ist. Deshalb ist es wichtig, sich darüber klar zu werden, was wir in uns tragen, was hilfreich ist und welche Bereiche der Selbstverbesserung von Vorteil sind. Außerdem wirst du in die Yogasequenzierung innerhalb des Hatha Yoga eingeführt und natürlich das Unterrichten selbst erfahren.",
//       ],
//     },
//   ];

//   const faqItems5 = [
//     {
//       question: "Welche Yogastile lerne und praktiziere ich im Kurs?",
//       answer: [
//         "Wir sind der Meinung, dass es zwar wichtig ist, undogmatisch zu sein, was aber nicht bedeutet, dass man nicht genau weiß, in welcher Tradition man als Yogalehrer steht. Aus diesem Grund wirst du in der 100h Yogalehrerausbildung die Möglichkeit haben, hauptsächlich Hatha Yoga zu praktizieren, aber nicht nur. Traditionelles Hatha Yoga wird in den meisten Ausbildungen, die heutzutage angeboten werden, stark vernachlässigt, ebenso wie der grundlegende Einsatz von Requisiten in modernen Hatha Yoga Zweigen. Du wirst diese Stile praktizieren, während du auch die Möglichkeit hast, einige fließende Yogapraktiken zu üben, um bestimmte Aspekte im Vergleich zu lernen. Auf diese Weise kann sich der Übende ein klareres Bild von der Vielfalt des Yoga machen.",
//         "Denken wir daran, dass Yoga nicht nur aus Haltungen besteht! So wird der Kursteilnehmer auch in Atemtechniken, Entspannungstechniken und Meditation eingeführt.",
//       ],
//     },
//   ];

//   const faqItems6 = [
//     {
//       question: "Wie sieht mein Tag aus?",
//       answer: [
//         "Der Tag deiner Yogalehrer-Ausbildung mag lang sein, aber er ist sicherlich erfüllend und das, was notwendig ist, um die hohen Standards zu halten und gleichzeitig die Anforderungen der Yoga Alliance Standards zu erfüllen. Obwohl die Reihenfolge der Klassen variiert, versuchen wir, die tägliche Yogapraxis am Morgen und am Ende des Tages zu halten. Das bedeutet, dass wir in der Regel 4 Stunden am Tag Yoga üben. Es ist wichtig zu erwähnen, dass der Kurs bereits darauf ausgelegt ist, den Körper nicht zu überfordern und natürlich auch, um die Reise und die Grenzen jedes Einzelnen zu respektieren. Das ist beim Yoga ohnehin essentiell.",
//         "Viel Yoga zu praktizieren ist nicht nur wichtig, weil man in der Praxis selbst viel lernen kann, sondern auch, weil man dann wirklich aus Erfahrung teilen kann. Außerdem helfen die Yogastunden (und einige spezielle Praktiken!) dem Fluss des Kurses, indem sie den Schülern helfen, ihre Batterien wieder aufzuladen und natürlich die Konzentration zu verbessern. Viele Stunden sind nichts, wenn man das Wissen nicht behalten kann, oder?",
//       ],
//     },
//   ];

//   const faqItems7 = [
//     {
//       question: "Ablauf Beispiel",
//       answer: [
//         "Beispiel eines täglichen Stundenplans",
//         "7h - 9h Yogapraxis (Asana, Pranayama und/oder Meditation)",
//         "30 Minuten Pause",
//         "9h30 - 11h00: Yoga Philosophie",
//         "11h-12h30 Unterrichtsmethodik",
//         "12h30-13h30 - Mittagspause",
//         "13h30 - 15h00 Ausrichtung und Hilfsmittel",
//         "15h-16h30 Yoga Geschichte",
//         "16h30 - 17h Pause",
//         "17h - 18h00 Unterrichtsmethodik",
//         "18h - 20h Asana, Pranayama und/oder Meditation",
//         "*Der Schüler absolviert täglich mindestens 11 Yoga Alliance Stunden (50min/Stunde) in unserer Yogalehrerausbildung. Es gibt ein paar Tage, an denen die Ausbildung 12 Stunden umfasst. Nach UE-Standards (45min/Stunde) absolviert der Schüler mehr als 12 Stunden. Von diesen Stunden sind etwa 4 Stunden pro Tag Yogapraxis.",
//       ],
//     },
//   ];

//   // ================================================================================

//   const bannerRef = useRef(null);
//   const faqRef = useRef(null);

//   // Function to scroll to a specific section
//   const scrollToSection = (ref) => {
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <div ref={bannerRef}>
//         {/* <SimpleBanner
//           banner={banner}
//           heading="Yogalehrer Ausbildung
// auf höchstem Niveau"
//           para="Yogalehrer Ausbildung Basiskurs intensiv in 8 Tagen schon ab 1.399 €! 100H - Turiya Yoga-Diplom zertifiziert.    "
//           buttonTxt=" KUNDENSTIMMEN VIDEO "
//         /> */}

// <SimpleBanner3
//         banner={bannerImg && bannerImg}
//         heading={mainData.yogaTeamSliderHeading}
//         para={mainData.yogaTeamSliderParagraph}
//         videoLink={mainData.yogaTeamSliderVideoLink}
//         buttonTxt="KUNDENSTIMMEN VIDEO"
//       />
//       </div>
//       <div id="content" className="section">
//         <section className="global_wrapper about_wrapper" data-aos="fade-up">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-9">
//                 <div className="about_wrapper__left" data-aos="fade-up">
//                   {/* <h3>MODUL 1</h3>
//                   <h1>Yogalehrer Ausbildungen in Modulen</h1> */}
//                   <h3>{mainData && mainData.about_first_section_sub_Paragraph}</h3>
//                   <h1> {mainData && mainData.about_first_section_Heading}</h1>
//                   <div className="kurse_link">
//                     {/* Attach event handlers to trigger scroll */}
//                     <a onClick={() => scrollToSection( faqRef)} style={{color:"#9bbb59"}}>
//                       wichtige info
//                     </a>
//                     <a onClick={() => scrollToSection(bannerRef)} style={{color:"#9bbb59"}}>termine</a>
//                   </div>
// <p
      
//       className="p-0"
//     //   style={{
//     //       color: "rgb(33, 37, 41)",
//     //       fontFamily: "Roboto, sans-serif",
//     //       fontSize: 16,
//     // }}
    
      
//       dangerouslySetInnerHTML={{ __html: mainData.about_first_section_Paragraph_Content }} >
      


//         </p>
//                   {/* ======================================================== */}

                  

//                   {/* ============================================================================ */}
//                   {/* <h6>
//                     8 Intensive Tage (100 Std. ) nach 200h AYA zertifiziert!
//                   </h6>
//                   <p>
//                     Dieser Basiskurs startet mit intensivem Lernen, Praktizieren
//                     und dem Erleben von Yoga mit Gleichgesinnten über 8 Tage. Es
//                     ist wichtig zu betonen, dass dieses Modul für alle
//                     körperlichen Konditionsstufen geeignet ist. Unsere
//                     100-Stunden-Yogalehrer-Ausbildung bietet eine einzigartige
//                     Gelegenheit, eine solide und fundierte Grundlage für die
//                     Yogalehrerausbildung zu schaffen, deine eigene Yogapraxis zu
//                     vertiefen und natürlich herauszufinden, ob die Arbeit als
//                     Yogalehrer zu dir passt. Es ist eine großartige Möglichkeit,
//                     tiefer in den umfassenden und wissenschaftlich fundierten
//                     Pfad des Yoga einzutauchen, der Gesundheit und inneres
//                     Gleichgewicht miteinander verbindet.
//                   </p>
//                   <p>
//                     Unsere 100-Stunden-Yogalehrer-Ausbildung entspricht den
//                     höchsten Standards auf dem Markt, genauso wie jeder andere
//                     Kurs in der Turiya Yoga-Akademie. Höchste Qualitätsniveaus,
//                     die Verbindung zur Yoga-Tradition und gleichzeitig eine
//                     westliche, nicht dogmatische Perspektive bilden unsere
//                     Grundprinzipien. Du hast die Möglichkeit, nicht nur unsere
//                     Methode, sondern auch unsere Yoga-Community kennenzulernen,
//                     ohne viel Geld oder Zeit zu investieren. All dies geschieht
//                     unter der Anleitung unserer erfahrenen und engagierten
//                     Lehrer, die deine persönliche Entwicklung im Auge behalten.
//                     Dies ist von entscheidender Bedeutung, wenn du dich unserer
//                     Community für die 5-Module der
//                     500-Stunden-Yogalehrer-Ausbildung anschließt.
//                   </p>

//                   <h5>
//                     Bei Buchung aller Module M1 – M5 (500h): 7.390 € –
//                     AYA-zertifiziert
//                   </h5> */}
//                 </div>
//               </div>
//               <div className="col-lg-3 mb-3">
//                 <div className="about_wrapper__right mb-3">
//                   {/* <h3>* All Inklusive 60H Yin Yoga</h3>
//                   <div className="price-tag">
//                     <h6>
//                       <i className="bx bxs-purchase-tag" />
//                       1100€
//                     </h6>
//                   </div>
//                   <div className="about-date">
//                     <p>
//                       <i className="bx bxs-map" />
//                       Goa, Indien
//                     </p>
//                     <p>
//                       <i className="bx bxs-calendar" /> 04.12.2024 - 09.12.2024
//                     </p>
//                   </div> */}
//                   <div className="about-text">
//                     <p>
//                       Reise und Unterkunft sind nicht immer im Schulungspreis
//                       enthalten. Wenn Sie weitere Fragen haben, rufen Sie uns
//                       einfach an. Wir helfen Ihnen gerne weiter.
//                     </p>
//                   </div>
//                   <div className="about-contact">
//                     <a href="tel:+4906920134987">
//                       <i className="bx bxs-phone-call" /> +49 (0)69 - 20134987
//                     </a>
//                     <a href="mailto:info@turiyayoga.de">
//                       <i className="bx bxs-envelope" /> info@turiyayoga.de
//                     </a>
//                   </div>
//                 </div>
            
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* third section */}
//       </div>

//       <section className="yin_yoga_faq" ref={faqRef}>
//         <div className="container">
//           <div className="faq_wrapper__content" data-aos="fade-up">
//             <div className="faq_heading">
//               <h3>Zertifizierung & Teilnahmevoraussetzung</h3>
//             </div>
//             {/* Section 1 */}
//             <div className="faq_box">
//               {faqItems1.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={`faq_box__content ${
//                     activeIndex1 === index ? "active" : ""
//                   }`}
//                   onClick={() => handleToggle(1, index)}>
//                   <div className="question">
//                     <div className="plus">
//                       <i
//                         className={`bx ${
//                           activeIndex1 === index ? "bx-minus" : "bx-plus"
//                         }`}
//                       />
//                     </div>
//                     <h6>{faq.question}</h6>
//                   </div>
//                   {activeIndex1 === index && (
//                     <div className="answer">
//                       {faq.answer.map((paragraph, idx) => (
//                         <p key={idx} className="mb-3">
//                           {paragraph}
//                         </p>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Section 2 */}
//           </div>
//         </div>

//         <div className="container">
//           <div className="faq_wrapper__content" data-aos="fade-up">
//             <div className="faq_heading">
//               <h3>Yogausbildungsinhalte & Wichtige Informationen</h3>
//             </div>
//             <div className="faq_box">
//               {faqItems2.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={`faq_box__content ${
//                     activeIndex3 === index ? "active" : ""
//                   }`}
//                   onClick={() => handleToggle(3, index)}>
//                   <div className="question">
//                     <div className="plus">
//                       <i
//                         className={`bx ${
//                           activeIndex3 === index ? "bx-minus" : "bx-plus"
//                         }`}
//                       />
//                     </div>
//                     <h6>{faq.question}</h6>
//                   </div>
//                   {activeIndex3 === index && (
//                     <div className="answer">
//                       {faq.answer.map((paragraph, index) => (
//                         <p key={index} className="mb-3">
//                           {paragraph}
//                         </p>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//             {/* ======================================================== */}
//             <div className="faq_box">
//               {faqItems3.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={`faq_box__content ${
//                     activeIndex3 === index ? "active" : ""
//                   }`}
//                   onClick={() => handleToggle(3, index)}>
//                   <div className="question">
//                     <div className="plus">
//                       <i
//                         className={`bx ${
//                           activeIndex3 === index ? "bx-minus" : "bx-plus"
//                         }`}
//                       />
//                     </div>
//                     <h6>{faq.question}</h6>
//                   </div>
//                   {activeIndex3 === index && (
//                     <div className="answer">
//                       {faq.answer.map((paragraph, index) => (
//                         <p key={index} className="mb-3">
//                           {paragraph}
//                         </p>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className="faq_box">
//               {faqItems4.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={`faq_box__content ${
//                     activeIndex4 === index ? "active" : ""
//                   }`}
//                   onClick={() => handleToggle(4, index)}>
//                   <div className="question">
//                     <div className="plus">
//                       <i
//                         className={`bx ${
//                           activeIndex4 === index ? "bx-minus" : "bx-plus"
//                         }`}
//                       />
//                     </div>
//                     <h6>{faq.question}</h6>
//                   </div>
//                   {activeIndex4 === index && (
//                     <div className="answer">
//                       {faq.answer.map((paragraph, index) => (
//                         <p key={index} className="mb-3">
//                           {paragraph}
//                         </p>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className="faq_box">
//               {faqItems5.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={`faq_box__content ${
//                     activeIndex5 === index ? "active" : ""
//                   }`}
//                   onClick={() => handleToggle(5, index)}>
//                   <div className="question">
//                     <div className="plus">
//                       <i
//                         className={`bx ${
//                           activeIndex5 === index ? "bx-minus" : "bx-plus"
//                         }`}
//                       />
//                     </div>
//                     <h6>{faq.question}</h6>
//                   </div>
//                   {activeIndex5 === index && (
//                     <div className="answer">
//                       {faq.answer.map((paragraph, index) => (
//                         <p key={index} className="mb-3">
//                           {paragraph}
//                         </p>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* ============================================================= */}
//           </div>
//         </div>

//         <div className="container">
//           <div className="faq_wrapper__content" data-aos="fade-up">
//             <div className="faq_heading">
//               <h3>Tagesablauf</h3>
//             </div>

//             {/* ======================================================== */}

//             <div className="faq_box">
//               {faqItems6.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={`faq_box__content ${
//                     activeIndex6 === index ? "active" : ""
//                   }`}
//                   onClick={() => handleToggle(6, index)}>
//                   <div className="question">
//                     <div className="plus">
//                       <i
//                         className={`bx ${
//                           activeIndex6 === index ? "bx-minus" : "bx-plus"
//                         }`}
//                       />
//                     </div>
//                     <h6>{faq.question}</h6>
//                   </div>
//                   {activeIndex6 === index && (
//                     <div className="answer">
//                       {faq.answer.map((paragraph, index) => (
//                         <p key={index} className="mb-3">
//                           {paragraph}
//                         </p>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="faq_box">
//               {faqItems7.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={`faq_box__content ${
//                     activeIndex7 === index ? "active" : ""
//                   }`}
//                   onClick={() => handleToggle(7, index)}>
//                   <div className="question">
//                     <div className="plus">
//                       <i
//                         className={`bx ${
//                           activeIndex7 === index ? "bx-minus" : "bx-plus"
//                         }`}
//                       />
//                     </div>
//                     <h6>{faq.question}</h6>
//                   </div>
//                   {activeIndex7 === index && (
//                     <div className="answer">
//                       {faq.answer.map((paragraph, index) => (
//                         <p key={index} className="mb-3">
//                           {paragraph}
//                         </p>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* ============================================================= */}
//           </div>
//         </div>

//         {/* -==================================2 ==================================================================== */}

//         {/* =============================================== */}
//       </section>
//       <Testimonial />
//       <CheckWrapper />
//       <ParralaxWrapper />

//       <Contact />
//       <NewsShelter />
//     </>
//   );
// };

// export default Index2;


// ============

import React, { useRef, useState,useEffect } from "react";
import "./module1.scss";
import banner from "../../../assets/images/module_img/banner.webp";
import SimpleBanner3 from "../../banner/SimpleBanner3";
import BannerGlobalWrapper from "../../BannerGlobalWrapper";
import Contact from "../../Contact";
import NewsShelter from "../../NewsShelter";
import Testimonial from "../../Testimonial";
import CheckWrapper from "../../CheckWrapper";
import ParralaxWrapper from "../../ParralaxWrapper";
import axios from 'axios'
import { BASE_URL,BASE_URL_IMAGE } from "../../../config";

const Index2 = () => {


  const [earlyData, setEarlyData] = useState("");

  const fetchEarlyBirdData = () => {
    axios
      .get(BASE_URL + "/getClosestUpcomingCourseswithNull")
      .then((response) => {
        console.log("respnse of fetchEarlyBirdData", response.data.data[0]);
        const data = response.data.data[0];
        const startDate = data && data.StartDate;
        console.log("start date",data)
        setEarlyData(response.data.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchEarlyBirdData();
  }, []);

  console.log("earlyData", earlyData
  );

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
console.log("closestUpcomingCourses", closestUpcomingCourse);

  // const payload = {
  //   `<h5>8 Intensive Tage (100 Std. ) nach 200h AYA zertifiziert!</h5>
  //   <p>Dieser Basiskurs startet mit intensivem Lernen, Praktizieren und dem Erleben von Yoga mit Gleichgesinnten über 8 Tage. Es ist wichtig zu betonen, dass dieses Modul für alle körperlichen Konditionsstufen geeignet ist. Unsere 100-Stunden-Yogalehrer-Ausbildung bietet eine einzigartige Gelegenheit, eine solide und fundierte Grundlage für die Yogalehrerausbildung zu schaffen, deine eigene Yogapraxis zu vertiefen und natürlich herauszufinden, ob die Arbeit als Yogalehrer zu dir passt. Es ist eine großartige Möglichkeit, tiefer in den umfassenden und wissenschaftlich fundierten Pfad des Yoga einzutauchen, der Gesundheit und inneres Gleichgewicht miteinander verbindet.</p>
  //   <p>Unsere 100-Stunden-Yogalehrer-Ausbildung entspricht den höchsten Standards auf dem Markt, genauso wie jeder andere Kurs in der Turiya Yoga-Akademie. Höchste Qualitätsniveaus, die Verbindung zur Yoga-Tradition und gleichzeitig eine westliche, nicht dogmatische Perspektive bilden unsere Grundprinzipien. Du hast die Möglichkeit, nicht nur unsere Methode, sondern auch unsere Yoga-Community kennenzulernen, ohne viel Geld oder Zeit zu investieren. All dies geschieht unter der Anleitung unserer erfahrenen und engagierten Lehrer, die deine persönliche Entwicklung im Auge behalten. Dies ist von entscheidender Bedeutung, wenn du dich unserer Community für die 5-Module der 500-Stunden-Yogalehrer-Ausbildung anschließt.</p><h5>Bei Buchung aller Module M1 – M5 (500h): 7.390 € – AYA-zertifiziert</h5>`
  // }Modul 1

  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [mainData, setMainData] = useState("");
  console.log("Mallorca");


  const fetchData = () => {
    axios
      .get(
      // "http://127.0.0.1:7000/api/module_webpages_by_category/200H/AYA Yogalehrer Ausbildung I Mallorca"
      BASE_URL + 
`/module_webpages_by_category/Modul 1`
      )
      .then((response) => {
        console.log("Modul 1", response.data.data[0]);

        if (response.status == 200) {
          const data = response.data.data[0];
          console.log("real data", response.data.data[0]);
          console.log("banner imggg", data.yogaTeamSlideImage);
          setMainData(response.data.data[0]);

          var imageUrlcustum =
            data && data.yogaTeamSlideImage
              ? BASE_URL_IMAGE + `/images/modulewebpage/${data.yogaTeamSlideImage}`
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
console.log("main data", mainData);
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
    }
    else if (section === 6) {
      setActiveIndex6(activeIndex6 === index ? null : index);
    }
    else if (section === 7) {
      setActiveIndex7(activeIndex7 === index ? null : index);
    }
  };

  const faqItems1 = [
    {
      question:
        "Bekomme ich bereits ein Zertifikat? Kann ich nach Modul 1 unterrichten??",
      answer: [
        "Viele Schulen behaupten, dass man nach einer 100-stündigen Yogalehrer-Ausbildung unterrichten kann, aber die Wahrheit ist, dass Yogastudios und Gyms in der Regel nicht bereit sind, jemanden einzustellen, ohne dass man eine Yogalehrer-Ausbildung absolviert hat, die von der Yoga Alliance zertifiziert ist (was natürlich 200 Stunden erfordert). Turiya Yoga gibt und hält einen wirklich hohen Standard und aus Erfahrung wissen wir, dass die große Mehrheit der Schüler wirklich die 200 Stunden benötigt, um sicher unterrichten zu können und an verschiedenen Fähigkeiten teilnehmen zu können (auch als Anfänger!).",
        "Das Modul 1 ist der erste Schritt auf deiner Reise, um Yogalehrer zu werden. Es wird in 8 intensiven Tagen unterrichtet und damit erwirbst du ein Turiya Yoga Basis Zertifikat von 100 Stunden. Um Yogalehrer nach Yoga Alliance zu werden, muss der Schüler dann die geforderten 200 Stunden erfolgreich absolvieren. Hierfür bieten wir das Modul 2 (100 Stunden) an. Es ist gut zu wissen, dass von den 200 Stunden die Yoga Alliance verlangt, dass Schüler und Lehrer 90% dieser Stunden gemeinsam in einer Lernumgebung verbringen.",
      ],
    },
  ];

  const faqItems2 = [
    {
      question:
        "Was werde ich Ã¼ber Anatomie und Physiologie lernen?",
      answer: [
        "Im ersten Teil der Yogalehrerausbildung wirst du Anatomie und Physiologie in Bezug auf die Hauptgelenke und die Wirbelsäule kennenlernen, d.h. wir behandeln die wichtigsten Bewegungsabläufe und wie du verschiedene Kategorien von Asanas sicher üben kannst. Der Fokus des Moduls 1 und eines Teils des Moduls 2 unserer Yogalehrerausbildung liegt auf den Yogastellungen und wie man sie sicher mit und ohne den Einsatz von Requisiten praktiziert. Ebenfalls essentiell für das Teilen einer sicheren Yogapraxis ist die Ausrichtung, die eine starke Säule unserer Kurse ist. Diese Schwerpunkte unserer Yogalehrerausbildung kommen als Antwort auf die Anforderungen der heutigen Arbeit als Yogalehrer. Typischerweise unterrichten Yogalehrer Klassen, die sich überwiegend um die Haltungen der Yogapraxis drehen. Wir nehmen uns hier sehr viel Zeit, um diese Session verständlich und funktional zu gestalten.",
      ],
    },
  ];

  const faqItems3 = [
    {
      question:
        "Was werde ich in der Yogageschichte und Yogaphilosophie lernen?",
      answer: [
        "Unsere Yogalehrerausbildung geht in jedem Modul in verschiedene Themen tiefer. Ein Überblick über die Geschichte des Yoga ist wichtig! Das Modul 1 beginnt damit, ein grobes Bild von den Wurzeln des Yoga zu zeichnen und gibt einen Überblick über die wichtigsten Veränderungen innerhalb dieser Tradition der Praxis. In dieser Yogalehrer-Ausbildung nehmen wir uns Zeit, um uns wichtigen Konzepten innerhalb der Veden und der inspirierenden Upanisaden zu nähern und führen in die Samkhya-Philosophie und Vedanta ein. Samkhya ist die Grundlage für das Verständnis der essentiellen klassischen Schriften, die als Yoga Sutras bekannt sind, während Vedanta der Schlüssel zum Verständnis der vorherrschenden Sichtweise des Yoga heute ist. Sich die Zeit zu nehmen, auf verschiedene Schlüsselmomente in der Geschichte durch bestimmte Schriften einzugehen, ist wichtig, um die Yogatradition zu verstehen und wo wir heute als Yogalehrer (und werdende Yogalehrer) stehen.",
      ],
    },
  ];

  const faqItems4 = [
    {
      question:
        "Wie sieht es mit der Entwicklung meiner QualitÃ¤ten als Yogalehrer aus? Werde ich Erfahrung im Unterrichten haben",
      answer: [
        "Sicherlich, da es sich um eine Yoga-Ausbildung handelt, ist es wichtig, dass du bereits in die Lehrmethodik eingeführt wirst. Hier besprechen wir die Qualitäten eines Yogalehrers und helfen gleichzeitig den Auszubildenden, ihre eigenen persönlichen Qualitäten zu erfassen. Schließlich tragen wir alle schon etwas in uns, das auf unserem Weg zum Yogalehrer hilfreich ist. Deshalb ist es wichtig, sich darüber klar zu werden, was wir in uns tragen, was hilfreich ist und welche Bereiche der Selbstverbesserung von Vorteil sind. Außerdem wirst du in die Yogasequenzierung innerhalb des Hatha Yoga eingeführt und natürlich das Unterrichten selbst erfahren.",
      ],
    },
  ];

  const faqItems5 = [
    {
      question: "Welche Yogastile lerne und praktiziere ich im Kurs?",
      answer: [
        "Wir sind der Meinung, dass es zwar wichtig ist, undogmatisch zu sein, was aber nicht bedeutet, dass man nicht genau weiß, in welcher Tradition man als Yogalehrer steht. Aus diesem Grund wirst du in der 100h Yogalehrerausbildung die Möglichkeit haben, hauptsächlich Hatha Yoga zu praktizieren, aber nicht nur. Traditionelles Hatha Yoga wird in den meisten Ausbildungen, die heutzutage angeboten werden, stark vernachlässigt, ebenso wie der grundlegende Einsatz von Requisiten in modernen Hatha Yoga Zweigen. Du wirst diese Stile praktizieren, während du auch die Möglichkeit hast, einige fließende Yogapraktiken zu üben, um bestimmte Aspekte im Vergleich zu lernen. Auf diese Weise kann sich der Übende ein klareres Bild von der Vielfalt des Yoga machen.",
        "Denken wir daran, dass Yoga nicht nur aus Haltungen besteht! So wird der Kursteilnehmer auch in Atemtechniken, Entspannungstechniken und Meditation eingeführt.",
      ],
    },
  ];

  const faqItems6 = [
    {
      question: "Wie sieht mein Tag aus?",
      answer: [
        "Der Tag deiner Yogalehrer-Ausbildung mag lang sein, aber er ist sicherlich erfüllend und das, was notwendig ist, um die hohen Standards zu halten und gleichzeitig die Anforderungen der Yoga Alliance Standards zu erfüllen. Obwohl die Reihenfolge der Klassen variiert, versuchen wir, die tägliche Yogapraxis am Morgen und am Ende des Tages zu halten. Das bedeutet, dass wir in der Regel 4 Stunden am Tag Yoga üben. Es ist wichtig zu erwähnen, dass der Kurs bereits darauf ausgelegt ist, den Körper nicht zu überfordern und natürlich auch, um die Reise und die Grenzen jedes Einzelnen zu respektieren. Das ist beim Yoga ohnehin essentiell.",
        "Viel Yoga zu praktizieren ist nicht nur wichtig, weil man in der Praxis selbst viel lernen kann, sondern auch, weil man dann wirklich aus Erfahrung teilen kann. Außerdem helfen die Yogastunden (und einige spezielle Praktiken!) dem Fluss des Kurses, indem sie den Schülern helfen, ihre Batterien wieder aufzuladen und natürlich die Konzentration zu verbessern. Viele Stunden sind nichts, wenn man das Wissen nicht behalten kann, oder?",
      ],
    },
  ];

  const faqItems7 = [
    {
      question: "Ablauf Beispiel",
      answer: [
        "Beispiel eines täglichen Stundenplans",
        "7h - 9h Yogapraxis (Asana, Pranayama und/oder Meditation)",
        "30 Minuten Pause",
        "9h30 - 11h00: Yoga Philosophie",
        "11h-12h30 Unterrichtsmethodik",
        "12h30-13h30 - Mittagspause",
        "13h30 - 15h00 Ausrichtung und Hilfsmittel",
        "15h-16h30 Yoga Geschichte",
        "16h30 - 17h Pause",
        "17h - 18h00 Unterrichtsmethodik",
        "18h - 20h Asana, Pranayama und/oder Meditation",
        "*Der Schüler absolviert täglich mindestens 11 Yoga Alliance Stunden (50min/Stunde) in unserer Yogalehrerausbildung. Es gibt ein paar Tage, an denen die Ausbildung 12 Stunden umfasst. Nach UE-Standards (45min/Stunde) absolviert der Schüler mehr als 12 Stunden. Von diesen Stunden sind etwa 4 Stunden pro Tag Yogapraxis.",
      ],
    },
  ];

  // ================================================================================

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


  return (
    <>
      <div ref={bannerRef}>
        {/* <SimpleBanner
          banner={banner}
          heading="Yogalehrer Ausbildung
auf höchstem Niveau"
          para="Yogalehrer Ausbildung Basiskurs intensiv in 8 Tagen schon ab 1.399 €! 100H - Turiya Yoga-Diplom zertifiziert.    "
          buttonTxt=" KUNDENSTIMMEN VIDEO "
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
                  <h1>Yogalehrer Ausbildungen in Modulen</h1> */}
                  <h3>{mainData && mainData.about_first_section_sub_Paragraph}</h3>
                  <h1> {mainData && mainData.about_first_section_Heading}</h1>
                  <div className="kurse_link">
                    {/* Attach event handlers to trigger scroll */}
                    <a onClick={() => scrollToSection( faqRef)} style={{color:"#9bbb59"}}>
                      wichtige info
                    </a>
                    <a onClick={() => scrollToSection(bannerRef)} style={{color:"#9bbb59"}}>termine</a>
                  </div>
<p
      
      className="p-0"
    //   style={{
    //       color: "rgb(33, 37, 41)",
    //       fontFamily: "Roboto, sans-serif",
    //       fontSize: 16,
    // }}
    
      
      dangerouslySetInnerHTML={{ __html: mainData.about_first_section_Paragraph_Content }} >
      


        </p>
                
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

Das Angebot endet am   
<i className="bx bxs-calendar" />
{closestUpcomingCourse[0] && closestUpcomingCourse[0].Offerprice ? closestUpcomingCourse[0].OfferEndDate : null}


</p>
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
            <div className="faq_box">
              {faqItems2.map((faq, index) => (
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
            {/* ======================================================== */}
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

            {/* ============================================================= */}
          </div>
        </div>

        <div className="container">
          <div className="faq_wrapper__content" data-aos="fade-up">
            <div className="faq_heading">
              <h3>Tagesablauf</h3>
            </div>

            {/* ======================================================== */}

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

            {/* ============================================================= */}
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