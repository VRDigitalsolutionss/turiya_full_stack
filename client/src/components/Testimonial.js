import React, { useEffect, useState } from "react";
import "./testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { BASE_URL ,BASE_URL_IMAGE} from "../config";
const Testimonial = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(BASE_URL + "/testimonials")
      .then((response) => {
        console.log("testimonial images",response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("testimonial data", data);

  return (
    <>
      <section className="testimonial_wrapper global_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                {data &&
                  data.map((testimonial) => {
                    return (
                      <SwiperSlide>
                       
                        <div className="d-flex justify-content-center">
                          <div className="text-center">
                            <div className="client_img">
                              {/* <img
                                // src="https://www.turiyayoga.de/media/feedback-images/502993556_001.webp"
                                src={`http://127.0.0.1:7000/uploads/images/our_story/${data.Slide_Image}`
                                className="img-fluid"
                                alt="client"
                              /> */}

                              <img
  src={BASE_URL_IMAGE + `/images/testimonial/${testimonial.profileImage}`}
  className="img-fluid"
  alt="client"
/>
                            </div>
                            <div className="testimonial_parra mt-4">
                              <p>{testimonial.feedbackContent}</p>
                              {/* <p>
                            "tries  Manu taught me perseverance and patience! He was
                            always very helpful and offered different options to
                            better understand the asanas and movements with props.
                            I wish that I could develop compassion like he did."
                          </p> */}
                              <h6>{testimonial.name}</h6>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}

                {/* <SwiperSlide>
         
         <div
           className="d-flex justify-content-center"
          
       >
         <div className="text-center">
         <div className="client_img">
             <img
               src="https://www.turiyayoga.de/media/feedback-images/980295127_women.webp"
               className="img-fluid"
               alt="client"
             />
           </div>
           <div className="testimonial_parra mt-4">
           <p>
             "Suzana and Manu are incredible. I love them! They create an atmosphere for us where we can really develop our potential. It wasn't just about teaching us facts and books, it was also about a lifestyle."
             </p>
             <h6>- Germany</h6>
           </div>
         </div>
          
         </div>
   
                </SwiperSlide>
                <SwiperSlide>
         
         <div
           className="d-flex justify-content-center"
          
       >
         <div className="text-center">
         <div className="client_img">
             <img
               src="https://www.turiyayoga.de/media/feedback-images/515494707_owwwmen.webp"
               className="img-fluid"
               alt="client"
             />
           </div>
           <div className="testimonial_parra mt-4">
           <p>"I just wanted to be able to teach yoga. What I really got was so much more! The academy far exceeded my expectations. The owners are warm, kind and beautiful people who have helped me develop physically, emotionally and spiritually."</p>
             <h6>- Canada</h6>
           </div>
         </div>
          
         </div>
   
                </SwiperSlide>
            
                <SwiperSlide>
         
         <div
           className="d-flex justify-content-center"
          
       >
         <div className="text-center">
         <div className="client_img">
             <img
               src="https://www.turiyayoga.de/media/feedback-images/243742158_laughf.webp"
               className="img-fluid"
               alt="client"
             />
           </div>
           <div className="testimonial_parra mt-4">
           <p>"What I really appreciate about this yoga teacher training is the high professional standard. I don't think there are many yoga academies in the world where you can find so much love, balance and knowledge. It's really amazing, I can only warmly recommend this training!"</p>
             <h6>- Netherlands</h6>
           </div>
         </div>
          
         </div>
   
     </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
