import React, { Suspense, useEffect, useState } from "react";
import "./testimonial.scss";
import CheckWrapper from "../CheckWrapper";
import ParralaxWrapper from "../ParralaxWrapper";
import NewsShelter from "../NewsShelter";
import Testimonial from "../Testimonial";
import Gallery from "../gallery/Index";
import banner from "../../assets/banner/banner1.webp";
import about_img from "../../assets/images/turiya_yoga_yogalehrer_ausbildung_geschichte_manu_suzana.webp";
import LazyYouTube from "../turiya_video/index";
import LazyYouTube2 from "../turiya_trainer_india_video/index";
import SimpleBanner from "../banner/SimpleBanner";
import TuriyaVideo from "../turiya_video/TuriyaVideo";
import TuriyaVideoIndian from "../turiya_trainer_india_video/TuriyaVideoIndian";
// const LazyYouTube = React.lazy(() => import('../turiya_video/index'));
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";


const CustomerTestimonialsp = () => {

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
        console.log("response of fetchNextUpcomingCourse", response.data.data);
        setClosestUpcomingCourse(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }


  useEffect(() => {
    fetchNextUpcomingCourse();
  }, []);

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
  }, []);

  console.log("earlyData", earlyData);

  // =========================================================================

  const [customerTestimonials, setCustomerTestimonials] = useState({
    Slide_Image: "",
    Slider_Heading: "",
    Slider_Paragraph: "",
    Slider_videolink: "",
    about_First_Section_Peragraph_Content: "",
    about_First_Section_Sub_Peragraph: "",
    about_First_Section_heading: "",
    about_Second_Section_Heading: "",
    about_Second_Section_Peragraph_Content: "",
    about_Second_Section_Sub_Peragraph: "",
    meta_Description: "",
    meta_Keywords: "",
    meta_Title: "",
    status: "",
  });

  const fetchData = () => {
    axios
      .get(BASE_URL + "/customer_testimonials")
      .then((response) => {
        console.log("response of our story", response);

        if (response.status == 200) {
          const data = response.data.data[0];
          console.log("real data", response.data.data[0]);
          setCustomerTestimonials({
            Slide_Image: data.Slide_Image,
            Slider_Heading: data.Slider_Heading,
            Slider_Paragraph: data.Slider_Paragraph,
            Slider_videolink: data.Slider_videolink,
            about_First_Section_Peragraph_Content:
              data.about_First_Section_Peragraph_Content,
            about_First_Section_Sub_Peragraph:
              data.about_First_Section_Sub_Peragraph,
            about_First_Section_heading: data.about_First_Section_heading,
            about_Second_Section_Heading: data.about_Second_Section_Heading,
            about_Second_Section_Peragraph_Content:
              data.about_Second_Section_Peragraph_Content,
            about_Second_Section_Sub_Peragraph:
              data.about_Second_Section_Sub_Peragraph,
            meta_Description: data.meta_Description,
            meta_Keywords: data.meta_Keywords,
            meta_Title: data.meta_Title,
            status: data.status,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("customerTestimonials", customerTestimonials);

  const payload = `
<h6>Wir garantieren eine hohe Zufriedenheit.</h6>
<p>Es ist uns wichtig, dass du ein Gefühl dafür bekommst, wer wir sind. Deshalb haben wir wir eininge Videos zusammengestellt, die Uns & die Turiya Yoga Akademie vorstellen. Diese Videos bieten Einblicke in unsere Arbeit als Ausbildungsakademie und zeigen uns als Yogalehrer.</p>
<p>Die Videos am Anfang sind auf Deutsch und stammen von unseren Trainings in Deutschland, Indien und Mallorca. Diese Clips geben die einen Eindruck von unseren deutschen Kursen und den Erfahrungen unserer Teilnehmerinnen.</p>
<p>Weiter unten findest du Videos unserer englischen Yogalehrer Ausbildungen. Diese wurden während unserer internationalen Programme 2014 - 2017 Aufgenommen und zeigen unsere Arbeit mit einer globalen Yogagemeinschaft. Wir haben unsere Ausbildungen sowohl auf Deutsch als auch auf Englisch angeboten, um eine briete Gemeinschaft anzusprechen und unsere Erfahrungen zu teilen.</p>
`;







  return (
    <>
      <section>
        <SimpleBanner
          videoLink={
            customerTestimonials && customerTestimonials.Slider_videolink
          }
          banner={customerTestimonials && customerTestimonials.Slide_Image}
          heading={customerTestimonials && customerTestimonials.Slider_Heading}
          para={customerTestimonials && customerTestimonials.Slider_Paragraph}
          buttonTxt="KUNDENSTIMMEN VIDEO"
        />
        {/* Modal 1 */}

        {/* about us section */}
        <section className="global_wrapper about_wrapper" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="about_wrapper__left" data-aos="fade-up">
                  <h3> {customerTestimonials.about_First_Section_heading}</h3>
                  <h1>
                    {" "}
                    {customerTestimonials.about_First_Section_Sub_Peragraph}
                  </h1>

                  <p
                    className="p-0"
                    //   style={{
                    //       color: "rgb(33, 37, 41)",
                    //       fontFamily: "Roboto, sans-serif",
                    //       fontSize: 16,
                    // }}

                    dangerouslySetInnerHTML={{
                      __html:
                        customerTestimonials.about_First_Section_Peragraph_Content,
                    }}></p>

                  <div className="about_wrapper__left-img">
                    <img
                      src={about_img}
                      alt="turiya_yoga_yogalehrer_ausbildung_geschichte_manu_suzana"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="about_wrapper__right mb-3">
                  {
                    closestUpcomingCourse[0] ? (
                      <div>


                        <h3>* {closestUpcomingCourse[0] ? closestUpcomingCourse[0].Ausbildung : null}</h3>
                        <div className="price-tag">
                          <h6>
                            <i className="bx bxs-purchase-tag" />
                            {closestUpcomingCourse[0] && closestUpcomingCourse[0].Offerprice ? closestUpcomingCourse[0].Offerprice : closestUpcomingCourse[0].price}€
                            <sub><del style={{ color: "rgb(255, 87, 34)", fontSize: "17px", marginLeft: '10px' }}>{closestUpcomingCourse[0] && closestUpcomingCourse[0].price}</del></sub>
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
            </div>
          </div>
        </section>
        {/* turiya video */}

        {/* <LazyYouTube /> */}
        <TuriyaVideo />
        <TuriyaVideoIndian />

        {/* section 11 check */}
        <CheckWrapper />
        <ParralaxWrapper />
        {/* 7th section */}

        {/* testimonial */}
        <Testimonial />
        {/* gallery */}
        <Gallery />
        {/* newsletter */}
        <NewsShelter />
      </section>
    </>
  );
};

export default CustomerTestimonialsp;



