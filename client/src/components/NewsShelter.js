import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL, BASE_URL_IMAGE } from '../config';
import Swal from 'sweetalert2'


const NewsShelter = () => {


    const [email, setEmail] = useState('');
    const [submittedEmail, setSubmittedEmail] = useState(null);
    const [loading, setLoading] = useState(false)
  
    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmittedEmail(email);

      setLoading(true)

      const payload = {
        "email": email
      };

      axios.post(BASE_URL + '/add_subscription',payload).then((response) => {
        console.log("response add_subscription", response);

        if (response.status == 201) {
          setLoading(false)

           Swal.fire({
                    title: "Danke!",
                    text: "Erfolgreich übermittelt!",
                    icon: "success"
                  });

          setEmail('');
        } else {
          setLoading(false)
          alert("something went wrong")
        }
        
      }).catch((error) => {
        setLoading(false)
        console.log("error",error)
        alert("something went wrong")
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
            <button className=' d-flex justify-content-center align-items-center gap-3' type="submit" name="submit">
            Abonnieren
            {!loading && <div class="spinner-border text-light" role="status"></div>}
            </button>
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