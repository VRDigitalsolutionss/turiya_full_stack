

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import { IoMdMail } from "react-icons/io";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoLocationSharp } from "react-icons/io5";
// import { MdOutlineDateRange } from "react-icons/md";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import * as XLSX from "xlsx";



// const TableComponent = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const [data, setData] = useState([]);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteItemId, setDeleteItemId] = useState("");

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   }, []);


//   const fetchData = () => {
//     axios.get('http://127.0.0.1:7000/api/all_customers').then((response) => {
//       console.log("custumer response", response.data.data);
      
//       setData(response.data.data);
//     }).catch((error) => {
//       console.error("Error fetching data: ", error);
//     })
//   }


//   useEffect(() => {
//     fetchData();
// },[]);


//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const rowsPerPage = 5;

//   // Fetch dynamic data (replace with actual API call if needed)


//   // Filter data based on search term
//   const filteredData = data.length > 0 && data.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.number.toLowerCase().includes(searchTerm.toLowerCase())||
//       item.address.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//   // Determine the current rows to display based on pagination and filtered data
//   const indexOfLastUser = currentPage * rowsPerPage;
//   const indexOfFirstUser = indexOfLastUser - rowsPerPage;
//   const currentUsers = filteredData && filteredData.slice(indexOfFirstUser, indexOfLastUser);

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleSearch = (event) => {
//     const value = event.target.value.trim();
//     setSearchTerm(value);
//     setCurrentPage(1); // Reset to page 1 on each new search
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//   };
// const [showCustumerProfleModal,setshowCustumerProfleModal] = useState(false);
//   const [activeStates, setActiveStates] = useState({});

//   // Toggle function for specific item based on its ID
//   const toggleButton = (id) => {
//     // setActiveStates((prevStates) => ({
//     //   ...prevStates,
//     //   [id]: !prevStates[id],
//     // }));

//     if (id) {
//       axios
//     .put(
//       `http://127.0.0.1:7000/api/customer_toggle_status/${id}`
//     )
//     .then((response) => {
//       console.log("response toggle", response.data.data);
//       // setGalleries(response.data.data);
//       fetchData();
//     })
//     .catch((err) => {
//       console.log("Error: toggle", err);
//     });
//     } else {
//       console.log("id not found")
// }


//   };


//   const handleDelete = (id) => {
//     setShowDeleteModal(true);
//     setDeleteItemId(id);
//   };

//   // Delete category
//   const handleDeleteConfirm = () => {


//     // setGalleries(galleries.filter((item) => item.id !== deleteItemId));
//     // setBlogs((prevUsers) => prevUsers.filter((user) => user.id !== deleteItemId)); // Filter out the user with matching id
//     if (deleteItemId) {
//       axios
//     .delete(
//       `http://127.0.0.1:7000/api/delete_customer/${deleteItemId}`,
//     )
//     .then((response) => {
//       console.log("delete response", response);
  
//       fetchData();


//       setShowDeleteModal(false); // Close the modal
//       setDeleteItemId("");

//     })
//     .catch((err) => {
//       console.log("Error:", err);
//     });
//     } else {
//       console.log("id not found")
//     }
//   };


//   const [viewCustumer, setViewCustumer] = useState('');

//   const handleViewCustumer = (id) => {
//     setshowCustumerProfleModal(true);
//       axios.get(`http://127.0.0.1:7000/api/customer_getbyid/${id}`).then((response) => {
//         console.log("custumer profile response", response.data.data);
        
//         setViewCustumer(response.data.data);
//       }).catch((error) => {
//         console.error("Error fetching data: ", error);
//       })
   
// }

// function formatRegistrationDate(inputDate) {
//   // Create a new Date object from the input string
//   const date = new Date(inputDate);

//   // Extract the day, month, and year
//   const day = String(date.getDate()).padStart(2, '0');  // Ensure 2 digits
//   const month = String(date.getMonth() + 1).padStart(2, '0');  // Get month, add 1 (0-indexed)
//   const year = String(date.getFullYear()).slice(-2);  // Get last 2 digits of the year

//   // Return the formatted date
//   return `${day}-${month}-${year}`;
// }

// // Example usage:
// const formattedDate = formatRegistrationDate("2024-11-28T06:15:50.642Z");

//   // ==================================================

//   return (
//     <>
//       <div className="container-fluid mt-3">
//         <div className="card p-4 shadow-sm" style={{ border: "none" }}>
//           <div className="row bg-light p-3">
//             <div className="col-md-6">
//               <h4>User Query new</h4>
//             </div>
//             <div className="col-md-6 text-end">
//               <p  type="button" className="btn btn-success">
//                custumer
//               </p>
//             </div>
//           </div>
//           <div className="row">
//           <div className="col-sm-12">
//             <div className="btn-group" role="group" aria-label="Basic example">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={copyTableData}>
//                 Copy
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={exportExcel}>
//                 Excel
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={exportCSV}>
//                 CSV
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={exportPDF}>
//                 PDF
//               </button>
//             </div>
//           </div>
//         </div>
//           <div
//             className="input-group mb-3 mt-3"
//             style={{ width: "300px", position: "relative" }}>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search"
//               onChange={handleSearch}
//               value={searchTerm}
//               style={{ paddingRight: "30px" }}
//             />
//             {searchTerm && (
//               <button
//                 className="btn-clear"
//                 onClick={clearSearch}
//                 type="button"
//                 style={{
//                   position: "absolute",
//                   right: "10px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   background: "transparent",
//                   border: "none",
//                   cursor: "pointer",
//                   fontSize: "16px",
//                 }}>
//                 ✖
//               </button>
//             )}
//           </div>
//           <table className="table table-striped table-bordered shadow-sm">
//             <thead>
//               <tr>
//                 <th>Sr.No</th>
//                 <th>Name</th>
//                 <th>Date</th>
//                 <th>Email</th>
//                 <th>Number</th>
//                 <th>Address</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentUsers && currentUsers.map((item, index) => (
//                 <tr key={item.id}>
//                   <td>{indexOfFirstUser + index + 1}.</td>
//                   <td>{item.name}</td>
//                   <td>{formatRegistrationDate(item.createdAt)}</td>
//                   <td>{item.email}</td>
//                   <td>{item.number}</td>
//                   <td>{item.address}</td>
       
                  
                 


//                   <td>
//                   {/* <button
//                     onClick={() => toggleButton(item._id)}
//                     className={`btn ${item.status === "active" ? "btn-warning" : "btn-secondary"}`}>
//                    {item.status}
//                   </button> */}
//                     <button className="btn btn-info me-3 ms-3" onClick={()=>handleViewCustumer(item._id)}>
//                      View Custumer
//                     </button>
//                     <button type="button" className="btn btn-danger" onClick={()=>handleDelete(item._id)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {showDeleteModal && (
//           <div
//             id="modalOverlay"
//             className="hiddenOverlayContainer"
//             style={{ display: "block" }}>
//             <div className="customDialogBox">
//               <div
//                 className="row "
//                 style={{
//                   backgroundColor: "light",
//                   padding: "15px",
//                   borderBottom: "1px solid #7f7f7f",
//                   paddingBottom: "6px",
//                 }}>
//                 <div className="col-sm-6 d-flex justify-content-start">
//                   <h4 className="modal_header">
//                     <RiDeleteBin6Fill className="me-3" />
//                     Confirmation
//                   </h4>
//                 </div>
//                 <div className="col-sm-6 d-flex justify-content-end">
//                   {/* <span className="exitButtonTrigger" onClick={closeDialogBox}>
//           ×
//         </span> */}
//                   <span
//                     className="exitButtonTrigger"
//                     onClick={() => setShowDeleteModal(false)}>
//                     ×
//                   </span>
//                 </div>
//               </div>

//               <div className="text-start pt-3">
//                 <ul className="modal_contact_details">
//                   <li>Are you sure you want to delete this item ?</li>
//                 </ul>
//                 <hr />
//               </div>
//               <div className="d-flex justify-content-end">
//                 <button
//                   className="btn btn-danger me-3"
//                   onClick={handleDeleteConfirm}>
//                   Delete
//                 </button>
//                 <button
//                   className="btn btn-secondary"
//                   onClick={() => setShowDeleteModal(false)}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//           )}
//                 {showCustumerProfleModal && (
//           <div
//             id="modalOverlay"
//             className="hiddenOverlayContainer"
//             style={{ display: "block" }}>
//             <div className="customDialogBox">
//               <div
//                 className="row "
//                 style={{
//                   backgroundColor: "light",
//                   padding: "15px",
//                   borderBottom: "1px solid #7f7f7f",
//                   paddingBottom: "6px",
//                 }}>
//                 <div className="col-sm-6 d-flex justify-content-start">
//                   <h4 className="modal_header">
//                     {/* <RiDeleteBin6Fill className="me-3" /> */}
//                    Custumer Detail
//                   </h4>
//                 </div>
//                 <div className="col-sm-6 d-flex justify-content-end">
//                   {/* <span className="exitButtonTrigger" onClick={closeDialogBox}>
//           ×
//         </span> */}
//                   <span
//                     className="exitButtonTrigger"
//                     onClick={() => setshowCustumerProfleModal(false)}>
//                     ×
//                   </span>
//                 </div>
//               </div>

//               <div className="text-start pt-3">
//                   <ul className="modal_contact_details">
                    

//                     {/* ========================================================= */}

//                     {/* ============================================================ */}
                  
//                     <li><IoMdMail className="me-3"/>{viewCustumer.email}</li>
//                     <li><FaPhoneAlt className="me-3"/>{viewCustumer.number}</li>
//                     <li><IoLocationSharp className="me-3"/>{viewCustumer.address}</li>
//                     <li><MdOutlineDateRange className="me-3"/>Registration Date :  { formatRegistrationDate(viewCustumer.createdAt)}</li>
//                 </ul>
//                 <hr />
//               </div>
//               <div className="d-flex justify-content-end">
              
//                 <button
//                   className="btn btn-secondary"
//                   onClick={() => setshowCustumerProfleModal(false)}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//           {/* Pagination Buttons */}
//           <div className="pagination d-flex justify-content-end">
//             <button
//               onClick={handlePrevPage}
//               className="btn btn-secondary page-item me-2"
//               disabled={currentPage === 1}>
//               Prev
//             </button>
//             <span className="btn btn-success current-page">
//               Page {currentPage}
//             </span>
//             <button
//               onClick={handleNextPage}
//               className="btn btn-primary page-item ms-2"
//               disabled={currentPage === totalPages}>
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TableComponent;



// =================================================================================


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

const TableComponent = () => {
  const [showModal, setShowModal] = useState("");
  const [data, setData] = useState([]);
  const [users, setUsers] = useState(data);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [showCustumerProfleModal,setshowCustumerProfleModal] = useState(false);
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);


  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const fetchData = () => {
    axios.get(BASE_URL + '/all_customers').then((response) => {
      setData(response.data.data);
    }).catch((error) => {
      console.error("Error fetching data: ", error);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const rowsPerPage = 5;

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase())
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
    const value = event.target.value.trim();
    setSearchTerm(value);
    setCurrentPage(1); // Reset to page 1 on each new search
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  // Export to PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Sr.No', 'Name', 'Date', 'Email', 'Number', 'Address']],
      body: currentUsers.map((item, index) => [
        indexOfFirstUser + index + 1,
        item.name,
        formatRegistrationDate(item.createdAt),
        item.email,
        item.number,
        item.address
      ]),
    });
    doc.save('customers.pdf');
  };

  // Export to Excel
  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      currentUsers.map((item, index) => ({
        SrNo: indexOfFirstUser + index + 1,
        Name: item.name,
        Date: formatRegistrationDate(item.createdAt),
        Email: item.email,
        Number: item.number,
        Address: item.address
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Customers");
    XLSX.writeFile(wb, "customers.xlsx");
  };

  // Export to CSV
  const exportCSV = () => {
    const ws = XLSX.utils.json_to_sheet(
      currentUsers.map((item, index) => ({
        SrNo: indexOfFirstUser + index + 1,
        Name: item.name,
        Date: formatRegistrationDate(item.createdAt),
        Email: item.email,
        Number: item.number,
        Address: item.address
      }))
    );
    const csv = XLSX.utils.sheet_to_csv(ws);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "customers.csv";
    link.click();
  };

  // Copy table data
  const copyTableData = () => {
    let table = document.querySelector("table");
    let range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
      document.execCommand('copy');
      alert("Table data copied to clipboard");
    } catch (err) {
      alert("Unable to copy");
    }
  };

  function formatRegistrationDate(inputDate) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}-${month}-${year}`;
  }


  const [viewCustumer, setViewCustumer] = useState('');

  const handleViewCustumer = (id) => {
    setshowCustumerProfleModal(true);
      axios.get(BASE_URL + `/customer_getbyid/${id}`).then((response) => {
        console.log("custumer profile response", response.data.data);
        
        setViewCustumer(response.data.data);
      }).catch((error) => {
        console.error("Error fetching data: ", error);
      })
   
}

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

const [showUserProfile,setShowUserProfile] = useState(false)
  const [deleteId, setDeleteId] = useState('');

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };


  const handleDeleteConfirm = () => {

    axios.delete(BASE_URL + `/delete_customer/${deleteId}`).then((response) => {
      
      console.log(response)
      fetchData();
      setShowDeleteModal(false);

    }).catch((error) => {
     console.log(error)
   })

  }
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="card p-4 shadow-sm" style={{ border: "none" }}>
          <div className="row bg-light p-3">
            <div className="col-md-6">
              <h4>User Query new</h4>
            </div>
            <div className="col-md-6 text-end">
              <p type="button" className="btn btn-success">
                custumer
              </p>
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
                <th>Sr.No</th>
                <th>Name</th>
                <th>Date</th>
                <th>Email</th>
                <th>Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers && currentUsers.map((item, index) => (
                <tr key={item.id}>
                  <td>{indexOfFirstUser + index + 1}.</td>
                  <td>{item.name}</td>
                  <td>{formatRegistrationDate(item.createdAt)}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{item.address}</td>
                  <td>
                  <button
                    className="btn btn-info btn-sm me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#profileModal"
                    onClick={() => handleViewCustumer(item._id)}>
                    View Profile
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
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
          
          {showCustumerProfleModal && (
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
                    {/* <RiDeleteBin6Fill className="me-3" /> */}
                   Custumer Detail
                  </h4>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                  {/* <span className="exitButtonTrigger" onClick={closeDialogBox}>
          ×
        </span> */}
                  <span
                    className="exitButtonTrigger"
                    onClick={() => setshowCustumerProfleModal(false)}>
                    ×
                  </span>
                </div>
              </div>

              <div className="text-start pt-3">
                  <ul className="modal_contact_details">
                    

                    {/* ========================================================= */}

                    {/* ============================================================ */}
                  
                    <li><IoMdMail className="me-3"/>{viewCustumer.email}</li>
                    <li><FaPhoneAlt className="me-3"/>{viewCustumer.number}</li>
                    <li><IoLocationSharp className="me-3"/>{viewCustumer.address}</li>
                    <li><MdOutlineDateRange className="me-3"/>Registration Date :  { formatRegistrationDate(viewCustumer.createdAt)}</li>
                </ul>
                <hr />
              </div>
              <div className="d-flex justify-content-end">
              
                <button
                  className="btn btn-secondary"
                  onClick={() => setshowCustumerProfleModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
          <div className="pagination d-flex justify-content-end">
            <button
              onClick={handlePrevPage}
              className="btn btn-secondary page-item me-2"
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span className="btn btn-success current-page">Page {currentPage}</span>
            <button
              onClick={handleNextPage}
              className="btn btn-primary page-item ms-2"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
