import React, { useState, useEffect } from "react";
// import "./himalaya.scss";
// import "./hymiliya2.scss";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../config";
import SimpleBanner from "./banner/SimpleBanner3";
import Contact from "./Contact";
import NewsShelter from "./NewsShelter";
import { useParams } from "react-router-dom";
import NoPage from "../pages/NoPage";

const Category = () => {
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
        // fetchEarlyBirdData();
        // fetchNextUpcomingCourse();
    }, []);

    console.log("earlyData", earlyData);

    const [bannerImg, setBannerImg] = useState("");

    const [galleries, setGalleries] = useState("");
    const [mainData, setMainData] = useState("");
    // console.log("Mallorca");

    const { slug } = useParams();

    const [show404page, setShow404Page] = useState(false);
    const [loading, setLoading] = useState(false);

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
                    setLoading(false)
                    setShow404Page(false)
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
                <NoPage/> :
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
                                        <p
                                            className="p-0"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    mainData &&
                                                    mainData.about_first_section_Paragraph_Content,
                                            }}></p>
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
                    <Contact />
                    <NewsShelter />
                </div>}
        </>
    );
};

export default Category;