import React, { useEffect } from "react";
import "./blog.scss";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../config";


const Index = ({
  topDetails,
  topDetails2,
  title,
  banner,
  sections,
  authorInfo,
  contactInfo,
  mapUrl,
}) => {

  const { id } = useParams();

  const fetchData = () => {
    axios.get(`${BASE_URL}/blog/${id}`).then((response) => {
    console.log("response of blog details: " + response.data)
    }).catch((error) => {
    console.log("error: " + error)
  })
}

  
  useEffect(() => {
    fetchData();
  },[]);



  return (
    <>
      <section className="blog_details global_wrapper">
        <div className="container">
          <div className="blog_details__content">
            <div className="blog-details-img">
              <img src={banner} className="img-fluid" alt="blog-details-img" />
            </div>
            <div className="blog-details-content">
              <h3 className="mb-3">{title}</h3>

              <p className="my-4">{topDetails}</p>

              {<p className="my-4">{topDetails2 ? topDetails2 : null}</p>}

              <div
                className="entry-content clear"
                ast-blocks-layout="true"
                itemProp="text">
                {/* {sections.map((section, index) => (
                  <div key={index}>
                    <p>
                      <span style={{ fontWeight: 700 }}>{section.heading}</span>
                    </p>
                    <p>{section.content}</p>
                    <p>{section.content2 ? section.content2 : null}</p>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="map_wrapper mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="map_wrapper__left">
                <div className="map_wrapper__left-top">
                  <p>{authorInfo}</p>
                </div>
                <div className="map_wrapper__left-bottom">
                  <a href={`tel:${contactInfo.phone}`}>
                    <i className="bx bx-headphone" /> {contactInfo.phone}
                  </a>
                  <a href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                  <div className="map_flex">
                    <a href="impressum.php">Impressum</a>
                    <span>/</span>
                    <a href="data-privacy.php"> Datenschutz</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="map-enter">
                <iframe
                  src={mapUrl}
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Index;
