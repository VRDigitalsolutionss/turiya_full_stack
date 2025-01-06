import React, { useEffect, useState } from "react";
import dilogImg from "../assets/images/high-important.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../config";

const BannerSlowerWrapper = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("turiya_auth_token");
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

  useEffect(() => {
    fetchNextUpcomingCourse();
  }, []);

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

    if (token) {
      navigate("/register");
    }
  };

  console.log("cloest final data", closestUpcomingCourse);

  function convertDateFormat(dateString) {
    // Split the date string into year, month, and day parts
    const [year, month, day] = dateString.split("-");

    // Reconstruct the date string in the desired format
    return `${day}.${month}.${year}`;
  }

  // Example usage:
  const dateString = "2025-01-09";
  const formattedDate = convertDateFormat(dateString);
  console.log(formattedDate); // Output: 09.01.2025

  function isOfferValid(offerEndDate) {
    if (!offerEndDate) return false;
  
    const today = new Date();
    const offerEnd = new Date(offerEndDate);
  
    return today <= offerEnd;
  }

  return (
    <>
      <section className="slower_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div
                className="slower_wrapper__center same-box aos-init aos-animate"
                data-aos="zoom-in-up"
                data-aos-duration="2000">
                <h3> Yogalehrer Ausbildungen</h3>
                <h6>
                  WIR <i className="bx bx-heart" />
                  YOGA
                </h6>
                <p>
                  <strong>
                    Namaste und Willkommen zur deiner Yogalehrer
                    Intensivausbildung bei der Turiya Yoga Akademie in Frankfurt
                    am Main &amp; Schlangen Bad, Deutschland || Mallorca,
                    Spanien || Goa &amp; Himachal Indien..
                  </strong>
                </p>
                <p>
                  Direkt aus Indien nach Deutschland – jetzt bieten wir hier
                  international anerkannte und zertifizierte Yogalehrer
                  Ausbildungen nach Yoga Alliance. Freu dich auf Kurse, die
                  nicht nur im modernen, sondern auch im traditionellen Yoga
                  solide Grundlagen bieten. Spielerisch und gleichzeitig tief
                  präsentieren wir weit mehr als nur Yogaübungen, umfangreiche
                  Verwendung von Hilfsmitteln und hands-on adjustments.
                </p>
                <p>
                  <i>
                    Einer der fundiertesten Yogalehrer Ausbildungen in
                    Deutschland.
                  </i>
                </p>
                <div
                  className="slower_wrapper__center-ul aos-init"
                  data-aos="fade-up">
                  <li>
                    <i className="bx bx-check" />4 Professoren
                  </li>
                  <li>
                    <i className="bx bx-check" />2 Physiotherapeuten
                  </li>
                  <li>
                    <i className="bx bx-check" />2 Ärzte
                  </li>
                  <li>
                    <i className="bx bx-check" />+ erfahrene Yogalehrer
                  </li>
                </div>
                <div
                  className="slower_wrapper__center-icon aos-init"
                  data-aos="fade-up">
                  <img
                    src="https://www.turiyayoga.de/assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys200-150x150.webp"
                    className="img-fluid"
                    alt="Turiya Yoga Yogalehrer Ausbildungen AYA RYS 200"
                  />
                  <img
                    src="https://www.turiyayoga.de/assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys300-150x150.webp"
                    className="img-fluid"
                    alt="Turiya Yoga Yogalehrer Ausbildungen AYA RYS 300"
                  />
                  <img
                    src="https://www.turiyayoga.de/assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys500-150x150.webp"
                    className="img-fluid"
                    alt="Turiya Yoga Yogalehrer Ausbildungen AYA RYS 500"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div
                className="slower_wrapper__right same-box aos-init"
                data-aos="zoom-in-up"
                data-aos-duration="2000">
                <img
                  src="https://www.turiyayoga.de/assets/images/yogalehrer.webp"
                  className="img-fluid"
                  alt="yogalehrer"
                />
                <div className="slower_wrapper__right-content">
                  <h3>YOGALEHRER AUSBILDUNGEN</h3>

                  <p
                    className="p-0"
                    //   style={{
                    //       color: "rgb(33, 37, 41)",
                    //       fontFamily: "Roboto, sans-serif",
                    //       fontSize: 16,
                    // }}

                    dangerouslySetInnerHTML={{
                      __html:
                        closestUpcomingCourse &&
                        closestUpcomingCourse[0].Homepage_cardcontent,
                    }}></p>

                  {/* <p /><h6 className="subtitle2" style={{fontSize: '1.3em', fontFamily: 'Roboto, sans-serif', marginRight: 0, marginLeft: 0, textTransform: 'capitalize', backgroundColor: 'rgb(235, 235, 235)', marginTop: '0.8em !important', marginBottom: '0.8em !important', fontWeight: '300 !important', color: 'rgb(68, 68, 68) !important', letterSpacing: '2px !important'}}>200h AYA Intensivausbildung</h6><p style={{margin: '4px 0px 0px', color: 'rgb(85, 85, 85)', lineHeight: '1.8', fontFamily: 'Roboto, sans-serif', fontSize: '14.4px', backgroundColor: 'rgb(235, 235, 235)'}}>Hatha-Vinyasa Yogalehrer Intensivausbildung ab 2.699€,&nbsp;<span style={{fontWeight: 'bolder'}}>Yoga Alliance zertifiziert,&nbsp;international anerkannt!</span>&nbsp;Werde ein&nbsp;<span style={{fontWeight: 'bolder'}}>selbstsicherer</span>&nbsp;Yogalehrer.</p><p style={{margin: '4px 0px 0px', color: 'rgb(85, 85, 85)', lineHeight: '1.8', fontFamily: 'Roboto, sans-serif', fontSize: '14.4px', backgroundColor: 'rgb(235, 235, 235)'}}>Lerne die Anwendung von&nbsp;<span style={{fontWeight: 'bolder'}}>Hilfsmitteln</span>, wesentliche&nbsp;<span style={{fontWeight: 'bolder'}}>hands-on</span>&nbsp;Techniken und sichere&nbsp;<span style={{fontWeight: 'bolder'}}>Ausrichtung</span>. Lasse dich von&nbsp;<span style={{fontWeight: 'bolder'}}>Yoga Sutras, Upanishaden&nbsp;</span>und&nbsp;<span style={{fontWeight: 'bolder'}}>Hatha Texte&nbsp;</span>inspirieren.</p><p /> */}
                  <div
                    className="slower_wrapper__right-date aos-init"
                    data-aos="fade-up">
                    <ul>
                      <li>
                        <i className="bx bxs-map" />{" "}
                        {closestUpcomingCourse &&
                          closestUpcomingCourse[0].Location}
                      </li>
                      <li>
                        <i className="bx bxs-calendar me-1" />
                        {convertDateFormat(
                          closestUpcomingCourse &&
                          closestUpcomingCourse[0].StartDate
                        )}{" "}
                        &nbsp;-&nbsp;
                        {convertDateFormat(
                          closestUpcomingCourse &&
                          closestUpcomingCourse[0].EndDate
                        )}{" "}
                      </li>
                    </ul>
                  </div>





                  <div className="price">
                    {
                      closestUpcomingCourse &&
                        closestUpcomingCourse[0] &&
                        isOfferValid(closestUpcomingCourse[0].OfferEndDate) &&
                        closestUpcomingCourse[0].Offerprice > 0 ? (
                        <button
                          className="table-btn triggerDialogBox me-2"
                          style={{
                            border: "0px solid",
                            color: "white",
                            backgroundColor: "rgb(198, 132, 27)",
                          }}
                          data-id={9}
                          onClick={handletriggerDialogBox}
                        >
                          €{closestUpcomingCourse[0].Offerprice}
                        </button>
                      ) : null
                    }

                    <button
                      className="table-btn triggerDialogBox"
                      style={{ border: "0px solid" }}
                      data-id={9}
                      onClick={handletriggerDialogBox}>
                      €{closestUpcomingCourse &&
                        closestUpcomingCourse[0] &&
                        isOfferValid(closestUpcomingCourse[0].OfferEndDate) &&
                        closestUpcomingCourse[0].Offerprice > 0 ? <del>{closestUpcomingCourse && closestUpcomingCourse[0].price}</del> : closestUpcomingCourse && closestUpcomingCourse[0].price}
                    </button>{" "}
                  </div>


                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div
                className="slower_wrapper__left same-box aos-init"
                data-aos="zoom-in-up"
                data-aos-duration="2000">
                <img
                  src="https://www.turiyayoga.de/assets/images/img1.webp"
                  className="img-fluid"
                  alt="ÜBER UNS"
                />
                <div
                  className="slower_wrapper__content aos-init"
                  data-aos="fade-up">
                  <h1> ÜBER UNS</h1>
                  <p>
                    Ehrliches Engagement, Zugänglichkeit, Offenheit und solides
                    Wissen.{" "}
                    <span>
                      Nach diesen Werten leben und unterrichten wir in unseren
                      Yoga Ausbildungen &amp; Yoga Kursen.
                    </span>
                  </p>
                  <p>
                    Die Mitbegründer sind von Anfang an dabei und helfen dir,
                    westliche und östliche Weisheit auf deine Weise in dein
                    Leben und deine Yoga Praxis zu integrieren.
                  </p>
                  <div className="blank-space" />
                  <div className="price aos-init" data-aos="fade-up">
                    <Link to="/unsere-Geschichtetory">MEHR</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="form-body">
      <div className="modal fade" id="exampleModal-form" tabIndex={-1} aria-labelledby="exampleModalLabel-form" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-body-top">
                <div className="modal_input">
                  <label>Benutzername <span>*</span></label>
                  <input type="text" />
                </div>
                <div className="modal_input">
                  <label>Passwort <span>*</span></label>
                  <input type="text" />
                </div>
                <div className="submit-form">
                  <button className="global_btn">Einloggen</button>
                </div>
              </div>
              <div className="form-body-bottom card-footer">
                <div className="password-forgot">
                  <a href="forgot-login.php" className="btn btn-primary">Passwort vergessen?</a>
                </div>
                <h3>Hast du noch keinen Account?</h3>
                <div className="annmelden">
                  <a href="registration.php">Anmelden</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
        </div>

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
      </section>
    </>
  );
};

export default BannerSlowerWrapper;
