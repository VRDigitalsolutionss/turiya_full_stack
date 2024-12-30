
import React, { useEffect, useState } from "react";
import "./comman.scss";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/gallery-images/img1.webp";
import img2 from "../../assets/images/gallery-images/img2.webp";
import img3 from "../../assets/images/gallery-images/img3.webp";
import img4 from "../../assets/images/gallery-images/img4.webp";
import img5 from "../../assets/images/gallery-images/img5.webp";
import img6 from "../../assets/images/gallery-images/img6.webp";
import img7 from "../../assets/images/gallery-images/img7.webp";
import img8 from "../../assets/images/gallery-images/img8.webp";
import img9 from "../../assets/images/gallery-images/img9.webp";
import img10 from "../../assets/images/gallery-images/img10.webp";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

// Sample gallery data
const galleryData = [
  { id: 1, name: "Image 1", image: img1 },

  // Add more as needed
];

const GalleryTable = () => {
  const [galleries, setGalleries] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const getallGalleries = () => {
    axios
    .get(
      BASE_URL + "/galleries"
    )
    .then((response) => {
      console.log("response", response.data.data);
      setGalleries(response.data.data);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
  }

  useEffect(() => {


    getallGalleries();
  }, []);


  // Step 1: Set up state to track the active status of each item
  // const filteredData =
  //   data &&
  //   data.filter(
  //     (item) =>
  //       item.about_First_Section_heading
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase()) ||
  //       item.about_Second_Section_Sub_Peragraph
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase())
  //   );
  
  
  const totalPages = Math.ceil(galleries.length / rowsPerPage);
  // Calculate indices for the items to be shown on the current page
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentRows = galleries.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
  // Step 2: Toggle function for specific item based on its ID
  const toggleActiveStatus = (id) => {
   

    if (id) {
      axios
    .put(
      BASE_URL + `/toggle_gallery/${id}`
    )
    .then((response) => {
      console.log("response toggle", response.data.data);
      // setGalleries(response.data.data);
      getallGalleries();
    })
    .catch((err) => {
      console.log("Error: toggle", err);
    });
    } else {
      console.log("id not found")
}




  };

  const [deleteItemId, setDeleteItemId] = useState("");

  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  const handleDeleteConfirm = () => {
    setGalleries(galleries.filter((item) => item.id !== deleteItemId));
    deleteItem(deleteItemId);
    // setBlogs((prevUsers) => prevUsers.filter((user) => user.id !== deleteItemId)); // Filter out the user with matching id
    setDeleteItemId("");
    setShowDeleteModal(false); // Close the modal
  };


  const deleteItem = (id) => {
    axios
      .delete(
        BASE_URL + `/delete_gallery/${id}`,
      )
      .then((response) => {
        console.log("delete response", response);
        
        getallGalleries();
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };



console.log("galleries",galleries)


  return (
    <div className="container-fluid mt-2">
      <div className="card p-4 mt-4 shadow-sm" style={{ border: "none" }}>
        <div className="d-flex justify-content-between mb-3 bg-light py-3 px-3">
          <div className="col-sm-3">
            <h4>Gallery Images</h4>
          </div>
          <div className="col-sm-9 d-flex justify-content-end">
            <Link to="/add_gallery" type="button" className="btn btn-success">
              Add New Gallery
            </Link>
          </div>
        </div>

        <table className="table table-striped border rounded">
          <thead>
            <tr>
              <th>#</th>
              <th>Gallery Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows && currentRows.map((item, index) => (
              <tr key={item._id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>
                  <img
                    src={BASE_URL_IMAGE + `/images/gallery/`+item.file}
                    alt={item.name}
                    width={80}
                    height={80}
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <button
                    
                    
                      className={`btn ${item.status === "active" ? "btn-warning" : "btn-secondary"}`}
                    
                    onClick={() => toggleActiveStatus(item._id)}>
                    {item.status }
                    {/* {activeStates[item.id] ? "Active" : "Inactive"} */}
                  </button>
                  <Link to={`/edit_gallery/${item._id}`} className="btn btn-info ms-2" >
                  {/* <Link to={`/edit_gallery/${item._id}`} className="btn btn-info ms-2" > */}
                    Edit
                  </Link>
                  {/* <Link to={`/edit_gallery?id=${item.id}`} className="btn btn-info ms-2">Edit</Link> */}
                  <button
                    className="btn btn-danger ms-2 delete-btn"
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
 


        <div className="col-md-12 d-flex justify-content-end">
            <button className="btn btn-secondary" onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev
            </button>
            <span className="btn btn-success"  style={{ margin: "0 10px" }}>
              Page {currentPage} of {totalPages}
            </span>
            <button className="btn btn-primary" onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>

      </div>
    </div>
  );
};

export default GalleryTable;
