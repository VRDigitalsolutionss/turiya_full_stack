

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const TableComponent = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);


  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);


  const fetchData = () => {
    axios.get('http://127.0.0.1:7000/api/all_customers').then((response) => {
      console.log("custumer response", response.data.data);
      
      setData(response.data.data);
    }).catch((error) => {
      console.error("Error fetching data: ", error);
    })
  }


  useEffect(() => {
    fetchData();
},[]);


  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const rowsPerPage = 5;

  // Fetch dynamic data (replace with actual API call if needed)
  useEffect(() => {
    const fetchData = async () => {
      const responseData = [
        { id: 1, heading: "Heading 1", subHeading: "Sub Heading 1" },
        { id: 2, heading: "Heading 2", subHeading: "Sub Heading 2" },
        { id: 3, heading: "Heading 3", subHeading: "Sub Heading 3" },
        { id: 4, heading: "Heading 4", subHeading: "Sub Heading 4" },
        { id: 5, heading: "Heading 5", subHeading: "Sub Heading 5" },
        { id: 6, heading: "Heading 6", subHeading: "Sub Heading 6" },
        { id: 7, heading: "Heading 7", subHeading: "Sub Heading 7" },
        { id: 8, heading: "Heading 8", subHeading: "Sub Heading 8" },
      ];
      setData(responseData);
    };

    fetchData();
  }, []);

  // Filter data based on search term
  const filteredData = data.length > 0 && data.filter(
    (item) =>
      item.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subHeading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Determine the current rows to display based on pagination and filtered data
  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = filteredData && filteredData.slice(indexOfFirstUser, indexOfLastUser);

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

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setCurrentPage(1); // Reset to page 1 on each new search
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const [activeStates, setActiveStates] = useState({});

  // Toggle function for specific item based on its ID
  const toggleButton = (id) => {
    setActiveStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };


  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:7000/api/delete_customer/${id}`).then((response) => {
      console.log("custumer deleted successfully", response);
      fetchData();
    }).catch((error) => {
      console.error("Error deleting data: ", error);
    })
  }





  // ==================================================



  address
: 
"456 Elm St, Springfield, USA"
createdAt
: 
"2024-11-28T06:15:50.642Z"
email
: 
"alice.smith2@example.com"
name
: 
"Alice Smith 2"
number
: 
"9876543210"
status
: 
"active"
updatedAt
: 
"2024-11-28T06:15:50.642Z"
__v
: 
0
_id
: 
  "67480a9659501287f561412d"
  
  // =================================================================

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="card p-4 shadow-sm" style={{ border: "none" }}>
          <div className="row bg-light p-3">
            <div className="col-md-6">
              <h4>User Query new</h4>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/add_form" type="button" className="btn btn-success">
                Add New
              </Link>
            </div>
          </div>

          <div
            className="input-group mb-3 mt-3"
            style={{ width: "300px", position: "relative" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={handleSearch}
              value={searchTerm}
              style={{ paddingRight: "30px" }}
            />
            {searchTerm && (
              <button
                className="btn-clear"
                onClick={clearSearch}
                type="button"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                }}>
                ✖
              </button>
            )}
          </div>
          <table className="table table-striped table-bordered shadow-sm">
            <thead>
              <tr>
                <td>Sr.No</td>
                <td>Heading</td>
                <td>Sub Heading</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {currentUsers && currentUsers.map((item, index) => (
                <tr key={item.id}>
                  <td>{indexOfFirstUser + index + 1}.</td>
                  <td>{item.heading}</td>
                  <td>{item.subHeading}</td>
                  <td>
                    <button
                      type="button"
                      className={`btn ${
                        !activeStates[item.id] ? "btn-warning" : "btn-secondary"
                      } me-3`}
                      onClick={() => toggleButton(item.id)}>
                      {!activeStates[item.id] ? "Active" : "Deactive"}
                    </button>
                    <Link to="/edit_form" className="btn btn-info me-3">
                      Edit
                    </Link>
                    <button type="button" className="btn btn-danger" onClick={()=>handleDelete(item._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Buttons */}
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
    </>
  );
};

export default TableComponent;
