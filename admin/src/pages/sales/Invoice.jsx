import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import "./custumer.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";
import { IoCloseSharp } from "react-icons/io5";

function Invoice() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false); // Initially modal is hidden
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    amount: "",
    remark: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);

    axios.post(BASE_URL+ `/add_transactionDetail`,formData).then((response) => {
      console.log("response:", response);
      if(response.
        status == 201
      ) {
        fetchTransactionDetail();
        }
    }).catch((error) => {
      console.log(error);
    })
 
  };

  const [transaction, setTransaction] = useState('');
 const fetchTransactionDetail = () => {
  axios.get(BASE_URL+ `/get_transactionDetail`).then((response) => {
    console.log("response:", response.data);
    setTransaction(response.data)

  }).catch((error) => {
    console.log(error);
  })
  }

  console.log("transaction",transaction)


  useEffect(() => {
    fetchTransactionDetail();
  }, []);

  const fetchData = () => {
    axios
      .get(BASE_URL + "/get_purchasedModule")
      .then((response) => {
        setData(response.data.data);
        console.log("all invoice data", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 === 0 ? 12 : hours % 12;
    const formattedTime = `${hours12}:${minutes}:${seconds} ${period}`;
    return `${year}-${month}-${day} ${formattedTime}`;
  };

  const filteredData = search.trim()
    ? data &&
      data.filter(
        (item) =>
          item._id === search.trim() || item.amount_due === search.trim()
      )
    : data;

  const totalPages = Math.ceil(
    filteredData && filteredData.length / itemsPerPage
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const clearSearch = () => {
    setSearch("");
    setCurrentPage(1); // Reset to first page on clear search
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 1. Export to PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [
        [
          "Order ID",
          "Product Details",
          "Customer Details",
          "Amount Due",
          "Status",
        ],
      ],
      body: currentItems.map((item) => [
        item._id,
        item.product_details,
        item.customer_details,
        item.amount_due,
        item.status,
      ]),
    });
    doc.save("invoice_data.pdf");
  };

  // 2. Export to Excel
  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      currentItems.map((item) => ({
        "Order ID": item._id,
        "Product Details": item.product_details,
        "Customer Details": item.customer_details,
        "Amount Due": item.amount_due,
        Status: item.status,
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Invoices");
    XLSX.writeFile(wb, "invoice_data.xlsx");
  };

  // 3. Export to CSV
  const exportCSV = () => {
    const ws = XLSX.utils.json_to_sheet(
      currentItems.map((item) => ({
        "Order ID": item._id,
        "Product Details": item.product_details,
        "Customer Details": item.customer_details,
        "Amount Due": item.amount_due,
        Status: item.status,
      }))
    );
    const csv = XLSX.utils.sheet_to_csv(ws);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "invoice_data.csv";
    link.click();
  };

  // 4. Copy Table Data to Clipboard
  const copyTableData = () => {
    const csvContent =
      currentItems &&
      currentItems.map((item) => [
        item._id,
        item.product_details,
        item.customer_details,
        item.amount_due,
        item.status,
      ]);
    const headers = [
      "Order ID",
      "Product Details",
      "Customer Details",
      "Amount Due",
      "Status",
    ];
    const csvString = [headers, ...csvContent]
      .map((row) => row.join(","))
      .join("\n");

    navigator.clipboard
      .writeText(csvString)
      .then(() => {
        alert("Table data copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  const handleDeleteInvoice = (id) => {
    axios
      .delete(BASE_URL + `/delete_invoice/${id}`)
      .then((response) => {
        console.log(response);
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function formatRegistrationDate(inputDate) {
    // Create a new Date object from the input string
    const date = new Date(inputDate);

    // Extract the day, month, and year
    const day = String(date.getDate()).padStart(2, "0"); // Ensure 2 digits
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month, add 1 (0-indexed)
    const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of the year

    // Return the formatted date
    return `${day}-${month}-${year}`;
  }

  const handleDownloadDetial = (row) => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Invoice Details", 20, 20);

    // Use autoTable to add invoice details in a table format
    doc.autoTable({
      startY: 30,
      head: [["Key", "Value"]],
      body: [
        ["Order ID", row._id],
        ["Product Details", row.product_details],
        ["Customer Details", row.customer_details],
        ["Customer Email", row.email],
        ["Amount Due", `${row.amount_due} €`],
        ["Status", row.status],
        ["Invoice Created At", formatDate(row.createdAt)],
      ],
    });

    // Save the PDF
    doc.save(`invoice_detail_${row._id}.pdf`);
  };

  const [due, setDue] = useState('');

  const handlePaid = (due_amount) => {

    alert("row",due_amount)
    setDue(due_amount || 0)
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

 
  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="row bg-light p-3">
          <div className="col-md-6">
            <h4>User Query</h4>
          </div>
        </div>
        <div className="my-3">
          <div className="btn-group" role="group" aria-label="Export options">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={copyTableData}>
              Copy
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
              onClick={exportExcel}>
              Excel
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={exportPDF}>
              PDF
            </button>
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
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order Details</th>
              <th>Product Details</th>
              <th>Customer Details</th>
              <th>Amount Due</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="text-center">
                    <span style={{ fontSize: "12px" }}>{row._id} </span>
                    <br />
                    <span className="text-danger" style={{ fontSize: "12px" }}>
                      Private Invoice
                    </span>
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      {formatDate(row.createdAt)}
                    </span>
                  </td>
                  <td className="text-center">
                    <span style={{ fontSize: "12px" }}>
                      {row.courseData.Ausbildung}
                    </span>
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      {row.courseData.Location}
                    </span>
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      {formatRegistrationDate(row.courseData.createdAt)}
                    </span>
                  </td>
                  <td className="text-center">
                    <span style={{ fontSize: "12px" }}>
                      {row.userDetails.First_name}
                    </span>
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      {row.userDetails.email}
                    </span>
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      {row.userDetails.phone}
                    </span>
                    <br />
                  </td>
                  <td className="text-center">
                    <span className="text-danger" style={{ fontSize: "12px" }}>
                      Overdue By 0 Days
                    </span>
                    <br />
                    {row.amount_due} €<br />
                    <button
                      type="button"
                      onClick={()=>handlePaid(row.amount_due)}
                      className="btn btn-outline-danger btn-sm mt-2">
                      paid
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-success btn-sm me-3"
                      onClick={() => handleDownloadDetial(row)}>
                      Download Detail
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm me-3"
                      // onClick={() => handleUpdateStatus(row)}
                    >
                      Cancel Amount
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteInvoice(row._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination d-flex justify-content-end mt-3">
          <button
            className="btn btn-secondary me-2"
            onClick={handlePrevPage}
            disabled={currentPage === 1}>
            Prev
          </button>
          <span className="btn btn-success">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-primary ms-2"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}>
            Next
          </button>
        </div>

        {/* ================================================== */}
        {showModal && (
          <div className="login-container">
            <div
              className="custom-modal-overlay"
              onClick={() => setShowModal(false)} // Close on backdrop click
            >
              <div
                className="custom-modal-content"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              >
                <div className="div d-flex justify-content-end">
                  <IoCloseSharp
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      cursor: "pointer",
                      marginBottom: "20px",
                    }}
                    onClick={handleClose}
                  />
                </div>
                {/* ========================================== */}
                <div>
                  <div className="modal-body pt-4" id="AmountmodalBody">
                    <table className="table table-bordered text-center table-striped">
                      <thead>
                        <tr>
                          <th>Transaction</th>
                          <th>Amount</th>
                          <th>Remark</th>
                          <th>Status</th>
                        </tr>
                      </thead>{" "}
                      <tbody id="table_data">
                        {
                          transaction && transaction.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{item.createdAt}</td>
                                <td>{item.amount}</td>
                                <td>{item.remark}</td>
                                <td>
                                  <button
                                    className={`btn btn-warning btn-sm ${
                                     !item.status
                                       ? "disabled"
                                        : ""
                                    }`}
                                  >
                                    {item.status? "Full Paid" : "Partially Paid"}
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        }
                        <tr>
                          <th >2025-01-01 10:14:06</th>
                          <td className="border">300 €</td>
                          <td>piad</td>
                          <td>
                            <button
                              
                            
                              className="btn btn-warning btn-sm">
                              Full Paid
                            </button>
                          </td>
                        </tr>
                      </tbody>{" "}
                      <tbody id="table_data" >
                        <tr>
                          <th >2025-01-01 17:09:36</th>
                          <td className="border">2 €</td>
                          <td>test</td>
                          <td>
                          <button
                              
                            
                              className="btn btn-warning btn-sm">
                              Full Paid
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h6 className="mt-3 mb-3">
                      Total Amount: 2799.00 € &nbsp;&nbsp;|&nbsp; Total Paid
                      Amount: 302 € &nbsp;&nbsp;|&nbsp; Rest Amount: 2497 €{" "}
                    </h6>
                  </div>
                  <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  Paid Amount*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  name="amount"
                  placeholder="Enter amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="remark" className="form-label">
                  Remarks? *
                </label>
                <textarea
                  className="form-control"
                  id="remark"
                  name="remark"
                  rows={3}
                  value={formData.remark}
                  onChange={handleInputChange}
                />
              </div>
            </div>
      
           
        
          
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary me-3"
                      data-bs-dismiss="modal"
                      
                      onClick={handleClose}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      id="save_amount"
                      onClick={handleSubmit}
                      name="save_amount"
                      className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Custom Modal */}
            {/* {showModal && (

)} */}

            {/* Inline styles for custom modal */}
            <style jsx>{`
              .custom-modal-overlay {
                position: fixed;
                top: 50px;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(
                  0,
                  0,
                  0,
                  0.2
                ); /* Semi-transparent backdrop */
                display: flex;
                justify-content: center;
                align-items: top;
                z-index: 1000;
              }

              .custom-modal-content {
                background-color: white;
                padding: 44px 74px;
                padding-top: 20px;
                border-radius: 8px;
                width: 100%;
                max-width: 900px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                position: relative;
                height: fit-content;
                top: 30px;
              }

              .custom-modal-close {
                position: absolute;
                top: 10px;
                right: 10px;
                background: none;
                border: none;
                font-size: 30px;
                color: #333;
                cursor: pointer;
              }

              .custom-modal-close:hover {
                color: #e74c3c;
              }

              .custom-modal-input {
                margin-bottom: 15px;
              }

              .custom-modal-input input {
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
              }

              .custom-modal-btn {
                width: 100%;
                padding: 10px;
                background-color: #3498db;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }

              .custom-modal-btn:hover {
                background-color: #2980b9;
              }

              .text-danger {
                color: red;
                font-size: 12px;
              }
            `}</style>
          </div>
        )}

        {/* ============================================================= */}
      </div>
    </div>
  );
}

export default Invoice;
