import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";

const AddFaqCategories = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);



  const [courses, setCourses] = useState([]);

  const fetchData = () => {
    axios
      .get(BASE_URL + "/faq_category")
      .then((response) => {
        console.log("faq category", response.data.data);

        if (response.status == 200) {
          setCourses(response.data.data);
        } else {
          alert("somthing went wrong: ");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  useEffect(() => {
    fetchData();
  }, []);



  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;



  // Function to toggle the active status
  const toggleActive = (id) => {

    if (id) {
      axios
        .put(
          `${BASE_URL}/toggle_faq_category/${id}`
        )
        .then((response) => {
          console.log("response toggle", response.data.data);
          // setGalleries(response.data.data);
          fetchData();
        })
        .catch((err) => {
          console.log("Error: toggle", err);
        });
    } else {
      console.log("id not found")
    }
  };



  // =================================================================================================
  const deleteModule = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };



  // Delete category
  const handleDeleteConfirm = () => {
    if (deleteItemId) {
      axios
        .delete(
          BASE_URL + `/delete_faq_category/${deleteItemId}`,
        )
        .then((response) => {
          console.log("delete response", response);

          fetchData();
          setShowDeleteModal(false); // Close the modal
          setDeleteItemId("");
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    } else {
      console.log("id not found")
    }



  };

  // =========================================================================================================================
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



  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="d-flex justify-content-between mb-3 bg-light py-3 px-3">
          <h4> Faq Category</h4>
          <Link to="/manage_faq_categories" className="btn btn-success">
            Add Faq Category
          </Link>
        </div>

        <table
          className="table table-striped"
          style={{ border: "1px solid #ddd6d6" }}>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th> Name</th>

              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {currentCourses.map((course, index) => (
              <tr key={course.id}>
                <td>{indexOfFirstItem + index + 1}</td>

                <td>{course.faqCategory}</td>
                <td>
                  {/* <button
                    onClick={() => toggleActive(course._id)}
                    className={`btn ${
                      course.isActive ? "btn-warning" : "btn-secondary"
                    }`}>
                    {course.status ? "Active" : "Inactive"}
                  </button> */}


                  <button
                    className={`btn ${course.status === "active" ? "btn-warning" : "btn-secondary"}`}

                    onClick={() => toggleActive(course._id)}
                  >
                    {course.status}
                  </button>



                  <Link
                    to={`/manage_faq_categories/${course._id}`}
                    className="btn btn-primary me-2 ms-2">
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger"
                    onClick={() => deleteModule(course._id)}>
                    Delete
                  </button>
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

export default AddFaqCategories;
