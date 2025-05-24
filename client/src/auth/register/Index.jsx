import React, { useEffect, useState } from "react";
import "./register.scss";
import NewsShelter from "../../components/NewsShelter";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BASE_URL } from "../../config";

const Index = () => {


  // useEffect(() => {
  //   Swal.fire({
  //     title: "Vielen Dank für die Anmeldung bei uns",
  //     text: "Bitte überprüfen Sie Ihre E-Mails und bestätigen Sie Ihre E-Mail-Adresse!",
  //     icon: "success",
  //     customClass: {
  //       popup: 'custom-swal'
  //     }
  //   });
  // }, []);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    persone: "Private-Persone",
    c_name: "",
    f_name: "",
    l_name: "",
    email: "",
    email_confirm: "",
    gender: "male",
    phone: "",
    user_name: "",
    password: "",
    address: "",
    country: "india",
    federal_state: "",
    city: "",
    postal_code: "",
  });

  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};

    // if (!formData.persone) newErrors.persone = 'Bitte auswählen';
    // if (formData.persone === 'Corperate-Persone' && !formData.c_name)
    //   newErrors.c_name = 'Unternehmensname ist erforderlich';
    if (!formData.f_name) newErrors.f_name = "Vorname ist erforderlich";
    if (!formData.l_name) newErrors.l_name = "Nachname ist erforderlich";
    if (!formData.email) newErrors.email = "E-Mail ist erforderlich";
    if (formData.email !== formData.email_confirm)
      newErrors.email_confirm = "Die E-Mails stimmen nicht überein";
    if (!formData.phone) newErrors.phone = "Telefon ist erforderlich";
    // if (!formData.user_name) newErrors.user_name = 'Benutzername ist erforderlich';
    if (!formData.password) newErrors.password = "Passwort ist erforderlich";
    // if (!formData.address) newErrors.address = 'Adresse ist erforderlich';
    // if (!formData.federal_state) newErrors.federal_state = 'Bundesstaat ist erforderlich';
    // if (!formData.city) newErrors.city = 'Stadt ist erforderlich';
    // if (!formData.postal_code) newErrors.postal_code = 'Postleitzahl ist erforderlich';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData, // Spread the previous formData values
      [name]: value, // Update the specific field based on its name
    });
  };

  // Benachrichtigung

  const submit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form data:", formData);

      const payload = {
        userType: formData.persone,
        company: formData.c_name,
        First_name: formData.f_name,
        Last_name: formData.l_name,
        email: formData.email,
        Confirm_email_address: formData.email_confirm,
        gender: formData.gender,
        phone: formData.phone,
        username: formData.user_name,
        create_password: formData.password,
        address: formData.address,
        country: formData.country,
        federal_state: formData.federal_state,
        city: formData.city,
        postal_code: formData.postal_code,
      };

      console.log("payload", payload);

      axios
        .post(`${BASE_URL}/register`, payload)
        .then((response) => {
          console.log("response of register", response);

          if (response.status == 201) {





            // Show success message


            Swal.fire({
              title: "Vielen Dank für die Anmeldung bei uns",
              text: "Bitte überprüfen Sie Ihre E-Mails und bestätigen Sie Ihre E-Mail-Adresse!",
              icon: "success",
              customClass: {
                popup: 'custom-swal'
              }
            });


            navigate("/");
          } else {
            // alert("Failed to register");

            Swal.fire({
              title: "E-Mail bereits registriert",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
          }
        })
        .catch((error) => {
          console.log("error", error);

          Swal.fire({
            icon: "error",
            title: "Benachrichtigung",
            text: "Etwas ist schief gelaufen!",
            footer: 'versuchen Sie es erneut</a>',
            customClass: {
              popup: 'custom-swal'
            }
          });


        });

      // Here you can send the data to the server or perform another action
    } else {
      alert("something went wrong");
    }
  };

  return (
    <>
      <section className="registration_wrapper global_wrapper">
        <div className="container">
          <div className="registration_wrapper__content">
            <div className="registration--heading">
              <h1 className="register_heading">Bist du schon registriert?</h1>
              <p>Bitte erstelle ein Benutzerkonto.</p>
            </div>
            <div className="registration_box card">
              <form onSubmit={submit}>
                <div className="col-12 mb-3 form-group">
                  {/* ==================================================== */}

                  <label className="nott ls0 fw-medium mb-1" htmlFor="taxi">
                    Bist du? <small>*</small>
                  </label>

                  {/* ========================== new code ===================================== */}
                  <input
                    name="persone"
                    id="persone_yes"
                    className="my-1 me-1 ms-3 taxi-option"
                    type="radio"
                    value="Corporate-Persone" // Set value for controlled input
                    checked={formData.persone === "Corporate-Persone"} // Bind checked to state
                    onChange={(event) =>
                      setFormData({ ...formData, persone: event.target.value })
                    } // Update state on change
                  />







                  {/* <input
                    name="persone"
                    id="persone_yes"
                    className="my-1 me-1 ms-3 taxi-option"
                    type="radio"
                    defaultValue="Corporate-Persone"
                    defaultChecked={formData.persone === "Corporate-Persone"} // Use defaultChecked for initial state
                  /> */}



                  <label
                    htmlFor="persone_yes"
                    className="nott ls0 fw-medium mb-1">
                    Unternehmen
                  </label>

                  {/* <input
                    name="persone"
                    id="persone_no"
                    className="my-1 ms-3 me-1 taxi-option"
                    type="radio"
                    value="Private-Persone"
                    checked={formData.persone === "Private-Persone"}
                    onChange={handlechange}
                  /> */}


                  <input
                    name="persone"
                    id="persone_no"
                    className="my-1 ms-3 me-1 taxi-option"
                    type="radio"
                    value="Private-Persone"
                    checked={formData.persone === "Private-Persone"} // Bind checked to state
                    onChange={(event) =>
                      setFormData({ ...formData, persone: event.target.value })
                    } // Update state on change
                  />


                  <label
                    htmlFor="persone_no"
                    className="nott ls0 fw-medium mb-1">
                    Privatperson
                  </label>

                  {/* ================================================================================== */}

                  {/* Conditionally render the company name input field */}
                  {formData.persone === "Corporate-Persone" && (
                    <div className="col-12 mb-2 taxi-time-container">
                      <label htmlFor="c_name">
                        Enter your company name:{" "}
                        <small className="text-danger">*</small>
                      </label>
                      <br />
                      <input
                        type="text"
                        id="c_name"
                        name="c_name"
                        className="required form-control valid shadow-none"
                        aria-invalid="false"
                        onChange={handlechange}
                        value={formData.c_name}
                        required
                      />
                    </div>
                  )}

                  {/* ============================================================ */}
                </div>

                <div className="registration_box__flex">
                  <div className="modal_input">
                    <label>
                      Vorname <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="f_name"
                      value={formData.f_name}
                      onChange={handlechange}
                      required
                    />
                  </div>
                  <div className="modal_input">
                    <label>
                      Nachname <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="l_name"
                      value={formData.l_name}
                      onChange={handlechange}
                      required
                    />
                  </div>
                </div>
                <div className="registration_box__flex">
                  <div className="modal_input">
                    <label>
                      E-Mail <span>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handlechange}
                      value={formData.email}
                      required
                    />
                  </div>
                  <div className="modal_input">
                    <label>
                      E-Mail-BESTÄTIGEN <span>*</span>
                    </label>
                    <input
                      type="email"
                      name="email_confirm"
                      value={formData.email_confirm}
                      onChange={handlechange}
                      required
                    />
                  </div>
                </div>
                <div className="registration_box__flex">
                  <div className="modal_input">
                    <label>
                      Geschlecht <span>*</span>
                    </label>
                    <select
                      name="gender"
                      className="form-select"
                      aria-label="Default select example"
                      value={formData.gender}
                      onChange={handlechange}>
                      <option value="female" selected>
                        Frau
                      </option>
                      <option value="male">Mann</option>
                      <option value="other">Diverse</option>
                    </select>
                  </div>
                  <div className="modal_input">
                    <label>
                      TELEFON <span>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      required
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="registration_box__flex">
                  <div className="modal_input">
                    <label>BENUTZERNAME</label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      required
                      onChange={handlechange}
                    />
                  </div>
                  <div className="modal_input">
                    <label>
                      Erstelle ein Passwort <span>*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      required
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="registration_box__flex">
                  <div className="modal_input">
                    <label>Adresse</label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="Straße / Haus Nr."
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="registration_box__flex">
                  <div className="modal_input">
                    <label>Land</label>
                    <input
                      type="text"
                      name="country"
                      required
                      defaultValue="Deutschland"
                      onChange={handlechange}
                      value={formData.country}
                    />
                  </div>
                  <div className="modal_input">
                    <label>Bundesstaat</label>
                    <input
                      type="text"
                      name="federal_state"
                      value={formData.federal_state}
                      required
                      onChange={handlechange}
                    />
                  </div>
                  <div className="modal_input">
                    <label>STADT</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handlechange}
                    />
                  </div>
                  <div className="modal_input">
                    <label>Postleitzahl</label>
                    <input
                      type="text"
                      name="postal_code"
                      value={formData.postal_code}
                      onChange={handlechange}
                      required
                    />
                  </div>
                </div>
                <div className="registration-btn">
                  <button type="submit" className="global_btn">
                    REGISTRIEREN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <NewsShelter /> */}
    </>
  );
};

export default Index;
