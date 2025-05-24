import React, { useEffect, useState } from "react";
import "./comman.scss";
import img1 from "../../assets/images/testinonialimages/img1.webp";
import img2 from "../../assets/images/testinonialimages/img2.webp";
import img3 from "../../assets/images/testinonialimages/img3.webp";
import img4 from "../../assets/images/testinonialimages/img4.webp";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";

import { BASE_URL,BASE_URL_IMAGE } from "../../config";
// Sample feedback data
const feedbackData = [
  {
    id: 1,
    name: "Karin de Bruin",
    location: "Netherlands",
    feedback: "What I really appreciate about this yoga...",
    image: img1,
    isActive: true,
  },
  {
    id: 2,
    name: "Andrea Connor",
    location: "Canada",
    feedback: "I just wanted to be able to teach yoga...",
    image: img2,
    isActive: true,
  },
  {
    id: 3,
    name: "Ewa Ledergerber",
    location: "Deutschland",
    feedback: "Suzana und Manu sind unglaublich. Ich li...",
    image: img3,
    isActive: true,
  },
  {
    id: 4,
    name: "Michael Zamora",
    location: "USA",
    feedback: "Manu taught me perseverance and patience...",
    image: img4,
    isActive: true,
  },
  // Add more as needed
];

const Testimonial = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Set rows per page
  const [feedbackList, setFeedbackList] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // Calculate pagination

  const getShortenedText = (text) => {
    if (text.length > 20) {
      return text.slice(0, 20) + '...';
    }
    return text;
  };




  const getallTestimonials = () => {
    axios
      .get(BASE_URL + "/testimonials")
      .then((response) => {
        // console.log(" testimonial response", response.data.data);

        if (response.status === 200) {
          setFeedbackList(response.data.data);
        } else {
          alert("something went wrong");
        }
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  };

  useEffect(() => {
    getallTestimonials();
  }, []);

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentRows = feedbackList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Toggle active status
  const toggleStatus = (id) => {
    // setFeedbackList((prevList) =>
    //   prevList.map((item) =>
    //     item.id === id ? { ...item, isActive: !item.isActive } : item
    //   )
    // );

    // ===============================================================
    if (id) {
      axios
        .put(BASE_URL + `/toggle_testimonial/${id}`)
        .then((response) => {
          console.log("response toggle testimonial", response.data.data);
          // setGalleries(response.data.data);
          getallTestimonials();
        })
        .catch((err) => {
          console.log("Error: toggle testimonial", err);
        });
    } else {
      console.log("id not found");
    }

    // ==========================================================
  };

  const [deleteItemId, setDeleteItemId] = useState("");

  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  const handleDeleteConfirm = () => {
    // setFeedbackList((prevUsers) =>
    //   prevUsers.filter((user) => user.id !== deleteItemId)
    // ); // Filter out the user with matching id

    deleteTestimonial(deleteItemId);
    setDeleteItemId("");
    setShowDeleteModal(false); // Close the modal
  };

  const deleteTestimonial = (id) => {
    axios
      .delete(BASE_URL + `/delete_testimonial/${id}`)
      .then((response) => {
        console.log("Delete response", response);
        getallTestimonials();
      })
      .catch((error) => {
        console.log("Error deleting data", error);
      });
  };

  
  return (
    <div className="container-fluid mt-2">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="d-flex justify-content-between mb-3 bg-light py-3 px-3">
          <h4>Feedback</h4>
          <Link to="/add_testimoial" className="btn btn-success">
            Add Feedback
          </Link>
        </div>
        <table className="table table-striped border rounded">
          <thead>
            <tr>
              <th>#</th>
              <th>Profile Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows &&currentRows.map((item, index) => (
              <tr key={item._id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>
                  <img
                    src={BASE_URL_IMAGE + `/images/testimonial/`+item.profileImage}
                    alt={item.profileImage}
                    className="rounded-circle"
                    width={50}
                    height={50}
                  />
                </td>
                <td>{item.designation}</td>
                <td>{item.name}</td>
                <td>{getShortenedText(item.feedbackContent)}</td>
                <td>
                  <button
                    // className={`btn ${
                    //   item.isActive ? "btn-warning" : "btn-secondary"
                    //   }`}

                    className={`btn ${
                      item.status === "active" ? "btn-warning" : "btn-secondary"
                    }`}
                    onClick={() => toggleStatus(item._id)}>
                    {item.status}
                  </button>
                  <Link
                    to={`/edit_testimonial/${item._id}`}
                    className="btn btn-info ms-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger ms-2"
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
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-end">
            <div className="pagination mt-3">
              <button
                className="btn btn-secondary me-2"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}>
                Previous
              </button>
              <button type="button" className="btn btn-success">
                Page {currentPage}
              </button>
              <button
                className="btn btn-primary ms-2"
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastItem >= feedbackList && feedbackList.length}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
