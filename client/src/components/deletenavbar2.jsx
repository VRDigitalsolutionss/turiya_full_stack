import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false); // State to manage active class

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSiderBar, setShowSiderBar] = useState(false);
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const handleMobileNav = () => {
    setIsActive(!isActive);
  };

  const handleCancel = () => {
    setIsActive(false);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = document.querySelector(".myNav");
  //     header.classList.toggle("sticky", window.scrollY > 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup function to remove the event listener when the component unmounts
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle("sticky", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ======================================================

  const handleredirect = () => {
    // Close the modal
    // Remove the backdrop
    navigate("/register"); // Redirect to the register page
    setIsModalOpen(false);
  };

  const handleDialogNew = () => {
    setIsModalOpen(true);

    console.log("Register");
  };

  console.log("isModalOpen", isModalOpen);

  const handleDialog = () => {
    setIsModalOpen(true);
  };

  const handleSidBar = () => {
    setShowSiderBar(true);
  };

  const closeSideber = () => {
    setShowSiderBar(false);
  };

  const modalRef = useRef(null);

  const handleAnmeldenClick = () => {
    console.log("button clicked");
    if (modalRef.current) {
      console.log("modalRef.current");
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.hide(); // This will hide the modal
    }
  };

  const handleRedirect = () => {
    // Close the modal
    // Remove the backdrop
    navigate("/register"); // Redirect to the register page
    setIsModalOpen(false);
  };

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

    if (validate()) {
      console.log("Form submitted successfully", formData);

      alert("submited successfully");
    } else {
      alert("something went wrong");
    }
  };

  // const handleRedirect = () => {
  //   // Your redirect logic, for example navigating to a registration page
  //   console.log("Redirecting to registration page");
  //   const modal = new window.bootstrap.Modal(modalRef.current);
  //   modal.hide();
  // };
  //

  // dropMenus.forEach((dropMenu) => {
  //   dropMenu.addEventListener('click', function() {
  //       // Remove the 'active' class from all dropMenu elements
  //       dropMenus.forEach((menu) => {
  //           menu.classList.remove('active');
  //       });
  //       // Toggle the 'active' class on the clicked dropMenu element
  //       this.classList.toggle('active');
  //   });
  // });

  const [activeLink, setActiveLink] = useState(null);

  // Function to handle click and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div ref={headerRef} className="myNav">
        <div className="container-fluid">
          <div className="myNav_content">
            <div className="myNav_logo">
              <Link to="/">
                <img
                  src="https://www.turiyayoga.de/upload/logo/159599431323469f950cf73a5.png"
                  className="img-fluid"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="myNav_content__right">
              <div className="top_menu">
                <Link to="tel:+49(0)69-20134987">
                  <i className="bx bxs-mobile" />
                  +49(0)69-20134987
                </Link>
                <Link to="mailto:info@turiyayoga.de">
                  <i className="bx bxs-envelope" /> info@turiyayoga.de
                </Link>
                <Link className="cart-menu">
                  <p onClick={handleSidBar}>
                    <i className="bx bx-shopping-bag" />
                    <span className="me-1">1</span>[LEER]
                  </p>
                </Link>
                {/* <p  data-bs-toggle="modal" data-bs-target="registermodal" className="registerLink" style={{ cursor: "pointer" }}>
                  <i className="bx bx-user" />
                  Anmeldung/Registrierung
                </p> */}
                {/* <a data-bs-toggle="modal" data-bs-target="#exampleModal-form" className="registerLink" style={{ cursor: "pointer" }}>
  <i className="bx bx-user" />
  Anmeldung/Registrierung
                </a> */}
                {/* ========================================================= */}

                <a
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal-form"
                  className="registerLink"
                  style={{ cursor: "pointer" }}>
                  <i className="bx bx-user" />
                  Anmeldung/Registrierung
                </a>
              </div>
              <div className="bottom_menu">
                <ul>
                  <li className="dropdown_menu">
                    <Link to="#">
                      ÜBER UNS
                      <i className="bx bx-chevron-down" />
                    </Link>
                    <ul className="dropdown_menu__list">
                      <li>
                        <Link to="/unsere_Geschichtetory">
                          Unsere Geschichte
                        </Link>
                      </li>
                      <li>
                        <Link to="/unsere-Philosophie">Unsere Philosophie</Link>
                      </li>
                      <li>
                        <Link to="/kundenstimmen">Kundenstimmen</Link>
                      </li>
                      <li>
                        <Link to="/team">Turiya Yoga Team</Link>
                      </li>
                      <li>
                        <Link to="/blog">Turiya Yoga Blog</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown_menu">
                    <Link to="/yogalehrer_Ausbildung">
                      Yogalehrer Ausbildungen
                      <i className="bx bx-chevron-down" />
                    </Link>
                    <ul className="dropdown_menu__list">
                      <li>
                        <Link to="/allCourses">Alle Kommenden Kurse</Link>
                      </li>
                      <li className="mega_dropdown">
                        <Link to="/yogalehrer_Ausbildung">
                          200H AYA Yogalehrer Ausbildung - Intensiv
                        </Link>
                        <i className="bx bx-chevron-right" />
                        <div className="mega_dropdown__list">
                          <ul>
                            <li>
                              <Link to="/yogalehrer_Ausbildung">
                                200H AYA Yogalehrer Ausbildung
                              </Link>
                            </li>
                            <li>
                              <Link to="/yogaTraningSampurna">
                                200H AYA Yogalehrer Ausbildung Sampurna
                                Seminarhaus
                              </Link>
                            </li>
                            <li>
                              <Link to="/yoga_Traning_Goa">
                                200H AYA Yogalehrer Ausbildung Goa Indien
                              </Link>
                            </li>
                            <li>
                              <Link to="/yogaTraningMallorca">
                                200H/AYA Yogalehrer Ausbildung I Mallorca
                              </Link>
                            </li>

                            <li>
                              <Link to="/yogaTraningHimalaya">
                                Yogalehrerausbildung Himalaya Indien
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="mega_dropdown">
                        <Link to="/block_yogaTraning">
                          500H AYA Yogalehrer Blockausbildung | 100h
                          Einzelmodule
                        </Link>
                        <i className="bx bx-chevron-right" />
                        <div className="mega_dropdown__list">
                          <ul>
                            <li>
                              <Link to="/block_yogaTraning">
                                Blockausbildung / Überblick
                              </Link>
                            </li>
                            <li>
                              <Link to="/yogamodule1">
                                100h Yoga Ausbildung / Modul 1
                              </Link>
                            </li>
                            <li>
                              <Link to="/yogamodule2">
                                +200h Yoga Ausbildung / Modul 2
                              </Link>
                            </li>
                            <li>
                              <Link to="/yogamodule3">
                                +300h Yoga Ausbildung / Modul 3
                              </Link>
                            </li>
                            <li>
                              <Link to="/yogamodule4">
                                +400h Yoga Ausbildung / Modul 4
                              </Link>
                            </li>
                            <li>
                              <Link to="/yogamodule5">
                                +500h Yoga Ausbildung / Modul 5
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to="/yin-yoga">60H Yin Yoga</Link>
                      </li>
                      <li>
                        <Link to="/senior_yogaTraning">60H Senioren Yoga</Link>
                      </li>
                      <li>
                        <Link to="/yogaTraningHybrid">
                          Hybride Wochenend Yogalehrer Ausbildung
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown_menu">
                    <Link to="/yoga_retreat">
                      Yoga Retreat
                      <i className="bx bx-chevron-down" />
                    </Link>
                    <ul className="dropdown_menu__list">
                      <li>
                        <Link to="/yoga_retreat">
                          YOGA RETREAT IN GOA INDIEN
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact">
                      <i className="bx bx-envelope" />
                      KONTAKT
                    </Link>
                  </li>
                  <li>
                    <div className="menu--icon" onClick={handleMobileNav}>
                      <i className="bx bx-menu" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hide_top_menu">
            <Link to="tel:+49(0)69-20134987">
              <i className="bx bxs-mobile" />
              +49(0)69-20134987
            </Link>
            <Link to="mailto:info@turiyayoga.de">
              <i className="bx bxs-envelope" /> info@turiyayoga.de
            </Link>
            <Link to="javascript:void(0)" className="cart-menu">
              <i className="bx bx-shopping-bag" />
              1[LEER]
            </Link>
            <Link>
              <i className="bx bx-user" />
              Anmeldung
            </Link>
          </div>

          {/* =============================================================================== */}
          <div className="form-body">
            {/* <a
        data-bs-toggle="modal"
        data-bs-target="#exampleModal-form"
        className="registerLink"
        style={{ cursor: "pointer" }}
      >
        <i className="bx bx-user" />
        Anmeldung/Registrierung
      </a> */}
            {/* ----------------------------------------------------old code ------------------------------------------- */}
            {/* <div
              className="modal fade"
              id="exampleModal-form"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel-form"
              aria-hidden="true"
              ref={modalRef}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="form-body-top">
                      <div className="modal_input">
                        <label>
                          Benutzername <span>*</span>
                        </label>
                        <input type="text" />
                      </div>
                      <div className="modal_input">
                        <label>
                          Passwort <span>*</span>
                        </label>
                        <input type="text" />
                      </div>
                      <div className="submit-form">
                        <button className="global_btn">Einloggen</button>
                      </div>
                    </div>
                    <div className="form-body-bottom card-footer">
                      <div className="password-forgot">
                        <Link to="/forgot_password" className="btn btn-primary"   data-bs-dismiss="modal">
                          Passwort vergessen?
                        </Link>
                      </div>
                      <h3>Hast du noch keinen Account?</h3>
                      <div className="annmelden">
                        <p
                          onClick={handleRedirect}
                          style={{
                            fontSize: "24px",
                            textDecoration: "underline",
                            color: "#9BBB59",
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                          data-bs-dismiss="modal">
                          Anmelden
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* ----------------------------------------------------------------------- */}

            <div
              className="modal fade"
              id="exampleModal-form"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel-form"
              aria-hidden="true"
              ref={modalRef}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                      <div className="form-body-top">
                        <div className="modal_input">
                          <label>
                            Benutzername <span>*</span>
                          </label>
                          <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                          />
                          {errors.username && (
                            <span className="error">{errors.username}</span>
                          )}
                        </div>
                        <div className="modal_input">
                          <label>
                            Passwort <span>*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                          {errors.password && (
                            <span className="error">{errors.password}</span>
                          )}
                        </div>
                        <div className="submit-form">
                          <button
                            className="global_btn"
                            type="submit"
                            data-bs-dismiss="modal">
                            Einloggen
                          </button>
                        </div>
                      </div>
                      <div className="form-body-bottom card-footer">
                        <div className="password-forgot">
                          <Link
                            to="/forgot_password"
                            className="btn btn-primary"
                            data-bs-dismiss="modal">
                            Passwort vergessen?
                          </Link>
                        </div>
                        <h3>Hast du noch keinen Account?</h3>
                        <div className="annmelden">
                          <p
                            onClick={handleRedirect}
                            style={{
                              fontSize: "24px",
                              textDecoration: "underline",
                              color: "#9BBB59",
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                            data-bs-dismiss="modal">
                            Anmelden
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------------------------------- */}
          </div>

          {/* ============================================================================================= */}
          {/* <div className="form-body">
      <div className="modal fade" id="exampleModal-form" tabIndex={-1} aria-labelledby="exampleModalLabel-form" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-body-top">
                <div className="modal_input">
                  <label>Benutzername <span>*</span></label>
                  <input type="text" />
                </div>
                <div className="modal_input">
                  <label>Passwort <span>*</span></label>
                  <input type="text" />
                </div>
                <div className="submit-form">
                  <button className="global_btn">Einloggen</button>
                </div>
              </div>
              <div className="form-body-bottom card-footer">
                <div className="password-forgot">
                  <a href="forgot-login.php" className="btn btn-primary">Passwort vergessen?</a>
                </div>
                <h3>Hast du noch keinen Account?</h3>
                <div className="annmelden">
                  <a href="registration.php">Anmelden</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

          {isModalOpen && (
            <div className="form-body">
              <div className="modal fade show" id="exampleModal-form">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="form-body-top">
                        <div className="modal_input">
                          <label>
                            Benutzername <span>*</span>
                          </label>
                          <input type="text" />
                        </div>
                        <div className="modal_input">
                          <label>
                            Passwort <span>*</span>
                          </label>
                          <input type="password" />
                        </div>
                        <div className="submit-form">
                          <button className="global_btn">Einloggen</button>
                        </div>
                      </div>
                      <div className="form-body-bottom card-footer">
                        <div className="password-forgot">
                          <a
                            href="forgot-login.php"
                            className="btn btn-primary">
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

          {showSiderBar && (
            <div class="cart-overlay active">
              <div class="cart-overlay-content">
                <div className="row">
                  <div className="col-sm-12 d-flex justify-content-right">
                    <IoMdClose className="closeIcon" onClick={closeSideber} />
                  </div>
                </div>
                <button id="update-cart">
                  <i class="bx bx-trash"></i>
                </button>
                <div class="cart-overlay-heading" id="cart_content">
                  <div class="cart_wrapper__left-box">
                    <div class="cart_left__heading">
                      <h6>* All Inklusive Yogalehrer Ausbildung M3</h6>
                      <div class="del"></div>
                    </div>
                    <div class="cart-price">
                      <p>€1699</p>
                    </div>
                    <div class="cart-list">
                      <ul>
                        <li>
                          <i class="bx bxs-calendar"></i> 15.11.24 - 22-11-24
                        </li>
                        <li>Goa, Indien</li>
                        <li>5</li>
                      </ul>
                    </div>
                    <div class="cart-total">
                      <h6>TOTAL</h6>
                      <p>€1699</p>
                    </div>
                  </div>
                  Bitte melden Sie sich an, um zur Kasse zu gehen.
                </div>
              </div>
            </div>
          )}

          {/* mobile nav */}
          <div className={`mobile_nav ${isActive ? "active" : ""}`}>
            <div className="mobile_nav__content">
              <div className="mobile_header">
                <div className="myNav_logo">
                  <Link to="/">
                    <img
                      src="https://www.turiyayoga.de/upload/logo/159599431323469f950cf73a5.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="cancel-menu" onClick={handleCancel}>
                  <i className="bx bx-x" />
                </div>
              </div>
              <div className="mobile_menu">
                <ul>
                  <li className="drop-menu">
                    <Link
                      to="/"
                      className={`active-menu ${
                        activeLink === "about" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("about")}>
                      ÜBER UNS <i className="bx bx-chevron-right"></i>
                    </Link>
                    <div className="drop-menu-list">
                      <Link
                        to="/unsere-geschichte.php"
                        className={
                          activeLink === "unsereGeschichte" ? "active" : ""
                        }
                        onClick={() => handleLinkClick("unsereGeschichte")}>
                        Unsere Geschichte
                      </Link>
                      <Link
                        to="/unsere-philosophie.php"
                        className={
                          activeLink === "unserePhilosophie" ? "active" : ""
                        }
                        onClick={() => handleLinkClick("unserePhilosophie")}>
                        Unsere Philosophie
                      </Link>
                      <Link
                        to="/kundenstimmen.php"
                        className={
                          activeLink === "kundenstimmen" ? "active" : ""
                        }
                        onClick={() => handleLinkClick("kundenstimmen")}>
                        Kundenstimmen
                      </Link>
                      <Link
                        to="/team.php"
                        className={activeLink === "team" ? "active" : ""}
                        onClick={() => handleLinkClick("team")}>
                        Turiya Yoga Team
                      </Link>
                      <Link
                        to="/blog.php"
                        className={activeLink === "blog" ? "active" : ""}
                        onClick={() => handleLinkClick("blog")}>
                        Turiya Yoga Blog
                      </Link>
                    </div>
                  </li>
                  <li className="drop-menu">
                    <Link
                      to="/"
                      className={`active-menu ${
                        activeLink === "yogaTraining" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("yogaTraining")}>
                      Yogalehrer Ausbildungen{" "}
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                    <div className="drop-menu-list">
                      <Link
                        to="/training.php?t_id=1"
                        className={
                          activeLink === "kommendeKurse" ? "active" : ""
                        }
                        onClick={() => handleLinkClick("kommendeKurse")}>
                        Alle Kommenden Kurse
                      </Link>
                      <div className="mega-list">
                        <Link
                          to="#"
                          className={activeLink === "intensiv" ? "active" : ""}
                          onClick={() => handleLinkClick("intensiv")}>
                          200H AYA Yogalehrer Ausbildung - Intensiv{" "}
                          <i className="bx bx-chevron-right"></i>
                        </Link>
                        <div className="mega-list-menu">
                          <div className="cancel-mega-menu">
                            <p>
                              <i className="bx bx-left-arrow-alt"></i> Back
                            </p>
                          </div>
                          <ul>
                            <li>
                              <Link
                                to="/module.php?cm_id=1"
                                className={
                                  activeLink === "module1" ? "active" : ""
                                }
                                onClick={() => handleLinkClick("module1")}>
                                200H AYA Yogalehrer Ausbildung
                              </Link>
                            </li>
                            {/* Add more links as needed with unique identifiers */}
                          </ul>
                        </div>
                      </div>
                      {/* Add other items in a similar way */}
                    </div>
                  </li>
                  <li className="drop-menu">
                    <Link
                      to="/"
                      className={`active-menu ${
                        activeLink === "retreat" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("retreat")}>
                      Yoga Retreat <i className="bx bx-chevron-right"></i>
                    </Link>
                    <div className="drop-menu-list">
                      <Link
                        to="/yoga-retreat-in-goa-indien.php"
                        className={activeLink === "retreatGoa" ? "active" : ""}
                        onClick={() => handleLinkClick("retreatGoa")}>
                        YOGA RETREAT IN GOA INDIEN
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/contact-us.php"
                      className={`contact-mob ${
                        activeLink === "contact" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("contact")}>
                      <i className="bx bx-envelope"></i> KONTAKT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
