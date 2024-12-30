import React from "react";
import page_not_found_img from "../assets/images/page_not_found_image.webp";
import { Link } from "react-router-dom";
import './pageNotFound.scss'
import NewsShelter from "../components/NewsShelter";
{
  /* <div className='d-flex justify-content-center d-flex align-items-center'><h3>Page Not Found </h3></div> */
}

const NoPage = () => {
  return (
    <>
      
      <section id="NoPage">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center">
            <div className="my-3 text-center">
            <img src={page_not_found_img} alt="page_not_found_img" />
        <h3>Page not found</h3>
        <h6> The requested page could not be found or an error occurred.</h6>
        <div class="page_link">
          <p>
            <Link to="/">Go back</Link>, or Go to{" "}
            <Link to="/"> Turiya Yoga | Become a yoga teacher!</Link>
          </p>
            </div>
          
        </div>
          </div>
        </div>
        
      </div>


      </section>
  <NewsShelter/>
    </>
  );
};

export default NoPage;
