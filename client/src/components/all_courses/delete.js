import React, { useState,useEffect } from "react";
import './course.scss'
import img1 from "../../assets/images/gallery-images/img_1.webp";
import img2 from "../../assets/images/gallery-images/img_2.webp";
import img3 from "../../assets/images/gallery-images/img_3.webp";
import img4 from "../../assets/images/gallery-images/img_4.webp";
import img5 from "../../assets/images/gallery-images/img_5.webp";
import img6 from "../../assets/images/gallery-images/img_6.webp";
import img7 from "../../assets/images/gallery-images/img_7.webp";
import banner from "../../assets/banner/kommendekursebg.webp";
import turiaImg1 from "../../assets/images/turiya_yoga_home_manu_akash.webp";
import turiaImg2 from "../../assets/images/turiya_yoga_yogalehrer_ausbildung_block.webp";
import turiaImg3 from "../../assets/images/turiya_yoga_yogalehrer_ausbildung.webp";
import logo1 from "../../assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys200-150x150.webp";
import logo2 from "../../assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys300-150x150.webp";
import logo3 from "../../assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys500-150x150.webp";
import NewsShelter from "../NewsShelter";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import SimpleBanner from "../banner/SimpleBanner";
import dilogImg from '../../assets/images/high-important.png'
import Gallery from '../gallery/Index'
import SimpleBanner3 from "../banner/SimpleBanner3";
import axios from 'axios'
import { BASE_URL, BASE_URL_IMAGE } from "../../config";

const Index = () => {


  const [earlyData, setEarlyData] = useState("");

  const fetchEarlyBirdData = () => {
    axios
      .get(`${BASE_URL}/getClosestUpcomingCourseswithNull`)
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



  const [allUpcomingData, setAllUpcomingData] = useState("");

  const fetchgetupcoming_courseData = () => {
    axios
      // .get("http://127.0.0.1:7000/api/modules")
      .get(`${BASE_URL}/getupcoming_course`)
      .then((response) => {
        console.log("fetchgetupcoming_courseData", response.data.data);

        setAllUpcomingData(response.data.data);
      }).catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchgetupcoming_courseData();
  }, []);

  console.log("allUpcomingData", allUpcomingData);
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



const [bannerImg,setBannerImg] = useState('')

const [galleries, setGalleries] = useState('');
const [all_course, setAll_course] = useState('');

const fetchData = () => {
  axios.get(`${BASE_URL}/all_course_webpages`).then((response) => {
    console.log("response of all_course_webpages", response);
 if (response.status == 200) {
      const data = response.data.data[0];
      console.log("real data", response.data.data[0]);
      console.log("banner imggg",data.yogaTeamSlideImage)
      setAll_course(response.data.data[0]);
      

      var imageUrlcustum = data && data.yogaTeamSlideImage 
      ? `${BASE_URL_IMAGE}/images/coursewebpage/${data.yogaTeamSlideImage}`
            : ''; // Fallback image or empty string
        
        
            setBannerImg(imageUrlcustum)
    }
  }).catch((error) => {
    console.log("error", error)
  })
}


useEffect(() => {
  fetchData();

}, []);
  
  
  
  
console.log("all courses data",all_course,bannerImg)
console.log("banner image",bannerImg)
// ==================================================================
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

  return (
    <>
      <section id="all_courses">
        {/* cart-overlay */}
        <div className="cart-overlay">
          <div className="cart-overlay-content">
            <div className="cart-overlay-heading">
              <div className="cart_wrapper__left-box">
                <div className="cart_left__heading">
                  <h6>200H Yogalehrer Ausbildung M1 + M2</h6>
                  <div className="del">
                    <button>
                      <i className="bx bx-trash" />
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  <p>€2799</p>
                </div>
                <div className="cart-list">
                  <ul>
                    <li>
                      <i className="bx bxs-calendar" /> 30.09.2024 - 15.10.2024
                    </li>
                    <li>Sampurna Seminarhaus</li>
                    <li>Noch 5 Platz frei</li>
                  </ul>
                </div>
                <div className="cart-total">
                  <h6>TOTAL</h6>
                  <p>€2799</p>
                </div>
              </div>
              <div className="anmeldung">
                <a href="registration.php" className="global_btn">
                  ANMELDUNG
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* banner section */}
        {isDialogVisible && (
                 <div id="modalOverlay" className="hiddenOverlayContainer" style={{display:"block"}}>
  
          <div className="customDialogBox">
            <span className="exitButtonTrigger" onClick={closeDialogBox}>×</span>
            <div className="dialogIcon">
              <img
                src={dilogImg}
                style={{ width: 80 }}
                alt
              />
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

        <SimpleBanner3 banner={bannerImg && bannerImg} heading={all_course.yogaTeamSliderHeading} para={all_course.yogaTeamSliderParagraph} videoLink={all_course.yogaTeamSliderVideoLink}
 buttonTxt='KUNDENSTIMMEN VIDEO' />

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
                    width={560}
                    height={315}
                    src="https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about turiya */}
        <section class="global_wrapper about_wrapper" data-aos="fade-up">
          <div class="container">
            <div class="row">
              <div class="col-lg-9">
                <div class="about_wrapper__left" data-aos="fade-up">
                  <h1> {all_course.about_first_section_Heading}</h1>
                  <div class="kurse_link">
                    <a href="yogalehrer-ausbildung-100h.php">modul 1</a>
                    <a href="yogalehrer-ausbildung-200h-aya.php">modul 2</a>
                    <a href="yogalehrer-ausbildung-300h.php">modul 3</a>
                    <a href="yogalehrer-ausbildung-400h.php">modul 4</a>
                    <a href="yogalehrer-ausbildung-500h.php">modul 5</a>
                  </div>


                  <p
                        
                        className="p-0"
                      //   style={{
                      //       color: "rgb(33, 37, 41)",
                      //       fontFamily: "Roboto, sans-serif",
                      //       fontSize: 16,
                      // }}
                        
                        
                        
                        dangerouslySetInnerHTML={{ __html: all_course.about_first_section_Paragraph_Content }} >
                        


                          </p>

        
                  {/* <p>
                    <strong> * Bei Gesamtbuchung </strong>| Blockausbildung{" "}
                    <strong> M1 - M5</strong> (500h) :<strong> 7.390-€</strong>{" "}
                    AYA zertifiziert
                  </p> */}
                </div>
              </div>
              <div class="col-lg-3">
                <div class="about_wrapper__right">
                  <h3>* All Inklusive Yogalehrer Ausbildung M3</h3>
                  <div class="price-tag">
                    <h6>
                      <i class="bx bxs-purchase-tag"></i>1699€
                    </h6>
                  </div>
                  <div class="about-date">
                    <p>
                      <i class="bx bxs-map"></i>Goa, Indien
                    </p>
                    <p>
                      <i class="bx bxs-calendar"></i> 15.11.2024 - 22.11.2024
                    </p>
                  </div>
                  <div class="about-text">
                    <p>
                      Reise und Unterkunft sind nicht immer im Schulungspreis
                      enthalten. Wenn Sie weitere Fragen haben, rufen Sie uns
                      einfach an. Wir helfen Ihnen gerne weiter.
                    </p>
                  </div>
                  <div class="about-contact">
                    <a href="tel:+4906920134987">
                      <i class="bx bxs-phone-call"></i> +49 (0)69 - 20134987
                    </a>
                    <a href="mailto:info@turiyayoga.de">
                      <i class="bx bxs-envelope"></i> info@turiyayoga.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* table */}
        <div>
          
          {
            allUpcomingData && allUpcomingData.map((item, index) => {
              return   <section className="global_wrapper kommende_table index-table" style={{padding: '10px 0 !important'}}>
              <div className="container">
                <div className="kommende_table__three" id="kommende_table__four">
                    <h3>
                      
                      {/* * All Inklusive Yogalehrer Ausbildung M3 */}
                      
                      {item.modulesubheading}
                    
                    
                    
                    </h3>
                  <strong />
                  <table className="table" data-aos="zoom-in-up">
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
                    <tbody className="table-body">
                      <tr>
                        <th>* All Inklusive Yogalehrer Ausbildung M3 </th>
                        <td>
                          <i className="bx bxs-calendar me-1" />15.11.2024                                        &nbsp;-&nbsp;
                          22.11.2024                                  </td>
                        <td><a href="#" className="location"><i className="bx bxs-map" /> Goa, Indien</a></td>
                        <td>€1699</td>
                        <td>Noch 5 Plätze frei</td>
                        <td>
                          <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={11}    onClick={handletriggerDialogBox}>ANMELDEN</button>                                            
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            })
          }

  <section className="global_wrapper kommende_table index-table" style={{padding: '10px 0 !important'}}>
    <div className="container">
      <div className="kommende_table__three" id="kommende_table__four">
        <h3>* All Inklusive Yogalehrer Ausbildung M4</h3>
        <strong />
        <table className="table" data-aos="zoom-in-up">
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
          <tbody className="table-body">
            <tr>
              <th>* All Inklusive Yogalehrer Ausbildung M4</th>
              <td>
                <i className="bx bxs-calendar me-1" />25.11.2024                                        &nbsp;-&nbsp;
                02.12.2024                                  </td>
              <td><a href="#" className="location"><i className="bx bxs-map" /> Goa, Indien</a></td>
              <td>€1699</td>
              <td>Noch 5 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={12}    onClick={handletriggerDialogBox}>ANMELDEN</button>                                            
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section className="global_wrapper kommende_table index-table" style={{padding: '10px 0 !important'}}>
    <div className="container">
      <div className="kommende_table__three" id="kommende_table__four">
        <h3>* All Inklusive 60H Yin Yoga</h3>
        <strong />
        <table className="table" data-aos="zoom-in-up">
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
          <tbody className="table-body">
            <tr>
              <th>* All Inklusive 60H Yin Yoga</th>
              <td>
                <i className="bx bxs-calendar me-1" />04.12.2024                                        &nbsp;-&nbsp;
                09.12.2024                                  </td>
              <td><a href="#" className="location"><i className="bx bxs-map" /> Goa, Indien</a></td>
              <td>€1100</td>
              <td>Noch 4 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={13}    onClick={handletriggerDialogBox}>ANMELDEN</button>                                            
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section className="global_wrapper kommende_table index-table" style={{padding: '10px 0 !important'}}>
    <div className="container">
      <div className="kommende_table__three" id="kommende_table__four">
        <h3>* All Inklusive   60H  Senioren YLA</h3>
        <strong />
        <table className="table" data-aos="zoom-in-up">
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
          <tbody className="table-body">
            <tr>
              <th>* All Inklusive  60H  Senioren YLA</th>
              <td>
                <i className="bx bxs-calendar me-1" />11.12.2024                                        &nbsp;-&nbsp;
                16.12.2024                                  </td>
              <td><a href="#" className="location"><i className="bx bxs-map" /> Goa, Indien</a></td>
              <td>€1449</td>
              <td>Noch 6 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={14}    onClick={handletriggerDialogBox}>ANMELDEN</button>                                            
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section className="global_wrapper kommende_table index-table" style={{padding: '10px 0 !important'}}>
    <div className="container">
      <div className="kommende_table__three" id="kommende_table__four">
        <h3>200H Yogalehrer Ausbildung M1 + M2</h3>
        <strong />
        <table className="table" data-aos="zoom-in-up">
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
          <tbody className="table-body">
            <tr>
              <th>200H Yogalehrer Ausbildung M1 + M2</th>
              <td>
                <i className="bx bxs-calendar me-1" />11.01.2025                                        &nbsp;-&nbsp;
                31.01.2025                                  </td>
              <td><a href="#" className="location"><i className="bx bxs-map" /> Goa, Indien</a></td>
              <td>€2790</td>
              <td>Noch 5 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={15}    onClick={handletriggerDialogBox}>ANMELDEN</button>                                            
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section className="global_wrapper kommende_table index-table" style={{padding: '10px 0 !important'}}>
    <div className="container">
      <div className="kommende_table__three" id="kommende_table__four">
        <h3>200H Yogalehrer Ausbildung M1 + M2</h3>
        <strong />
        <table className="table" data-aos="zoom-in-up">
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
          <tbody className="table-body">
            <tr>
              <th>200H Yogalehrer Ausbildung M1 + M2</th>
              <td>
                <i className="bx bxs-calendar me-1" />13.02.2025                                        &nbsp;-&nbsp;
                28.02.2025                                  </td>
              <td><a href="#" className="location"><i className="bx bxs-map" /> Mallorca</a></td>
              <td>€2699</td>
              <td>Noch 11 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={21}    onClick={handletriggerDialogBox}>ANMELDEN</button>                                            
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section className="global_wrapper kommende_table index-table" style={{padding: '10px 0 !important'}}>
    <div className="container">
      <div className="kommende_table__three" id="kommende_table__four">
        <h3>200H Wochenend Ausbildung</h3>
        <strong />
        <table className="table" data-aos="zoom-in-up">
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
          <tbody className="table-body">
            <tr>
              <th>200H Wochenend Ausbildung</th>
              <td>
                <i className="bx bxs-calendar me-1" />13.03.2025                                        &nbsp;-&nbsp;
                17.08.2025                                  </td>
              <td><a href="#" className="location"><i className="bx bxs-map" /> Berlin</a></td>
              <td>€2699</td>
              <td>Noch 5 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={20}    onClick={handletriggerDialogBox}>ANMELDEN</button>                                            
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section className="global_wrapper kommende_table index-table" style={{padding: '10px 0 !important'}}>
    <div className="container">
      <div className="kommende_table__three" id="kommende_table__four">
        <h3>200H Yogalehrer Ausbildung M1 + M2</h3>
        <strong />
        <table className="table" data-aos="zoom-in-up">
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
          <tbody className="table-body">
            <tr>
              <th>200H Yogalehrer Ausbildung M1 + M2</th>
              <td>
                <i className="bx bxs-calendar me-1" />01.09.2025                                        &nbsp;-&nbsp;
                17.09.2025                                  </td>
              <td><a href="#" className="location"><i className="bx bxs-map" /> Mallorca</a></td>
              <td>€2699</td>
              <td>Noch 15 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={22}    onClick={handletriggerDialogBox}>ANMELDEN</button>                                            
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</div>

{/* ============== */}
  <Gallery/>
        {/* contact form */}
        <Contact />
        {/* gallery */}

        <NewsShelter />
      </section>
    </>
  );
};

export default Index;
