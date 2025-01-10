import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BannerGlobalWrapper5 = () => {
  // Define original video URLs
  const originalVideo1 = "https://www.youtube.com/embed/izCAn3uvYLo?si=G3ONv3CWqpgPietY";
  const originalVideo2 = "https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a";
  const originalVideo3 = "https://www.youtube.com/embed/m09ZGlZXq54?si=Q6TsbqQ-qeKboBoo";
  const originalVideo4 = "https://www.youtube.com/embed/Fixnb004sWk?si=o3XtHn4ZJ6nly4EN";
  const originalVideo5 = "https://www.youtube.com/embed/yT8hzUAffxE?si=2Q8KhIRiT5VESU-o";
  const originalVideo6 = "https://www.youtube.com/embed/z6z4-bnDhws?si=_xadRPMnyrLNH4uc";

  // Define videoId states for each modal
  const [videoId1, setVideoId1] = useState(originalVideo1);
  const [videoId2, setVideoId2] = useState(originalVideo2);
  const [videoId3, setVideoId3] = useState(originalVideo3);
  const [videoId4, setVideoId4] = useState(originalVideo4);
  const [videoId5, setVideoId5] = useState(originalVideo5);
  const [videoId6, setVideoId6] = useState(originalVideo6);

  useEffect(() => {
    // Function to handle resetting videoId for a specific modal
    const attachModalEvent = (modalId, setVideoId, originalVideo) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        const handleModalClose = () => setVideoId(null);
        modal.addEventListener("hidden.bs.modal", handleModalClose);

        // Cleanup event listener on component unmount
        return () => modal.removeEventListener("hidden.bs.modal", handleModalClose);
      }
    };

    // Attach event listeners to modals
    const cleanup1 = attachModalEvent("exampleModal", setVideoId1, originalVideo1);
    const cleanup2 = attachModalEvent("exampleModal2", setVideoId2, originalVideo2);
    const cleanup3 = attachModalEvent("exampleModal3", setVideoId3, originalVideo3);
    const cleanup4 = attachModalEvent("exampleModal4", setVideoId4, originalVideo4);
    const cleanup5 = attachModalEvent("exampleModal5", setVideoId5, originalVideo5);
    const cleanup6 = attachModalEvent("exampleModalLabel6", setVideoId6, originalVideo6);

    return () => {
      if (cleanup1) cleanup1();
      if (cleanup2) cleanup2();
      if (cleanup3) cleanup3();
      if (cleanup4) cleanup4();
      if (cleanup5) cleanup5();
      if (cleanup6) cleanup6();
    };
  }, []);

  // Reset videoId when null
  useEffect(() => {
    if (!videoId1) setVideoId1(originalVideo1);
    if (!videoId2) setVideoId2(originalVideo2);
    if (!videoId3) setVideoId3(originalVideo3);
    if (!videoId4) setVideoId4(originalVideo4);
    if (!videoId5) setVideoId5(originalVideo5);
    if (!videoId6) setVideoId6(originalVideo6);
  }, [videoId1, videoId2, videoId3, videoId4, videoId5, videoId6]);

  return (
    <>
      <section className="global_wrapper fifth_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="fifth_section__left aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={100}>
                <h3>AUSBILDUNG AUF HÖCHSTEM NIVEAU</h3>
                <h1>Das sagen unsere Teilnehmer</h1>
                <p>
                  Die Gründer von Turiya Yoga sind die Kursleiter unserer
                  Yogalehrer Ausbildungen und werden in jedem Schritt zusammen
                  mit anderen Experten für dich da sein. Bei uns verlierest du
                  dich nicht in der Menge. Hier weißt du genau, wer während
                  dieses transformativen Wegs wirklich für dich da sein wird.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="fifth_section__bg aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={200}>
                <div className="fifth_section__bg-img">
                  <img
                    src="https://api.turiyayoga.de/uploads/assets/new/yogamen.webp"
                    className="img-fluid"
                    alt="yogamen"
                  />
                </div>
                <div className="fifth_section__bg-content">
                  <p>
                    {" "}
                    "Manu’s Unterricht ist immer voller Liebe &amp; Energie für
                    alle!"
                  </p>
                  <h6>Chantal Berot, Frankreich</h6>
                  <div className="more--btn"  >
                    <Link to="/kundenstimmen">MEHR</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="fifth_section__bg aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={300}>
                <div className="fifth_section__bg-img">
                  <img
                    src="https://api.turiyayoga.de/uploads/assets/new/yogalady.webp"
                    className="img-fluid"
                    alt="yogalady"
                  />
                </div>
                <div className="fifth_section__bg-content">
                  <p>
                    {" "}
                    "Eine Erfahrung, die ich definitiv jedem empfehlen würde."
                  </p>
                  <h6>Jade Deanna Mc Sorley, UK</h6>
                  <div
                    className="mehr--btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalLabel6">
                    <button>
                      <i className="bx bx-play" />
                      VIDEO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                      src={videoId1}
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

          <div className="youtube_video">
            <div
              className="modal fade"
              id="exampleModal2"
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
                      id="youtube-video2"
                      width={560}
                      height={315}
                      src={videoId2}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="youtube_video">
            <div
              className="modal fade"
              id="exampleModal3"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel3"
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
                      id="youtube-video3"
                      width={560}
                      height={315}
                      src={videoId3}
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

          <div className="youtube_video">
            <div
              className="modal fade"
              id="exampleModal4"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel4"
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
                      id="youtube-video4"
                      width={560}
                      height={315}
                      src={videoId4}
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

          <div className="youtube_video">
            <div
              className="modal fade"
              id="exampleModal5"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel5"
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
                      id="youtube-video5"
                      width={560}
                      height={315}
                      src={videoId5}
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

          <div className="youtube_video">
            <div
              className="modal fade"
              id="exampleModalLabel6"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel6"
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
                      id="youtube-video6"
                      width={560}
                      height={315}
                      src={videoId6}
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
        </div>
      </section>
    </>
  );
};

export default BannerGlobalWrapper5;
