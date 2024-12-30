import React from "react";
import { Link } from "react-router-dom";

const BannerGlobalWrapper = () => {
  return (
    <>
      <section className="global_wrapper third_section">
        <div className="container">
          <div
            className="global_wrapper__content aos-init aos-animate"
            data-aos="zoom-in-up">
            <div className="leaf">
              <i className="bx bxs-leaf" />
            </div>
            <div className="main_heading">
              <h1>Aufbau unserer Yogalehrer Ausbildung</h1>
              <p>
                Durch den flexiblen und modularen Aufbau unserer Yogalehrer
                Ausbildung, kannst du einfach entscheiden welches Tempo für dich
                am besten ist. Jedes Modul besteht aus 100 Stunden! Unsere 200h
                und 500h Yoga Ausbildungen sind{" "}
                <strong> Yoga Alliance zertifiziert!</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="global_content">
          <div className="container">
            <div className="third_section__grid">
              <div
                className="third_section__box aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={100}>
                <div className="box_img">
                  <img
                    src="https://www.turiyayoga.de/assets/images/yoga1.webp"
                    className="img-fluid"
                    alt="yoga"
                  />
                </div>
                <div className="box_content">
                  <h3>MODUL 1</h3>
                  <p>
                    Tauche ein in die Welt des Yogalehrer-Basiskurses in nur 8
                    Tagen (100 Stunden). Erweitere dein Wissen über
                    traditionelles und modernes Hatha Yoga, mit und ohne
                    Hilfsmittel. Lass dich von der Geschichte des Yoga und den
                    Upanishaden tief inspirieren.
                  </p>
                  <div className="mehr--btn">
                    <Link to="/yogalehrer-ausbildung-100h "
                      


                    >MEHR</Link>
                  </div>
                </div>
              </div>
              <div
                className="third_section__box aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={200}>
                <div className="box_img">
                  <img
                    src="https://www.turiyayoga.de/assets/images/yoga2.webp"
                    className="img-fluid"
                    alt="yoga"
                  />
                </div>
                <div className="box_content">
                  <h3>MODUL 2</h3>
                  <p>
                    200h AYA zertifizierte Yogalehrer Ausbildung. Erreiche eine
                    solide Grundlage in Vinyasa, erweitere dein Wissen über den
                    Einsatz von Hilfsmitteln und lerne wichtige Hands-on
                    Techniken. Verstehe die Yoga Sutras und vertiefe deine
                    Perspektive im Tantra Yoga.
                  </p>
                  <div className="mehr--btn">
                    <Link to="/yogalehrer-ausbildung-200h">MEHR</Link>
                  </div>
                </div>
              </div>
              <div
                className="third_section__box aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={300}>
                <div className="box_img">
                  <img
                    src="https://www.turiyayoga.de/assets/images/yoga3.webp"
                    className="img-fluid"
                    alt="yoga"
                  />
                </div>
                <div className="box_content">
                  <h3>MODUL 3</h3>
                  <p>
                    Erfahre mehr über die Unterstützung der inneren Organe und
                    Körpersysteme. Tauche tiefer in Flow, Ashtanga und weitere
                    Hands-On Techniken ein. Lass dich von den Texten der
                    Bhagavad Gita und des Hatha Yoga tief inspirieren und
                    begeistern.
                  </p>
                  <div className="mehr--btn">
                    <Link to="/yogalehrer-ausbildung-300h">MEHR</Link>
                  </div>
                </div>
              </div>
              <div
                className="third_section__box aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={400}>
                <div className="box_img">
                  <img
                    src="https://www.turiyayoga.de/assets/images/yoga4.webp"
                    className="img-fluid"
                    alt="yoga"
                  />
                </div>
                <div className="box_content">
                  <h3>MODUL 4</h3>
                  <p>
                    Erfahre mehr über die Unterstützung des gesunden Geistes und
                    die wichtigsten neurophysiologischen Aspekte der subtilen
                    Yoga Praxis. Lerne weitere Hands-On Techniken! Erweitere
                    dein Know-how zum Unterrichten von Workshops und bringe
                    deine Fähigkeiten auf das nächste Level.
                  </p>
                  <div className="mehr--btn">
                    <Link to="/yogalehrer-ausbildung-400h">MEHR</Link>
                  </div>
                </div>
              </div>
              <div
                className="third_section__box aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={500}>
                <div className="box_img">
                  <img
                    src="https://www.turiyayoga.de/assets/images/yoga5.webp"
                    className="img-fluid"
                    alt="yoga"
                  />
                </div>
                <div className="box_content">
                  <h3>MODUL 5</h3>
                  <p>
                    Beende deine 500h AYA zertifizierte Yogalehrer Ausbildung.
                    Kombiniere Yin Yoga und Senior Yoga, um die verbleibenden
                    100 Stunden zu absolvieren. Vollende deinen eigenen Weg und
                    spezialisiere dich auf Themen, die dir besonders am Herzen
                    liegen.
                  </p>
                  <div className="mehr--btn">
                    <Link  to="/yogalehrer-ausbildung-500h">MEHR</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerGlobalWrapper;
