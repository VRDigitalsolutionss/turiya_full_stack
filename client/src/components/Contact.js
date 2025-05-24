import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import { BASE_URL } from "../config";

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
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});
  const [captchaCode, setCaptchaCode] = useState("");

  // Function to generate a 5-digit random captcha
  const generateCaptcha = () => Math.floor(10000 + Math.random() * 90000).toString();

  useEffect(() => {
    setCaptchaCode(generateCaptcha());
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.captcha_input.trim()) newErrors.captcha_input = "Verification code is required";
    else if (formData.captcha_input !== captchaCode) newErrors.captcha_input = "Incorrect verification code";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoading(true);

    const payload = {
      name: formData.first_name + " " + formData.last_name,
      number: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    axios.post(BASE_URL + '/add_query/', payload)
      .then((response) => {
        setLoading(false)
        Swal.fire({
          title: "Danke!",
          text: "Erfolgreich übermittelt!",
          icon: "success",
        });

        if (response.status === 201) {
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "",
            captcha_input: "",
          });

          setCaptchaCode(generateCaptcha());
        }
      })
      .catch((error) => {
        setLoading(false)
        console.log("Error submitting form:", error);
      });
  };

  return (
    <section className="global_wrapper contact_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pe-5">
            <div className="contact_wrapper__left me-5 pe-5">
              <h3>Wir Helfen Immer</h3>
              <h1>Noch Fragen?</h1>
              <div className="blank" />
              <p>
                Eine Ausbildung zum Yogalehrer ist auch eine Sache des Vertrauens.
                Wenn Du Fragen hast, zögere nicht uns zu kontaktieren.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact_wrapper__right">
              <div className="contact_form">
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="contact_form__flex">
                    <div className="contact_input">
                      <label>Vorname:</label>
                      <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                      {errors.first_name && <p className="error text-danger">{errors.first_name}</p>}
                    </div>
                    <div className="contact_input">
                      <label>Nachname:</label>
                      <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
                      {errors.last_name && <p className="error text-danger">{errors.last_name}</p>}
                    </div>
                  </div>
                  <div className="contact_form__flex">
                    <div className="contact_input">
                      <label>Email:</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} />
                      {errors.email && <p className="error text-danger">{errors.email}</p>}
                    </div>
                    <div className="contact_input">
                      <label>Telefon:</label>
                      <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
                      {errors.phone && <p className="error text-danger">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="contact_form__flex">
                    <div className="contact_input">
                      <label>Your Message:</label>
                      <textarea rows={4} name="message" value={formData.message} onChange={handleChange} />
                      {errors.message && <p className="error text-danger">{errors.message}</p>}
                    </div>
                  </div>
                  <div className="captcha">
                    <label>Verification Code:</label>
                    <p id="captcha_code">{captchaCode}</p>
                  </div>
                  <div className="form_submit">
                    <input type="text" name="captcha_input" value={formData.captcha_input} onChange={handleChange} />
                    {errors.captcha_input && <p className="error text-danger">{errors.captcha_input}</p>}
                    <button type="submit" className=" d-flex align-items-center justify-content-center gap-3">
                      Send
                      {loading && <div class="spinner-border text-light spinner-border-sm" role="status"></div>}
                    </button>
                  </div>
                  <div className="small-text">
                    {!formData.captcha_input && <small>Please enter the displayed numeric code</small>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
