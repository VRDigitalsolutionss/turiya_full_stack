import React, { useState, useEffect } from "react";
import "./himalaya.scss";
import "./hymiliya2.scss";
import SimpleBanner4 from "../banner/SimpleBanner4";
import banner from "../../assets/images/himalaya/banner.webp";
import img1 from "../../assets/images/himalaya/img1.webp";
import img2 from "../../assets/images/himalaya/img2.webp";
import img3 from "../../assets/images/himalaya/img3.webp";
import img4 from "../../assets/images/himalaya/img4.webp";
import img5 from "../../assets/images/himalaya/img5.webp";
import img6 from "../../assets/images/himalaya/img6.webp";
import img7 from "../../assets/images/himalaya/img7.webp";
import img8 from "../../assets/images/himalaya/img8.webp";
import img9 from "../../assets/images/himalaya/img9.webp";
import img10 from "../../assets/images/himalaya/img10.webp";
import img11 from "../../assets/images/himalaya/img11.webp";
import video_img from "../../assets/images/himalaya/video_img.webp";
import NewsShelter from "../NewsShelter";
import Contact from "../Contact";
import Testimonial from "../Testimonial";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";

const Index = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);

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

  const [earlyData, setEarlyData] = useState("");

  const fetchEarlyBirdData = () => {
    axios
      .get(`${BASE_URL}/getClosestUpcomingCourseswithNull`)
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
    fetchNextUpcomingCourse();
  }, []);

  console.log("earlyData", earlyData);

  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [mainData, setMainData] = useState("");
  console.log("Mallorca");

  const fetchData = () => {
    axios
      .get(
        // "http://127.0.0.1:7000/api/module_webpages_by_category/200H/AYA Yogalehrer Ausbildung I Mallorca"
        `${BASE_URL}/module_webpages_by_category/Yogalehrerausbildung Himalaya Indien`
      )
      .then((response) => {
        console.log("response of yoga Himalaya Indien", response.data.data[0]);

        if (response.status == 200) {
          const data = response.data.data[0];
          console.log("real data", response.data.data[0]);
          console.log("banner imggg", data.yogaTeamSlideImage);
          setMainData(response.data.data[0]);

          var imageUrlcustum =
            data && data.yogaTeamSlideImage
              ? `${BASE_URL_IMAGE}/images/modulewebpage/${data.yogaTeamSlideImage}`
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

  // const payload = {
  //   `<p>Die Turiya Yoga Akademie bietet Yogalehrer-Ausbildungen in Indien an. Nimm dir die Zeit, nicht nur in Yoga einzutauchen, sondern auch in eine wunderbar andere Kultur. Genieße eine ganz neue Lebenserfahrung in Indien! Die 21-tägige intensive Yogalehrer-Ausbildung in Indien ist von der Yoga Alliance zertifiziert und bietet dir eine solide Grundlage in Hatha und Vinyasa-Flow, damit du sicher, authentisch, selbstbewusst und natürlich mit Freude Yoga unterrichten kannst! Wie alle anderen Turiya Yogalehrer-Ausbildungen bieten wir Yoga-Praktizierenden weiterhin die höchsten Standards des Marktes. Unsere Lehrerinnen und Lehrer sind aufrichtige Yoga-Praktizierende, die lieben, was sie tun, und die sich wirklich dafür einsetzen, alle unsere Teilnehmer zu großartigen Yogalehrern zu machen.</p>
  //   <h6>Indien, Himachal:</h6>
  //   <p>Himachal in Indien ist bekannt für seine fröhlichen Menschen, die immergrüne Natur und die bemerkenswert frische Luft. Es ist bekannt als ein großartiger Ort, um Yoga in Indien zu praktizieren. Das Dorf Bhagsu, rund 2100 meter über den Meeresspiegel das in der Nähe des Haupttempels des Dalai Lama liegt, ist der Ort, den wir für unsere Yogalehrerausbildung in Indien ausgewählt haben. Das Dorf liegt inmitten wunderschöner Berge, umgeben von einem atemberaubenden Szenario, anregenden Wandermöglichkeiten und einem erfrischenden Wasserfall. Ein Treffpunkt für indische Dorfbewohner, verschiedene internationale Gruppen und Naturliebhaber, die das Leben in den Bergen und in gemütlichen Cafe's genießen.</p>`
  // }
  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }

  const originalVideo = "https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"

  const [videoId, setVideoId] = useState(originalVideo);

  useEffect(() => {
    const modal = document.getElementById("exampleModal_himalaya");

    if (modal) {
      const handleModalClose = () => setVideoId(null);

      // Attach event listener for modal close
      modal.addEventListener("hidden.bs.modal", handleModalClose);

      // Cleanup event listener on component unmount
      return () => modal.removeEventListener("hidden.bs.modal", handleModalClose);
    }
  }, []);

  useEffect(() => {
    // Reset videoId when null
    if (!videoId) {
      setVideoId(originalVideo);
    }
  }, [videoId]);


  function isOfferValid(offerEndDate) {
    if (!offerEndDate) return false;

    const today = new Date();
    const offerEnd = new Date(offerEndDate);

    return today <= offerEnd;
  }


  return (
    <>
      {/* <SimpleBanner
        banner={banner}
        heading="200H Yogalehrerausbildung auf Mallorca"
        para="18-tägige 200H AYA Intensivausbildung (auf Deutsch) in einem 4 Sterne Hotel am Strand in Mallorca. Hatha-Vinyasa Yogalehrer Intensivausbildung ab 2.999 € zzgl. Verpflegung & Unterkunft, Yoga Alliance zertifiziert, International anerkannt! Werde ein selbstsicherer Yogalehrer."
        buttonTxt=" KUNDENSTIMMEN VIDEO "
      /> */}

      <SimpleBanner4
        banner={bannerImg && bannerImg}
        heading={mainData.yogaTeamSliderHeading}
        para={mainData.yogaTeamSliderParagraph}
        videoLink={mainData.yogaTeamSliderVideoLink}
        buttonTxt="null"
      />
      <div>
        <section className="global_wrapper about_wrapper" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="about_wrapper__left" data-aos="fade-up">
                  <h3>
                    {" "}
                    {mainData && mainData.about_first_section_sub_Paragraph}
                  </h3>
                  {/* <h1>Yogalehrer Ausbildung in Goa, Indien</h1> */}
                  <h1> {mainData && mainData.about_first_section_Heading}</h1>
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

                  {/* <h3>200H | 300H &amp; 500H Yoga Alliance zertifiziert, international anerkannt.</h3> */}
                  {/* <h3></h3> */}
                  {/* <h1>Yogalehrer Ausbildung in Indien</h1>
            <p>Die Turiya Yoga Akademie bietet Yogalehrer-Ausbildungen in Indien an. Nimm dir die Zeit,
              nicht nur in Yoga einzutauchen, sondern auch in eine wunderbar andere Kultur. Genieße eine
              ganz neue Lebenserfahrung in Indien! Die 21-tägige intensive Yogalehrer-Ausbildung in Indien
              ist von der Yoga Alliance zertifiziert und bietet dir eine solide Grundlage in Hatha und
              Vinyasa-Flow, damit du sicher, authentisch, selbstbewusst und natürlich mit Freude Yoga
              unterrichten kannst! Wie alle anderen Turiya Yogalehrer-Ausbildungen bieten wir
              Yoga-Praktizierenden weiterhin die höchsten Standards des Marktes. Unsere Lehrerinnen und
              Lehrer sind aufrichtige Yoga-Praktizierende, die lieben, was sie tun, und die sich wirklich
              dafür einsetzen, alle unsere Teilnehmer zu großartigen Yogalehrern zu machen.</p>
            <h4>Indien, Himachal:</h4>
            <p>Himachal in Indien ist bekannt für seine fröhlichen Menschen, die immergrüne Natur und die
              bemerkenswert frische Luft. Es ist bekannt als ein großartiger Ort, um Yoga in Indien zu
              praktizieren. Das Dorf Bhagsu, rund 2100 meter über den Meeresspiegel das in der Nähe des
              Haupttempels des Dalai Lama liegt, ist der Ort, den wir für unsere Yogalehrerausbildung in
              Indien ausgewählt haben. Das Dorf liegt inmitten wunderschöner Berge, umgeben von einem
              atemberaubenden Szenario, anregenden Wandermöglichkeiten und einem erfrischenden Wasserfall.
              Ein Treffpunkt für indische Dorfbewohner, verschiedene internationale Gruppen und
              Naturliebhaber, die das Leben in den Bergen und in gemütlichen Cafe's genießen.</p> */}
                </div>
              </div>

              <div className="col-lg-3">
                <div className="about_wrapper__right mb-3">
                  {
                    closestUpcomingCourse[0] ? (
                      <div>


                        <h3>{closestUpcomingCourse[0] ? closestUpcomingCourse[0].Ausbildung : null}</h3>
                        <div className="price-tag">
                          <h6>
                            <i className="bx bxs-purchase-tag" />
                            {closestUpcomingCourse[0] && isOfferValid(closestUpcomingCourse[0].OfferEndDate) && closestUpcomingCourse[0].Offerprice > 0 ? (
                              <>
                                {closestUpcomingCourse[0].Offerprice}€
                                <sub>
                                  <del
                                    style={{
                                      color: "rgb(255, 87, 34)",
                                      fontSize: "17px",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {closestUpcomingCourse[0].price}
                                  </del>
                                </sub>
                              </>
                            ) : (
                              <>
                                {closestUpcomingCourse[0] && closestUpcomingCourse[0].price}€
                              </>
                            )}
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
                              closestUpcomingCourse[0] ? closestUpcomingCourse[0].Location : null
                            }

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
            </div>
          </div>
        </section>
        <section className="sampurna_wrapper">
          <div className="container">
            <div className="sampurna_wrapper__content">
              <div className="sampurna_wrapper__grid">
                <div className="sampurna_wrapper__grid-box">
                  <img src={img1} className="img-fluid" alt="himachal_01" />
                </div>
                <div className="sampurna_wrapper__grid-box">
                  <img src={img2} className="img-fluid" alt="himachal_02" />
                </div>
              </div>
              <div className="yoga-list-img">
                <img
                  src={img3}
                  className="img-fluid testing"
                  alt="himachal_03"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="row familien">
                <div className="col-lg-9">
                  <h4>Das Familien-Gästehaus</h4>
                  <p>
                    Wir freuen uns, Teilnehmer*innen und in diesem schönen und
                    küzlich renovierten Yoga-Gästehaus in Bhagsu willkommen zu
                    heißen. Die Besitzer sind bekannt für ihre Freundlichkeit
                    und ihre einladende Art. Sie haben wirklich die Gabe, dass
                    du dich wie zu Hause fühlst. Das Gätehaus, das auch als
                    Cafe© fungiert, ist ein Juwel inmitten der Natur. Zu unserem
                    Glück ist die Familie eine deutsch-indische Familie, die
                    auch köstliche vegetarische und vegane Gerichte in der
                    richtigen Kombination aus Ost und West kocht.
                  </p>
                </div>
                <div className="col-lg-3">
                  <div className="right--img">
                    <img
                      src={img4}
                      alt="himachal_04"
                      className="img-fluid"
                      style={{ height: "200px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="yoga-retreat-img">
                <img src={img5} alt="himachal_05" className="img-fluid" />
              </div>
              <h4>Die Zimmer</h4>
              <p>
                Jeder Teilnehmerinnen kann in einem Einzel- oder Doppelzimmer
                mit Bad Buchen Dein Aufenthalt in diesem Yoga-Gästehaus wird
                sehr komfortabel sein! Die Zimmer sind geräumig, gut
                ausgestattet, sehr sauber und haben eine Veranda. Das Gästehaus
                hat einen schönen Garten, eine tolle Yogahalle und zwei sehr
                liebenswerte Hunde.
              </p>
              <p>
                Unterkunft: (Kosten Pro Woche Doppeltzimmer 140 € &amp; Single
                Zimmer 180€ - Pro Person.)
              </p>
              <div className="sampurna_wrapper__grid">
                <div className="sampurna_wrapper__grid-box">
                  <img src={img6} className="img-fluid" alt="himachal_06" />
                </div>
                <div className="sampurna_wrapper__grid-box">
                  <img src={img7} className="img-fluid" alt="himachal_07" />
                </div>
              </div>
              <div className="row familien">
                <div className="col-lg-9">
                  <h4>Die Verpflegung</h4>
                  <p>
                    Das Gästehaus bietet von Montag bis Freitag dreimal täglich
                    gesunde und leckere vegetarische Yogamahlzeiten und samstags
                    ein Frühstück (nach dem Morgenkurs). Bitte beachte, dass wir
                    bereit sind, auf besondere Ernährungsbedürfnisse wie
                    glutenfrei, vegan, Allergien usw. einzugehen. Einige aus
                    unserem Team haben ebenfalls besondere
                    Ernährungsbedürfnisse, also sei versichert, dass wir in
                    dieser Hinsicht mehr als erfahren sind. Bitte teile uns dies
                    bei der Anmeldung zu deinem Kurs mit. Die Teilnehmerinnen
                    und Teilnehmer sind herzlich eingeladen, während ihrer
                    freien Tage in diesem wunderbaren Teil Indiens die
                    verschiedenen lokalen Restaurants und touristischen
                    Aktivitäten auszuprobieren!
                  </p>
                </div>
                <div className="col-lg-3">
                  <div className="right--img">
                    <img src={img8} alt="himachal_08" />
                  </div>
                </div>
              </div>
              <div className="yoga-list-img">
                <img src={img9} className="img-fluid" alt="himachal_09" />
              </div>
              <h4>Die Yogalehrer-Ausbildung in Indien</h4>
              <p>
                Der Kurs umfasst das Modul 1 und das Modul 2 von Turiya Yoga
                (200 Stunden) und deckt damit die Grundlagen der praktischen
                Yoga-Anatomie, der Biomechanik, der sicheren Ausrichtung, der
                praktischen Anpassungen, der Verwendung von Hilfsmitteln und
                vielem mehr. Lerne dich selbst kennen und sei von einer
                unterstüzenden und liebevollen Umgebung umgeben, die dich gerade
                so viel fordert, dass du deine Grenzen erkennen und wachsen
                kannst, während du deinen eigenen authentischen Weg (und dein
                Timing) respektierst.
              </p>
              <div className="yoga-list-img">
                <img
                  src={img10}
                  className="img-fluid"
                  alt="ccclip_image006_0000 (1)"
                />
              </div>
              <p>
                Denk daran, dass noch einige Online-Kurse bevorstehen. Diese
                finden üblicherweise nach dem Kurs statt, können jedoch je nach
                gewähltem Programm auch davor stattfinden. Informiere dich
                darüber und zögere nicht, uns anzurufen. Wir haben verschiedene
                Themen online zur Verfügung gestellt, insbesondere im Bereich
                Yogawissenschaften. Dadurch bleibt dir mehr Zeit, Indien in
                vollen Zügen zu erleben. Bei unserer Yogalehrerausbildung in
                Indien ist es uns wichtig, Zeit einzuplanen, um die gesamte
                Reise zu reflektieren und zu genießen. Während und nach der
                Yogalehrerausbildung in Indien müssen alle Teilnehmenden einige
                Hausaufgaben erledigen, um die behandelten Themen zu vertiefen.
                Diese Hausaufgaben sind sorgfältig geplant und in den Kurs
                integriert, um die Teilnehmer nicht zu überfordern. Am Ende des
                Kurses bieten wir eine Online-Nachbetreuung an, um auftretende
                Fragen zu klären. Wir bemühen uns, dass die Teilnehmer ihr
                erworbenes Wissen bewahren. Daher haben wir einen strukturierten
                Plan erstellt, um das Gelernte nach dem Präsenzkurs zu
                vertiefen.
              </p>
              <h6>Wie sieht die Prüfung aus?</h6>
              <p>
                Es gibt keine Prüfung, sondern ein Praktikum. Die Hausaufgaben
                selbst zeigen uns, wie viel du von jedem Thema verstanden hast.
                Außerdem werden die Teilnehmer/innen während der gesamten
                Yogalehrerausbildung in Indien von ihren leitenden Lehrern
                bewertet. Jeder Teilnehmer/innen hat während der
                Yogalehrer-Ausbildung mehrere Gelegenheiten, Yoga zu
                unterrichten und bekommt Feedback, was und wie er sich
                verbessern kann. Dabei wird die eigene authentische Art, Yoga zu
                unterrichten, respektiert. Mit anderen Worten: Du wirst im
                normalen Unterricht und beim Unterrichten ein konstruktives
                Feedback von uns und der Gruppe erhalten... Und du hast die
                Möglichkeit, danach wieder zu unterrichten. Durch die Gruppen
                Dynamik und das Feedback hast du die Möglichkeit wirklich zu
                wachsen und einen tollen Abschluss zu machen.
              </p>
              <h6>Beispiel Eines Tagesablaufs</h6>
              <p>Beispiel Eines Tagesablaufs</p>
              <h6>Pause Frühstück</h6>
              <p>09:30 - 11:30 Anatomie-Theorie</p>
              <p>11:30 - 13:00 Unterrichtsmethodik oder Anpassung</p>
              <h6>Pause Mittagessen</h6>
              <p>14:30 - 16:00 Unterrichtsmethodik oder Anpassung</p>
              <p>16:00 - 17:30 Yoga Asana &amp; Spezialtechniken</p>
              <p>18:00 - 19:30 Yogapraxis</p>
              <p>
                **Zwischen Modul 1 und Modul 2 können die Teilnehmer*innen 2
                freie Tage genießen, denn wie alles im Leben kann sich der
                Zeitplan ein wenig ändern. Das hängt von der Gruppe ab.
              </p>
              <div className="yoga-list-img">
                <img src={img11} className="img-fluid" alt="ccclip_image026 " />
              </div>
              {/* about turiya */}
              <div>
                <div className="col-lg-12">
                  <div className="about_turiya__right">
                    <ul>
                      <h4>Ein Wenig Darüber, Was Du Lernen Wirst :</h4>
                      <li>
                        <strong> Gewaltlosigkeit und Wahrhaftigkeit.</strong>Für
                        uns als Team geht es darum, ehrlich und sicher darin zu
                        sein, was wir euch mitteilen und anbieten, sowie, was
                        wir wissen und lehren. Wir bieten auch{" "}
                        <strong> Transparenz</strong> darüber, wo sonst (oder
                        mit wem sonst) ihr nach dem Kurs selbstständig lernen
                        und wachsen könnt. Wir ermutigen euch darin, eure
                        eigenen Flügel auszubreiten und die Reise fortzusetzen.
                      </li>
                      <li>
                        <strong> Nicht stehlen.</strong> Wir schätzen deine Zeit
                        sehr und versprechen, sie niemals als selbstverständlich
                        zu betrachten. In unseren Yogalehrerausbildungen, Kursen
                        und in der Gemeinschaft bemühen wir uns, eure
                        Erfahrungen zu optimieren. Eure Investition in
                        persönliches Wachstum ist uns wichtig, deshalb planen
                        wir jede Session sorgfältig, um das Beste daraus zu
                        machen.
                      </li>
                      <li>
                        Brahmacharya wird oft nur mit Zölibat in Verbindung
                        gebracht. Doch ein weiser Lehrer hat uns einmal gelehrt,
                        dass es eigentlich bedeutet, alles mit vollem Herzen zu
                        tun. Auf diese Weise wird jede Handlung zu einer Hingabe
                        an das wahre Selbst oder wie auch immer du es nennen
                        magst. Das bildet den Kern unserer Arbeit und ist stets
                        unser Ziel.
                      </li>
                      <li>
                        Unsere Handlungen werden nicht von Gier geleitet. Obwohl
                        wir Geld, Wohlstand und Komfort begrüßen, sind sie nicht
                        der Hauptantrieb unserer Akademie. Wir streben jedoch
                        nach herausragenden Standards, und Qualität erfordert
                        natürlich auch Investitionen.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>
                Um mehr zu erfahren, besuche unsere 200h Yogalehrerausbildung
                Seite. Du kannst alles über unser Programm in der 200h
                Yogalehrerausbildung FAQ erfahren.
              </p>
              <h4>Video Testimonials</h4>
              <p>
                Wir sind es gewohnt, Gruppen von Yogis im Ausland und Yogalehrer
                Ausbildungen zu betreuen - es ist eine Leidenschaft von uns. Das
                kannst du an den vielen glücklichen Gesichtern in dem Video
                sehen, das wir hier unten zusammengestellt haben. Diese Art von
                Erfahrung erfordert nicht nur Herzlichkeit von allen Lehrern,
                sondern auch die Offenheit, nicht nur Spass zu haben, sondern
                auch zu wissen, wann und wie unsere wunderbaren Teilnehmerdazu
                bringen können, all das grosse Potenzial, das sie in sich
                tragen, zum Strahlen zu bringen. Wir sind für dich da, für deine
                Praxis und um diese lebensverändernde Praxis namens Yoga zu
                feiern.
              </p>
              <div
                className="yoga-list-img"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal_himalaya">
                <img src={video_img} className="img-fluid" alt="hqdefault" />
              </div>
              <h4>Der Kurs Ist Geeignet Für...</h4>
              <p>
                Alle aufrichtigen Yoga-Praktizierenden, die auf der Suche nach
                einer friedlichen Umgebung sind, in der sie sich darauf
                konzentrieren können, ihre eigene Praxis zu vertiefen und
                gleichzeitig zulernen, wie sie Yoga mit anderen teilen können.
                Mallorca ist wahrlich ein magischer Ort, um die Kunst des Yoga
                zu erlernen, umgeben von einer faszinierenden Natur und
                angenehmem Wetter. Der Kurs bereitet dich hauptsächlich darauf
                vor, sicher Hatha-Flow zu unterrichten (Anfänger bis
                Fortgeschrittene)! Beachte jedoch, dass die Fähigkeit,
                fortgeschrittene Asanas zu unterrichten, mit deiner eigenen
                Praxis zusammenhängt.
              </p>
              <h4>Zertifikat &amp; Yoga Alliance</h4>
              <p>
                Unsere Yogalehrerausbildung in Indien, das AYA
                200-Stunden-Programm, ist von der weltweit respektierten Yoga
                Alliance zertifiziert. Um die RYT200-Zertifizierung zu erhalten,
                ist eine 100%ige Präsenz bei allen Kursen obligatorisch.{" "}
              </p>
              <p>
                Zusätzlich nehmen die Teilnehmer an verschiedenen praktischen
                Übungen teil. Wir nennen sie "Übungen", um zu betonen, dass die
                vollständige Teilnahme an der Ausbildung bewertet wird, nicht
                nur zu bestimmten Zeiten. Während wichtiger praktischer
                Sitzungen erhalten die Teilnehmer die Möglichkeit zu
                unterrichten und Feedback zu erhalten. Dies ist jedoch nicht das
                endgültige Urteil über ihren Fortschritt. Wir bewerten deine
                Entwicklung und durch das Feedback hast du die Möglichkeit zu
                wachsen. Am Ende der Ausbildung wirst du erkennen, dass du
                enorme Fortschritte gemacht hast. Dies wird durch unsere
                spezielle Unterrichtsmethodik und unsere kontinuierliche
                Weiterentwicklung ermöglicht. Du wirst festst
              </p>
            </div>
            {/* Modal */}
            <div className="youtube_video">
              <div
                className="modal fade"
                id="exampleModal_himalaya"
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
                      <iframe
                        width={560}
                        height={315}
                        src={videoId}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Contact />
      <NewsShelter />
    </>
  );
};

export default Index;