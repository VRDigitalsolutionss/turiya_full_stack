import React, { useState } from "react";
import "./yogateacherTrining.scss";
import "./trainingbali.scss";
import BaliBannerImg from "../../assets/banner/yoga-bali.webp";
import goa_banner from "../../assets/banner/goa-banner.webp";
import SimpleBanner3 from "../banner/SimpleBanner3";
import img1 from "../../assets/bali_banner_img/goa_thumb.webp";
import img2 from "../../assets/bali_banner_img/himachal_thumb.webp";
import img3 from "../../assets/bali_banner_img/mallorca_thumb.webp";
import img4 from "../../assets/bali_banner_img/sampurna_thumb.webp";
import manu_img from '../../assets/yoga_teacher_training_images/manu_img.webp'
import goa_indien from "../../assets/images/training_goa/goa-indien.webp";
import NewsShelter from "../NewsShelter";
import Contact from "../Contact";
import Testimonial from "../Testimonial";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";

const YogaTeacherTrainingBali = () => {
  // =============================================================

  const faqItems1 = [
    {
      question:
        "Is the Yoga Teacher Certification recognized globally, and what accreditation does it carry?",
      answer: [
        "Yes, our yoga teacher certification is globally recognized. We have accreditation from reputable yoga alliances. We ensure that your certification is valid globally. The best part is that our curriculum meets rigorous standards providing you with a certification that is respected and valued in the international yoga community.",
      ],
    },
  ];

  const faqItems2 = [
    {
      question:
        "What styles of yoga are covered in the Yoga Instructor Training in Bali?",
      answer: [
        "When you choose our yoga instructor training in Bali, we ensure that you learn about different yoga styles including hatha yoga, yin yoga and a lot more. The comprehensive approach allows you to explore different styles ensuring a well-rounded understanding and the ability to adapt your teachings to different target audiences.",
      ],
    },
  ];

  const faqItems3 = [
    {
      question:
        "Do I need prior yoga experience to enroll in a Yoga Instructor Course in Bali?",
      answer: [
        "No, you do not need any prior experience to enroll in our yoga instructor course. Our courses are especially designed to accommodate practitioners at all levels from beginners to advanced. Whether you are starting your yoga journey or looking forward to deepening your practice, our training provides you with a supportive environment.",
      ],
    },
  ];

  const faqItems4 = [
    {
      question:
        "Are accommodations included in the course fees for Yoga Instructor Training in Bali?",
      answer: [
        "Accommodation is available as a part of the package. Our selected accommodations aligned with the holistic campaigns of Bali improving your overall training journey.",
      ],
    },
  ];

  const faqItems5 = [
    {
      question:
        "Can I extend my stay in Bali after completing the Yoga Instructor Course, and do you assist with travel arrangements?",
      answer: [
        "Yes of course you can choose to extend your stay in Bali to further absorb the beauty and culture of the island. We can provide your assistance with some travel arrangements ensuring A seamless transition if you wish to explore Bali.",
      ],
    },
  ];

  const faqItems6 = [
    {
      question:
        "What safety measures are in place for participants during their stay in Bali for the Yoga Instructor Training?",
      answer: [
        "The safety and well-being of our participants is very important. We align with strict safety standards including secure accommodations, transportation arrangements and guidelines for your personal safety. Our team is available all the time to address any concerns.",
      ],
    },
  ];

  const faqItems7 = [
    {
      question:
        "Is the course fee inclusive of meals, and are there options for dietary preferences during the Yoga Instructor Course in Bali?",
      answer: [
        "Yes, the course fee also includes Wholesome and nourishing meals. We serve different dietary preferences like vegetarian, vegan and gluten free options. Our objective is to provide you with a transformative learning experience and also nourishing and a balanced culinary journey.",
      ],
    },
  ];

  const faqItems8 = [
    {
      question:
        "Can I pay the course fees in installments, and are there any discounts or scholarships available?",
      answer: [
        "We understand the financial considerations of our participants. You can get flexible payment options like installment plans. Furthermore, we also offer some discounts and scholarships. You can connect with our admission team to explore the options that align with your needs.",
      ],
    },
  ];

  const faqItems9 = [
    {
      question:
        "Are the instructors fluent in English, and how do they cater to participants with different language backgrounds?",
      answer: [
        "All our instructors are fluent in English, and we ensure effective communication during the training. If you come from a different language background you don't have to worry as we provide additional support including language assistance and supplementary materials to improve your understanding.",
      ],
    },
  ];
  const faqItems10 = [
    {
      question:
        "What is the cancellation policy, and are there considerations for unforeseen circumstances affecting travel plans?",
      answer: [
        "The cancellation policies are especially designed to accommodate unforeseen circumstances. We offer flexibility and understanding in various situations providing your options for rescheduling or getting a refund.",
      ],
    },
  ];
  const faqItems11 = [
    {
      question:
        "What cultural experiences can participants expect during the Yoga Instructor Training in Bali?",
      answer: [
        "The yoga instructor training in Bali goes beyond math offering new cultural immersion experiences. You can expect measures to go to local temples, traditional Balinese ceremonies and interactions with the vibrant local community. Cultural integration adds a unique dimension to your training.",
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
  const [activeIndex9, setActiveIndex9] = useState(null);
  const [activeIndex10, setActiveIndex10] = useState(null);
  const [activeIndex11, setActiveIndex11] = useState(null);

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
    } else if (section === 8) {
      setActiveIndex8(activeIndex8 === index ? null : index);
    } else if (section == 9) {
      setActiveIndex9(activeIndex9 === index ? null : index);
    } else if (section == 10) {
      setActiveIndex10(activeIndex10 === index ? null : index);
    } else if (section == 11) {
      setActiveIndex11(activeIndex11 === index ? null : index);
    }
  };





  return (
    <>
      <section id="yoga_teacher_training_bali">
        <SimpleBanner3
          banner={BaliBannerImg}
          heading={"Yoga Teacher Training Bali"}
          para={"null"}
          videoLink={
            "https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"
          }
          buttonTxt=" KUNDENSTIMMEN VIDEO "
        />

        <section className="global_wrapper about_wrapper" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  class="about_wrapper__left aos-init aos-animate"
                  data-aos="fade-up">
                  <h1>Yoga Teacher Training Bali</h1>
                  <div class="kurse_link"></div>
                  <p class="p-0">
                    <p>
                      Embarking on a yoga instructor course Bali goes way beyond
                      that just a certification process. It is actually an
                      odyssey of self-discovery and transformation. Nestled in
                      the heart of Indonesia Bali serves like a mystical canvas
                      where ancient yogic wisdom meets the vibrant energy of the
                      tropics. You enter a world where the practice of yoga goes
                      beyond the physical postures as you step onto the island
                      of gods.
                    </p>

                    <p>
                      Bali is often known as islands of gods radiating a unique
                      energy that draws seekers from different parts of the
                      world. The amazing destination attracts people on the path
                      of self-realization. It offers you the right blend of
                      natural beauty, cultural richness and spiritual ambiance
                      which is unparalleled. The allure of Bali goes beyond its
                      lush landscape’s pristine beaches, but it also dives deep
                      in the reverence it holds for holistic well-being. It is a
                      perfect backdrop for immersive yoga teacher training
                      experience
                    </p>
                    <h6>Why Us for Yoga Teacher Training in Bali</h6>
                    <h6>Sacred setting for transformation</h6>
                    <p>
                      Yoga instructor training Bali Offers you sacred landscapes
                      which creates a perfect setting for your transformational
                      journey. Our training takes place in carefully chosen
                      locations that align with the island’s energy, it provides
                      you with a conducive space for self-discovery and
                      learning.
                    </p>

                    <p>
                      Die Ausbildung an der Turiya Yoga Akademie basiert sowohl
                      auf traditionellem als auch modernem Hatha Yoga, wobei
                      Requisiten (Props) umfassend und effektiv eingesetzt
                      werden. Diese Vorbereitung ermöglicht es dir, dich
                      weiterzuentwickeln und in moderne, fließende Praktiken
                      tiefer einzutauchen. Nach Abschluss der
                      200-Stunden-Yogalehrerausbildung wirst du bestens darauf
                      vorbereitet sein, den Anforderungen eines Yogalehrers
                      gerecht zu werden. Die zusätzliche 300-Stunden-Ausbildung
                      vermittelt dir spezialisierte Werkzeuge und Fähigkeiten,
                      sodass du am Ende des gesamten Programms nicht nur
                      kompetent, sondern auch kreativ und vielseitig in deinem
                      Yoga-Unterricht agieren kannst.
                    </p>
                    <h6>Experienced and authentic teachers</h6>
                    <p>
                      Our team of instructors are highly experienced and also
                      deeply rooted in the authentic teachings of yoga with the
                      commitment towards imparting both traditional wisdom and
                      modern insights. They will guide you on a journey which
                      goes beyond the asanas, it is all about embracing the
                      holistic essence of yoga.
                    </p>
                    <h6>Holistic curriculum</h6>
                    <p>
                      Our curriculum is perfectly crafted, a pastry that
                      includes physical postures, meditation philosophy, anatomy
                      and the art of teaching balancing tradition with modern
                      understanding. We ensure that you graduate as a certified
                      instructor and of course a well-rounded practitioner with
                      a profound understanding of yoga.
                    </p>
                    <h6>Cultural immersion</h6>
                    <p>
                      The vibrant culture of Bali becomes an integral part of
                      your training. You can immerse yourself in the ritual
                      ceremonies and local customs of the island allowing the
                      rich cultural tapestry to improve the yogic journey. You
                      can visit the temples and check out the traditional
                      interactions with the local community which provide your
                      holistic appearance which go beyond the mat. Nature as
                      your sanctuary
                    </p>
                    <h6>Nature as your sanctuary</h6>
                    <p>
                      The natural beauty of Bali becomes our sanctuary for
                      practice. Whether surrounded by lush rice terraces
                      practicing on pristine beaches or amid the tranquility of
                      the rainforest the islands unit landscapes become a very
                      important part of your daily experience
                    </p>
                    <div className="row">
                      <div className="col-sm-7">

                      <h6>Small group dynamics</h6>
                    <p>
                      We truly believe in the power of personal connection. Our
                      training fosters a sense of community with small class
                      size allowing you to get customized attention, open
                      communication and a supportive network that goes beyond
                      the duration of the program.
                    </p>
                    <h6>Practical teaching opportunities</h6>
                    <p>
                      The opportunity for practical teaching is integral to our
                      program. You will be guided by our experienced
                      instructors, and you can get hands-on experience refining
                      your teaching skills and building the confidence to lead
                      your own classes after certification.
                    </p>
                    <h6>Culinary exploration</h6>
                    <p>
                      The culinary offerings of Bali offer a great treat for
                      your senses. Our program also includes culinary
                      explorations so you can introduce yourself to the Balinese
                      flavors and nutrition that aligned with the yogic
                      principles nourishing your mind and body
                    </p>
                    <h6>Post training support and community</h6>
                    <p>
                      Graduating from our program marks the beginning of a
                      lifelong journey. We offer post training support resources
                      and a global community network which ensures statistics
                      continue to evolve and share the transformative power of
                      yoga no matter where you go.
                    </p>

                      </div>
                      <div className="col-sm-5 d-flex justify-content-end">
                        <div>
                        <img src={manu_img} className="img-fluid" />
                        </div>




                      </div>
                    </div>
                   
                    <h6>Upcoming yoga teacher training programs in Bali</h6>
                    <p>
                      You can embark on a transformative journey with our yoga
                      teacher certification Bali and also check out our upcoming
                      yoga teacher training programs in the enchanting paradise
                      of Bali. The tropical heaven is known for its spiritual
                      energy and natural beauty. It provides you with the right
                      backdrop for diving deep into the essence of yoga.
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
            <h6>Yoga Teacher Training Modules</h6>
            <h6>Foundations of yoga philosophy </h6>
            <p>
              In the foundational module of our yoga instructor course Bali, you
              can dive deep into the philosophical underpinnings of yoga. The
              module draws from ancient texts like yoga sutras and the
              Upanishads. You can get inside the 8 limbs of yoga to understand
              how the principles work like a guide for a meaningful and
              purposeful life.
            </p>
            <h6>Anatomy and Physiology for yogis</h6>
            <p>
              For any yoga practitioner or instructor, it is very important for
              you to understand the human body. Our anatomy and Physiology
              module is especially designed for yogis providing a comprehensive
              overview of the skeletal muscular and the nervous system. You can
              dive deep into the biomechanics of yoga asanas to explore how each
              posture impacts your body the importance of alignment for both
              safety and efficiency.
            </p>
            <h6>Asanas</h6>
            <p>
              This module focuses on the physical practice of yoga. You can
              learn about the correct alignment for different poses. You can
              also explore the modifications for different body types and
              abilities and dubbed the practical sessions to allow for hands-on
              experience. This will make it very easy for you to make the most
              of your skills. The focus is placed on cultivating awareness and
              sensitivity when guiding students through different postures.
            </p>
            <h6>Pranayama and breath awareness</h6>
            <p>
              The breath is the bridge between your mind and body. In this
              module you can understand pranayama, the practice of breath
              control. You can learn about different practices like Nadi
              shodhana and kapal bhakti. At the same time, you can explore the
              science behind the effects on your nervous system. Breathe
              awareness becomes a very important part in improving your overall
              yoga practice and deepening the connection between your mind and
              body.
            </p>
            <h6>Meditation and mindfulness practices</h6>
            <p>
              Meditation is the heart of any yogic practice, especially for
              self-realization. You will be guided through different techniques
              like mindfulness meditation, love kindness meditation and mantra
              meditation. The module explores the benefits of meditation for
              mental well-being stress reduction and cultivating A focused and a
              calm mind
            </p>
            <h6>Teaching methodology</h6>
            <p>
              This module equips you with the skills that you need to become
              effective and compassionate about your file structure. Some of the
              most important topics include sequencing lesson planning and
              creating a supportive environment for practical teaching
              opportunities allow you to apply theoretical knowledge and receive
              constructive feedback
            </p>
            <h6>Yoga ethics and lifestyle</h6>
            <p>
              When you join our yoga instructor training in Bali you can explore
              the ethical principles of yoga and how they can be applied off the
              map. Some of the topics include yogic diet conscious living and
              the role of yoga instructors in fostering a positive and
              supportive community.
            </p>
            <h6>Specialized yoga practices</h6>
            <p>
              The module serves different interests within the yoga spectrum.
              You can have the opportunity to explore specialized practices like
              prenatal yoga, yoga for seniors and therapeutic applications of
              yoga.
            </p>
            <h6>Yoga Teacher Courses We Offer In Bali</h6>
            <p>
              We offer a huge range of yoga teacher courses in Bali which are
              especially designed to serve practitioners at every stage of their
              yoga journey. From foundational teachings to advanced practices
              our courses are especially designed to provide you a holistic
              understanding of yoga ensuring that you gain a certification and
              also deepen your connection with the profound teachings of this
              amazing discipline.
            </p>
            <h6>200H yoga teacher training</h6>
            <p>
              In our 200-hour yoga teacher training we will lay the foundation
              for aspiring yoga instructors. It is a comprehensive exploration
              of yoga fundamentals covering philosophy anatomy and the teaching
              methodologies. If you want to refine your skills or you just want
              to start your journey in yoga this course provides you with a
              solid base for your journey.
            </p>
            <h6>+300H yoga teacher training</h6>
            <p>
              If you are seeking to improve your practice and dive deep into the
              details of yoga, our 300-hour yoga teacher training is the next
              step. It is built upon the foundational teachings and the advanced
              course explores advanced pranayama meditation and the art of
              teaching with greater depth. It is a great opportunity for you to
              refine your skills, get a profound understanding and emerge as a
              more confident and capable yoga instructor.
            </p>
            <h6>Yoga teacher training +400H</h6>
            <p>
              When you join yoga teacher certification Bali you can get your
              hands on a 400 hours yoga teacher training course. It combines the
              curriculum of 200 hour and 300-hour courses. This program is your
              best bet if you aspire to become a certified instructor and also
              you want to master the advanced aspects of yoga practice and
              teaching. It is a transformative journey that goes beyond ability.
              It basically paves the way for a holistic journey.{" "}
            </p>
            <h6>Yoga teacher for seniors</h6>
            <p>
              Our yoga teacher for seniors’ courses Is especially designed to
              adapt yoga practices to the unique needs of seniors. You need to
              know that the specialized training covers modifications and
              therapeutic approaches ensuring that you can create a safe and
              beneficial yoga experience for senior citizens. It is a great
              opportunity to make the profound benefits of yoga accessible to
              everyone.
            </p>
            <h6>How I Can Enroll</h6>
            {/* about turiya */}
            <div>
              <div className="col-lg-12">
                <div className="about_turiya__right">
                  <ul>
                    <li>
                      You need to take some time out to export the details of
                      every course that we offer. You can understand the
                      curriculum prerequisites the outcome to determine which
                      course aligns with your aspirations. You need to know that
                      every course is unique, serving different levels of
                      experience and interest.
                    </li>
                    <li>
                      You can reach out to our knowledgeable and friendly
                      admissions team. Whether you have questions about the
                      curriculum, or the application process, our experts are
                      always here to help you out.
                    </li>
                    <li>
                      Once you have chosen the course that resonates with you
                      can complete the online application form, provide the
                      important details and ensure accuracy in your personal
                      information preferences. This step initiates the
                      enrollment process and allows us to understand your
                      background and objectives.
                    </li>
                    <li>
                      After receiving your application our admission team will
                      review it instantly. You can expect clear communication
                      from us.
                    </li>
                    <li>
                      After acceptance on the program, you will receive details
                      on securing your spot, submitting your deposit or
                      completing the important administrative steps.{" "}
                    </li>
                    <li>
                      Once your step is secured you will receive a comprehensive
                      three course package. This includes essential information
                      about the course recommended preparatory practices and
                      details about accommodation.
                    </li>
                    <li>
                      As the course commencement date approaches you can immerse
                      yourself in anticipation of the transformative journey
                      ahead. You can prepare your mind and body and embrace the
                      excitement of joining the community of like minded people.
                    </li>
                    <li>
                      After arrival in Bali, you will be welcomed in our
                      supportive and vibrant community. Our team will guide you
                      through the orientation process ensuring that you feel
                      comfortable and ready to begin your yoga teacher training
                      adventure.
                    </li>
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
                                activeIndex1 === index ? "bx-minus" : "bx-plus"
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
                                activeIndex2 === index ? "bx-minus" : "bx-plus"
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
                                    fontWeight: idx === 0 ? "bold" : "normal",
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
                                activeIndex3 === index ? "bx-minus" : "bx-plus"
                              }`}
                            />
                          </div>
                          <h6>{faq.question}</h6>
                        </div>
                        {activeIndex3 === index && (
                          <div className="answer">
                            <p className="mb-3">
                              Die 200H Yogalehrer Ausbildung von Turiya Yoga
                              widmet sich den Stilen des Hatha Yoga
                              (traditionell und modern, mit und ohne Verwendung
                              von Requisiten), Vinyasa und gibt gleichzeitig
                              einen kurzen Einblick in die Tradition des
                              Ashtanga Vinyasa Yoga. Nachdem die Teilnehmer die
                              200h Yogalehrer Ausbildung erfolgreich
                              abgeschlossen haben, sind sie mehr als bereit,
                              Hatha und Vinyasa zu kombinieren und es geschickt
                              zu unterrichten. Werfen wir einen Blick auf diese
                              Traditionen und was du von ihr erwarten kannst, da
                              die Terminologie heutzutage aufgrund von
                              Informationsmangel und anderen, leider auch
                              Marketingstrategien fließend geworden ist:
                            </p>
                            <p className="mb-3">
                              <strong>Hatha Yoga </strong>ist die Mutter aller
                              Yoga-übungen, die den Körper und insbesondere den
                              Atem beeinflussen. Eine typische Praxis von Hatha
                              ist eine langsame Praxis, die traditionelle
                              Körperhaltungen (Asana), Atmungsbewusstsein
                              Pranayama (Beibehaltung der Atemtechniken),
                              Meditation und in einigen übungslinien Mantras
                              kombiniert. In unserer heutigen Gesellschaft
                              konzentrieren sich die Kurse jedoch oft nur auf
                              die Körperhaltung. Der Stil verwendet auch
                              Reinigungstechniken (Kriyas), gelegentlichen
                              Gebrauch von Bandhas (Muskelmanipulationen, die
                              als Energieblockaden angesehen werden) und
                              spezielle Körper- und Atemmanipulationen,
                              sogenannte Mudras.
                            </p>
                            <p className="mb-3">
                              <strong>Ashtanga Vinyasa Yoga</strong> und seine
                              Nachkommen Vinyasa sind moderne, rasante übungen,
                              bei denen die Teilnehmer zwischen Körperhaltungen
                              wechseln, während Atem und manchmal auch Drishti
                              (Blick) in festgelegten Abfolgen synchronisiert
                              werden. Der Ashtanga-Stil zählt Pattabhi Jois und
                              sein Guru Krishnamacharya als die Gründer und hat
                              Asana-übungssequenzen festgelegt, während Vinyasa
                              Flow eine westliche Entwicklung ist, die dem
                              Lehrer die Möglichkeit gibt, verschiedene
                              Lehrsequenzen zu erstellen.
                            </p>
                            <p className="mb-3">
                              Ein weiterer Schüler von Krishnamacharya und ein
                              weiteres Juwel des modernen Yoga war BKS Iyengar.
                              Iyengar entwickelte einen Hatha Yoga-Stil, der
                              häufig Hilfsmittel verwendet und als Iyengar-Stil
                              bezeichnet wird. Der Stil ist in der
                              therapeutischen Yoga-Nische bekannt und hat
                              weitere westliche Lehrer dazu inspiriert, andere
                              inspirierte Traditionen wie Anusara Yoga zu
                              entwickeln.
                            </p>
                            <p className="mb-3">
                              Unser Programm deckt jedoch nicht den Iyengar-Stil
                              ab, der sich offen auf die milimetrische
                              Ausrichtung des Praktikers stützt und einen
                              anderen Yogalehrer-Ausbildungsstil verlangt.
                              Unsere Schulung behandelt die Verwendung von
                              Requisiten und deren Verbindung zum Yoga als
                              unterstützende Praxis für Wohlbefinden und
                              Gesundheit. Unsere Yogalehrer Ausbildung zielen
                              unter anderem darauf ab, ein tieferes Erleben der
                              Körperhaltungen zu fördern und die Teilnehmer in
                              unterschiedlichen Ausrichtungen und Perspektiven
                              der Asana-Praxis zu erleuchten.
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
                                activeIndex4 === index ? "bx-minus" : "bx-plus"
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
                  <div className="faq_box">
                    {faqItems5.map((faq, index) => (
                      <div
                        key={index}
                        className={`faq_box__content ${
                          activeIndex5 === index ? "active" : ""
                        }`}
                        onClick={() => handleToggle(5, index)}>
                        <div className="question">
                          <div className="plus">
                            <i
                              className={`bx ${
                                activeIndex5 === index ? "bx-minus" : "bx-plus"
                              }`}
                            />
                          </div>
                          <h6>{faq.question}</h6>
                        </div>
                        {activeIndex5 === index && (
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

                  <div className="faq_box">
                    {faqItems6.map((faq, index) => (
                      <div
                        key={index}
                        className={`faq_box__content ${
                          activeIndex6 === index ? "active" : ""
                        }`}
                        onClick={() => handleToggle(6, index)}>
                        <div className="question">
                          <div className="plus">
                            <i
                              className={`bx ${
                                activeIndex6 === index ? "bx-minus" : "bx-plus"
                              }`}
                            />
                          </div>
                          <h6>{faq.question}</h6>
                        </div>
                        {activeIndex6 === index && (
                          <div className="answer">
                            {faq.answer.map((paragraph, idx) => (
                              <p
                                key={idx}
                                className="mb-3"
                                style={{
                                  fontWeight: idx === 7 ? "bold" : "normal",
                                }}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="faq_box">
                    <div className="faq_box">
                      {faqItems7.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex7 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(7, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex7 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex7 === index && (
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
                  </div>
                  <div className="faq_box">
                    <div className="faq_box">
                      {faqItems8.map((faq, index) => (
                        <div
                          key={index}
                          className={`faq_box__content ${
                            activeIndex8 === index ? "active" : ""
                          }`}
                          onClick={() => handleToggle(8, index)}>
                          <div className="question">
                            <div className="plus">
                              <i
                                className={`bx ${
                                  activeIndex8 === index
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              />
                            </div>
                            <h6>{faq.question}</h6>
                          </div>
                          {activeIndex8 === index && (
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
                  </div>

                  {/* ======================================================== */}

                  <div className="faq_box">
                    {faqItems9.map((faq, index) => (
                      <div
                        key={index}
                        className={`faq_box__content ${
                          activeIndex9 === index ? "active" : ""
                        }`}
                        onClick={() => handleToggle(9, index)}>
                        <div className="question">
                          <div className="plus">
                            <i
                              className={`bx ${
                                activeIndex9 === index ? "bx-minus" : "bx-plus"
                              }`}
                            />
                          </div>
                          <h6>{faq.question}</h6>
                        </div>
                        {activeIndex9 === index && (
                          <div className="answer">
                            {faq.answer.map((paragraph, index) => (
                              <p
                                key={index}
                                className="mb-3"
                                style={{
                                  fontWeight:
                                    index === 2 || index === 3
                                      ? "bold"
                                      : "normal",
                                }}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="faq_box">
                    {faqItems10.map((faq, index) => (
                      <div
                        key={index}
                        className={`faq_box__content ${
                          activeIndex10 === index ? "active" : ""
                        }`}
                        onClick={() => handleToggle(10, index)}>
                        <div className="question">
                          <div className="plus">
                            <i
                              className={`bx ${
                                activeIndex10 === index ? "bx-minus" : "bx-plus"
                              }`}
                            />
                          </div>
                          <h6>{faq.question}</h6>
                        </div>
                        {activeIndex10 === index && (
                          <div className="answer">
                            {faq.answer.map((paragraph, index) => (
                              <p
                                key={index}
                                className="mb-3"
                                style={{
                                  fontWeight:
                                    index === 2 || index === 3
                                      ? "bold"
                                      : "normal",
                                }}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="faq_box">
                    {faqItems11.map((faq, index) => (
                      <div
                        key={index}
                        className={`faq_box__content ${
                          activeIndex11 === index ? "active" : ""
                        }`}
                        onClick={() => handleToggle(11, index)}>
                        <div className="question">
                          <div className="plus">
                            <i
                              className={`bx ${
                                activeIndex11 === index ? "bx-minus" : "bx-plus"
                              }`}
                            />
                          </div>
                          <h6>{faq.question}</h6>
                        </div>
                        {activeIndex11 === index && (
                          <div className="answer">
                            {faq.answer.map((paragraph, index) => (
                              <p
                                key={index}
                                className="mb-3"

                                //   style={{
                                //   fontWeight:
                                //   index === 2 || index === 3
                                //       ? "bold"
                                //       : "normal",
                                // }}
                              >
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

export default YogaTeacherTrainingBali;
