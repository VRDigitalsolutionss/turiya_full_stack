// // import React, { useState } from 'react';

// // const SelectionComponent = () => {
// //   const [selectedButton, setSelectedButton] = useState('');
// //   const [selectedSections, setSelectedSections] = useState([]);
// //   const [faqs, setFaqs] = useState([]);
// //   const [modules, setModules] = useState([]);

// //   const buttons = [
// //     { label: 'Module button (Redirect same page)', value: 'moduleSame' },
// //     { label: 'Video Button', value: 'video' },
// //     { label: 'Module button (Redirect different page)', value: 'moduleDifferent' },
// //     { label: 'Video and appointment button', value: 'videoAppointment' },
// //   ];

// //   const sections = [
// //     'Banner Section', 'Turiya Advantages', 'Turiya Training Place Section',
// //     'Module Section', 'FAQ Section', 'Contact Us section', 'Offer Card',
// //     'Info Card', 'Text Testimonials', 'Video Testimonials', 'Gallery', 'Newsletter'
// //   ];

// //   const handleButtonChange = (value) => {
// //     setSelectedButton(value);
// //   };

// //   const handleSectionChange = (section) => {
// //     setSelectedSections((prev) =>
// //       prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
// //     );
// //   };

// //   const handleFaqsChange = (event) => {
// //     setFaqs(event.target.value.split(','));
// //   };

// //   const handleModulesChange = (event) => {
// //     setModules(event.target.value.split(','));
// //   };

// //   const handleSubmit = () => {
// //     const selectedData = {
// //       selectedButton,
// //       selectedSections,
// //       faqs,
// //       modules,
// //     };
// //     console.log("Selected Data: ", selectedData);
// //     // Process the data as needed
// //   };

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h3>Select which section you want to show on Webpage:</h3>

// //       <h4>Select button which you want to show on website:</h4>
// //       <div>
// //         {buttons.map((button) => (
// //           <label key={button.value} style={{ marginRight: '15px' }} >
// //             <input
// //               type="radio"
// //                     name="button"
// //                     class="form-check-input"
// //               value={button.value}
// //               checked={selectedButton === button.value}
// //               onChange={() => handleButtonChange(button.value)}
// //             />
// //             {button.label}
// //           </label>
// //         ))}
// //       </div>

// //       <h4>Select sections which you want to show on website:</h4>
// //       <div>
// //         {sections.map((section) => (
// //           <label key={section} style={{ marginRight: '15px' }}>
// //             <input
// //                     type="checkbox"
// //                     className='form-control'
// //               value={section}
// //               checked={selectedSections.includes(section)}
// //               onChange={() => handleSectionChange(section)}
// //             />
// //             {section}
// //           </label>
// //         ))}
// //       </div>

// //       <h4>Select FAQ and modules which you want to show on website:</h4>
// //       <div>
// //         <label>
// //           FAQ's:
// //           <input
// //                       type="text"
// //                  class="form-check-input"
// //             placeholder="Enter FAQ's separated by commas"
// //             onChange={handleFaqsChange}
// //           />
// //         </label>
// //       </div>

// //       <div style={{ marginTop: '10px' }}>
// //         <label>
// //           Modules:
// //           <input
// //                       type="text"
// //                       class="form-check-input"
// //             placeholder="Enter modules separated by commas"
// //             onChange={handleModulesChange}
// //           />
// //         </label>
// //       </div>

// //       <button style={{ marginTop: '20px' }} onClick={handleSubmit}>Submit</button>
// //     </div>
// //   );
// // };

// // export default SelectionComponent;

// // ===========================================================================================

// import React, { useState } from 'react';

// const SelectionComponent = () => {
//   const [selectedButton, setSelectedButton] = useState('');
//   const [selectedSections, setSelectedSections] = useState([]);
//   const [faqs, setFaqs] = useState([]);
//   const [modules, setModules] = useState([]);

//   const buttons = [
//     { label: 'Module button (Redirect same page)', value: 'moduleSame' },
//     { label: 'Video Button', value: 'video' },
//     { label: 'Module button (Redirect different page)', value: 'moduleDifferent' },
//     { label: 'Video and appointment button', value: 'videoAppointment' },
//   ];

//   const sections = [
//     'Banner Section', 'Turiya Advantages', 'Turiya Training Place Section',
//     'Module Section', 'FAQ Section', 'Contact Us section', 'Offer Card',
//     'Info Card', 'Text Testimonials', 'Video Testimonials', 'Gallery', 'Newsletter'
//   ];

//   const handleButtonChange = (value) => {
//     setSelectedButton(value);
//   };

//   const handleSectionChange = (section) => {
//     setSelectedSections((prev) =>
//       prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
//     );
//   };

//   const handleFaqsChange = (event) => {
//     setFaqs(event.target.value.split(','));
//   };

//   const handleModulesChange = (event) => {
//     setModules(event.target.value.split(','));
//   };

//   const handleSubmit = () => {
//     const selectedData = {
//       selectedButton,
//       selectedSections,
//       faqs,
//       modules,
//     };
//     console.log("Selected Data: ", selectedData);
//     // Process the data as needed
//   };

//   return (
//     <div className="container my-4">
//       <h3 className="text-primary mb-3">Select which section you want to show on Webpage:</h3>

//       <h4>Select button which you want to show on website:</h4>
//       <div className="mb-4">
//         {buttons.map((button) => (
//           <div key={button.value} className="form-check form-check-inline">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="button"
//               value={button.value}
//               checked={selectedButton === button.value}
//               onChange={() => handleButtonChange(button.value)}
//             />
//             <label className="form-check-label">{button.label}</label>
//           </div>
//         ))}
//       </div>

//       <h4>Select sections which you want to show on website:</h4>
//       <div className="mb-4">
//         {sections.map((section) => (
//           <div key={section} className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               value={section}
//               checked={selectedSections.includes(section)}
//               onChange={() => handleSectionChange(section)}
//             />
//             <label className="form-check-label">{section}</label>
//           </div>
//         ))}
//       </div>

//       <h4>Select FAQ and modules which you want to show on website:</h4>
//       <div className="mb-3">
//         <label className="form-label">FAQ's:</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter FAQ's separated by commas"
//           onChange={handleFaqsChange}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="form-label">Modules:</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter modules separated by commas"
//           onChange={handleModulesChange}
//         />
//       </div>

//       <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default SelectionComponent;

// // ===========================================================================================================

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL,BASE_URL_IMAGE } from "../../../config";
const SelectionComponent = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [selectedButton, setSelectedButton] = useState("");
  const [selectedSections, setSelectedSections] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [modules, setModules] = useState([]);

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
    setModules(event.target.value.split(","));
  };

  const handleSubmit = () => {
    const selectedData = {
      selectedButton,
      selectedSections,
      faqs,
      modules,
    };
    console.log("Selected Data: ", selectedData);
    // Process the data as needed
  };

  return (
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
              <label className="form-check-label">{button.label}</label>
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
              <label className="form-check-label">{section.label}</label>
            </div>
          </div>
        ))}
      </div>

      <h4>Select FAQ and modules which you want to show on website:</h4>
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
  );
};

export default SelectionComponent;

//==================================================================
