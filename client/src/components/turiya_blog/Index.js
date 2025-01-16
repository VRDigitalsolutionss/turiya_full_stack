import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";
const Index = () => {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);


  const [blogs, setBlog] = useState("");

  const getAllBlogs = () => {
    axios
      .get(BASE_URL + "/blogs")
      .then((response) => {
        const allBlogs = response.data.data;
        // Filter only the active blogs
        const activeBlogs = allBlogs.filter((blog) => blog.status === "active");
        console.log("Filtered active blogs:", allBlogs);
        setBlog(activeBlogs); // Update the blog state variable with active blogs
      })
      .catch((error) => {
        console.log("Error fetching blogs:", error);
      });
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  console.log("blogs", blogs);

  function convertDate(dateString) {
    // Create a new Date object from the provided date string
    const date = new Date(dateString);

    // Get the date in the required format (DD-MM-YY)
    const day = String(date.getDate()).padStart(2, "0"); // Ensure 2-digit day
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
    const year = String(date.getFullYear()).slice(2); // Get last 2 digits of the year

    return `${day}-${month}-${year}`;
  }

  // Example usage
  const createdAt = "2024-12-02T07:04:31.527Z";
  console.log(convertDate(createdAt)); // Output: "02-12-24"




  //   const payload = {
  // `<p>Bald darauf traf ich Suzana, eine brasilianische Rucksackreisende, die eine einjährige Yogalehrer-Ausbildung am renommierten Kaivalyadhama-Institut absolviert hatte. Gemeinsam reisten wir nach Indien, Deutschland, Thailand und Brasilien, boten erschwingliche Yoga-Kurse an und vertieften unsere Praxis durch Iyengar- und Vinyasa Flow-Trainings. Währenddessen entstand unsere Vision, eine Yoga-Akademie zu gründen. Wir wollten bessere Yogalehrer ausbilden und verbesserte Programme anbieten.</p><p>Suzana hatte vor ihrer Indienreise bereits umfassende Yoga-Praxiserfahrung. Sie erkannte die Bedeutung eines klaren Verständnisses der Yoga-Geschichte und philosophischen Traditionen, die oft in Yogalehrerausbildungen vernachlässigt wurden. Wir fanden viele schlecht ausgebildete Yogalehrer in verschiedenen Ländern, was uns dazu motivierte, hochwertige Ausbildungen anzubieten.</p><p>Suzanas familiärer Hintergrund umfasste eine Vielzahl spiritueller Praktiken und tiefgründiger Perspektiven zur menschlichen Psyche, darunter japanisches Zen, christliche Mystik, jungianische Psychologie und Hypnotherapie. Diese Vielfalt inspirierte sie früh, das Potenzial des Glücks durch Yoga zu erkennen. Sie absolvierte ihre Hatha Yoga-Lehrerausbildung und wagte dann den Neuanfang in Indien, eine prägende Entscheidung für ihr Leben.</p><p>Unsere Zusammenkunft mit der indischen Kultur und unsere persönliche Begegnung veränderten uns nachhaltig. Turiya Yoga entstand aus diesem Austausch heraus, eine Mischung aus vielen Elementen, geschaffen von leidenschaftlichen Yogalehrern. Nach erfolgreichen internationalen Ausbildungen in Indien sind wir nun bereit, unsere Programme auch in Deutschland anzubieten.</p><p>Wir gründeten diese Akademie als Antwort auf eine Welt, in der Yogalehrerausbildungen oft vernachlässigt werden. Trotz des florierenden Yoga-Geschäfts verdient dieser Beruf Respekt und Anerkennung. Unsere Akademie bietet eine sichere Lernumgebung, qualitativ hochwertigen Unterricht und hat zahlreichen Schülern geholfen, selbstbewusste internationale Yogalehrer zu werden.</p><p>Unsere Mission ist es, einen integrativen Gesundheitsstil zugänglich zu machen und Menschen zu vereinen, die die uralte Schule der Selbsterkenntnis lernen, lehren und erleben möchten. Die Akademie fördert den ehrlichen Austausch zwischen Lehrern, Praktizierenden, Studenten und unterstützenden Unternehmen.</p>`
  //   };



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
                {/* blogContent
: 
"In der hektischen Welt des Yoga ragt Hatha Yoga wirklich als ein großartiger Zufluchtsort heraus, der Ihnen einen Weg bietet, Ihren Geist, Körper und Geist zu harmonisieren und der aus dem alten Indien stammt. Seine Bedeutung resoniert wirklich stark in der zeitgenössischen Praxis. Es bietet Ihnen einen ganzheitlichen Ansatz für das Wohlbefinden. In diesem Leitfaden können Sie eine Reise durch die Tiefen des Yoga antreten und seine Geschichte und Prinzipien entwirren. Hatha Yoga leitet sich von den Sanskrit-Wörtern “ha” ab, was die Sonne bedeutet, und “tha”, was den Mond bedeutet. Es symbolisiert die Vereinigung der Gegensätze und spiegelt das Gleichgewicht wider, das es in Ihnen zu etablieren sucht. Seine Wurzeln reichen bis in die alten indischen Schriften zurück, in denen es zum ersten Mal in Texten wie dem Hatha Yoga Pradipika erwähnt wurde. Im Laufe der vielen Jahre hat sich Hatha Yoga in großem Maße weiterentwickelt und sich an die verschiedenen kulturellen und gesellschaftlichen Veränderungen angepasst, dabei jedoch seine Essenz bewahrt, die die körperliche Erhaltung und das spirituelle Wohlbefinden fördert."
blogHeading
: 
"Hatha Yoga erklärt | Turiya Yoga"
blogImage
: 
"1733123071495-214705608_2751.webp"
createdAt
: 
"2024-12-02T07:04:31.527Z"
status
: 
"active"
updatedAt
: 
"2024-12-02T07:04:31.527Z" */}
                {blogs &&
                  blogs.map((blog, index) => {
                    return (
                      <div className="col-lg-4" key={index}>
                        <div className="blog_card">
                          <div className="blog_img">
                            <img
                              src={
                                BASE_URL_IMAGE + `/images/blogs/` +
                                blog.blogImage
                              }
                              className="img-fluid"
                              alt="blog_img "
                            />
                          </div>
                          <div className="blog_content">
                            <span>{convertDate(blog.createdAt)}</span>
                            <h6>{blog.blogHeading}</h6>
                            <div className="read-more mt-3">
                              <Link
                                to={`/blog-detail/${blog._id}`}
                                className="global_btn">
                                Read more
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                {/* ======================================================================= */}
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
                  <div className="map_flex">
                    <Link to="/impressum">Impressum</Link>
                    <span>/</span>
                    <Link to="/datenschutz">Datenschutz</Link>
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
