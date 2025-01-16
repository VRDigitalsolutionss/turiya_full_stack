import React, { useState } from "react";
import "./forgotpass.scss";
import { BASE_URL } from "../../config";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [formData, setFormData] = useState({
    email: ""
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.email) {
      tempErrors.email = "E-Mail-Adresse ist erforderlich";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Ungültige E-Mail-Adresse";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(`${BASE_URL}/forgot-password`, {
          email: formData.email
        });

        Swal.fire({
          text: "Bitte überprüfen Sie Ihre E-Mails und bestätigen Sie Ihre E-Mail-Adresse!",
          icon: "success",
          customClass: {
            popup: 'custom-swal'
          }
        });
        navigate('/')

      } catch (err) {
        alert(err.response?.data)
      }
    }
  };

  return (
    <div>
      <section className="global_wrapper forgot-login">
        <div className="container">
          <div className="forgot-login-box">
            <form className="form_border p-4 border" method="POST" onSubmit={handleSubmit}>
              <h3 className="my-3">Kennwort vergessen?</h3>
              <p>
                Bitte gib deine E-Mail-Adresse ein, um Dein Kennwort
                zurückzusetzen. Eventuell musst Du dein Spamordner prüfen oder
                die Adresse info@turiyayoga.de als Absender zulassen.
              </p>
              <div className="forgot-email">
                <label>E-Mail-Adresse *:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=""
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="send">
                <button className="global_btn" type="submit" name="forget">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

