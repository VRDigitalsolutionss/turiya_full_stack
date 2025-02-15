import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import "./custumer.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";
import { IoCloseSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";

function Invoice() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false); // Initially modal is hidden
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  console.log("all invoice data", showModal)

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

  const [cancelInvoiceFormData, setCancelInvoiceFormData] = useState({
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

  console.log("due amount");

  const handleSubmit = (totalAmount, paidAmount, dueAmount, purchasedModuleId) => {
    console.log("Form Data Submitted:", formData);

    if (dueAmount === 0) {
      alert("You have already paid the total amount. Due Amount is 0");
      return;
    }

    if (Number(formData.amount) > Number(dueAmount)) {
      alert("You can't pay more than the due amount");
      return;
    }

    const payload = {
      amount: formData.amount,
      remark: formData.remark,
      totalAmount: totalAmount,
      totalPaidAmount: paidAmount,
      restAmount: dueAmount,
      purchasedModuleId: purchasedModuleId
    };

    axios
      .post(BASE_URL + `/add_transactionDetail`, payload)
      .then((response) => {
        console.log("response:", response);
        if (response.status == 201) {
          alert("Paid Successfully")
          // fetchData();
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancelInvoiceSubmit = (refundableAmount, purchasedModuleId) => {
    console.log("Form Data Submitted:", cancelInvoiceFormData);

    if (Number(cancelInvoiceFormData.amount) > Number(refundableAmount)) {
      alert("You can't pay more than the refundable amount");
      return;
    }

    const payload = {
      purchasedModuleId: purchasedModuleId,
      amount: cancelInvoiceFormData.amount,
      remark: cancelInvoiceFormData.remark,
    };

    axios
      .post(BASE_URL + `/generateCancelInvoice`, payload)
      .then((response) => {
        console.log("response:", response);
        if (response) {
          alert("Success!")
          window.location.reload()
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [transaction, setTransaction] = useState("");

  const fetchTransactionDetail = (transaction_id) => {
    if (transaction_id) {
      axios
        .get(BASE_URL + `/get_transactionDetail/${transaction_id}`)
        .then((response) => {
          console.log(" transaction detail", response.data);
          setTransaction(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  console.log("transaction", transaction);

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
  const filteredData = (startDate || endDate)
  ? data &&
    data.filter((item) => {
        const itemDate = new Date(item.createdAt);
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Set end date time to 23:59:59
        end.setHours(23, 59, 59, 999);

        console.log("Item Date: ", itemDate);
        console.log("Start Date: ", start);
        console.log("End Date (23:59:59): ", end);

        return itemDate >= start && itemDate <= end;
    })
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
      .delete(BASE_URL + `/delete_purchased_module/${id}`)
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

  const [due_total_price, setDue_total_price] = useState("");
  const [purchased_module_id, setPurchased_module_id] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [currentModalRow, setCurrentModalRow] = useState();

  const [showCancelAmountModal, setShowCancelAmountModal] = useState(false)

  const handlePaid = (row) => {
    console.log("due amount: ", row);
    setCurrentModalRow(row)
    setShowModal(true);
    setDue_total_price(row.price);
    setPurchased_module_id(row._id);
  };

  const handleCancelInvoice = (row) => {
    console.log("cancel row", row)
    setCurrentModalRow(row)
    setShowCancelAmountModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  };

  const downloadInvoice = async (invoiceId) => {
    const invoiceId2 = "6763c0a093898e80869c4552";
    console.log("invoiceId", invoiceId);
    try {
      const response = await axios.get(
        BASE_URL + `/get_purchasedModule_invoice/${invoiceId}`,
        {
          responseType: "blob", // Ensure the response is treated as a file
        }
      );

      // Create a Blob URL for the PDF
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `invoice_${invoiceId}.pdf`); // Set the file name
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the invoice:", error);
    }
  };

  const fetchAggreementPDF = async (invoiceId) => {
    const invoiceId2 = "6763c0a093898e80869c4552";
    console.log("invoiceId", invoiceId);
    try {
      const response = await axios.get(
        BASE_URL + `/getAgreement_invoice/${invoiceId}`,
        {
          responseType: "blob", // Ensure the response is treated as a file
        }
      );

      // Create a Blob URL for the PDF
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `agreement_${invoiceId}.pdf`); // Set the file name
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the agreement:", error);
    }

  }

  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="row bg-light p-3">
          <div className="col-md-6">
            <h4>User Query</h4>
          </div>
        </div>
        <div className=" d-flex align-items-center justify-content-between">
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
          <div className=" d-flex flex-column gap-2 mb-4">
            <p className="m-0"><b>Filter Invoices: </b></p>
            <div className=" d-flex gap-4">
              <div className=" d-flex gap-2">
                <label>Start Date:</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              <div className=" d-flex gap-2">
                <label>End Date:</label>
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
              </div>
              <button className="btn btn-danger py-0" onClick={() => {
                setStartDate(null);
                setEndDate(null);
              }}>Clear Filters</button>
            </div>
          </div>
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
                      {row.invoiceType} Invoice
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
                      Due Amount
                    </span>
                    <br />
                    {row?.due_amount?.toFixed(2)} €<br />
                    {row.paid_amount === row.totalPrice ? <button
                      type="button"
                      onClick={() => handlePaid(row)}
                      className="btn btn-outline-danger btn-sm mt-2">
                      Paid
                    </button> : <button
                      type="button"
                      onClick={() => handlePaid(row)}
                      className="btn btn-outline-primary btn-sm mt-2">
                      Unpaid
                    </button>}
                  </td>

                  <td className=" d-flex align-items-start">
                    <div className=" d-flex flex-column gap-2">
                      <button
                        className="btn btn-success btn-sm me-3"
                        // onClick={() => handleDownloadDetial(row)}
                        onClick={() => downloadInvoice(row._id)}>
                        Rechnung
                      </button>
                      <button
                        className="btn btn-success btn-sm me-3"
                        // onClick={() => handleDownloadDetial(row)}
                        onClick={() => fetchAggreementPDF(row._id)}>
                        Vereinbarung
                      </button>
                    </div>
                    <button
                      className="btn btn-outline-danger btn-sm me-3"
                      onClick={() => handleCancelInvoice(row)}
                    >
                      Cancel Invoice
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

                <div>
                  <div className="modal-body pt-4" id="AmountmodalBody">
                    <table className="table table-bordered text-center table-striped">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Remark</th>
                          <th>Due Amount</th>
                        </tr>
                      </thead>
                      <tbody id="table_data">
                        {currentModalRow.transactionHistory && currentModalRow.transactionHistory.length > 0 ?
                          currentModalRow.transactionHistory.map((item) => {
                            return <>
                              <tr>
                                <td>{item.createdAt.split("T")[0]}</td>
                                <td>{item.amount}</td>
                                <td>{item.remark}</td>
                                <td>{Number(item.restAmount)?.toFixed(2)}</td>
                              </tr>
                            </>
                          }) : <p className=" text-center text-danger">No transaction history found.</p>}
                      </tbody>
                    </table>
                    {(currentModalRow.isInvoiceCancelled) && <tr><h5 className="text-danger">This invoice is cancelled! You cannot pay more amount</h5></tr>}
                    <h6 className="mt-3 mb-3">
                      Total Amount: {currentModalRow.totalPrice} €
                      &nbsp;&nbsp;|&nbsp; Total Paid Amount:
                      {currentModalRow.paid_amount} € &nbsp;&nbsp;|&nbsp; Rest
                      Amount: {currentModalRow.due_amount}€{" "}
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
                      onClick={handleClose}>
                      Close
                    </button>
                    <button
                      type="button"
                      id="save_amount"
                      onClick={() => handleSubmit(currentModalRow.totalPrice, currentModalRow.paid_amount, currentModalRow.due_amount, currentModalRow._id)}
                      name="save_amount"
                      disabled={currentModalRow.isInvoiceCancelled}
                      className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showCancelAmountModal && (
          <div className="login-container">
            <div
              className="custom-modal-overlay"
              onClick={() => setShowCancelAmountModal(false)} // Close on backdrop click
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
                    onClick={() => setShowCancelAmountModal(false)}
                  />
                </div>

                {(currentModalRow.isInvoiceCancelled && (currentModalRow.refundedAmount === currentModalRow.paid_amount)) ?
                  <div className="modal-body pt-4" id="AmountmodalBody">
                    <h6 className="mt-3 mb-3 text-center">
                      This invoice is cancelled, whole amount({currentModalRow.refundedAmount} €) paid by the user is refunded, there is no amount left to refund.
                    </h6>
                  </div> : <div>
                    <div className="modal-body pt-4" id="AmountmodalBody">
                      <h6 className="mt-3 mb-3">
                        Amount Available to Refund: {Number(currentModalRow.paid_amount) - (Number(currentModalRow.refundedAmount) || 0)} €
                      </h6>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label htmlFor="amount" className="form-label">
                          Refund Amount*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="amount"
                          name="amount"
                          placeholder="Enter amount"
                          value={cancelInvoiceFormData.amount}
                          onChange={(e) => setCancelInvoiceFormData({ ...cancelInvoiceFormData, amount: e.target.value })}
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
                          value={cancelInvoiceFormData.remark}
                          onChange={(e) => setCancelInvoiceFormData({ ...cancelInvoiceFormData, remark: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary me-3"
                        data-bs-dismiss="modal"
                        onClick={() => setShowCancelAmountModal(false)} >
                        Close
                      </button>
                      <button
                        type="button"
                        id="save_amount"
                        onClick={() => handleCancelInvoiceSubmit((Number(currentModalRow.paid_amount) - (Number(currentModalRow.refundedAmount) || 0)), currentModalRow._id)}
                        name="save_amount"
                        disabled={(Number(currentModalRow.paid_amount) - Number(currentModalRow.refundedAmount)) === 0}
                        className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        )}

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
    </div>
  );
}

export default Invoice;
