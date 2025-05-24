// import React, { useState } from "react";
// import "./module1.scss";
// import banner from "../../../assets/images/module_img/banner.webp";
// import SimpleBanner from "../../banner/SimpleBanner";
// import BannerGlobalWrapper from "../../BannerGlobalWrapper";
// import Contact from "../../Contact";
// import NewsShelter from "../../NewsShelter";



// const index = () => {


//   const [activeIndex1, setActiveIndex1] = useState(null);
//   const [activeIndex2, setActiveIndex2] = useState(null);
//   const [activeIndex3, setActiveIndex3] = useState(null);
//   const [activeIndex4, setActiveIndex4] = useState(null);
//   const [activeIndex5, setActiveIndex5] = useState(null);

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
//   };


//   const faqItems1 = [
//     {
//       question: "Bekomme ich schon ein Zertifikat?",
//       answer: [
//         "Wenn du nicht an der 500H Yogalehrer Ausbildung teilnimmst: Nach erfolgreichem Abschluss dieses Kurses erhältst du die Turiya Yoga - Yin Yoga Basiskurs Zertifikat.",
//         "Wir sind eine von der Yoga Alliance zertifizierte Akademie und dieser Kurs wird auch im Rahmen unserer 500H Yogalehrer Ausbildung angeboten. Wenn du diesen Kurs im Rahmen deiner 500H Yogalehrer Ausbildung belegst: Zu diesem Zeitpunkt hättest du bereits nach Modul 1 und Modul 2 das zertifizierte 200-stündige Yogalehrer-Ausbildung Yoga Alliance-Diplom erworben. Danach bist du berechtigt, 500 RYT zu werden, indem du die 300-stündige Yogalehrerausbildung absolvierst durch das Abschließen der Module 3, Modul 4 und Modul 5.",
//         "Der Yin-Yoga-Kurs ist Teil des Kursangebots im Modul 5-Optionen und absolviert 60 Stunden der verbleibenden 100 Stunden. Wenn du deine verbleibenden 100 Stunden, von denen der Yin Yoga Kurs 60% abschließt, erfolgreich beendet hast, erhältst du dein 500H Yoga-Ausbildung-Zertifikat und kannst dich bei Yoga Alliance als RYT 500 registrieren.",
//       ],
//     },
//   ];

//   const faqItems2 = [
//     {
//       question: "Was sind die Teilnahmevoraussetzungen?",
//       answer: [
//         "Teilnahmevoraussetzungen: Mindestalter 18 Jahre. Es wird auch empfohlen, mindestens das Modul 1 (100h) aus unserer Yogalehrer Ausbildung zu nehmen. Wenn du über ein anerkanntes Zertifikat für eine 200-stündige Yogalehrerausbildung verfügst, sollte dies ausreichen, um das Programm vollständig aufzunehmen.",
//         "Die Yogalehrer Ausbildung ist für alle körperlichen Konditionsstufen geeignet. Wenn du dich wegen einer besonderen Situation unsicher fühlst, wende dich einfach an uns.",
//       ],
//     },
//   ];

//   const faqItems3 = [
//     {
//       question: "Was werde ich in der Yin Yoga Ausbildung lernen?",
//       answer: [
//         "Dieser Kurs bildet eine solide Grundlage für Yin Yoga – besonders wie Yin Techniken mit Vinyasa zu kombinieren. Zu diesem Zweck werden dir Yin-Yoga-Praktiken und Asanas vorgestellt (die sich von dem unterscheiden oder modifiziert sind, was du bereits in anderen Modulen unserer Yogalehrer-Ausbildung gelernt hast). Da Yin Yoga stark in der Traditionellen Chinesischen Medizin verankert ist, nehmen wir uns Zeit, um uns auf funktionelle Anatomie und Faszien sowie Schlüsselkonzepte der chinesischen Meridian-Kartierung zu konzentrieren.",
//         "Wir nehmen uns auch Zeit, um uns mit der Sequenzierung zu befassen, damit du sicher auf unterschiedliche Bedürfnisse eingehen kannst. Als wesentlicher Bestandteil dieses Kurses befassen wir uns mit der Verwendung von Requisiten und wie sie deinen Unterricht bereichern, zusammen mit Entspannungstechniken im Zusammenhang mit Stressabbau.",
//         "Der Kurs bietet eine umfassende Einführung in die Yin Yoga-Techniken, die es dir ermöglicht, Yin Yoga-Übungen mit anderen Übungsstilen zu kombinieren.",
//         "Der Kurs bietet eine großartige Möglichkeit, diesen Stil zu erlernen, ohne viel Geld oder Zeit zu investieren. Wenn du merkst, dass du eine Leidenschaft dafür entwickelt hast, wirst es dir sicherlich leichtfallen, weiterzumachen und von einem informierten Standpunkt aus zu beschließen, welche weiteren Ausbildungen du nehmen möchtest.",
//       ],
//     },
//   ];

//   const faqItems4 = [
//     {
//       question: "Wie sieht mein Tag aus?",
//       answer: [
//         "Unser Kurs dauert 60 Stunden in 6 Tagen, daher absolvieren wir ungefähr 10 Stunden pro Tag gemäß den Standards der Yoga-Allianz. Von diesen sind ungefähr 4 Stunden pro Tag für Yogapraxis geplant. Keine Sorge, der Kurs ist durchdacht, damit eure Körper nicht überfordert werden und ein großer Teil der Yin Yoga-Grundlagen in der Pflege der Fähigkeit zur absoluten Entspannung liegt.",
//         "Denkt bitte daran: Ein Kurs in Yoga Alliance dauert 60 Minuten. Innerhalb dieses Kurses dürfen wir 10 Minuten Pause einlegen!",
//         "Ablauf Beispiel",
//       ],
//     },
//   ];

//   const faqItems5 = [
//     {
//       question: "Ablauf Beispiel",
//       answer: [
//         "Beispiel für einen täglichen Fahrplan",
//         "8h - 10h Yogapraxis (Asana, Pranayama und / oder Meditation)",
//         "30 Minuten Pause",
//         "10.30 - 12.30 Uhr: Theorie (Anatomie & Physiologie)",
//         "1h Mittagspause",
//         "13.30–15.30 Uhr Training: Techniken und Hilfsmittel",
//         "15h30 - 16h30 Unterrichtsmethodik",
//         "30 Minuten Pause",
//         "17h-19h Übung",
//       ],
//     },
//   ];


//   return (
//     <>
//       <SimpleBanner
//         banner={banner}
//         heading="Yoga teacher training at the highest level"
//         para="Because flexibility is not only important for the body! Our 500h yoga training consists of 5 modules that build on each other.                                            "
//         buttonTxt="CUSTOMER TESTIMONIALS VIDEO "
//       />

//       <div id="content" className="section">
//         <section className="global_wrapper about_wrapper" data-aos="fade-up">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="about_wrapper__left" data-aos="fade-up">
//                   <h3>MODUL 1</h3>
//                   <h1>Yogalehrer Ausbildungen in Modulen</h1>
//                   <div className="kurse_link">
//                     <a href="yogalehrer-ausbildung-100h.php">MODUL 1</a>
//                     <a href="yogalehrer-ausbildung-200h-aya.php">MODUL 2</a>
//                     <a href="yogalehrer-ausbildung-300h.php">MODUL 3</a>
//                     <a href="yogalehrer-ausbildung-400h.php">MODUL 4</a>
//                     <a href="yogalehrer-ausbildung-500h.php">MODUL 5</a>
//                   </div>
//                   <h6>
//                   8 Intensive Tage (100 Std. ) nach 200h AYA zertifiziert!
//                   </h6>
//                   <p>
//                   Dieser Basiskurs startet mit intensivem Lernen, Praktizieren und dem Erleben von Yoga mit Gleichgesinnten über 8 Tage. Es ist wichtig zu betonen, dass dieses Modul für alle körperlichen Konditionsstufen geeignet ist. Unsere 100-Stunden-Yogalehrer-Ausbildung bietet eine einzigartige Gelegenheit, eine solide und fundierte Grundlage für die Yogalehrerausbildung zu schaffen, deine eigene Yogapraxis zu vertiefen und natürlich herauszufinden, ob die Arbeit als Yogalehrer zu dir passt. Es ist eine großartige Möglichkeit, tiefer in den umfassenden und wissenschaftlich fundierten Pfad des Yoga einzutauchen, der Gesundheit und inneres Gleichgewicht miteinander verbindet.
//                   </p>
//                   <p>
//                   Unsere 100-Stunden-Yogalehrer-Ausbildung entspricht den höchsten Standards auf dem Markt, genauso wie jeder andere Kurs in der Turiya Yoga-Akademie. Höchste Qualitätsniveaus, die Verbindung zur Yoga-Tradition und gleichzeitig eine westliche, nicht dogmatische Perspektive bilden unsere Grundprinzipien. Du hast die Möglichkeit, nicht nur unsere Methode, sondern auch unsere Yoga-Community kennenzulernen, ohne viel Geld oder Zeit zu investieren. All dies geschieht unter der Anleitung unserer erfahrenen und engagierten Lehrer, die deine persönliche Entwicklung im Auge behalten. Dies ist von entscheidender Bedeutung, wenn du dich unserer Community für die 5-Module der 500-Stunden-Yogalehrer-Ausbildung anschließt.
//                   </p>
                  
//                   <h5>
//                     Bei Buchung aller Module M1 – M5 (500h): 7.390 € –
//                     AYA-zertifiziert
//                   </h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* third section */}
//       </div>


//       <section className="yin_yoga_faq">
//         <div className="container">
//           <div className="faq_wrapper__content" data-aos="fade-up">
//             <div className="faq_heading">
//               <h3>Yogausbildungsinhalte & Wichtige Informationen</h3>
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
//             <div className="faq_box">
//               {faqItems2.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={`faq_box__content ${
//                     activeIndex2 === index ? "active" : ""
//                   }`}
//                   onClick={() => handleToggle(2, index)}>
//                   <div className="question">
//                     <div className="plus">
//                       <i
//                         className={`bx ${
//                           activeIndex2 === index ? "bx-minus" : "bx-plus"
//                         }`}
//                       />
//                     </div>
//                     <h6>{faq.question}</h6>
//                   </div>
//                   {activeIndex2 === index && (
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
//           </div>
//         </div>

//         <div className="container">
//           <div className="faq_wrapper__content" data-aos="fade-up">
//             <div className="faq_heading">
//               <h3>Yogausbildungsinhalte & Wichtige Informationen</h3>
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

//         {/* -==================================2 ==================================================================== */}

//         {/* =============================================== */}
//       </section>
//       <BannerGlobalWrapper />
//       <Contact />
//       <NewsShelter />
//     </>
//   );
// };

// export default index;
