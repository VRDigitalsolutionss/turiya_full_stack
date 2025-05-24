import React from 'react'
import checkImg from '../assets/icons/check-2.webp';

const CheckWrapper = () => {
  return (
      <>
<section className="global_wrapper check_wrapper">
  <div className="container">
    <div className="main_heading">
      <h1>Deine Vorteile Bei Turiya</h1>
    </div>
  </div>
  <div className="global_content">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="check_box animate__animated " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Zertifiziert</h6>
              <p>International anerkannt | AYA</p>
            </div>
          </div>
          <div className="check_box  animate__animated " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Erfahrung</h6>
              <p>Hohe Kundenzufriedenheit</p>
            </div>
          </div>
          <div className="check_box animate__animated  " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Hohe Standard</h6>
              <p>Gesicherte Ausbildungsqualität</p>
            </div>
          </div>
          <div className="check_box  animate__animated " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Flexibel</h6>
              <p>Modulweise buchbar</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mob_hide">
          <div className="check_box  animate__animated " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Selbstentfaltung</h6>
              <p>Förderung persönlicher Entwicklung</p>
            </div>
          </div>
          <div className="check_box  animate__animated " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Engagierte Trainer</h6>
              <p>Passionierte Lehrkräfte mit fundiertem Fachwissen</p>
            </div>
          </div>
          <div className="check_box  animate__animated " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Bezahlbar</h6>
              <p>Gutes Preis-Leistungsverhältnis</p>
            </div>
          </div>
          <div className="check_box  animate__animated " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Marktorientiert</h6>
              <p>Multi-Stile Yoga Ausbildung</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mob_hide">
          <div className="check_box  animate__animated " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Modern</h6>
              <p>Wissenschaftliche &amp; Akademische Perspektive</p>
            </div>
          </div>
          <div className="check_box  animate__animated " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Aber auch Traditionell</h6>
              <p>Traditionelle Praxis und Perspektiv vorgestellt</p>
            </div>
          </div>
          <div className="check_box  animate__animated " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Praxisorientiert</h6>
              <p>Hands-On &amp; Verwendung der Hilfsmittel Fokus</p>
            </div>
          </div>
          <div className="check_box  animate__animated " id="animate-section" data-aos="fade-up">
            <div className="check_box__icon">
              <img src={checkImg} className="img-fluid" alt="check" />
            </div>
            <div className="check_box__content">
              <h6>Allgemein zugänglich</h6>
              <p>Für alle Konditionslevel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
      </>
  )
}

export default CheckWrapper