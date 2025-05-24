

import React, { useEffect, useState } from "react";
import LazyYouTube from "../youtube/LazyYouTube";
import axios from 'axios';
import { BASE_URL, BASE_URL_IMAGE } from "../../config";

const Index = () => {
  const [videoId, setVideoId] = useState('')

  const [data, setData] = useState([]); // Store all video data
  const [visibleVideos, setVisibleVideos] = useState([]); // Control which videos are shown
  const [batchIndex, setBatchIndex] = useState(0); // Track the current batch index

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(BASE_URL + "/video_testimonials");

      console.log('response of indian video', response.data.data);

      const filteredData = response && response.data.data.filter((item) => {
        return item.feedbackType === "Manu & Suzana als Ausbilder | Indien";
      });
      setData(filteredData);
    } catch (error) {
      console.error("Error fetching video data", error);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      // Initialize video batches
      showMoreVideos();
    }
  }, [data]);

  useEffect(() => {
    if (batchIndex > 0) {
      const timer = setTimeout(() => {
        showMoreVideos();
      }, batchIndex === 1 ? 10000 : 20000); // 10s for the second batch, 20s for the rest

      return () => clearTimeout(timer);
    }
  }, [batchIndex]);

  const showMoreVideos = () => {
    const videosToShow = 9 * (batchIndex + 1);
    setVisibleVideos(data.slice(0, videosToShow));
    setBatchIndex((prevIndex) => prevIndex + 1);
  };

  const extractVideoId = (url) => {
      // Match the pattern for YouTube embed links
      const regex = /(?:youtube\.com\/(?:embed|v)\/|youtu\.be\/)([^?&\s]+)/;
      const match = url.match(regex);
      return match ? match[1] : null;
    };
  
    useEffect(() => {
      const modal = document.getElementById("exampleModalTestimonialsIndian");
  
      if (modal) {
        const handleModalClose = () => setVideoId(null);
        modal.addEventListener("hidden.bs.modal", handleModalClose);
  
        return () => modal.removeEventListener("hidden.bs.modal", handleModalClose);
      }
    }, []);

  return (
    <>
      <section className="global_wrapper turiya_video2">
        <div className="container">
          <div className="global_wrapper__content" data-aos="zoom-in-up">
            <div className="leaf">
              <i className="bx bxs-leaf" />
            </div>
            <div className="main_heading">
              <h1>Manu &amp; Suzana als Ausbilder | Indien</h1>
              <p>
                Mach dir wegen der doppelt aufgeführten Gesichter keine Sorge.
                Da manche Videos Informationen über Manu und Suzana enthalten
                sind die doppelt aufgeführt :
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
                    data-bs-target="#exampleModalTestimonialsIndian"
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


        <div className="youtube_video">
          <div
            className="modal fade"
            id="exampleModalTestimonialsIndian"
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
      </section>
    </>
  );
};

export default Index;

