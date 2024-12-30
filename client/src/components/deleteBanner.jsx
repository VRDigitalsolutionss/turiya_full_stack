import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="banner_wrapper">
        <div className="banner_slider">
          <Swiper
            navigation={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              {" "}
              <div className="banner_bg banner_bg1">
                <div className="banner-content container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner_bg__content" data-aos="fade-up" >
                        <h1
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={1}>
                          Yogalehrer Ausbildungen- Frankfurt am Main
                        </h1>
                        <p
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={2}>
                          16 Tage Hatha - Vinyasa Yogalehrer Intensivausbildung{" "}
                          <strong>200H - AYA zertifiziert</strong>ab 2.999€
                          zzgl. Unterkunft &amp; Verpflegung in Frankfurt am
                          Main.
                        </p>
                        <div
                          className="banner_bg__content-btn"
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={3}>
                          <div className="mehr-btn">
                            <Link to="/yogaTraningSampurna" >MEHR</Link>
                          </div>
                          <div
                            className="video-btn mehr-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            {/*<a href="#"><i className='bx bx-play'></i> video</a>*/}
                            <button>
                              <i className="bx bx-play" /> video
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <SwiperSlide>
              <div className="banner_bg banner_bg2">
                <div className="banner-content container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner_bg__content fade-up-animation" data-aos="fade-up">
                        <h1 data-animation-in="animate__fadeInUp" data-duration-in={1}>
                          Yogalehrer Ausbildungen- Frankfurt am Main
                        </h1>
                        <p data-animation-in="animate__fadeInUp" data-duration-in={2}>
                          16 Tage Hatha - Vinyasa Yogalehrer Intensivausbildung <strong>200H - AYA zertifiziert</strong> ab 2.999€ zzgl. Unterkunft & Verpflegung in Frankfurt am Main.
                        </p>
                        <div className="banner_bg__content-btn" data-animation-in="animate__fadeInUp" data-duration-in={3}>
                          <div className="mehr-btn">
                            <Link to="/yogaTraningSampurna">MEHR</Link>
                          </div>
                          <div className="video-btn mehr-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <button><i className="bx bx-play" /> video</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="banner_bg banner_bg3">
                <div className="banner-content container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner_bg__content" data-aos="fade-up">
                        <h1
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={1}>
                          200H Yogalehrer Ausbildung- Schlangenbad
                        </h1>
                        <p
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={2}>
                          <strong>16 Tage</strong> Hatha- Vinyasa Yogalehrer
                          Intensivausbildung 200H -
                          <strong>AYA zertifiziert </strong>ab 2.000€ zzgl.
                          Unterkunft &amp; Verpflegung in
                          <strong>
                            Sampurna- Seminarhaus, Schlangenbad-Wiesbaden.
                          </strong>
                        </p>
                        <div
                          className="banner_bg__content-btn"
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={3}>
                          <div className="mehr-btn">
                          <Link to="/yogaTraningSampurna" >MEHR</Link>
                          </div>
                          <div
                            className="video-btn mehr-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal3">
                            {/*<a href="#"><i className='bx bx-play'></i> video</a>*/}
                            <button>
                              <i className="bx bx-play" /> video
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="banner_bg banner_bg4">
                <div className="banner-content container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner_bg__content" data-aos="fade-up">
                        <h1
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={1}>
                          200h Yogalehrer Ausbildung -Mallorca
                        </h1>
                        <p
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={2}>
                          <strong>18-tägige 200H Intensivausbildun</strong>g -
                          (auf Deutsch) 4 Sterne Hotel am Strand in Mallorca .
                          Hatha-Vinyasa Yogalehrer Intensivausbildung ab
                          <strong>2.999€-</strong> zzgl. Verpflegung &amp;
                          Unterkunft Yoga Alliance zertifiziert (AYA),
                          International anerkannt! Werde ein selbstsicherer
                          Yogalehrer.
                        </p>
                        <div
                          className="banner_bg__content-btn"
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={3}>
                          <div className="mehr-btn">
                          <Link to="/yogalehrer_Ausbildung" >MEHR</Link>
                          </div>
                          <div
                            className="video-btn mehr-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal4">
                            {/*<a href="#"><i className='bx bx-play'></i> video</a>*/}
                            <button>
                              <i className="bx bx-play" /> video
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="banner_bg banner_bg5">
                <div className="banner-content container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner_bg__content" data-aos="fade-up">
                        <h1
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={1}>
                          Yogalehrer Ausbildung Goa, Indien *all inklusive
                        </h1>
                        <p
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={2}>
                          21 Tage Hatha - Vinyasa Yogalehrer Intensivausbildung
                          (auf Deutsch) 200H - AYA zertifiziert, Unterkunft
                          &amp; Verpflegung im Yoga Resort nahe Strand ab 2.799€
                          inkl. Verpflegung &amp; Unterkunft in{" "}
                          <strong>Goa, Indien</strong>
                        </p>
                        <div
                          className="banner_bg__content-btn"
                          data-animation-in="animate__fadeInUp"
                          data-duration-in={3}>
                          <div className="mehr-btn">
                          <Link to="/yoga_Traning_Goa" >MEHR</Link>
                          </div>
                          <div
                            className="video-btn mehr-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal5">
                            {/*<a href="#"><i className='bx bx-play'></i> video</a>*/}
                            <button>
                              <i className="bx bx-play" /> video
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* <section className="slower_wrapper">
  <div className="container">
    <div className="row">
      <div className="col-xl-4">
        <div className="slower_wrapper__center same-box aos-init aos-animate" data-aos="zoom-in-up">
          <h3> Yogalehrer Ausbildungen</h3>
          <h6>WIR <i className="bx bx-heart" />YOGA</h6>
          <p><strong>Namaste und Willkommen zur deiner Yogalehrer Intensivausbildung bei der Turiya Yoga
              Akademie in Frankfurt am Main &amp; Schlangen Bad, Deutschland || Mallorca, Spanien || Goa &amp;
              Himachal Indien..</strong></p>
          <p>Direkt aus Indien nach Deutschland – jetzt bieten wir hier international anerkannte und
            zertifizierte Yogalehrer Ausbildungen nach Yoga Alliance. Freu dich auf Kurse, die nicht nur
            im modernen, sondern auch im traditionellen Yoga solide Grundlagen bieten. Spielerisch und
            gleichzeitig tief präsentieren wir weit mehr als nur Yogaübungen, umfangreiche Verwendung
            von Hilfsmitteln und hands-on adjustments.</p>
          <p><i>Einer der fundiertesten Yogalehrer Ausbildungen in Deutschland.</i></p>
          <div className="slower_wrapper__center-ul aos-init" data-aos="fade-up">
            <li><i className="bx bx-check" />4 Professoren</li>
            <li><i className="bx bx-check" />2 Physiotherapeuten</li>
            <li><i className="bx bx-check" />2 Ärzte</li>
            <li><i className="bx bx-check" />+ erfahrene Yogalehrer</li>
          </div>
          <div className="slower_wrapper__center-icon aos-init" data-aos="fade-up">
            <img src="https://www.turiyayoga.de/assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys200-150x150.webp" className="img-fluid" alt="Turiya Yoga Yogalehrer Ausbildungen AYA RYS 200" />
            <img src="https://www.turiyayoga.de/assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys300-150x150.webp" className="img-fluid" alt="Turiya Yoga Yogalehrer Ausbildungen AYA RYS 300" />
            <img src="https://www.turiyayoga.de/assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys500-150x150.webp" className="img-fluid" alt="Turiya Yoga Yogalehrer Ausbildungen AYA RYS 500" />
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="slower_wrapper__right same-box aos-init" data-aos="zoom-in-up">
          <img src="https://www.turiyayoga.de/assets/images/yogalehrer.webp" className="img-fluid" alt="yogalehrer" />
          <div className="slower_wrapper__right-content">
            <h3>YOGALEHRER AUSBILDUNGEN</h3>
            <p /><h6 className="subtitle2" style={{fontSize: '1.3em', fontFamily: 'Roboto, sans-serif', marginRight: 0, marginLeft: 0, textTransform: 'capitalize', backgroundColor: 'rgb(235, 235, 235)', marginTop: '0.8em !important', marginBottom: '0.8em !important', fontWeight: '300 !important', color: 'rgb(68, 68, 68) !important', letterSpacing: '2px !important'}}>200h AYA Intensivausbildung</h6><p style={{margin: '4px 0px 0px', color: 'rgb(85, 85, 85)', lineHeight: '1.8', fontFamily: 'Roboto, sans-serif', fontSize: '14.4px', backgroundColor: 'rgb(235, 235, 235)'}}>Hatha-Vinyasa Yogalehrer Intensivausbildung ab 2.699€,&nbsp;<span style={{fontWeight: 'bolder'}}>Yoga Alliance zertifiziert,&nbsp;international anerkannt!</span>&nbsp;Werde ein&nbsp;<span style={{fontWeight: 'bolder'}}>selbstsicherer</span>&nbsp;Yogalehrer.</p><p style={{margin: '4px 0px 0px', color: 'rgb(85, 85, 85)', lineHeight: '1.8', fontFamily: 'Roboto, sans-serif', fontSize: '14.4px', backgroundColor: 'rgb(235, 235, 235)'}}>Lerne die Anwendung von&nbsp;<span style={{fontWeight: 'bolder'}}>Hilfsmitteln</span>, wesentliche&nbsp;<span style={{fontWeight: 'bolder'}}>hands-on</span>&nbsp;Techniken und sichere&nbsp;<span style={{fontWeight: 'bolder'}}>Ausrichtung</span>. Lasse dich von&nbsp;<span style={{fontWeight: 'bolder'}}>Yoga Sutras, Upanishaden&nbsp;</span>und&nbsp;<span style={{fontWeight: 'bolder'}}>Hatha Texte&nbsp;</span>inspirieren.</p><p />
            <div className="slower_wrapper__right-date aos-init" data-aos="fade-up">
              <ul>
                <li><i className="bx bxs-map" />Goa, Indien</li>
                <li><i className="bx bxs-calendar me-1" />
                  22.10.2024                        &nbsp;-&nbsp;
                  11.11.2024                  </li>
              </ul>
            </div>
            <div className="price">
              <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={9}>€2850</button>          </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="slower_wrapper__left same-box aos-init" data-aos="zoom-in-up">
          <img src="https://www.turiyayoga.de/assets/images/img1.webp" className="img-fluid" alt="ÜBER UNS" />
          <div className="slower_wrapper__content aos-init" data-aos="fade-up">
            <h1> ÜBER UNS</h1>
            <p>Ehrliches Engagement, Zugänglichkeit, Offenheit und solides Wissen. <span>Nach diesen
                Werten leben und unterrichten wir in unseren Yoga Ausbildungen &amp; Yoga
                Kursen.</span></p>
            <p>Die Mitbegründer sind von Anfang an dabei und helfen dir, westliche und östliche Weisheit
              auf deine Weise in dein Leben und deine Yoga Praxis zu integrieren.</p>
            <div className="blank-space" />
            <div className="price aos-init" data-aos="fade-up">
              <a href="unsere-geschichte.php">MEHR</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="form-body">
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
    </div>
  </div>
</section> */}

      {/*           
<section className="global_wrapper third_section">
  <div className="container">
    <div className="global_wrapper__content aos-init aos-animate" data-aos="zoom-in-up">
      <div className="leaf">
        <i className="bx bxs-leaf" />
      </div>
      <div className="main_heading">
        <h1>Aufbau unserer Yogalehrer Ausbildung</h1>
        <p>Durch den flexiblen und modularen Aufbau unserer Yogalehrer Ausbildung, kannst du einfach
          entscheiden welches Tempo für dich am besten ist. Jedes Modul besteht aus 100 Stunden! Unsere
          200h und 500h Yoga Ausbildungen sind <strong> Yoga Alliance zertifiziert!</strong></p>
      </div>
    </div>
  </div>
  <div className="global_content">
    <div className="container">
      <div className="third_section__grid">
        <div className="third_section__box aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
          <div className="box_img">
            <img src="https://www.turiyayoga.de/assets/images/yoga1.webp" className="img-fluid" alt="yoga" />
          </div>
          <div className="box_content">
            <h3>MODUL 1</h3>
            <p>Tauche ein in die Welt des Yogalehrer-Basiskurses in nur 8 Tagen (100 Stunden). Erweitere
              dein Wissen über traditionelles und modernes Hatha Yoga, mit und ohne Hilfsmittel. Lass
              dich von der Geschichte des Yoga und den Upanishaden tief inspirieren.
            </p>
            <div className="mehr--btn">
              <a href="yogalehrer-ausbildung-100h.php">MEHR</a>
            </div>
          </div>
        </div>
        <div className="third_section__box aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
          <div className="box_img">
            <img src="https://www.turiyayoga.de/assets/images/yoga2.webp" className="img-fluid" alt="yoga" />
          </div>
          <div className="box_content">
            <h3>MODUL 2</h3>
            <p>200h AYA zertifizierte Yogalehrer Ausbildung. Erreiche eine solide Grundlage in Vinyasa,
              erweitere dein Wissen über den Einsatz von Hilfsmitteln und lerne wichtige Hands-on
              Techniken. Verstehe die Yoga Sutras und vertiefe deine Perspektive im Tantra Yoga.
            </p>
            <div className="mehr--btn">
              <a href="yogalehrer-ausbildung-200h-aya.php">MEHR</a>
            </div>
          </div>
        </div>
        <div className="third_section__box aos-init aos-animate" data-aos="fade-up" data-aos-delay={300}>
          <div className="box_img">
            <img src="https://www.turiyayoga.de/assets/images/yoga3.webp" className="img-fluid" alt="yoga" />
          </div>
          <div className="box_content">
            <h3>MODUL 3</h3>
            <p>Erfahre mehr über die Unterstützung der inneren Organe und Körpersysteme. Tauche tiefer
              in Flow, Ashtanga und weitere Hands-On Techniken ein. Lass dich von den Texten der
              Bhagavad Gita und des Hatha Yoga tief inspirieren und begeistern.</p>
            <div className="mehr--btn">
              <a href="yogalehrer-ausbildung-300h.php">MEHR</a>
            </div>
          </div>
        </div>
        <div className="third_section__box aos-init aos-animate" data-aos="fade-up" data-aos-delay={400}>
          <div className="box_img">
            <img src="https://www.turiyayoga.de/assets/images/yoga4.webp" className="img-fluid" alt="yoga" />
          </div>
          <div className="box_content">
            <h3>MODUL 4</h3>
            <p>Erfahre mehr über die Unterstützung des gesunden Geistes und die wichtigsten
              neurophysiologischen Aspekte der subtilen Yoga Praxis. Lerne weitere Hands-On Techniken!
              Erweitere dein Know-how zum Unterrichten von Workshops und bringe deine Fähigkeiten auf
              das nächste Level.
            </p>
            <div className="mehr--btn">
              <a href="yogalehrer-ausbildung-400h.php">MEHR</a>
            </div>
          </div>
        </div>
        <div className="third_section__box aos-init aos-animate" data-aos="fade-up" data-aos-delay={500}>
          <div className="box_img">
            <img src="https://www.turiyayoga.de/assets/images/yoga5.webp" className="img-fluid" alt="yoga" />
          </div>
          <div className="box_content">
            <h3>MODUL 5</h3>
            <p>Beende deine 500h AYA zertifizierte Yogalehrer Ausbildung. Kombiniere Yin Yoga und Senior
              Yoga, um die verbleibenden 100 Stunden zu absolvieren. Vollende deinen eigenen Weg und
              spezialisiere dich auf Themen, die dir besonders am Herzen liegen.
            </p>
            <div className="mehr--btn">
              <a href="yogalehrer-ausbildung-500h.php">MEHR</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

      {/* <section className="global_wrapper table_section">
  <div className="container">
    <div className="main_heading aos-init aos-animate" data-aos="zoom-in-up">
      <h1>Kommende Kurse</h1>
    </div>
  </div>
  <div className="global_content">
    <div className="container-fluid">
      <div className="table-responsive index-table">
        <table className="table aos-init" data-aos="zoom-in-up">
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
          <tbody className="table-body desktop">
            <tr>
              <th>200H Yogalehrer Ausbildung M1 + M2</th>
              <td>
                <i className="bx bxs-calendar me-1" />22.10.2024                                    &nbsp;-&nbsp;
                <i className="bx bxs-calendar me-1" />11.11.2024                              </td>
              <td><a href="#" className="location"><i className="bx bxs-map" />Goa, Indien</a></td>
              <td>€2850</td>
              <td>Noch 1 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={9}>ANMELDEN</button>                              </td>
            </tr>
            <tr>
              <th>* All Inklusive Yogalehrer Ausbildung M3</th>
              <td>
                <i className="bx bxs-calendar me-1" />15.11.2024                                    &nbsp;-&nbsp;
                <i className="bx bxs-calendar me-1" />22.11.2024                              </td>
              <td><a href="#" className="location"><i className="bx bxs-map" />Goa, Indien</a></td>
              <td>€1699</td>
              <td>Noch 5 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={11}>ANMELDEN</button>                              </td>
            </tr>
            <tr>
              <th>* All Inklusive Yogalehrer Ausbildung M4</th>
              <td>
                <i className="bx bxs-calendar me-1" />25.11.2024                                    &nbsp;-&nbsp;
                <i className="bx bxs-calendar me-1" />02.12.2024                              </td>
              <td><a href="#" className="location"><i className="bx bxs-map" />Goa, Indien</a></td>
              <td>€1699</td>
              <td>Noch 5 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={12}>ANMELDEN</button>                              </td>
            </tr>
            <tr>
              <th>* All Inklusive 60H Yin Yoga</th>
              <td>
                <i className="bx bxs-calendar me-1" />04.12.2024                                    &nbsp;-&nbsp;
                <i className="bx bxs-calendar me-1" />09.12.2024                              </td>
              <td><a href="#" className="location"><i className="bx bxs-map" />Goa, Indien</a></td>
              <td>€1100</td>
              <td>Noch 4 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={13}>ANMELDEN</button>                              </td>
            </tr>
            <tr>
              <th>* All Inklusive  60H  Senioren YLA</th>
              <td>
                <i className="bx bxs-calendar me-1" />11.12.2024                                    &nbsp;-&nbsp;
                <i className="bx bxs-calendar me-1" />16.12.2024                              </td>
              <td><a href="#" className="location"><i className="bx bxs-map" />Goa, Indien</a></td>
              <td>€1449</td>
              <td>Noch 6 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={14}>ANMELDEN</button>                              </td>
            </tr>
            <tr>
              <th>200H Yogalehrer Ausbildung M1 + M2</th>
              <td>
                <i className="bx bxs-calendar me-1" />11.01.2025                                    &nbsp;-&nbsp;
                <i className="bx bxs-calendar me-1" />31.01.2025                              </td>
              <td><a href="#" className="location"><i className="bx bxs-map" />Goa, Indien</a></td>
              <td>€2790</td>
              <td>Noch 5 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={15}>ANMELDEN</button>                              </td>
            </tr>
            <tr>
              <th>200H Yogalehrer Ausbildung M1 + M2</th>
              <td>
                <i className="bx bxs-calendar me-1" />13.02.2025                                    &nbsp;-&nbsp;
                <i className="bx bxs-calendar me-1" />28.02.2025                              </td>
              <td><a href="#" className="location"><i className="bx bxs-map" />Mallorca</a></td>
              <td>€2699</td>
              <td>Noch 11 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={21}>ANMELDEN</button>                              </td>
            </tr>
            <tr>
              <th>200H Wochenend Ausbildung</th>
              <td>
                <i className="bx bxs-calendar me-1" />13.03.2025                                    &nbsp;-&nbsp;
                <i className="bx bxs-calendar me-1" />17.08.2025                              </td>
              <td><a href="#" className="location"><i className="bx bxs-map" />Berlin</a></td>
              <td>€2699</td>
              <td>Noch 5 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={20}>ANMELDEN</button>                              </td>
            </tr>
            <tr>
              <th>200H Yogalehrer Ausbildung M1 + M2</th>
              <td>
                <i className="bx bxs-calendar me-1" />01.09.2025                                    &nbsp;-&nbsp;
                <i className="bx bxs-calendar me-1" />17.09.2025                              </td>
              <td><a href="#" className="location"><i className="bx bxs-map" />Mallorca</a></td>
              <td>€2699</td>
              <td>Noch 15 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={22}>ANMELDEN</button>                              </td>
            </tr>
          </tbody>
          
          <tbody className="table-body mobile">
            <tr>
              <th>200H Yogalehrer Ausbildung M1 + M2</th>
              <td>
                <i className="bx bxs-calendar me-1" />22.10.2024                                    &nbsp;-&nbsp;
                <i className="bx bxs-calendar me-1" />11.11.2024                              </td>
              <td><a href="#" className="location"><i className="bx bxs-map" />Goa, Indien</a></td>
              <td>€2850</td>
              <td>Noch 1 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={9}>ANMELDEN</button>                              </td>
            </tr>
            <tr>
              <th>* All Inklusive Yogalehrer Ausbildung M3</th>
              <td>
                <i className="bx bxs-calendar me-1" />15.11.2024                                    &nbsp;-&nbsp;
                <i className="bx bxs-calendar me-1" />22.11.2024                              </td>
              <td><a href="#" className="location"><i className="bx bxs-map" />Goa, Indien</a></td>
              <td>€1699</td>
              <td>Noch 5 Plätze frei</td>
              <td>
                <button className="table-btn triggerDialogBox" style={{border: '0px solid'}} data-id={11}>ANMELDEN</button>                              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="all-btn aos-init" data-aos="fade-up">
        <a href="kommende-kurse.php"><i className="bx bxs-calendar" /> ALLE AUSBILDUNGEN</a>
      </div>
    </div>
  </div>
</section> */}

      {/* 
<section className="global_wrapper fifth_section">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="fifth_section__left aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
          <h3>AUSBILDUNG AUF HÖCHSTEM NIVEAU</h3>
          <h1>Das sagen unsere Teilnehmer</h1>
          <p>Die Gründer von Turiya Yoga sind die Kursleiter unserer Yogalehrer Ausbildungen und werden in
            jedem Schritt zusammen mit anderen Experten für dich da sein. Bei uns verlierest du dich
            nicht in der Menge. Hier weißt du genau, wer während dieses transformativen Wegs wirklich
            für dich da sein wird.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="fifth_section__bg aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
          <div className="fifth_section__bg-img">
            <img src="https://www.turiyayoga.de/assets/images/yogamen.webp" className="img-fluid" alt="yogamen" />
          </div>
          <div className="fifth_section__bg-content">
            <p> "Manu’s Unterricht ist immer voller Liebe &amp; Energie für alle!"</p>
            <h6>Chantal Berot, Frankreich</h6>
            <div className="more--btn">
              <a href="kundenstimmen.php">MEHR</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="fifth_section__bg aos-init aos-animate" data-aos="fade-up" data-aos-delay={300}>
          <div className="fifth_section__bg-img">
            <img src="https://www.turiyayoga.de/assets/images/yogalady.webp" className="img-fluid" alt="yogalady" />
          </div>
          <div className="fifth_section__bg-content">
            <p> "Eine Erfahrung, die ich definitiv jedem empfehlen würde."</p>
            <h6>Jade Deanna Mc Sorley, UK</h6>
            <div className="mehr--btn" data-bs-toggle="modal" data-bs-target="#exampleModalLabel6">
              <button><i className="bx bx-play" />VIDEO</button>
 
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="youtube_video">
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
           
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <iframe id="youtube-video" width={560} height={315} src="https://www.youtube.com/embed/izCAn3uvYLo?si=G3ONv3CWqpgPietY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="youtube_video">
      <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
   
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <iframe id="youtube-video2" width={560} height={315} src="https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="youtube_video">
      <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel3" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
     
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <iframe id="youtube-video3" width={560} height={315} src="https://www.youtube.com/embed/m09ZGlZXq54?si=Q6TsbqQ-qeKboBoo" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="youtube_video">
      <div className="modal fade" id="exampleModal4" tabIndex={-1} aria-labelledby="exampleModalLabel4" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <iframe id="youtube-video4" width={560} height={315} src="https://www.youtube.com/embed/Fixnb004sWk?si=o3XtHn4ZJ6nly4EN" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="youtube_video">
      <div className="modal fade" id="exampleModal5" tabIndex={-1} aria-labelledby="exampleModalLabel5" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
 
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <iframe id="youtube-video5" width={560} height={315} src="https://www.youtube.com/embed/yT8hzUAffxE?si=2Q8KhIRiT5VESU-o" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="youtube_video">
      <div className="modal fade" id="exampleModalLabel6" tabIndex={-1} aria-labelledby="exampleModalLabel6" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
     
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <iframe id="youtube-video6" width={560} height={315} src="https://www.youtube.com/embed/z6z4-bnDhws?si=_xadRPMnyrLNH4uc" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
    </>
  );
};

export default Banner;

