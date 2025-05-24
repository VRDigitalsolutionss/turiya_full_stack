import React, { useEffect, useState } from "react";
import "./contact.scss";
import contact_img from "../../assets/images/contact_img.webp";
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";
import { BASE_URL } from "../../config";
import Contact from "../Contact";
import NewsShelter from "../NewsShelter";

const Index = () => {
  const [contactDetails, setContactDetails] = useState('');

  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);

  const fetchContactData = () => {
    axios.get(`${BASE_URL}/contact`).then((response) => {
      console.log("response of contact", response.data.data);
      
      if (response.status == 200) {
        
        const data = response.data.data[0]
        setContactDetails(data)
      }
    }).catch((error) => {
      console.log("error",error);
    })
  }


  useEffect(() => {
    fetchContactData();
  }, []);


  console.log("contactDetails",contactDetails)


  return (
    <>
      <section className="global_wrapper contact--wrapper">
        <div className="container">
          <div className="contact--wrapper-heading">
            <h3>Kontakt </h3>
          </div>
          <div className="global_content">
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-left">
                  <div className="social_contact">
                    <Link to="https://www.facebook.com/turiyayogainternational">
                      <i className="bx bxl-facebook" />
                    </Link>
                    <Link to="https://twitter.com/turiya_yoga">
                      <i className="bx bxl-twitter" />
                    </Link>
                    <Link to="https://www.youtube.com/channel/UCgqWvWLeL9Wbum9vHjD8NAA">
                      <i className="bx bxl-youtube" />
                    </Link>
                    <Link to="https://www.instagram.com/turiyayogainternational">
                      <i className="bx bxl-instagram" />
                    </Link>
                    <Link to="/blog">
                      <i className="bx bxl-blogger" />
                    </Link>
                  </div>
                  <div className="contact-left-content">
                    <div>
                      <br />
                    </div>
                    <div>
                      <div
                        className="contact-left-content"
                        style={{
                          margin: 0,
                          padding: 0,
                          fontFamily: "Roboto, sans-serif",
                          color: "rgb(33, 37, 41)",
                          fontSize: 16,
                        }}>
                        <h6
                          style={{
                            margin: "1rem 0px 0.5rem",
                            padding: 0,
                            lineHeight: "1.2",
                            fontSize: 15,
                          }}>
                          Turiya Yoga
                        </h6>
                        <p
                          style={{
                            marginTop: "1rem",
                            marginRight: 0,
                            marginLeft: 0,
                            padding: 0,
                            fontSize: 14,
                            lineHeight: "1.8",
                          }}>
                          Emanuel Wintermeyer
                        </p>
                        <p
                          style={{
                            marginTop: "1rem",
                            marginRight: 0,
                            marginLeft: 0,
                            padding: 0,
                            fontSize: 14,
                            lineHeight: "1.8",
                          }}>
                          Herbartstrasse, 12
                          <br style={{ margin: 0, padding: 0 }} />
                          60316 Frankfurt am Main
                        </p>
                        <p
                          style={{
                            marginTop: "1rem",
                            marginRight: 0,
                            marginLeft: 0,
                            padding: 0,
                            fontSize: 14,
                            lineHeight: "1.8",
                          }}>
                          +49(0)69 2013 4987
                          <br style={{ margin: 0, padding: 0 }} />
                          info@turiyayoga.de
                        </p>
                        <p
                          style={{
                            marginTop: "1rem",
                            marginRight: 0,
                            marginLeft: 0,
                            padding: 0,
                            fontSize: 14,
                            lineHeight: "1.8",
                          }}>
                          <i style={{ margin: 0, padding: 0 }}>
                            Wir bieten Yogalehrer Ausbildungen auf höchstem
                            Niveau! Werde Yogalehrer mit Turiya Yoga!
                          </i>
                        </p>
                        <p
                          style={{
                            marginTop: "1rem",
                            marginRight: 0,
                            marginLeft: 0,
                            padding: 0,
                            fontSize: 14,
                            lineHeight: "1.8",
                          }}>
                          Wenn Ihr Fragen habt oder euch für eine Ausbildung
                          anmelden wollt schickt uns doch bitte einfach eine
                          kurze Nachricht über unser Kontaktformular. Schaut
                          euch in unserem Video an was euch bei einer Yogalehrer
                          Ausbildung bei Turiya Yoga erwartet.
                        </p>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-img">
                  <img src={contact_img} className="img-fluid" alt="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Contact />
      

      <NewsShelter/>
    </>
  );
};

export default Index;
