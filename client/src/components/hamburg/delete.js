<div className="berlin_wrapper">
<div ref={bannerRef}>
  {/* <SimpleBanner2
  banner={banner}
  heading="60H Yin Yoga Ausbildung"
  para="Unsere Yin-Yogalehrer Ausbildung hilft dir, deine Praxis zu vertiefen und deine Lehrfähigkeiten zu meistern. Dieses besondere Programm verbindet Tradition mit modernen Techniken, damit du ein achtsamer und inspirierender Lehrer wirst. Mach mit und transformiere dein Yoga!"
  buttonTxt=" KUNDENSTIMMEN VIDEO "
  /> */}
  <SimpleBanner3
    banner={Yin_Yoga && newBannerImg}
    heading={Yin_Yoga && Yin_Yoga.yogaTeamSliderHeading}
    para={Yin_Yoga && Yin_Yoga.yogaTeamSliderParagraph}
    videoLink={Yin_Yoga && Yin_Yoga.yogaTeamSliderVideoLink}
    buttonTxt="berlin_read_more"
  />
</div>
<div
  id="content"
  className="about_wrapper__left section pt-5 pt-md-5 pb-3 my-0">
  <div className="container">
    <div className="row" id="description">
      {/* Post Content ============================================= */}
      <div className="postcontent col-lg-12">
        {/* <h1>Yogalehrer Ausbildungen in Modulen</h1> */}
        <p>
          {" "}
     
        </p>

        <p
          className="p-0"
          //   style={{
          //       color: "rgb(33, 37, 41)",
          //       fontFamily: "Roboto, sans-serif",
          //       fontSize: 16,
          // }}

          dangerouslySetInnerHTML={{
            __html:
              Yin_Yoga && Yin_Yoga.about_first_section_Paragraph_Content,
          }}></p>

        
      </div>
      {/* .postcontent end */}
      {/* Sidebar ============================================= */}
 
      {/* .sidebar end */}
    </div>
  </div>
</div>



<Testimonial />
<CheckWrapper />
<ParralaxWrapper />



{isDialogVisible && (
  <div
    id="modalOverlay"
    className="hiddenOverlayContainer"
    style={{ display: "block" }}>
    <div className="customDialogBox">
      <span className="exitButtonTrigger" onClick={closeDialogBox}>
        ×
      </span>
      <div className="dialogIcon">
        <img src={dilogImg} style={{ width: 80 }} alt />
      </div>
      <p className="mt-3">
        Um den Kauf abzuschließen, musst du dich zuerst einloggen!
      </p>
      <button className="dialogActionButton" onClick={handleredirect}>
        Go to Login/Registrierung.
      </button>
    </div>
  </div>
)}
<Contact />
        <NewsShelter />
        
        </div>