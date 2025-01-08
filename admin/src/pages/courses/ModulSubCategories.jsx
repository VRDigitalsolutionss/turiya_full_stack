import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./comman.scss";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

const ManageModuleSubcategories = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [subcategories, setSubcategories] = useState("");
  const [courseCategoriesData, setCourseCategoriesData] = useState('');


  useEffect(() => {
    fetchCourseCategories();
    if (!token) {
      navigate("/login");
    }
  }, []);


  const fetchCourseCategories = async () => {
    try {
      // Send the category to the API
      const response = await axios.get(BASE_URL + "/course_categories_latest");

      // Add the new category to the categories list (local state)
      console.log("course_categories data ", response.data.data);
      setCourseCategoriesData(response.data.data);
    } catch (error) {
      console.error("Error adding category:", error.response?.data || error.message);
    }

  };


  console.log("courseCategoriesData data",courseCategoriesData)

  const fetchData = () => {
    axios
      // .get("http://127.0.0.1:7000/api/module_categories")
      .get(BASE_URL + "/module_categories_latest")
      .then((response) => {
        console.log(" module sub categories response", response);
        if (response.status === 200) {
          setSubcategories(response.data.data);
        } else {
          alert("something went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Calculate pagination
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentRows =
    subcategories && subcategories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(subcategories.length / rowsPerPage);

  // Paginate function
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const [deleteItemId, setDeleteItemId] = useState("");
  // Delete subcategory
  const deleteSubcategory = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  // Delete category

  const handleDeleteConfirm = () => {
    // setSubcategories((prevSubcategories) =>
    //   prevSubcategories.filter((item) => item.id !== deleteItemId)
    // );
    // setGalleries(galleries.filter((item) => item.id !== deleteItemId));
    // setBlogs((prevUsers) => prevUsers.filter((user) => user.id !== deleteItemId)); // Filter out the user with matching id

    if (deleteItemId) {
      axios
        .delete(
          BASE_URL + `/delete_module_category/${deleteItemId}`
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
      console.log("id not found");
    }
  };

  return (
    <div className="container-fluid mt-2">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="d-flex justify-content-between mb-3 bg-light py-3 px-3">
          <h4>Manage Module Subcategories</h4>
          <Link to="/manage_module_subcategories" className="btn btn-success">
            Add Module Subcategory
          </Link>
        </div>
        <table className="table table-striped border rounded">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Module Name</th>
              <th>Course Categories</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows &&
              currentRows.map((item, index) => (
                <tr key={item.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{item.modulecategory}</td>
                  <td>{item?.category?.category}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteSubcategory(item._id)}>
                      Delete
                    </button>
                    <Link
                      to={`/manage_module_subcategories/${item._id}`}
                      className="btn btn-info ms-2">
                      Edit
                    </Link>
                    {/* <Link to={`/edit_module_subcategory/${item.id}`} className="btn btn-info ms-2">Edit</Link> */}
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

        {/* Simplified Pagination Controls */}
        <div className="d-flex justify-content-end mt-3">
          <button
            className="btn btn-secondary me-2"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}>
            Previous
          </button>
          <button className="btn btn-success">{currentPage}</button>
          <button
            className="btn btn-primary ms-2"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageModuleSubcategories;
