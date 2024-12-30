import React from "react";
import "./login.scss";
import logout_logo from "../assets/images/shield.gif";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <>
      <div className="authentication-bg d-flex align-items-center justify-content-center">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 ">
              <div className="card overflow-hidden logout_card">
                <div className="row g-0">
                  <div className="col-lg-5 mx-auto">
                    <div className="d-flex flex-column h-100">
                      <div className="auth-brand p-2 text-center">
                        <a href="index.html" className="logo-light">
                          <img
                            src="https://www.turiyayoga.de/admin/assets/images/logo.webp"
                            alt="logo"
                            width={185}
                          />
                        </a>
                        <a href="index.html" className="logo-dark">
                          <img
                            src="https://www.turiyayoga.de/admin/assets/images/logo.webp"
                            alt="dark logo"
                            width={185}
                          />
                        </a>
                      </div>
                      <div className="pb-4 my-auto">
                        <div className="my-auto">
                          {/* title*/}
                          <div className="text-center">
                            <h4 className="mt-0 fs-20">See You Again !</h4>
                            <p className="text-muted mb-4">
                              You are now successfully sign out.
                            </p>
                          </div>
                          {/* Logout icon */}
                          <div className="logout-icon d-flex justify-content-center">
                            <img
                              src={logout_logo}
                              alt
                              className="img-fluid"
                              style={{ width: "140px", margin: "0 auto" }}
                            />
                          </div>
                          {/* end logout-icon*/}
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                </div>

                <div className="row">
                  <div className="col-12 text-center">
                    <p className="text-dark-emphasis">
                      Back To{" "}
                      <Link
                        to="/login"
                        className="text-dark fw-bold ms-1 text-decoration-underline">
                        <b>Log In</b>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
