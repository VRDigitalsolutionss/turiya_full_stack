// import React, { useEffect } from "react";
// import "./block_training.scss";
// import SimpleBanner from "../banner/SimpleBanner";
// import banner from "../../assets/banner/banner1.webp";
// import BannerGlobalWrapper from "../BannerGlobalWrapper";
// import Contact from "../Contact";
// import NewsShelter from "../NewsShelter";
// import SimpleBanner2 from "../banner/SimpleBanner2";
// import axios from 'axios';

// const index = () => {


//   const [bannerImg,setBannerImg] = useState('')

//   const [galleries, setGalleries] = useState('');
//   const [all_course, setAll_course] = useState('');
  
//   const fetchData = () => {
//     axios.get('http://127.0.0.1:7000/api/all_course_webpages').then((response) => {
//       console.log("response of all_course_webpages", response);
  
    
  
//       if (response.status == 200) {
//         const data = response.data.data[0];
//         console.log("real data", response.data.data[0]);
//         console.log("banner imggg",data.yogaTeamSlideImage)
//         setAll_course(response.data.data[0]);
        
  
//         var imageUrlcustum = data.yogaTeamSlideImage 
//         ? `http://127.0.0.1:7000/uploads/images/coursewebpage/${data.yogaTeamSlideImage}`
//               : ''; // Fallback image or empty string
          
          
//               setBannerImg(imageUrlcustum)
//       }
      
//     }).catch((error) => {
//       console.log("error", error)
//     })
//   }
  
  
//   useEffect(() => {
//     fetchData();
  
//   }, []);
//   console.log("all courses data",all_course,bannerImg)
//   console.log("banner image",bannerImg)



//   return (
//     <>
//       <SimpleBanner2
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
//                   <h3>BLOCKAUSBILDUNG</h3>
//                   <h1>Yogalehrer Ausbildungen in Modulen</h1>
//                   <div className="kurse_link">
//                     <a href="yogalehrer-ausbildung-100h.php">MODUL 1</a>
//                     <a href="yogalehrer-ausbildung-200h-aya.php">MODUL 2</a>
//                     <a href="yogalehrer-ausbildung-300h.php">MODUL 3</a>
//                     <a href="yogalehrer-ausbildung-400h.php">MODUL 4</a>
//                     <a href="yogalehrer-ausbildung-500h.php">MODUL 5</a>
//                   </div>
//                   <h6>
//                     200H und 500H Yogalehrer Ausbildungen - Yoga Alliance
//                     zertifiziert &amp; International anerkannt
//                   </h6>
//                   <p>
//                     Wir bieten unseren Teilnehmern große Flexibilität und halten
//                     gleichzeitig die höchsten Standards in unseren von der
//                     200-Stunden- und 500-Stunden-Yoga-Allianz zertifizierten
//                     Yogalehrerausbildungen ein. Als Teilnehmer hast du die
//                     Möglichkeit, deine Yoga-Ausbildung in Modulen zu
//                     absolvieren, und zwar jeweils an 8 intensiven Tagen (100
//                     Stunden). Auf diese Weise kannst du dir die
//                     200-Stunden-Yogalehrerausbildung bequem in 2 Modulen und die
//                     500-Stunden-Yogalehrerausbildung in 5 Modulen erarbeiten.{" "}
//                   </p>
//                   <p>
//                     Unsere Yogalehrer-Ausbildung (Modul 1, Modul 2, Modul 3 und
//                     Modul 4) konzentriert sich auf eine durchdachte und
//                     einzigartige Kombination traditioneller Yoga-Praktiken
//                     (Hatha Yoga) und eines zeitgemäßen Flow-Stils. Innerhalb des
//                     letzten Moduls (Modul 5) kannst du auswählen, welche
//                     zusätzlichen verwandten Fähigkeiten du entwickeln möchtest.
//                     Bitte beachte, dass die therapeutischen Aspekte von
//                     Yoga-Praktiken bereits in unsere Module integriert sind,
//                     unter Berücksichtigung der Normen der Yoga Alliance. Es sei
//                     jedoch darauf hingewiesen, dass Yoga-Therapie keine
//                     Zertifikate gemäß den Richtlinien der Yoga Alliance besitzt,
//                     da es sich um eine nicht regulierte Praxis handelt.
//                   </p>
//                   <p>
//                     Zudem ist es entscheidend, zu verstehen, wie Yoga durch
//                     Bewegung Heilung und Linderung fördern kann. Es ist wichtig
//                     zu erkennen, dass dies nicht nur für Senioren gilt, sondern
//                     auch für andere, die Bewegungseinschränkungen haben. Der
//                     Kurs basiert hauptsächlich auf medizinischer Evidenz, wobei
//                     die traditionellere Perspektive der Praxis natürlich nicht
//                     außer Acht gelassen wird.
//                   </p>
//                   <p>
//                     Unsere Ausbildung baut auf traditionellem und modernem Hatha
//                     Yoga auf und wir verwenden Props auf eine umfassende Art.
//                     Dadurch bist du gut gerüstet, um dich weiterzuentwickeln und
//                     tiefer in moderne fließende Praktiken einzutauchen. Nachdem
//                     du unsere komplette 500-Stunden-Yogalehrer-Ausbildung
//                     abgeschlossen hast, kannst du geschickt und kreativ auf
//                     allen Niveaus unterrichten. Du wirst Hatha, Vinyasa und den
//                     genauen Einsatz von Requisiten in deinen Kursen kombinieren
//                     können. Das alles basiert nicht nur auf Tradition, sondern
//                     auch auf den neuesten wissenschaftlichen Erkenntnissen und
//                     therapeutischen Aspekten des Yoga.
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
//       <BannerGlobalWrapper />
//       <Contact />
//       <NewsShelter />
//     </>
//   );
// };

// export default index;
