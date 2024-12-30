

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";


const ManageAddModule = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [course_categories_option, setCourse_categories_option] = useState("");
  const [module_categories_option, setModule_categories_option] = useState("");


  
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const { id } = useParams();


  const [formData, setFormData] = useState({
    moduleCategory: "",
    moduleCategory2: "",
    coursesHeading: "",
    coursesSubHeading: "",
    ausbildung: "",
    startDate: "",
    endDate: "",
    location: "",
    price: "",
    offerPrice: "",
    offerEndDate: "",
    place: "",
    aboutCourse: "",
    homePageContent: "", // HTML content for rich text editor
    image: null,
    redirectUrl:"",
  });
  // manage_addmodule
  const fetchCategories = () => {
    axios
      .get(BASE_URL + "/course_categories_latest")
      .then((response) => {
        console.log("response course_categories_latest ", response.data.data);

        const data = response.data.data;
        setCourse_categories_option(data);
      })
      .catch((error) => {
        console.log("Error fetching categories", error);
      });
  };


  console.log("course_categories_option", course_categories_option)


  const fetchmoduleCategories = () => {
    axios
      .get(BASE_URL + "/module_categories_latest")
      .then((response) => {
        console.log("response module_categories_latest", response);

        const data = response.data.data;
        setModule_categories_option(data);
      })
      .catch((error) => {
        console.log("Error fetching categories", error);
      });
  };

  useEffect(() => {
    fetchCategories();
    fetchmoduleCategories();
  }, []);



  console.log("course categories option", course_categories_option);

  useEffect(() => {
    if (id) {
      axios
        .get(BASE_URL + `/getModuleById/${id}`)
        .then((response) => {
          console.log("response", response.data.data);

          // Destructure the data to map it to the formData state
          const {
            modulecategory,
            modulesubcategory,
            moduleheading,
            modulesubheading,
            ausbildung,
            startDate,
            endDate,
            location,
            price,
            offerPrice,
            offerEndDate,
            place,
            aboutCourse,
            homepage_cardcontent,
            images,
            redirectUrl,
          } = response.data.data;

          // Set the response data into the formData state
          setFormData({
            moduleCategory: modulecategory || "", // Map API data to formData
            moduleCategory2: modulesubcategory || "", // If you want to use this
            coursesHeading: moduleheading || "",
            coursesSubHeading: modulesubheading || "",
            ausbildung: ausbildung || "",
            startDate: startDate || "",
            endDate: endDate || "",
            location: location || "",
            price: price || "",
            offerPrice: offerPrice || "",
            offerEndDate: offerEndDate || "",
            place: place || "",
            aboutCourse: aboutCourse || "",
            homePageContent: homepage_cardcontent || "", // Rich text content
            image: images || null, // If images is null, it will remain null
            redirectUrl: redirectUrl || "", // If redirectUrl is null, it will remain null
          });
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [id]); // Only run effect when `id` changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle changes for the rich text editor
  const handleContentChange = (content) => {
    setFormData({ ...formData, homePageContent: content });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const payload = {
      modulecategory: formData.moduleCategory,
      modulesubcategory: formData.moduleCategory2,
      moduleheading: formData.coursesHeading,
      modulesubheading: formData.coursesSubHeading,
      Ausbildung: formData.coursesHeading,
      StartDate: formData.startDate,
      EndDate: formData.endDate,
      Location: formData.location,
      price: formData.price,
      Offerprice: formData.offerPrice,
      OfferEndDate: formData.offerEndDate,
      Place: formData.place,
      AboutCourse: formData.aboutCourse,
      Homepage_cardcontent: formData.homePageContent,
      Images: formData.image,
      redirectUrl: formData.redirectUrl,
      status: "active",
    };


    console.log("offer price testing", formData)
    if (id) {
      axios
        .put(BASE_URL + `/edit_module/${id}`, payload)
        .then((response) => {
          console.log(response);

          if (response.status == 200) {
            alert("success");

            setFormData({
              moduleCategory: "",
              moduleCategory2: "",
              coursesHeading: "",
              coursesSubHeading: "",
              ausbildung: "",
              startDate: "",
              endDate: "",
              location: "",
              price: "",
              offerPrice: "",
              offerEndDate: "",
              place: "",
              aboutCourse: "",
              homePageContent: "",
              image: null,
              redirectUrl:""
            });
          } else {
            alert("faild");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(BASE_URL + "/add_module", payload)
        .then((response) => {
          console.log("response of add module", response);

          if (response.status == 201) {
            alert("Success");

            setFormData({
              moduleCategory: "",
              moduleCategory2: "",
              coursesHeading: "",
              coursesSubHeading: "",
              ausbildung: "",
              startDate: "",
              endDate: "",
              location: "",
              price: "",
              offerPrice: "",
              offerEndDate: "",
              place: "",
              aboutCourse: "",
              homePageContent: "",
              image: null,
              redirectUrl:""
            });
          }
        })
        .catch((err) => {
          console.log(err);
          alert("faild");
        });
    }

    // Reset formData to initial empty state
  };

  return (
    <div className="container-fluid mt-5">
      <div className="card shadow-sm" style={{ border: "none" }}>
        <div
          className="card-header text-white text-start"
          style={{ backgroundColor: "#8bc34a" }}>
          <h4>Manage Modules</h4>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>course Categories</label>

                {/* <select >
                  {course_categories_option && course_categories_option.map((data) => {
                return <option key={data._id} value={data._id}>{data.category}</option>
             })}
</select> */}
                {/* ========================================== */}

                <select
                  name="moduleCategory"
                  value={formData.moduleCategory}
                  onChange={handleChange}
                  className="form-select"
                  id="moduleCategory">
                  <option value="" disabled>
                    Select a category
                  </option>
                  {course_categories_option &&
                    course_categories_option.map((data) => (
                      <option key={data._id} value={data._id}>
                        {data && data.category
                        }
                      </option>
                    ))}
                </select>
                {/* ===================================================== */}
              </div>
              <div className="col-md-6">
                <label>Module Categories</label>
                {/* <input
                  type="text"
                  name="moduleCategory2"
                  value={formData.moduleCategory2}
                  onChange={handleChange}
                  className="form-control"
                /> */}

                <select
                  name="moduleCategory2"
                  value={formData.moduleCategory2}
                  onChange={handleChange}
                  className="form-select"
                  id="moduleCategory">
                  <option value="" disabled>
                    Select a category
                  </option>
                  {module_categories_option &&
                    module_categories_option.map((data) => (
                      <option key={data._id} value={data._id}>
                        {data.modulecategory}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label>Courses Heading</label>
              <input
                type="text"
                name="coursesHeading"
                // value={formData.coursesHeading 
                 
                // }
                
                value={formData.coursesHeading 
                 
                }


                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label>Courses Sub Heading (optional)</label>
              <input
                type="text"
                name="coursesSubHeading"
                value={formData.coursesSubHeading}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label>Ausbildung</label>
              <input
                type="text"
                name="ausbildung"
                value={formData.ausbildung}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="row mb-3">
              <div className="col-md-12 col-12">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Set Offer Price</label>
                <input
                  type="number"
                  name="offerPrice"
                  value={formData.offerPrice}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label>Set Offer End Date</label>
                <input
                  type="date"
                  name="offerEndDate"
                  value={formData.offerEndDate}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3">
              <label>Place</label>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label>About Course</label>
              <textarea
                name="aboutCourse"
                value={formData.aboutCourse}
                onChange={handleChange}
                className="form-control"
                rows="3"></textarea>
            </div>

            <div className="mb-3">
              <label>Enter Home Page Card Content</label>
              <ReactQuill
                value={formData.homePageContent}
                onChange={handleContentChange}
                theme="snow"
                placeholder="Enter content here"
                style={{ height: "200px", marginBottom: "60px" }}
              />
            </div>

            <div className="mb-3">
              <label>Upload Image</label>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>


            <div className="mb-3">
              <label>Redirect  page</label>
              {/* <input
                type="text"
                name="redirectUrl"
                onChange={handleChange}
                className="form-control"
              /> */}


              {/* ========================================= */}

              <select
                  name="redirectUrl"
                  value={formData.redirectUrl}
                  onChange={handleChange}
                  className="form-select"
                  id="redirectUrl">
                  <option value="" disabled>
                    Select a redirect  page
                  </option>
                  {module_categories_option &&
                    module_categories_option.map((data) => (
                      <option key={data._id} value={data.modulecategory}>
                        {data.modulecategory}
                      </option>
                    ))}
              </select>
              
              {/* ======================================================= */}
            </div>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageAddModule;
