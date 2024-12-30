import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL, BASE_URL_IMAGE } from '../config';
import Swal from 'sweetalert2'


const NewsShelter = () => {


    const [email, setEmail] = useState('');
    const [submittedEmail, setSubmittedEmail] = useState(null);
  
    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmittedEmail(email); // Save the email value after submission


      const payload = {
        "email": email
      };

      axios.post(BASE_URL + '/add_subscription',payload).then((response) => {
        console.log("response add_subscription", response);

        if (response.status == 201) {

           Swal.fire({
                    title: "Danke!",
                    text: "Erfolgreich übermittelt!",
                    icon: "success"
                  });

          setEmail('');
        } else {
          alert("something went wrong")
        }
  
      }).catch((error) => {
        console.log("error",error)
      })
  
    };
    
  return (
      <>
   <section className="newsletter_wrapper" data-aos="zoom-in-up">
  <div className="container">
  <form onSubmit={handleSubmit}>
      <div className="row newsletter_wrapper__box">
        <div className="col-lg-8">
          <div className="newsletter_wrapper__left">
            <h3>Hol dir das neueste Update aus unserem Newsletter.</h3>
            <input
              type="email"
              required
              name="news"
              placeholder="Gib deine E-Mail-Adresse ein"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="newsletter-btn">
            <button type="submit" name="submit">Abonnieren</button>
          </div>
        </div>
      </div>
      {/* {submittedEmail && (
        <p>Thank you! You've submitted: {submittedEmail}</p>
      )} */}
    </form>
  </div>
</section>

      
      
      </>
  )
}

export default NewsShelter