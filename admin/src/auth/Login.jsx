

// ===================================================================================

import React, { useState } from "react";
import "./login.scss";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'
import { BASE_URL,BASE_URL_IMAGE } from "../config";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    axios.post(BASE_URL + '/admin-login',{
      email: formData.email,
      password: formData.password
    }).then((response) => {
      console.log("response", response);
      

      if (response.status == 200) {
        localStorage.setItem("admintoken", response.data.token);
        localStorage.setItem("token", response.data.token);


        Swal.fire({
          title: "Good job!",
          text: "Logged Successfully!",
          icon: "success"
        });


        navigate('/')
      } else {
        // alert("Invalid Credentials");

        Swal.fire({
          icon: "error",
          title: "Ups…",
          text: "Bitte geben Sie die richtige E-Mail-Adresse und das richtige Passwort ein!!",
          footer: '<a href="#">Bitte versuchen Sie es erneut</a>'
        });
      }
    }).catch((error) => {
      console.log("error",error);
    })

 
  };



  return (
    <>
      <div className="authentication-bg d-flex align-items-center justify-content-center">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12">
              <div className="card overflow-hidden login_card">
                <div className="pt-4">
                  <div className="ammin-logo text-center">
                    <img
                      src="https://api.turiyayoga.de/uploads/assets/new/logo.webp"
                      alt="Logo"
                      style={{ width: "11rem" }}
                    />
                  </div>
                  <h4 className="py-4 text-center">Enter Details for Login</h4>
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
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <div
                          className="input-group-text"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{ cursor: "pointer" }}>
                          {showPassword ? <LuEyeOff /> : <LuEye />}
                        </div>
                      </div>
                      {/* <a
                        href="forget.php"
                        className="text-muted float-end py-2">
                        <small><Link to="/forgot_password" >Forgot your password?</Link></small>
                      </a> */}
                    </div>
                    <div className="mb-2 text-start">
                      <button
                        className="btn btn-login w-100 mt-3"
                        type="submit">
                        <i className="ri-login-circle-fill me-1" />{" "}
                        <span className="fw-bold">Log In</span>
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

export default Login;
