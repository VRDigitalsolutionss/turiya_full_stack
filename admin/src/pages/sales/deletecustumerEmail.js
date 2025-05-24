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


// const data = [
//   { id: 1, email: "dcsceducation131@gmail.com", date: "23-10-24" },
//   { id: 2, email: "digitalsevacenter30@gmail.com", date: "21-09-24" },
//   { id: 3, email: "shubhasahni@gmail.com", date: "21-09-24" },
//   { id: 4, email: "vrinfotekmarketing@gmail.com", date: "21-09-24" },
//   { id: 5, email: "shubhamkumar291291@gmail.com", date: "21-09-24" },
//   { id: 6, email: "patriziac@web.de", date: "21-09-24" },
//   { id: 7, email: "turiyayogamanu@gmail.com", date: "21-09-24" },
//   { id: 8, email: "shubhamkumar21029@gmail.com", date: "10-09-24" },
// ];

const CustumerEmail = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState('');



  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);


  const fetchData = () => {
    axios.get(`${BASE_URL}/all_subscriptions`).then((response) => {
      console.log(response.data.data);
      setData(response.data.data)
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);


  const [users, setUsers] = useState(data);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const usersPerPage = 5;
  const totalPages = Math.ceil(data.length / usersPerPage);


  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = data && data.filter(
    (user) =>
      user.email.toLowerCase().includes(search.trim().toLowerCase()) ||
    formatDate(user.createdAt).toLowerCase().includes(search.trim().toLowerCase()) 
     
  );

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

  const [showModal, setShowModal] = useState("");

  const handleViewProfile = (user) => {
    setSelectedUser(user); // Set the selected user to display in the modal
    setShowModal(true);
  };
  console.log("modal");

  // =====================================================
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Function to toggle the dialog visibility
  const handletriggerDialogBox = () => {
    setIsDialogVisible(true); // Show the dialog
  };

  // Function to close the dialog
  const closeDialogBox = () => {
    setShowModal(false);
  };

  const handleDeleteConfirm = () => {

    axios.delete(`${BASE_URL}/delete_subscription/${deleteItemId}`).then((response) => {
      console.log(response)
      setDeleteItemId("");
      setShowDeleteModal(false); // Close the modal
      fetchData();
    }).catch((error) => {
      console.log(error);
    })
  };

  const clearSearch = () => {
    setSearch("");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Customer Details", 14, 10);
    doc.autoTable({
      startY: 20,
      head: [["Id", "Date", "Email"]],
      body: users.map((user) => [user._id, formatDate(user.createdAt), user.email]),
    });
    doc.save("customer_details.pdf");
  };

  // Function to export data as Excel
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Customers");

    // Set the sheet headers
    XLSX.utils.sheet_add_aoa(worksheet, [["Date", "Email"]], { origin: "A1" });

    // Create and save the Excel file
    XLSX.writeFile(workbook, "customer_details.xlsx");
  };

  const exportCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(users);
    const csvOutput = XLSX.utils.sheet_to_csv(worksheet);

    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "customer_details.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyTableData = () => {
    const headers = ["Date", "Email"];
    const rows = users.map((user) => [user.date, user.email]);
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

console.log("current user",currentUsers)

function formatDate(dateString) {
  const date = new Date(dateString); // Parse the date string into a Date object
  
  const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero if necessary
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (note: getMonth() returns 0-indexed months, so we add 1)
  const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of the year
  
  return `${day}-${month}-${year}`; // Return the formatted string
}

// Example usage
const formattedDate = formatDate("2024-11-28T08:29:30.041Z");
console.log(formattedDate); // Output: 28-11-24
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
            <div className="btn-group" role="group" aria-label="Basic example">
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
            value={search}
            style={{ paddingRight: "30px" }} // Add padding to make space for the icon
          />
          {search && (
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
            {currentUsers && currentUsers.map((user, index) => (
              <tr key={index}>
                <td>{indexOfFirstUser + index + 1}</td>
                {/* <td>{user.created}</td> */}

                <td>{
formatDate(user.createdAt)

}</td>
<td>{handleDownloadDetial
user.email

}</td>
                <td>handleDownloadDetial
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
              </tr>
            ))}
          </tbody>
        </table>
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

      {/* <div class="modal fade" id="details_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Customer Details</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="modalBody">
           
                    <div id="specificContent"></div>
                </div>
            </div>
        </div>
    </div> */}
      {/* Modal */}


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
    </div>
  );
};

export default CustumerEmail;
