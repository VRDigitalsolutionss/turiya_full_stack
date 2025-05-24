import React, { useState } from "react";
import "./teacherTraining1.scss";
import "./teacherTraining2.scss";
import BaliBannerImg from "../../assets/banner/yoga-bali.webp";
import goa_banner from "../../assets/banner/goa-banner.webp";
import SimpleBanner3 from "../banner/SimpleBanner3";
import img1 from "../../assets/bali_banner_img/goa_thumb.webp";
import img2 from "../../assets/bali_banner_img/himachal_thumb.webp";
import img3 from "../../assets/bali_banner_img/mallorca_thumb.webp";
import img4 from "../../assets/bali_banner_img/sampurna_thumb.webp";
import Ethics_lifestyle from '../../assets/yoga_teacher_training_images/Ethics_lifestyle.webp'
import goa_indien from "../../assets/images/training_goa/goa-indien.webp";
import NewsShelter from "../NewsShelter";
import Contact from "../Contact";
import Testimonial from "../Testimonial";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";
import SimpleBanner4 from '../banner/SimpleBanner4'
const Index = () => {

// =============================================================

const faqItems1 = [
  {
    question:
      "What happens if I miss a class or need to take a break during the yoga instructor training program?",
    answer: [
      "There are times when you might just miss the programs, but you do not have to worry at all as you can always communicate with the program coordinator instructor. There are several programs where we also offer recordings or sessions to help you catch up on the missed content.",
    ],
  },
];

const faqItems2 = [
  {
    question: "Can I get a refund if I need to withdraw from the yoga instructor training program due to unforeseen circumstances?",
    answer: [
      "The different policy will depend on the yoga instructor training program that you choose. In many cases you can get partial refills if you withdraw within a certain time frame before the program starts. You can check out our refund policy before you enroll in the program.",
    ],
  },
];

const faqItems3 = [
  {
    question: "How can I stay updated on the latest information about course updates, schedule changes, and other announcements?",
    answer: [
      "There are different communication channels available Like emails dedicated to student portals and social media platforms. After enrollment, you will receive login credentials where you can access your course material and receive important Announcements.",
  
    ],
  },
];

const faqItems4 = [
  {
    question:
      "Can international students enroll in your yoga teacher training courses, and what is the process for obtaining a visa, if required?",
    answer: [
      "Yes, international students can also enroll in yoga teacher training courses. It is advisable for you to check the specific visa requirements for the host country before you enroll in the program. Furthermore, reaching out to the program coordinator team for guidance is important.",
    ],
  },
];






    

 const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [activeIndex3, setActiveIndex3] = useState(null);
  const [activeIndex4, setActiveIndex4] = useState(null);
  const [activeIndex5, setActiveIndex5] = useState(null);
  const [activeIndex6, setActiveIndex6] = useState(null);
  const [activeIndex7, setActiveIndex7] = useState(null);
  const [activeIndex8, setActiveIndex8] = useState(null);


  const handleToggle = (section, index) => {
    if (section === 1) {
      setActiveIndex1(activeIndex1 === index ? null : index);
    } else if (section === 2) {
      setActiveIndex2(activeIndex2 === index ? null : index);
    }
    if (section === 3) {
      setActiveIndex3(activeIndex3 === index ? null : index);
    } else if (section === 4) {
      setActiveIndex4(activeIndex4 === index ? null : index);
    } else if (section === 5) {
      setActiveIndex5(activeIndex5 === index ? null : index);
    } else if (section === 6) {
      setActiveIndex6(activeIndex6 === index ? null : index);
    } else if (section === 7) {
      setActiveIndex7(activeIndex7 === index ? null : index);
    }else if (section === 8) {
      setActiveIndex8(activeIndex8 === index ? null : index);
    } 
  };


  return (
    <>
      <section id="yoga_teacher">
        <SimpleBanner4
          banner={goa_banner}
          heading={"Yoga Teacher Training"}
          para={"null"}
          videoLink={
            "https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"
          }
          buttonTxt="null"
        />

     
          <section className="global_wrapper about_wrapper" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    class="about_wrapper__left aos-init aos-animate"
                    data-aos="fade-up">
                    <h1>Yoga teacher training</h1>
                    <div class="kurse_link"></div>
                    <p class="p-0">
                
                      <p>Yoga teacher training represents a deep and conservative journey for you if you are looking
                        forward to deepening your yoga practice. You can share your passion for Wellness and guide
                        others on the path of self-discovery when you join our <b> ashtanga yoga teacher training.</b>
                        As the
                        demand for qualified yoga teachers increases, enrolling in a reputable program is very important
                        for you to embrace a fulfilling and purposeful career in the world of yoga.</p>
               <h6>Why choose our yoga teacher training?</h6>
                       <h6>Holistic approach</h6>
                                      <p> If you want to become a certified yoga instructor, then it is very important for you to choose the right program. Our training program stands out for its holistic approach to yoga education. Beyond the physical postures our curriculum also dives deep in the philosophical spiritual and mental aspects of yoga. The holistic approach ensures that you emerge as a pro yoga instructor and also as a well-rounded individual capable of guiding people on a comprehensive journey towards their own health and wellbeing. </p>
                                      <h6>Community support</h6>
                      <p>
                      When you choose to<b>become a yoga instructor</b>  with us you can expect a supportive and nurturing community. The transformative power of yoga goes beyond math and our focus on community support fosters connections that truly last a lifetime. Through group activities discussions and collaborative learning experience you can build a network of like minded people who share a passion for your yoga and personal growth.
                      </p>
                      <h6>Proven track record</h6>
                     
                      <p>
                      Once you decide to<b> become a yoga teacher</b> it is very important for you to choose a program with a proven track record. Our program boasts a history of successful graduates who have gone on to make a major contribution to the yoga community. The success stories of our alumni serve like a testament to the efficiency of our training and the positive impact it has on the lives of people who embark on this journey.
                      </p>
                      <h6>Variety of courses</h6>
                      <p>
                      Understanding that every individual's journey is unique we ensure that we offer a variety of yoga teacher training courses to serve different needs and preferences. Whether you are looking for an intensive residential program or a flexible part-time program our range of courses accommodate different schedules. From foundational 200-hour yoga programs to advanced 500-hour Advanced certifications we provide a comprehensive spectrum of courses to align with your aspirations.
                      </p>
                      <h6>Expert guidance</h6>
                      <p>
                      Our team of experienced and certified yoga instructors bring a lot of knowledge and expertise to the training environment. You can become yoga certified with us as you can get wisdom of traditional practices from our experienced team. Our faculty ensures that you receive expert guidance throughout your training. The mentorship provided by the seasoned experts improves your learning experience. It fosters a deep understanding of yoga principles and effective technique.
                      </p>
                      <h6>Flexible online learning</h6>
                      <p>
                      We offer the <b>best yoga teacher training </b>as we offer flexible online training programs. This accommodates the different lifestyles and commitments of aspiring yoga teachers. It allows you to pursue the passion for yoga without compromising your existing responsibilities. The online platform provides you with a dynamic and interactive learning experience maintaining the integrity of the program while offering convenience and accessibility.
                      </p>
                      <h6>Certification options</h6>
                      <p>We are completely committed to excellence and it goes beyond providing different certification options to suit your individual aspirations. Whether you are seeking A foundational 200-hour certification or you aim for advanced 500-hour credentials you can choose us undoubtedly. We align with the international standards ensuring that our certifications are recognized globally. When you choose us, you can get your hands on the best certified<b> yoga instructor course.</b></p>
                      <h6>Excellence in yoga education</h6>
                      <p>
                      Excellence in yoga education forms the core of our yoga program. We focus on the delivery of high-quality content ensuring that you receive a comprehensive and well-rounded education philosophy teaching methodologies and practical applications. The curriculum is specially designed to instill a deep appreciation for the transformative power of yoga. We empower you to inspire positive change in yourself and your future students.
                      </p>
                      

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
                <section className="global_wrapper third_section">
                  <div className="container">
                    <div className="global_wrapper__content" data-aos="zoom-in-up">
                      <div className="leaf">
                        <i className="bx bxs-leaf" />
                      </div>
                      <div className="main_heading">
                        <h1>Turiya Yoga bietet Yogalehrer-Ausbildungen in</h1>
                      </div>
                    </div>
                  </div>
                  <div className="global_content">
                    <div className="container">
                      <div className="yogalehrer-grid">
                        <div
                          className="third_section__box"
                          data-aos="fade-up"
                          data-aos-delay={100}>
                          <div className="box_img">
                            <img src={img3} className="img-fluid" alt="yoga" />
                          </div>
                          <div className="box_content">
                            <h3>Deutschland</h3>
                            <p>
                              Für diejenigen, die ihre Yogalehrerausbildung in einem
                              behaglichen Rückzugsort im eigenen Land absolvieren
                              möchten – umgeben von Quellen, frischer Luft und den
                              Wäldern des Taunus, ist das Sampurna Seminarhaus nur 30
                              Minuten von Wiesbaden und Mainz entfernt und somit ideal
                              erreichbar.
                            </p>
                            <div className="mehr--btn">
                              <Link   to='/yogalehrer-ausbildung-in-sampurna-seminarhaus'  >
                                MEHR
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="third_section__box"
                          data-aos="fade-up"
                          data-aos-delay={200}>
                          <div className="box_img">
                            <img
                              src={img4}
                              className="img-fluid"
                              alt="sampurna_thumb"
                            />
                          </div>
                          <div className="box_content">
                            <h3>Mallorca</h3>
                            <p>
                              Für all jene, die die berühmten Sandstrände Mallorcas
                              genießen möchten – bieten wir die Yogalehrer-Ausbildung
                              auf Mallorca an. Besuche uns und erlebe eine wundervolle
                              Zeit in der Turiya Yoga Finca. Unser Paket beinhaltet
                              erstklassige Verpflegung und Unterkunft.
                            </p>
                            <div className="mehr--btn">
                              <Link  to='/200h-yogalehrer-ausbildung-mallorca' >
                                MEHR
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="third_section__box"
                          data-aos="fade-up"
                          data-aos-delay={300}>
                          <div className="box_img">
                            <img
                              src={img1}
                              className="img-fluid"
                              alt="goa_thumb"
                            />
                          </div>
                          <div className="box_content">
                            <h3>Goa, Indien</h3>
                            <p>
                              Wenn du deine Yogaausbildung am Strand absolvieren
                              möchtest, jedoch auch einen Einblick in die Wurzeln des
                              Yoga erhalten willst, bieten wir dir die Möglichkeit, in
                              Goa, Indien, deine Ausbildung zu machen. Dort, vor der
                              Kulisse von Kokosnussplantagen und grünen Hügeln,
                              findest du zweifellos einige der schönsten Strände.
                            </p>
                            <div className="mehr--btn">
                            <Link  to='/yogalehrer-ausbildung-goa-indien' >
                                MEHR
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="third_section__box"
                          data-aos="fade-up"
                          data-aos-delay={400}>
                          <div className="box_img">
                            <img
                              src={img2}
                              className="img-fluid"
                              alt="himachal_thumb"
                            />
                          </div>
                          <div className="box_content">
                            <h3>Himachal, Indien</h3>
                            <p>
                              Himachal in Indien ist bekannt für seine fröhlichen
                              Menschen, die immergrüne Natur und die außerordentlich
                              frische Luft. Es ist ein herausragender Ort für die
                              Yoga-Praxis in Indien. Das Dorf Bhagsu, das etwa 2100
                              Meter über dem Meeresspiegel liegt und in der Nähe des
                              Haupttempels des Dalai Lama zu finden ist...
                            </p>
                            <div className="mehr--btn">
                            <Link  to='/yogalehrer-ausbildung-himalaya-indien' >
                                MEHR
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        <div className="container">
        <div className="training_bali__list">
  <h6>Upcoming Yoga Teacher Trainings</h6>
  <p>Our upcoming Kundalini yoga teacher training is a certified 200-hour program. You can embark on a transformative journey with us. You can immerse yourself in the fusion of traditional and modern online programs especially dedicated to training young professionals. Our online yoga teacher training program is recognized internationally and we have earned A certification through constant assessment. With courses in India, Germany and Spain we uphold high standards globally. You can experience a great shift in your daily routine starting with our early yoga practices in the serene embrace of nature. Our professional instructors will guide you through different asanas and meditation fostering A holistic approach to yoga. You can confidently teach worldwide carrying the essence of our transformative program no matter where you go. So, with us you can get your hands on the best online yoga teacher training.</p>
  <h6>Yoga Teacher Training Modules</h6>
  <p>When you choose our online yoga teacher training course you can get your hands on different types of training modules. These modules can shape the foundation of your knowledge and expertise.</p>
  <h6>Yoga philosophy</h6>
  <p>In our yoga instructor certification, learning about the essence of yoga philosophy is perfectly embedded in the training modules. The websites highlight a commitment towards the ancient teachings of yoga drawing inspiration from different texts like Bhagwat Gita. The philosophical foundation provides you with a profound framework of understanding the spiritual dimensions of yoga.</p>
  <h6>Anatomy and physiology</h6>
  <p>As we offer the best yoga instructor certification online we placed a major emphasis on the study of anatomy and Physiology we are highly committed to provide you with a comprehensive understanding of the human body mechanics and the impact of yoga postures on your physical well-being, the knowledge will equip you with all the skills to teach safely and adapt practices to the unique requirements of your bodies</p>
  <h6>Teaching methodology</h6>
  <p>The teaching methodology at yoga instructor classes is specially designed to help you make the most of the art and science of effective yoga instruction. The focus is all about creating engaging and inclusive classes that serve different needs of your students. We foster a sense of confidence and competence in you.</p>
  <h6>Practical application</h6>
  <p>The practical application models are available at our yoga instructor classes online as we focus on the importance of practical experience in leading yoga classes. You can engage in practice teaching sessions and receive constructive feedback and you are also encouraged to apply theoretical knowledge to real life teaching scenarios. The practical part ensures that you graduate with confidence and capability to lead the sessions.</p>
  <h6>Meditation and breathwork</h6>
  <p>Meditation and breathwork are very important parts of our yoga instructor course. We include different meditation techniques and pranayama practices. We focus on our transformative effects on mental clarity and emotional well-being. The meditation and breathwork modules contribute to a holistic approach towards yoga. We align with the ancient Yogi principles of balancing your mind, body and spirit.</p>
                 
                      <div className="row">
                        
                          <div className="col-sm-6">
                          <h6>Ethics and lifestyle</h6>
                          <p>We place a strong emphasis on ethical considerations and lifestyle aspects of yoga teaching. When you choose our yoga instructor course online you can be stress free as we focus on the importance of maintaining professional ethics and boundaries in teacher-student relationship. You are encouraged to embody the principle of yoga in your daily life fostering authenticity, integrity and commitment towards ethical conduct both on and off the mat.</p>   
                          </div>
                          <div className="col-sm-6">
                              
                              <img src={Ethics_lifestyle} className="img-fluid"/>
                          </div>
                      </div>
  
  <h6>Yoga Teacher Courses We Offer</h6>
  <p>We offer the best yoga instructor training program as we are completely committed to nurturing mindful and knowledgeable yoga instructors. Every course is perfectly crafted to cater to different aspirations and levels of expertise ensuring that you can embark on a transformative journey that aligns with your unique objectives .</p>
  <h6>200H yoga teacher training</h6>
  <p>Our foundational yoga teacher course sounds like a great introduction to the art and science of yoga instruction. The course is a special design for you if you are looking for a comprehensive understanding of yoga principles as a beginner. The course covers key components like yoga philosophy, anatomy and teaching methodology. You can emerge with a strong foundation ready to embark on your teaching journey with confidence and pro efficiency.</p>
  <h6>+300H yoga teacher training</h6>
  <p>If you are looking forward to deepening your knowledge and expanding your teaching skills, then you can go for a yoga teacher for seniors Course. The 300-hour yoga teacher training offers you enriching exploration building upon the foundation of the 200-hour course. The program deals in the advanced parts of yoga philosophy, specialized workshops and in-depth practical application. You can emerge with heightened expertise ready to guide students through more complex practices and customized classes to unique populations.</p>
  <h6>Yoga teacher training +400H</h6>
  <p>This yoga teacher certification course is especially designed for you if you are committed to mastering the art of yoga instruction. The comprehensive program integrates advanced teachings, specialized workshops and an in-depth exploration of meditation. You can undergo an immersive experience that refines your teaching methodologies and shows that you can create impactful and transformative yoga sessions for you no matter what your skill level</p>
  <h6>Yogalehrer Ausbildung 500H</h6>
  <p>It is one of the best yoga teacher courses online as it aligns with the international standards and serves you if you're seeking an in-depth and internationally recognized certification. The curriculum includes advanced yoga philosophy, anatomy teaching methodologies and practical applications providing you with a holistic understanding of yoga that goes beyond geographical boundaries.
  </p>
                      <h6>Yoga teacher for seniors</h6>
                      <p>You can go for yoga teacher training for seniors who truly want to learn everything about the basics of yoga for seniors. You can become a yoga instructor for seniors as the program equips you with the knowledge and skills to adapt yoga practices for seniors' mental clarity and emotional balance. It embraces the principles of inclusivity ensuring that yoga remains accessible to everyone.</p>
                      <h6>How I Can Enroll</h6>
                      <p>If you want to enroll for yoga alliance certification you can just follow the steps given here.</p>
  {/* about turiya */}
  <div>
    <div className="col-lg-12">
      <div className="about_turiya__right">
        <ul>
          <li>
          you can first visit the official website and explore the detailed information about yoga trainer certification. Our enrollment process is a special design to be user friendly.
          </li>
          <li>If you have any questions or queries you can contact our customer support team. They can familiarize you with course structures, duration and specific focus area. This will help you identify the best yoga trainer training program that aligns with your objectives and interests.</li>
          <li>We often conduct information sessions or webinars to provide you with an in-depth understanding of the yoga teacher training courses. You can attend all the sessions to interact with instructors and ask questions.</li>
          <li>All the yoga teacher training courses have specific requirements which can be found on our website. You can review the requirements carefully to ensure that you align with the given criteria.</li>
          <li>After submitting your application and required documentation for yoga training certification you must await confirmation from us. After acceptance on the program, you will receive payment instructions. You can follow the provided payment instructions to complete the course fee payment.</li>
          
        </ul>
      </div>
    </div>
  </div>
</div>
   </div>
   <section className="global_wrapper faq_wrapper" id="see_faq">
            <div className="container">
              <div className="faq_wrapper__content" data-aos="fade-up">
                {/* <div className="faq_heading">
                  <h3>Zertifizierung &amp; Teilnahmevoraussetzung</h3>
                </div> */}

                {/* ======================================================== */}
                {/* <div className="faq_box">
                  {faqItems.map((faq, index) => (
                    <div
                      key={index}
                      className={`faq_box__content ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleToggle(index)}>
                      <div className="question">
                        <div className="plus">
                          <i
                            className={`bx ${
                              activeIndex === index ? "bx-minus" : "bx-plus"
                            }`}
                          />
                        </div>
                        <h6>{faq.question}</h6>
                      </div>
                      {activeIndex === index && (
                        <div className="answer">
                          {faq.answer.map((paragraph, index) => (
                            <p key={index} className="mb-3">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div> */}

                {/* ============================== latest updated =============================== */}
                <div className="container">
                  <div className="faq_wrapper__content" data-aos="fade-up">
                    <div className="faq_heading">
                      <h3>FAQs Yoga Teacher Training</h3>
                    </div>
                    {/* Section 1 */}
                    <div className="faq_box">
                      {faqItems1.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex1 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(1, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex1 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex1 === index && (
                            <div className="answer">
                              {faq.answer.map((paragraph, idx) => (
                                <p key={idx} className="mb-3">
                                  <span
                                    style={{
                                      fontWeight:
                                        idx === 2 || idx === 3
                                          ? "normal"
                                          : "normal",
                                    }}>
                                    {paragraph}
                                  </span>
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="faq_box">
                      {faqItems2.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex2 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(2, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex2 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex2 === index && (
                            <div className="answer">
                              {faq.answer.map((paragraph, idx) => (
                                <p key={idx} className="mb-3">
                                  <span
                                    style={{
                                      fontWeight:
                                        idx === 0
                                          ? "bold"
                                          : "normal",
                                    }}>
                                    {paragraph}
                                  </span>
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Section 2 */}
              
              

                    {/* ======================================================== */}
                    <div className="faq_box">
                      {faqItems3.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex3 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(3, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex3 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex3 === index && (
                            <div className="answer">
                              

                          
                                
                                
                                  <p className="mb-3">Die 200H Yogalehrer Ausbildung von Turiya Yoga widmet sich den Stilen des Hatha Yoga (traditionell und modern, mit und ohne Verwendung von Requisiten), Vinyasa und gibt gleichzeitig einen kurzen Einblick in die Tradition des Ashtanga Vinyasa Yoga. Nachdem die Teilnehmer die 200h Yogalehrer Ausbildung erfolgreich abgeschlossen haben, sind sie mehr als bereit, Hatha und Vinyasa zu kombinieren und es geschickt zu unterrichten. Werfen wir einen Blick auf diese Traditionen und was du von ihr erwarten kannst, da die Terminologie heutzutage aufgrund von Informationsmangel und anderen, leider auch Marketingstrategien fließend geworden ist:</p>
                                  <p className="mb-3"><strong>Hatha Yoga </strong>ist die Mutter aller Yoga-übungen, die den Körper und insbesondere den Atem beeinflussen. Eine typische Praxis von Hatha ist eine langsame Praxis, die traditionelle Körperhaltungen (Asana), Atmungsbewusstsein Pranayama (Beibehaltung der Atemtechniken), Meditation und in einigen übungslinien Mantras kombiniert. In unserer heutigen Gesellschaft konzentrieren sich die Kurse jedoch oft nur auf die Körperhaltung. Der Stil verwendet auch Reinigungstechniken (Kriyas), gelegentlichen Gebrauch von Bandhas (Muskelmanipulationen, die als Energieblockaden angesehen werden) und spezielle Körper- und Atemmanipulationen, sogenannte Mudras.</p>
                                  <p className="mb-3"><strong>Ashtanga Vinyasa Yoga</strong> und seine Nachkommen Vinyasa sind moderne, rasante übungen, bei denen die Teilnehmer zwischen Körperhaltungen wechseln, während Atem und manchmal auch Drishti (Blick) in festgelegten Abfolgen synchronisiert werden. Der Ashtanga-Stil zählt Pattabhi Jois und sein Guru Krishnamacharya als die Gründer und hat Asana-übungssequenzen festgelegt, während Vinyasa Flow eine westliche Entwicklung ist, die dem Lehrer die Möglichkeit gibt, verschiedene Lehrsequenzen zu erstellen.</p>
                                  <p className="mb-3">Ein weiterer Schüler von Krishnamacharya und ein weiteres Juwel des modernen Yoga war BKS Iyengar. Iyengar entwickelte einen Hatha Yoga-Stil, der häufig Hilfsmittel verwendet und als Iyengar-Stil bezeichnet wird. Der Stil ist in der therapeutischen Yoga-Nische bekannt und hat weitere westliche Lehrer dazu inspiriert, andere inspirierte Traditionen wie Anusara Yoga zu entwickeln.</p>
                                  <p className="mb-3">
                                  Unser Programm deckt jedoch nicht den Iyengar-Stil ab, der sich offen auf die milimetrische Ausrichtung des Praktikers stützt und einen anderen Yogalehrer-Ausbildungsstil verlangt. Unsere Schulung behandelt die Verwendung von Requisiten und deren Verbindung zum Yoga als unterstützende Praxis für Wohlbefinden und Gesundheit. Unsere Yogalehrer Ausbildung zielen unter anderem darauf ab, ein tieferes Erleben der Körperhaltungen zu fördern und die Teilnehmer in unterschiedlichen Ausrichtungen und Perspektiven der Asana-Praxis zu erleuchten.
                                  </p>
                                </div>
                               
                            
                          )}
                        </div>


                        
                        
                      ))}
                    </div>
                    <div className="faq_box">
                      {faqItems4.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex4 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(4, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex4 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex4 === index && (
                            <div className="answer">
                              {faq.answer.map((paragraph, index) => (
                                <p key={index} className="mb-3">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
             

                   

            
                    {/* ============================================================= */}
                  </div>
                </div>
                {/* =========================================================================================== */}
              </div>
            </div>
          </section>

        <Testimonial />
        <Contact />
        <NewsShelter />
        </section>
    </>
  );
};

export default Index;
