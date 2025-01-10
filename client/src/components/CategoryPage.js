import React, { useState, useEffect } from "react";
// import "./himalaya.scss";
// import "./hymiliya2.scss";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../config";
import SimpleBanner from "./banner/SimpleBanner3";
import Contact from "./Contact";
import NewsShelter from "./NewsShelter";
import { Link, useNavigate, useParams } from "react-router-dom";
import NoPage from "../pages/NoPage";
import './yoga_teacher_training_Mallorca/YogaTraningMallorca.scss'
import Gallery from "./gallery/Index";
import Testimonial from "./Testimonial";
import he, { decode } from "he";
import BannerGlobalTableWrapper from "./BannerGlobalTableWrapper";
import CheckWrapper from "./CheckWrapper";
import ParralaxWrapper from "./ParralaxWrapper";
import BannerGlobalWrapper from "./BannerGlobalWrapper";
import thumbImg1 from "../assets/images/mallorca_thumb.webp";
import thumbImg2 from "../assets/images/sampurna_thumb.webp";
import thumbImg3 from "../assets/images/himachal_thumb.webp";
import thumbImg4 from "../assets/images/goa_thumb.webp";

const Category = () => {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);
    }, []);

    const [upcomingCourse, setUpcomingCourse] = useState([]);
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

    const fetchCoursesData = () => {
        axios
            .get(BASE_URL + `/getModuleBySlug/${slug}`)
            .then((response) => {
                console.log("response of banner slower wrapper", response.data.data);
                setUpcomingCourse(response.data.data);
            })
            .catch((error) => {
                console.log("error", error);
            });
    };

    useEffect(() => {
        if (slug) {
            fetchCoursesData();
        }
        fetchNextUpcomingCourse()
    }, []);

    const [bannerImg, setBannerImg] = useState("");

    const [galleries, setGalleries] = useState("");
    const [mainData, setMainData] = useState("");
    // console.log("Mallorca");

    const [decodedContent, setDecodedContent] = useState("");

    const { slug } = useParams();

    const [show404page, setShow404Page] = useState(false);
    const [loading, setLoading] = useState(false);

    const [selectedSections, setSelectedSections] = useState([]);
    const [faqItems1, setfaqItems1] = useState([]);

    const navigate = useNavigate()

    const fetchData = () => {
        setLoading(true)
        axios
            .get(
                `${BASE_URL}/course_web_page_by_course_category/${slug}`
            )
            .then((response) => {
                const data = response.data.data[0];
                console.log("response of yoga Himalaya Indien", data);

                if (response.status == 200) {
                    console.log("banner imggg", data.yogaTeamSlideImage);
                    setMainData(response.data.data[0]);

                    var imageUrlcustum =
                        data && data.yogaTeamSlideImage
                            ? `${BASE_URL_IMAGE}/images/coursewebpage/${data.yogaTeamSlideImage}`
                            : ""; // Fallback image or empty string

                    setBannerImg(imageUrlcustum);
                    setDecodedContent(he.decode(response.data.data[0].about_first_section_Paragraph_Content))
                    setLoading(false)
                    setShow404Page(false)
                    setSelectedSections(data.selectedSections)
                    if (!Array.isArray(data.faqs)) {
                        setfaqItems1(data.faqs)
                    }
                }
            })
            .catch((error) => {
                if (error.status === 404) {
                    setShow404Page(true);
                    setLoading(false);
                }
                console.log("error", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, [slug]);

    console.log("all courses data", mainData, bannerImg);
    console.log("banner image", bannerImg);

    function formatDate(dateString) {
        const [year, month, day] = dateString.split("-");
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

    const [activeIndex1, setActiveIndex1] = useState(null);

    const handleToggle = (section, index) => {
        setActiveIndex1(activeIndex1 === index ? null : index);
    };



    return (
        <>
            {loading ?
                <div className=" d-flex justify-content-center align-items-centers my-5 gap-5">
                    <div class="spinner-border text-success" role="status">
                        <span class="sr-only"></span>
                    </div>
                    <p className="mb-0">Loading module details. Please wait....</p>
                </div> :
                show404page ?
                    <NoPage /> :
                    <div>
                        {selectedSections.includes("banner-section") && <SimpleBanner
                            banner={bannerImg && bannerImg}
                            heading={mainData.yogaTeamSliderHeading}
                            para={mainData.yogaTeamSliderParagraph}
                            videoLink={mainData.yogaTeamSliderVideoLink}
                            buttonTxt={mainData.bannerButton}
                        />}
                        <section className="global_wrapper about_wrapper">
                            <div className="container">
                                {selectedSections.includes("module-earlybid-card") ?
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="about_wrapper__left">
                                                <h3>
                                                    {mainData && mainData.about_first_section_sub_Paragraph}
                                                </h3>
                                                <h1> {mainData && mainData.about_first_section_Heading}</h1>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: decodedContent,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="about_wrapper__right mb-3">
                                                {
                                                    closestUpcomingCourse[0] ? (
                                                        <div>
                                                            <h3>{closestUpcomingCourse[0] ? closestUpcomingCourse[0]?.Ausbildung : null}</h3>
                                                            <div className="price-tag">
                                                                <h6>
                                                                    <i className="bx bxs-purchase-tag" />
                                                                    {closestUpcomingCourse[0] && isOfferValid(closestUpcomingCourse[0].OfferEndDate) && closestUpcomingCourse[0].Offerprice > 0 ? (
                                                                        <>
                                                                            {closestUpcomingCourse[0].Offerprice}€
                                                                            <sub>
                                                                                <del
                                                                                    style={{
                                                                                        color: "#E07542",
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
                                                                    {formatDate(closestUpcomingCourse[0].OfferEndDate)}
                                                                </p>}
                                                                <p>
                                                                    <i className="bx bxs-map" />
                                                                    {
                                                                        closestUpcomingCourse[0] ? closestUpcomingCourse[0].Location : null
                                                                    }

                                                                </p>
                                                                <p>
                                                                    <i className="bx bxs-calendar" />
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
                                                                <p>{closestUpcomingCourse[0]?.Ausbildung}</p>
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
                                    </div> :
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="about_wrapper__left">
                                                <h3>
                                                    {" "}
                                                    {mainData && mainData.about_first_section_sub_Paragraph}
                                                </h3>
                                                <h1> {mainData && mainData.about_first_section_Heading}</h1>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: decodedContent,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </section>

                        {selectedSections.includes("4-location-card-section") && <section className="global_wrapper third_section">
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
                                                    <Link to='/module/200h-aya-yogalehrer-ausbildung-sampurna-seminarhaus'  >
                                                        MEHR
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="third_section__box"

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
                                                    <Link to='/module/200h-aya-yogalehrer-ausbildung-i-mallorca' >
                                                        MEHR
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="third_section__box"

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
                                                    <Link to='/module/200h-aya-yogalehrer-ausbildung-goa-indien' >
                                                        MEHR
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="third_section__box"

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
                                                    <Link to='/module/yogalehrerausbildung-himalaya-indien' >
                                                        MEHR
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>}

                        {selectedSections.includes("5-module-card-section") && <BannerGlobalWrapper />}

                        {slug === "alle-kommenden-kurse" && <BannerGlobalTableWrapper />}

                        {selectedSections.includes("faq-section") && <section className="yin_yoga_faq">
                            <div className="container">
                                {faqItems1 && Object.entries(faqItems1).map(([categoryName, faqCategory], categoryIndex) => (
                                    <div className="faq_wrapper__content" key={categoryIndex}>
                                        <div className="faq_heading">
                                            <h3>{categoryName}</h3>
                                        </div>
                                        <div className="faq_box">
                                            {faqCategory.map((faq, index) => (
                                                <div
                                                    key={faq._id}
                                                    className={`faq_box__content ${activeIndex1 === faq._id ? "active" : ""}`}
                                                    onClick={() => handleToggle(1, faq._id)}
                                                >
                                                    <div className="question">
                                                        <div className="plus">
                                                            <i
                                                                className={`bx ${activeIndex1 === faq._id ? "bx-minus" : "bx-plus"}`}
                                                            />
                                                        </div>
                                                        <h6>{faq.question}</h6>
                                                    </div>
                                                    {activeIndex1 === faq._id && (
                                                        <div className="answer">
                                                            {faq.answer.split('\n').map((paragraph, idx) => (
                                                                <p key={idx} className="mb-3">
                                                                    {paragraph}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </section>}
                        {selectedSections.includes("gallery") && <Gallery />}
                        {selectedSections.includes("text-testimonials") && <Testimonial />}
                        {selectedSections.includes("benefits") && <CheckWrapper />}
                        {selectedSections.includes("bottom-banner") && <ParralaxWrapper />}
                        {selectedSections.includes("contact-us-section") && <Contact />}
                        {selectedSections.includes("newsletter") && <NewsShelter />}
                    </div>}
        </>
    );
};

export default Category;