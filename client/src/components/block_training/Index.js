import React, { useState, useEffect } from "react";
import "./block_training.scss";
import SimpleBanner from "../banner/SimpleBanner";
import banner from "../../assets/banner/banner1.webp";
import BannerGlobalWrapper from "../BannerGlobalWrapper";
import Contact from "../Contact";
import NewsShelter from "../NewsShelter";
import SimpleBanner3 from "../banner/SimpleBanner3";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";
import { Link } from "react-router-dom";
const Index = () => {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);


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
  }, []);

  console.log("earlyData", earlyData);

  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [mainData, setMainData] = useState("");

  const fetchData = () => {
    axios
      .get(
        // "http://127.0.0.1:7000/api/module_webpages_by_category/200H/AYA Yogalehrer Ausbildung I Mallorca"
        BASE_URL + `/module_webpages_by_category/Blockausbildung Überblick`
      )
      .then((response) => {
        console.log("response of block training", response.data);

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

  console.log("block training data from module", mainData);

  //     const payload = {
  //     `<h6>200H und 500H Yogalehrer Ausbildungen - Yoga Alliance zertifiziert & International anerkannt</h6>
  //     <p>Wir bieten unseren Teilnehmern große Flexibilität und halten gleichzeitig die höchsten Standards in unseren von der 200-Stunden- und 500-Stunden-Yoga-Allianz zertifizierten Yogalehrerausbildungen ein. Als Teilnehmer hast du die Möglichkeit, deine Yoga-Ausbildung in Modulen zu absolvieren, und zwar jeweils an 8 intensiven Tagen (100 Stunden). Auf diese Weise kannst du dir die 200-Stunden-Yogalehrerausbildung bequem in 2 Modulen und die 500-Stunden-Yogalehrerausbildung in 5 Modulen erarbeiten. Beachte, dass die 200-Stunden-Yogalehrerausbildung entweder in zwei separaten 8-Tage-Modulen oder direkt in einem 16-tägigen Intensivkurs absolviert werden kann.</p><p>Unsere Yogalehrer-Ausbildung (Modul 1, Modul 2, Modul 3 und Modul 4) konzentriert sich auf eine durchdachte und einzigartige Kombination traditioneller Yoga-Praktiken (Hatha Yoga) und eines zeitgemäßen Flow-Stils. Innerhalb des letzten Moduls (Modul 5) kannst du auswählen, welche zusätzlichen verwandten Fähigkeiten du entwickeln möchtest. Bitte beachte, dass die therapeutischen Aspekte von Yoga-Praktiken bereits in unsere Module integriert sind, unter Berücksichtigung der Normen der Yoga Alliance. Es sei jedoch darauf hingewiesen, dass Yoga-Therapie keine Zertifikate gemäß den Richtlinien der Yoga Alliance besitzt, da es sich um eine nicht regulierte Praxis handelt.</p><p>Unsere Ausbildung baut auf traditionellem und modernem Hatha Yoga auf und wir verwenden Props auf eine umfassende Art. Dadurch bist du gut gerüstet, um dich weiterzuentwickeln und tiefer in moderne fließende Praktiken einzutauchen. Nachdem du unsere komplette 500-Stunden-Yogalehrer-Ausbildung abgeschlossen hast, kannst du geschickt und kreativ auf allen Niveaus unterrichten. Du wirst Hatha, Vinyasa und den genauen Einsatz von Requisiten in deinen Kursen kombinieren können. Das alles basiert nicht nur auf Tradition, sondern auch auf den neuesten wissenschaftlichen Erkenntnissen und therapeutischen Aspekten des Yoga.</p><h6>Bei Buchung aller Module M1 – M5 (500h): 7.390 € – AYA-zertifiziert</h6>`;
  // }
  // const payload = {
  //     `<h6>200H und 500H Yogalehrer Ausbildungen - Yoga Alliance zertifiziert & International anerkannt</h6>
  //     <p>Wir bieten unseren Teilnehmern große Flexibilität und halten gleichzeitig die höchsten Standards in unseren von der 200-Stunden- und 500-Stunden-Yoga-Allianz zertifizierten Yogalehrerausbildungen ein. Als Teilnehmer hast du die Möglichkeit, deine Yoga-Ausbildung in Modulen zu absolvieren, und zwar jeweils an 8 intensiven Tagen (100 Stunden). Auf diese Weise kannst du dir die 200-Stunden-Yogalehrerausbildung bequem in 2 Modulen und die 500-Stunden-Yogalehrerausbildung in 5 Modulen erarbeiten. Beachte, dass die 200-Stunden-Yogalehrerausbildung entweder in zwei separaten 8-Tage-Modulen oder direkt in einem 16-tägigen Intensivkurs absolviert werden kann.</p><p>Unsere Yogalehrer-Ausbildung (Modul 1, Modul 2, Modul 3 und Modul 4) konzentriert sich auf eine durchdachte und einzigartige Kombination traditioneller Yoga-Praktiken (Hatha Yoga) und eines zeitgemäßen Flow-Stils. Innerhalb des letzten Moduls (Modul 5) kannst du auswählen, welche zusätzlichen verwandten Fähigkeiten du entwickeln möchtest. Bitte beachte, dass die therapeutischen Aspekte von Yoga-Praktiken bereits in unsere Module integriert sind, unter Berücksichtigung der Normen der Yoga Alliance. Es sei jedoch darauf hingewiesen, dass Yoga-Therapie keine Zertifikate gemäß den Richtlinien der Yoga Alliance besitzt, da es sich um eine nicht regulierte Praxis handelt.</p><p>Unsere Ausbildung baut auf traditionellem und modernem Hatha Yoga auf und wir verwenden Props auf eine umfassende Art. Dadurch bist du gut gerüstet, um dich weiterzuentwickeln und tiefer in moderne fließende Praktiken einzutauchen. Nachdem du unsere komplette 500-Stunden-Yogalehrer-Ausbildung abgeschlossen hast, kannst du geschickt und kreativ auf allen Niveaus unterrichten. Du wirst Hatha, Vinyasa und den genauen Einsatz von Requisiten in deinen Kursen kombinieren können. Das alles basiert nicht nur auf Tradition, sondern auch auf den neuesten wissenschaftlichen Erkenntnissen und therapeutischen Aspekten des Yoga.</p>`
  //   }

  return (
    <>
      <SimpleBanner3
        banner={bannerImg && bannerImg}
        heading={mainData && mainData.yogaTeamSliderHeading}
        para={mainData && mainData.yogaTeamSliderParagraph}
        videoLink={mainData && mainData.yogaTeamSliderVideoLink}
        buttonTxt="KUNDENSTIMMEN VIDEO"
      />

      <div id="content" className="section">
        <section className="global_wrapper about_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about_wrapper__left">
                  <h1> {mainData && mainData.about_first_section_Heading}</h1>
                  {/* <h3>BLOCKAUSBILDUNG</h3> */}
                  {/* <h1>Yogalehrer Ausbildungen in Modulen</h1> */}
                  <div className="kurse_link">
                    <Link to="/yogalehrer-ausbildung-module-200h">MODUL 1</Link>
                    <Link to="/yogalehrer-ausbildung-200h">MODUL 2</Link>
                    <Link to="/yogalehrer-ausbildung-200h">MODUL 3</Link>
                    <Link to="/yogalehrer-ausbildung-200h">MODUL 4</Link>
                    <Link to="/yogalehrer-ausbildung-200h">MODUL 5</Link>
                  </div>

                  <p
                    className="p-0"
                    //   style={{
                    //       color: "rgb(33, 37, 41)",
                    //       fontFamily: "Roboto, sans-serif",
                    //       fontSize: 16,
                    // }}

                    dangerouslySetInnerHTML={{
                      __html:
                        mainData &&
                        mainData.about_first_section_Paragraph_Content,
                    }}></p>
                  {/* <h6>
                    200H und 500H Yogalehrer Ausbildungen - Yoga Alliance
                    zertifiziert &amp; International anerkannt
                  </h6>
                  <p>
                    Wir bieten unseren Teilnehmern große Flexibilität und halten
                    gleichzeitig die höchsten Standards in unseren von der
                    200-Stunden- und 500-Stunden-Yoga-Allianz zertifizierten
                    Yogalehrerausbildungen ein. Als Teilnehmer hast du die
                    Möglichkeit, deine Yoga-Ausbildung in Modulen zu
                    absolvieren, und zwar jeweils an 8 intensiven Tagen (100
                    Stunden). Auf diese Weise kannst du dir die
                    200-Stunden-Yogalehrerausbildung bequem in 2 Modulen und die
                    500-Stunden-Yogalehrerausbildung in 5 Modulen erarbeiten.{" "}
                  </p>
                  <p>
                    Unsere Yogalehrer-Ausbildung (Modul 1, Modul 2, Modul 3 und
                    Modul 4) konzentriert sich auf eine durchdachte und
                    einzigartige Kombination traditioneller Yoga-Praktiken
                    (Hatha Yoga) und eines zeitgemäßen Flow-Stils. Innerhalb des
                    letzten Moduls (Modul 5) kannst du auswählen, welche
                    zusätzlichen verwandten Fähigkeiten du entwickeln möchtest.
                    Bitte beachte, dass die therapeutischen Aspekte von
                    Yoga-Praktiken bereits in unsere Module integriert sind,
                    unter Berücksichtigung der Normen der Yoga Alliance. Es sei
                    jedoch darauf hingewiesen, dass Yoga-Therapie keine
                    Zertifikate gemäß den Richtlinien der Yoga Alliance besitzt,
                    da es sich um eine nicht regulierte Praxis handelt.
                  </p>
                  <p>
                    Zudem ist es entscheidend, zu verstehen, wie Yoga durch
                    Bewegung Heilung und Linderung fördern kann. Es ist wichtig
                    zu erkennen, dass dies nicht nur für Senioren gilt, sondern
                    auch für andere, die Bewegungseinschränkungen haben. Der
                    Kurs basiert hauptsächlich auf medizinischer Evidenz, wobei
                    die traditionellere Perspektive der Praxis natürlich nicht
                    außer Acht gelassen wird.
                  </p>
                  <p>
                    Unsere Ausbildung baut auf traditionellem und modernem Hatha
                    Yoga auf und wir verwenden Props auf eine umfassende Art.
                    Dadurch bist du gut gerüstet, um dich weiterzuentwickeln und
                    tiefer in moderne fließende Praktiken einzutauchen. Nachdem
                    du unsere komplette 500-Stunden-Yogalehrer-Ausbildung
                    abgeschlossen hast, kannst du geschickt und kreativ auf
                    allen Niveaus unterrichten. Du wirst Hatha, Vinyasa und den
                    genauen Einsatz von Requisiten in deinen Kursen kombinieren
                    können. Das alles basiert nicht nur auf Tradition, sondern
                    auch auf den neuesten wissenschaftlichen Erkenntnissen und
                    therapeutischen Aspekten des Yoga.
                  </p>
                  <h5>
                    Bei Buchung aller Module M1 – M5 (500h): 7.390 € –
                    AYA-zertifiziert
                  </h5> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* third section */}
      </div>
      <BannerGlobalWrapper />
      <Contact />
      <NewsShelter />
    </>
  );
};

export default Index;
