import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import "./custumer.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

function Invoice() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page

  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(BASE_URL + '/get_purchasedModule').then((response) => {

      console.log("all invoice data", response);
      setData(response.data.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 === 0 ? 12 : hours % 12;
    const formattedTime = `${hours12}:${minutes}:${seconds} ${period}`;
    return `${year}-${month}-${day} ${formattedTime}`;
  };

  const filteredData = search.trim()
    ? data.filter(
        (item) =>
          item._id.toLowerCase() === search.trim().toLowerCase() ||
          item.amount_due.toLowerCase() === search.trim().toLowerCase()
      )
    : data;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
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
      head: [['Order ID', 'Product Details', 'Customer Details', 'Amount Due', 'Status']],
      body: currentItems.map((item) => [
        item._id,
        item.product_details,
        item.customer_details,
        item.amount_due,
        item.status
      ])
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
        "Status": item.status
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
        "Status": item.status
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
    const csvContent = currentItems.map((item) => [
      item._id,
      item.product_details,
      item.customer_details,
      item.amount_due,
      item.status
    ]);
    const headers = ["Order ID", "Product Details", "Customer Details", "Amount Due", "Status"];
    const csvString = [headers, ...csvContent].map(row => row.join(",")).join("\n");

    navigator.clipboard.writeText(csvString).then(() => {
      alert("Table data copied to clipboard");
    }).catch((err) => {
      console.error("Could not copy text: ", err);
    });
  };


  const handleDeleteInvoice = (id) => {
    axios.delete(BASE_URL + `/delete_invoice/${id}`).then((response) => {
      console.log(response);
      fetchData();
    }).catch((error) => {
      console.log(error);
    })
  }

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
    doc.text('Invoice Details', 20, 20);
  
    // Use autoTable to add invoice details in a table format
    doc.autoTable({
      startY: 30,
      head: [['Key', 'Value']],
      body: [
        ['Order ID', row._id],
        ['Product Details', row.product_details],
        ['Customer Details', row.customer_details],
        ['Customer Email', row.email],
        ['Amount Due', `${row.amount_due} €`],
        ['Status', row.status],
        ['Invoice Created At', formatDate(row.createdAt)]
      ]
    });
  
    // Save the PDF
    doc.save(`invoice_detail_${row._id}.pdf`);
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
            <button type="button" className="btn btn-secondary" onClick={copyTableData}>Copy</button>
            <button type="button" className="btn btn-secondary" onClick={exportCSV}>CSV</button>
            <button type="button" className="btn btn-secondary" onClick={exportExcel}>Excel</button>
            <button type="button" className="btn btn-secondary" onClick={exportPDF}>PDF</button>
          </div>
        </div>
        <div className="input-group mb-3 mt-3" style={{ width: "300px", position: "relative" }}>
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

                  <td className="text-center"><span style={{fontSize:"12px"}}>{row._id} </span><br />
                    <span className="text-danger" style={{ fontSize: "12px" }}>Private Invoice</span>
                    <br /><span style={{fontSize:"12px"}}>{formatDate(row.createdAt)}</span></td>
                  <td className="text-center">
                    <span style={{fontSize:"12px"}}>{row.courseData.Ausbildung}</span><br/>
                    <span style={{fontSize:"12px"}}>{row.courseData.Location
                    }</span><br />
                      <span style={{fontSize:"12px"}}>{formatRegistrationDate(row.courseData.createdAt)
                    }</span>


               
                  </td>
                  <td className="text-center">
                  <span style={{fontSize:"12px"}}>{row.userDetails.First_name
                    }</span><br />
                      <span style={{fontSize:"12px"}}>{row.userDetails.email
                    }</span><br />
                      <span style={{fontSize:"12px"}}>{row.userDetails.phone
                    }</span><br />
                    
                   
                  
                  
                  
                  </td>
                  <td className="text-center"><span className="text-danger" style={{ fontSize: "12px" }}>Overdue By 0 Days</span><br />{row.amount_due} €<br/><button type="button" className="btn btn-outline-danger btn-sm mt-2">paid</button></td>
                 
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
                      onClick={() => handleDeleteInvoice(row._id)}
                    
                    >
                 Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No results found</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination d-flex justify-content-end mt-3">
          <button className="btn btn-secondary me-2" onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
          <span className="btn btn-success">Page {currentPage} of {totalPages}</span>
          <button className="btn btn-primary ms-2" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
