import React from "react";
import "./yoga_retreat.scss";
import SimpleBanner from "../banner/SimpleBanner";
import banner from "../../assets/images/yoga_retreat/yoga_retreat_banner.webp";
import img1 from '../../assets/images/yoga_retreat/room1.webp'
import img2 from '../../assets/images/yoga_retreat/room2.webp'
import img3 from '../../assets/images/yoga_retreat/room3.webp'
import img4 from '../../assets/images/yoga_retreat/room4.webp'
import img5 from '../../assets/images/yoga_retreat/room5.webp'
import img6 from '../../assets/images/yoga_retreat/free_msg.webp'
import img7 from '../../assets/images/yoga_retreat/free_meals.webp'
import img8 from '../../assets/images/yoga_retreat/packageImg1.webp'
import Contact from "../Contact";
import NewsShelter from "../NewsShelter";
import YogaRetreatBanner from "../banner/YogaRetreatBanner";


const index = () => {
  return (
    <>
      <YogaRetreatBanner/>
      {/* <SimpleBanner banner='https://api.turiyayoga.de/uploads/assets/new/goa-indien-bg.webp'   para="null"    heading="Yoga Retreat am Strand"
        
          buttonTxt="KUNDENSTIMMEN VIDEO"/> */}

      <section className="global_wrapper yoga-retreat">
        <div className="container">
          <div className="main_heading">
            <h1>Yoga Retreat in Goa mit Turiya Yoga</h1>
            <small>Willkommen am Galjibhaga Beach, Goa!</small>
            <p data-aos="fade-up">
              Entfliehe dem Chaos des Alltags und tauche mit Manu und seinem
              Team von Turiya Yoga in ein glückseliges Retreat-Erlebnis ein.
              Unser Retreat, gelegen am atemberaubenden Galjibhaga Beach in Goa,
              bietet eine perfekte Mischung aus Entspannung, Heilung und
              unterhaltsamen Aktivitäten, um deinen Geist, Körper und Seele zu
              revitalisieren.
            </p>
          </div>
        </div>
        <div className="global_content">
          <div className="container">
            <div className="yoga-retreat-content">
              <div className="yoga_gallery">
                <img
                  src={img1}
                  className="img-fluid"
                  alt="yoga-retreat-in-goa-indien-01"
                />
                <img
                   src={img2}
                  className="img-fluid"
                  alt="yoga-retreat-in-goa-indien-02"
                />
                <img
                                  src={img3}
                  className="img-fluid"
                  alt="yoga-retreat-in-goa-indien-03"
                />
              </div>
              <div className="yoga-retreat-img" data-aos="fade-up">
                <p data-aos="fade-up">
                  Unser Refugium befindet sich in einer ruhigen Umgebung mit 15
                  gemütlichen Hütten entlang des Strandes, die dir während
                  deines Aufenthalts eine ruhige und komfortable Atmosphäre
                  bieten. Beim Aufwachen hörst du das sanfte Rauschen der Wellen
                  und spürst den warmen Sand unter deinen Füßen. Jede Hütte ist
                  so gestaltet, dass sie einen friedlichen Rückzugsort bietet,
                  an dem du dich entspannen und in Einklang mit der Natur kommen
                  kannst.
                </p>
                <img
                 src={img4}
                  alt="yoga-retreat-in-goa-indien-04"
                  className="img-fluid"
                />
              </div>
              <div className="yoga-retreat-img" data-aos="fade-up">
                <p data-aos="fade-up">
                  Direkt neben den Hütten findest du unsere wunderschöne
                  Yogahalle, die sich direkt am Strand befindet. Diese geräumige
                  und luftige Halle wurde speziell dafür entworfen, eine ruhige
                  Atmosphäre für deine Yogapraxis zu schaffen. Umgeben von der
                  Schönheit des Galjibhaga-Strandes kannst du das beruhigende
                  Rauschen der Wellen und die sanfte Meeresbrise genießen,
                  während du in deine Yogapraxis eintauchst. Unsere Yogahalle
                  bietet dir den perfekten Raum, um inneren Frieden zu finden
                  und die transformative Kraft des Yoga zu entdecken.
                </p>
                <img
                  src={img5}
                  alt="yoga-retreat-in-goa-indien-05"
                  className="img-fluid"
                />
              </div>
              <div className="yoga-parra" data-aos="fade-up">
                <p data-aos="fade-up">
                  Deinen Körper mit gesunden Mahlzeiten zu nähren, ist ein
                  wesentlicher Bestandteil unseres Retreat-Erlebnisses. Unsere
                  talentierten Köche bereiten jeden Tag drei köstliche,
                  proteinreiche vegane Mahlzeiten mit Zutaten aus der Region zu.
                  Mit dem Schwerpunkt auf gesunder und nachhaltiger Ernährung
                  erfreut unser Menü nicht nur deine Geschmacksnerven, sondern
                  unterstützt auch dein allgemeines Wohlbefinden. Jede Mahlzeit
                  ist eine Gelegenheit, deinen Körper zu nähren und die
                  lebendigen Aromen von Goa zu genießen.
                </p>
                <p data-aos="fade-up">
                  Zusätzlich zu unseren Hauptangeboten bieten wir ein
                  zusätzliches Paket an, um dein Rückzugserlebnis noch zu
                  verbessern. Verwöhne dich mit verjüngenden Massagen von
                  erfahrenen Therapeuten, bei denen du Verspannungen lösen und
                  deinen Körper wieder ins Gleichgewicht bringen kannst. Für
                  alle, die das Abenteuer suchen, bieten wir belebende Ausritte
                  entlang der malerischen Küste, bei denen du die Schönheit des
                  Galjibhaga Beach aus einer einzigartigen Perspektive genießen
                  kannst. Nimm an einer geführten Wasserfalltour teil und erlebe
                  den Nervenkitzel des Kanufahrens, während du in die Wunder der
                  Natur eintauchst.
                </p>
                <p data-aos="fade-up">
                  Bei Turiya Yoga Retreat glauben wir an einen ganzheitlichen
                  Ansatz, um zu heilen und eine tolle Zeit zu haben. Unser
                  Retreat ist darauf ausgerichtet, dir eine Atmosphäre der
                  Entspannung, Freude und des persönlichen Wachstums zu bieten.
                  Egal, ob du einen friedlichen Rückzugsort am Strand suchst,
                  deine Yogapraxis vertiefen willst oder dich nach aufregenden
                  Abenteuern sehnst - wir haben für jeden etwas dabei.
                </p>
                <p data-aos="fade-up">
                  Begleite uns zu einem transformativen Rückzug, bei dem du die
                  perfekte Mischung aus Spaß, Freizeit und Heilung erleben
                  wirst. Lass dich vom rhythmischen Rauschen der Wellen und dem
                  unberührten Sand des Galjibhaga Beach in einen Zustand der
                  Ruhe und Glückseligkeit versetzen. Besuche unsere Website
                  turiyayoga.de, um mehr über unsere Angebote zu erfahren, die
                  Verfügbarkeit zu prüfen und deinen Platz im Turiya Yoga
                  Retreat noch heute zu buchen.
                </p>
              </div>
              <div className="yoga-list" data-aos="fade-up">
                <h6 data-aos="fade-up">Hinweis:</h6>
                <p data-aos="fade-up">
                  Die aktuellsten Informationen zu Terminen, Preisen und
                  weiteren Details findest du unten auf unserer Website oder bei
                  unserem freundlichen Team.
                </p>
                <p data-aos="fade-up">
                  Bei Turiya Yoga Retreat bieten wir ein All-inclusive-Paket für
                  unsere Gemeinschaftshütten an, das dir ein angenehmes und
                  stressfreies Retreat-Erlebnis garantiert. Der Preis für einen
                  8-tägigen Aufenthalt in einer Privaten Hütte beträgt mit
                  Frühbucherrabatt 1099€ und ohne 1499€. Dieses Paket beinhaltet
                  Folgendes:
                </p>
                <p data-aos="fade-up">
                  Unterkunft: Genieße den Komfort und die Ruhe unserer
                  gemütlichen Hütten, die direkt am Strand liegen.
                </p>
                <h6 data-aos="fade-up">Flughafentransfer:</h6>
                <p data-aos="fade-up">
                  Wir bieten einen kostenlosen Abhol- und Bringservice vom
                  Flughafen Goa Dabolim an, um eine reibungslose An- und Abreise
                  zu gewährleisten.
                </p>
                <h6 data-aos="fade-up">Eine kostenlose Massage:</h6>
                <p data-aos="fade-up">
                  Gönne dir während deines Aufenthalts eine verjüngende Massage,
                  die von unseren erfahrenen Therapeuten durchgeführt wird.
                  Lasse deine Verspannungen los, entspanne deine Muskeln und
                  erlebe tiefe Entspannung.
                </p>
                <div className="yoga-list-img">
                  <img
                    src={img6}
                    className="img-fluid"
                    alt="yoga-retreat-in-goa-indien-06"
                  />
                </div>
                <p data-aos="fade-up">
                  Begib dich auf eine aufregende Delfinbeobachtungstour, bei der
                  du die Gelegenheit hast, diese majestäschen Tiere in ihrem
                  natürlichen Lebensraum zu beobachten. Es ist ein
                  unvergessliches Erlebnis, das dich der Natur näherbringt.
                </p>
                <h6 data-aos="fade-up">Drei Mahlzeiten pro Tag:</h6>
                <p data-aos="fade-up">
                  Genieße jeden Tag drei gesunde, proteinreiche vegane
                  Mahlzeiten, die von unseren talentierten Köchen mit Zutaten
                  aus der Region zubereitet werden. Unser Speiseplan
                  konzentriert sich darauf, deinen Körper zu nähren und deinen
                  Gaumen zu erfreuen.
                </p>
                <p data-aos="fade-up">
                  Tauche ein in die transformative Kraft des Yoga, entspanne
                  dich bei einer Massage, erlebe die Natur bei einem
                  Delfinausflug und genieße die köstlichen veganen Mahlzeiten -
                  all das ist in diesem umfassenden Paket enthalten.
                </p>
                <div className="yoga-list-img">
                  <img
                    src={img7}
                    className="img-fluid"
                    alt="yoga-retreat-in-goa-indien-07"
                  />
                </div>
                <p data-aos="fade-up">
                  Bitte beachte, dass der angegebene Preis und die
                  Inklusivleistungen der Verfügbarkeit unterliegen und variieren
                  können. Für die genauesten und aktuellsten Informationen,
                  einschließlich der Verfügbarkeit und aller zusätzlichen
                  Details, die du benötigst, besuche bitte unsere Website
                  turiyayoga.de oder kontaktiere unser freundliches Team. Wir
                  helfen dir gerne bei der Planung deines Retreats und
                  beantworten alle Fragen, die du hast.
                </p>
                <h6 data-aos="fade-up">
                  Hier sind die Angebote, die im Retreat Paket enthalten sind:
                </h6>
                <p data-aos="fade-up">Im Paket inbegriffen:</p>
                <p data-aos="fade-up">
                  8-tägiger Aufenthalt in einer Strand Hütten
                </p>
                <p data-aos="fade-up">Yoga on the Beach</p>
                <p data-aos="fade-up">
                  Flughafentransfer (Abholung und Rücktransport vom Flughafen
                  Goa Dabolim)
                </p>
                <p data-aos="fade-up">Tägliche Massage</p>
                <p data-aos="fade-up">Delfinausflug</p>
                <p data-aos="fade-up">
                  Drei vollwertige vegane o. Veg Mahlzeiten pro Tag{" "}
                </p>
                <p data-aos="fade-up">Wasserfallausflug o. Schluchtenwandern</p>
                <div className="yoga-list-img">
                  <img
                    src={img8}
                    className="img-fluid"
                    alt="yoga-retreat-in-goa-indien-08"
                  />
                </div>
                <p data-aos="fade-up">
                  Zusätzlich bieten wir die folgenden Aktivitäten und
                  Dienstleistungen an, die gegen eine geringe Zusatzgebühr
                  gebucht werden können:
                </p>
                <h6 data-aos="fade-up">
                  Optionale Zusatzaktivitäten und -leistungen:{" "}
                </h6>
                <p data-aos="fade-up">
                  Private Yoga-Sitzungen: Verbessere deine Praxis mit
                  persönlicher Anleitung durch unsere erfahrenen Lehrer.
                </p>
                <p data-aos="fade-up">
                  Ausflüge zu nahegelegenen Attraktionen: Entdecke die Schönheit
                  Goas mit geführten Ausflügen zu lokalen Attraktionen wie
                  Tempeln, Märkten und historischen Stätten.
                </p>
                <p data-aos="fade-up">
                  Surfing Lessons: Erlebe den Nervenkitzel des Surfens mit
                  professionellen Lehrern, die dich durch die Wellen führen.
                </p>
                <p data-aos="fade-up">
                  Ayurvedische Behandlungen: Tauche ein in die uralte
                  Heiltradition des Ayurveda mit verjüngenden Behandlungen, die
                  auf deine Bedürfnisse zugeschnitten sind.
                </p>
                <p data-aos="fade-up">
                  Strandpicknick bei Sonnenuntergang: Genieße ein malerisches
                  Strandpicknick, während du die goldenen Farben des
                  Sonnenuntergangs über dem Meer beobachtest.
                </p>
                <p data-aos="fade-up">
                  Klangheilungs-Sitzungen: Tauche ein in die heilenden
                  Schwingungen des Klangs mit speziellen Sitzungen, die
                  Entspannung und Ausgeglichenheit fördern.Bitte beachte, dass
                  die Verfügbarkeit und die Preise für diese optionalen
                  Aktivitäten und Dienstleistungen variieren können.
                </p>
                <p data-aos="fade-up">
                  Für weitere Informationen, einschließlich der genauen Preise
                  und Buchungen, besuche bitte unsere Website turiyayoga.de oder
                  kontaktiere unser freundliches Team. Wir helfen dir gerne
                  dabei, dein Retreat-Erlebnis individuell zu gestalten und
                  sicherzustellen, dass du eine wirklich unvergessliche Zeit in
                  Goa verbringst.Zusätzlich zu den Angeboten im Turiya Yoga
                  Retreat freuen wir uns, dir mitteilen zu können, dass du die
                  Möglichkeit hast, das pulsierende Nachtleben Goas zu erleben.
                  Nur eine 20-minütige Taxifahrt entfernt, kannst du in die
                  entspannten Goa-Partys und energiegeladenen Goa-Trance-Partys
                  eintauchen.Goa ist bekannt für seine lebendige und vielfältige
                  Partyszene und bietet eine Reihe von Möglichkeiten für
                  unterschiedliche Geschmäcker und Vorlieben.
                </p>
                <p data-aos="fade-up">
                  Egal, ob du einen entspannten Abend mit Live-Musik,
                  kulturellen Darbietungen und chilligen Vibes oder eine
                  elektrisierende Nacht mit psychedelischer Trance-Musik und
                  Tanzen suchst, Goa hat alles zu bieten.Während deines
                  Aufenthalts im Turiya Yoga Retreat empfehlen wir dir, die nahe
                  gelegenen Party-Hotspots zu erkunden und das pulsierende
                  Nachtleben von Goa zu genießen. Tanze die Nacht durch, triff
                  dich mit anderen Reisenden und schaffe unvergessliche
                  Erinnerungen in der lebhaften Atmosphäre der Goa-Partys.
                </p>
                <p data-aos="fade-up">
                  Bitte beachte, dass die Organisation und Verfügbarkeit dieser
                  Partys je nach lokaler Szene und Veranstaltungen variieren
                  kann. Unser freundliches Team versorgt dich gerne mit
                  aktuellen Informationen, Empfehlungen und hilft dir bei der
                  Planung deiner Abendabenteuer.Während du im Turiya Yoga
                  Retreat Ruhe und Erholung genießt, solltest du dir nicht die
                  Gelegenheit entgehen lassen, die energiegeladenen und
                  temperamentvollen Partys in Goa zu erleben, die nur eine kurze
                  Taxifahrt entfernt sind. Tauche ein in das pulsierende
                  Nachtleben, tanze zu ansteckenden Beats und genieße die
                  entspannte und freie Atmosphäre, für die Goa weltweit berühmt
                  ist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <NewsShelter/>
    </>
  );
};

export default index;
