import React, { useEffect, useState } from "react";
import dilogImg from "../assets/images/high-important.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { BASE_URL, BASE_URL_IMAGE } from "../config";

const BannerGlobalTableWrapper = () => {
  const [data, setData] = useState("");
  const [isloginOpen, setisloginOpen] = useState(true);
  const navigate = useNavigate();

  const fetchData2 = () => {
    axios
      // .get("http://127.0.0.1:7000/api/modules")
      .get(BASE_URL + "/getupcoming_course")
      .then((response) => {
        console.log("response of all apcoming courses", response.data.data);

        setData(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };


  const fetchData = () => {
    axios
      .get(BASE_URL + "/getupcoming_course")
      .then((response) => {
        console.log("response of all upcoming courses", response.data.data);

        const currentDate = new Date(); // Get the current date
        console.log("Current Date:", currentDate);

        const sortedData = response.data.data
          .filter((course) => {
            try {
              // Convert StartDate string (DD.MM.YYYY) to a valid Date object
              const courseStartDate = new Date(course.StartDate.split('.').reverse().join('-')); // Convert DD.MM.YYYY to YYYY-MM-DD

              if (isNaN(courseStartDate)) {
                console.warn(`Invalid StartDate for module:`, course);
                return false; // Exclude modules with invalid StartDate
              }

              // Include only modules with future or current StartDate
              return courseStartDate >= currentDate;
            } catch (error) {
              console.error(`Error processing StartDate for module:`, course, error);
              return false; // Exclude modules with errors in date conversion
            }
          })
          .sort((a, b) => {
            // Sort the filtered data by StartDate in ascending order
            const dateA = new Date(a.StartDate.split('.').reverse().join('-')); // Convert DD.MM.YYYY to YYYY-MM-DD
            const dateB = new Date(b.StartDate.split('.').reverse().join('-')); // Convert DD.MM.YYYY to YYYY-MM-DD
            return dateA - dateB; // Sort by ascending StartDate
          });

        console.log("sortedData (Filtered and Sorted):", sortedData);
        setData(sortedData); // Update state with sorted data
      })
      .catch((error) => {
        console.error("Error fetching modules:", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.username) {
      tempErrors.username = "Benutzername ist erforderlich";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = "Passwort ist erforderlich";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Passwort muss mindestens 6 Zeichen lang sein";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: formData.username,
      password: formData.password,
    };

    if (validate()) {
      console.log("Form submitted successfully", formData);

      axios
        .post(BASE_URL + "/loginnew", payload)
        .then((response) => {
          console.log("response of login", response.data.token);
          localStorage.setItem("turiya_auth_token", response.data.token);
          if (response.status == 200) {
            alert("Looged successfully");
            navigate("/");
          } else if (response.status == 404) {
            alert("Not Registered");
          }
        })
        .catch((error) => {
          alert("somwthing went wrong");

          console.log("error", error);
        });
    } else {
      alert("validation failed");
    }
  };

  console.log("data of upcoming courses", data);

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const checkLogin = () => {
    axios
      .post("/api")
      .then((response) => { })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // Function to toggle the dialog visibility
  const handletriggerDialogBox = (courseid) => {


    const auth_token = localStorage.getItem("turiya_auth_token");



    if (auth_token) {
      // navigate("/course_booking");
      reducePlace(courseid);
      addToCart(courseid);
    } else {
      setIsDialogVisible(true); // Show the dialog
    }

    // handletriggerDialogBox
  };

  // Function to close the dialog
  const closeDialogBox = () => {
    setIsDialogVisible(false); // Hide the dialog
  };

  const handleredirect = () => {
    setisloginOpen(true);
    closeDialogBox(); // Close
    //  onClick="window.location.href='registration.php';"
  };

  const reducePlace = (id) => {
    axios
      .get(BASE_URL + `/reduce-places/${id}`)
      .then((response) => {
        console.log("response of reduce-places", response);
        navigate(`/course_booking/${id}`);
      })
      .catch((error) => {
        console.log("error of reduce-places", error);
      });
  };

  function formatDate(dateString) {
    // Split the input date into an array [year, month, day]
    const [year, month, day] = dateString.split("-");

    // Return the date in the desired format: dd.mm.yyyy
    return `${day}.${month}.${year}`;
  }

  function isOfferValid(offerEndDate) {
    if (!offerEndDate) return false;

    const today = new Date();
    const offerEnd = new Date(offerEndDate);

    return today <= offerEnd;
  }

  // Example usage:
  const formattedDate = formatDate("2025-01-09");
  console.log(formattedDate); // Output: 09.01.2025
  const UserId = localStorage.getItem('turiya_auth_id');


  const addToCart = (courseid) => {
    const payload = {
      moduleId: courseid,
      userId: UserId,
      status: "active",
    };

    axios
      .post(BASE_URL + "/add_course_in_cart", payload)
      .then((response) => {
        console.log("response of cart", response.data.data);
        Swal.fire({
          title: "Danke!",
          text: "Kurs im Warenkorb hinzugefügt!",
          icon: "success"
        });




        // window.location.reload();

      })
      .catch((error) => {
        console.log("error", error);





        Swal.fire({
          Symbol: 'error',
          Titel: "Benachrichtigung",
          Text: "Etwas ist schiefgelaufen!",
          Fußzeile: '<a href="#">Warum habe ich dieses Problem?</a>'
        });

      });
  };


  const ManagePageRedirect = (location) => {
    console.log("locat", location)
    if (location == 'Goa, Indien') {
      navigate('/yogalehrer-ausbildung-goa-indien')
    } else if (location == 'Mallorca') {
      navigate('/200h-yogalehrer-ausbildung-mallorca')
    } else if (location == 'Himalaya Indien') {
      navigate('/yogalehrer-ausbildung-himalaya-indien')
    } else if (location == 'Berlin') {
      navigate('/YOGALEHRERAUSBILDUNG-BERLIN')
    } else {
      alert("Page is under development. Sorry for the inconvenience.")
    }
  }

  function convertToRoute(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }

  // Example usage:
  // const input = "200H AYA Yogalehrer Ausbildung";
  // const route = convertToRoute(input);
  // console.log(route);

  return (
    <>
      <section className="global_wrapper table_section">
        <div className="container">
          <div
            className="slower_wrapper__center main_heading aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000">
            <h1>Kommende Kurse</h1>
          </div>
        </div>
        <div className="global_content">
          <div className="container-fluid">
            <div className="table-responsive index-table">
              <table
                className="table custom-table aos-init"
                data-aos="zoom-in-up">
                <thead style={{ backgroundColor: "#EDEDED" }}>
                  <tr
                    className="table-heading"
                    style={{ backgroundColor: "#EDEDED" }}>
                    <th scope="col" style={{ backgroundColor: "#EDEDED" }}>
                      Ausbildungsorte
                    </th>
                    <th scope="col" style={{ backgroundColor: "#EDEDED" }}>
                      Datum
                    </th>
                    <th scope="col" style={{ backgroundColor: "#EDEDED" }}>
                      Ort
                    </th>
                    <th
                      scope="col"
                      className="germany-price"
                      style={{ backgroundColor: "#EDEDED" }}>
                      Preis/Frühbucher
                    </th>
                    <th scope="col" style={{ backgroundColor: "#EDEDED" }}>
                      Freie Plätze
                    </th>
                    <th scope="col" style={{ backgroundColor: "#EDEDED" }}>
                      Kontakt
                    </th>
                  </tr>
                </thead>
                <tbody
                  className="table-body desktop"
                  style={{ backgroundColor: "#EDEDED" }}>
                  {data &&
                    data.map((item, index) => {
                      console.log("row of upcoming courses", item);

                      return (
                        item.Place && item.Place !== '0' ? (
                          <tr style={{ backgroundColor: "#EDEDED" }} key={index}>
                            <th style={{ backgroundColor: "#EDEDED" }}>
                              {item.Ausbildung}
                            </th>
                            <td style={{ backgroundColor: "#EDEDED" }}>
                              <i className="bx bxs-calendar me-1" />
                              {formatDate(item.StartDate)} &nbsp;-&nbsp;
                              <i className="bx bxs-calendar me-1" />
                              {formatDate(item.EndDate)}{" "}
                            </td>
                            <td style={{ backgroundColor: "#EDEDED" }}>
                              <button type="button" className="location border-none" style={{ border: 'none' }}

                                onClick={() => ManagePageRedirect(item.Location)}


                              >
                                <i className="bx bxs-map me-1" />

                                {item.Location}
                                {/* Goa, Indien */}
                              </button>
                            </td>
                             <td style={{ backgroundColor: "#EDEDED" }}>
                              {isOfferValid(item.OfferEndDate) && item.Offerprice > 0 ? (
                                <>
                                  <span
                                    style={{
                                      color: "red",
                                    }}
                                  >
                                    € {item.Offerprice}
                                  </span>
                                  <span className="ms-2">
                                    <del>€{item.price}</del>
                                  </span>
                                  <br />
                                  <small>
                                    Das Angebot endet am<br/>
                                    <i className="bx bxs-calendar"></i> {formatDate(item.OfferEndDate)}
                                  </small>
                                </>
                              ) : (
                                <span>€{item.price}</span>
                              )}
                            </td>

                            <td
                              style={{
                                backgroundColor: "#EDEDED",
                                color: item.Place <= 3 ? "red" : "black", // Optional: change text color to white if background is red
                              }}>
                              {item.Place <= 3
                                ? `only Noch ${item.Place} Plätze frei`
                                : `Noch ${item.Place} Plätze frei`}
                            </td>

                            <td style={{ backgroundColor: "#EDEDED" }}>
                              <button
                                onClick={() => handletriggerDialogBox(item._id)}
                                style={{
                                  backgroundColor:
                                    item.Place <= 3 ? "#FF5722" : "#9BBB59",
                                  border: "0px solid",
                                }}
                                className="table-btn triggerDialogBox"
                                data-id={9}>
                                ANMELDEN
                              </button>{" "}
                            </td>
                          </tr>
                        ) : null

                      );
                    })}
                </tbody>

                <tbody class="table-body mobile" style={{ backgroundColor: "#EDEDED" }}>


                  {data &&
                    data.map((item, index) => {
                      console.log("row of upcoming courses", item);

                      return (
                        item.Place && item.Place !== '0' ? (
                          <tr style={{ backgroundColor: "#EDEDED" }} key={index}>
                            <th style={{ backgroundColor: "#EDEDED" }}>
                              {item.Ausbildung}
                            </th>
                            <td style={{ backgroundColor: "#EDEDED" }}>
                              <i className="bx bxs-calendar me-1" />
                              {formatDate(item.StartDate)} &nbsp;-&nbsp;
                              <i className="bx bxs-calendar me-1" />
                              {formatDate(item.EndDate)}{" "}
                            </td>
                            <td style={{ backgroundColor: "#EDEDED" }}>
                              <button type="button" className="location border-none" style={{ border: 'none' }}

                                onClick={() => ManagePageRedirect(item.Location)}


                              >
                                <i className="bx bxs-map me-1" />

                                {item.Location}
                                {/* Goa, Indien */}
                              </button>
                            </td>
                            <td style={{ backgroundColor: "#EDEDED" }}>
                              {isOfferValid(item.OfferEndDate) && item.Offerprice > 0 ? (
                                <>
                                  <span
                                    style={{
                                      color: "red",
                                    }}
                                  >
                                    € {item.Offerprice}
                                  </span>
                                  <span className="ms-2">
                                    <del>€{item.price}</del>
                                  </span>
                                  <br />
                                  <small>
                                    Das Angebot endet am{" "}
                                    <i className="bx bxs-calendar"></i> {formatDate(item.OfferEndDate)}
                                  </small>
                                </>
                              ) : (
                                <span>€{item.price}</span>
                              )}
                            </td>

                            <td
                              style={{
                                backgroundColor: "#EDEDED",
                                color: item.Place <= 3 ? "red" : "black", // Optional: change text color to white if background is red
                              }}>
                              {item.Place <= 3
                                ? `only Noch ${item.Place} Plätze frei`
                                : `Noch ${item.Place} Plätze frei`}
                            </td>

                            <td style={{ backgroundColor: "#EDEDED" }}>
                              <button
                                onClick={() => handletriggerDialogBox(item._id)}
                                style={{
                                  backgroundColor:
                                    item.Place <= 3 ? "#FF5722" : "#9BBB59",
                                  border: "0px solid",
                                }}
                                className="table-btn triggerDialogBox"
                                data-id={9}>
                                ANMELDEN
                              </button>{" "}
                            </td>
                          </tr>
                        ) : null

                      );
                    })}
                </tbody>

              </table>

              <hr className="my-3" />

            </div>
            <div className="all-btn aos-init" data-aos="fade-up">
              <Link to="/kommende-kurse">
                <i className="bx bxs-calendar" /> ALLE AUSBILDUNGEN
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal content */}
      {isDialogVisible && (
        <div
          id="modalOverlay"
          className="hiddenOverlayContainer"
          style={{ display: "block" }}>
          <div className="row bg-light">
            <div className="col-sm-6"></div>
          </div>
          <div className="customDialogBox">
            <span className="exitButtonTrigger" onClick={closeDialogBox}>
              ×
            </span>
            <div className="dialogIcon">
              <img src={dilogImg} style={{ width: 80 }} alt />
            </div>
            <p className="mt-3">
              Um den Kauf abzuschließen, musst du dich zuerst einloggen!
            </p>
            {/* dialogActionButton */}
            <button
              className="dialogActionButton"
              style={{ cursor: "pointer" }}
              onClick={() => navigate('/login')}>
              Go to Login/Registrierung.
            </button>
          </div>
        </div>
      )}

      {/* // fade show */}
      {isloginOpen && (
        <div className="form-body">
          <div className="modal" id="exampleModal-form">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-body-top">
                    <div className="modal_input">
                      <label>
                        Benutzername <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="username" // Set the name so it corresponds with the state field
                        value={formData.username}
                        onChange={handleChange} // Update the state when the value changes
                      />
                    </div>
                    <div className="modal_input">
                      <label>
                        Passwort <span>*</span>
                      </label>
                      <input
                        type="password"
                        name="password" // Set the name so it corresponds with the state field
                        value={formData.password}
                        onChange={handleChange} // Update the state when the value changes
                      />
                    </div>
                    <div className="submit-form">
                      <button
                        className="global_btn"
                        onClick={handleSubmit} // Trigger the handleSubmit function on click
                      >
                        Einloggen
                      </button>
                    </div>
                  </div>
                  <div className="form-body-bottom card-footer">
                    <div className="password-forgot">
                      <a href="forgot-login.php" className="btn btn-primary">
                        Passwort vergessen?
                      </a>
                    </div>
                    <h3>Hast du noch keinen Account?</h3>
                    <div className="annmelden" onClick={handleredirect}>
                      <Link to="#">Anmelden</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerGlobalTableWrapper;
