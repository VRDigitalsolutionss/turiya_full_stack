import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/blog/img1.webp';
import img2 from '../../assets/images/blog/img2.webp';
import img3 from '../../assets/images/blog/img3.webp';
import img4 from '../../assets/images/blog/img4.webp';
import img5 from '../../assets/images/blog/img5.webp';
import img6 from '../../assets/images/blog/img6.webp';
import img7 from '../../assets/images/blog/img7.webp';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from 'axios'
import { BASE_URL, BASE_URL_IMAGE } from '../../config';

// Sample blog data
const initialBlogData = [
  { id: 1, blogHeading: 'Vorteile eines 500-Stunden-Programms für fortgeschrittene Yoga-Ausbildung', blogImage: img1, date: '2024-11-11', isActive: true },
  { id: 2, blogHeading: 'Die wichtigsten Vorteile einer 200-Stunden-Yogalehrerausbildung', blogImage: img2, date: '2024-11-09', isActive: true },
  { id: 3, blogHeading: 'Was sind die Vorteile von Yoga?', blogImage: img3, date: '2024-11-05', isActive: true },
  { id: 4, blogHeading: 'Yoga Akademie Berlin: Yoga Lehrer Ausbildung & Zertifizierung', blogImage: img4, date: '2024-10-30', isActive: true },
  { id: 5, blogHeading: 'Wie man ein erfolgreicher Yoga-Coach wird – Ein Schritt-für-Schritt-Leitfaden von Turiya Yoga', blogImage: img5, date: '2024-10-25', isActive: true },
  { id: 6, blogHeading: 'Turiya Yoga erklärt, wie wichtig Yoga für Kinder ist', blogImage: img6, date: '2024-10-22', isActive: true },
  { id: 7, blogHeading: 'Turiya Yoga – Der beste Ort für Yogalehrer-Ausbildungsprogramme', blogImage: img7, date: '2024-10-19', isActive: true },
  // Add more blogs as needed
];

const BlogTable = () => {
  const [blogs, setBlogs] = useState(initialBlogData);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const getallBlogs = () => {
    axios
    .get(
      BASE_URL + "/blogs"
    )
    .then((response) => {
      console.log("response of blogs", response.data.data);
      setBlogs(response.data.data);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
  }

  useEffect(() => {


    getallBlogs();
  }, []);

  function formatCreatedAt(createdAt) {
    // Convert to Date object
    const date = new Date(createdAt);
  
    // Format the date as 'YYYY-MM-DD'
    return date.toISOString().split('T')[0];
  }
  
  // Example usage
  const createdAt = "2024-11-20T11:34:30.472Z";
  const formattedDate = formatCreatedAt(createdAt);
  console.log(formattedDate); // Output: "2024-11-20"
  

  const rowsPerPage = 8;

  // Calculate indices for pagination
  const indexOfLastBlog = currentPage * rowsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - rowsPerPage;
  const currentBlogs = blogs && blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Toggle active status
  const toggleStatus = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id ? { ...blog, isActive: !blog.isActive } : blog
      )
    );



    // ==================================================================================



    if (id) {
      axios
    .put(
       BASE_URL + `/toggle_blog/${id}`
    )
    .then((response) => {
      console.log("response toggle", response.data.data);
      // setGalleries(response.data.data);
      getallBlogs();
    })
    .catch((err) => {
      console.log("Error: toggle", err);
    });
    } else {
      console.log("id not found")
}

    // =======================================================================================================
  };

  // Pagination control functions
  const handleNextPage = () => {
    if (currentPage < Math.ceil(blogs.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [deleteItemId, setDeleteItemId] = useState("");

  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  
  const handleDeleteConfirm = () => {
    deleteBlog(deleteItemId);
    // setBlogs((prevUsers) => prevUsers.filter((user) => user.id !== deleteItemId)); // Filter out the user with matching id
    setDeleteItemId("");
    setShowDeleteModal(false); // Close the modal
  };


  const deleteBlog = (id) => {
    axios
    .delete(
      BASE_URL +  `/delete_blog/${id}`,
    )
    .then((response) => {
      console.log("delete response", response);
      
      getallBlogs();
    })
    .catch((err) => {
      console.log("Error:", err);
    });
  }

  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{border:'none'}}>
        <div className="d-flex justify-content-between mb-3 bg-light p-3">
          <h4>Blogs</h4>
          <Link to="/add_blog" className="btn btn-success">Add Blogs</Link>
        </div>
        <table className="table table-striped border rounded">
          <thead>
            <tr>
              <th>#</th>
              <th>Blog Heading</th>
              <th>Blog Images</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentBlogs && currentBlogs.map((blog, index) => (
              <tr key={blog.id}>
                <td>{indexOfFirstBlog + index + 1}</td>
                <td>{blog.blogHeading}</td>
                <td>
                  <img src={`${BASE_URL_IMAGE}/images/blogs/`+ blog.blogImage} alt={blog.blogImage} width="50" height="50" />
                </td>
                <td>{blog.createdAt?formatCreatedAt(blog.createdAt):null  }</td>
                <td>
                  <button
                      className={`btn ${blog.status === "active" ? "btn-warning" : "btn-secondary"}`}
                  
                    onClick={() => toggleStatus(blog._id)}
                  >
                    {blog.status}
                  </button>
                  <Link to={`/edit_blog/${blog._id}`} className="btn btn-info ms-2">Edit</Link>
                  <button className="btn btn-danger ms-2" onClick={()=>handleDelete(blog._id)}>Delete</button>
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
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary me-2"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
         <button type="button" className='btn btn-success'><span className="align-self-center">Page {currentPage}</span></button> 
          <button
            className="btn btn-primary ms-2"
            onClick={handleNextPage}
            disabled={currentPage >= Math.ceil(blogs && blogs.length / rowsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
