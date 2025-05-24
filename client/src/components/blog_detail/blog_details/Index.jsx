import React from "react";
import "./blog.scss";

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
                {sections && sections.map((section, index) => (
                  <div key={index}>
                    <p>
                      <span style={{ fontWeight: 700 }}>{section.heading}</span>
                    </p>
                    <p>{section.content}</p>
                    <p>{section.content2 ? section.content2 : null}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map_wrapper mb-5">
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
      </section>
    </>
  );
};

export default Index;
