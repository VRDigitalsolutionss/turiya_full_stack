import React, { useEffect, useState } from "react";
import contact_img from '../assets/images/contact_img.webp'

import axios from 'axios';
import Swal from "sweetalert2";
import { BASE_URL,BASE_URL_IMAGE } from "../config";

const Contact = () => {

  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    captcha_input: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaCode,setCaptchaCode] = useState("35188"); // For demonstration; in production, this should be dynamically generated.

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.captcha_input && formData.captcha_input !== captchaCode)
      newErrors.captcha_input = "Incorrect verification code";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Form Data:", formData);
  
    // Validate the form
    const isValid = validateForm();
  console.log("validateForm:", isValid);
    if (!errors.length > 0 && formData.captcha_input == captchaCode ) {
      const payload = {
        name: formData.first_name + " " + formData.last_name,
        number: formData.phone,
        email: formData.email,
        message: formData.message,
      };
  
      axios
        .post(BASE_URL + '/add_query/', payload)
        .then((response) => {
          console.log("Response of contact:", response);
          Swal.fire({
            title: "Danke!",
            text: "Erfolgreich übermittelt!",
            icon: "success",
          });
          if (response.status === 201) {
            // Reset the form fields


            setFormData({
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
              message: "",
              captcha_input: "",
            });

            const randomNumber = generateRandom5DigitNumber();
   
            setCaptchaCode(randomNumber);
          }
        })
        .catch((error) => {
          console.log("Error of contact:", error);
        });
    } else {
      console.log("Validation errors:", errors);
  
    }
  };

  
  function generateRandom5DigitNumber() {
    // Generate a random number between 10000 and 99999
    return Math.floor(Math.random() * 90000) + 10000;
  }
  

  useEffect(() => {
    const randomNumber = generateRandom5DigitNumber();
    console.log(randomNumber);
    setCaptchaCode(randomNumber);
  }, []);
  // Example usage:



  return (
    <>
      <section className="global_wrapper contact_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pe-5">
              <div
                className="contact_wrapper__left me-5 pe-5"
                data-aos-delay={100}>
                <h3>Wir Helfen Immer</h3>
                <h1>Noch Fragen?</h1>
                <div className="blank" />
                <p>
                  Eine Ausbildung zum Yogalehrer ist auch eine Sache des
                  Vertrauens. Wenn Du Fragen hast zögere nicht uns zu
                  kontaktieren. Eine Yogalehrer Ausbildung ist Vertrauenssache!
                  Wir beraten und helfen Dir auf jedem Schritt den Du gehst.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="contact_wrapper__right"
                data-aos-delay={200}>
                <div className="contact_form">
                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="contact_form__flex">
                      <div className="contact_input">
                        <label>Vorname:</label>
                        <input
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          required
                        />
                        {errors.first_name && (
                          <p className="error">{errors.first_name}</p>
                        )}
                      </div>
                      <div className="contact_input">
                        <label>Nachname:</label>
                        <input
                          type="text"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          required
                        />
                        {errors.last_name && (
                          <p className="error">{errors.last_name}</p>
                        )}
                      </div>
                    </div>
                    <div className="contact_form__flex">
                      <div className="contact_input">
                        <label>Email:</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && (
                          <p className="error">{errors.email}</p>
                        )}
                      </div>
                      <div className="contact_input">
                        <label>Telefon:</label>
                        <input
                          type="number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        {errors.phone && (
                          <p className="error">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                    <div className="contact_form__flex">
                      <div className="contact_input">
                        <label>YOUR MESSAGE TO US:</label>
                        <textarea
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                        {errors.message && (
                          <p className="error">{errors.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="captcha">
                      <label>VERIFICATION CODE :: </label>
                      <p id="captcha_code">{captchaCode}</p>
                    </div>
                    <div className="form_submit">
                      <input
                        type="text"
                        name="captcha_input"
                        value={formData.captcha_input}
                        onChange={handleChange}
                        required
                      />
                   {   console.log(" errors.captcha_input", errors.captcha_input)}
                      {formData.captcha_input && errors.captcha_input? (
                        <p className="error">{errors.captcha_input}</p>
                      ):null}
                      <button type="submit">Send</button>
                    </div>
                  </form>
                  <div className="small-text">
                    {
                      !formData.captcha_input &&  <small id="responseMessage">
                      Please enter the displayed numeric code
                    </small>
                    }
                   
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

export default Contact;
