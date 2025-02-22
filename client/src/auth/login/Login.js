import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";
import { IoCloseSharp } from "react-icons/io5";
// Login component with embedded modal
const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(true); // Initially modal is hidden

  const navigate = useNavigate();
  // Open the modal when the page loads
  // useEffect(() => {
  //   setShowModal(true); // Set to true to show modal on page load
  // }, []);

  const handleRedirect = () => {
    navigate("/register"); // Redirect to the register page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

    const payload = { email: formData.username, password: formData.password };

    if (validate()) {
      console.log("Form submitted successfully", formData);

      axios
        .post(BASE_URL + "/loginnew", payload)
        .then((response) => {
          console.log("response of login", response.data);

          if(response?.data.isVerified===false){
            alert(response.data.msg)
            return;
          }

          localStorage.setItem("turiya_auth_token", response.data.token);
          localStorage.setItem("turiya_auth_id", response.data.user._id);

          const fullname = response.data && 
            response.data.user.First_name + " " + response.data.user.Last_name;

          
          console.log("fullname of user", fullname);
          localStorage.setItem("user", fullname);
          if (response.status === 200) {
            Swal.fire({
              title: "Danke!",
              text: "Erfolgreich Angemeldet!",
              icon: "success",
              customClass: {
                popup: "custom-swal",
              },
            });

            // Close the modal after successful login
            // setShowModal(false);
            navigate("/");
          } else if (response.status === 404) {
            alert("Not Registered");
          }
        })
        .catch((error) => {
          alert(error?.response?.data?.msg || "Something went wrong");
          console.log("error", error);
        });
    } else {
      alert("Validation failed");
    }
  };

  const handleClose = () => {
    setShowModal(false);
    navigate("/"); // Redirect to the register page
  }

  return (
    <div className="login-container">
      <div
        className="custom-modal-overlay"
        onClick={() => setShowModal(false)} // Close on backdrop click
      >
        <div
          className="custom-modal-content"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <div className="div d-flex justify-content-end">
         < IoCloseSharp style={{fontSize:'20px',fontWeight:'500',cursor:"pointer"}} onClick={handleClose}/>
          </div>
          {/* ========================================== */}
          <form method="POST" id="user_login_form" onSubmit={handleSubmit}>
            <div className="modal_input">
              <label>
                E-Mail <span>*</span>
              </label>
              <input
                type="email"
                name="username" // Match the name with the state field
                value={formData.username}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.username && (
                <div className="text-danger">{errors.username}</div>
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
                placeholder="Password"
              />
              {errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}
            </div>
            <div
              className="submit-form"
              style={{ display: "flex", justifyContent: "center" }}>
              <button type="submit" className="global_btn">
                Einloggen
              </button>
            </div>
            <div className="form-body-bottom">
              <div className="password-forgot">
                <Link
                  to="/forgot_password"
                  className="btn btn-primary"
                  //  data-bs-dismiss="modal"
                >
                  Passwort vergessen?
                </Link>
              </div>
              <h3 className="account_text">Hast du noch keinen Account?</h3>
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
                  // data-bs-dismiss="modal"
                >
                  Anmelden
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Custom Modal */}
      {/* {showModal && (
     
      )} */}

      {/* Inline styles for custom modal */}
      <style jsx>{`
        .custom-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent backdrop */
          display: flex;
          justify-content: center;
          align-items: top;
          z-index: 1000;
        }

        .custom-modal-content {
          background-color: white;
          padding: 44px 74px;
          border-radius: 8px;
          width: 100%;
          max-width: 1000px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
          height: fit-content;
          top: 30px;
        }

        .custom-modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 30px;
          color: #333;
          cursor: pointer;
        }

        .custom-modal-close:hover {
          color: #e74c3c;
        }

        .custom-modal-input {
          margin-bottom: 15px;
        }

        .custom-modal-input input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .custom-modal-btn {
          width: 100%;
          padding: 10px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .custom-modal-btn:hover {
          background-color: #2980b9;
        }

        .text-danger {
          color: red;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default Login;
