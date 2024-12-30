import React, { useEffect, useState } from "react";
import "./custumer.scss";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from "../../config";

const CustumerEmail = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [deleteItemId, setDeleteItemId] = useState("");
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}-${month}-${year}`;
  };
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  const fetchData = () => {
    axios.get(BASE_URL + '/all_subscriptions').then((response) => {
      setData(response.data.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const filteredUsers = data.filter(user =>
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    formatDate(user.createdAt).toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

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


  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };



  // Export to PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Sr.No.', 'Date', 'Email']],
      body: currentUsers.map((user, index) => [
        indexOfFirstUser + index + 1,
        formatDate(user.createdAt),
        user.email
      ])
    });
    doc.save('customers.pdf');
  };

  // Export to Excel
  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      currentUsers.map((user, index) => ({
        SrNo: indexOfFirstUser + index + 1,
        Date: formatDate(user.createdAt),
        Email: user.email
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Customers");
    XLSX.writeFile(wb, "customers.xlsx");
  };

  // Export to CSV
  const exportCSV = () => {
    const ws = XLSX.utils.json_to_sheet(
      currentUsers.map((user, index) => ({
        SrNo: indexOfFirstUser + index + 1,
        Date: formatDate(user.createdAt),
        Email: user.email
      }))
    );
    const csv = XLSX.utils.sheet_to_csv(ws);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "customers.csv";
    link.click();
  };

  // Copy Table Data
  const copyTableData = () => {
    const csvContent = currentUsers.map((user, index) => [
      indexOfFirstUser + index + 1,
      formatDate(user.createdAt),
      user.email
    ]);
    const headers = ["Sr.No.", "Date", "Email"];
    const csvString = [headers, ...csvContent].map(row => row.join(",")).join("\n");

    navigator.clipboard.writeText(csvString).then(() => {
      alert("Table data copied to clipboard");
    }).catch((err) => {
      console.error("Could not copy text: ", err);
    });
  };


  const handleDownloadDetial = (user) => {
    console.log("Downloading detail...");

    const doc = new jsPDF();

    // Add a title
    doc.setFontSize(16);
    doc.text("Customer Details", 10, 10);

    // Add user details
    doc.setFontSize(12);
    doc.text(`Email: ${user.email}`, 10, 20);
    doc.text(`Registration Date: ${user.createdAt}`, 10, 30);
    // doc.text(`Registration Date: ${formatDate(user.createdAt)}`, 10, 30);




    // Save the PDF
    doc.save(`${user.email}_details.pdf`);
  };


  const handleDeleteConfirm = () => {

    axios.delete(BASE_URL + `/delete_subscription/${deleteItemId}`).then((response) => {
      console.log(response)
      setDeleteItemId("");
      setShowDeleteModal(false); // Close the modal
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
            <h4>Use Query</h4>
          </div>
          <div className="col-md-6 text-end"></div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="btn-group" role="group">
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
            value={search}
            name="search"
            style={{ paddingRight: "30px" }} // Add padding to make space for the icon
          />
          {search && (
            <button
              className="btn-clear"
              onClick={() => setSearch("")}
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

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Date</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{indexOfFirstUser + index + 1}</td>
                <td>{formatDate(user.createdAt)}</td>
                <td>{user.email}</td>
                <td>
                <td>
                  <button
                    className="btn btn-success btn-sm me-3"
                    onClick={() => handleDownloadDetial(user)}>
                    Download Detail
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user._id)}>
                    Delete
                  </button>
                </td>
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
        <div className="pagination d-flex justify-content-end">
          <button onClick={handlePrevPage} className="btn btn-secondary page-item me-2" disabled={currentPage === 1}>Prev</button>
          <span className="btn btn-success current-page">Page {currentPage}</span>
          <button onClick={handleNextPage} className="btn btn-primary page-item ms-2" disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CustumerEmail;
