import React, { useState } from "react";
import "./forgotpass.scss";

const Index = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

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

    if (!formData.password) {
      tempErrors.password = "Kennwort ist erforderlich";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Kennwort muss mindestens 6 Zeichen lang sein";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted", formData);
      // Perform further actions like sending data to the server
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
                  placeholder="E-Mail-Adresse"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="forgot-email">
                <label>Neues Kennwort erstellen *:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Neues Kennwort"
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
              <div className="send">
                <button className="global_btn" type="submit" name="forget">
                  Kennwort aktualisieren
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

