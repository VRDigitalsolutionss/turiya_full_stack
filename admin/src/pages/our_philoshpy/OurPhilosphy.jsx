

// ==================================================================================


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";
const OurPhilosphy = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const rowsPerPage = 5;

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Fetch data from API
  const fetchData = async () => {
    axios
      .get(BASE_URL + "/our_philosophy")
      .then((response) => {
        console.log("response of our philosphy",response.data.data);
        setData(response.data.data);
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

  // Pagination
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

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [deleteItemId, setDeleteItemId] = useState("");

  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };


  const toggleActive = (id) => {
    // setCourses((prevCourses) =>
    //   prevCourses.map((course) =>
    //     course.id === id ? { ...course, isActive: !course.isActive } : course
    //   )
    // );

    if (id) {
      axios
    .put(
      BASE_URL + `/toggle_status_philosophy/${id}`
    )
    .then((response) => {
      console.log("response toggle", response.data.data);
      // setGalleries(response.data.data);
      fetchData();
    })
    .catch((err) => {
      console.log("Error: toggle", err);
    });
    } else {
      console.log("id not found")
}


  };


  const handleDeleteConfirm = () => {
    axios
      .delete( BASE_URL +  `/delete_our_philosophy/${deleteItemId}`)
      .then((response) => {
        console.log(response);
        fetchData(); // Re-fetch data after deletion
      })
      .catch((error) => {
        console.log(error);
      });
    setShowDeleteModal(false);
    setDeleteItemId("");
  };

  // Export functions
  const copyTableData = () => {
    if (data.length === 0) {
      alert("No data available to copy.");
      return;
    }
    const headers = ["id", "heading", "subHeading"];
    const rows = data.map((user) => [user._id, user.about_First_Section_heading
      , user.about_Second_Section_Sub_Peragraph
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

  const exportExcel = () => {
    if (data.length === 0) {
      alert("No data available to export.");
      return;
    }

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
    if (data.length === 0) {
      alert("No data available to export.");
      return;
    }

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

  const exportPDF = () => {
    if (data.length === 0) {
      alert("No data available to export.");
      return;
    }

    const doc = new jsPDF();
    doc.text("about Details", 14, 10);
    doc.autoTable({
      startY: 20,
      head: [["Id", "Heading", "Sub Heading"]],
      body: data.map((user) => [user._id, user.about_First_Section_heading
        , user.about_Second_Section_Sub_Peragraph]),
    });
    doc.save("about_details.pdf");
  };

  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="row bg-light p-3">
          <div className="col-md-6">
            <h4>User Query</h4>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/manage_our_philosphy" type="button" className="btn btn-success">
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
              }}
            >
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
                <td>{item.about_First_Section_Sub_Peragraph}</td>
                <td>
                <button
                    onClick={() => toggleActive(item._id)}
                    className={`btn ${item.status === "active" ? "btn-warning" : "btn-secondary"}`}>
                   {item.status}
                  </button>
                  <button
                    type="button"
                    className="btn btn-info me-3 ms-3"
                    onClick={() => navigate(`/edit_our_philosphy/${item._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(item._id)}
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

        <div className="row">
          {/* <div className="col-md-6">
            <p>
              Showing {indexOfFirstUser + 1} to {indexOfLastUser} of {filteredData.length} entries
            </p>
          </div> */}
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
    </div>
  );
};

export default OurPhilosphy;

