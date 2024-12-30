import React, { useEffect } from "react";
import "./blog.scss";
import blog1 from "../../assets/blog_images/335851754_5050.webp";
import blog2 from "../../assets/blog_images/747473592_5473.webp";
import blog3 from "../../assets/blog_images/39711230_2148285206.webp";
import blog4 from "../../assets/blog_images/214705608_2751.webp";
import blog5 from "../../assets/blog_images/19693981_213.webp";
import blog6 from "../../assets/blog_images/335851754_5050.webp";
import blog7 from "../../assets/blog_images/863118843_yogainstructor.png";
import blog8 from "../../assets/blog_images/294460738_6.webp";
import blog10 from "../../assets/blog_images/641002154_YogaStudio.png";
import blog11 from "../../assets/blog_images/623616116_yogainstructor.png";
import blog12 from "../../assets/blog_images/449748225_YogaAasan.png";
import blog13 from "../../assets/blog_images/800720718_Turiyayoga .png";
import blog14 from "../../assets/blog_images/564604414_Yoga-Therapie.png";
import blog15 from "../../assets/blog_images/459708484_VinyasaYoga.png";
import blog16 from "../../assets/blog_images/771298584_Untitleddesign (3).jpg";
import blog17 from "../../assets/blog_images/429627132_Yogalehrerprogramm.png";
import blog18 from "../../assets/blog_images/547027566_Yoga-TrainingfürKinder.png";
import blog19 from "../../assets/blog_images/63131748_YogaCoach.png";
import blog20 from "../../assets/blog_images/39711230_2148285206.webp";
import NewsShelter from "../NewsShelter";
import { Link } from "react-router-dom";
import axios from 'axios'
import { BASE_URL } from "../../config";
const Index = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);

  const getAllBlogs = () => {
    axios.get(`${BASE_URL}/blogs`).then((response) => {
      console.log("response", response)
    }).catch((error) => {
      console.log("eror",error)
    })
  }

  useEffect(() => {
    getAllBlogs();
  }, []);



  return (
    <>
      <div>
        <section className="banner_wrapper">
          <div className="banner_bg blog">
            <div className="banner-content container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner_bg__content" data-aos="fade-up">
                    <h1
                      className="animate__animated"
                      data-animation-in="animate__fadeInUp"
                      data-duration-in={1}>
                      Blog
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog section */}
        <section className="global_wrapper blog_wrapper">
          <div className="container">
            <div className="blog_wrapper__heading">
              <p>
                In unserem Turiya-Blog beschäftigen wir uns mit Yoga,
                Yoga-Philosophie, yogischer Anatomie und anderen Themen, die in
                unseren Yogalehrer-Ausbildungen in Deutschland erarbeitet
                wurden. Unsere Artikel geben praktische Tipps, wie wir Yoga in
                unseren Alltag integrieren können, um einen yogischen Lebensstil
                zu verbreiten. Gleichzeitig veröffentlichen wir ausführliche
                Artikel, die sich mit den häufigsten Missverständnissen und
                Zweifeln unserer Yogaschüler befassen
              </p>
            </div>
          </div>
          <div className="global_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog1} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>25-08-24</span>
                      <h6>Hatha Yoga erklärt | Turiya Yoga</h6>
                      <div className="read-more mt-3">
                        <Link to="/blog1" className="global_btn">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog2} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>25-08-24</span>
                      <h6>
                        Yoga zur Gewichtsabnahme – Ein kompletter Leitfaden |
                        Turiya Yoga
                      </h6>
                      <div className="read-more mt-3">
                        <Link
                          to="/blog2"
                          className="global_btn">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog3} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>25-08-24</span>
                      <h6>
                        Yoga zur Gewichtsabnahme – Ein vollständiger Leitfaden
                      </h6>
                      <div className="read-more mt-3">
                      <Link
                          to="/blog3"
                          className="global_btn">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog4} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>25-08-24</span>
                      <h6>Vorteile von Yoga</h6>
                      <div className="read-more mt-3">
                      <Link
                          to="/blog4"
                          className="global_btn">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog5} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>25-08-24</span>
                      <h6>Um ein zertifizierter Yoga-Lehrer zu werden</h6>
                      <div className="read-more mt-3">
                      <Link
                          to="/blog5"
                          className="global_btn">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog5} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>25-08-24</span>
                      <h6>Die Geschichte des Yoga in Indien</h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=6"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog6} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>25-08-24</span>
                      <h6>Yogis: vom Landstreicher zum Trend</h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=7"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog7} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>25-08-24</span>
                      <h6>
                        Die Vorteile von Yoga als Ergänzungstherapie bei Krebs
                      </h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=8"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog8} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>18-09-24</span>
                      <h6>
                        Wie du Yogalehrer wirst – Dein Leitfaden für die
                        Yoga-Lehrerausbildung
                      </h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=9"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog10} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>20-09-24</span>
                      <h6>
                        Die Wahl der richtigen Yoga-Akademie: Finde die beste
                        Option für Deine Praxis
                      </h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=10"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog11} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>23-09-24</span>
                      <h6>
                        Wesentliche Yoga-Fähigkeiten, die jeder Yoga-Lehrer
                        kennen muss
                      </h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=11"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog12} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>27-09-24</span>
                      <h6>
                        Vorteile der Ausübung von Yoga als tägliches Ritual
                      </h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=12"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog13} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>01-10-24</span>
                      <h6>Yoga-Lehrer-Ausbildung mit Turiya Yoga</h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=13"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog14} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>07-10-24</span>
                      <h6>
                        Yoga-Therapie – Ein einzigartiger Ansatz zur Heilung
                      </h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=14"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog15} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>08-10-24</span>
                      <h6>Bedeutung und Vorteile von Vinyasa Yoga</h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=15"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog16} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>11-10-24</span>
                      <h6>Hatha Yoga - Ein Leitfaden für Anfänger</h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=16"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog17} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>15-10-24</span>
                      <h6>
                        Ashtanga Yoga – Kernprinzipien, Vorteile und Geschichte
                      </h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=17"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog18} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>19-10-24</span>
                      <h6>
                        Turiya Yoga - Der beste Ort für Yogalehrer-Ausbildungs
                        programme
                      </h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=18"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog19} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>22-10-24</span>
                      <h6>
                        Turiya Yoga erklärt, wie wichtig Yoga für Kinder ist
                      </h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=20"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_card">
                    <div className="blog_img">
                      <img src={blog20} className="img-fluid" alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <span>25-10-24</span>
                      <h6>
                        Wie man ein erfolgreicher Yoga-Coach wird – Ein
                        Schritt-für-Schritt-Leitfaden von Turiya Yoga
                      </h6>
                      <div className="read-more mt-3">
                        <a
                          href="blog-details.php?blog_id=21"
                          className="global_btn">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map_wrapper">
          <div className="row">
            <div className="col-lg-3">
              <div className="map_wrapper__left">
                <div className="map_wrapper__left-top">
                  <p>
                    Emanuel Wintermeyer
                    <br />
                    Turiya Yoga
                    <br /> Herbartstrasse 12
                    <br />
                    60316 Frankfurt am Main
                  </p>
                </div>
                <div className="map_wrapper__left-bottom">
                  <a href="tel:+ 49 (0)69 - 20134987">
                    <i className="bx bx-headphone" /> + 49 (0)69 - 20134987
                  </a>
                  <a href="#">[email protected]</a>
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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5116.2361985505095!2d8.696904!3d50.121512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0bb4c915430b%3A0xcc73e3d7b3ea7b10!2sTuriya%20Yoga%20%7C%20Yogalehrerausbildung%20%7C%20Yoga%20Teacher%20Training%20Course!5e0!3m2!1sen!2sin!4v1722319511773!5m2!1sen!2sin"
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
        </section>
      </div>

      <NewsShelter />
    </>
  );
};

export default Index;
