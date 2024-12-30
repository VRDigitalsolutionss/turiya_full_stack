// =========================================================================

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import axios from "axios";

const ManageAboutUs = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const rowsPerPage = 5;

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, []);

  const fetchData = async () => {
    axios
      .get("http://127.0.0.1:7000/api/our_stories")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    fetchData();
  }, []);

  console.log("data", data);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Function to toggle the dialog visibility

  // Function to close the dialog

  // Filter data based on search term
  const filteredData =
    data &&
    data.filter(
      (item) =>
        item.about_First_Section_heading
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.about_Second_Section_Sub_Peragraph
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Determine the current rows to display based on pagination and filtered data
  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);

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

    // =============================

    //     if (id) {
    //       axios
    //     .put(
    //       `http://127.0.0.1:7000/api/toggle_gallery/${id}`
    //     )
    //     .then((response) => {
    //       console.log("response toggle", response.data.data);
    //       // setGalleries(response.data.data);
    //       getallGalleries();
    //     })
    //     .catch((err) => {
    //       console.log("Error: toggle", err);
    //     });
    //     } else {
    //       console.log("id not found")
    // }
  };

  const [deleteItemId, setDeleteItemId] = useState("");

  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  const handleDeleteConfirm = () => {
    //   setData((prevData) => prevData.filter((item) => item.id !== deleteItemId));
    
    axios.delete(`http://127.0.0.1:7000/api/delete_our_story/${deleteItemId}`).then((response) => {
      console.log(response);
      
      fetchData();

    }).catch((error) => {
  console.log(error);
})



    setShowDeleteModal(false); // Close the modal
    setDeleteItemId("");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("about Details", 14, 10);
    doc.autoTable({
      startY: 20,
      head: [["Id", "heading", "subHeading"]],
      body: data.map((user) => [user.id, user.heading, user.subHeading]),
    });
    doc.save("about_details.pdf");
  };

  // Function to export data as Excel
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "about_details");

    // Set the sheet headers
    XLSX.utils.sheet_add_aoa(worksheet, [["id", "heading", "subHeading"]], {
      origin: "A1",
    });

    // Create and save the Excel file
    XLSX.writeFile(workbook, "about_details.xlsx");
  };

  const exportCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const csvOutput = XLSX.utils.sheet_to_csv(worksheet);

    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "about_details.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyTableData = () => {
    const headers = ["id", "heading", "subHeading"];
    const rows = data.map((user) => [user.id, user.heading, user.subHeading]);
    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");

    navigator.clipboard
      .writeText(csvContent)
      .then(() => {
        alert("Table data copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="card p-4 shadow-sm" style={{ border: "none" }}>
          <div className="row bg-light p-3">
            <div className="col-md-6">
              <h4>User Query</h4>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/add_form" type="button" className="btn btn-success">
                Add New
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={copyTableData}>
                  Copy
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={exportExcel}>
                  Excel
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={exportCSV}>
                  CSV
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={exportPDF}>
                  PDF
                </button>
              </div>
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
              {currentUsers.map((item, index) => (
                <tr key={item.id}>
                  <td>{indexOfFirstUser + index + 1}.</td>
                  <td>{item.about_First_Section_heading}</td>
                  <td>{item.about_Second_Section_Sub_Peragraph}</td>
                  <td>
                    <button
                      type="button"
                      className={`btn ${
                        !activeStates[item.id] ? "btn-warning" : "btn-secondary"
                      } me-3`}
                      onClick={() => toggleButton(item._id)}>
                      {item.status}
                      {/* {!activeStates[item.id] ? "Active" : "Deactive"} */}
                    </button>
                    {/* <Link to="/edit_form/:id" className="btn btn-info me-3">
                      Edit
                    </Link> */}

                    <Link
                      to={`/edit_form/${item._id}`}
                      className="btn btn-info me-3">
                      Edit
                    </Link>
                    <button
                      type="button"
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

          {/* Pagination */}
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

export default ManageAboutUs;
