

import React, { useEffect, useState } from "react";
import LazyYouTube from "../youtube/LazyYouTube";
import axios from 'axios';
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

const Index = () => {
  const [videoId,setvideoId] = useState('')

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
              {visibleVideos.map((response, index) => (
                <div className="turiya_video__box" key={index}>
                  <div className="turiya_img__box youtube_feedback">
                    <i className="bx bx-play" data-bs-toggle="modal"
                      data-bs-target="#play_video_Modal1"
                      onClick={() => setvideoId(response.youtubeLink)}           style={{cursor: "pointer"}} />
                    <LazyYouTube
                      videoId={response.youtubeLink}
                      feedbackContent={response.feedbackContent}
                      feedbackType={response.feedbackType}
                      status={response.status}
                    />
                  </div>
                  <h6>{response.feedbackType}</h6>
                  <div className="turiya_video__box-yt">
                    <div className="turiya--yt">
                      <div className="turiya--yt-cancel">
                        <i className="bx bx-x" />
                      </div>
                      <LazyYouTube
                        videoId={response.youtubeLink}
                        feedbackContent={response.feedbackContent}
                        feedbackType={response.feedbackType}
                        status={response.status}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="youtube_video">
        <div
          className="modal fade"
          id="play_video_Modal1"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"> You Can Play and Pause Video</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <iframe
                  width={560}
                  height={315}
                  src={videoId && videoId}
                  // src="https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
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

