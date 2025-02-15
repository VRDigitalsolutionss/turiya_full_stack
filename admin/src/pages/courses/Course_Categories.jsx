import React, { useEffect, useState } from "react";
import "./comman.scss";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";

const ManageCourseCategories = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [courseCategoriesData, setCourseCategoriesData] = useState('');

  console.log("course categories data: ", courseCategoriesData);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);


  const fetchData = async () => {
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


  useEffect(() => {
    // Fetch category data when component mounts
    fetchData();
  }, []);



  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Set rows per page
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Calculate pagination
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentRows = courseCategoriesData && courseCategoriesData.slice(indexOfFirstItem, indexOfLastItem);
  console.log("course categories", currentRows)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Toggle active status
  const toggleActive = (id) => {
    axios
      .put(
        BASE_URL + `/toggle_course_category/${id}`
      )
      .then((response) => {
        console.log("response toggle", response.data.data);
        // setGalleries(response.data.data);
        fetchData();
      })
      .catch((err) => {
        console.log("Error: toggle", err);
      });
  };


  const [deleteItemId, setDeleteItemId] = useState("");
  // Delete category
  const deleteCategory = (id) => {
    // alert("Delete category")
    setDeleteItemId(id);
    setShowDeleteModal(true);

  };

  const handleDeleteConfirm = () => {
    // courseCategoriesData((prevList) =>
    //   prevList.filter((item) => item.id !== deleteItemId)
    // );

    // setGalleries(galleries.filter((item) => item.id !== deleteItemId));
    // setBlogs((prevUsers) => prevUsers.filter((user) => user.id !== deleteItemId)); // Filter out the user with matching id

    if (deleteItemId) {
      axios
        .delete(
          BASE_URL + `/delete_course_category/${deleteItemId}`,
        )
        .then((response) => {
          console.log("delete response", response);


          fetchData();
          setDeleteItemId("");
          setShowDeleteModal(false); // Close the modal
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    } else {
      console.log("id not found")
    }
  };


  return (
    <div className="container-fluid mt-2">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="d-flex justify-content-between mb-3 bg-light py-3 px-3">
          <h4>Manage Course Categories </h4>
          <Link to="/manage_Categories" className="btn btn-success">
            Add Course Category
          </Link>
        </div>
        <table className="table table-striped border rounded">
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows && currentRows.map((item, index) => (
              <tr key={item.id}>
                <td>{indexOfFirstItem + index + 1}</td>
                {console.log("testing category name", item)}
                <td>{item.modulecategory ? item.modulecategory : item.category
                }</td>
                <td>


                  <button
                    onClick={() => toggleActive(item._id)}
                    className={`btn ${item.status === "active" ? "btn-warning" : "btn-secondary"}`}>
                    {item.status}
                  </button>


                  <Link to={`/manage_Categories/${item._id}`} className="btn btn-info ms-2">
                    Edit
                  </Link>
                  {/* <Link to={`/edit_course_category/${item.id}`} className="btn btn-info ms-2">Edit</Link> */}
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => deleteCategory(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ====================================  modal delete confirm ===============================================*/}

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

        {/* ========================================================================================= */}
        {/* Pagination Controls */}
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary me-2"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}>
            Previous
          </button>
          <button className="btn btn-success">
            <span className="align-self-center">Page {currentPage}</span>
          </button>
          <button
            className="btn btn-primary ms-2"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= courseCategoriesData.length}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageCourseCategories;
