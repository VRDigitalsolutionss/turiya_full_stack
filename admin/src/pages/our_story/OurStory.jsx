
// ===========================================================================

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";



const OurStory = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const rowsPerPage = 5;

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const fetchData = async () => {
    axios
      .get(BASE_URL + "/our_stories")
      .then((response) => {
        setData(response.data.data);
        console.log("response of our story",response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Our Story Details", 14, 10);
    doc.autoTable({
      startY: 20,
      head: [["ID", "Heading", "Sub Heading", "Status"]],
      body: data.map((item) => [
        item._id,
        item.about_First_Section_heading,
        item.about_Second_Section_Sub_Peragraph,
        item.status
      ]),
    });
    doc.save("our_story_details.pdf");
  };

  // Function to export data as Excel
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Our Story");

    // Create and save the Excel file
    XLSX.writeFile(workbook, "our_story_details.xlsx");
  };

  const exportCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const csvOutput = XLSX.utils.sheet_to_csv(worksheet);

    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "our_story_details.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyTableData = () => {
    const headers = ["ID", "Heading", "Sub Heading", "Status"];
    const rows = data.map((item) => [
      item._id,
      item.about_First_Section_heading,
      item.about_Second_Section_Sub_Peragraph,
      item.status
    ]);
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



  const [deleteItemId, setDeleteItemId] = useState("");

  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  const handleDeleteConfirm = () => {
    //   setData((prevData) => prevData.filter((item) => item.id !== deleteItemId));
    
    axios.delete(BASE_URL + `/delete_our_story/${deleteItemId}`).then((response) => {
      console.log(response);
      setShowDeleteModal(false); // Close the modal
      setDeleteItemId("");
      fetchData();

    }).catch((error) => {
  console.log(error);
})



 
  };
  return (
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
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary" onClick={copyTableData}>
                Copy
              </button>
              <button type="button" className="btn btn-secondary" onClick={exportExcel}>
                Excel
              </button>
              <button type="button" className="btn btn-secondary" onClick={exportCSV}>
                CSV
              </button>
              <button type="button" className="btn btn-secondary" onClick={exportPDF}>
                PDF
              </button>
            </div>
          </div>
        </div>
        <div className="input-group mb-3 mt-3" style={{ width: "300px", position: "relative" }}>
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
              <tr key={item._id}>
                <td>{indexOfFirstUser + index + 1}.</td>
                <td>{item.about_First_Section_heading}</td>
                <td>{item.about_Second_Section_Sub_Peragraph}</td>
                <td>
                  <Link to={`/edit_our_story/${item._id}`} className="btn btn-info me-3">
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                  onClick={()=>handleDelete(item._id)}
                  >
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
          <span className="btn btn-success current-page">Page {currentPage}</span>
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

export default OurStory;
