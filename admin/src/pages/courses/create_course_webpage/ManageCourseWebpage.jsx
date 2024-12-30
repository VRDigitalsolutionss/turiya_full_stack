// ========================================================

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import SectionWebPage from "./SectionWebPage";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../../config";
const CourseForm = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  const { id } = useParams();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);


  const [categories, setcategories] = useState('');



  const fetchData = () => {
    axios.get(BASE_URL + `/course_categories_latest`).then((response) => {
      console.log("response of course_categories data", response.data.data);
      
      const resData = response.data.data;
      setcategories(resData)
     console.log("res of category data", resData.category);
    }).catch((error) => {
    console.log("error of fetch data", error);
  })
  }
  
console.log("course_categories", categories)

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {

    if (id) {
      axios.get(BASE_URL + `/getCourseWebpageById/${id}`).then((response) => {
        console.log("response of create course page", response.data.data);


        const data = response.data.data;
        
        setFormData({
          courseCategory: data.courseCategory || "",
          pageUrl: data.pageUrl || "",
          metaTitle: data.metaTitle || "",
          metaDescription: data.metaDescription || "",
          metaKeywords: data.metaKeywords || "",
          sliderHeading: data.yogaTeamSliderHeading || "",
          sliderParagraph: data.yogaTeamSliderParagraph || "",
          sliderVideoLink: data.yogaTeamSliderVideoLink || "",
          slideImage: data.yogaTeamSlideImage || null,
        });

        setAboutFirstSectionHeading(data.about_first_section_Heading || "");
        setAboutFirstSectionSubParagraph(data.aboutFirstSectionSubParagraph  || "");
        setBlogContent(data.about_first_section_Paragraph_Content || "");
       
      }).catch((error) => {
        console.log("error", error);
      });
    } else {
      // alert("page not found")
    }
  }, []);
  





  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header levels
      [
        {
          font: [
            "Arial",
            "Courier New",
            "Georgia",
            "Tahoma",
            "Times New Roman",
            "Trebuchet MS",
            "Verdana",
            "Roboto",
            "Montserrat",
            "Open Sans",
            "Lato",
            "Source Sans Pro",
          ],
        },
      ], // Font options
      [{ size: ["small", false, "large", "huge"] }], // Font size options
      ["bold", "italic", "underline", "strike", "blockquote"], // Text formatting options
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ], // List and indentation
      ["link", "image", "video"], // Multimedia options
      ["clean"], // Remove formatting
    ],
  };

  // Define the formats allowed by the editor in the `formats` array
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  
  const [blogHeading, setBlogHeading] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const [aboutFirstSectionHeading, setAboutFirstSectionHeading] = useState("");
  const [aboutFirstSectionSubParagraph, setAboutFirstSectionSubParagraph] = useState("");
  const [aboutFirstSectionSubContent, setAboutFirstSectionSubContent] = useState(blogContent);

  const [formData, setFormData] = useState({
    courseCategory: "",
    pageUrl: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    sliderHeading: "",
    sliderParagraph: "",
    sliderVideoLink: "",
    slideImage: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  // ================================================================
  const courseCategories = [
    { label: "Select Course Category", value: "Select Course Category" },
    { label: "Alle Kommenden Kurse", value: "Alle Kommenden Kurse" },
    { label: "200H AYA Yogalehrer Ausbildung - Intensiv", value: "200H AYA Yogalehrer Ausbildung - Intensiv" },
    {
      label: "500H AYA Yogalehrer Blockausbildung | 100h Einzelmodule",
      value: "500H AYA Yogalehrer Blockausbildung | 100h Einzelmodule",
    },
    { label: "60H Yin Yoga", value: "60H Yin Yoga" },
    { label: "60H Senioren Yoga", value: "60H Senioren Yoga" },
    { label: "Hybride Wochenend Yogalehrer Ausbildung", value: "Hybride Wochenend Yogalehrer Ausbildung" },
  ];

  console.log(courseCategories);

  const [courseCategory, setccourseCategory] = useState("");
  const HandleCourseCategory = (event) => {
    // setFaqs(event.target.value.split(','));
  };

  const [selectedButton, setSelectedButton] = useState("");
  const [selectedSections, setSelectedSections] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [modulesOption, setModulesOption] = useState([]);

  const [selectedFaqs, setSelectedFaqs] = useState([]);

  // Example FAQ options
  const faqOptions = [
    "What certificate do I get? Can I teach after the 200-hour yoga teacher training?",
    "Was sind die Teilnahmevoraussetzungen?",
    "Welche Yoga-Stile lerne und übe ich im Kurs?",
    "Was wird in der 200H Yogalehrer Ausbildung praktisch in Bezug auf Techniken und Training in der Yoga-Praxis behandelt?",
    "Was werde ich über Anatomie und Physiologie lernen?",
  ];

  const module_option = [
    "200H Yogalehrer Ausbildung M1 + M2",
    "200H Yogalehrer Ausbildung M1 + M2",
    "200H Yogalehrer Ausbildung M1 + M2",
    "* All Inklusive Yogalehrer Ausbildung M3",
  ];


  const handleFaqChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedFaqs(selectedValues);
  };

  const buttons = [
    { label: "Module button (Redirect same page)", value: "moduleSame" },
    { label: "Video Button", value: "video" },
    {
      label: "Module button (Redirect different page)",
      value: "moduleDifferent",
    },
    { label: "Video and appointment button", value: "videoAppointment" },
  ];

  const sections = [
    { label: "Banner Section", value: "banner-section" },
    { label: "Turiya Advantages", value: "turiya-advantages" },
    {
      label: "Turiya Training Place Section",
      value: "turiya-training-place-section",
    },
    { label: "Module Section", value: "module-section" },
    { label: "FAQ Section", value: "faq-section" },
    { label: "Contact Us section", value: "contact-us-section" },
    { label: "Offer Card", value: "offer-card" },
    { label: "Info Card", value: "info-card" },
    { label: "Text Testimonials", value: "text-testimonials" },
    { label: "Video Testimonials", value: "video-testimonials" },
    { label: "Gallery", value: "gallery" },
    { label: "Newsletter", value: "newsletter" },
  ];

  const handleButtonChange = (button) => {
    //   setSelectedButton(value);

    setSelectedButton((prev) =>
      prev.includes(button)
        ? prev.filter((s) => s !== button)
        : [...prev, button]
    );
  };

  const handleSectionChange = (section) => {
    setSelectedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleFaqsChange = (event) => {
    setFaqs(event.target.value.split(","));
  };

  const handleModulesChange = (event) => {
    setModulesOption(event.target.value.split(","));
  };

  // ===============================================================================
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the selected data
    const selectedData = {
      ...formData,
      selectedButton,
      selectedSections,
      faqs,
      modulesOption,
    };

    console.log("Create Web Page Data:", selectedData);

    // Prepare the payload
    const payload = {
      courseCategory:formData.courseCategory,
      pageUrl: formData.pageUrl,
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      metaKeywords: formData.metaKeywords,
      yogaTeamSliderHeading: formData.sliderHeading,
      yogaTeamSliderParagraph: formData.sliderParagraph,
      yogaTeamSliderVideoLink: formData.sliderVideoLink,
      about_first_section_Heading: aboutFirstSectionHeading,
      about_first_section_sub_Paragraph: aboutFirstSectionSubParagraph,
      about_first_section_Paragraph_Content: blogContent,
      faqs: JSON.stringify(faqs), // Convert to JSON string
      modules: JSON.stringify(modulesOption), // Convert to JSON string
      selectedButton: JSON.stringify(selectedButton), // Convert to JSON string
      selectedSections: JSON.stringify(selectedSections), // Convert to JSON string
    };

    const form = new FormData();

    // Append text fields
    for (const key in payload) {
      form.append(key, payload[key]);
    }

    // Append file field (if applicable)
    if (formData.slideImage) {
      form.append("yogaTeamSlideImage", formData.slideImage);
    }

    console.log("Payload: ", payload);
    console.log("FormData: ", form);

    // Validation for mandatory fields
    if (
      payload.pageUrl &&
      payload.yogaTeamSliderHeading &&
      payload.yogaTeamSliderParagraph
    ) {
      // Axios POST request


      if (id) { 
        axios
        .put(BASE_URL + `/edit_course_webpage/${id}`, form, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file uploads
          },
        })
        .then((response) => {
          console.log("Response of add_course_webpage:", response);

          if (response.status == 200) {
            alert("Course webpage updated successfully!");
          } else {
            alert("Failed to update course webpage. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error while submitting form:", error);
          alert("An error occurred while submitting the form. Check console.");
        });
      } else {
        axios
        .post(BASE_URL + "/add_course_webpage", form, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file uploads
          },
        })
        .then((response) => {
          console.log("Response of add_course_webpage:", response);

          if (response.status == 201) {
            alert("Course webpage created successfully!");
          } else {
            alert("Failed to create course webpage. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error while submitting form:", error);
          alert("An error occurred while submitting the form. Check console.");
        });
      }
      
    } else {
      alert("All fields are mandatory. Please fill in all required fields.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="card shadow-sm p-3" style={{ border: "none" }}>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div
              className="px-3 py-2 mb-3 rounded mb-3"
              style={{ backgroundColor: "#9EC54E", borderRadius: "12x" }}>
              <h4 className="text-white">
                Select Course In Which You Want to Create Webpage new
              </h4>
            </div>
            <div className="col-md-12 col-12">
              <label htmlFor="courseCategory" className="form-label">
                Select Course Category
              </label>
              <select
                id="courseCategory"
                name="courseCategory"
                className="form-select"
                value={formData.courseCategory}
                onChange={handleChange}>
                <option value="">Select Course Category</option>

                {categories && categories.map((category) => {
                  return (
                    <option key={category.value} value={category.category}>
                      {category.category}
                    </option>
                  );
                })}
                {/* <option value="yoga">Yoga</option>
                <option value="programming">Programming</option>
                <option value="design">Design</option> */}
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div
              className="px-3 py-2 mb-3 rounded mb-3"
              style={{ backgroundColor: "#9EC54E", borderRadius: "12x" }}>
              <h4 className="text-white">Meta Content</h4>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="pageUrl" className="form-label">
                Page URL
              </label>
              <input
                type="text"
                id="pageUrl"
                name="pageUrl"
                className="form-control"
                value={formData.pageUrl}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="metaTitle" className="form-label">
                Meta Title
              </label>
              <input
                type="text"
                id="metaTitle"
                name="metaTitle"
                className="form-control"
                value={formData.metaTitle}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="metaDescription" className="form-label">
                Meta Description
              </label>
              <textarea
                id="metaDescription"
                name="metaDescription"
                className="form-control"
                value={formData.metaDescription}
                onChange={handleChange}
                rows="3"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="metaKeywords" className="form-label">
                Meta Keywords
              </label>
              <input
                type="text"
                id="metaKeywords"
                name="metaKeywords"
                className="form-control"
                value={formData.metaKeywords}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div
              className="px-3 py-2 mb-3 rounded mb-3"
              style={{ backgroundColor: "#9EC54E", borderRadius: "12x" }}>
              <h4 className="text-white">Turiya Yoga Team</h4>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="sliderHeading" className="form-label">
                Slider Heading
              </label>
              <input
                type="text"
                id="sliderHeading"
                name="sliderHeading"
                className="form-control"
                value={formData.sliderHeading}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="sliderParagraph" className="form-label">
                Slider Paragraph
              </label>
              <textarea
                id="sliderParagraph"
                name="sliderParagraph"
                className="form-control"
                value={formData.sliderParagraph}
                onChange={handleChange}
                rows="3"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="sliderVideoLink" className="form-label">
                Slider Video Link
              </label>
              <input
                type="text"
                id="sliderVideoLink"
                name="sliderVideoLink"
                className="form-control"
                value={formData.sliderVideoLink}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="slideImage" className="form-label">
                Slide Image
              </label>
              <input
                type="file"
                id="slideImage"
                name="slideImage"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="row">
            <div
              className="px-3 py-2 mb-3 rounded mb-3"
              style={{ backgroundColor: "#9EC54E", borderRadius: "12x" }}>
              <h4 className="text-white">About First Section</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <label className="form-label">Heading :</label>
                <input
                  type="text"
                  className="form-control"
                  value={aboutFirstSectionHeading}
                  onChange={(e) => setAboutFirstSectionHeading(e.target.value)}
                  placeholder="Enter about first section heading"
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="mb-3">
                <label className="form-label">Sub Paragraph :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter subpagraph"
                  value={aboutFirstSectionSubParagraph}
                  onChange={(e) =>
                    setAboutFirstSectionSubParagraph(e.target.value)
                  }
                  // onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Paragraph Content :</label>
              <ReactQuill
                value={blogContent}
                onChange={setBlogContent}
                placeholder="Write your blog content here..."
                style={{ height: "300px", marginBottom: "50px" }}
                modules={modules}
              />
            </div>
            <div className="row">
              <div
                className="px-3 py-2 mb-3 rounded mb-3"
                style={{ backgroundColor: "#9EC54E", borderRadius: "12x" }}>
                <h4 className="text-white">
                  Select which section You want to show on Webpage :{" "}
                </h4>
              </div>
              <div className="row">
               
              </div>
            

              {/* ==================================================== new added code ====================================================== */}
              <div className="container">
                {/* <h3 className=" mb-3">Select which section you want to show on Webpage:</h3> */}

                <h4>Select button which you want to show on website:</h4>
                <div className="row mb-4">
                  {buttons.map((button) => (
                    <div key={button.value} className="col-md-3 col-6 mb-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="button"
                          value={button.value}
                          checked={selectedButton.includes(button.value)}
                          onChange={() => handleButtonChange(button.value)}
                        />
                        <label className="form-check-label">
                          {button.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <h4>Select sections which you want to show on website:</h4>
                <div className="row mb-4">
                  {sections.map((section) => (
                    <div key={section.value} className="col-md-3 col-4 mb-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={section.value}
                          checked={selectedSections.includes(section.value)}
                          onChange={() => handleSectionChange(section.value)}
                        />
                        <label className="form-check-label">
                          {section.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <h4>
                  Select FAQ and modules which you want to show on website:
                </h4>
                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">FAQ's:</label>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={handleFaqsChange}>
                      <option selected>You can Select multiple Option</option>
                      {faqOptions.map((faq) => (
                        <option key={faq} value={faq}>
                          {faq}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Modules:</label>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={handleModulesChange}>
                      <option selected>You can Select multiple Option</option>
                      {module_option.map((faq) => (
                        <option key={faq} value={faq}>
                          {faq}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* <button className="btn btn-primary" onClick={handleSubmit}>Submit</button> */}
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
