import React, { useEffect } from 'react'
import './Privacy_Policy.scss'

const Privacy_Policy = () => {


  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);


  return (
      <>
          <section id="Privacy_Policy">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="content_privacy_page">
                          <h4>Impressum</h4>
                 
                 <p>Angaben gemäß § 5 TMG</p>
                 <p>Emanuel Wintermeyer</p>
                 <p>Turiya Yoga</p>
                 <p>Herbartstrasse, 12</p>
                 <p>60316 Frankfurt am Main</p>
                 <p>Kontakt</p>
                 <p>Telefon: + 49 (0) 69 20134987</p>
                 <p>E-Mail: info@turiyayoga.de</p>
                 <p>Umsatzsteuer-ID: DE323513637.</p>
                 <p>Angaben zur Berufshaftpflichtversicherung</p>
                 <p>Name und Sitz des Versicherers:</p>
                 <p>EFM Ensure GmbH</p>
                 <p>Großer Burstah 31</p>
                 <p>20457 Hamburg</p>
                 <p>Geltungsraum der Versicherung:Weltweit</p>
                 <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</p>
                 <p>Emanuel Wintermeyer</p>
                 <p>Herbartstraße 12</p>
                 <p>60316 Frankfurt am Main, Deutschland</p>
                 <p>Streitschlichtung</p>
                 <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:

https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an

Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
      </section>
      
      
      </>
  )
}

export default Privacy_Policy