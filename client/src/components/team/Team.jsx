import React, { useEffect, useState } from "react";
import "./team.scss";
import NewsShelter from "../NewsShelter";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";

const Team = () => {
  const [teamData, setteamData] = useState({
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

  const [bannerImg, setBannerImg] = useState("");

  const fetchData = () => {
    axios
      .get(BASE_URL + "/all_turiyayogateam")
      .then((response) => {
        console.log("response of our story", response);

        if (response.status == 200) {
          const data = response.data.data[0];
          console.log("real data", response.data.data[0]);
          setteamData({
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

          var imageUrlcustum = data.Slide_Image
            ? BASE_URL_IMAGE + `/images/team/${data.Slide_Image}`
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

  console.log("team data", teamData);

  //   const payload = {
  //   `<h5>Einer der fundiertesten Yogalehrer Ausbildungen in Deutschland</h5><p>4 Professoren</p><p>2 Physiotherapeuten</p><p>2 Ãrzte</p><p>2 Ãrzte</p><P>+ erfahrene Yogalehrer</P><p>In Kooperation mit dem ältesten wissenschaftlichen Yoga- College Indiens</p><p>Teamarbeit ist die Fähigkeit, gemeinsam auf eine Vision hinzuarbeiten.</p>`
  // }
  console.log("banner_image", bannerImg);
  return (
    <>
      <div>
        <section className="banner_wrapper">
          <div
            className="banner_bg"
            //   style={{
            //     //   backgroundImage: teamData && `http://127.0.0.1:7000/uploads/images/team/` + teamData.Slide_Image
            //       backgroundImage:bannerImg
            //   }}
            style={{
              backgroundImage: bannerImg ? `url(${bannerImg})` : "none",
            }}>
            <div className="banner-content container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner_bg__content" data-aos="fade-up">
                    <h1
                      className="animate__animated"
                      data-animation-in="animate__fadeInUp"
                      data-duration-in={1}>
                      {/*Turiya Yoga Team*/}
                      {teamData && teamData.Slider_Heading}{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team content */}
        <section className="global_wrapper team-section">
          <div className="container">
            <div className="team-section-list">
              <h6>Das Dozenten Team</h6>
              <p
                className="p-3 mb-3"
                dangerouslySetInnerHTML={{
                  __html: teamData.about_First_Section_Peragraph_Content,
                }}></p>
              {/* <h3 style={{ margin: '1rem 0px 0.5rem', padding: 0, fontFamily: 'Roboto, sans-serif', lineHeight: '1.8', fontSize: 15, color: 'rgb(33, 37, 41)' }}>Einer der fundiertesten Yogalehrer Ausbildungen in Deutschland</h3><ul style={{ marginRight: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, fontFamily: 'Roboto, sans-serif', color: 'rgb(33, 37, 41)', fontSize: 16 }}><li style={{ margin: '10px 0px 0px', padding: 0, fontSize: 14, listStyle: 'none !important' }}>4 Professoren</li><li style={{ margin: '10px 0px 0px', padding: 0, fontSize: 14, listStyle: 'none !important' }}>2 Physiotherapeuten</li><li style={{ margin: '10px 0px 0px', padding: 0, fontSize: 14, listStyle: 'none !important' }}>2 Ãrzte</li><li style={{ margin: '10px 0px 0px', padding: 0, fontSize: 14, listStyle: 'none !important' }}>+ erfahrene Yogalehrer</li><li style={{ margin: '10px 0px 0px', padding: 0, fontSize: 14, listStyle: 'none !important' }}>In Kooperation mit dem ältesten wissenschaftlichen Yoga- College Indiens</li><li style={{ margin: '10px 0px 0px', padding: 0, fontSize: 14, listStyle: 'none !important' }}>Teamarbeit ist die Fähigkeit, gemeinsam auf eine Vision hinzuarbeiten.</li></ul> */}

              {/*<h3>Einer der fundiertesten Yogalehrer Ausbildungen in Deutschland</h3>*/}
              {/*<ul>*/}
              {/*    <li>4 Professoren</li>*/}
              {/*    <li>2 Physiotherapeuten</li>*/}
              {/*    <li>2 Ãrzte</li>*/}
              {/*    <li>+ erfahrene Yogalehrer</li>*/}
              {/*    <li>In Kooperation mit dem ältesten wissenschaftlichen Yoga- College Indiens</li>*/}
              {/*    <li>Teamarbeit ist die Fähigkeit, gemeinsam auf eine Vision hinzuarbeiten. </li>*/}
              {/*</ul>*/}
            </div>
          </div>
        </section>
      </div>
      <NewsShelter />
    </>
  );
};

export default Team;
