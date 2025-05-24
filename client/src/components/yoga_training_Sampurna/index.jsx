import React, { useState, useEffect } from "react";
import "./sampurna.scss";
import banner from "../../assets/banner/banner3.webp";
import SimpleBanner3 from "../banner/SimpleBanner3";
import img1 from "../../assets/images/sampurna_img/img1.webp";
import img2 from "../../assets/images/sampurna_img/img2.webp";
import img3 from "../../assets/images/sampurna_img/img3.webp";
import img4 from "../../assets/images/sampurna_img/img4.webp";
import img5 from "../../assets/images/sampurna_img/img5.webp";
import img6 from "../../assets/images/sampurna_img/img6.webp";
import certification from "../../assets/images/sampurna_img/certification.webp";
import room_img1 from "../../assets/images/sampurna_img/roomImg/img1.webp";
import room_img2 from "../../assets/images/sampurna_img/roomImg/img2.webp";
import room_img3 from "../../assets/images/sampurna_img/roomImg/img3.webp";
import room_img4 from "../../assets/images/sampurna_img/roomImg/img4.webp";
import videoimg1 from "../../assets/images/sampurna_img/video_img/video-img1.webp";
import videoimg2 from "../../assets/images/sampurna_img/video_img/video-img2.webp";

import NewsShelter from "../NewsShelter";
import Contact from "../Contact";
import Testimonial from "../Testimonial";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";

const Index = () => {
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

  console.log("closestUpcomingCourses", closestUpcomingCourse);

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
    fetchNextUpcomingCourse();
  }, []);

  console.log("earlyData", earlyData);
  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [mainData, setMainData] = useState("");

  const fetchData = () => {
    axios
      .get(
        BASE_URL +
          "/module_webpages_by_category/200H AYA Yogalehrer Ausbildung Sampurna Seminarhaus"
      )
      .then((response) => {
        console.log(
          "response of yoga training sampurna",
          response.data.data[0]
        );

        if (response.status == 200) {
          const data = response.data.data[0];
          console.log("real data", response.data.data[0]);
          console.log("banner imggg", data.yogaTeamSlideImage);
          setMainData(response.data.data[0]);

          var imageUrlcustum =
            data && data.yogaTeamSlideImage
              ? BASE_URL_IMAGE +
                `/images/modulewebpage/${data.yogaTeamSlideImage}`
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

  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }
  // const payload = {
  //   `<p>Unsere 200-Stunden-Yogalehrer-Ausbildung ist von der Yoga Alliance zertifiziert. Das Ausbildungsprogramm ist so gestaltet, dass es eine fundierte Basis im Hatha-Vinyasa-Flow vermittelt. Anders ausgedrückt: Unser Programm kombiniert das traditionelle Wissen des Hatha Yoga mit modernem Vinyasa Flow. Dadurch erhältst du nach Abschluss der Ausbildung die Fähigkeit, sowohl Hatha Classic/Modern als auch Hatha Flow und Vinyasa Flow zu unterrichten.</p><p>Im ersten Teil der Yogaausbildung liegt der Fokus auf Hatha Yoga, damit die Teilnehmerinnen das Verständnis für Ausrichtung und Sicherheit entwickeln können, bevor sie den fließenden Aspekt einer Vinyasa integrieren. Dies ermöglicht den Teilnehmerinnen, Yoga-Asanas tiefer zu verstehen und sie in ihrem Unterricht anzuwenden. Sie lernen, Asanas mit verschiedenen Hilfsmitteln/Props zu kombinieren und die Haltungen sowohl in traditioneller als auch moderner Sichtweise zu erfassen.</p><p>Im zweiten Teil des Yogatrainings wird der fließende Aspekt behutsam eingeführt. Dies ermöglicht es den Teilnehmer*innen, verschiedene Yogastunden in ihrer zukünftigen Lehrkarriere durch geschicktes Sequencing zu integrieren.</p><p>Es ist wichtig zu betonen, dass Anatomie- und Biomechanikkurse sorgfältig über das gesamte Programm verteilt sind, um den Teilnehmer*innen ein solides Verständnis für sichere Bewegungen und korrekte Hands-On-Anpassungen zu vermitteln.</p><p>Die Vision von Turiya Yoga ist es, authentische Yogalehrer auszubilden, die Sicherheit, Integrität, Selbstvertrauen und Freude verkörpern. Unsere Zertifizierung durch die Yoga Alliance ist weltweit anerkannt. Wir schaffen eine unterstützende und liebevolle Lernumgebung, in der jeder Teilnehmer sein Potenzial entdecken und aufblühen kann. Turiya Yoga bietet Kurse in Indien, Deutschland und Spanien an und folgt dabei hohen internationalen Standards. Nach Abschluss der Ausbildung kannst du sicher mit dem Unterrichten beginnen, sei es in deinem Heimatland oder an einem anderen Ort, den du wählen möchtest.</p> <p>Maximale Teilnehmerzahl: Wir nehmen nur 20 Teilnehmer auf, um uns um jeden einzelnen wirklich kümmern zu können. Unsere erfahrenen Lehrer begleiten dich auf jedem Schritt des Weges.</p><h6>Sampurna Seminarhaus</h6><p>Das Seminarhaus, ehemalige Grundschule des Dorfes Bärstadt, ist umgeben von Quellen, viel frischer Luft und den Wiesen und Wäldern des Taunus. Von Wiesbaden und Mainz sind wir in weniger als 30 Minuten zu erreichen.</p><p>Fünf großzügige, Helle und klar gestaltete Seminarräume vermitteln ein Gefühl von Freiheit und Geborgenheit gleichermaßen. Sie laden zur Achtsamkeit und inneren Stille ein und schaffen Raum für Neues, für Veränderungen sowie die Möglichkeit, sich selbst zu spüren und zu entfalten. Die Vollendung liegt in dieser Klarheit.</p><p>Die kreative 200-Stunden-Yoga-Ausbildung von Turiya Yoga und die Zeit, die du bei uns in Sampurna verbringst, werden dich tief bewegen. Deine tägliche Routine wird früh mit einer Yoga-Praxis umgeben von Natur und Stille beginnen. Die Yogahallen sind schön, komfortabel und haben alles, was Sie brauchen, um Deine Yoga-Praxis zu vertiefen und Lehrfähigkeiten zu entwickeln.</p><h6>Täglicher Zeitplan</h6><p>Nachdem Körper und Geist durch eine nährende Yogapraxis am Morgen zur Ruhe gekommen sind, können die Teilnehmer ein leckeres Frühstück genießen. Später tauchen wir in Klassen wie Anatomie/Biomechanik, Yoga-Geisteswissenschaften und/oder Yogatechnik ein. Es passiert bereits viel Lernen und Spaß, bevor Du das reichhaltige Mittagsbuffet vor einem gemütlichen Kamin genießen kannst! Die Klassen werden von professionellen und engagierten Yoga-Praktizierenden unterrichtet. Anders gesagt: Du wirst von erfahrenen Yogalehrern begleitet, die ihre Yogapraxis sowohl auf als auch neben der Matte pflegen. Am Ende des Tages, um unsere Energie wiederherzustellen, bieten wir eine weitere erfüllende Yogapraxis aus Asanas, Pranayama und Meditation an. Danach servieren wir ein köstliches Abendessen, und selbstverständlich kannst Du auch die Sauna nutzen, bevor Du schlafen gehst.</p><p>Bitte beachte, dass unser erfahrenes Küchenteam auf spezielle Bedürfnisse eingeht, sei es glutenfrei, vegan, vegetarisch oder Allergien. Es ist ratsam, uns bei der Buchung Deines Aufenthalts im Sampurna Seminarhaus im Voraus über deine Bedürfnisse zu informieren.</p>`
  // }

  const originalVideo1 =
    "https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a";

  const [videoId1, setVideoId1] = useState(originalVideo1);

  useEffect(() => {
    const modal = document.getElementById("exampleModal1");

    if (modal) {
      const handleModalClose = () => setVideoId1(null);

      // Attach event listener for modal close
      modal.addEventListener("hidden.bs.modal", handleModalClose);

      // Cleanup event listener on component unmount
      return () =>
        modal.removeEventListener("hidden.bs.modal", handleModalClose);
    }
  }, []);

  useEffect(() => {
    // Reset videoId when null
    if (!videoId1) {
      setVideoId1(originalVideo1);
    }
  }, [videoId1]);

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
        heading="200H AYA Yogalehrer Ausbildung  Goa, Indien *All Inklusive"
        para="21 Tage AYA Yogalehrer Ausbildung (auf Deutsch) inkl. Unterkunft im Yoga-Resort mit Verpflegung: ab 2.799€"
        buttonTxt="VIDEO"
      /> */}

      <SimpleBanner3
        banner={bannerImg && bannerImg}
        heading={mainData.yogaTeamSliderHeading}
        para={mainData.yogaTeamSliderParagraph}
        videoLink={mainData.yogaTeamSliderVideoLink}
        buttonTxt="VIDEO"
      />

      <section className="global_wrapper about_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="about_wrapper__left">
                {/* <h1>Yogalehrer Ausbildung in Sampurna Seminarhaus</h1> */}
                <h1> {mainData && mainData.about_first_section_Heading}</h1>

                <p
                  className="p-0"
                  //   style={{
                  //       color: "rgb(33, 37, 41)",
                  //       fontFamily: "Roboto, sans-serif",
                  //       fontSize: 16,
                  // }}

                  dangerouslySetInnerHTML={{
                    __html: mainData.about_first_section_Paragraph_Content,
                  }}></p>
              </div>
            </div>
            {/* course card */}

            <div className="col-lg-3">
              <div className="about_wrapper__right mb-3">
                {closestUpcomingCourse[0] ? (
                  <div>
                    <h3>
                      {closestUpcomingCourse[0]
                        ? closestUpcomingCourse[0].Ausbildung
                        : null}
                    </h3>
                    <div className="price-tag">
                      <h6>
                        <i className="bx bxs-purchase-tag" />
                        {closestUpcomingCourse[0] &&
                        isOfferValid(closestUpcomingCourse[0].OfferEndDate) &&
                        closestUpcomingCourse[0].Offerprice > 0 ? (
                          <>
                            {closestUpcomingCourse[0].Offerprice}€
                            <sub>
                              <del
                                style={{
                                  color: "#E07542",
                                  fontSize: "17px",
                                  marginLeft: "10px",
                                }}>
                                {closestUpcomingCourse[0].price}
                              </del>
                            </sub>
                          </>
                        ) : (
                          <>
                            {closestUpcomingCourse[0] &&
                              closestUpcomingCourse[0].price}
                            €
                          </>
                        )}
                      </h6>
                    </div>
                    <div className="about-date">
                      {closestUpcomingCourse[0] &&
                        isOfferValid(closestUpcomingCourse[0].OfferEndDate) &&
                        closestUpcomingCourse[0].Offerprice > 0 && (
                          <p>
                            Das Angebot endet am
                            <i className="bx bxs-calendar" />
                            {formatDate(closestUpcomingCourse[0].OfferEndDate)}
                          </p>
                        )}
                      <p>
                        <i className="bx bxs-map" />
                        {closestUpcomingCourse[0]
                          ? closestUpcomingCourse[0].Location
                          : null}
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
                )}
              </div>
            </div>
          </div>

          {/* =========================================== */}

          {/* ==================================================== */}
        </div>
      </section>
      <section className="sampurna_wrapper">
        <div className="container">
          <div className="sampurna_wrapper__content">
            <h4>Sampurna Seminarhaus</h4>
            <div className="yoga-list-img">
              <img src={img1} className="img-fluid" alt="cclip_image002" />
            </div>
            <p>
              Das Seminarhaus, ehemalige Grundschule des Dorfes Bärstadt, ist
              umgeben von Quellen, viel frischer Luft und den Wiesen und Wäldern
              des Taunus. Von Wiesbaden und Mainz sind wir in weniger als{" "}
              <strong>30 Minuten </strong> zu erreichen.
            </p>
            <div className="yoga-list-img">
              <img src={img2} className="img-fluid" alt="cclip_image0042" />
            </div>
            <p>
              <strong> Fünf großzügige,</strong> Helle und klar gestaltete
              Seminarräume vermitteln ein Gefühl von Freiheit und Geborgenheit
              gleichermaßen. Sie laden zur Achtsamkeit und inneren Stille ein
              und schaffen Raum für Neues, für Veränderungen sowie die
              Möglichkeit, sich selbst zu spüren und zu entfalten. Die
              Vollendung liegt in dieser Klarheit.
            </p>
            <div className="yoga-list-img">
              <img src={img3} className="img-fluid" alt="cclip_image006" />
            </div>
            <p>
              Die kreative 200-Stunden-Yoga-Ausbildung von Turiya Yoga und die{" "}
              <strong> Zeit, die du</strong> bei uns in Sampurna
              <strong> verbringst,</strong> werden dich tief bewegen. Deine
              tägliche Routine wird früh mit einer Yoga-Praxis umgeben von Natur
              und Stille beginnen. Die Yogahallen sind schön, komfortabel und
              haben alles, was Sie brauchen, um Deine Yoga-Praxis zu vertiefen
              und Lehrfähigkeiten zu entwickeln.
            </p>
            <div className="yoga-list-img">
              <img src={img4} className="img-fluid" alt="cclip_image008" />
            </div>
            <h4>Täglicher Zeitplan</h4>
            <p>
              Nachdem Körper und Geist durch eine nährende Yogapraxis am Morgen
              zur Ruhe gekommen sind, können die Teilnehmer ein leckeres
              Frühstück genießen. Später tauchen wir in Klassen wie
              Anatomie/Biomechanik, Yoga-Geisteswissenschaften und/oder
              Yogatechnik ein. Es passiert bereits viel Lernen und Spaß, bevor
              Du das reichhaltige Mittagsbuffet vor einem gemütlichen Kamin
              genießen kannst! Die Klassen werden von professionellen und
              engagierten Yoga-Praktizierenden unterrichtet. Anders gesagt: Du
              wirst von erfahrenen Yogalehrern begleitet, die ihre Yogapraxis
              sowohl auf als auch neben der Matte pflegen. Am Ende des Tages, um
              unsere Energie wiederherzustellen, bieten wir eine weitere
              erfüllende Yogapraxis aus Asanas, Pranayama und Meditation an.
              Danach servieren wir ein köstliches Abendessen, und
              selbstverständlich kannst Du auch die Sauna nutzen, bevor Du
              schlafen gehst.
            </p>
            <p>
              Bitte beachte, dass unser erfahrenes Küchenteam auf spezielle
              Bedürfnisse eingeht, sei es glutenfrei, vegan, vegetarisch oder
              Allergien. Es ist ratsam, uns bei der Buchung Deines Aufenthalts
              im Sampurna Seminarhaus im Voraus über deine Bedürfnisse zu
              informieren.
            </p>
            <div className="yoga-list-img">
              <img src={img5} className="img-fluid" alt="cclip_image010" />
            </div>
            <div className="yoga-list-img">
              <img src={img6} className="img-fluid" alt="cclip_image012" />
            </div>
            <div className="text-center">
              <h4>Beispiel eines Tagesablaufs</h4>
              <p>7h - 9h Yogapraxis (Asana, Pranayama und/oder Meditation)</p>
              <p>9h - 9h30 Snack-Pause9h30</p>
              <p>
                - 11h00: Philosophie/ Geschichte11h - 12h30 Unterrichtsmethodik
              </p>
              <p>12h30-13h30 - Mittagessen</p>
              <p>13h30 - 15h00 Ausrichtung und Hilfsmittel15h-16h30</p>
              <p>Philosophie/Geschichte</p>
              <p>16h30 - 17h Snack Pause17h</p>
              <p>- 18h00 Unterrichtsmethodik18h</p>
              <p>- 18h00 Unterrichtsmethodik18h</p>
              <p>
                Frage- und Antwortzeiten finden in der Regel zweimal während des
                Kurses statt.
              </p>
            </div>
            <p>
              *Änderungen im Zeitplan können gelegentlich vorkommen, so wie im
              Leben generell. Diese Änderungen werden jedoch stets mit dem Ziel
              vorgenommen, die Qualität der Yogalehrerausbildung
              aufrechtzuerhalten und den Lernprozess zu verbessern.
            </p>
            <h4>Unterkünfte</h4>
            <p>
              <strong> 30 schöne, helle Zimmer</strong> mit 19 modernen Bädern
              ermöglichen den Ruckzug während des Aufenthalts. Hier lässt es
              sich zur Ruhe kommen - abschalten, Zeit haben, ankommen, sich
              geborgen fühlen, zu Hause sein.
            </p>
            <div className="sampurna_wrapper__grid">
              <div className="sampurna_wrapper__grid-box">
                <img
                  src={room_img1}
                  className="img-fluid"
                  alt="cclip_image014"
                />
              </div>
              <div className="sampurna_wrapper__grid-box">
                <img
                  src={room_img2}
                  className="img-fluid"
                  alt="cclip_image016"
                />
              </div>
              <div className="sampurna_wrapper__grid-box">
                <img
                  src={room_img3}
                  className="img-fluid"
                  alt="cclip_image018"
                />
              </div>
              <div className="sampurna_wrapper__grid-box">
                <img
                  src={room_img4}
                  className="img-fluid"
                  alt="cclip_image020"
                />
              </div>
            </div>
            <div className="text-center">
              <h4>Unterbringungspakete | Investition: </h4>
              <h6>Übernachtung + Verpflegung (Vollpension) pro Tag:</h6>
              <p> Einzelzimmer Comf. (1p) - 128 Eur</p>
              <p> Einzelzimmer Stand. (1p) - 120 Eur</p>
              <p> Doppelzimmer Delux. (2p) -128 Eur</p>
              <p> Doppeltes Zimmer Stand. (2p) - 111 Eur</p>
              <p> Mehrbettzimmer Comf. (4p) - 99 Eur</p>
              <p> Schlafplatz/ Zelt / Wohnmobil - 82 Eur</p>
              <p>
                Für Tagesgäste beträgt die Gebühr 48 € pro Tag (Mindestbuchung)
                und umfasst die Nutzung von Dusche, Sauna und Toilette sowie
                verschiedene Teesorten, Früchte, Kekse, Kaffee aus der Kanne und
                das Mittagsbuffet.
              </p>
              <p>Zusätzlich stehen folgende Optionen zur Verfügung:</p>
              <p>Tagesgast inkl. Mittag- und Abendbuffet: 71 €</p>
              <p>Tagesgast inkl. Vollpension: 83 €</p>
            </div>
            {/*<p>*Für Tagesgäste beträgt die Gebühr 48 € pro Tag und beinhaltet die Nutzung von*/}
            {/*    Dusche, Sauna,*/}
            {/*    Toilette sowie verschiedene Teesorten, Früchte, Kekse und Kaffee aus der Kanne.</p>*/}
            <p>
              ** Bitte beachte, dass Turiya Yoga die
              200-Stunden-Yogalehrerausbildung im Sampurna Seminarhaus anbietet.
              Die Teilnehmerinnen und Teilnehmer werden gebeten, ihre Unterkunft
              und Verpflegungspakete eigenständig zu buchen. Denke daran, dass
              Turiya Yoga-Teilnehmende von speziellen Paketpreisen profitieren.
              Stelle sicher, dass du deutlich angibst, dass du an einer Turiya
              Yogalehrer-Ausbildung teilnimmst, um die Ermäßigung zu erhalten
              und die Gebühren wie oben aufgeführt angeboten zu bekommen.
            </p>
            <h4>Mahlzeiten</h4>
            <p>
              Die bio-vegetarische/vegane Küche bietet Raum für Genuss und ist
              stimmig mit der Hausmaxime: "Lebe achtsam und
              verantwortungsbewusst im Einklang mit allen Lebenswesen".
            </p>
            <p>
              Sampurna bietet Vollpension oder Halbpension für seine Gäste an.
              Die Vollpension besteht aus 3 Mahlzeiten (Frühstück, Mittagessen
              und Abendessen) sowie einem Pausenbuffet (Kaffee, Tee, Snacks).
              Das Personal ist darauf vorbereitet, auf besondere
              Ernährungsbedürfnisse wie Allergien einzugehen. Bitte teile uns
              dies bei der Anmeldung zu Deinem Kurs unbedingt mit.
            </p>
            <h4>Möchtest Du mehr über diesen Ort erfahren?</h4>
            <p>
              Anbei ein Video <strong> von Sampurna</strong>{" "}
            </p>
            <div
              className="video-pop-pup"
              data-bs-toggle="modal"
              data-bs-target=" #exampleModal1">
              <img src={videoimg1} className="img-fluid" alt="video-img" />
            </div>
            <h4>Yoga-Praktiken | Yogalehrer-Ausbildung</h4>
            <p>
              Unsere Praktiken konzentrieren sich hauptsächlich auf Hatha Yoga
              (in traditioneller und moderner Form) sowie auf Flow-Yoga. Wir
              glauben, dass unsere Hatha-Yoga-Kurse dazu beitragen, das
              Gleichgewicht der energetischen Flüsse zu fördern, während sie
              gleichzeitig den Fokus auf jede Asana vertiefen und erlebbar
              machen. Zusätzlich bieten wir spezielle Klassen an, die
              verschiedene Hilfsmittel/Props verwenden, um den Teilnehmenden
              dabei zu helfen, jede Haltung auf komfortable Weise länger zu
              halten. Diese Yogastunden ermöglichen unseren Schülern, sich von
              den umfangreichen Lerninhalten und der natürlichen Reinigung, die
              während einer intensiven Lehrerausbildung wie dieser stattfinden,
              zu erholen. Sie bieten auch die Möglichkeit, eine tiefere
              Erfahrung mit den verschiedenen Kategorien von Körperhaltungen,
              unterschiedlichen Ausrichtungen und ihren möglichen
              psychologischen oder emotionalen Auswirkungen zu machen.
            </p>
            <div className="yoga-list-img">
              <img
                src={certification}
                className="img-fluid"
                alt="clip_image002_0000"
              />
            </div>
            {/* about turiya */}
            <div>
              <div className="col-lg-12">
                <div className="about_turiya__right">
                  <ul>
                    <li>
                      <strong> Gewaltlosigkeit und Wahrhaftigkeit.</strong>Für
                      uns als Team geht es darum, ehrlich und sicher darin zu
                      sein, was wir euch mitteilen und anbieten, sowie, was wir
                      wissen und lehren. Wir bieten auch{" "}
                      <strong> Transparenz</strong> darüber, wo sonst (oder mit
                      wem sonst) ihr nach dem Kurs selbstständig lernen und
                      wachsen könnt. Wir ermutigen euch darin, eure eigenen
                      Flügel auszubreiten und die Reise fortzusetzen.
                    </li>
                    <li>
                      <strong> Nicht stehlen.</strong> Wir schätzen deine Zeit
                      sehr und versprechen, sie niemals als selbstverständlich
                      zu betrachten. In unseren Yogalehrerausbildungen, Kursen
                      und in der Gemeinschaft bemühen wir uns, eure Erfahrungen
                      zu optimieren. Eure Investition in persönliches Wachstum
                      ist uns wichtig, deshalb planen wir jede Session
                      sorgfältig, um das Beste daraus zu machen.
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
                      der Hauptantrieb unserer Akademie. Wir streben jedoch nach
                      herausragenden Standards, und Qualität erfordert natürlich
                      auch Investitionen.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h4>Unser Programm</h4>
            <p>
              Unsere Programme werden von einem wunderbaren Team östlicher und
              westlicher Lehrer/innen gestaltet, die durch ihre Leidenschaft
              vereint sind, Yoga wirklich täglich zu leben. Alle unsere
              Lehrerinnen und Lehrer haben selbst eine zertifizierte
              Yogalehrerausbildung absolviert und bei renommierten Yogalehrern
              und/oder Instituten innerhalb und außerhalb Indiens studiert. Alle
              Klassen werden mit Wissen, Erfahrung und Freude von Herzen
              unterrichtet. Turiya Yoga öffnet auch seine Türen, um
              inspirierende Yogis in unserer Gemeinschaft willkommen zu heißen,
              indem wir wann immer möglich Meisterklassen anbieten.
            </p>
            <p>
              <strong>Wenn du weitere Fragen hast,</strong>{" "}
              <span> kontaktiere uns.</span>
            </p>
            <h4>Was unsere Teilnehmer*innen über uns sagen </h4>
            <div
              className="video-pop-pup"
              data-bs-toggle="modal"
              data-bs-target=" #exampleModal1">
              <img src={videoimg2} className="img-fluid" alt="video-img" />
            </div>
            <h4>Warum sollte ich das alles Lernen?</h4>
            {/* about turiya */}
            <div>
              <div className="col-lg-9">
                <div className="about_turiya__right">
                  <ul>
                    <li>
                      Yoga zu unterrichten kann nur aus deiner eigenen Praxis
                      kommen. Die Ausbildung ist ein wichtiger Teil deines Wegs
                      als Yogalehrer. Um unterrichten zu können, brauchst du
                      Techniken, um andere sicher in ihrer eigenen Praxis
                      anzuleiten. Menschen haben sehr unterschiedliche Körper,
                      körperliche Fähigkeiten, Lerntypen, Anliegen und Kulturen.
                    </li>
                    <li>
                      Um sicherzustellen, dass deine zukünftigen
                      Teilnehmer*innen in deinem Unterricht sicher und gesund
                      bleiben, wirst du lernen, was du über den Körper und die
                      Bewegung in Bezug auf Anatomie, Physiologie und
                      Biomechanik wissen musst. Darüber hinaus wirst du im Laufe
                      des Kurses mit verschiedenen Anpassungen, Requisiten und
                      unterstützenden Techniken experimentieren.
                    </li>
                    <li>
                      Damit deine zukünftigen Teilnehmerinnen ihr volles
                      Potenzial ausschöpfen können, lernst du Lehrmethoden. Du
                      wirst nicht nur dabei unterstützt, deine eigenen
                      individuellen, natürlichen Yogalehrerqualitäten zu finden
                      und zu schätzen, sondern du wirst auch lernen, wesentliche
                      Yogalehrerqualitäten zu entwickeln, die dir helfen, deine
                      Teilnehmerinnen klar zu lesen und ihre unterschiedlichen
                      Lernstile durch deinen Unterricht zu unterstützen.
                    </li>
                    <li>
                      Damit deine zukünftigen Teilnehmer*innen die Tiefe des
                      Yoga spüren und zu einer disziplinierten Praxis inspiriert
                      werden, wirst du etwas über die Philosophie und Geschichte
                      des Yoga lernen. Die Schriften sind der Treibstoff, der
                      uns zum Üben antreibt, und die Praxis gibt uns die
                      Erfahrung, um wirklich zu verstehen, was die Schriften
                      bedeuten: In einem Kreislauf befruchten sich Philosophie
                      und Praxis gegenseitig.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h4>Aufgaben, Bewertung und Zertifizierung:</h4>
            <p>
              Es ist wichtig zu erwähnen, dass für die RYT200-Zertifizierung
              eine 100%ige Anwesenheit bei allen Kursen erforderlich ist. Nach
              Abschluss der Yogalehrer-Ausbildung werden einige
              Online-Videokurse angeboten, und auch Hausaufgaben werden entweder
              während des Kurses und/oder danach (abhängig vom Fortschritt der
              Teilnehmerinnen) gestellt. Zusätzlich nehmen die Teilnehmerinnen
              an mehreren praktischen Übungen (Praktika) teil. Wir nennen sie
              Übungen, weil es wichtig ist zu verstehen, dass die Teilnahme an
              der gesamten Ausbildung bewertet wird und nicht nur bei einer
              bestimmten Gelegenheit. Es gibt wichtige praktische Sitzungen, in
              denen die Teilnehmer*innen unterrichten und Feedback erhalten.
              Diese dienen jedoch nicht als endgültige Bewertung, sondern zur
              Bewertung des Fortschritts. Die erhaltenen Feedbacks bieten die
              Möglichkeit zu wachsen. Am Ende der Ausbildung wirst du einen
              deutlichen Fortschritt in deiner Entwicklung feststellen. Dies ist
              dank unserer besonderen Unterrichtsmethodik und der in den Kurs
              gesteckten Erfahrung möglich. Du wirst befähigt sein, Yoga sicher
              zu unterrichten.
            </p>
          </div>
        </div>
        <div className="youtube_video">
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
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
                    src={videoId1}
                    // src="https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"
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
      </section>

      <Contact />
      <NewsShelter />
    </>
  );
};

export default Index;
