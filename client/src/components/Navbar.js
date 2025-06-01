import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/images/logo.webp";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { BASE_URL, BASE_URL_IMAGE } from "../config";
import { IoMdArrowBack } from "react-icons/io";
import "./navbar.scss";
import { FaCalendarAlt, FaPhoneAlt, FaTimes } from "react-icons/fa";

const Navbar = ({ updateCartNumber, setUpdateCartNumber }) => {
  const [isActive, setIsActive] = useState(false); // State to manage active class
  const [token, setToken] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSiderBar, setShowSiderBar] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const id = localStorage.getItem("turiya_auth_id");

  const handleMobileNav = () => {
    setIsActive(!isActive);
  };

  const handleCancel = () => {
    setIsActive(false);
  };

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

  const [userDetail, setUserDetail] = useState("");

  const user = localStorage.getItem("user");

  const [cartFetchedData, setcartFetchedData] = useState([]);

  const fetchCartData = () => {
    console.log("id of user", id);
    axios
      .get(BASE_URL + `/getAllModuleWithId/${id}`)
      .then((response) => {
        console.log("response of cart fetched", response.data.data);
        setcartFetchedData(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchCartData();
  }, [updateCartNumber]);

  const handleRedirect = () => {
    if (id) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const [activeLink, setActiveLink] = useState(null);

  // Function to handle click and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link === activeLink ? null : link);
    if (link == "contact") {
      setIsActive(false);
    }
  };

  const [megaDropdownVisible, setMegaDropdownVisible] = useState(false);

  const [showMegaDropdown, setShowMegaDropdown] = useState(false);
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      overflowY: "auto",
    },
    modal: {
      position: "relative", // must be relative so closeButton positions correctly
      backgroundColor: "white",
      borderRadius: "12px",
      width: "95%",
      maxWidth: "1000px",
      margin: "32px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      overflow: "hidden",
      maxHeight: "90vh",
    },
    closeButton: {
      position: "absolute",
      top: "12px",
      right: "12px",
      background: "transparent",
      border: "none",
      fontSize: "24px",
      color: "#333",
      cursor: "pointer",
      zIndex: 100,
    },
    iframeWrapper: {
      marginTop: "16px",
      paddingTop: "32px", // space for close button
    },
    iframe: {
      width: "100%",
      height: "600px",
      border: "none",
    },
  };

  // References to the elements
  const mainListRef = useRef(null);
  const handleEinzelmoduleClickRef = useRef(null);

  const yogalehrer_Ausbildung = useRef(null);

  // Update the handler to use index
  const handle_Yogalehrer_Ausbildung = (category, index) => {
    if (
      mainListRef.current &&
      yogalehrer_Ausbildung.current &&
      yogalehrer_Ausbildung.current[index]
    ) {
      mainListRef.current.style.display = "none";
      yogalehrer_Ausbildung.current[index].style.display = "block";
    }
    setShowMegaDropdown(true);
  };

  const handleCancelyogalehrer_Ausbildung = (category, index) => {
    if (
      mainListRef.current &&
      yogalehrer_Ausbildung.current &&
      yogalehrer_Ausbildung.current[index]
    ) {
      mainListRef.current.style.display = "block";
      yogalehrer_Ausbildung.current[index].style.display = "none";
    }
  };
  // Handle link click for the "500H AYA Yogalehrer Blockausbildung | 100h Einzelmodule"
  const handleEinzelmoduleClick = () => {
    // Hide the main list and show the mega dropdown
    if (mainListRef.current && handleEinzelmoduleClickRef.current) {
      mainListRef.current.style.display = "none"; // Hide the main list
      handleEinzelmoduleClickRef.current.style.display = "block"; // Show the mega dropdown
    }
    setShowMegaDropdown(true); // Track that mega dropdown should be visible
  };

  // ===================================

  const replaceSpacesWithUnderscores = (category) => {
    return category.replace(/\s+/g, "-");
  };

  const [categoryData, setcategoryData] = useState([]);
  const [courseSubCategoryData, setCourseSubCategoryData] = useState("");
  const fetchCourseCategory = () => {
    axios
      .get(BASE_URL + "/course_categories_latest")
      .then((response) => {
        console.log("response of course_categories_latest", response.data.data);
        const activeCategories = response.data.data.filter(
          (category) => category.status === "active"
        );
        setcategoryData(activeCategories);
      })
      .catch((error) => {
        console.error("Error fetching course category", error);
      });
  };

  const fetchCourseSubCategoryData = (id) => {
    axios
      .get(BASE_URL + "/module_categories_latest")
      .then((response) => {
        console.log(
          "response of fetchCourseSubCategoryData",
          response.data.data
        );
        // setcategoryData(response.data.data);
        setCourseSubCategoryData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching course category", error);
      });
  };

  useEffect(() => {
    fetchCourseCategory();
    fetchCourseSubCategoryData();
  }, []);

  console.log("Fetching course category", categoryData);

  const deleteCartData = (id) => {
    axios
      .delete(BASE_URL + `/delete_cart/${id}`)
      .then((response) => {
        console.log("response od delete", response);
        // fetchCartData2();
        const updatedCartData = cartFetchedData.filter(
          (item) => item._id !== id
        );
        setcartFetchedData(updatedCartData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  // Handle input change

  const fetchUserDetail = () => {
    if (id) {
      axios
        .get(BASE_URL + `/getUserDetailById/${id}`)
        .then((response) => {
          console.log("response of user", response);

          setUserDetail(response.data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  const [puchasedCourse, setPuchasedCourse] = useState("");

  const FetchedPurchased = () => {
    console.log("Fetched cart id", id);

    // console.log("BASE_URL of FetchedPurchased",BASE_URL + `/get_purchasedModule/${id}`)
    if (id) {
      axios
        // .get("http://127.0.0.1:7000/api/get_purchasedModule")
        .get(BASE_URL + `/get_purchasedModule/${id}`)
        .then((response) => {
          console.log("response of get_purchasedModule", response.data.data);
          setPuchasedCourse(response.data.data);
          // setcartFetchedData(response.data.data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  useEffect(() => {
    fetchUserDetail();
    FetchedPurchased();
  }, []);

  // ==========================================================
  const handleCancelMegaMenu = () => {
    if (mainListRef.current && handleEinzelmoduleClickRef.current) {
      mainListRef.current.style.display = "block";
      handleEinzelmoduleClickRef.current.style.display = "none";
    }
  };

  // const handle_Yogalehrer_Ausbildung = () => {
  //   // Hide the main list and show the mega dropdown
  //   if (mainListRef.current && yogalehrer_Ausbildung.current) {
  //     mainListRef.current.style.display = "none"; // Hide the main list
  //     yogalehrer_Ausbildung.current.style.display = "block"; // Show the mega dropdown
  //   }
  //   setShowMegaDropdown(true); // Track that mega dropdown should be visible
  // };

  // // ==========================================================

  // const handleCancelyogalehrer_Ausbildung = () => {
  //   if (mainListRef.current && yogalehrer_Ausbildung.current) {
  //     mainListRef.current.style.display = "block";
  //     yogalehrer_Ausbildung.current.style.display = "none";
  //   }
  // };

  console.log("cart data length: ", cartFetchedData);

  function isOfferValid(offerEndDate) {
    if (!offerEndDate) return false;

    const today = new Date();
    const offerEnd = new Date(offerEndDate);

    return today <= offerEnd; // Offer is valid if the current date is before or equal to the end date
  }

  return (
    <>
      <div ref={headerRef} className="myNav">
        <div className="container-fluid">
          <div className="myNav_content">
            <div className="myNav_logo">
              <Link to="/">
                <img src={logo} className="img-fluid" alt="logo" />
              </Link>
            </div>
            <div className="myNav_content__right">
              <div className="top_menu">
                <Link href="#" onClick={() => setIsPopupOpen(true)}>
                  <span className="flex items-center gap-2 cursor-pointer">
                    <i className="bx bxs-mobile" /> Einen Termin Vereinbaren
                  </span>
                </Link>

                {/* <Link to="tel:+49(0)69-20134987">
                  <i className="bx bxs-mobile" />
                  +49(0)69-20134987
                </Link> */}
                <Link to="mailto:info@turiyayoga.de">
                  <i className="bx bxs-envelope" /> info@turiyayoga.de
                </Link>
                <Link className="cart-menu">
                  <p onClick={handleSidBar}>
                    <i className="bx bx-shopping-bag" />
                    <span className="me-1">
                      {cartFetchedData && cartFetchedData.length > 0
                        ? cartFetchedData.length
                        : "0 [LEER]"}
                    </span>
                  </p>
                </Link>
                {user ? (
                  <>
                    <p
                      onClick={handleRedirect}
                      className="registerLink"
                      style={{
                        cursor: "pointer",
                        fontSize: "16px",
                        textTransform: "capitalize",
                      }}
                    >
                      <i className="bx bx-user" />
                      {user && user}
                    </p>
                    <p
                      style={{
                        cursor: "pointer",
                        fontSize: "16px",
                        textTransform: "capitalize",
                      }}
                      className="registerLink"
                      onClick={() => {
                        console.log("Logging out...");
                        localStorage.removeItem("turiya_auth_id");
                        localStorage.removeItem("turiya_auth_token");
                        localStorage.removeItem("user");
                        navigate("/login");
                      }}
                    >
                      Logout
                    </p>
                  </>
                ) : (
                  <p
                    onClick={handleRedirect}
                    className="registerLink"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="bx bx-user" />
                    Anmeldung/Registrierung
                  </p>
                )}
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
                        <Link to="/unsere-Geschichtetory">
                          Unsere Geschichte
                        </Link>
                      </li>
                      <li>
                        <Link to="/unsere-Philosophie">Unsere Philosophie</Link>
                      </li>
                      {/* <li>
                        <Link to="/team">Turiya Yoga Team</Link>
                      </li> */}
                      <li>
                        <Link to="/blog">Turiya Yoga Blog</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown_menu">
                    <Link to="#">
                      Yogalehrer Ausbildungen
                      <i className="bx bx-chevron-down" />
                    </Link>
                    <ul className="dropdown_menu__list">
                      {categoryData.map((item) => (
                        <li className="mega_dropdown">
                          <Link to={`/category/${item.slug}`}>
                            {item.category}
                          </Link>
                          {item.courseSubCategories.length > 0 && (
                            <i className="bx bx-chevron-right" />
                          )}
                          {item.courseSubCategories.filter(
                            (sub) => sub.status === "active"
                          ).length > 0 && (
                            <>
                              <div className="mega_dropdown__list">
                                <ul
                                  style={{
                                    overflowY: "scroll",
                                    maxHeight: "400px",
                                  }}
                                >
                                  {item.courseSubCategories
                                    .filter((sub) => sub.status === "active") // Filter only active subcategories
                                    .map((subitem) => (
                                      <li key={subitem._id}>
                                        <Link to={`/module/${subitem.slug}`}>
                                          {subitem.modulecategory}
                                        </Link>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="dropdown_menu">
                    <Link to="#">
                      Kundenstimmen
                      <i className="bx bx-chevron-down" />
                    </Link>
                    <ul className="dropdown_menu__list">
                      <li>
                        <Link to="/kundenstimmen">Kundenstimmen</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact">
                      <i className="bx bx-envelope" />
                      <span className="pt-1">KONTAKT</span>
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

          {/* =============================================================================== */}
          <div className="form-body">
            {/* ----------------------------------------------------old code ------------------------------------------- */}

            {/* ----------------------------------------------------------------------- */}
            {console.log("cartFetchedData", cartFetchedData)}

            {/* -------------------------------------------------------------------------------------- */}
          </div>

          {/* ============================================================================================= */}

          {showSiderBar && (
            <div class="cart-overlay active">
              <div class="cart-overlay-content px-3">
                <IoMdClose className="closeIcon" onClick={closeSideber} />

                {console.log("cartFetchedData map", cartFetchedData)}

                {cartFetchedData && cartFetchedData.length > 0 ? (
                  cartFetchedData.map((item, index) => {
                    console.log("item of cart data", item);
                    const module = item.moduleId;
                    const isValidOffer =
                      module && isOfferValid(module.OfferEndDate);

                    return (
                      <div key={index}>
                        <div className="cart-overlay-heading" id="cart_content">
                          <div className="cart_wrapper__left-box">
                            <div className="cart_left__heading">
                              <h6>{module && module.Ausbildung}</h6>
                              <div className="del"></div>
                            </div>
                            <div className="cart-price">
                              <p>
                                {isValidOffer && module.Offerprice > 0 ? (
                                  <>
                                    €{module.Offerprice}{" "}
                                    <del style={{ color: "#c3c3c3" }}>
                                      €{module.price}
                                    </del>
                                  </>
                                ) : (
                                  <>€{module?.price}</>
                                )}
                              </p>
                            </div>
                            <div className="cart-list">
                              <ul>
                                <li>
                                  <i className="bx bxs-calendar"></i>{" "}
                                  {module && module.StartDate} -{" "}
                                  {module && module.EndDate}
                                </li>
                                <li>{module && module.Location}</li>
                                <li>{module && module.Place}</li>
                              </ul>
                            </div>
                            <div className="cart-total">
                              <h6>TOTAL</h6>
                              <p>
                                {isValidOffer && module.Offerprice > 0
                                  ? `€${module.Offerprice}`
                                  : `€${module?.price}`}
                              </p>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-sm-10">
                              {user ? (
                                <button
                                  onClick={() => {
                                    localStorage.setItem(
                                      "cartItemBooking",
                                      item._id
                                    );
                                    navigate(`/course_booking/${module._id}`);
                                    closeSideber();
                                  }}
                                  style={{
                                    backgroundColor:
                                      item.Place <= 3 ? "#FF5722" : "#9BBB59",
                                    border: "0px solid",
                                    position: "relative",
                                    width: "fit-content",
                                    padding: "5px 10px",
                                    color: "white",
                                  }}
                                  className="triggerDialogBox"
                                  data-id={9}
                                >
                                  Buchung fortsetzen
                                </button>
                              ) : (
                                <p>
                                  Bitte melden Sie sich an, um zur Kasse zu
                                  gehen.
                                </p>
                              )}
                            </div>

                            <div className="col-sm-2">
                              <MdDelete
                                style={{
                                  color: "#d73232",
                                  fontWeight: "bold",
                                  fontSize: "20px",
                                  marginRight: "30px",
                                  cursor: "pointer",
                                }}
                                onClick={() => deleteCartData(item._id)}
                              />
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                    );
                  })
                ) : (
                  <div className="mt-4">
                    <div class="cart-overlay-heading" id="cart_content">
                      <div className="row mt-3">
                        <div className="col-sm-12 d-flex justify-content-center">
                          <h4 className="empty_text">
                            {" "}
                            Dein Warenkorb ist leer!
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div class="hide_top_menu">
            {/* <a href="tel:+49(0)69-20134987"><i class='bx bxs-mobile'></i>+49(0)69-20134987</a> */}
            <Link href="#" onClick={() => setIsPopupOpen(true)}>
              <span className="flex items-center gap-2 cursor-pointer">
                <i className="bx bxs-mobile" /> Einen Termin Vereinbaren
              </span>
            </Link>
            <a href="mailto:info@turiyayoga.de">
              <i class="bx bxs-envelope"></i> info@turiyayoga.de
            </a>
            <a
              href="javascript:void(0)"
              class="cart-menu"
              onClick={handleSidBar}
            >
              <i class="bx bx-shopping-bag"></i>
              <span className="me-1">
                {cartFetchedData && cartFetchedData.length > 0
                  ? cartFetchedData.length
                  : "0 [LEER]"}
              </span>
            </a>
            {user ? (
              <>
                <p
                  onClick={handleRedirect}
                  className="registerLink"
                  style={{
                    cursor: "pointer",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  <i className="bx bx-user" />
                  {user && user}
                </p>
                <p
                  style={{
                    cursor: "pointer",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                  className="registerLink"
                  onClick={() => {
                    console.log("Logging out...");
                    localStorage.removeItem("turiya_auth_id");
                    localStorage.removeItem("turiya_auth_token");
                    localStorage.removeItem("user");
                    navigate("/login");
                  }}
                >
                  Logout
                </p>
              </>
            ) : (
              <p
                onClick={handleRedirect}
                className="registerLink"
                style={{ cursor: "pointer" }}
              >
                <i className="bx bx-user" />
                Anmeldung/Registrierung
              </p>
            )}
          </div>

          {/* mobile nav */}
          <div className={`mobile_nav ${isActive ? "active" : ""}`}>
            <div className="mobile_nav__content">
              <div className="mobile_header">
                <div className="myNav_logo">
                  <Link to="/">
                    <img src={logo} className="img-fluid" alt="logo" />
                  </Link>
                </div>
                <div className="cancel-menu" onClick={handleCancel}>
                  <i className="bx bx-x" />
                </div>
              </div>
              <div className="mobile_menu">
                <ul ref={mainListRef}>
                  <li className="drop-menu">
                    <Link
                      to="/"
                      className={`active-menu my-2 ${
                        activeLink === "about" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("about")}
                    >
                      ÜBER UNS <i className="bx bx-chevron-right"></i>
                    </Link>
                    <div
                      className={`drop-menu-list ${
                        activeLink === "about" ? "show" : ""
                      }`}
                    >
                      <Link
                        to="/unsere-Geschichtetory"
                        onClick={() => setIsActive(false)}
                        className="my-2"
                      >
                        Unsere Geschichte
                      </Link>
                      <Link
                        to="/unsere-Philosophie"
                        onClick={() => setIsActive(false)}
                        className="my-2"
                      >
                        Unsere Philosophie
                      </Link>
                      <Link
                        to="/blog"
                        onClick={() => setIsActive(false)}
                        className="my-2"
                      >
                        Turiya Yoga Blog
                      </Link>
                    </div>
                  </li>

                  <li className="drop-menu">
                    <Link
                      to="/"
                      className={`active-menu my-2 ${
                        activeLink === "yogaTraining" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("yogaTraining")}
                    >
                      Yogalehrer Ausbildungen{" "}
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                    <div
                      className={`drop-menu-list ${
                        activeLink === "yogaTraining" ? "show" : ""
                      }`}
                    >
                      {categoryData &&
                        categoryData.map((item, index) => (
                          <li className="mega_dropdown my-3" key={item._id}>
                            {item.courseSubCategories.filter(
                              (sub) => sub.status === "active"
                            ).length > 0 ? (
                              <>
                                <Link
                                  style={{ fontSize: "12px" }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handle_Yogalehrer_Ausbildung(
                                      item.category,
                                      index
                                    );
                                  }}
                                >
                                  {item.category}{" "}
                                  <i className="bx bx-chevron-right" />
                                </Link>
                              </>
                            ) : (
                              <Link
                                to={`/category/${item.slug}`}
                                style={{ fontSize: "12px" }}
                                onClick={() => setIsActive(false)}
                              >
                                {item.category}
                              </Link>
                            )}
                          </li>
                        ))}
                    </div>
                  </li>

                  <li className="drop-menu mb-2">
                    <Link
                      to="/"
                      className={`active-menu my-2 ${
                        activeLink === "kundenstimmen" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("kundenstimmen")}
                    >
                      Kundenstimmen <i className="bx bx-chevron-right"></i>
                    </Link>
                    <div
                      className={`drop-menu-list ${
                        activeLink === "kundenstimmen" ? "show" : ""
                      }`}
                    >
                      <Link
                        to="/kundenstimmen"
                        onClick={() => setIsActive(false)}
                        className="my-2"
                      >
                        Kundenstimmen
                      </Link>
                    </div>
                  </li>

                  <li>
                    <Link
                      to="/contact"
                      className={`contact-mob ${
                        activeLink === "contact" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("contact")}
                    >
                      <i className="bx bx-envelope"></i> KONTAKT
                    </Link>
                  </li>
                </ul>

                {/* Separate subcategory lists outside the main ul */}
                {categoryData &&
                  categoryData.map((item, index) => (
                    <ul
                      key={`sub-${item._id}`}
                      id={`yogalehrer_Ausbildung_${index}`}
                      ref={(el) => {
                        if (!yogalehrer_Ausbildung.current)
                          yogalehrer_Ausbildung.current = [];
                        yogalehrer_Ausbildung.current[index] = el;
                      }}
                      style={{ display: "none" }}
                    >
                      <li>
                        <p
                          className="cancel-mega-menu"
                          onClick={() =>
                            handleCancelyogalehrer_Ausbildung(
                              item.category,
                              index
                            )
                          }
                          style={{
                            cursor: "pointer",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          <IoMdArrowBack /> Go back
                        </p>
                      </li>
                      {item.courseSubCategories
                        .filter((sub) => sub.status === "active")
                        .map((subitem) => (
                          <li className="my-3" key={subitem._id}>
                            <Link
                              to={`/module/${subitem.slug}`}
                              onClick={handleCancel}
                              style={{  display: "block" }}
                            >
                              {subitem.modulecategory}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <button
              onClick={() => setIsPopupOpen(false)}
              style={styles.closeButton}
            >
              ×
            </button>
            <div style={styles.iframeWrapper}>
              <iframe
                src="https://calendly.com/turiyayoga-info/30min" // <-- replace with your link
                frameBorder="0"
                allowFullScreen
                style={styles.iframe}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

// ========================================================
