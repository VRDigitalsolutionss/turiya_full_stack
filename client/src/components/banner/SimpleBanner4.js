import React from "react";
import { BASE_URL_IMAGE } from "../../config";
import { Link } from "react-router-dom";
const SimpleBanner = ({ banner, heading, para, videoLink }) => {

  console.log("video link of all courses", videoLink)


  return (
    <>
      <section className="banner_wrapper">
        <div
          className="banner_bg img-fluid"
          style={{ backgroundImage: `url(${banner})` }}>
          <div className="banner-content container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner_bg__content" data-aos="fade-up">
                  <h1
                    className="animate__animated"
                    data-animation-in="animate__fadeInUp"
                    data-duration-in={1}>
                    {heading}
                  </h1>
                  {para !== "null" && (
                    <p className="p-0 m-0">
                      <span
                        style={{
                          color: "rgb(33, 37, 41)",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: 16,
                        }}>
                        {/* {para} */}


                        <p

                          className="p-0 m-0"
                          //   style={{
                          //       color: "rgb(33, 37, 41)",
                          //       fontFamily: "Roboto, sans-serif",
                          //       fontSize: 16,
                          // }}



                          dangerouslySetInnerHTML={{ __html: para }} >



                        </p>
                      </span>
                      {/* <br /> */}
                    </p>
                  )}
                  <div
                    className="banner_bg__content-btn animate__animated"
                    data-animation-in="animate__fadeInUp"
                    data-duration-in={3}>
                    <div
                      className="video-btn mehr-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                      MEHR
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="youtube_video">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/*<iframe id="youtube-video" width="560" height="315"*/}
                {/*    src="https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"*/}
                {/*    title="YouTube video player" frameBorder="0"*/}
                {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                {/*    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>*/}
                {/*</iframe>*/}
                <iframe
                  id="youtube-video"
                  width={560}
                  height={315}
                  src={videoLink && videoLink}
                  // https://www.youtube.com/watch?v=z6z4-bnDhws
                  // src="https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"
                  // src="https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"
                  // src="https://www.youtube.com/embed/z6z4-bnDhws?si=z6z4-bnDhws"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleBanner;
