import React, { useState, useEffect } from "react";
import "./training_goa.scss";
import goa_banner from "../../assets/banner/goa-banner.webp";
import SimpleBanner3 from "../banner/SimpleBanner3";
import img1 from "../../assets/images/training_goa/img1.webp";
import img2 from "../../assets/images/training_goa/img2.webp";
import img3 from "../../assets/images/training_goa/img3.webp";
import img4 from "../../assets/images/training_goa/img4.webp";
import img5 from "../../assets/images/training_goa/img5.webp";
import img6 from "../../assets/images/training_goa/img6.webp";
import goa_indien from "../../assets/images/training_goa/goa-indien.webp";
import NewsShelter from "../NewsShelter";
import Contact from "../Contact";
import Testimonial from "../Testimonial";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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


  const [isloginOpen, setisloginOpen] = useState(false);


  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const navigate = useNavigate();




  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [mainData, setMainData] = useState("");


  const [earlyData, setEarlyData] = useState("");

  const [upcomingCourse, setUpcomingCourse] = useState("");

  const getUpcomingCourse = () => {
    axios
      .get(BASE_URL + "/getModuleByLocation/Goa, Indien")
      .then((response) => {
        console.log("response of Goa courses", response.data);
        const data = response.data.data;
        setUpcomingCourse(data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }



  console.log("upcoming courses", upcomingCourse)
  useEffect(() => {
    getUpcomingCourse();
    fetchNextUpcomingCourse();
  }, []);

  const fetchEarlyBirdData = () => {
    axios
      .get(BASE_URL + "/getClosestUpcomingCourseswithNull")
      .then((response) => {
        console.log("respnse of fetchEarlyBirdData", response.data.data[0]);
        const data = response.data.data[0];
        const startDate = data && data.StartDate;
        console.log("start date", data)
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



  const fetchData = () => {
    axios
      .get(
        BASE_URL + "/module_webpages_by_category/200H AYA Yogalehrer Ausbildung Goa Indien"
      )
      .then((response) => {
        console.log("response of yoga training goa", response.data.data[0]);

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


  console.log("all courses data", mainData, bannerImg);
  console.log("banner image", bannerImg);


  // Function to toggle the dialog visibility
  const handletriggerDialogBox = (courseid) => {

    const auth_token = localStorage.getItem("turiya_auth_token");

    console.log("course id: handletriggerDialogBox" + courseid, auth_token);
    if (auth_token) {
      // navigate("/course_booking");
      reducePlace(courseid);
      addToCart(courseid);
    } else {
      setIsDialogVisible(true); // Show the dialog
    }

    // handletriggerDialogBox
  };

  // Function to close the dialog
  const closeDialogBox = () => {
    setIsDialogVisible(false); // Hide the dialog
  };

  const handleredirect = () => {
    setisloginOpen(true);
    closeDialogBox(); // Close
    //  onClick="window.location.href='registration.php';"
  };

  const reducePlace = (id) => {


    axios
      .get(BASE_URL + `/reduce-places/${id}`)
      .then((response) => {
        console.log("response of reduce-places", response);
        navigate(`/course_booking/${id}`);
      })
      .catch((error) => {
        console.log("error of reduce-places", error);
      });
  };

  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }

  // Example usage:
  const formattedDate = formatDate("2025-01-09");
  console.log(formattedDate); // Output: 09.01.2025

  const addToCart = (courseid) => {
    // alert("courseid",courseid)
    const payload = {
      moduleId: courseid,
      status: "active",
    };

    axios
      .post(BASE_URL + "/add_course_in_cart", payload)
      .then((response) => {
        console.log("response of cart", response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);


  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }


  function isOfferValid(offerEndDate) {
    if (!offerEndDate) return false;

    const today = new Date();
    const offerEnd = new Date(offerEndDate);

    return today <= offerEnd;
  }


  return (
    <>
      {/* <SimpleBanner
        banner={goa_banner}
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

      <div>
        <section className="global_wrapper about_wrapper" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="about_wrapper__left" data-aos="fade-up">
                  {/* <h3>Yogalehrer Ausbildung 200 Stunden - Hatha &amp; Vinyasa - Flow ( Auf Deutsch )</h3> */}
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

                  {/* <p>Der Süden von Goa ist bekanntlich der schönste und ruhigste Teil des Staates. Vor der Kulisse von Kokosnussplantagen und grünen Hügeln befinden sich hier zweifellos die schönsten Strände. Turiya Yoga bietet seine 200-Stunden-Yogalehrer-Training an einem Ort in der Nähe eines der friedlichsten und unberührtesten Orte in Süd-Goa an, dem wunderschönen Agonda Beach. Karibik-ähnliche Traumstrände, idyllische Ferienorte, die nichts von ihrer Ursprünglichkeit eingebüßt haben, und bunte Hippie-Märkte lassen eure Yogalehrer-Ausbildung unvergesslich werden.</p> */}
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
                          {closestUpcomingCourse[0] && isOfferValid(closestUpcomingCourse[0].OfferEndDate) && closestUpcomingCourse[0].Offerprice > 0 && <p>
                            Das Angebot endet am
                            <i className="bx bxs-calendar" />
                            {closestUpcomingCourse[0].OfferEndDate}
                          </p>}
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
                            {
                              formatDate(closestUpcomingCourse[0] ? closestUpcomingCourse[0].StartDate : null)
                            }
                            <span className="my-2">-</span>
                            {
                              formatDate(closestUpcomingCourse[0] ? closestUpcomingCourse[0].EndDate : null)
                            }

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
              <div className="yoga-list-img">
                <img
                  src={img1}
                  className="img-fluid"
                  alt="clip_image004_0000"
                />
              </div>
              <h4>Unterkunft im Yoga Campus</h4>
              <p>
                Dieses wunderschöne Yoga Campus ist mitten in der Natur, nur 10
                Fahrminuten vom Strand entfernt. Hier genieÃŸen wir das
                beruhigende Rauschen der Meeresbrise, die durch die Palmen
                tanzt. All das ist mit einer 75-minütigen Fahrt vom Flughafen
                aus leicht zu erreichen.
              </p>
              <div className="yoga-list-img">
                <img
                  src={img2}
                  className="img-fluid"
                  alt="clip_image006_0000"
                />
              </div>
              <div className="yoga-list-img">
                <img
                  src={img3}
                  className="img-fluid"
                  alt="clip_image008_0000"
                />
              </div>
              <div className="yoga-list-img">
                <img
                  src={img4}
                  className="img-fluid"
                  alt="clip_image010_0000"
                />
              </div>
              <p>
                Das Yoga Campus ist es gewohnt, große Gruppen zu empfangen.
                Eingebettet in die Natur, und wirklich leckeren Essen. Auch die
                Unterbringungsmöglichkeiten stellen alle Besucher zufrieden - es
                gibt Einzelzimmer, Doppelzimmer Belegung! Egal in welchem Zimmer
                du unterkommst, du wirst einen nahrhaften und komfortablen
                Schlaf genießen, während dich die Natur umgibt.
              </p>
              <div className="yoga-list-img vertical-img">
                <img
                  src={img5}
                  className="img-fluid"
                  alt="clip_image012_0000"
                />
              </div>
              <p>
                In die Yogahalle passen leicht und bequem 15-20 Personen. Die
                Halle ist mit Gurten, Blöcken, Kissen und Decken ausgestattet,
                um unsere Savasanas noch erholsamer zu gestalten.{" "}
              </p>
              <table className="table table-bordered my--table">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Frühbücher</th>
                    <th>Normal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Turiya Yoga Private Einzelzimmer + Verpflegung +
                      Ausbildung
                    </td>
                    <td>€ 3099</td>
                    <td>€ 3299</td>
                  </tr>
                  <tr>
                    <td>
                      Turiya Yoga Doppelt Belegung + Verpflegung + Ausbildung
                    </td>
                    <td>€ 2799 / Pro Person</td>
                    <td>€ 2999 / Pro Person</td>
                  </tr>
                </tbody>
              </table>
              <p>* 8 Einzelzimmer Verfügbar</p>
              <p>* 9 Doppelt Zimmer verfügbar</p>
              <p>* Kurs ist 21 Tage</p>
              <p>* Prüfungsgebühr / Praktikum im Preis inbegriffen.</p>
              <p>* Flughafen Transfer ca. 30€ (Bitte bei Buchung angeben)</p>
              <h4>Buchung:</h4>
              <p>
                Um die Unterkunft deiner Wahl zu buchen und mehr über den Ort,
                die Ausbildung und die verfügbaren Plätze zu erfahren, rufe uns
                an Tel. 069 2013 4987
              </p>
              <h4>200H Yogalehrer Ausbildung- 21 Tage</h4>
              <p>
                Unser einzigartiges 200-Stunden-Programm und die Zeit, die du
                mit uns verbringst, werden dich tief berühren. Dein Tag beginnt
                früh mit einer Yogapraxis - Kriyas, Asanas, Pranayama,
                Meditation - umgeben von Natur und Stille. Nach dem Frühstück
                nimmst du an theoretischem Unterricht und Technik-Klassen teil.
                Diese werden von erfahrenen Lehrern geleitet, die seit über 10
                Jahren sowohl ihre Yoga-Praxis auf als auch neben der Matte
                kultivieren.
              </p>
              <p>
                Zum Tagesabschluss praktizieren wir Asanas, Pranayama und
                Meditation.
              </p>
              <p>
                Es ist wichtig zu erwähnen, dass unsere Yogalehrerausbildung in
                Goa denselben Standards und dasselbe Programm wie all unsere
                200-Stunden-Yogalehrerausbildungen folgt. Um unseren Teilnehmern
                die Möglichkeit zu geben, die Natur und die wundervolle Zeit in
                Goa zu genießen, haben wir entschieden, jeden Sonntag als freien
                Tag in der Ausbildung zu integrieren. Zusätzlich finden einige
                Klassen zur Geschichte und Philosophie online statt, damit
                unsere Tage in der Natur einen flexibleren Zeitplan und einen
                entspannteren Rhythmus haben können.
              </p>
              <div className="yoga-list-img">
                <img src={goa_indien} className="img-fluid" alt="goa-indien" />
              </div>
              <div className="yoga_center">
                <h4>Beispiel eines Tagesablaufs</h4>
                <p>7:00 - 9:00 Yogapraxis</p>
                <h6>Pause Frühstück</h6>
                <p>10:00 - 11:30 Philosophie oder Anatomie-Theorie</p>
                <p>11:30 - 13:00 Unterrichtsmethodik oder Anpassung</p>
                <h6>Pause Mittagessen</h6>
                <p>14:00/14:30 - 16:00 Unterrichtsmethodik oder Anpassung</p>
                <p>16:00 - 17:30 Yoga Asana &amp; Spezialtechniken</p>
                <p>18:00 - 19:30 Yogapraxis</p>
                <p>
                  ** Wie alles im Leben, können sich auch die Zeitpläne etwas
                  verändern. Das hängt von der jeweiligen Gruppe ab.
                </p>
              </div>
              {/* about turiya */}
              <div>
                <div className="col-lg-12">
                  <div className="about_turiya__right">
                    <ul>
                      <h4>Ein wenig darüber, was du lernen wirst:</h4>
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
              <h4>Wir sind für dich da...</h4>
              <p>
                Wir sind es gewohnt, Gruppen von Yogis im Ausland und
                Yogalehrerausbildungen zu betreuen - es ist eine Leidenschaft
                von uns. Das kannst du an den vielen glücklichen Gesichtern in
                dem Video sehen, das wir hier unten zusammengestellt haben.
                Diese Art von Erfahrung erfordert nicht nur Herzlichkeit von
                allen Lehrern, sondern auch die Offenheit, nicht nur Spaß zu
                haben, sondern auch zu wissen, wann und wie wir unsere
                wunderbaren Teilnehmer*innen dazu bringen können, all das große
                Potenzial, das sie in sich tragen, zum Strahlen zu bringen. Wir
                sind für dich da, für deine Praxis und um diese
                lebensverändernde Praxis namens Yoga zu feiern.
              </p>
              <h4>Der Kurs ist geeignet für...</h4>
              <p>
                Alle aufrichtigen Yoga-Praktizierenden, die auf der Suche nach
                einer friedlichen Umgebung sind, in der sie sich darauf
                konzentrieren können, ihre eigene Praxis zu vertiefen und
                gleichzeitig zu lernen, wie sie Yoga mit anderen teilen können.
                Goa ist wahrlich ein magischer Ort, um die Kunst des Yoga zu
                erlernen, umgeben von einer faszinierenden Natur und angenehmem
                Wetter und Strand. Der Kurs bereitet dich hauptsÃ¤chlich darauf
                vor, sicher Hatha-Flow zu unterrichten (Anfänger bis
                Fortgeschrittene)! Beachte jedoch, dass die Fähigkeit,
                fortgeschrittene Asanas zu unterrichten, mit deiner eigenen
                Praxis zusammenhängt.
              </p>
              <div className="yoga-list-img">
                <img src={img6} className="img-fluid" alt="clip_image016" />
              </div>
              <div className="yoga_center">
                <h4>Zertifikat &amp; Yoga Alliance</h4>
                <p>
                  Unser Yoga Teacher Training 200-Stunden-Programm ist von der
                  Yoga-Alliance zertifiziert. Die Ausbildung ist so konzipiert,
                  dass sie eine starke Grundlage in Hatha-Flow Yoga bietet.
                  Unsere Vision ist es, aufrichtige Yoga-Praktizierende in
                  Lehrer zu verwandeln, die Sicherheit, Integrität,
                  Selbstvertrauen und Freude ausstrahlen. Diese Zertifizierung
                  ist weltweit respektiert und um sie zu verdienen, wirst du
                  während deines gesamten Aufenthalts bei uns bewertet werden.
                  Sobald du deinen Abschluss gemacht hast, kannst du anfangen zu
                  unterrichten, entweder in deinem Heimatland oder wo auch immer
                  du dich entscheidest zu reisen. Das Zertifikat ist
                  international anerkannt.
                </p>
                <p>200H Yogalehrer Ausbildung M1 + M2</p>
                <p>Unterbringung für 21 Tage im Yoga-Resort:</p>
                <p>
                  3 Mahlzeiten: Frühstück, Mittagessen Abendessen für
                  Ausbildungstage:
                </p>
                <p>Ab 2799 €</p>
                <p>
                  Wenn du weitere Fragen hast, ruf uns doch einfach an. Wir
                  helfen immer gerne.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ backgroundColor: '#F9F9F9', paddingTop: "30px", paddingBottom: "30px" }}>
        <div className="container">
          <div className="table-responsive index-table" style={{ backgroundColor: '#F9F9F9' }}>
            <table
              className="table custom-table aos-init"
              data-aos="zoom-in-up">
              <thead style={{ backgroundColor: "#F9F9F9" }}>
                <tr
                  className="table-heading"
                  style={{ backgroundColor: "#F9F9F9" }}>
                  <th scope="col" style={{ backgroundColor: "#F9F9F9" }}>
                    Ausbildungsorte
                  </th>
                  <th scope="col" style={{ backgroundColor: "#F9F9F9" }}>
                    Datum
                  </th>
                  <th scope="col" style={{ backgroundColor: "#F9F9F9" }}>
                    Ort
                  </th>
                  <th
                    scope="col"
                    className="germany-price"
                    style={{ backgroundColor: "#F9F9F9" }}>
                    Preis/Frühbucher
                  </th>
                  <th scope="col" style={{ backgroundColor: "#F9F9F9" }}>
                    Freie Plätze
                  </th>
                  <th scope="col" style={{ backgroundColor: "#F9F9F9" }}>
                    Kontakt
                  </th>
                </tr>
              </thead>
              <tbody
                className="table-body desktop"
                style={{ backgroundColor: "#F9F9F9" }}>
                {upcomingCourse &&
                  upcomingCourse.map((item, index) => {
                    console.log("row of upcoming courses", item);



                    return (
                      item.Place && item.Place !== '0' ? (
                        <tr style={{ backgroundColor: "#F9F9F9" }} key={index}>
                          <th style={{ backgroundColor: "#F9F9F9" }}>
                            {item.Ausbildung}
                          </th>
                          <td style={{ backgroundColor: "#F9F9F9" }}>
                            <i className="bx bxs-calendar me-1" />
                            {formatDate(item.StartDate)} &nbsp;-&nbsp;
                            <i className="bx bxs-calendar me-1" />
                            {formatDate(item.EndDate)}{" "}
                          </td>
                          <td style={{ backgroundColor: "#F9F9F9" }}>
                            <a href="#" className="location">
                              <i className="bx bxs-map me-1" />

                              {item.Location}
                              {/* Goa, Indien */}
                            </a>
                          </td>
                          <td style={{ backgroundColor: "#F9F9F9" }}>
                            {isOfferValid(item.OfferEndDate) && item.Offerprice > 0 ? (
                              <>
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  € {item.Offerprice}
                                </span>
                                <span className="ms-2">
                                  <del>€{item.price}</del>
                                </span>
                                <br />
                                <small>
                                  Das Angebot endet am{" "}
                                  <br/>
                                  <i className="bx bxs-calendar"></i> {formatDate(item.OfferEndDate)}
                                </small>
                              </>
                            ) : (
                              <span>€{item.price}</span>
                            )}
                          </td>

                          <td
                            style={{
                              backgroundColor: "#F9F9F9",
                              color: item.Place <= 3 ? "red" : "black", // Optional: change text color to white if background is red
                            }}>
                            {item.Place <= 3
                              ? `only Noch ${item.Place} Plätze frei`
                              : `Noch ${item.Place} Plätze frei`}
                          </td>

                          <td style={{ backgroundColor: "#F9F9F9" }}>
                            <button
                              onClick={() => handletriggerDialogBox(item._id)}
                              style={{
                                // background-color: #FF5722;

                                backgroundColor:
                                  item.Place <= 3 ? "#FF5722" : "#9BBB59",
                                border: "0px solid",
                              }}
                              className="table-btn triggerDialogBox"
                              data-id={9}>
                              ANMELDEN
                            </button>{" "}
                          </td>
                        </tr>
                      ) : null

                    );
                  })}
              </tbody>


              <tbody class="table-body mobile" style={{ backgroundColor: "#EDEDED" }}>
                {upcomingCourse &&
                  upcomingCourse.map((item, index) => {
                    console.log("row of upcoming courses", item);



                    return (
                      item.Place && item.Place !== '0' ? (
                        <tr style={{ backgroundColor: "#F9F9F9" }} key={index}>
                          <th style={{ backgroundColor: "#F9F9F9" }}>
                            {item.Ausbildung}
                          </th>
                          <td style={{ backgroundColor: "#F9F9F9" }}>
                            <i className="bx bxs-calendar me-1" />
                            {formatDate(item.StartDate)} &nbsp;-&nbsp;
                            <i className="bx bxs-calendar me-1" />
                            {formatDate(item.EndDate)}{" "}
                          </td>
                          <td style={{ backgroundColor: "#F9F9F9" }}>
                            <a href="#" className="location">
                              <i className="bx bxs-map me-1" />

                              {item.Location}
                              {/* Goa, Indien */}
                            </a>
                          </td>
                          <td style={{ backgroundColor: "#F9F9F9" }}>
                            {/* {'Frühbucherangebot' + " " + item.Offerprice > 0 ? item.Offerprice : null} */}
                            {item.Offerprice > 0 ? (
                              <>


                                <span
                                  style={{
                                    color:
                                      item.Offerprice > 0 ? "red" : "inherit",
                                  }}>
                                  €{" "}
                                  {item.Offerprice > 0 ? item.Offerprice : item.price}
                                </span>


                              </>
                            ) : null}

                            <span
                              // style={{
                              //   color: item.Offerprice > 0 ? "red" : "inherit",
                              // }}
                              className="ms-2"
                            >
                              {item.Offerprice > 0 ? (
                                <del>€{item.price} </del>
                              ) : (
                                <span>€{item.price}</span>
                              )}
                            </span>
                            <br />
                            {item.OfferEndDate ? (
                              <>
                                <small>Das Angebot endet am </small><small><br /><i class="bx bxs-calendar"></i>
                                  {formatDate(item.OfferEndDate ? item.OfferEndDate : null)}
                                </small>

                              </>
                            ) : null}

                          </td>

                          <td
                            style={{
                              backgroundColor: "#F9F9F9",
                              color: item.Place <= 3 ? "red" : "black", // Optional: change text color to white if background is red
                            }}>
                            {item.Place <= 3
                              ? `only Noch ${item.Place} Plätze frei`
                              : `Noch ${item.Place} Plätze frei`}
                          </td>

                          <td style={{ backgroundColor: "#F9F9F9" }}>
                            <button
                              onClick={() => handletriggerDialogBox(item._id)}
                              style={{
                                // background-color: #FF5722;

                                backgroundColor:
                                  item.Place <= 3 ? "#FF5722" : "#9BBB59",
                                border: "0px solid",
                              }}
                              className="table-btn triggerDialogBox"
                              data-id={9}>
                              ANMELDEN
                            </button>{" "}
                          </td>
                        </tr>
                      ) : null

                    );
                  })}
              </tbody>
            </table>



          </div>

        </div>
      </div>
      <Testimonial />
      <Contact />
      <NewsShelter />
    </>
  );
};

export default Index;