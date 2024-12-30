// import React from "react";
import { Link } from "react-router-dom";
import Turiya_Logo from "../assets/images/logo.webp";
const Footer = () => {




  return (
    <>
      <footer>
        <div className="footer_wrapper aos-init aos-animate" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer_box">
                  <div className="footer_logo">
                    <Link to="/">
                      <img src={Turiya_Logo} className="img-fluid" alt="logo" />
                    </Link>
                  </div>
                  <div className="connect">
                    <Link to="tel:+ 49 (0)69 - 20134987">
                      <i className="bx bxs-mobile" /> + 49 (0)69 - 20134987
                    </Link>
                    <Link to="mailto:INFO@TURIYAYOGA.DE">
                      <i className="bx bxs-envelope" />
                      INFO@TURIYAYOGA.DE
                    </Link>
                    <p>
                      <i className="bx bxs-map" />
                      Emanuel Wintermeyer Herbartstraße 12, 60316 Frankfurt am
                      Main, Germany
                    </p>
                  </div>
                  <div className="link">
                    <Link to="/privacy_policy">Impressum</Link>
                    <span>/</span>
                    <Link to="/imprint">Datenschutz</Link>
                  </div>
                  <div className="social-media">
                    <Link to="https://www.facebook.com/turiyayogainternational">
                      <i className="bx bxl-facebook" />
                    </Link>
                    <Link to="https://twitter.com/turiya_yoga">
                      <i className="bx bxl-twitter" />
                    </Link>
                    <Link to="https://www.youtube.com/channel/UCgqWvWLeL9Wbum9vHjD8NAA">
                      <i className="bx bxl-youtube" />
                    </Link>
                    <Link to="https://www.instagram.com/turiyayogainternational">
                      <i className="bx bxl-instagram" />
                    </Link>
                    <Link to="/blog">
                      <i className="bx bxl-blogger" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="footer_links">
                  <ul>
                    <li>
                      <span />
                      <Link   to="/unsere-Geschichtetory"> ÜBER UNS </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/unsere-Philosophie"> UNSERE PHILOSOPHIE </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/kundenstimmen"> KUNDENSTIMMEN </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/kommende-kurse"> YOGALEHRER AUSBILDUNGEN</Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/yogalehrer-ausbildung-200h">
                        {" "}
                        200H AYA YOGALEHRER AUSBILDUNG - INTENSIV
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/yogalehrer-ausbildung-200h">
                        +200H YOGA AUSBILDUNG / MODUL 2
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/blockausbildung-im-ueberblick">
                      BLOCKAUSBILDUNG / ÜBERBLICK
                      </Link>
                    </li>
                    <li>
                      <span />
                      <a href="/blockausbildung-im-ueberblick">
                        500H AYA YOGALEHRER BLOCKAUSBILDUNG | 100H EINZELMODULE
                      </a>
                    </li>
                    <li>
                      <span />
                      <Link to="/yogalehrer-ausbildung-goa-indien">
                        200H AYA YOGALEHRER AUSBILDUNG GOA INDIEN
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/yogalehrer-ausbildung-himalaya-indien">
                        YOGALEHRERAUSBILDUNG HIMALAYA INDIEN
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/200h-yogalehrer-ausbildung-mallorca">
                        {" "}
                        200H/AYA YOGALEHRER AUSBILDUNG I MALLORCA
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/yoga-teacher-training-rishikesh">
                        {" "}
                        YOGA TEACHER TRAINING COURSE RISHIKESH
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/200-hour-yoga-teacher-training">
                        {" "}
                        200 HOUR YOGA TEACHER TRAINING
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/yoga-teacher-training-course-india">
                        {" "}
                        YOGA TEACHER TRAINING COURSE INDIA
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/blog"> TURIYA YOGA BLOG</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer_links">
                  <ul>
                    <li>
                      <span />
                      <Link to="/yogalehrer-ausbildung-200h">
                        {" "}
                        200H AYA YOGALEHRER AUSBILDUNG{" "}
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/blockausbildung-im-ueberblick">
                        {" "}
                        BLOCKAUSBILDUNG / ÜBERBLICK{" "}
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/yogalehrer-ausbildung-100h">
                        {" "}
                        100H YOGA AUSBILDUNG / MODUL 1{" "}
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/yogalehrer-ausbildung-300h">
                        {" "}
                        +300H YOGA AUSBILDUNG / MODUL 3
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to=
                        "/yogalehrer-ausbildung-400h">
                        {" "}
                        +400H YOGA AUSBILDUNG / MODUL 4
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/yogalehrer-ausbildung-500h">
                        500H YOGA AUSBILDUNG / MODUL 5
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/senioren-yoga">60H SENIOREN YOGA</Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/yin-yoga">60H YIN YOGA</Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/privacy_policy"> IMPRESSUM</Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/term">
                        ALLGEMEINE GESCHÄFTSBEDINGUNGEN
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/contact">KONTAKT</Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/yoga-teacher-training-bali">
                        {" "}
                        YOGA TEACHER TRAINING BALI
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/yogateachertraining">
                        {" "}
                        YOGA TEACHER TRAINING


                      </Link>
                    </li>



                    <li>
                      <span />
                      <Link to="/YOGALEHRERAUSBILDUNG-BERLIN">
                        {" "}
                        YOGALEHRERAUSBILDUNG BERLIN
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="/YOGALEHRERAUSBILDUNG-HAMBURG">
                        {" "}
                        YOGALEHRERAUSBILDUNG HAMBURG
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="YOGALEHRERAUSBILDUNG-COLOGNE">
                        {" "}
                        YOGALEHRERAUSBILDUNG COLOGNE
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="munchen-yoga-ausbildung">
                        {" "}
                        YOGALEHRERAUSBILDUNG MUNCHEN
                      </Link>
                    </li>
                    <li>
                      <span />
                      <Link to="Yogalehrer-Ausbildungen-Stuttgart">
                        {" "}
                        YOGS AUSBILDUNG STUTTGART
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="container copyright">
        <p>© Copyright 2023 - 2024 | Turiya Yoga | Yogalehrer Ausbildungen</p>
      </div>
    </>
  );
};

export default Footer;