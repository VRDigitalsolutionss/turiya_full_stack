// ============================================================

import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../../config";
const CourseTable = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [courses, setCourses] = useState([
    {
      id: 1,
      category: "Hybride Wochenend Yogalehrer Ausbildung",
      title: "Hybride Wochenend Yogalehrer Ausbildung...",
      name: "Hybride Wochenend Yogalehrer Ausbildung...",
      isActive: true,
    },
    {
      id: 2,
      category: "60H Senioren Yoga",
      title: "60H Senioren Yoga...",
      name: "60H Senioren Yoga...",
      isActive: true,
    },
    {
      id: 3,
      category: "60H Yin Yoga",
      title: "60H Yin Yoga senior...",
      name: "60H Yin Yoga senior...",
      isActive: true,
    },
    {
      id: 4,
      category: "500H AYA Yogalehrer Blockausbildung | 100h Einzelmodule",
      title: "500H AYA Yogalehrer Blockausbildung | 100h Einzelmodule...",
      name: "500H AYA Yogalehrer Blockausbildung | 100h Einzelmodule...",
      isActive: true,
    },
    {
      id: 5,
      category: "200H AYA Yogalehrer Ausbildung - Intensiv",
      title: "200H AYA Yogalehrer Ausbildung - Intensiv...",
      name: "200H AYA Yogalehrer Ausbildung - Intensiv...",
      isActive: true,
    },
    {
      id: 6,
      category: "Alle Kommenden Kurse",
      title: "Alle kommenden Yogalehrer Ausbildungen...",
      name: "Alle kommenden Yogalehrer Ausbildungen...",
      isActive: true,
    },
  ]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const fetchData = () => {
    axios
      .get(BASE_URL + "/all_course_webpages")
      .then((response) => {
        console.log("response of crete course all", response.data.data);
        setCourses(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 10; // Number of courses per page

  const truncateText = (text, length) => {
    if (!text || typeof text !== "string") {
      return ""; // Return an empty string if text is undefined or not a string
    }
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  const toggleActive = (id) => {
    // setCourses(
    //   courses.map((course) =>
    //     course.id === id ? { ...course, isActive: !course.isActive } : course
    //   )
    // );


    if (id) {
      axios.get(BASE_URL + `/toggle_course_webpage_status2/${id}`).then((response) => {
        console.log("response of toggle_course_webpage_status", response);
        fetchData();

        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      alert("id not found");
    }
  };
  const [deleteItemId, setDeleteItemId] = useState("");

  // ===========================================================================================================
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

  // ===============================================================================
  const deleteCourse = (id) => {
    // alert("Delete category")
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  const editCourse = (id, newValues) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, ...newValues } : course
      )
    );
  };

  const addCourse = (newCourse) => {
    setCourses([
      ...courses,
      { ...newCourse, id: courses.length + 1, isActive: true },
    ]);
  };

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDeleteConfirm = () => {
    // setCourses((prevList) =>
    //   prevList.filter((item) => item.id !== deleteItemId)
    // );

    // setGalleries(galleries.filter((item) => item.id !== deleteItemId));
    // setBlogs((prevUsers) => prevUsers.filter((user) => user.id !== deleteItemId)); // Filter out the user with matching id

    if (deleteItemId) {
      // axios.put(`http://127.0.0.1:7000/api/toggle_course_webpage_status/${id}`).then((response) => {
      axios
        .delete(
          BASE_URL +  `/delete_course_webpage/${deleteItemId}`
        )
        .then((response) => {
          console.log("response delete_course_webpage_status", response);

          setShowDeleteModal(false); // Close the modal
          setDeleteItemId("");
          fetchData();
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      alert("id not found");
    }
  };

  return (
    <div className="container-fluid mt-2">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="d-flex justify-content-between mb-3 bg-light py-3 px-3">
          <h4>Course Webpages new</h4>
          <Link to="/manage_course_webpage" className="btn btn-success">
            Add New Course Webpage
          </Link>
        </div>

        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Course Categories</th>
              {/* <th>Title</th> */}
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentCourses &&
              currentCourses.map((course, index) => (
                <tr key={course.id}>
                  <td>{indexOfFirstCourse + index + 1}</td>
                  <td>{course.courseCategory}</td>
                  {/* <td>{course.metaTitle}</td> */}
                  <td>{truncateText(course.courseCategory, 15)}</td>
                  <td>
                  


                    <button
                    
                    
                    className={`btn  ${course.status == "active" ? "btn-warning" : "btn-secondary"}`}
                  
                  onClick={() => toggleActive(course._id)}>
                  {course.status }
                  {/* {activeStates[item.id] ? "Active" : "Inactive"} */}
                </button>
                    <button
                      onClick={() => deleteCourse(course._id)}
                      className="btn btn-sm btn-danger me-2 ms-3">
                      Delete
                    </button>
                    {/* <button
                    onClick={() => editCourse(course.id, { title: 'Edited Title' })}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </button> */}
                    <Link
                      to={`/manage_course_webpage/${course._id}`}
                      className="btn btn-sm btn-info">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {showDeleteModal && (
          <div
            id="modalOverlay"
            className="hiddenOverlayContainer"
            style={{ display: "block" }}>
            <div className="customDialogBox">
              <div
                className="row "
                style={{
                  backgroundColor: "light",
                  padding: "15px",
                  borderBottom: "1px solid #7f7f7f",
                  paddingBottom: "6px",
                }}>
                <div className="col-sm-6 d-flex justify-content-start">
                  <h4 className="modal_header">
                    <RiDeleteBin6Fill className="me-3" />
                    Confirmation
                  </h4>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                  {/* <span className="exitButtonTrigger" onClick={closeDialogBox}>
          ×
        </span> */}
                  <span
                    className="exitButtonTrigger"
                    onClick={() => setShowDeleteModal(false)}>
                    ×
                  </span>
                </div>
              </div>

              <div className="text-start pt-3">
                <ul className="modal_contact_details">
                  <li>Are you sure you want to delete this item ?</li>
                </ul>
                <hr />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-danger me-3"
                  onClick={() => handleDeleteConfirm()}>
                  Delete
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="d-flex justify-content-end align-items-center mt-3">
          <button
            className="btn btn-secondary me-2"
            onClick={prevPage}
            disabled={currentPage === 1}>
            Previous
          </button>
          <button type="button" className="btn btn-success me-2">
            <span>Page {currentPage}</span>
          </button>
          <button
            className="btn btn-primary"
            onClick={nextPage}
            disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseTable;
