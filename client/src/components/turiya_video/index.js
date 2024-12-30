import React, { useEffect } from "react";
import LazyYouTube from "../youtube/LazyYouTube";
import axios from 'axios'

const index = () => {


  // const fetchData = () => {
  //   axios.get('http://127.0.0.1:7000/api/video_testimonials').then((response) => {
  //     console.log("data",response.data)
  //   }).catch((error) => {
  //     console.log("error", error)
  //   })
  // }
  

  // useEffect(() => {
  //   fetchData();
  // }, []);





  return (
    <>
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
                Bereich der Yogalehrer Ausbildungen an. Ob in Indien oder jetzt
                in Deutschland. Unsere Schüler stehen immer an erster Stelle für
                uns.
              </p>
            </div>
          </div>
        </div>
        <div className="global_content">
          <div className="container">
            <div className="turiya_video__grid">
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="KHidF_iZ3CA?si=WcHBgix9b8Y2CXpx" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Was sagen die Teilnehmer</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="KHidF_iZ3CA?si=WcHBgix9b8Y2CXpx" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="ZGxflR0n6Lk?si=6D7-Qov0irIHeR6q" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Riekje 200H Yogalehrer Ausbildung Mallorca.</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="ZGxflR0n6Lk?si=6D7-Qov0irIHeR6q" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="wzpeO39HHpc?si=reNHvyIeh8MRJEGN" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Theodora 200H Yogalehrer Ausbildung in Goa, Indien.</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="wzpeO39HHpc?si=reNHvyIeh8MRJEGN" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="rXFr_9hDlms?si=_RhMpmXbAcdroti4" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>
                  Vicki war eine außergewöhnliche Teilnehmerin in unserem
                  200-stündigen Yoga-Lehrer-Training.
                </h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <iframe
                    width={560}
                    height={315}
                    src="https://www.youtube.com/embed/azxo0otAdLA?si=vInLf3-414Xh_oys"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />{" "}
                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Mailin 500H Yogalehrer Ausbildung Feedback.</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="azxo0otAdLA?si=vInLf3-414Xh_oys" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="V61ykPvlfQ8?si=VDnZK-upcD3a1OPl" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Virginia 200H Yogalehrer Ausbildung Mallorca.</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="V61ykPvlfQ8?si=VDnZK-upcD3a1OPl" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="izCAn3uvYLo?si=RkgFS4UnrYk_ZOXB" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>200H Yogalehrerinnen Intensivausbildung Frankfurt</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="izCAn3uvYLo?si=RkgFS4UnrYk_ZOXB" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="4eJWfa4IaD8?si=kgglXCftxtFEqeHb" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Jenny 200H Yogalehrer Ausbildung Goa, Indien</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="4eJWfa4IaD8?si=kgglXCftxtFEqeHb" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="__zsp5HSjE8?si=90ym8EUYcZW7rsYC" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Dani Yogalehrer Ausbildung Mallorca</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="__zsp5HSjE8?si=90ym8EUYcZW7rsYC" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="sEVO75-2msA?si=ysqvZliuerKb1hte" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Dorit 200H Yogalehrer Ausbildung Goa, Indien</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="sEVO75-2msA?si=ysqvZliuerKb1hte" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="yT8hzUAffxE?si=K2nCt6YlCYHk-x4f" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Denise 200H Yogalehrer Ausbildung Goa, Indien</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="yT8hzUAffxE?si=K2nCt6YlCYHk-x4f" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="w_cCx6vnxck?si=n5Y_IskuCXorEfO8" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Erica 200H Yogalehrer Ausbildung Testimonial Goa, India</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="w_cCx6vnxck?si=n5Y_IskuCXorEfO8" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="NavCCeUc0pU?si=QBGUdrNXl7OpBicf" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>
                  Vielen Dank, Jasmin: Dein Testimonial macht den Unterschied!
                </h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="NavCCeUc0pU?si=QBGUdrNXl7OpBicf" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="I0pjxbAYLSE?si=acDk4WbdctKdY6Yj" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Turiya Yoga Ausbildung Testimonials 2022</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="I0pjxbAYLSE?si=acDk4WbdctKdY6Yj" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="3XcCOXmQadU?si=9VBcp6-YVgM85KEo" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Amelie Und Theodora Feedback Hatha Modul 1</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="3XcCOXmQadU?si=9VBcp6-YVgM85KEo" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="0nVgLroOP7c?si=2qZ_avX0bXa1y1A1" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Amelie 200H Yogalehrer Ausbildung Testimonial</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="0nVgLroOP7c?si=2qZ_avX0bXa1y1A1" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="xGhL7zU_Xu8?si=ekPWZKgxv60196EO" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Melli 200H Yogalehrer Ausbildung Mallorca Testimonial</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="xGhL7zU_Xu8?si=ekPWZKgxv60196EO" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="sv1vpDZCXWw?si=qN9PMmgcRi9THQJX" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Mahmoud 200H Yogalehrer Ausbildung Goa, Indien</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="sv1vpDZCXWw?si=qN9PMmgcRi9THQJX" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="5dPEfUjz3mM?si=1mG5nNbrF3dAAQE-" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Melina 200H Yogalehrer Ausbildung Testimonial</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="5dPEfUjz3mM?si=1mG5nNbrF3dAAQE-" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="mZDanKJtMXI?si=7f21niLMaYlUfBwz" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Jenni 200-Stunden-Yogalehrerausbildung Mallorca</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="mZDanKJtMXI?si=7f21niLMaYlUfBwz" />
                  </div>
                </div>
              </div>
              <div className="turiya_video__box">
                <div className="turiya_img__box youtube_feedback">
                  <i className="bx bx-play" />
                  <LazyYouTube videoId="W1JGeAxS6gQ?si=My-EI4eAA_z6TEfE" />

                  {/* <img src="assets/images/hqdefault.jpg" className="img-fluid" alt="hqdefault"> */}
                </div>
                <h6>Kompilation der Kundenstimmen | Indien</h6>
                <div className="turiya_video__box-yt">
                  <div className="turiya--yt">
                    <div className="turiya--yt-cancel">
                      <i className="bx bx-x" />
                    </div>
                    <LazyYouTube videoId="W1JGeAxS6gQ?si=My-EI4eAA_z6TEfE" />
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

export default index;
