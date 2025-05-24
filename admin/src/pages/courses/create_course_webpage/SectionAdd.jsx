// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CourseForm = () => {
//   const [formData, setFormData] = useState({
//     courseCategory: '',
//     pageTitle: '',
//     metaTitle: '',
//     metaDescription: '',
//     metaKeywords: '',
//     teamHeading: '',
//     teamVideoLink: '',
//     aboutHeading: '',
//     aboutContent: '',
//     selectedButtons: '',
//     selectedSections: [],
//     modules: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, value, checked } = e.target;
//     if (checked) {
//       setFormData({ ...formData, [name]: [...formData[name], value] });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: formData[name].filter((item) => item !== value),
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="container-fluid my-4">
//       <form onSubmit={handleSubmit}>

//         {/* Course Selection Section */}
//         <div className="p-3 mb-4 bg-success text-white">
//           <h4>Select Course in Which You Want to Create Webpage</h4>
//           <div className="form-group">
//             <label>Select Course Category:</label>
//             <input
//               type="text"
//               name="courseCategory"
//               className="form-control"
//               value={formData.courseCategory}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* Meta Content Section */}
//         <div className="p-3 mb-4 bg-success text-white">
//           <h4>Meta Content</h4>
//           <div className="form-group">
//             <label>Page Title:</label>
//             <input
//               type="text"
//               name="pageTitle"
//               className="form-control"
//               value={formData.pageTitle}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Meta Title:</label>
//             <input
//               type="text"
//               name="metaTitle"
//               className="form-control"
//               value={formData.metaTitle}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Meta Description:</label>
//             <textarea
//               name="metaDescription"
//               className="form-control"
//               value={formData.metaDescription}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Meta Keywords:</label>
//             <input
//               type="text"
//               name="metaKeywords"
//               className="form-control"
//               value={formData.metaKeywords}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* Turya Yoga Team Section */}
//         <div className="p-3 mb-4 bg-success text-white">
//           <h4>Turya Yoga Team</h4>
//           <div className="form-group">
//             <label>Slider Heading:</label>
//             <input
//               type="text"
//               name="teamHeading"
//               className="form-control"
//               value={formData.teamHeading}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Slider Video Link:</label>
//             <input
//               type="text"
//               name="teamVideoLink"
//               className="form-control"
//               value={formData.teamVideoLink}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* About First Section */}
//         <div className="p-3 mb-4 bg-success text-white">
//           <h4>About First Section</h4>
//           <div className="form-group">
//             <label>Heading:</label>
//             <input
//               type="text"
//               name="aboutHeading"
//               className="form-control"
//               value={formData.aboutHeading}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Paragraph Content:</label>
//             <textarea
//               name="aboutContent"
//               className="form-control"
//               value={formData.aboutContent}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* Select Sections */}
//         <div className="p-3 mb-4 bg-success text-white">
//           <h4>Select Sections You Want to Show on Webpage</h4>
//           <div className="form-group">
//             <label>Select Buttons to Show on Website:</label>
//             <div className="form-check">
//               <input
//                 type="radio"
//                 name="selectedButtons"
//                 value="Module Button"
//                 className="form-check-input"
//                 onChange={handleInputChange}
//               />
//               <label className="form-check-label">Module Button</label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="radio"
//                 name="selectedButtons"
//                 value="Video Button"
//                 className="form-check-input"
//                 onChange={handleInputChange}
//               />
//               <label className="form-check-label">Video Button</label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="radio"
//                 name="selectedButtons"
//                 value="Video and Appointment Button"
//                 className="form-check-input"
//                 onChange={handleInputChange}
//               />
//               <label className="form-check-label">Video and Appointment Button</label>
//             </div>
//           </div>

//           <div className="form-group">
//             <label>Select Sections:</label>
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 name="selectedSections"
//                 value="Banner Section"
//                 className="form-check-input"
//                 onChange={handleCheckboxChange}
//               />
//               <label className="form-check-label">Banner Section</label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 name="selectedSections"
//                 value="Turya Advantages"
//                 className="form-check-input"
//                 onChange={handleCheckboxChange}
//               />
//               <label className="form-check-label">Turya Advantages</label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 name="selectedSections"
//                 value="Video Testimonials"
//                 className="form-check-input"
//                 onChange={handleCheckboxChange}
//               />
//               <label className="form-check-label">Video Testimonials</label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 name="selectedSections"
//                 value="Gallery"
//                 className="form-check-input"
//                 onChange={handleCheckboxChange}
//               />
//               <label className="form-check-label">Gallery</label>
//             </div>
//           </div>
//         </div>

//         {/* Modules Section */}
//         <div className="p-3 mb-4 bg-success text-white">
//           <div className="form-group">
//             <label>Modules:</label>
//             <input
//               type="text"
//               name="modules"
//               className="form-control"
//               value={formData.modules}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CourseForm;

// ========================================================

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import SectionWebPage from "./SectionWebPage";
import { useNavigate } from "react-router-dom";
const SectionAdd = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"], // This adds a button to remove formatting
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
    { label: "Select Course Category", value: "1" },
    { label: "Alle Kommenden Kurse", value: "1" },
    { label: "200H AYA Yogalehrer Ausbildung - Intensiv", value: "2" },
    {
      label: "500H AYA Yogalehrer Blockausbildung | 100h Einzelmodule",
      value: "3",
    },
    { label: "60H Yin Yoga", value: "4" },
    { label: "60H Senioren Yoga", value: "5" },
    { label: "Hybride Wochenend Yogalehrer Ausbildung", value: "6" },
  ];

  console.log(courseCategories);

  const [courseCategory, setccourseCategory] = useState("");
  const HandleCourseCategory = (event) => {
    // setFaqs(event.target.value.split(','));
  };

  // ===============================================================================
  const handleFaqsChange = (event) => {
    setFaqs(event.target.value.split(","));
  };

  const handleModulesChange = (event) => {
    setModules(event.target.value.split(","));
  };

  const [selectedButton, setSelectedButton] = useState("");
  const [selectedSections, setSelectedSections] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [modules2, setModules] = useState([]);

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

  // ===============================================================================================
  // Handle form submission
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Course Category: ", formData.courseCategory);
  //     console.log("Page URL: ", formData.pageUrl);
  //     console.log("Meta Title: ", formData.metaTitle);
  //     console.log("Meta Description: ", formData.metaDescription);
  //     console.log("Meta Keywords: ", formData.metaKeywords);
  //     console.log("Slider Heading: ", formData.sliderHeading);
  //     console.log("Slider Paragraph: ", formData.sliderParagraph);
  //     console.log("Slider Video Link: ", formData.sliderVideoLink);
  //     console.log("Slide Image: ", formData.slideImage);

  //     // Log selected FAQ and Modules
  //     console.log("Selected FAQs: ", faqs);
  //     console.log("Selected Modules: ", modules2);

  //     // Log selected button and sections
  //     console.log("Selected Button: ", selectedButton);
  //     console.log("Selected Sections: ", selectedSections);

  //     alert("Form Submitted! Check the console for output.");
  //   };

  // ==============================================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data to the console
    console.log("Course Category: ", formData.courseCategory);
    console.log("Page URL: ", formData.pageUrl);
    console.log("Meta Title: ", formData.metaTitle);
    console.log("Meta Description: ", formData.metaDescription);
    console.log("Meta Keywords: ", formData.metaKeywords);
    console.log("Slider Heading: ", formData.sliderHeading);
    console.log("Slider Paragraph: ", formData.sliderParagraph);
    console.log("Slider Video Link: ", formData.sliderVideoLink);
    console.log("Slide Image: ", formData.slideImage);

    // Log selected FAQ and Modules
    console.log("Selected FAQs: ", faqs);
    console.log("Selected Modules: ", modules2);

    // Log selected button and sections
    console.log("Selected Button: ", selectedButton);
    console.log("Selected Sections: ", selectedSections);

    // Clear the form data state
    setFormData({
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

    // Clear selected button, sections, and other selections
    setSelectedButton("");
    setSelectedSections([]);
    setFaqs([]);
    setModules([]);
    setBlogHeading("");
    setBlogContent("");
    alert("Form Submitted! Check the console for output.");
  };

  const payload = {
    // courseCategory: formData.courseCategory,
    // pageUrl: formData.pageUrl,
    // metaTitle: formData.metaTitle,
    // metaDescription: formData.metaDescription,
    // metaKeywords: formData.metaKeywords,
    // yogaTeamSliderHeading: formData.sliderHeading,
    // yogaTeamSliderParagraph: formData.sliderParagraph,
    // yogaTeamSliderVideoLink: formData.sliderVideoLink,
    // yogaTeamSlideImage: formData.slideImage,

    // about_first_section_SliderHeading: formData.sliderHeading,
    // about_first_section_SliderParagraph: formData.sliderParagraph,
    // about_first_section_SliderVideoLink: formData.sliderVideoLink,
    // about_first_section_SlideImage: formData.slideImage,



    // faqs: faqs, type array
    // modules: modules2, type array
    // selectedButton: selectedButton, type array
    // selectedSections: selectedSections, type array

  };

  // ==================================================================================================
  const [blogHeading, setBlogHeading] = useState("");
  const [blogContent, setBlogContent] = useState("");

  return (
    <div className="container-fluid">
      <div className="card shadow-sm p-3" style={{ border: "none" }}>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div
              className="px-3 py-2 mb-3 rounded mb-3"
              style={{ backgroundColor: "#9EC54E", borderRadius: "12x" }}>
              <h4 className="text-white">
                Select Course In Which You Want to Create Webpage
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

                {courseCategories.map((category) => {
                  return (
                    <option key={category.value} value={category.value}>
                      {category.label}
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
                <label className="form-label">Enter Blog Heading:</label>
                <input
                  type="text"
                  className="form-control"
                  value={blogHeading}
                  onChange={(e) => setBlogHeading(e.target.value)}
                  placeholder="Enter blog heading"
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
                  onChange={handleFileChange}
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
                      onChange={handleFaqsChange}
                      value={faqs[0] ? faqs[0] : ""}>
                      <option selected>You can Select multiple Option</option>
                      {faqOptions.map((faq, index) => (
                        <option key={index} value={faq}>
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
                      onChange={handleModulesChange}
                      value={modules2[0] ? modules2[0] : ""}>
                      <option selected>You can Select multiple Option</option>
                      {module_option.map((faq, index) => (
                        <option key={index} value={faq}>
                          {faq}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
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

export default SectionAdd;
