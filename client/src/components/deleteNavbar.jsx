import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/images/logo.webp";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { BASE_URL } from "../config";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false); // State to manage active class
const [token,setToken] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSiderBar, setShowSiderBar] = useState(false);
  const navigate = useNavigate();
  const headerRef = useRef(null);


  const [hover, setHover] = useState(false);

  const buttonStyle = {
    border: "none",
    color: "rgb(151 146 158)",
    backgroundColor: hover ? "#eeeeee" : "inherit", // Change background color on hover
    cursor: "pointer", // Add a pointer cursor
  };



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

  const modalRef = useRef(null);

  const handleAnmeldenClick = () => {
    console.log("button clicked");
    // if (modalRef.current) {
    //   console.log("modalRef.current");
    //   const modal = new window.bootstrap.Modal(modalRef.current);
    //   modal.hide(); // This will hide the modal
    // }
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



  const [userDetail, setUserDetail] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: formData.username,
      password: formData.password,
    };

    if (validate()) {
      console.log("Form submitted successfully", formData);

      axios
        .post(`${BASE_URL}/loginnew`, payload)
        .then((response) => {
          console.log("response of login", response.data);
          setToken(response.data.token);
          setUserDetail(response.data.user)
          localStorage.setItem('turiya_auth_token', response.data.token);
          localStorage.setItem('turiya_auth_id',response.data.user._id);
          if (response.status == 200) {
     Swal.fire({
              title: "Thank You!",
              text: "Logged Successfully!",
              icon: "success"
            });
            navigate("/");
          } else if(response.status == 404) {
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

  const [cartFetchedData, setcartFetchedData] = useState('');


  
  const fetchCartData = () => {
    axios.get('${BASE_URL}/get_all_cart_module').then((response) => {
      console.log("response of cart fetched", response.data.data);
      setcartFetchedData(response.data.data);
    }).catch((error) => {
      console.log("error",error)
    })
  }

  useEffect(() => {
    fetchCartData();
  }, []);



  const [activeLink, setActiveLink] = useState(null);

  // Function to handle click and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link === activeLink ? null : link);
    if (link == "contact") {
      setIsActive(false);
    }

    //     else if (link == "Unsere Geschichte") {
    //       setIsActive(false);
    //     }
    //  else if (link == "Unsere Philosophie") {
    //       setIsActive(false);
    //     }
    //      else if (link == "Kundenstimmen") {
    //       setIsActive(false);
    //     }
    //   else if (link == "Turiya Yoga Team") {
    //       setIsActive(false);
    //     }
    //  else if (link == "Turiya Yoga Blog") {
    //       setIsActive(false);
    //     }

    // Toggle active link
  };

  // ===================================

  // const [activeLink, setActiveLink] = useState(null);

  // // Function to handle click and set the active link
  // const handleLinkClick = (link) => {
  //   setActiveLink(link === activeLink ? null : link); // Toggle active link
  // };
  const replaceSpacesWithUnderscores = (category) => {
    return category.replace(/\s+/g, "_");
  };



  const [categoryData, setcategoryData] = useState("");
  const [courseSubCategoryData, setCourseSubCategoryData] = useState("");

  const fetchCourseCategory = () => {
    axios
      .get(`${BASE_URL}/course_categories_latest`)
      .then((response) => {
        console.log("response of course_categories_latest", response.data.data);
        setcategoryData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching course category", error);
      });
  };

  const fetchCourseSubCategoryData = (id) => {
    axios
      .get(`${BASE_URL}/module_categories_latest`)
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


  const deleteCartData =  (id) => {
    axios.delete(`${BASE_URL}/delete_cart/${id}`).then((response) => {
      console.log("response od delete", response)
      if (response.status == 200) {
        fetchCartData();
      }
    }).catch((error) => {
      console.log("error",error)
    })
  }
  // Handle input change

const id = localStorage.getItem("turiya_auth_id");


  const fetchUserDetail = () => {
    if (id) {
      axios
      .get(`${BASE_URL}/getUserDetailById/${id}`)
      .then((response) => {
        console.log("response of user", response);
   
        setUserDetail(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    }
   
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);



  // ==========================================================
  
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
                    <span className="me-1">{cartFetchedData && cartFetchedData.length}</span>[LEER]
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

              
                {
                  token && userDetail ?
                    
                    
                    
              <Link to="/profile"
                  className="registerLink"
                  style={{ cursor: "pointer",fontSize:"20px",textTransform:"capitalize" }}>
                  <i className="bx bx-user" />
                 { userDetail.First_name + " " + userDetail.Last_name}
                  </Link>
                    
                    
                    
                    :
                    
                    
                  //   <a
                  // data-bs-toggle="modal"
                  // data-bs-target="#exampleModal-form"
                  // className="registerLink"
                  // style={{ cursor: "pointer" }}>
                  // <i className="bx bx-user" />
                  // Anmeldung/Registrierung n
                  //   </a>
                  

                  <button
                  type="button"
                      className="invoice_download_btn"

                      style={buttonStyle}
                      onMouseEnter={() => setHover(true)} // Set hover state to true
                      onMouseLeave={() => setHover(false)} // Reset hover state to false

                      // Change background color on hover
                      // style={{border:"none",color:"rgb(151 146 158)", backgroundColor: hover ? "#88929e" : "inherit"}}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
               
                  Anmeldung/Registrierung
                </button>

                }
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
                        <Link to="/senioren-yoga">60H Senioren Yoga</Link>
                      </li>
                      <li>
                        <Link to="/yogaTraningHybrid">
                          Hybride Wochenend Yogalehrer Ausbildung
                        </Link>
                      </li>

                      {/* ================================== */}

                      {/* {
                              categoryData && categoryData.map((data, index) => {
                                return (
                                  <li key={index}>
                                    <Link to={`/${replaceSpacesWithUnderscores(data.category)}`}>
                                      {data.category}
                                    </Link>
                                  </li>
                                )
                              })
                              } */}

                      {/* ================================== */}
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
           { console.log("cartFetchedData",cartFetchedData)}
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
              <div class="cart-overlay-content px-3">
              <IoMdClose className="closeIcon" onClick={closeSideber} />

             
              {
                cartFetchedData && cartFetchedData.map((item, index) => {
                  return (
                    <div div key={index}>
                    
                  
                    {/* <div className="row">
                  <div className="col-sm-12 d-flex justify-content-right">
                    <IoMdClose className="closeIcon" onClick={closeSideber} />
                  </div>
                </div> */}
                {/* <button id="update-cart">
                  <i class="bx bx-trash"></i>
                </button> */}
                      {/* <div className="row">

                     
                        <div className="col-sm-12 d-flex justify-content-end d-flex align-items-end">
                          <MdDelete style={{color:'#d73232',fontWeight:"bold",fontSize:"20px",marginRight:"30px",cursor:"pointer"}} onClick={()=>deleteCartData(item._id)} />
                        </div>
                      </div> */}
                <div class="cart-overlay-heading" id="cart_content">
                    <div class="cart_wrapper__left-box">
                      <div class="cart_left__heading">
                          <h6>{item.moduleId && item.moduleId.Ausbildung}</h6>
                        <div class="del"></div>
                      </div>
                      <div class="cart-price">
                          <p> {item.moduleId && item.moduleId.price}</p>
                      </div>
                      <div class="cart-list">
                        <ul>
                          <li>
                              <i class="bx bxs-calendar"></i> {item.moduleId &&item.moduleId.StartDate} - {item.moduleId && item.moduleId.EndDate}
                          </li>
                            <li>{item.moduleId && item.moduleId.Location}</li>
                            <li>{item.moduleId && item.moduleId.Place}</li>
                        </ul>
                      </div>
                      <div class="cart-total">
                        <h6>TOTAL</h6>
                          <p>  {item.moduleId && item.moduleId.price}</p>
                      </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-sm-10">
                          Bitte melden Sie sich an, um zur Kasse zu gehen.

                          </div>

                          <div className="col-sm-2">
                          <MdDelete style={{color:'#d73232',fontWeight:"bold",fontSize:"20px",marginRight:"30px",cursor:"pointer"}} onClick={()=>deleteCartData(item._id)} />
                          </div>
                        </div>
                      </div>
                      <hr/>
                </div>
                   
                  )
                })
              }
            </div>
            </div>


            
          )}

          
          {
            console.log("cartFetchedData",cartFetchedData && cartFetchedData.moduleId)
          }
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
                    <div
                      className={`drop-menu-list ${
                        activeLink === "about" ? "show" : ""
                      }`}>
                      <Link
                        to="/unsere_Geschichtetory"
                        onClick={() => setIsActive(false)}>
                        Unsere Geschichte
                      </Link>
                      <Link
                        to="/unsere-Philosophie"
                        onClick={() => setIsActive(false)}>
                        Unsere Philosophie
                      </Link>
                      <Link
                        to="/kundenstimmen"
                        onClick={() => setIsActive(false)}>
                        Kundenstimmen
                      </Link>
                      <Link to="/team" onClick={() => setIsActive(false)}>
                        Turiya Yoga Team
                      </Link>
                      <Link to="/blog" onClick={() => setIsActive(false)}>
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
                    <div
                      className={`drop-menu-list ${
                        activeLink === "yogaTraining" ? "show" : ""
                      }`}>
                      <Link to="/allCourses" onClick={() => setIsActive(false)}>
                        Alle Kommenden Kurse
                      </Link>
                      {/* Additional nested links */}
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
                    <div
                      className={`drop-menu-list ${
                        activeLink === "retreat" ? "show" : ""
                      }`}>
                      <Link
                        to="/yoga_retreat"
                        onClick={() => setIsActive(false)}>
                        YOGA RETREAT IN GOA INDIEN
                      </Link>
                    </div>
                  </li>

                  <li>
                    <Link
                      to="/contact"
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


        <div
        className="modal fade modal-fullscreen-md-down"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen-md-down">
          <div className="modal-content">
      
            <div className="modal-body">
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
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>


      </div>
    </>
  );
};

export default Navbar;
