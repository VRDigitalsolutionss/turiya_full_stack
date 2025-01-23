

// ===============================================================================================

import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import "./custumer.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";




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

  const [data, setData] = useState([
    {
      order: "TY1725987109484392",
      product: "200H Yoga Training",
      customer: "Rahul Kumar",
      email: "shubhamkumar21029@gmail.com",
      amount: "2799.00 €",
      status: "Unpaid",
    },
    {
      order: "TY1726049496153566",
      product: "200H Yoga Training2",
      customer: "Rahul Kumar",
      email: "shubhamkumar21029@gmail.com",
      amount: "2799.00 €",
      status: "Paid",
    },
    {
      order: "TY1726049496153566",
      product: "200H Yoga Training3",
      customer: "Rahul Kumar",
      email: "shubhamkumar21029@gmail.com",
      amount: "2899.00 €",
      status: "Paid",
    },
    {
      order: "TY1726049496153567",
      product: "Advanced Yoga Training",
      customer: "John Doe",
      email: "john.doe@example.com",
      amount: "1999.00 €",
      status: "Unpaid",
    },
    {
      order: "TY1726049496153568",
      product: "Intermediate Yoga Training",
      customer: "Jane Smith",
      email: "jane.smith@example.com",
      amount: "2499.00 €",
      status: "Paid",
    },
    {
      order: "TY1726049496153569",
      product: "Yoga Workshop",
      customer: "Alice Brown",
      email: "alice.brown@example.com",
      amount: "999.00 €",
      status: "Unpaid",
    },
    {
      order: "TY1726049496153570",
      product: "Mindfulness Training",
      customer: "Bob White",
      email: "bob.white@example.com",
      amount: "1299.00 €",
      status: "Paid",
    },
    {
      order: "TY1726049496153571",
      product: "Yoga for Beginners",
      customer: "Charlie Black",
      email: "charlie.black@example.com",
      amount: "899.00 €",
      status: "Paid",
    },
    // Add more data as needed
  ]);

  const fetchData = () => {
    axios.get(`${BASE_URL}/all_invoices`).then((response) => {
      console.log("invoice response", response.data.data);
      setData(response.data.data);
    }).catch((error) => {
      console.log(error);
    })
  }
  


  useEffect(() => {
    fetchData();
  }, []);

  function formatRegistrationDate(inputDate) {
    // Create a new Date object from the input string
    const date = new Date(inputDate);
  
    // Extract the day, month, and year
    const day = String(date.getDate()).padStart(2, '0');  // Ensure 2 digits
    const month = String(date.getMonth() + 1).padStart(2, '0');  // Get month, add 1 (0-indexed)
    const year = String(date.getFullYear()).slice(-2);  // Get last 2 digits of the year
  
    // Return the formatted date
    return `${day}-${month}-${year}`;
  }
  
  // Example usage:
  const formattedDate = formatRegistrationDate("2024-11-28T06:15:50.642Z");
  // const filteredData = data.filter((item) =>

  //   item.customer.toLowerCase().includes(search.trim().toLowerCase()) ||
  //   item.order.toLowerCase().includes(search.trim().toLowerCase()) ||
  //   item.product.toLowerCase().includes(search.trim().toLowerCase()) ||
  //   item.status.toLowerCase().includes(search.trim().toLowerCase()) ||
  //   item.email.toLowerCase().includes(search.trim().toLowerCase()) ||
  //   item.amount.toLowerCase().includes(search.trim().toLowerCase())
  // );

  // ==========================================================



  const filteredData = search.trim()
    ? data.filter(
        (item) =>
          // item.customer.toLowerCase() === search.trim().toLowerCase() ||
          item._id.toLowerCase() === search.trim().toLowerCase() ||
          // item.product.toLowerCase() === search.trim().toLowerCase() ||
          // item.status.toLowerCase() === search.trim().toLowerCase() ||
          // item.email.toLowerCase() === search.trim().toLowerCase() ||
          item.amount_due.toLowerCase() === search.trim().toLowerCase()
      )
    : data; // Show all data if search is empty

  // =======================================================================
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

  // Export and other functionalities remain unchanged
  const copyTableData = () => {
    let tableContent =
      "Order Details\tProduct Details\tCustomer Details\tEmail\tAmount\tStatus\n";
    filteredData.forEach((row) => {
      tableContent += `${row.order}\t${row.product}\t${row.customer}\t${row.email}\t${row.amount}\t${row.status}\n`;
    });
    navigator.clipboard
      .writeText(tableContent)
      .then(() => alert("Table data copied to clipboard!"))
      .catch((err) => console.error("Failed to copy table data: ", err));
  };

  const exportCSV = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(filteredData);
    XLSX.utils.book_append_sheet(wb, ws, "Invoices");
    XLSX.writeFile(wb, "Invoices.csv");
  };

  const exportExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(filteredData);
    XLSX.utils.book_append_sheet(wb, ws, "Invoices");
    XLSX.writeFile(wb, "Invoices.xlsx");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = [
      "Order",
      "Product",
      "Customer",
      "Email",
      "Amount",
      "Status",
    ];
    const tableRows = [];
    filteredData.forEach((item) => {
      tableRows.push([
        item.order,
        item.product,
        item.customer,
        item.email,
        item.amount,
        item.status,
      ]);
    });
    doc.text("Invoice Table", 14, 15);
    doc.autoTable({ head: [tableColumn], body: tableRows, startY: 20 });
    doc.save("Invoices.pdf");
  };

  const handleDownloadDetial = (user) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("User Invoice Detail", 10, 10);
    doc.setFontSize(12);
    doc.text(`Order: ${user.order}`, 10, 20);
    doc.text(`Product: ${user.product}`, 10, 30);
    doc.text(`Customer: ${user.customer}`, 10, 40);
    doc.text(`Email: ${user.email}`, 10, 50);
    doc.text(`Amount: ${user.amount}`, 10, 60);
    doc.text(`Status: ${user.status}`, 10, 70);
    doc.save(`${user.customer}_invoice.pdf`);
  };





  function formatDate(dateString) {
    const date = new Date(dateString); // Create a Date object from the input string
  
    // Get date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
  
    // Get time components
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    // Format the time (12-hour clock with AM/PM)
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 === 0 ? 12 : hours % 12; // Convert to 12-hour format
    const formattedTime = `${hours12}:${minutes}:${seconds} ${period}`;
  
    // Combine the date and formatted time
    return `${year}-${month}-${day} ${formattedTime}`;
  }
  
  // Example usage
  const inputDate = "2024-11-28T07:28:24.338Z";
  console.log(formatDate(inputDate)); // Outputs: 2024-11-28 07:28:24 AM


  function splitStringByComma(inputString) {
    // Split the input string by commas and trim any extra spaces

    const result = inputString.split(',').map(item => item.trim());
    return result;
}

// Example usage
// const input = "John Doe, 1234 Elm St, johndoe@example.com";
// const splitResult = splitStringByComma(input);
// console.log("customer_details",currentItems['customer_details'])
// console.log(splitResult);


  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="row bg-light p-3">
          <div className="col-md-6">
            <h4>User Query</h4>
          </div>
        </div>
        <div className="my-3">
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
              <th>Amount Due In</th>
            
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((row, rowIndex) => (
                <tr key={rowIndex}>
              
                  

{/* 
amount_due
: 
"150.00"
createdAt
: 
"2024-11-28T07:28:24.338Z"
customer_details
: 
"John Doe, 1234 Elm St, johndoe@example.com"
order_details
: 
"Order #12345, includes 2 items"
payment_status
: 
"unpaid"
product_details
: 
"Product A (2 units), Product B (1 unit)"
status
: 
"active"
updatedAt
: 
"2024-11-28T07:28:24.338Z"
__v
: 
0
_id
: 
"67481b98da50faeaeadc8876" */}


                  <td className="text-center">{row._id}<br/><span className="text-danger" style={{fontSize:"12px"}}>Private_Invoice</span> <br/>{formatDate(row.createdAt)}   </td>
                  <td>{row.product_details}</td>
                  <td>
                    <div>{row.customer_details
                    }</div>
                    <div>{row.email}</div>
                  </td>
                  <td className="text-center"><span className="text-danger" style={{fontSize:"12px"}}>Overdue By 0 Days<br/></span>{row.
price
} €<br/><button type="button" class="btn btn-outline-primary btn-sm">Full paid</button></td>
               
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
                      // onClick={() => handleUpdateStatus(row)}
                    
                    >
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
      </div>
    </div>
  );
}

export default Invoice;
