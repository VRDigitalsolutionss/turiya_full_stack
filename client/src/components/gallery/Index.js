import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/gallery-images/img_1.webp";
import img2 from "../../assets/images/gallery-images/img_2.webp";
import img3 from "../../assets/images/gallery-images/img_3.webp";
import img4 from "../../assets/images/gallery-images/img_4.webp";
import img5 from "../../assets/images/gallery-images/img_5.webp";
import img6 from "../../assets/images/gallery-images/img_6.webp";
import img7 from "../../assets/images/gallery-images/img_7.webp";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../config"; 
const Index = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(BASE_URL + "/galleries")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("--------------------------------", data);
  console.log("static content");

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img3,
    img4,
    img2,
    img1,
    img6,
  ];

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleImgDialog = (index) => {
    setCurrentIndex(index); // Set the clicked image index as current
    setIsOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false); // Hide the overlay
  };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to the next image
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   ); // Move to the previous image
  // };


  // ====================== new code 
  const dynamicImages = data && data.map((item) => item.file); // Adjust this according to your data structure
  console.log("dynamicImages: ",  dynamicImages[currentIndex]);


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? dynamicImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === dynamicImages.length - 1 ? 0 : prevIndex + 1));
  };



  return (
    <>
      <section id="gallery" className="global_wrapper">
        <div className="container-fluid">
          <div id="image-gallery">
            <div className="row">
              {/* {
                    images.map((image, index) => {
                      return (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                    <div className="img-wrapper" onClick={() => handleImgDialog(index)}>
                      <Link to="media/gallery-images/162406476_1.webp">
                        <img  
                        src={image} className="img-responsive" />
                      </Link>
                      <div className="img-overlay">
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                      );
                    })
                  } */}

              {/* <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                  <div className="img-wrapper">
                      <Link to="assets/images/img3.webp"><img src="assets/images/img3.webp"
                              className="img-responsive"></Link>
                      <div className="img-overlay">
                          <i className="fa fa-plus-circle" aria-hidden="true"></i>
                      </div>
                  </div>
              </div> */}

              {data &&
                data.map((image, index) => {
                  console.log("image", image);
                  return (
                    <div
                      key={index}
                      className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                      <div
                        className="img-wrapper"
                        onClick={() => handleImgDialog(index)}>
                        {/* <Link to="media/gallery-images/162406476_1.webp"></Link> */}
                        <img
                          src={
                            BASE_URL_IMAGE + `/images/gallery/` +
                            image.file
                          }
                          alt={image.file}
                          // src={data:image/jpeg;base64,${imageBase64}}

                          // src={`data:image/jpeg;image,${image}`}

                          className="img-responsive"
                        />
                        {/* <Link to="media/gallery-images/162406476_1.webp">
                      <img
                      
                        
                        src={`${BASE_URL_IMAGE}/images/gallery/`+image}  
                        
                        
                        // src={data:image/jpeg;base64,${imageBase64}}  
                      
                      // src={`data:image/jpeg;image,${image}`}
                      
                      
                      className="img-responsive" />
                    </Link> */}
                        <div className="img-overlay">
                          <i className="fa fa-plus-circle" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* End row */}
          </div>
          {/* End image gallery */}
        </div>

        {
          console.log("dialog images", data && data.map((image, i) => {
          console.log("dialog map image",image)
          }))
        }

        {/* ======================== old code ============================= */}
        {/* {isOverlayVisible && (
          <div id="overlay">
            <div id="prevButton">
              <i className="bx bx-chevron-left" onClick={handlePrev} />
            </div>

            <img
              src={images[currentIndex]}
              style={{ width: "60%" }}
              alt={`Gallery Image ${currentIndex + 1}`}
            />
            <div id="nextButton">
              <i className="bx bxs-chevron-right" onClick={handleNext} />
            </div>
            <div id="exitButton">
              <i className="bx bx-x" onClick={handleCloseOverlay} />
            </div>
          </div>
        )} */}

        {/* =======================   new code ====================================== */}

        {isOverlayVisible && (
        <div id="overlay">
          <div id="prevButton">
            <i className="bx bx-chevron-left" onClick={handlePrev} />
          </div>



            
            <img
            src={`${BASE_URL_IMAGE}/images/gallery/`+dynamicImages[currentIndex]} // Dynamically load the image
            style={{ width: "60%" }}
            alt={`${BASE_URL_IMAGE}/images/gallery/  Gallery Image ${currentIndex}`}
          />
{/* ==================================================================== */}


          <div id="nextButton">
            <i className="bx bxs-chevron-right" onClick={handleNext} />
          </div>

          <div id="exitButton">
            <i className="bx bx-x" onClick={handleCloseOverlay} />
          </div>
        </div>
      )}

      </section>
    </>
  );
};

export default Index;
