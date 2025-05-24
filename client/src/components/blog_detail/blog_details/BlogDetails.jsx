import React, { useEffect, useState } from "react";
import "./blog.scss";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { BASE_URL, BASE_URL_IMAGE } from "../../../config";

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
  const [blog_detals, setBlogDetals] = useState('');



  const fetchData = () => {
    axios.get(BASE_URL + `/blog/slug/${id}`).then((response) => {
      console.log("response of blog details: ", response.data.data);

      setBlogDetals(response.data.data);
    }).catch((error) => {
      console.log("error: " + error)
    })
  }


  useEffect(() => {
    fetchData();
  }, []);



  console.log("Blog Details Details", blog_detals)



  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulating a fetch request to get the post data
    const postData = {
      title: "Sample Post Title",
      author: "John Doe",
      publish_date: "2024-12-02",
      categories: ["Technology", "AI", "Innovation"],
      tags: ["AI", "Machine Learning", "Deep Learning"],
      content: "<H3>Introduction to AI</H3><P>Artificial Intelligence (AI) is a branch of computer science that emphasizes the creation of intelligent machines that work and react like humans.</P><H3>Applications of AI</H3><P>AI can be applied in various fields such as healthcare, finance, robotics, and customer service. For instance, AI-powered chatbots are transforming the customer support industry.</P><H3>Challenges of AI</H3><P>Despite its advantages, AI faces challenges such as ethical concerns, data privacy issues, and the need for large amounts of data for training models.</P>",
      status: "published",
      meta_description: "An introduction to AI and its applications in modern industries like healthcare and finance.",
      image: "https://example.com/sample-image.jpg"
    };


    const postData2 = {
      title: "Sample Post Title",
      author: "John Doe",
      publish_date: "2024-12-02",
      categories: ["Technology", "AI", "Innovation"],
      tags: ["AI", "Machine Learning", "Deep Learning"],
      content: "<p>In der hektischen Welt des Yoga ragt Hatha Yoga wirklich als ein großartiger Zufluchtsort heraus, der Ihnen einen Weg bietet, Ihren Geist, Körper und Geist zu harmonisieren und der aus dem alten Indien stammt. Seine Bedeutung resoniert wirklich stark in der zeitgenössischen Praxis. Es bietet Ihnen einen ganzheitlichen Ansatz für das Wohlbefinden. In diesem Leitfaden können Sie eine Reise durch die Tiefen des Yoga antreten und seine Geschichte und Prinzipien entwirren. Hatha Yoga leitet sich von den Sanskrit-Wörtern “ha” ab, was die Sonne bedeutet, und “tha”, was den Mond bedeutet. Es symbolisiert die Vereinigung der Gegensätze und spiegelt das Gleichgewicht wider, das es in Ihnen zu etablieren sucht. Seine Wurzeln reichen bis in die alten indischen Schriften zurück, in denen es zum ersten Mal in Texten wie dem Hatha Yoga Pradipika erwähnt wurde. Im Laufe der vielen Jahre hat sich Hatha Yoga in großem Maße weiterentwickelt und sich an die verschiedenen kulturellen und gesellschaftlichen Veränderungen angepasst, dabei jedoch seine Essenz bewahrt, die die körperliche Erhaltung und das spirituelle Wohlbefinden fördert.</p><h5>I. Historischer Hintergrund</h5><P>Ein tiefes Eintauchen in den historischen Hintergrund von Hatha Yoga enthüllt seine erstaunliche Reise durch die Zeit. Entstanden aus dem fruchtbaren Boden des alten Indien wurde es von Weisen und Yogis genährt, die die Tiefen des menschlichen Bewusstseins erforschten. Durch Jahrhunderte der Verfeinerung hat Hatha Yoga wirklich Grenzen und kulturelle Barrieren durchdrungen und verschiedene Gemeinschaften weltweit durchdrungen.</P><H5>II. Prinzipien des Hatha Yoga</H5><P>Im Herzen von Hatha Yoga liegt das Prinzip des Ausgleichs gegensätzlicher Symbole der Sonne und des Mondes, die männliche und weibliche Energien repräsentieren. Die Vereinigung geht über die physische Welt hinaus und umfasst die Integration Ihres Körpers, Geistes und Geistes. Durch die Harmonisierung dieser Elemente können Sie eine transformative Reise zur Selbsterkenntnis und inneren Frieden antreten.</P><h5>III. Asanas (Yoga-Posen)</h5><p>Hatha Yoga bietet viele Yoga-Asanas oder -Posen, die wie Fahrzeuge für körperliches, mentales und spirituelles Wachstum wirken. Die Haltungen reichen von sanften Dehnungen bis hin zu herausfordernden Balancen, die Stärke, Flexibilität und Ausrichtung kultivieren. Sie können sich auch auf grundlegende Posen wie die Berghaltung, den herabschauenden Hund und die Kriegerhaltung konzentrieren. Sie bilden das Fundament der Hatha-Yoga-Praxis.</p><h5>IV. Pranayama (Atemkontrolle)</h5><p>Die Atemwahrnehmung ist ein sehr wichtiger Teil von Hatha Yoga, da sie wie eine Brücke fungiert, die Ihren Geist und Körper verbindet. Pranayama-Techniken nutzen die Kraft des Atems, um Ihren Geist zu beruhigen, Ihren Körper zu energetisieren und Ihr allgemeines Wohlbefinden zu verbessern. Durch Praktiken wie Kapalabhati können Sie Achtsamkeit entwickeln und eine tiefere Verbindung mit Ihrem inneren Selbst herstellen.</p><h5>V. Mudras (Gesten)</h5><p>Mudras oder symbolische Handgesten spielen eine sehr wichtige Rolle im Hatha Yoga. Sie erleichtern den Energiefluss in Ihrem Körper. Die feinen Bewegungen lenken Ihre Lebenskraft und stimulieren verschiedene physiologische und psychologische Prozesse. Einige der häufigsten sind Gyan Mudra und Chin Mudra. Sie verkörpern verschiedene Aspekte Ihres Bewusstseins und können in die Meditation integriert werden.</p>",
      status: "published",
      meta_description: "An introduction to AI and its applications in modern industries like healthcare and finance.",
      image: "https://example.com/sample-image.jpg"
    };


    setPost(postData);
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="blog_details global_wrapper">
        <div className="container">
          {/* <h4>blog detals</h4> */}
          <div className="blog_details__content">
            <div className="blog-details-img">
              <img src={BASE_URL_IMAGE + `/images/blogs/` + blog_detals.blogImage} className="img-fluid" alt="blog-details-img" />
            </div>


            <div className="shariff" data-title="Hatha Yoga erklärt | Turiya Yoga" data-info-url="http://ct.de/-2467514" data-backend-url="https://www.turiyayoga.de/blog/wp-content/plugins/shariff-sharing/backend/index.php" data-temp="/tmp" data-ttl={60} data-service="gftr" data-services="[&quot;googleplus&quot;,&quot;facebook&quot;,&quot;twitter&quot;,&quot;reddit&quot;,&quot;info&quot;]" data-image data-url="https://www.turiyayoga.de/blog/hatha-yoga-erklart-turiya-yoga/" data-lang="en" data-theme="colored" data-orientation="horizontal">
              <ul className="theme-colored orientation-horizontal">
                <li className="shariff-button googleplus"><a href="https://plus.google.com/share?url=https%3A%2F%2Fwww.turiyayoga.de%2Fblog%2Fhatha-yoga-erklart-turiya-yoga%2F" rel="popup" title="Share on Google+"><span className="fa fa-google-plus" /><span className="share_text">+1</span></a></li>
                <li className="shariff-button facebook"><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.turiyayoga.de%2Fblog%2Fhatha-yoga-erklart-turiya-yoga%2F" rel="popup" title="Share on Facebook"><span className="fa fa-facebook" /><span className="share_text">share</span></a></li>
                <li className="shariff-button twitter"><a href="https://twitter.com/intent/tweet?text=Hatha%20Yoga%20erkl%C3%A4rt%20%7C%20Turiya%20Yoga&url=https%3A%2F%2Fwww.turiyayoga.de%2Fblog%2Fhatha-yoga-erklart-turiya-yoga%2F" rel="popup" title="Share on Twitter"><span className="fa fa-twitter" /><span className="share_text">tweet</span></a></li>
                <li className="shariff-button reddit"><a href="//www.reddit.com/submit?url=https%3A%2F%2Fwww.turiyayoga.de%2Fblog%2Fhatha-yoga-erklart-turiya-yoga%2F" rel="popup" title="Share on Reddit"><span className="fa fa-reddit" /><span className="share_text">share</span></a></li>
                <li className="shariff-button info"><a href="http://ct.de/-2467514" target="_blank" title="more information"><span className="share_text"><i className="bx bx-info-circle" /></span></a></li>
              </ul>
            </div>


            <div className="blog-details-content">
              <h3 className="mb-3">{blog_detals.blogHeading}</h3>


              {/* {<p className="my-4">{topDetails2 ? topDetails2 : null}</p>} */}

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


          <div style={{ marginBottom: '0px' }}>

            <div
              dangerouslySetInnerHTML={{ __html: blog_detals.blogContent }}



            // Render HTML content
            />
            {/* <img src={post.image} alt={post.title} /> */}
          </div>

        </div>
      </section>
      <section className="map_wrapper mb-5">
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
    </>
  );
};

export default Index;
