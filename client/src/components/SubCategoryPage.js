import React, { useState, useEffect } from "react";
// import "./himalaya.scss";
// import "./hymiliya2.scss";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../config";
import SimpleBanner from "./banner/SimpleBanner3";
import Contact from "./Contact";
import NewsShelter from "./NewsShelter";
import { useNavigate, useParams } from "react-router-dom";
import NoPage from "../pages/NoPage";
import he, { decode } from "he";
import dilogImg from "../assets/images/high-important.png";
import Swal from "sweetalert2";
import './yoga_teacher_training_Mallorca/YogaTraningMallorca.scss'
import Gallery from "./gallery/Index";
import Testimonial from "./Testimonial";

const SubCategory = () => {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);
    }, []);

    const [upcomingCourse, setUpcomingCourse] = useState([]);

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
                `${BASE_URL}/module_webpages_by_category/${slug}`
            )
            .then((response) => {
                const data = response.data.data[0];
                console.log("response of yoga Himalaya Indien", data);

                if (response.status == 200) {
                    console.log("banner imggg", data.yogaTeamSlideImage);
                    setMainData(response.data.data[0]);

                    var imageUrlcustum =
                        data && data.yogaTeamSlideImage
                            ? `${BASE_URL_IMAGE}/images/modulewebpage/${data.yogaTeamSlideImage}`
                            : ""; // Fallback image or empty string

                    setBannerImg(imageUrlcustum);
                    setDecodedContent(he.decode(response.data.data[0].about_first_section_Paragraph_Content))
                    setLoading(false)
                    setShow404Page(false)
                    setSelectedSections(data.selectedSections)
                    setfaqItems1(data.faqs)
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


    function isOfferValid(offerEndDate) {
        if (!offerEndDate) return false;

        const today = new Date();
        const offerEnd = new Date(offerEndDate);

        return today <= offerEnd;
    }

    const handletriggerDialogBox = (courseid) => {

        const auth_token = localStorage.getItem("turiya_auth_token");

        console.log("course id: handletriggerDialogBox" + courseid, auth_token);
        if (auth_token) {
            addToCart(courseid);
        } else {
            setIsDialogVisible(true);
        }

    };

    const UserId = localStorage.getItem('turiya_auth_id');


    const addToCart = (courseid) => {
        const payload = {
            moduleId: courseid,
            userId: UserId,
            status: "active",
        };

        axios
            .post(BASE_URL + "/add_course_in_cart", payload)
            .then((response) => {
                console.log("response of cart", response.data.data);
                Swal.fire({
                    title: "Danke!",
                    text: "Kurs im Warenkorb hinzugefügt!",
                    icon: "success"
                });
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            })
            .catch((error) => {
                console.log("error", error);
                Swal.fire({
                    Symbol: 'error',
                    Titel: "Benachrichtigung",
                    Text: "Etwas ist schiefgelaufen!",
                    Fußzeile: '<a href="#">Warum habe ich dieses Problem?</a>'
                });

            });
    };

    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const closeDialogBox = () => {
        setIsDialogVisible(false); // Hide the dialog
    };

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
                show404page ? <NoPage /> :
                    <div>
                        <SimpleBanner
                            banner={bannerImg && bannerImg}
                            heading={mainData.yogaTeamSliderHeading}
                            para={mainData.yogaTeamSliderParagraph}
                            videoLink={mainData.yogaTeamSliderVideoLink}
                            buttonTxt="Play"
                        />
                        <section className="global_wrapper about_wrapper">
                            <div className="container">
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

                                    {/* <div className="col-lg-3">
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
                                                                                color: "rgb(198, 132, 27)",
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
                                </div> */}
                                </div>
                            </div>
                        </section>
                        
                        {selectedSections.includes("faq-section") && <section className="yin_yoga_faq">
                            <div className="container">
                                <div className="faq_wrapper__content">
                                    <div className="faq_heading">
                                        <h3>Zertifizierung & Teilnahmevoraussetzung</h3>
                                    </div>
                                    <div className="faq_box">
                                        {faqItems1.map((faq, index) => (
                                            <div
                                                key={index}
                                                className={`faq_box__content ${activeIndex1 === index ? "active" : ""
                                                    }`}
                                                onClick={() => handleToggle(1, index)}>
                                                <div className="question">
                                                    <div className="plus">
                                                        <i
                                                            className={`bx ${activeIndex1 === index ? "bx-minus" : "bx-plus"
                                                                }`}
                                                        />
                                                    </div>
                                                    <h6>{faq.question}</h6>
                                                </div>
                                                {activeIndex1 === index && (
                                                    <div className="answer">
                                                        {faq.answer.map((paragraph, idx) => (
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
                            </div>
                        </section>}
                        {selectedSections.includes("module-section") && upcomingCourse.length > 0 && <div
                            style={{
                                backgroundColor: "#F9F9F9",
                                paddingTop: "30px",
                                paddingBottom: "30px",
                            }}>
                            <div className="container">
                                <div
                                    className="table-responsive index-table"
                                    style={{ backgroundColor: "#F9F9F9" }}>
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
                                            {upcomingCourse.map((item, index) => {
                                                console.log("row of upcoming courses", item);

                                                return item.Place && item.Place !== "0" ? (
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
                                                                            color: "rgb(198, 132, 27)",
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
                                                                        <br />
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
                                                                color: item.Place <= 3 ? "rgb(198, 132, 27)" : "black", // Optional: change text color to white if background is rgb(198, 132, 27)
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
                                                ) : null;
                                            })}
                                        </tbody>

                                        <tbody
                                            class="table-body mobile"
                                            style={{ backgroundColor: "#EDEDED" }}>
                                            {upcomingCourse &&
                                                upcomingCourse.map((item, index) => {
                                                    console.log("row of upcoming courses", item);

                                                    return item.Place && item.Place !== "0" ? (
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
                                                                                    item.Offerprice > 0 ? "rgb(198, 132, 27)" : "inherit",
                                                                            }}>
                                                                            €{" "}
                                                                            {item.Offerprice > 0
                                                                                ? item.Offerprice
                                                                                : item.price}
                                                                        </span>
                                                                    </>
                                                                ) : null}

                                                                <span
                                                                    // style={{
                                                                    //   color: item.Offerprice > 0 ? "rgb(198, 132, 27)" : "inherit",
                                                                    // }}
                                                                    className="ms-2">
                                                                    {item.Offerprice > 0 ? (
                                                                        <del>€{item.price} </del>
                                                                    ) : (
                                                                        <span>€{item.price}</span>
                                                                    )}
                                                                </span>
                                                                <br />
                                                                {item.OfferEndDate ? (
                                                                    <>
                                                                        <small>Das Angebot endet am </small>
                                                                        <small>
                                                                            <br />
                                                                            <i class="bx bxs-calendar"></i>
                                                                            {formatDate(
                                                                                item.OfferEndDate ? item.OfferEndDate : null
                                                                            )}
                                                                        </small>
                                                                    </>
                                                                ) : null}
                                                            </td>

                                                            <td
                                                                style={{
                                                                    backgroundColor: "#F9F9F9",
                                                                    color: item.Place <= 3 ? "rgb(198, 132, 27)" : "black", // Optional: change text color to white if background is rgb(198, 132, 27)
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
                                                    ) : null;
                                                })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>}
                        {isDialogVisible && (
                            <div
                                id="modalOverlay"
                                className="hiddenOverlayContainer"
                                style={{ display: "block" }}>
                                <div className="row bg-light">
                                    <div className="col-sm-6"></div>
                                </div>
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
                                    {/* dialogActionButton */}
                                    <button
                                        className="dialogActionButton"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => navigate('/login')}>
                                        Go to Login/Registrierung.
                                    </button>
                                </div>
                            </div>
                        )}

                        {selectedSections.includes("gallery") && <Gallery />}
                        {selectedSections.includes("text-testimonials") && <Testimonial />}
                        {selectedSections.includes("contact-us-section") && <Contact />}
                        {selectedSections.includes("newsletter") && <NewsShelter />}
                    </div>}
        </>
    );
};

export default SubCategory;