import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./comman.scss";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";



const AddModule = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [modules, setModules] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const fetchData = () => {
    axios
      .get(BASE_URL + "/modules")
      .then((response) => {
        console.log(response.data.data);
        setModules(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rowsPerPage = 10;

  // Pagination calculation
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentRows = modules.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(modules.length / rowsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Action handlers
  const handleAddRooms = (id) => {
    console.log("Add Rooms clicked for id:", id);
    // Implement your logic here
  };

  const handleMealOffer = (id) => {
    console.log("Meal Offer clicked for id:", id);
    // Implement your logic here
  };

  const handleToggleActive = (id) => {
    // setModules(
    //   modules.map((module) =>
    //     module.id === id ? { ...module, active: !module.active } : module
    //   )
    // );
    // ======================================================================================

    if (id) {
      axios
        .get(BASE_URL + `/toggleModuleStatus/${id}`)
        .then((response) => {
          console.log("response toggle", response.data.data);
          // setGalleries(response.data.data);
          fetchData();
        })
        .catch((err) => {
          console.log("Error: toggle", err);
        });
    } else {
      console.log("id not found");
    }
  };

  const handleEdit = (id) => {
    console.log("Edit clicked for id:", id);
    // Redirect to edit page or open edit modal
  };

  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  const [deleteItemId, setDeleteItemId] = useState("");
  // Delete category
  const deleteCategory = (id) => {
    // alert("Delete category")
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  const handleDeleteConfirm = () => {
    // setModules(modules.filter((module) => module.id !== deleteItemId));
    // setGalleries(galleries.filter((item) => item.id !== deleteItemId));
    // setBlogs((prevUsers) => prevUsers.filter((user) => user.id !== deleteItemId)); // Filter out the user with matching id

    // delete_module
    if (deleteItemId) {
      axios
        .delete(BASE_URL + `/delete_module/${deleteItemId}`)
        .then((response) => {
          console.log("delete response", response);
          if (response.status == 200) {
            setShowDeleteModal(false); // Close the modal
            setDeleteItemId("");
            fetchData();
          } else {
            alert("something went wrong");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
          setShowDeleteModal(false); // Close the modal
          setDeleteItemId("");
        });
    } else {
      alert("id not found");
    }
  };

  return (
    <div className="container-fluid mt-2">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="d-flex justify-content-between mb-3 bg-light py-3 px-3">
          <h4>Modules</h4>
          <Link to="/manage_addmodule" className="btn btn-success">
            Add New Module 
          </Link>
        </div>
        <table className="table table-striped border rounded">
          <thead>
            <tr>
              <th>#</th>
              <th>Ausbildung</th>
              <th>Location</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows &&
              currentRows.map((item, index) => (
                <tr key={item.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{item.Ausbildung}</td>
                  <td>{item.Location}</td>
                  <td>{item.price}</td>
                  {/* add_room */}
                  <td>
                  <Link to={`/add_room/${item._id}`} className="btn btn-primary me-1">
  Add Rooms
</Link>
                    {/* <button className="btn btn-primary me-1" onClick={() => handleAddRooms(item.id)}>Add Rooms</button> */}
                    <Link  to={`/mealOffer/${item._id}`} className="btn btn-info me-1">
                      Meal Offer
                    </Link>
                    {/* <button className="btn btn-info me-1" onClick={() => handleMealOffer(item.id)}>Meal Offer</button> */}
                    <button
                       className={`btn ${item.status === "active" ? "btn-warning" : "btn-secondary"}`}
                      onClick={() => handleToggleActive(item._id)}>
                     {item.status}
                    </button>

                    
                  
                    


                    <Link
                      to={`/manage_addmodule/${item._id}`}
                      className="btn btn-success ms-2 me-2">
                      Edit
                    </Link>
                    {/* <Link to="/manage_addmodule" className="btn btn-success me-1" onClick={() => handleEdit(item.id)}>Edit</Link> */}
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

        {/* Pagination Controls */}
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

export default AddModule;
