import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";
const Query = () => {
  // Initial data

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState('');



  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);


  const fetchData = () => {
    axios.get(BASE_URL + `/user_query`).then((response) => {
      console.log("response of user query", response);

setData(response.data.data)

      }).catch((error) => {
      console.log(error)
    })
  }


  useEffect(() => {
    fetchData();
},[]);


  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  // Calculate pagination
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const [deleteId, setDeleteItemId] = useState("");

  // Handle delete functionality
  const handleDelete = (id) => {
    setDeleteItemId(id);
    setShowDeleteModal(true);
  };

  // Handle pagination
  const goToPage = (page) => {
    setCurrentPage(page);
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

//   const handleDeleteConfirm = () => {
//     // setData(data.filter((item) => item.id !== deleteId));
 
// console.log("id",deleteId)
//     if (deleteId) {
//       axios.delete(`http://127.0.0.1:7000/api/delete_user_query/${deleteId}`).then((response) => {
//         console.log(response);
//         setShowDeleteModal(false);
//         setDeleteItemId("");
//         fetchData();
//       }).catch((error) => {
//     console.log(error);
//   })
// }

//   };


  // ============================================================================


  const handleDeleteConfirm = () => {
   
  
    console.log("Deleting item with id:", deleteId);
  
    // Make the API call to delete the item from the backend
    axios.delete(BASE_URL +  `/delete_query/${deleteId}`)
      .then((response) => {
        console.log("Delete response:", response);
  
        // Update local state to remove the deleted item
       
  
        // Reset modal and ID state
        setShowDeleteModal(false);
        setDeleteItemId("");
  
        // Re-fetch data or do other necessary actions after deletion
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };


  const api_base_url = process.env.BASE_URL;

  console.log("api base url NEW: " + BASE_URL);



  // =======================================================================================
  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="d-flex justify-content-between mb-3 bg-light py-3 px-3">
          <h4> User Query new</h4>
        </div>

        <table
          className="table table-striped "
          style={{ border: "1px solid rgb(221, 214, 214)" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData && currentData.map((item, index) => (
              <tr key={item.id}>
                <td>{startIndex + index + 1}</td>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
             
                <td>{item.message}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}

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
                  <h4 className="modal_header">Confirm Delete</h4>
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
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}>
                  Cancel
                </button>
                <button
                  className="btn btn-danger ms-3"
                  onClick={handleDeleteConfirm}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
        {/* ========================================= new pagination =============================== */}

        <div className="pagination d-flex justify-content-end mt-3">
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

export default Query;
