import React, { useRef, useState, useEffect } from "react";
import "./berlin.scss";
import SimpleBanner4 from "../banner/SimpleBanner4";
import banner from "../../assets/images/yin_yoga/new_banner.webp";
import img1 from "../../assets/images/training_malcornia/training_Mallorca.webp";
import img2 from "../../assets/images/training_malcornia/img2.webp";
import img3 from "../../assets/images/training_malcornia/img2.webp";
// import img3 from "../../assets/images/training_malcornia/img3.webp";
import img4 from "../../assets/images/training_malcornia/img2.webp";
import img5 from "../../assets/images/training_malcornia/img2.webp";
import img6 from "../../assets/images/training_malcornia/img2.webp";
import img7 from "../../assets/images/training_malcornia/img2.webp";
import img8 from "../../assets/images/training_malcornia/img2.webp";
import dilogImg from "../../assets/images/high-important.png";

import NewsShelter from "../NewsShelter";
import Contact from "../Contact";
import Testimonial from "../Testimonial";
import CheckWrapper from "../CheckWrapper";
import ParralaxWrapper from "../ParralaxWrapper";
import PriceCard from "../price_card/Index";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";
import { useNavigate } from "react-router-dom";


const Berlin = () => {
  const navigate = useNavigate();
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
    getUpcomingCourse();
    fetchNextUpcomingCourse();
  }, []);

  const [upcomingCourse, setUpcomingCourse] = useState("");

  const getUpcomingCourse = () => {
    axios
      .get(BASE_URL + "/getModuleByLocation/Berlin")
      .then((response) => {
        console.log("response of Goa courses", response.data);
        const data = response.data.data;
        setUpcomingCourse(data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }


  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }


  console.log("earlyData from Yin_Yoga", earlyData
  );

  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }





  console.log("upcomingCourse", upcomingCourse)
  const [bannerImg, setBannerImg] = useState("");
  const [newBannerImg, setNewBannerImg] = useState("");

  const [galleries, setGalleries] = useState("");
  const [Yin_Yoga, setYin_Yoga] = useState('');

  // 60H Yin Yoga
  const getUpcomingCourse2 = () => {
    axios
      // .get(BASE_URL +   "/course_web_page_by_course_category/Berlin")
      .get(BASE_URL + "/all_course_webpages")
      .then((response) => {
        console.log("response of 60H berlin Yoga", response.data.data[7]);
        const data = response.data.data[7];
        setYin_Yoga(data);

        var imageUrlcustum =
          data && data.yogaTeamSlideImage
            ? BASE_URL_IMAGE + `/images/coursewebpage/${data && data.yogaTeamSlideImage
            }`
            : ""; // Fallback image or empty string

        console.log("imageUrlcustum", imageUrlcustum);
        setNewBannerImg(imageUrlcustum);



      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  const fetchData2 = () => {
    axios
      .get(`${BASE_URL}/all_course_webpages`)
      .then((response) => {
        console.log("response of yin yoga", response);

        if (response.status == 200) {
          const data = response.data.data[3];
          console.log("real data yin yoga", response.data.data[3]);
          console.log("real data yin yoga img", data.yogaTeamSlideImage);
          setYin_Yoga(response.data.data[3]);

          var imageUrlcustum =
            data && data.yogaTeamSlideImage
              ? `${BASE_URL_IMAGE}/images/coursewebpage/${data && data.yogaTeamSlideImage
              }`
              : ""; // Fallback image or empty string

          console.log("imageUrlcustum", imageUrlcustum);
          setNewBannerImg(imageUrlcustum);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {

    getUpcomingCourse2();
  }, []);



  const faqItems1 = [
    {
      question: "Bekomme ich schon ein Zertifikat?",
      answer: [
        "Wenn du nicht an der 500H Yogalehrer Ausbildung teilnimmst: Nach erfolgreichem Abschluss dieses Kurses erhältst du die Turiya Yoga - Yin Yoga Basiskurs Zertifikat.",
        "Wir sind eine von der Yoga Alliance zertifizierte Akademie und dieser Kurs wird auch im Rahmen unserer 500H Yogalehrer Ausbildung angeboten. Wenn du diesen Kurs im Rahmen deiner 500H Yogalehrer Ausbildung belegst: Zu diesem Zeitpunkt hättest du bereits nach Modul 1 und Modul 2 das zertifizierte 200-stündige Yogalehrer-Ausbildung Yoga Alliance-Diplom erworben. Danach bist du berechtigt, 500 RYT zu werden, indem du die 300-stündige Yogalehrerausbildung absolvierst durch das Abschließen der Module 3, Modul 4 und Modul 5.",
        "Der Yin-Yoga-Kurs ist Teil des Kursangebots im Modul 5-Optionen und absolviert 60 Stunden der verbleibenden 100 Stunden. Wenn du deine verbleibenden 100 Stunden, von denen der Yin Yoga Kurs 60% abschließt, erfolgreich beendet hast, erhältst du dein 500H Yoga-Ausbildung-Zertifikat und kannst dich bei Yoga Alliance als RYT 500 registrieren.",
      ],
    },
  ];

  const faqItems2 = [
    {
      question: "Was sind die Teilnahmevoraussetzungen?",
      answer: [
        "Teilnahmevoraussetzungen: Mindestalter 18 Jahre. Es wird auch empfohlen, mindestens das Modul 1 (100h) aus unserer Yogalehrer Ausbildung zu nehmen. Wenn du über ein anerkanntes Zertifikat für eine 200-stündige Yogalehrerausbildung verfügst, sollte dies ausreichen, um das Programm vollständig aufzunehmen.",
        "Die Yogalehrer Ausbildung ist für alle körperlichen Konditionsstufen geeignet. Wenn du dich wegen einer besonderen Situation unsicher fühlst, wende dich einfach an uns.",
      ],
    },
  ];

  const faqItems3 = [
    {
      question: "Was werde ich in der Yin Yoga Ausbildung lernen?",
      answer: [
        "Dieser Kurs bildet eine solide Grundlage für Yin Yoga – besonders wie Yin Techniken mit Vinyasa zu kombinieren. Zu diesem Zweck werden dir Yin-Yoga-Praktiken und Asanas vorgestellt (die sich von dem unterscheiden oder modifiziert sind, was du bereits in anderen Modulen unserer Yogalehrer-Ausbildung gelernt hast). Da Yin Yoga stark in der Traditionellen Chinesischen Medizin verankert ist, nehmen wir uns Zeit, um uns auf funktionelle Anatomie und Faszien sowie Schlüsselkonzepte der chinesischen Meridian-Kartierung zu konzentrieren.",
        "Wir nehmen uns auch Zeit, um uns mit der Sequenzierung zu befassen, damit du sicher auf unterschiedliche Bedürfnisse eingehen kannst. Als wesentlicher Bestandteil dieses Kurses befassen wir uns mit der Verwendung von Requisiten und wie sie deinen Unterricht bereichern, zusammen mit Entspannungstechniken im Zusammenhang mit Stressabbau.",
        "Der Kurs bietet eine umfassende Einführung in die Yin Yoga-Techniken, die es dir ermöglicht, Yin Yoga-Übungen mit anderen Übungsstilen zu kombinieren.",
        "Der Kurs bietet eine großartige Möglichkeit, diesen Stil zu erlernen, ohne viel Geld oder Zeit zu investieren. Wenn du merkst, dass du eine Leidenschaft dafür entwickelt hast, wirst es dir sicherlich leichtfallen, weiterzumachen und von einem informierten Standpunkt aus zu beschließen, welche weiteren Ausbildungen du nehmen möchtest.",
      ],
    },
  ];

  const faqItems4 = [
    {
      question: "Wie sieht mein Tag aus?",
      answer: [
        "Unser Kurs dauert 60 Stunden in 6 Tagen, daher absolvieren wir ungefähr 10 Stunden pro Tag gemäß den Standards der Yoga-Allianz. Von diesen sind ungefähr 4 Stunden pro Tag für Yogapraxis geplant. Keine Sorge, der Kurs ist durchdacht, damit eure Körper nicht überfordert werden und ein großer Teil der Yin Yoga-Grundlagen in der Pflege der Fähigkeit zur absoluten Entspannung liegt.",
        "Denkt bitte daran: Ein Kurs in Yoga Alliance dauert 60 Minuten. Innerhalb dieses Kurses dürfen wir 10 Minuten Pause einlegen!",
        "Ablauf Beispiel",
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
        "17h-19h Übung",
      ],
    },
  ];

  // =========================================================================================================================
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



  const [isDialogVisible, setIsDialogVisible] = useState(false);

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


  const addToCart = (courseid) => {
    alert("courseid", courseid)
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
  // Function to close the dialog
  const closeDialogBox = () => {
    setIsDialogVisible(false); // Hide the dialog
  };

  const handleredirect = () => {
    closeDialogBox(); // Close
    //  onClick="window.location.href='registration.php';"
  };

  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [activeIndex3, setActiveIndex3] = useState(null);
  const [activeIndex4, setActiveIndex4] = useState(null);
  const [activeIndex5, setActiveIndex5] = useState(null);

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
    }
  };

  // const handleToggle = (section, index) => {
  //     if (section === 3) {
  //       setActiveIndex3(activeIndex3 === index ? null : index);
  //     } else if (section === 4) {
  //       setActiveIndex4(activeIndex4 === index ? null : index);
  //     } else if (section === 5) {
  //       setActiveIndex5(activeIndex5 === index ? null : index);
  //     }
  //   };

  const bannerRef = useRef(null);
  const faqRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log("banner img: from yin", newBannerImg);

  function isOfferValid(offerEndDate) {
    if (!offerEndDate) return false;

    const today = new Date();
    const offerEnd = new Date(offerEndDate);

    return today <= offerEnd;
  }

  return (
    <>
      <div className="berlin_wrapper">
        <div ref={bannerRef}>
          {/* <SimpleBanner2
        banner={banner}
        heading="60H Yin Yoga Ausbildung"
        para="Unsere Yin-Yogalehrer Ausbildung hilft dir, deine Praxis zu vertiefen und deine Lehrfähigkeiten zu meistern. Dieses besondere Programm verbindet Tradition mit modernen Techniken, damit du ein achtsamer und inspirierender Lehrer wirst. Mach mit und transformiere dein Yoga!"
        buttonTxt=" KUNDENSTIMMEN VIDEO "
        /> */}
          <SimpleBanner4
            banner={Yin_Yoga && newBannerImg}
            heading={Yin_Yoga && Yin_Yoga.yogaTeamSliderHeading}
            para={Yin_Yoga && Yin_Yoga.yogaTeamSliderParagraph}
            videoLink={Yin_Yoga && Yin_Yoga.yogaTeamSliderVideoLink}
          // buttonTxt="read_more"
          />
        </div>
        <div
          id="content"
          className="about_wrapper__left section pt-5 pt-md-5 pb-3 my-0">
          <div className="container">
            <div className="row" id="description">
              {/* Post Content ============================================= */}
              <div className="col-lg-9">
                {/* <h1>Yogalehrer Ausbildungen in Modulen</h1> */}
                <p>
                  {" "}

                </p>

                <p
                  className="p-0"
                  //   style={{
                  //       color: "rgb(33, 37, 41)",
                  //       fontFamily: "Roboto, sans-serif",
                  //       fontSize: 16,
                  // }}

                  dangerouslySetInnerHTML={{
                    __html:
                      Yin_Yoga && Yin_Yoga.about_first_section_Paragraph_Content,
                  }}></p>


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


              {/* .postcontent end */}
              {/* Sidebar ============================================= */}

              {/* .sidebar end */}
            </div>
          </div>
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
        <CheckWrapper />
        {/* <ParralaxWrapper /> */}



        {isDialogVisible && (
          <div
            id="modalOverlay"
            className="hiddenOverlayContainer"
            style={{ display: "block" }}>
            <div className="customDialogBox">
              <span className="exitButtonTrigger" onClick={closeDialogBox}>
                ×
              </span>
              <div className="dialogIcon">
                <img src={dilogImg} style={{ width: 80 }} alt />
              </div>
              <p className="mt-3">
                Um den Kauf abzuschließen, musst du dich zuerst einloggen!
              </p>
              <button className="dialogActionButton" onClick={handleredirect}>
                Go to Login/Registrierung.
              </button>
            </div>
          </div>
        )}
        <Contact />
        <NewsShelter />

      </div>
    </>
  );
};

export default Berlin;
