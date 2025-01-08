import React, { useState, useEffect } from "react";
import "./YogaTraningMallorca.scss";

const YogaTraningMallorca = () => {
  

  return (
    <>
    <div>
        <section class="sampurna_wrapper">
          <div class="container">
            <div class="sampurna_wrapper__content">
            <p>Turiya Yoga Akademie bietet eine 18 Tägige YogaleherInnen Ausbildung im traumhaften Mar Hotel Playa Mar & Spa auf Mallorca, auf den Balearen an. Eine international anerkannte Ausbildung in deutscher Sprache.</p>
              <div class="yoga-list-img">
                <img
                  src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/training_Mallorca.webp"
                  class="img-fluid"
                  alt="ccclip_image002_0001"
                />
                <p class="text-center">
                  Photo by <a href="#"> DJ Nick Otronic</a> on{" "}
                  <a href="#"> Unsplash</a>
                </p>
              </div>
              <p>
                Unsere 200-Stunden-Yogalehrer-Ausbildung ist von der Yoga
                Alliance zertifiziert. Sie vermittelt eine solide Grundlage in
                Hatha-Vinyasa-Flow Yoga. Unser Programm kombiniert das Wissen
                des traditionellen und modernen Hatha Yoga mit Vinyasa Flow. Das
                ermöglicht es dir, nach Abschluss der Ausbildung Hatha Classic /
                Modern, Hatha Flow und Vinyasa Flow zu unterrichten.
              </p>
              <p>
                Im ersten Teil unserer Ausbildung liegt der Fokus auf Hatha
                Yoga. Dies ermöglicht den Teilnehmenden, Ausrichtung und
                Sicherheit zu verstehen, ohne den fließenden Aspekt von Vinyasa
                zu integrieren. Die Teilnehmenden vertiefen ihr Verständnis für
                Yoga-Asanas und entwickeln ein Gespür für die Haltungen. Sie
                lernen verschiedene Hilfsmittel und ihre Anwendung kennen und
                verstehen die Haltungen sowohl in einer traditionellen als auch
                in einer modernen Sichtweise.
              </p>
              <p>
                Im zweiten Teil des Trainings führen wir behutsam den fließenden
                Aspekt ein, der es den Teilnehmenden ermöglicht, verschiedene
                Yogastile in ihre zukünftige Lehrpraxis zu integrieren,
                unterstützt durch das Konzept des Sequencing. Anatomie- und
                Biomechanik-Kurse sind sorgfältig über das gesamte Programm
                verteilt, damit die Teilnehmenden ein grundlegendes Verständnis
                für sichere Bewegungen und korrekte Hands-On-Anpassungen
                entwickeln können.
              </p>
              <p>
                Unsere Vision bei Turiya Yoga ist es, aufrichtige
                Yoga-Praktizierende zu authentischen Yogalehrern auszubilden,
                die Sicherheit, Integrität, Selbstvertrauen und Freude
                ausstrahlen. Die Zertifizierung von Turiya Yoga durch die Yoga
                Alliance wird weltweit anerkannt. Unser Team setzt sich stets
                dafür ein, eine unterstützende und liebevolle Lernumgebung zu
                schaffen und jedem Teilnehmer Aufmerksamkeit zu schenken, damit
                jeder sein Potenzial erreichen und während der Ausbildung
                persönliches Wachstum erfahren kann. Turiya Yoga bietet Kurse in
                Indien, Deutschland und Spanien an und erfüllt dabei hohe
                internationale Standards. Nach Abschluss der Ausbildung kannst
                du sicher mit dem Unterrichten beginnen, sei es in deinem
                Heimatland oder an einem Ort deiner Wahl.
              </p>
              <div class="yoga-list-img">
                <img
                  src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/img2.webp"
                  class="img-fluid"
                  alt="ccclip_image006_0000"
                />
              </div>
              <p>
                *Die 200-stündige Yogalehrerausbildung von Turiya Yoga ist ein
                intensiver 17-tägiger Kurs, der für alle körperlichen
                Konditionen geeignet ist. Dieser umfasst die Inhalte sowohl des
                Moduls 1 (ein 8-tägiger Intensivkurs) als auch des Moduls 2
                (ebenfalls ein 8-tägiger Intensivkurs) unserer Yoga-Ausbildung.
              </p>
              <h4>Unterkunft &amp; Verpflegung</h4>
              <h6>Mar Hotel Playa Mar &amp; Spa, Mallorca </h6>
              <p>
                Dieses wunderschön gelegene Hotel befindet sich nur 50 Meter vom
                schönen Strand von Puerto Pollensa entfernt. Puerto Pollensa ist
                ein bedeutendes Touristenzentrum und gilt als ein kleines Stück
                vom Paradies. Hier gibt es einen wunderschönen Sandstrand, einen
                Blick auf die Berge, einen Jachthafen und eine Promenade
              </p>
              <div class="sampurna_wrapper__grid">
                <div class="sampurna_wrapper__grid-box">
                  <img
                    src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/hotel_room_img/img1.webp"
                    class="img-fluid"
                    alt="Mar_Hotels_Playa_Mar_and_Spa-Piscina_22"
                  />
                </div>
                <div class="sampurna_wrapper__grid-box">
                  <img
                    src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/hotel_room_img/img2.webp"
                    class="img-fluid"
                    alt="Mar_Hotels_Playa_Mar_and_Spa-Restaurante_principal_13"
                  />
                </div>
                <div class="sampurna_wrapper__grid-box">
                  <img
                    src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/hotel_room_img/img3.webp"
                    class="img-fluid"
                    alt="Mar_Hotels_Playa_Mar_and_Spa-Suite_01"
                  />
                </div>
                <div class="sampurna_wrapper__grid-box">
                  <img
                    src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/hotel_room_img/img4.webp"
                    class="img-fluid"
                    alt="IMG_20220915_164155"
                  />
                </div>
              </div>
              <p>
                {" "}
                Das Hotel bietet allen eine tolle Zeit! Eine großzügig
                gestaltete Landschaft, zwei unvergessliche Swimmingpools (ein
                Außen- und ein Innenpool), ein Whirlpool, ein komplettes Spa mit
                Schönheitsbehandlungen, Gärten mit Olivenbäumen, gemütliche und
                angenehme Lounges sowie ein Restaurant mit Buffet und
                Showcooking sind nur einige der Annehmlichkeiten dieses
                4-Sterne-Hotels. Praktiziere mit uns Yoga in einem gemütlichen
                und dennoch anspruchsvollen Hotel, von dem aus du die
                wunderschöne Landschaft der Serra de Tramuntana genießen und im
                warmen Wasser des Mittelmeers entspannen kannst.
              </p>
              <p>
                Nicht zuletzt bietet unser Yogasaal einen herrlichen Blick auf
                die Berge. Bereite dich darauf vor, deine Yogaübungen in einem
                schönen, geräumigen und lichtdurchfluteten Raum zu genießen. Für
                weitere Bilder des Hotels...{" "}
                <a
                  href="https://www.marhotels.com/hoteles/mallorca/puerto-de-pollensa/mar-hotels-playa-mar-spa/galeria"
                  target="_blank">
                  klicke hier.{" "}
                </a>
              </p>
              <p>
                <a
                  href="https://www.marhotels.com/hoteles/mallorca/puerto-de-pollensa/mar-hotels-playa-mar-spa/galeria"
                  target="_blank">
                  https://www.marhotels.com/hoteles/mallorca/puerto-de-pollensa/mar-hotels-playa-mar-spa/galeria
                </a>
              </p>
              <p>
                {" "}
                Wir verstehen, wie wichtig es ist, sich ein Bild davon zu
                machen, wo du deine lang ersehnten 18 Tage Yogaausbildung auf
                der wunderschönen Insel Mallorca verbringen wirst. Die
                Kursteilnehmer*innen übernachten in einer Junior Suite mit zwei
                Schlafbereichen, ausgestattet mit einem Doppelbett und einem
                Queensize-Bett. Jeder Bereich hat einen eigenen Zugang zum
                Balkon, was für Privatsphäre sorgt. Hier kannst du sicher sein,
                dass du dich wohl und willkommen fühlst. *Es ist auch möglich,
                Einzelzimmer zu buchen.
              </p>
              <p>
                Die Vollpension ist im Preis inbegriffen. Frühstück, Mittag- und
                Abendessen sowie Säfte, Tees, Cappuccinos usw. stehen für jeden
                Teilnehmer zur Verfügung. Während der Mahlzeiten werden Getränke
                serviert. Es gibt vegane und vegetarische Optionen.
              </p>
              <p>
                Wenn du weitere Informationen zu den Mahlzeiten benötigst,
                zögere nicht, uns anzurufen. Wir bieten vegane und vegetarische
                Optionen an."
              </p>
              <h6>
                Unterkunft (17 Nächte) &amp; Verpflegung: ca. 2.106 Euro.
                (Junior Suit){" "}
              </h6>
              <h6>
                Unterkunft (17 Nächte) &amp; Verpflegung: ca. 3.400 Euro (
                Single){" "}
              </h6>
              <h6>
                Plus Tourist Tax- wird Vorort bei Ankunft bezahlt. ca. 3.30 Euro
                Pro tag.{" "}
              </h6>
              <h4>Buchung</h4>
              <p>
                Um die Unterkunft deiner Wahl zu buchen und mehr über den Ort,
                die Ausbildung und die verfügbaren Plätze zu erfahren, rufe uns
                an Tel. 069 2013 4987 oder schreibe uns eine E-mail. Wir helfen
                immer gerne.
              </p>
              <p>*Anreise ist nicht im Ausbildungspreis enthalten.</p>
              <div class="sampurna_wrapper__grid">
                <div class="sampurna_wrapper__grid-box">
                  <img
                    src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/travelImg1.webp"
                    class="img-fluid"
                    alt="mallorca001"
                  />
                </div>
                <div class="sampurna_wrapper__grid-box">
                  <img
                    src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/travelImg2.webp"
                    class="img-fluid"
                    alt="mallorca002"
                  />
                </div>
              </div>
              <h4>200H Yogalehrer Ausbildung -18 Tage</h4>
              <h4>Zeitplan - Yogalehrer Ausbildung auf Mallorca </h4>
              <p>
                Unser einzigartiges 200-Stunden-Programm und die Zeit, die du
                mit uns verbringst, werden dich tief berühren. Dein Tag beginnt
                früh mit einer Yogapraxis - Kriyas, Asanas, Pranayama,
                Meditation - umgeben von Natur und Stille. Nach dem Frühstück
                nimmst du an theoretischem Unterricht und Technikklassen teil.
                Diese werden von professionellen Yogalehrern und
                -praktizierenden geleitet, Menschen, die ihre Yogapraxis sowohl
                auf als auch neben der Matte pflegen. Am Ende des Tages
                schließen wir mit einer Asana-, Pranayama- und Meditationspraxis
                ab.
              </p>
              <p>
                Es ist wichtig zu erwähnen, dass unsere Yogalehrerausbildung auf
                Mallorca denselben Standards und dem gleichen Programm wie all
                unsere anderen 200-Stunden-Yogalehrerausbildungen folgt. Um
                unseren Teilnehmern die Natur und die wundervolle Zeit in
                Spanien genießen zu lassen, haben wir uns entschieden, unsere
                Struktur leicht zu ändern und bieten daher zwei freie Tage
                zwischen den Ausbildungseinheiten an. Zusätzlich werden einige
                Klassen zu Anatomie und Philosophie online stattfinden, was
                unseren Tagen in der Natur einen flexibleren Zeitplan und einen
                erholsameren Rhythmus ermöglicht.
              </p>
              <div class="text-center">
                <h4>Beispiel eines Tagesablaufs</h4>
                <p>7:00 - 9:00 Yogapraxis</p>
                <h6>Pause Frühstück</h6>
                <p>09:30 - 11:30 Anatomie-Theorie</p>
                <p>11:30 - 13:00 Unterrichtsmethodik oder Anpassung</p>
                <h6>Pause Mittagessen</h6>
                <p>14:30 - 16:00 Unterrichtsmethodik oder Anpassung</p>
                <p>16:00 - 17:30 Yoga Asana &amp; Spezialtechniken</p>
                <p>18:00 - 19:30 Yogapraxis</p>
              </div>
              <p>
                Zwischen Modul 1 und Modul 2 haben die Teilnehmer*innen die
                Möglichkeit, 2 freie Tage zu genießen, da sich der Zeitplan wie
                im Leben üblich leicht ändern kann. Dies hängt von der
                Gruppendynamik ab.
              </p>
              <div class="yoga-list-img">
                <img
                  src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/routine/img1.webp"
                  class="img-fluid"
                  alt="ccclip_image026"
                />
              </div>
              <h4>Aktivitäten</h4>
              <p>
                Mallorca bietet dir eine Vielzahl von Möglichkeiten, dich und
                die Natur während deiner Auszeit zu genießen. Kajakfahren,
                Schnorcheln und entspannte Strandtage sind nur einige der Dinge,
                die du auf dieser paradiesischen Insel erleben kannst. Wir
                helfen dir gerne dabei, deine Tage so zu planen, dass sie all
                deine Erwartungen erfüllen. Schau dir einige der Aktivitäten an,
                die du erkunden kannst:
              </p>
              <div class="malcora--grid">
                <div class="malcora_box">
                  <div class="malcora--grid-box">
                    <img src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/activities/img1.webp" class="img-fluid" alt="golf" />
                  </div>
                  <div class="malcora--grid-content">
                    <h3>Golf</h3>
                  </div>
                </div>
                <div class="malcora_box">
                  <div class="malcora--grid-box">
                    <img src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/activities/img2.webp" class="img-fluid" alt="golf" />
                  </div>
                  <div class="malcora--grid-content">
                    <h3>kajak</h3>
                  </div>
                </div>
                <div class="malcora_box">
                  <div class="malcora--grid-box">
                    <img src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/activities/img3.webp" class="img-fluid" alt="golf" />
                  </div>
                  <div class="malcora--grid-content">
                    <h3>tauchen</h3>
                  </div>
                </div>
                <div class="malcora_box">
                  <div class="malcora--grid-box">
                    <img src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/activities/img4.webp" class="img-fluid" alt="golf" />
                  </div>
                  <div class="malcora--grid-content">
                    <h3>SUP</h3>
                  </div>
                </div>
                <div class="malcora_box">
                  <div class="malcora--grid-box">
                    <img
                      src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/activities/img5.webp"
                      class="img-fluid"
                      alt="horseriding"
                    />
                  </div>
                  <div class="malcora--grid-content">
                    <h3>reiten</h3>
                  </div>
                </div>
                <div class="malcora_box">
                  <div class="malcora--grid-box">
                    <img
                      src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/activities/img6.webp"
                      class="img-fluid"
                      alt="cycling1"
                    />
                  </div>
                  <div class="malcora--grid-content">
                    <h3>radfahren</h3>
                  </div>
                </div>
                <div class="malcora_box">
                  <div class="malcora--grid-box">
                    <img
                      src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/activities/img7.webp"
                      class="img-fluid"
                      alt="Fallschirmspringen"
                    />
                  </div>
                  <div class="malcora--grid-content">
                    <h3>Fallschirmspringen</h3>
                  </div>
                </div>
                <div class="malcora_box">
                  <div class="malcora--grid-box">
                    <img src="http://127.0.0.1:5001/uploads/assets/images/training_malcornia/activities/img8.webp" class="img-fluid" alt="sea" />
                  </div>
                  <div class="malcora--grid-content">
                    <h3>strand</h3>
                  </div>
                </div>
              </div>
              <h4>Ein wenig darüber, was du lernen wirst :</h4>
              {/* about turiya */}
              <div>
                <div class="col-lg-12">
                  <div class="about_turiya__right">
                    <ul>
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
                sondern auch die Offenheit, nicht nur Spaß zu haben, sondern
                auch zu wissen, wann und wie unsere wunderbaren Teilnehmerdazu
                bringen können, all das große Potenzial, das sie in sich tragen,
                zum Strahlen zu bringen. Wir sind für dich da, für deine Praxis
                und um diese lebensverändernde Praxis namens Yoga zu feiern.
              </p>
              <div class="sampurna_wrapper__grid">
                <div
                  class="sampurna_wrapper__grid-box"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1">
                  <img src="http://127.0.0.1:5001/uploads/assets/images/sampurna_img/video_testimonial/img1.webp" class="img-fluid" alt="hqdefault" />
                </div>
                <div
                  class="sampurna_wrapper__grid-box"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2">
                  <img
                    src="http://127.0.0.1:5001/uploads/assets/images/sampurna_img/video_testimonial/img1.webp"
                    class="img-fluid"
                    alt="W1JGeAxS6gQ"
                  />
                </div>
              </div>
              <h4>Der Kurs ist geeignet für...</h4>
              <p>
                Unser Kurs richtet sich an alle aufrichtigen
                Yoga-Praktizierenden, die nach einer friedlichen Umgebung
                suchen, um sich auf ihre eigene Praxis zu konzentrieren und
                gleichzeitig zu lernen, wie sie Yoga mit anderen teilen können.
                Mallorca ist wahrlich ein magischer Ort, um die Kunst des Yoga
                zu erlernen, umgeben von faszinierender Natur und angenehmem
                Wetter. Der Kurs bereitet dich hauptsächlich darauf vor, sicher
                Hatha-Flow zu unterrichten, von Anfängern bis Fortgeschrittenen!
                Es ist jedoch wichtig zu beachten, dass die Fähigkeit,
                fortgeschrittene Asanas zu unterrichten, stark mit deiner
                eigenen Praxis verbunden ist.
              </p>
              <div class="yoga-list-img">
                <img
                  src="http://127.0.0.1:5001/uploads/assets/images/sampurna_img/video_testimonial/img1.webp"
                  class="img-fluid"
                  alt="ccclip_image030"
                />
              </div>
              <h4>Zertifikat &amp; Yoga Alliance</h4>
              <p>
                Unser 200-Stunden-Yogalehrer-Ausbildungsprogramm (AYA) ist von
                der Yoga Alliance zertifiziert und bietet eine solide Basis im
                Hatha-Flow-Yoga. Unsere Vision ist es, aufrichtige
                Yoga-Praktizierende zu Lehrern zu formen, die Sicherheit,
                Integrität, Selbstvertrauen und Freude ausstrahlen. Diese
                Zertifizierung wird weltweit respektiert. Es ist wichtig zu
                erwähnen, dass für den Erhalt der RYT200-Zertifizierung die
                100%ige Anwesenheit bei allen Kursen Pflicht ist. Nach der
                Yogalehrer-Ausbildung werden einige Online-Videokurse angeboten,
                und auch Hausaufgaben werden entweder während des Kurses
                und/oder danach (abhängig von den Teilnehmer*innen) erteilt.
              </p>
              <p>
                Darüber hinaus nehmen die Teilnehmerinnen der
                Yogalehrerausbildung an mehreren praktischen Übungen (Praktika)
                teil. Wir nennen sie 'Übungen', weil es wichtig ist zu wissen,
                dass ihre Teilnahme an der gesamten Ausbildung bewertet wird und
                nicht nur zu einem bestimmten Zeitpunkt. Es gibt zwar wichtige
                praktische Sitzungen, in denen die Teilnehmerinnen unterrichten
                und Feedback erhalten, aber diese sind nicht der alleinige
                Maßstab für den Fortschritt unserer Teilnehmer*innen. Wir
                bewerten deinen Fortschritt und bieten durch Feedback die
                Möglichkeit zu wachsen. Am Ende der Ausbildung wirst du sehen,
                dass du durch unsere besondere Unterrichtsmethodik und die
                Erfahrung, die wir in den Kurs einbringen und kontinuierlich
                weiterentwickeln, einen großen Entwicklungssprung gemacht hast.
                Du wirst sehen, dass du nach der Ausbildung in der Lage bist,
                Yoga sicher zu unterichten.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default YogaTraningMallorca;
