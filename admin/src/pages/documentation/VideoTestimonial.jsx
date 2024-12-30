import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

const videoData = [
  {
    id: 1,
    videoLink: "https://www.youtube.com/embed/sample1",
    content: "Turiya Yoga Testimonial about Manu Akash...",
    isActive: true,
  },
  {
    id: 2,
    videoLink: "https://www.youtube.com/embed/sample2",
    content: "Turiya Yoga Testimonial about Suzana...",
    isActive: false,
  },
  // Add more dummy data as needed
];

const VideoTestimonial = () => {
  const [data, setData] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  const { id } = useParams();

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const getallVideoTestimonials = () => {
    axios
      .get(BASE_URL + "/video_testimonials")
      .then((response) => {
        console.log("video testimonials response", response.data.data);

        if (response.status === 200) {
          setData(response.data.data);
        } else {
          alert("something went wrong");
        }
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  };


  useEffect(() => {
    getallVideoTestimonials();
  }, []);

  const totalPages = Math.ceil(data.length / rowsPerPage);



  // =============================================================================================================================================

  const toggleActive = (id) => {
    // setData((prevData) =>
    //   prevData.map((item) =>
    //     item.id === id ? { ...item, isActive: !item.isActive } : item
    //   )
    // );

    // ============================================================================================================================================================

    if (id) {
      axios
        .put(BASE_URL + `/toggle_video_testimonial/${id}`)
        .then((response) => {
          console.log("response toggle testimonial", response.data.data);
          // setGalleries(response.data.data);
          getallVideoTestimonials();
        })
        .catch((err) => {
          console.log("Error: toggle testimonial", err);
        });
    } else {
      console.log("id not found");
    }
  };


  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentRows = data && data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [deleteItemId, setDeleteItemId] = useState("");



  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };


  const handleDeleteConfirm = () => {
    // setData(data.filter((item) => item.id !== deleteItemId));
    // setBlogs((prevUsers) => prevUsers.filter((user) => user.id !== deleteItemId)); // Filter out the user with matching id
    setDeleteItemId("");
    setShowDeleteModal(false); // Close the modal
    console.log("delete id: ", deleteItemId);

    if (deleteItemId) {
      axios
        .delete(
          BASE_URL + `/delete_video_testimonial/${deleteItemId}`
        )
        .then((response) => {
          alert("Success");
          console.log("Delete response", response);
          getallVideoTestimonials();
        })
        .catch((error) => {
          console.log("Error deleting data", error);
        });
    } else {
      alert("No item to delete");
    }
  };


  return (
    <div className="container-fluid mt-2">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="d-flex justify-content-between mb-3 bg-light py-3 px-3">
          <h4>Video Testimonial</h4>
          <Link to="/manageVideoTestimonial" className="btn btn-success">
            Add Video Testimonial
          </Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Youtube video link</th>
              <th>Content</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows &&currentRows.map((item, index) => (
              <tr key={item.id}>
                <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
                <td>
     
                  

                  {/* <iframe
  width="200"
  height="150"
  src={item.youtubeLink} // Changed from item.youtubeLink to item.videoLink
  title="YouTube video"
  frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    
style={{overflow: "hidden"}}

  allowFullScreen>
</iframe> */}

<iframe
  width="200"
  height="150"
  src={item.youtubeLink} // Changed from item.youtubeLink to item.videoLink
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ overflow: "hidden", border: "none", width: "200px", height: "150px" }}
></iframe>
                </td>
                <td>{item.feedbackContent}</td>
                <td>
                  <button
                    className={`btn me-3 ${
                      item.status === "active" ? "btn-warning" : "btn-secondary"
                    }`}
                    onClick={() => toggleActive(item._id)}>
                    {item.status}
                  </button>
                  <Link
                    to={`/edit_video_testimonial/${item._id}`}
                    className="btn btn-info me-2">
                    Edit
                  </Link>

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
        {/* ===================================================================== */}

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

        {/* ================================================================================================= */}
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
                disabled={indexOfLastItem >= data && data.length}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;
