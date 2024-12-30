import React, { useState } from "react";
import "./login.scss";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import admin_logo from "../assets/images/forgot_password_logo.webp";
import axios from 'axios';


const Forgot_password = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);


    axios.post('http://127.0.0.1:7000/api/forgot_password',formData).then((response) => {
      console.log("response", response.status);

      // if (response.status === 200) {
      //   localStorage.setItem("token", response.token);
      //   alert("Reset password Successfully");
      //   navigate("/login");
      // } else {
      //   alert("Invalid Credentials");
      // }
    }).catch((error) => {
      console.log("error", error);
    })
    // if (formData.username && formData.password) {
    //   localStorage.setItem("token", formData.username);
    //   alert("Reset password Successfully");
    //   navigate("/login");
    // } else {
    //   alert("Invalid Credentials");
    // }
  };

  return (
    <>
      <div className="authentication-bg d-flex align-items-center justify-content-center">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12">
              <div className="card overflow-hidden reset_card">
                <div className="pt-4">
                  <div className="ammin-logo text-center">
                    <img
                      src={admin_logo}
                      alt="Logo"
                      style={{ width: "5rem" }}
                    />
                  </div>
                  <h5 className="py-4 text-center">Forget Your Password.</h5>
                  {/* form */}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Enter Username
                      </label>
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        id="username"
                        required
                        placeholder="Enter your username"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
             
                    <div className="mb-2 text-start">
                      <button
                        className="btn btn-reset-password w-100 mt-3"
                        type="submit">
                        <i className="ri-login-circle-fill me-1" />{" "}
                        <span className="fw-bold">Send Mail</span>
                      </button>
                    </div>
                    <div className="fs-4 text-danger" />
                  </form>
                  {/* end form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot_password;
