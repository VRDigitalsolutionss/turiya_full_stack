import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

const Reports = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [data, setData] = useState([]);
  const [deleteId, setDeleteItemId] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // Example data, replace this with an API call if needed
  // useEffect(() => {
  //   setData([
  //     {
  //       orderId: "TY1731133092441081",
  //       orderDate: "09-Nov-2024",
  //       orderTime: "06:24:58",
  //       comingFrom: "Patna",
  //       trainNo: "565467767",
  //       departure: "Patna",
  //       arrival: "New Delhi",
  //       arrivalTime: "2024-11-09 12:54:00",
  //       taxiTime: "0000-00-00 00:00:00",
  //       customerDetails: "Customer Info Here",
  //     },
  //     {
  //       orderId: "TY1731133092441082",
  //       orderDate: "09-Nov-2024",
  //       orderTime: "06:24:58",
  //       comingFrom: "Patna",
  //       trainNo: "565467767",
  //       departure: "Patna",
  //       arrival: "New Delhi",
  //       arrivalTime: "2024-11-09 12:54:00",
  //       taxiTime: "0000-00-00 00:00:00",
  //       customerDetails: "Customer Info Here",
  //     },
  //     // Add more objects for additional rows
  //   ]);
  // }, []);


  const fetchReport = () => {
    axios.get(BASE_URL + '/report').then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  

  useEffect(() => {
    fetchReport();
  }, []);

  console.log('data------------------', data);
  // Delete item function
  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  const handleDeleteConfirm = () => {
    if (deleteId) {
      axios.delete(BASE_URL + `/delete_report/${deleteId}`).then((response) => {
        console.log("Response: of delete", response)

        setShowDeleteModal(false);
        setDeleteItemId("");
        fetchReport();
      }).catch((err) => {
        console.log("Error:", err);

        setShowDeleteModal(false);
        setDeleteItemId("");
        fetchReport();
      })
    } else {
      alert("id not found");
}
 
  };

  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="row bg-light p-3 mb-3">
          <div className="col-sm-12">
            <h4>User Query</h4>
          </div>
        </div>
        <div className="row">
          <table
            className="table table-striped "
            border="1"
            width="100%"
            cellPadding="10"
            cellSpacing="0">
            <thead>
              <tr>
                <th>Order Details</th>
                <th>Ticket Details</th>
                <th>Customer Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.orderId} <br />
                    {item.orderDate} <br />
                    {item.orderTime}
                  </td>
                  <td>
                    Coming from: {item.comingFrom} <br />
                    Train No: {item.trainNo} <br />
                    Departure: {item.departure} <br />
                    Arrival: {item.arrival} <br />
                    Time: {item.arrivalTime} <br />
                    Taxi time: {item.taxiTime}
                  </td>
                  <td>{item.customerDetails}</td>
                  <td>
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
                    <h4 className="modal_header">Confirm Delete</h4>
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
                    className="btn btn-secondary"
                    onClick={() => setShowDeleteModal(false)}>
                    Cancel
                  </button>
                  <button
                    className="btn btn-danger ms-3"
                    onClick={handleDeleteConfirm}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
