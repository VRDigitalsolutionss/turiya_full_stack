import React, { useState, useEffect } from "react";
import "./yoga_teacher.scss";
import "./training.scss";
import img1 from "../../assets/images/gallery-images/img_1.webp";
import img2 from "../../assets/images/gallery-images/img_2.webp";
import img3 from "../../assets/images/gallery-images/img_3.webp";
import img4 from "../../assets/images/gallery-images/img_4.webp";
import img5 from "../../assets/images/gallery-images/img_5.webp";
import img6 from "../../assets/images/gallery-images/img_6.webp";
import img7 from "../../assets/images/gallery-images/img_7.webp";
import banner from "../../assets/images/yaya_img/banner.webp";
import turiaImg1 from "../../assets/images/turiya_yoga_home_manu_akash.webp";
import turiaImg2 from "../../assets/images/turiya_yoga_yogalehrer_ausbildung_block.webp";
import turiaImg3 from "../../assets/images/turiya_yoga_yogalehrer_ausbildung.webp";
import logo1 from "../../assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys200-150x150.webp";
import logo2 from "../../assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys300-150x150.webp";
import logo3 from "../../assets/images/turiya_yoga_yogalehrer_ausbildungen_aya_rys500-150x150.webp";
import NewsShelter from "../NewsShelter";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import SimpleBanner from "../banner/SimpleBanner";
import dilogImg from "../../assets/images/high-important.png";
import thumbImg1 from "../../assets/images/mallorca_thumb.webp";
import thumbImg2 from "../../assets/images/sampurna_thumb.webp";
import thumbImg3 from "../../assets/images/himachal_thumb.webp";
import thumbImg4 from "../../assets/images/goa_thumb.webp";
import Testimonial from "../Testimonial";
import CheckWrapper from "../CheckWrapper";
import SimpleBanner3 from "../banner/SimpleBanner3";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";

const faqItems = [
  {
    question:
      "Welches Zertifikat bekomme ich? Kann ich nach der 200h Yogalehrer Ausbildung unterrichten?",
    answer: [
      "Du erhältst ein Turiya Yoga Zertifikat, das von der Yoga Alliance zertifiziert und anerkannt ist. Mit diesem Zertifikat kannst du dich sicher in dieser weltweiten Community von Yogalehrern registrieren und natürlich Yoga unterrichten. Das 200-Stunden-Zertifikat ist international anerkannt und eine bekannte Voraussetzung für den Yoga-Unterricht in Studios und Fitnessstudios.",
      "Es ist wichtig zu beachten, dass die Teilnehmer gebeten werden, am Unterricht teilzunehmen, Engagement zu zeigen und die wichtigsten Themen zu behandeln. Wir sind nicht Teil einer unbewussten Gemeinschaft, die heutzutage sehr präsent ist auf dem Markt und einfach Zertifikate verteilt. Auf diese Weise können wir unsere höchsten Standards einhalten. Andererseits ist es wichtig zu wissen, dass die Teilnehmer in dieser Yogalehrer Ausbildung keine traditionellen Prüfungen ablegen, sondern ständig von den Hauptlehrern unterstützt, bewertet und angeleitet werden. So einfach ist das: Wenn du aufrichtig interessiert bist, an Kursen fokussiert teilzunehmen dann, bist du genau richtig bei uns.",
      "Wenn du nicht nur deine Kenntnisse, Erfahrungen und Möglichkeiten erweitern möchtest, kannst du die Reise des 500-stündigen Yogalehrer-Ausbildungskurses mit Modul 3, Modul 4 und Modul 5 weiter studieren und abschließen. Weitere 300 Stunden, die es dir ermöglichen, zusätzlich zu deiner damals bestehenden 200-stündigen Yogalehrer-Ausbildung Yoga Alliance als 500RYT zu abonnieren. Ein großer praktischer Vorteil eines 500-Stunden-Lehrers in Deutschland ist, dass deine Teilnehmer einen Teil ihres Unterrichts bei dir belegen können, der von der Krankenkasse finanziert wird.",
    ],
  },
  {
    question: "Was sind die Teilnahmevoraussetzungen?",
    answer: [
      "Teilnahmevorausetzungen: Mindestalter 18 Jahre",
      "Die Yogalehrer Ausbildung ist für alle körperlichen Konditionsstufen geeignet. Wenn Sie sich wegen einer besonderen Situation unsicher fühlen, kontaktieren Sie uns einfach.",
    ],
  },
  {
    question: "Welche Yoga-Stile lerne und übe ich im Kurs?",
    answer: [
      "Die 200H Yogalehrer Ausbildung von Turiya Yoga widmet sich den Stilen des Hatha Yoga (traditionell und modern, mit und ohne Verwendung von Requisiten), Vinyasa und gibt gleichzeitig einen kurzen Einblick in die Tradition des Ashtanga Vinyasa Yoga. Nachdem die Teilnehmer die 200h Yogalehrer Ausbildung erfolgreich abgeschlossen haben, sind sie mehr als bereit, Hatha und Vinyasa zu kombinieren und es geschickt zu unterrichten. Werfen wir einen Blick auf diese Traditionen und was du von ihr erwarten kannst, da die Terminologie heutzutage aufgrund von Informationsmangel und anderen, leider auch Marketingstrategien, fließend geworden ist:",
      "Hatha Yoga ist die Mutter aller Yoga-übungen, die den Körper und insbesondere den Atem beeinflussen. Eine typische Praxis von Hatha ist eine langsame Praxis, die traditionelle Körperhaltungen (Asana), Atmungsbewusstsein Pranayama (Beibehaltung der Atemtechniken), Meditation und in einigen Übungslinien Mantras kombiniert. In unserer heutigen Gesellschaft konzentrieren sich die Kurse jedoch oft nur auf die Körperhaltung. Der Stil verwendet auch Reinigungstechniken (Kriyas), gelegentlichen Gebrauch von Bandhas (Muskelmanipulationen, die als Energieblockaden angesehen werden) und spezielle Körper- und Atemmanipulationen, sogenannte Mudras.",
      "Ashtanga Vinyasa Yoga und seine Nachkommen Vinyasa sind moderne, rasante Übungen, bei denen die Teilnehmer zwischen Körperhaltungen wechseln, während Atem und manchmal auch Drishti (Blick) in festgelegten Abfolgen synchronisiert werden. Der Ashtanga-Stil zählt Pattabhi Jois und sein Guru Krishnamacharya als die Gründer und hat Asana-Übungssequenzen festgelegt, während Vinyasa Flow eine westliche Entwicklung ist, die dem Lehrer die Möglichkeit gibt, verschiedene Lehrsequenzen zu erstellen.",
      "Ein weiterer Schüler von Krishnamacharya und ein weiteres Juwel des modernen Yoga war BKS Iyengar. Iyengar entwickelte einen Hatha Yoga-Stil, der häufig Hilfsmittel verwendet und als Iyengar-Stil bezeichnet wird. Der Stil ist in der therapeutischen Yoga-Nische bekannt und hat weitere westliche Lehrer dazu inspiriert, andere inspirierte Traditionen wie Anusara Yoga zu entwickeln.",
      "Unser Programm deckt jedoch nicht den Iyengar-Stil ab, der sich offen auf die millimetrische Ausrichtung des Praktikers stützt und einen anderen Yogalehrer-Ausbildungsstil verlangt. Unsere Schulung behandelt die Verwendung von Requisiten und deren Verbindung zum Yoga als unterstützende Praxis für Wohlbefinden und Gesundheit. Unsere Yogalehrer Ausbildung zielt unter anderem darauf ab, ein tieferes Erleben der Körperhaltungen zu fördern und die Teilnehmer in unterschiedlichen Ausrichtungen und Perspektiven der Asana-Praxis zu erleuchten.",
    ],
  },
  {
    question:
      "Was wird in der 200H Yogalehrer Ausbildung praktisch in Bezug auf Techniken und Training in der Yoga-Praxis behandelt?",
    answer: [
      "Wir bieten dir viel Gelegenheit zum Üben in unserer Yogalehrerausbildung:",
      "• Die tägliche Yoga-Praxis beinhaltet Asana, Pranayama und Meditation.",
      "• Du erhälst Anweisungen und eine Anpassung der Yoga-Haltung (Asana), um die Techniken der Übung in unseren frühen Morgen- und Nachmittagspraktiken besser zu verstehen. Manchmal kann eine dieser Praktiken durch eine Lehrphase der Schüler ersetzt werden.",
      "• Ausrichtung und Assistenz (Hands-on & Anwendung der Hilfsmittel) werden in speziell ausgerichteten Kursen unterrichtet, die von den Vormittags- und Nachmittagsübungen getrennt sind. Es ist wichtig, sich hier Zeit zu nehmen. Es ist durchaus üblich, dass Yogalehrer-Trainings dies nicht richtig abdecken, aber es ist heutzutage für modernes Yoga unerlässlich ist.",
      "• Während des Trainings werden wichtige Kriyas (Reinigungstechniken), Bandhas (Energieblockaden) und wichtige Mantras in Sanskrit eingeführt und geübt. Kein Teilnehmer wird jedoch gezwungen sein, Praktiken dieser Art zu absolvieren, wenn sie ihm Unwohlsein bereiten oder zu fremdartig sind. Es ist wichtig, sich vor Augen zu halten, was Teil der Tradition ist, insbesondere die Praktiken, die noch heute in Indien mit der Yogatherapie verbunden sind.",
      "• Die Techniken, das Training und das Üben decken die Bedürfnisse eines Hatha und Vinyasa Yoga Lehrer ab. Nachdem die Teilnehmer die 200h Yogalehrer Ausbildung erfolgreich abgeschlossen haben, sind sie mehr als bereit, Hatha und Vinyasa zu kombinieren und es geschickt zu unterrichten.",
      "• Das Training beinhaltet auch speziell entwickelte Kurse mit einer Vielzahl von Requisiten, um dir eine Grundlage für wichtige Arten der Asana-Ausrichtung zu geben.",
    ],
  },
  {
    question: "Was werde ich über Anatomie und Physiologie lernen?",
    answer: [
      "Heutzutage ist ein Yogalehrer in der Regel hauptsächlich für die Führung der Haltungspraxis verantwortlich und sollte auch dafür verantwortlich sein, die Fähigkeiten seiner Teilnehmer zu fördern ohne dass jene dabei einen Schaden erleiden. Aus diesem Grund konzentriert sich unsere 200H Yogalehrer Ausbildung auf die Anatomie & Physiologie & auf funktionale Weise -, die hauptsächlich hinter dem sicheren Üben von Asanas steht. Das Skelettsystem, das Muskelsystem, die neuromuskulären Interaktionen und das Studieren der Gelenke und Bewegungen (Rückbeugen, Drehhaltungen, Hüftöffner, Vorbeugen, Umkehrhaltungen) sind wichtige Teile unseres Programms.",
    ],
  },
  {
    question: "Was werde ich über Yoga-Geschichte und Philosophie lernen?",
    answer: [
      "• Die Geschichte des Yoga: Dies beinhaltet den kulturellen Hintergrund des Yoga sowie einen Überblick darüber, wie es sich im Laufe der Zeit in Schlüsselmomenten der Geschichte entwickelt hat. Die Klassen präsentieren indische traditionelle Perspektive zusammen mit wissenschaftlicher Sicht.",
      "• Einführung in die Veden, Mahabharata (das indische Epos) und die Upanisaden in ihrer Beziehung zum Yoga;",
      "• Einblick in die Samkhya-Philosophie, die den Hintergrund für die Schriften bildet, die für Yoga noch heute von entscheidender Bedeutung sind, wie die Yoga-Sutras.",
      "• Die Yoga Sutras! Wir nehmen uns viel Zeit, um diese Schrift zu verstehen.",
      "• Einblick in das Tantra, die einen wichtigen Hintergrund für die Hatha Yoga Schriften bildet.",
      "• und natürlich, Hatha Yoga als Yoga Pfad (Hathapradipka).",
      "Es ist wichtig zu betonen, dass wir dir eine solide Wissensgrundlage und zusätzliche Themen bieten, von denen aus du dein eigenes Wachstum fortsetzen und in Zukunft dich weiterbilden kannst. Wenn du daran interessiert bist, dieses Wissen zu vertiefen, heißen wir dich in unseren anderen Yogalehrer-Ausbildungsmodulen (Modul 3, Modul 4 und Modul 5) willkommen.",
    ],
  },
  {
    question:
      "Was ist mit der Entwicklung meiner Qualitäten als Yogalehrer? Habe ich Erfahrung im Unterrichten?",
    answer: [
      "Unsere Yogalehrer Ausbildung hat einen modernen Ansatz, der dir viel Übungszeit gibt und du von anderen Schülern und den Hauptlehrern konstruktives Feedback bekommst, die dir helfen, deine Fähigkeiten zu verbessern. Die tägliche Lehrpraxis und die gemeinsamen Übungsmöglichkeiten bieten dir die Möglichkeit, deine Lehrfähigkeiten auszubauen, deine Selbstsicherheit zu stärken und dich auf das moderne Leben vorzubereiten, ohne dabei den traditionellen Hintergrund des Yoga zu verlieren.",
    ],
  },
  {
    question: "Wie viele Teilnehmer gibt es in der Yogalehrer Ausbildung?",
    answer: [
      "Um den Studenten eine qualitativ hochwertige Ausbildung zu bieten und individuelle Aufmerksamkeit zu gewährleisten, achten wir auf eine begrenzte Anzahl von Teilnehmern. Die Anzahl beträgt maximal 12 Teilnehmer.",
    ],
  },
  {
    question: "Wo findet die Yogalehrer Ausbildung statt?",
    answer: [
      "Wir befinden uns in Deutschland in der Umgebung von Düsseldorf und Köln. Wenn du Unterstützung für die Anreise benötigst, stehen wir gerne zur Verfügung, um dir bei der Planung zu helfen.",
    ],
  },
];

// =============================================================

const faqItems1 = [
  {
    question:
      "Welches Zertifikat bekomme ich? Kann ich nach der 200h Yogalehrer Ausbildung unterrichten?",
    answer: [
      "Du erhältst ein Turiya Yoga Zertifikat, das von der Yoga Alliance zertifiziert und anerkannt ist. Mit diesem Zertifikat kannst du dich sicher in dieser weltweiten Community von Yogalehrern registrieren und natürlich Yoga unterrichten. Das 200-Stunden-Zertifikat ist international anerkannt und eine bekannte Voraussetzung für den Yoga-Unterricht in Studios und Fitnessstudios.",
      "Es ist wichtig zu beachten, dass die Teilnehmer gebeten werden, am Unterricht teilzunehmen, Engagement zu zeigen und die wichtigsten Themen zu behandeln. Wir sind nicht Teil einer unbewussten Gemeinschaft, die heutzutage sehr präsent ist auf dem Markt und einfach Zertifikate verteilt. Auf diese Weise können wir unsere höchsten Standards einhalten. Andererseits ist es wichtig zu wissen, dass die Teilnehmer in dieser Yogalehrer Ausbildung keine traditionellen Prüfungen ablegen, sondern ständig von den Hauptlehrern unterstützt, bewertet und angeleitet werden. So einfach ist das: Wenn du aufrichtig interessiert bist, an Kursen fokussiert teilzunehmen dann, bist du genau richtig bei uns.",
      "Wenn du nicht nur deine Kenntnisse, Erfahrungen und Möglichkeiten erweitern möchtest, kannst du die Reise des 500-stündigen Yogalehrer-Ausbildungskurses mit Modul 3, Modul 4 und Modul 5 weiter studieren und abschließen. Weitere 300 Stunden, die es dir ermöglichen, zusätzlich zu deiner damals bestehenden 200-stündigen Yogalehrer-Ausbildung Yoga Alliance als 500RYT zu abonnieren. Ein großer praktischer Vorteil eines 500-Stunden-Lehrers in Deutschland ist, dass deine Teilnehmer einen Teil ihres Unterrichts bei dir belegen können, der von der Krankenkasse finanziert wird.",
    ],
  },
];

const faqItems2 = [
  {
    question: "Was sind die Teilnahmevoraussetzungen?",
    answer: [
      "Teilnahmevorausetzungen: Mindestalter 18 Jahre",
      "Die Yogalehrer Ausbildung ist für alle körperlichen Konditionsstufen geeignet. Wenn Sie sich wegen einer besonderen Situation unsicher fühlen, kontaktieren Sie uns einfach.",
    ],
  },
];

const faqItems3 = [
  {
    question: "Welche Yoga-Stile lerne und übe ich im Kurs?",
    answer: [
      "Die 200H Yogalehrer Ausbildung von Turiya Yoga widmet sich den Stilen des Hatha Yoga (traditionell und modern, mit und ohne Verwendung von Requisiten), Vinyasa und gibt gleichzeitig einen kurzen Einblick in die Tradition des Ashtanga Vinyasa Yoga. Nachdem die Teilnehmer die 200h Yogalehrer Ausbildung erfolgreich abgeschlossen haben, sind sie mehr als bereit, Hatha und Vinyasa zu kombinieren und es geschickt zu unterrichten. Werfen wir einen Blick auf diese Traditionen und was du von ihr erwarten kannst, da die Terminologie heutzutage aufgrund von Informationsmangel und anderen, leider auch Marketingstrategien, fließend geworden ist:",
      "Hatha Yoga ist die Mutter aller Yoga-übungen, die den Körper und insbesondere den Atem beeinflussen. Eine typische Praxis von Hatha ist eine langsame Praxis, die traditionelle Körperhaltungen (Asana), Atmungsbewusstsein Pranayama (Beibehaltung der Atemtechniken), Meditation und in einigen Übungslinien Mantras kombiniert. In unserer heutigen Gesellschaft konzentrieren sich die Kurse jedoch oft nur auf die Körperhaltung. Der Stil verwendet auch Reinigungstechniken (Kriyas), gelegentlichen Gebrauch von Bandhas (Muskelmanipulationen, die als Energieblockaden angesehen werden) und spezielle Körper- und Atemmanipulationen, sogenannte Mudras.",
      "Ashtanga Vinyasa Yoga und seine Nachkommen Vinyasa sind moderne, rasante Übungen, bei denen die Teilnehmer zwischen Körperhaltungen wechseln, während Atem und manchmal auch Drishti (Blick) in festgelegten Abfolgen synchronisiert werden. Der Ashtanga-Stil zählt Pattabhi Jois und sein Guru Krishnamacharya als die Gründer und hat Asana-Übungssequenzen festgelegt, während Vinyasa Flow eine westliche Entwicklung ist, die dem Lehrer die Möglichkeit gibt, verschiedene Lehrsequenzen zu erstellen.",
      "Ein weiterer Schüler von Krishnamacharya und ein weiteres Juwel des modernen Yoga war BKS Iyengar. Iyengar entwickelte einen Hatha Yoga-Stil, der häufig Hilfsmittel verwendet und als Iyengar-Stil bezeichnet wird. Der Stil ist in der therapeutischen Yoga-Nische bekannt und hat weitere westliche Lehrer dazu inspiriert, andere inspirierte Traditionen wie Anusara Yoga zu entwickeln.",
      "Unser Programm deckt jedoch nicht den Iyengar-Stil ab, der sich offen auf die millimetrische Ausrichtung des Praktikers stützt und einen anderen Yogalehrer-Ausbildungsstil verlangt. Unsere Schulung behandelt die Verwendung von Requisiten und deren Verbindung zum Yoga als unterstützende Praxis für Wohlbefinden und Gesundheit. Unsere Yogalehrer Ausbildung zielt unter anderem darauf ab, ein tieferes Erleben der Körperhaltungen zu fördern und die Teilnehmer in unterschiedlichen Ausrichtungen und Perspektiven der Asana-Praxis zu erleuchten.",
    ],
  },
];

const faqItems4 = [
  {
    question:
      "Was wird in der 200H Yogalehrer Ausbildung praktisch in Bezug auf Techniken und Training in der Yoga-Praxis behandelt?",
    answer: [
      "Wir bieten dir viel Gelegenheit zum Üben in unserer Yogalehrerausbildung:",
      "• Die tägliche Yoga-Praxis beinhaltet Asana, Pranayama und Meditation.",
      "• Du erhälst Anweisungen und eine Anpassung der Yoga-Haltung (Asana), um die Techniken der Übung in unseren frühen Morgen- und Nachmittagspraktiken besser zu verstehen. Manchmal kann eine dieser Praktiken durch eine Lehrphase der Schüler ersetzt werden.",
      "• Ausrichtung und Assistenz (Hands-on & Anwendung der Hilfsmittel) werden in speziell ausgerichteten Kursen unterrichtet, die von den Vormittags- und Nachmittagsübungen getrennt sind. Es ist wichtig, sich hier Zeit zu nehmen. Es ist durchaus üblich, dass Yogalehrer-Trainings dies nicht richtig abdecken, aber es ist heutzutage für modernes Yoga unerlässlich ist.",
      "• Während des Trainings werden wichtige Kriyas (Reinigungstechniken), Bandhas (Energieblockaden) und wichtige Mantras in Sanskrit eingeführt und geübt. Kein Teilnehmer wird jedoch gezwungen sein, Praktiken dieser Art zu absolvieren, wenn sie ihm Unwohlsein bereiten oder zu fremdartig sind. Es ist wichtig, sich vor Augen zu halten, was Teil der Tradition ist, insbesondere die Praktiken, die noch heute in Indien mit der Yogatherapie verbunden sind.",
      "• Die Techniken, das Training und das Üben decken die Bedürfnisse eines Hatha und Vinyasa Yoga Lehrer ab. Nachdem die Teilnehmer die 200h Yogalehrer Ausbildung erfolgreich abgeschlossen haben, sind sie mehr als bereit, Hatha und Vinyasa zu kombinieren und es geschickt zu unterrichten.",
      "• Das Training beinhaltet auch speziell entwickelte Kurse mit einer Vielzahl von Requisiten, um dir eine Grundlage für wichtige Arten der Asana-Ausrichtung zu geben.",
    ],
  },
];

const faqItems5 = [
  {
    question: "Was werde ich über Anatomie und Physiologie lernen?",
    answer: [
      "Heutzutage ist ein Yogalehrer in der Regel hauptsächlich für die Führung der Haltungspraxis verantwortlich und sollte auch dafür verantwortlich sein, die Fähigkeiten seiner Teilnehmer zu fördern ohne dass jene dabei einen Schaden erleiden. Aus diesem Grund konzentriert sich unsere 200H Yogalehrer Ausbildung auf die Anatomie & Physiologie & auf funktionale Weise -, die hauptsächlich hinter dem sicheren Üben von Asanas steht. Das Skelettsystem, das Muskelsystem, die neuromuskulären Interaktionen und das Studieren der Gelenke und Bewegungen (Rückbeugen, Drehhaltungen, Hüftöffner, Vorbeugen, Umkehrhaltungen) sind wichtige Teile unseres Programms.",
    ],
  },
];

const faqItems6 = [
  {
    question: "Wie sieht mein Tag aus?",
    answer: [
      "Unser Kurs dauert 60 Stunden in 6 Tagen, daher absolvieren wir ungefähr 10 Stunden pro Tag gemäß den Standards der Yoga-Allianz. Von diesen sind ungefähr 4 Stunden pro Tag für Yogapraxis geplant. Keine Sorge, der Kurs ist durchdacht, damit euer Körper nicht überfordert wird und ein großer Teil der Senior-Yoga-Praxis nicht anstrengend wird - obwohl wir mit herausfordernden und straffenden Muskeln arbeiten können. Denkt daran: Ein Kurs in Yoga Alliance dauert 60 Minuten. Innerhalb dieses Kurses dürfen wir 10 Minuten Pause einlegen!",
      "Du magst deinen Yogalehrer-Ausbildungstag als lang empfinden, aber er ist mit Sicherheit erfüllend und was notwendig ist, um die höchsten Standards zu halten und gleichzeitig die Anforderungen der Yoga Alliance Standards zu respektieren. Obwohl die Reihenfolge der Klassen variiert, versuchen wir, die tägliche Yogapraxis am Morgen und am Ende des Tages zu halten. Das bedeutet, dass wir in der Regel 4 Stunden am Tag Yoga üben. Es ist wichtig zu erwähnen, dass der Kurs bereits darauf ausgelegt ist, den Körper nicht zu überfordern und natürlich auch, um die Reise und die Grenzen jedes Einzelnen zu respektieren. Das ist beim Yoga ohnehin essentiell.",
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

const Index = () => {
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
  }, []);

  console.log("earlyData", earlyData);

  const [bannerImg, setBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [maindata, setMainData] = useState();

  const fetchData = () => {
    axios
      .get(`${BASE_URL}/all_course_webpages/`)
      .then((response) => {
        console.log("response of all_course_webpages 2", response);

        if (response.status == 200) {
          const data = response.data.data[1];
          console.log("real data", response.data.data[1]);
          console.log("banner imggg", data.yogaTeamSlideImage);
          setMainData(response.data.data[1]);

          var imageUrlcustum =
            data && data.yogaTeamSlideImage
              ? `${BASE_URL_IMAGE}/images/coursewebpage/${data.yogaTeamSlideImage}`
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

  // const payload = {
  // `Yogalehrer Ausbildung  auf höchstem Niveau!`

  //   `<p>Turiya Yoga bietet eine 200-Stunden-Yogalehrerausbildung, die in einem 16-tägigen Intensivkurs für Teilnehmer aller körperlichen Fitnesslevel abgehalten wird. Dieser Kurs umfasst unsere Module 1 und 2 der Yoga-Ausbildung, jeweils ein 8-tägiger Intensivkurs. Bitte beachte, dass die Kursdauer je nach Standort variieren kann. Abhängig davon, ob der Kurs in Deutschland, Mallorca oder Indien stattfindet, kann die Dauer zwischen 16 und 21 Tagen liegen. .</p><p>In der Turiya Yoga Akademie schaffen wir eine unterstützende Umgebung, in der unsere erfahrenen Lehrer dich bei der Entwicklung der notwendigen Fähigkeiten eines Yogalehrers und den wichtigsten Techniken zum sicheren Unterrichten von Yoga unterstützen. Nach Abschluss unserer 200-Stunden-Yogalehrerausbildung hast du die Möglichkeit, ein international anerkannter Yogalehrer zu werden, der den Standards der Yoga Alliance entspricht.</p><p>Unsere 200-Stunden-Yogalehrerausbildung, wie alle Kurse der Turiya Yoga Akademie, folgt den höchsten Standards auf dem Markt. Wir verbinden uns mit der Yoga-Tradition und bieten gleichzeitig eine westliche, undogmatische Perspektive. Unsere erfahrenen und engagierten Lehrer begleiten dich auf deinem Weg, indem sie deine persönliche Entwicklung aufmerksam verfolgen. Es ist von Anfang an wichtig, dich zu unterstützen, damit du während deiner Ausbildung in den Modulen 3, 4 und 5 unserer Yogalehrer-Ausbildungsreise aufblühen kannst.</p><p>Gesamtbuchung | Blockausbildung M1 – M5 (500h): 7.390 € – AYA zertifiziert"</p>`                                         `
  // }

  // console.log("data loaded", maindata);

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
      setActiveIndex7(activeIndex7 === index ? null : index);
    }
  };

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img3,
    img4,
    img2,
    img1,
    img6,
  ];

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleImgDialog = (index) => {
    setCurrentIndex(index); // Set the clicked image index as current
    setIsOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false); // Hide the overlay
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to the next image
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ); // Move to the previous image
  };

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

  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the active state of the clicked FAQ box

  // const handleToggle = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  return (
    <>
      <section id="yoga_teacher">
        {/* cart-overlay */}

        <SimpleBanner3
          banner={maindata && bannerImg}
          heading={maindata && maindata.yogaTeamSliderHeading}
          para={maindata && maindata.yogaTeamSliderParagraph}
          videoLink={maindata && maindata.yogaTeamSliderVideoLink}
          buttonTxt="VIDEO"
        />

        {/* modal youtube video */}
        <div>
          <section className="global_wrapper about_wrapper" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="about_wrapper__left" data-aos="fade-up">
                    {/* <h3>MODUL 1 + MODUL 2 INTENSIV {maindata.about_first_section_Heading}</h3> */}
                    <h3>
                      {" "}
                      {maindata && maindata.about_first_section_sub_Paragraph}
                    </h3>
                    <h1> {maindata && maindata.about_first_section_Heading}</h1>
                    {/* <h1>200H Yogalehrer Ausbildung </h1> */}
                    <div className="kurse_link">
                      {/*<a href="#">wichtige info</a>*/}
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
                          maindata &&
                          maindata.about_first_section_Paragraph_Content,
                      }}></p>

                    {/* <h6>
                      200H und 500H Yogalehrer Ausbildungen - Yoga Alliance
                      zertifiziert &amp; International anerkannt
                    </h6>
                    <p>
                      Die Turiya Yoga Akademie bietet umfassende 200- und
                      300-Stunden-Yogalehrerausbildungen an verschiedenen
                      Standorten wie Frankfurt, Berlin und Wiesbaden in
                      Deutschland, Goa, dem Himalaya in Indien und Mallorca in
                      Spanien an. Seit unserer Gründung im Jahr 2013 haben wir
                      bereits über 1.400 Schüler erfolgreich ausgebildet. Die
                      Dauer der Ausbildung variiert je nach Standort zwischen 16
                      und 24 Tagen.
                    </p>
                    <p>
                      Unsere Akademie legt großen Wert auf eine unterstützende
                      Lernumgebung, in der erfahrene Lehrer dich dabei
                      begleiten, die wesentlichen Fähigkeiten eines Yogalehrers
                      zu entwickeln und die wichtigsten Techniken für einen
                      sicheren Yoga-Unterricht zu erlernen. Nach Abschluss
                      unserer 200-Stunden-Ausbildung erhältst du die
                      Möglichkeit, ein international anerkannter Yogalehrer nach
                      den Standards der Yoga Alliance zu werden.
                    </p>
                    <p>
                      Unser 200-Stunden-Programm zeichnet sich durch eine
                      sorgfältig abgestimmte Mischung aus traditionellen
                      Yoga-Praktiken (Hatha Yoga) und modernen Flow-Stilen aus.
                      Es orientiert sich an den höchsten Standards und bietet
                      eine Verbindung aus traditionellen Yoga-Lehren und einer
                      undogmatischen, westlichen Perspektive. Unsere engagierten
                      Lehrer begleiten dich auf deinem Weg und fördern deine
                      persönliche Entwicklung, damit du dein volles Potenzial
                      während der Ausbildung ausschöpfen kannst. Die
                      therapeutischen Aspekte des Yoga sind in unsere Module
                      integriert, allerdings ist Yoga-Therapie keine
                      zertifizierte Praxis gemäß den Richtlinien der Yoga
                      Alliance.
                    </p>
                    <p>
                      Die Ausbildung an der Turiya Yoga Akademie basiert sowohl
                      auf traditionellem als auch modernem Hatha Yoga, wobei
                      Requisiten (Props) umfassend und effektiv eingesetzt
                      werden. Diese Vorbereitung ermöglicht es dir, dich
                      weiterzuentwickeln und in moderne, fließende Praktiken
                      tiefer einzutauchen. Nach Abschluss der
                      200-Stunden-Yogalehrerausbildung wirst du bestens darauf
                      vorbereitet sein, den Anforderungen eines Yogalehrers
                      gerecht zu werden. Die zusätzliche 300-Stunden-Ausbildung
                      vermittelt dir spezialisierte Werkzeuge und Fähigkeiten,
                      sodass du am Ende des gesamten Programms nicht nur
                      kompetent, sondern auch kreativ und vielseitig in deinem
                      Yoga-Unterricht agieren kannst.
                    </p>
                    <p>
                      *Zusätzlich bieten wir ab 2025 auch Wochenendkurse in
                      Berlin an.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* third section */}
          <section className="global_wrapper third_section">
            <div className="container">
              <div className="global_wrapper__content" data-aos="zoom-in-up">
                <div className="leaf">
                  <i className="bx bxs-leaf" />
                </div>
                <div className="main_heading">
                  <h1>Turiya Yoga bietet Yogalehrer-Ausbildungen in</h1>
                </div>
              </div>
            </div>
            <div className="global_content">
              <div className="container">
                <div className="yogalehrer-grid">
                  <div
                    className="third_section__box"
                    data-aos="fade-up"
                    data-aos-delay={100}>
                    <div className="box_img">
                      <img src={thumbImg1} className="img-fluid" alt="yoga" />
                    </div>
                    <div className="box_content">
                      <h3>Deutschland</h3>
                      <p>
                        Für diejenigen, die ihre Yogalehrerausbildung in einem
                        behaglichen Rückzugsort im eigenen Land absolvieren
                        möchten – umgeben von Quellen, frischer Luft und den
                        Wäldern des Taunus, ist das Sampurna Seminarhaus nur 30
                        Minuten von Wiesbaden und Mainz entfernt und somit ideal
                        erreichbar.
                      </p>
                      <div className="mehr--btn">
                        <a href="yogalehrer-ausbildung-in-sampurna-seminarhaus.php">
                          MEHR
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="third_section__box"
                    data-aos="fade-up"
                    data-aos-delay={200}>
                    <div className="box_img">
                      <img
                        src={thumbImg2}
                        className="img-fluid"
                        alt="sampurna_thumb"
                      />
                    </div>
                    <div className="box_content">
                      <h3>Mallorca</h3>
                      <p>
                        Für all jene, die die berühmten Sandstrände Mallorcas
                        genießen möchten – bieten wir die Yogalehrer-Ausbildung
                        auf Mallorca an. Besuche uns und erlebe eine wundervolle
                        Zeit in der Turiya Yoga Finca. Unser Paket beinhaltet
                        erstklassige Verpflegung und Unterkunft.
                      </p>
                      <div className="mehr--btn">
                        <a href="200h-yogalehrer-ausbildung-mallorca.php">
                          MEHR
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="third_section__box"
                    data-aos="fade-up"
                    data-aos-delay={300}>
                    <div className="box_img">
                      <img
                        src={thumbImg4}
                        className="img-fluid"
                        alt="goa_thumb"
                      />
                    </div>
                    <div className="box_content">
                      <h3>Goa, Indien</h3>
                      <p>
                        Wenn du deine Yogaausbildung am Strand absolvieren
                        möchtest, jedoch auch einen Einblick in die Wurzeln des
                        Yoga erhalten willst, bieten wir dir die Möglichkeit, in
                        Goa, Indien, deine Ausbildung zu machen. Dort, vor der
                        Kulisse von Kokosnussplantagen und grünen Hügeln,
                        findest du zweifellos einige der schönsten Strände.
                      </p>
                      <div className="mehr--btn">
                        <a href="yogalehrer-ausbildung-goa-indien.php">MEHR</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="third_section__box"
                    data-aos="fade-up"
                    data-aos-delay={400}>
                    <div className="box_img">
                      <img
                        src={thumbImg3}
                        className="img-fluid"
                        alt="himachal_thumb"
                      />
                    </div>
                    <div className="box_content">
                      <h3>Himachal, Indien</h3>
                      <p>
                        Himachal in Indien ist bekannt für seine fröhlichen
                        Menschen, die immergrüne Natur und die außerordentlich
                        frische Luft. Es ist ein herausragender Ort für die
                        Yoga-Praxis in Indien. Das Dorf Bhagsu, das etwa 2100
                        Meter über dem Meeresspiegel liegt und in der Nähe des
                        Haupttempels des Dalai Lama zu finden ist...
                      </p>
                      <div className="mehr--btn">
                        <a href="yogalehrer-ausbildung-himalaya-indien.php">
                          MEHR
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* faq */}
          <section className="global_wrapper faq_wrapper" id="see_faq">
            <div className="container">
              <div className="faq_wrapper__content" data-aos="fade-up">
                {/* <div className="faq_heading">
                  <h3>Zertifizierung &amp; Teilnahmevoraussetzung</h3>
                </div> */}

                {/* ======================================================== */}
                {/* <div className="faq_box">
                  {faqItems.map((faq, index) => (
                    <div
                      key={index}
                      className={`faq_box__content ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleToggle(index)}>
                      <div className="question">
                        <div className="plus">
                          <i
                            className={`bx ${
                              activeIndex === index ? "bx-minus" : "bx-plus"
                            }`}
                          />
                        </div>
                        <h6>{faq.question}</h6>
                      </div>
                      {activeIndex === index && (
                        <div className="answer">
                          {faq.answer.map((paragraph, index) => (
                            <p key={index} className="mb-3">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div> */}

                {/* ============================== latest updated =============================== */}
                <div className="container">
                  <div className="faq_wrapper__content" data-aos="fade-up">
                    <div className="faq_heading">
                      <h3>Zertifizierung & Teilnahmevoraussetzung</h3>
                    </div>
                    {/* Section 1 */}
                    <div className="faq_box">
                      {faqItems1.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex1 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(1, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex1 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex1 === index && (
                            <div className="answer">
                              {faq.answer.map((paragraph, idx) => (
                                <p key={idx} className="mb-3">
                                  <span
                                    style={{
                                      fontWeight:
                                        idx === 2 || idx === 3
                                          ? "bold"
                                          : "normal",
                                    }}>
                                    {paragraph}
                                  </span>
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="faq_box">
                      {faqItems2.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex1 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(1, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex1 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex1 === index && (
                            <div className="answer">
                              {faq.answer.map((paragraph, idx) => (
                                <p key={idx} className="mb-3">
                                  <span
                                    style={{
                                      fontWeight:
                                        idx === 2 || idx === 3
                                          ? "bold"
                                          : "normal",
                                    }}>
                                    {paragraph}
                                  </span>
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Section 2 */}
                  </div>
                </div>

                <div className="container">
                  <div className="faq_wrapper__content" data-aos="fade-up">
                    <div className="faq_heading">
                      <h3> Yogausbildungsinhalte & Wichtige Informationen</h3>
                    </div>

                    {/* ======================================================== */}
                    <div className="faq_box">
                      {faqItems3.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex2 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(2, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex2 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex2 === index && (
                            <div className="answer">
                              {faq.answer.map((paragraph, index) => (
                                <p key={index} className="mb-3">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="faq_box">
                      {faqItems4.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex3 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(3, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex3 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex3 === index && (
                            <div className="answer">
                              {faq.answer.map((paragraph, index) => (
                                <p key={index} className="mb-3">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="faq_box">
                      {faqItems5.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex4 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(4, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex4 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex4 === index && (
                            <div className="answer">
                              {faq.answer.map((paragraph, index) => (
                                <p key={index} className="mb-3">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="faq_box">
                      {faqItems5.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex5 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(5, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex5 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex5 === index && (
                            <div className="answer">
                              {faq.answer.map((paragraph, index) => (
                                <p key={index} className="mb-3">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="faq_wrapper__content" data-aos="fade-up">
                    <div className="faq_heading">
                      <h3>Tagesablauf</h3>
                    </div>

                    {/* ======================================================== */}

                    <div className="faq_box">
                      {faqItems6.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex6 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(6, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex6 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex6 === index && (
                            <div className="answer">
                              {faq.answer.map((paragraph, index) => (
                                <p key={index} className="mb-3">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="faq_box">
                      {faqItems7.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex7 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(7, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex7 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex7 === index && (
                            <div className="answer">
                              {faq.answer.map((paragraph, index) => (
                                <p key={index} className="mb-3">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {/* ============================================================= */}
                  </div>
                </div>
                {/* =========================================================================================== */}
              </div>
            </div>
          </section>
          {/* testimonial */}
          <Testimonial />
          {/* course  */}
          {/* parralax section */}
          <section className="parralax_wrapper">
            <div className="container">
              <div className="parralax_wrapper__content" data-aos="fade-right">
                <div className="line" />
                <h6>YOGALEHRER WERDEN</h6>
                <h1>
                  Stärke Körper <br /> Geist &amp; Seele
                </h1>
              </div>
            </div>
          </section>
          {/* section 11 check */}
          <CheckWrapper />
        </div>

        {/* contact form */}

        {/* gallery */}

        <NewsShelter />
      </section>
    </>
  );
};

export default Index;
