import React, { useState } from "react";
import "./hybrid.scss";
import banner from "../../assets/images/senior_yoga/banner.webp";
import SimpleBanner from "../banner/SimpleBanner";
import BannerGlobalWrapper from "../BannerGlobalWrapper";
import Contact from "../Contact";
import NewsShelter from "../NewsShelter";
import Testimonial from "../Testimonial";
import CheckWrapper from "../CheckWrapper";
import ParralaxWrapper from "../ParralaxWrapper";
import dilogImg from "../../assets/images/high-important.png";

const Index = () => {
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [activeIndex3, setActiveIndex3] = useState(null);
  const [activeIndex4, setActiveIndex4] = useState(null);
  const [activeIndex5, setActiveIndex5] = useState(null);
  const [activeIndex6, setActiveIndex6] = useState(null);
  const [activeIndex7, setActiveIndex7] = useState(null);

  const handleToggle = (section, index) => {
    if (section === 1) {
      setActiveIndex1(activeIndex1 === index ? null : index);
    } else if (section === 2) {
      setActiveIndex2(activeIndex2 === index ? null : index);
    }
    if (section === 3) {
      setActiveIndex3(activeIndex3 === index ? null : index);
    } else if (section === 4) {
      setActiveIndex4(activeIndex4 === index ? null : index);
    } else if (section === 5) {
      setActiveIndex5(activeIndex5 === index ? null : index);
    } else if (section === 6) {
      setActiveIndex6(activeIndex6 === index ? null : index);
    } else if (section === 7) {
      setActiveIndex6(activeIndex7 === index ? null : index);
    }
  };

  const faqItems1 = [
    {
      question:
        "Bekomme ich ein Zertifikat? Welches?",
      answer: [
          "Wenn du NICHT an der 500-stündigen Yogalehrer-Ausbildung teilnimmst:",
          "Nach erfolgreichem Abschluss dieses Kurses erhältst du ein Senior Yoga Ausbildung Zertifikat. Wir sind eine von der Yoga Alliance zertifizierte Schule und dieser Kurs wird auch im Rahmen unserer 500HYogalehrer-Ausbildung angeboten.",
        "Wenn du diesen Kurs im Rahmen Ihrer 500H Yogalehrer Ausbildung belegst:",
          "Zu diesem Zeitpunkt hättest du bereits nach Modul 1 und Modul 2 das zertifizierte 200-stündige Yogalehrer-Ausbildung Yoga Alliance-Diplom erworben. Danach bist du berechtigt, 500 RYT zu werden, indem du die 300-stündige Yogalehrer-Ausbildung absolvierst, indem du Modul 3, Modul 4 und Modul 5 abschließt.",
        

          "Der Seniorenkurs ist Teil des Kursangebots der Modul5 -Optionen und absolviert 60 Stunden der verbleibenden 100 Stunden. Wenn du deine verbleibenden 100 Stunden, von denen der Senior Yoga Kurs 60% abschließt, erfolgreich beendet hast, erhältst du dein 300-Stunden-Zertifikat und kannst dich in der Yoga Alliance als RYT 500 registrieren.",
          "Denke daran, dass du bei Turiya Yoga einen Brief anfordern kannst, indem du angeben kannst, was du genau gelernt hast. Wir helfen dir gerne weiter!"
      ],
    },
  ];

  const faqItems2 = [
    {
      question: "Was sind die Teilnahmevoraussetzungen?",
      answer: [
        "Teilnahmevoraussetzungen: Mindestalter 18 Jahre. Es wird empfohlen, mindestens das Modul 1 aus unserer Yogalehrer-Ausbildung zu nehmen. Wenn du über ein anerkanntes Zertifikat für eine 200-stündige Yogalehrer-Ausbildung verfügst, sollte dies ausreichen, um das Programm vollständig in Anspruch zu nehmen.",
        "Die Yogalehrer Ausbildung ist für alle körperlichen Konditionsstufen geeignet. Wenn du dich wegen einer besonderen Situation unsicher fühlst, wende dich einfach an uns!",
      ],
    },
  ];

  const faqItems3 = [
    {
      question: "Was werde ich in der Senior Yoga Lehrer Ausbildung lernen?",
      answer: [
        "Du lernst die wesentlichen Bestandteile eines Senior Yoga Kurses kennen und wirst dessen Unterschiede zu einer normalen gemischten Klassenumgebung verstehen. Du wirst auch die Grundlagen der Unterrichtsplanung für Senioren-Yoga verstehen, dabei auf Bewegungseinschränkungen achten und eine gekonnte Methode zum sicheren und effektiven Anpassen von Yogapraktiken üben und integrieren. Auf diese Weise lernen und trainieren wir, wie man verschiedene Requisiten verwendet, um eine erfüllende Senior Yoga-Praxis zu unterstützen - unter Verwendung von Stühlen, Polstern, Blöcken, Gurten usw.",
          "Neben dem Training in einer bestimmten Methode und dem Erlernen des Umgangs mit bestimmten Ressourcen ist es wichtig, die Bedingungen im Auge zu behalten, die möglicherweise nicht so direkt sichtbar sind, aber für den Umgang mit dieser bestimmten Gruppe von entscheidender Bedeutung sind. Mit anderen Worten, unsere Theoriestunden helfen den Schülern, die Grundlagen der Anatomie und Physiologie des Alterns zu verstehen und die körperlichen und geistigen Veränderungen zu erkennen. Es werden daher wichtige Informationen zu den häufigsten Gesundheitsproblemen im Zusammenhang mit dem Altern und der Wechselwirkung von Yoga-Praktiken mit diesen behandelt - Herzproblemen, Osteoporose, Arthritis usw. Indikationen, Kontraindikationen und Vorsichtsmaßnahmen sind daher ein sehr wichtiger Bestandteil dieses Trainings.",
          "Als Teil nicht nur der traditionellen Perspektive, sondern auch der medizinisch fundierten Evidenz dürfen wir nicht vernachlässigen, die Hilfe subtilerer Praktiken wie Pranayama und Meditation zur Aufrechterhaltung eines allgemeinen Wohlbefindens in das Programm aufzunehmen.",
        "Es ist sehr wichtig, hier zu erwähnen, dass dieser Kurs wunderbar zu der soliden Basis passt, die unsere Yogalehrer-Ausbildender in den Modulen 1, 2, 3 und 4 abdecken sollen. Unsere Anatomie- und Physiologie-Sitzungen zu diesen Modulen befassten sich ausführlich mit der Vorgehensweise, wie gemäß unserer Körperanatomie Yoga sicher praktiziert wird und wie vielfältige Yoga-Praktiken das gute Funktionieren unserer verschiedenen inneren Systeme unterstützen (zusätzliche Anmerkung zum Nervensystem, hier!). Der Teilnehmer wird an dieser Stelle auch eine ziemliche Vertrautheit mit dem Umgang mit Hilfsmitteln entwickelt haben, mit einer sichereren Ausrichtung (und Ausrichtungsoptionen!) und die Angst, die Schüler zu berühren, überwunden haben. Schließlich geht es bei der praktischen Unterstützung nicht nur darum, die Körperhaltung zu intensivieren, sondern auch Verletzungen vorzubeugen, die Teilnehmer zu unterstützen, und es dem Körper des Teilnehmers zu ermöglichen, das Beste aus dem Niveau und dem Zustand herauszuholen, in dem er sich im Moment befindet."
      ],
    },
  ];

  const faqItems4 = [
    {
      question:
        "Wie sieht mein Tag aus?",
      answer: [
        "Unser Kurs dauert 60 Stunden in 6 Tagen, daher absolvieren wir ungefähr 10 Stunden pro Tag gemäß den Standards der Yoga-Allianz. Von diesen sind ungefähr 4 Stunden pro Tag für Yogapraxis geplant. Keine Sorge, der Kurs ist durchdacht, damit euer Körper nicht überfordert wird und ein großer Teil der Senior-Yoga-Praxis nicht anstrengend wird - obwohl wir mit herausfordernden und straffenden Muskeln arbeiten können. Denkt daran: Ein Kurs in Yoga Alliance dauert 60 Minuten. Innerhalb dieses Kurses dürfen wir 10 Minuten Pause einlegen!",
      ],
    },
  ];

  const faqItems5 = [
    {
      question: "Ablauf Beispiel",
      answer: [
          "Beispiel für einen täglichen Fahrplan",
          "8h - 10h Yogapraxis (Asana, Pranayama und / oder Meditation)",
          "30 Minuten Pause",
          "10.30 - 12.30 Uhr: Theorie (Anatomie & Physiologie)",
          "1h Mittagspause",
          "13.30–15.30 Uhr Training: Techniken und Hilfsmittel",
          "15h30 - 16h30 Unterrichtsmethodik",
          "30 Minuten Pause",
          "17h-19h Übung"
      ],
    },
  ];

  const faqItems6 = [
    {
      question: "Wie sieht mein Tag aus?",
      answer: [
        "Unser Tagesablauf ist in allen unseren Yogalehrerausbildungen recht ähnlich. Er basiert auf jahrelanger Erfahrung und konzentriert sich darauf, die Wissensaufnahme und -speicherung zu maximieren und gleichzeitig deine Zeit achtsam zu nutzen.",
        "Du magst deinen Yogalehrer-Ausbildungstag als lang empfinden, aber er ist mit Sicherheit erfüllend und was notwendig ist, um die höchsten Standards zu halten und gleichzeitig die Anforderungen der Yoga Alliance Standards zu respektieren. Obwohl die Reihenfolge der Klassen variiert, versuchen wir, die tägliche Yogapraxis am Morgen und am Ende des Tages zu halten. Das bedeutet, dass wir in der Regel 4 Stunden am Tag Yoga üben. Es ist wichtig zu erwähnen, dass der Kurs bereits darauf ausgelegt ist, den Körper nicht zu überfordern und natürlich auch, um die Reise und die Grenzen jedes Einzelnen zu respektieren. Das ist ohnehin essentiell für Yoga",
        "Beispiel eines täglichen Stundenplans",
      ],
    },
  ];

  const faqItems7 = [
    {
      question: "Ablauf Beispiel",
      answer: [
        "7h - 9h Yogapraxis (Asana, Pranayama und/oder Meditation)",
        "Snack-Pause",
        "9h30 - 11h00: Philosophie/ Geschichte",
        "11h-12h30 Unterrichtsmethodik",
        "12h30-13h30 - Mittagessen",
        "13h30 - 15h00 Ausrichtung und Hilfsmittel",
        "15h-16h30 Philosophie/ Geschichte",
        "16h30 - 17h Snack Pause",
        "17h - 18h00 Unterrichtsmethodik",
        "18h - 20h Asana, Pranayama und/oder Meditation",
        "Frage- und Antwortzeit finden in der Regel 2 mal innerhalb des Kurses statt",
        "*Der Schüler absolviert täglich mindestens 11 Yoga Alliance Stunden (50min/Stunde) in unserer Yogalehrerausbildung. Es gibt ein paar Tage, an denen die Ausbildung 12 Stunden umfasst. Nach UE-Standards (45min/Stunde) absolviert der Schüler mehr als 12 Stunden. Von diesen Stunden sind etwa 4 Stunden pro Tag Yogapraxis.",
      ],
    },
  ];

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
  };

  return (
    <>
      {/* <SimpleBanner
        banner={banner}
        heading="500H Yogalehrer Ausbildung
"
        para="Yin Yoga und Senioren Yoga jeweils über 6 Intensivtage angeboten. Das bedeutet auch, dass du zwei kleinere Kurse kombinieren wirst, um die verbleibenden 100 Stunden zu absolvieren. (Modul5)"
        buttonTxt="null"
      /> */}

<section className="global_wrapper hybride_wrapper">
  <div className="container">
    <div className="hybride_wrapper__content">
      <p>Willkommen bei Turiya Yoga – deiner Adresse für eine transformative 200-Stunden-Yogalehrerausbildung·
        Unsere Ausbildung ist perfekt für diejenigen, die ihre Yoga-Praxis vertiefen und gleichzeitig die
        Fähigkeiten und das Wissen erwerben möchten, um andere sicher und effektiv zu unterrichten·
      </p>
      <p>
        Diese umfassende Ausbildung findet an acht Wochenenden über einen Zeitraum von sechs Monaten statt
        und bietet eine flexible, hybride Teilnahmeoption – entweder vor Ort an einem unserer wunderschönen
        Standorte oder bequem von zu Hause aus über Live-Video·</p>
      <p>Unser Kurs umfasst die Module 1 und 2 der Yoga-Ausbildung und ist so konzipiert, dass er sowohl für
        Anfänger als auch für erfahrene Yogis geeignet ist· Wir bieten eine tiefgehende und praxisnahe
        Ausbildung in den Bereichen Hatha Yoga, Ansätze der Therapie, Hatha Flow und Vinyasa Flow·
        Zusätzlich integrieren wir Ansätze der Yogatherapie, die dir helfen, spezifische gesundheitliche
        Bedürfnisse und Beschwerden zu adressieren·</p>
      <h3>Warum die 200-Stunden-Yogalehrerausbildung bei Turiya Yoga?</h3>
      <p>- Flexibilität und Komfort: Unsere hybride Ausbildungsstruktur ermöglicht es dir, entweder vor Ort an
        einem unserer schönen Standorte oder online über Live-Video teilzunehmen· So kannst du die
        Ausbildung flexibel in deinen Alltag integrieren·</p>
      <p>- Erfahrene Lehrer: Unsere Ausbilder sind hochqualifiziert und bringen jahrelange Erfahrung in der
        Yoga-Praxis und im Unterrichten mit· Sie unterstützen dich individuell auf deinem Weg zum
        Yogalehrer·</p>
      <p>- Umfassende Ausbildung: Die Ausbildung deckt alle wichtigen Aspekte des Yoga ab – von der
        Philosophie und Geschichte über die Praxis und Anatomie bis hin zu spezifischen Techniken der
        Ansätze der Therapie und des Flow-Yoga·</p>
      <p>- Ansätze der Yogatherapie: Lerne, wie du Yoga als therapeutisches Werkzeug einsetzen kannst, um
        häufige gesundheitliche Beschwerden zu lindern und das allgemeine Wohlbefinden zu verbessern·</p>
      <p>- International anerkannte Zertifizierung: Nach Abschluss der Ausbildung erhältst du ein Zertifikat,
        das von der Yoga Alliance anerkannt ist· Dies ermöglicht es dir, weltweit als Yogalehrer zu
        arbeiten·</p>
    </div>
    <div className="hybride_programm">
      <h3>Überblick über das Programm</h3>
      <span>- Dauer: 6 Monate</span>
      <p>- Modul 1: Hatha Yoga und Ansätze der Therapie (100 Stunden)</p>
      <p>- Modul 2: Hatha Flow und Vinyasa Flow (100 Stunden)</p>
      <p>Modul 1: Hatha Yoga und Ansätze der Therapie (100 Stunden)</p>
      <p>Wochenende 1: Einführung und Grundlagen (12,5 Stunden)</p>
      <p>- Termine: 1·-2· Februar 2025</p>
    </div>
  </div>
</section>




  

  

      <Contact />
      <NewsShelter />
    </>
  );
};

export default Index;
