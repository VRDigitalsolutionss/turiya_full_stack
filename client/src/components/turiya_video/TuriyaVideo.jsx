import React, { useEffect, useState } from "react";
import LazyYouTube from "../youtube/LazyYouTube";
import axios from "axios";
import "./turiyaVideo.scss";
import { BASE_URL } from "../../config";

const TuriyaVideo = () => {
  const [data, setData] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState([]);
  const [batchIndex, setBatchIndex] = useState(0);
  const [showCollapse, setShowCollapse] = useState(true);
  const [videoId, setVideoId] = useState("");
  const [showVideoDialog, setShowVideoDialog] = useState(false);

  useEffect(() => {
    fetchData();
    const collapseTimer = setTimeout(() => {
      setShowCollapse(false);
    }, 18000);

    return () => clearTimeout(collapseTimer);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(BASE_URL + "/video_testimonials");
      const filteredData = response?.data?.data.filter(
        (item) => item.feedbackType === "Turiya Yogalehrer Ausbildung"
      );
      setData(filteredData);
    } catch (error) {
      console.error("Error fetching video data", error);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      showMoreVideos();
    }
  }, [data]);

  useEffect(() => {
    if (batchIndex > 0) {
      const timer = setTimeout(
        () => {
          showMoreVideos();
        },
        batchIndex === 1 ? 7000 : 18000
      );

      return () => clearTimeout(timer);
    }
  }, [batchIndex]);

  const showMoreVideos = () => {
    const videosToShow = 9 * (batchIndex + 1);
    setVisibleVideos(data.slice(0, videosToShow));
    setBatchIndex((prevIndex) => prevIndex + 1);
  };

  const handleModalClose = () => {
    setVideoId("");
    setShowVideoDialog(false);
  };

  const extractVideoId = (url) => {
    // Match the pattern for YouTube embed links
    const regex = /(?:youtube\.com\/(?:embed|v)\/|youtu\.be\/)([^?&\s]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    const modal = document.getElementById("exampleModalTestimonials");

    if (modal) {
      const handleModalClose = () => setVideoId(null);
      modal.addEventListener("hidden.bs.modal", handleModalClose);

      return () => modal.removeEventListener("hidden.bs.modal", handleModalClose);
    }
  }, []);

  return (
    <section className="global_wrapper turiya_video">
      <div className="container">
        <div className="global_wrapper__content" data-aos="zoom-in-up">
          <div className="leaf">
            <i className="bx bxs-leaf" />
          </div>
          <div className="main_heading">
            <h1>Turiya Yogalehrer Ausbildung</h1>
            <p>
              Schau die diese Videos zu unserer langjährigen Erfahrung im
              Bereich der Yogalehrer Ausbildungen an. Ob in Indien oder jetzt in
              Deutschland. Unsere Schüler stehen immer an erster Stelle für uns.
            </p>
          </div>
        </div>
      </div>
      <div className="global_content">
        <div className="container">
          <div className="turiya_video__grid">
            {visibleVideos.map((response, index) => {
              const videoIde = extractVideoId(response.youtubeLink);
              console.log("response", response)
              return (
                <div
                  className="turiya_video__box"
                  key={index}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalTestimonials"
                  onClick={() => {
                    setVideoId(response.youtubeLink);
                  }}>
                  <div className="turiya_img__box youtube_feedback">
                    <img
                      src={`https://img.youtube.com/vi/${videoIde}/hqdefault.jpg`}
                      alt="Video thumbnail"
                      width="560"
                      height="315"
                    // style={{ position: "absolute", top: 0, left: 0, cursor: "pointer" }}
                    />
                    <i
                      className="bx bx-play"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <h6>{response.feedbackContent}</h6>
                </div>)
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="youtube_video">
        <div
          className="modal fade"
          id="exampleModalTestimonials"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <iframe
                  id="youtube-video"
                  width={560}
                  height={315}
                  src={videoId}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default TuriyaVideo;
