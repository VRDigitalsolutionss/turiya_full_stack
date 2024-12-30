import React from 'react'

const YogaRetreatBanner = () => {
  return (
      <>

              
          <section className="banner_wrapper">
            <div className="banner_bg"       style={{
                    backgroundImage: "url('https://www.turiyayoga.de/assets/images/goa-indien-bg.webp')",
                  }}
              
              
              >
              <div className="banner-content container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner_bg__content" data-aos="fade-up">
                      <h1
                        className="animate__animated"
                        data-animation-in="animate__fadeInUp"
                        data-duration-in={1}>
         Yoga Retreat am Strand
                      </h1>
                     
                      <div
                        className="banner_bg__content-btn animate__animated"
                        data-animation-in="animate__fadeInUp"
                        data-duration-in={3}>
                        <div
                          className="video-btn mehr-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal-yt">
                          {/*<a href="#"><i className='bx bx-play'></i> KUNDENSTIMMEN VIDEO </Link>*/}
                          <button>
                            <i className="bx bx-play" /> KUNDENSTIMMEN VIDEO
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


  

          <div className="youtube_video">
            <div
              className="modal fade"
              id="exampleModal-yt"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    {/*<iframe id="youtube-video" width="560" height="315"*/}
                    {/*    src="https://www.youtube.com/embed/z6z4-bnDhws?si=Ta2BO26WIj6YIa-a"*/}
                    {/*    title="YouTube video player" frameborder="0"*/}
                    {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                    {/*    referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>*/}
                    {/*</iframe>*/}
                    {/* <iframe
                      id="youtube-video"
                      width={560}
                      height={315}
                      src={ourStory.Slider_videolink}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen></iframe>{" "} */}
                    

                    {/* <iframe
    id="youtube-video"
    width="560"
    height="315"
    src={ourStory && ourStory.Slider_videolink}
                      title="YouTube video player"
                          referrerPolicy="strict-origin-when-cross-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
                    </iframe> */}
                    

                    {/* ============================================= */}
                    {/* <iframe 
    id="youtube-video" 
    width="560" 
    height="315" 
    src='https://youtu.be/_x5lW37exk8'   // src="https://www.youtube.com/embed/z6z4-bnDhws" 
    title="YouTube video player" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe> */}

 <iframe
                      id="youtube-video"
                      width={560}
                      height={315}
                      src='https://www.youtube.com/embed/_x5lW37exk8?si=sc2efCmH0TzvJBcV'
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen></iframe>


                  </div>
                </div>
              </div>
            </div>
          </div>
      
      
      </>
  )
}

export default YogaRetreatBanner