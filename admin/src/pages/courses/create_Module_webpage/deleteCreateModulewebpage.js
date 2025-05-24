// import React, { useState } from "react";
// import './createModule.scss'
// const CourseTable = () => {
//   const [courses, setCourses] = useState([
//     { id: 1, category: "+500h Yoga Ausbildung / Modul 5", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 2, category: "+400h Yoga Ausbildung / Modul 4", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 3, category: "+300h Yoga Ausbildung / Modul 3", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 3, category: "+300h Yoga Ausbildung / Modul 3", title: "[value-7]", name: "[value-6]", isActive: true },
//     // Add more courses here...
//     { id: 3, category: "+300h Yoga Ausbildung / Modul 3", title: "[value-7]", name: "[value-6]", isActive: true },
//   ]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Function to toggle the active status
//   const toggleActive = (id) => {
//     setCourses((prevCourses) =>
//       prevCourses.map((course) =>
//         course.id === id ? { ...course, isActive: !course.isActive } : course
//       )
//     );
//   };

//   // Pagination calculations
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <h2>Course Webpages</h2>
//       <button className="btn btn-primary">Add New Course Webpage</button>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Course Categories</th>
//             <th>Title</th>
//             <th>Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentCourses.map((course, index) => (
//             <tr key={course.id}>
//               <td>{indexOfFirstItem + index + 1}</td>
//               <td>{course.category}</td>
//               <td>{course.title}</td>
//               <td>{course.name}</td>
//               <td>
//                 <button
//                   onClick={() => toggleActive(course.id)}
//                   className={`btn ${course.isActive ? "btn-warning" : "btn-secondary"}`}
//                 >
//                   {course.isActive ? "Active" : "Inactive"}
//                 </button>
//                 <button className="btn btn-primary">Edit</button>
//                 <button className="btn btn-danger">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination">
//         {Array.from({ length: Math.ceil(courses.length / itemsPerPage) }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => handlePageChange(i + 1)}
//             className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CourseTable;

// =========================================================================

// import React, { useState } from "react";

// const Create_Module_webpage = () => {
//   const [courses, setCourses] = useState([
//     { id: 1, category: "+500h Yoga Ausbildung / Modul 5", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 2, category: "+400h Yoga Ausbildung / Modul 4", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 3, category: "+300h Yoga Ausbildung / Modul 3", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 4, category: "+200h Yoga Ausbildung / Modul 2", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 5, category: "100h Yoga Ausbildung / Modul 1", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 6, category: "Blockausbildung / Überblick", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 7, category: "Yogalehrerausbildung Himalaya Indien", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 8, category: "200H/AYA Yogalehrer Ausbildung I Mallorca", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 9, category: "200H AYA Yogalehrer Ausbildung Goa Indien", title: "[value-7]", name: "[value-6]", isActive: true },
//     { id: 10, category: "200H/AYA Yogalehrer Ausbildung Seminarhaus", title: "[value-7]", name: "[value-6]", isActive: true },
//     // Add more courses here...
//   ]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Function to toggle the active status
//   const toggleActive = (id) => {
//     setCourses((prevCourses) =>
//       prevCourses.map((course) =>
//         course.id === id ? { ...course, isActive: !course.isActive } : course
//       )
//     );
//   };

//   // Pagination calculations
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(courses.length / itemsPerPage);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <div>
//       <h2>Course Webpages</h2>
//       <button className="btn btn-primary">Add New Course Webpage</button>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Course Categories</th>
//             <th>Title</th>
//             <th>Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentCourses.map((course, index) => (
//             <tr key={course.id}>
//               <td>{indexOfFirstItem + index + 1}</td>
//               <td>{course.category}</td>
//               <td>{course.title}</td>
//               <td>{course.name}</td>
//               <td>
//                 <button
//                   onClick={() => toggleActive(course.id)}
//                   className={`btn ${course.isActive ? "btn-warning" : "btn-secondary"}`}
//                 >
//                   {course.isActive ? "Active" : "Inactive"}
//                 </button>
//                 <button className="btn btn-primary">Edit</button>
//                 <button className="btn btn-danger">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination">
//         <button
//           onClick={handlePrevPage}
//           className=" btn btn-secondary page-item"
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => handlePageChange(i + 1)}
//             className={`btn btn-success page-item ${currentPage === i + 1 ? "active" : ""}`}
//           >
//             {i + 1}
//           </button>
//         ))}
//         <button
//           onClick={handleNextPage}
//           className="btn btn-primary page-item"
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Create_Module_webpage;

// ==============================================================================

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Create_Module_webpage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [courses, setCourses] = useState([
    {
      id: 1,
      category: "+500h Yoga Ausbildung / Modul 5",
      title: "[value-7]",
      name: "[value-6]",
      isActive: true,
    },
    {
      id: 2,
      category: "+400h Yoga Ausbildung / Modul 4",
      title: "[value-7]",
      name: "[value-6]",
      isActive: true,
    },
    {
      id: 3,
      category: "+300h Yoga Ausbildung / Modul 3",
      title: "[value-7]",
      name: "[value-6]",
      isActive: true,
    },
    {
      id: 4,
      category: "+200h Yoga Ausbildung / Modul 2",
      title: "[value-7]",
      name: "[value-6]",
      isActive: true,
    },
    {
      id: 5,
      category: "100h Yoga Ausbildung / Modul 1",
      title: "[value-7]",
      name: "[value-6]",
      isActive: true,
    },
    {
      id: 6,
      category: "Blockausbildung / Überblick",
      title: "[value-7]",
      name: "[value-6]",
      isActive: true,
    },
    {
      id: 7,
      category: "Yogalehrerausbildung Himalaya Indien",
      title: "[value-7]",
      name: "[value-6]",
      isActive: true,
    },
    {
      id: 8,
      category: "200H/AYA Yogalehrer Ausbildung I Mallorca",
      title: "[value-7]",
      name: "[value-6]",
      isActive: true,
    },
    {
      id: 9,
      category: "200H AYA Yogalehrer Ausbildung Goa Indien",
      title: "[value-7]",
      name: "[value-6]",
      isActive: true,
    },
    {
      id: 10,
      category: "200H/AYA Yogalehrer Ausbildung Seminarhaus",
      title: "[value-7]",
      name: "[value-6]",
      isActive: true,
    },
    // Add more courses here...
  ]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Function to toggle the active status
  const toggleActive = (id) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, isActive: !course.isActive } : course
      )
    );
  };

  const deleteModule = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const showModal = () => {};

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const [show, setShow] = useState(false);
  const [deleteModuleId, setDeleteModuleId] = useState("");
  const handleShow = (id) => {
    setShow(true);
    setDeleteModuleId(id);
  };

  const handleClose = () => {
    setShow(false);
    deleteModule(deleteModuleId);
  };

  const [deleteItemId, setDeleteItemId] = useState("");
  // Delete category
  const handleDelete = (id) => {
    // alert("Delete category")
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  const handleDeleteConfirm = () => {
    setCourses((prevList) =>
      prevList.filter((item) => item.id !== deleteItemId)
    );

    // setGalleries(galleries.filter((item) => item.id !== deleteItemId));
    // setBlogs((prevUsers) => prevUsers.filter((user) => user.id !== deleteItemId)); // Filter out the user with matching id

    setShowDeleteModal(false); // Close the modal
    setDeleteItemId("");
  };

  return (
    <div className="container-fluid mt-2">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="d-flex justify-content-between mb-3 bg-light py-3 px-3">
          <h4>Course Webpages</h4>
          <Link to="/manage_module_webpage" className="btn btn-success">
            Add New Course Webpage
          </Link>
        </div>

        <table
          className="table table-striped"
          style={{ border: "1px solid #ddd6d6" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Course Categories</th>
              <th>Title</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentCourses.map((course, index) => (
              <tr key={course.id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{course.category}</td>
                <td>{course.title}</td>
                <td>{course.name}</td>
                <td>
                  <button
                    onClick={() => toggleActive(course.id)}
                    className={`btn ${
                      course.isActive ? "btn-warning" : "btn-secondary"
                    }`}>
                    {course.isActive ? "Active" : "Inactive"}
                  </button>
                  <Link
                    to="/manage_module_webpage"
                    className="btn btn-info me-2 ms-2">
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(course.id)}>
                    Delete
                  </button>
                  {/* <button className="btn btn-danger"  onClick={() => deleteModule(course.id)}>Delete</button> */}
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
                  onClick={handleDeleteConfirm}>
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
                  onClick={handleDeleteConfirm}>
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

        <div className="pagination d-flex justify-content-end">
          <button
            onClick={handlePrevPage}
            className="btn btn-secondary page-item me-2"
            disabled={currentPage === 1}>
            Prev
          </button>
          <span className="btn btn-success current-page">
            Page {currentPage}
          </span>
          <button
            onClick={handleNextPage}
            className="btn btn-primary page-item ms-2"
            disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create_Module_webpage;
