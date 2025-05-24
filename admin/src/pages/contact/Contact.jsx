// import React, { useState } from "react";

// const Contact = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [contact, setContact] = useState({
//     name: "Turiya Yoga",
//     contactPerson: "Emanuel Wintermeyer",
//     address: "Herbartstrasse, 12",
//     city: "60316 Frankfurt am Main",
//     phone: "+49(0)69 2013 4987",
//     email: "info@turiyayoga.de",
//     description: "Wir bieten Yogalehrer Ausbildungen auf höchstem Niveau! Werde Yogalehrer mit Turiya Yoga!",
//     additionalInfo:
//       "Wenn Ihr Fragen habt oder euch für eine Ausbildung anmelden wollt schickt uns doch bitte einfach eine kurze Nachricht über unser Kontaktformular. Schaut euch in unserem Video an was euch bei einer Yogalehrer Ausbildung bei Turiya Yoga erwartet.",
//   });

//   const [formData, setFormData] = useState({ ...contact });

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleCancelClick = () => {
//     setIsEditing(false);
//     setFormData({ ...contact });
//   };

//   const handleSaveClick = () => {
//     setContact({ ...formData });
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="contact-card">
//       <h2>Contact</h2>
//       {!isEditing ? (
//         <div className="contact-content">
//           <img
//             src="https://via.placeholder.com/150" // Replace with actual image URL
//             alt="Yoga Class"
//             className="contact-image"
//           />
//           <h3>{contact.name}</h3>
//           <p>{contact.contactPerson}</p>
//           <p>{contact.address}</p>
//           <p>{contact.city}</p>
//           <p>{contact.phone}</p>
//           <p>{contact.email}</p>
//           <p><strong>{contact.description}</strong></p>
//           <p>{contact.additionalInfo}</p>
//           <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
//         </div>
//       ) : (
//         <div className="edit-contact-form">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="form-control"
//           />
//           <input
//             type="text"
//             name="contactPerson"
//             value={formData.contactPerson}
//             onChange={handleChange}
//             className="form-control"
//           />
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="form-control"
//           />
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             className="form-control"
//           />
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="form-control"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="form-control"
//           />
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="form-control"
//           />
//           <textarea
//             name="additionalInfo"
//             value={formData.additionalInfo}
//             onChange={handleChange}
//             className="form-control"
//           />
//           <button className="btn btn-success" onClick={handleSaveClick}>Save</button>
//           <button className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
//         </div>
//       )}
//     </div>

//   );
// };

// export default Contact;

// =======================================================================

// import React, { useState, useEffect } from 'react';

// const Reports = () => {
//   const [data, setData] = useState([]);

//   // Example data, replace this with an API call if needed
//   useEffect(() => {
//     setData([
//       {
//         orderId: "TY1731133092441081",
//         orderDate: "09-Nov-2024",
//         orderTime: "06:24:58",
//         comingFrom: "Patna",
//         trainNo: "565467767",
//         departure: "Patna",
//         arrival: "New Delhi",
//         arrivalTime: "2024-11-09 12:54:00",
//         taxiTime: "0000-00-00 00:00:00",
//         customerDetails: "Customer Info Here",
//       },
//       // Add more objects for additional rows
//     ]);
//   }, []);

//   const [contact, setContact] = useState({
//     name: "Turiya Yoga",
//     contactPerson: "Emanuel Wintermeyer",
//     address: "Herbartstrasse, 12",
//     city: "60316 Frankfurt am Main",
//     phone: "+49(0)69 2013 4987",
//     email: "info@turiyayoga.de",
//     description: "Wir bieten Yogalehrer Ausbildungen auf höchstem Niveau! Werde Yogalehrer mit Turiya Yoga!",
//     additionalInfo:
//       "Wenn Ihr Fragen habt oder euch für eine Ausbildung anmelden wollt schickt uns doch bitte einfach eine kurze Nachricht über unser Kontaktformular. Schaut euch in unserem Video an was euch bei einer Yogalehrer Ausbildung bei Turiya Yoga erwartet.",
//   });

//   // Delete item function
//   const handleDelete = (index) => {
//     setData((prevData) => prevData.filter((_, i) => i !== index));
//   };

//   return (

//     <div className="container-fluid mt-3">
//       <div className="card p-4 shadow-sm" style={{ border: "none" }}>

//         <div className="row bg-light p-3 mb-3">
//           <div className="col-sm-12">
//             <h4>User Query</h4>
//           </div>

//         </div>
//         <div className="row">
//         <table className='table table-striped ' border="1" width="100%" cellPadding="10" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>Order Details</th>
//             <th>Ticket Details</th>
//             <th>Customer Details</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>
//                 {item.orderId} <br />
//                 {item.orderDate} <br />
//                 {item.orderTime}
//               </td>
//               <td>
//                 Coming from: {item.comingFrom} <br />
//                 Train No: {item.trainNo} <br />
//                 Departure: {item.departure} <br />
//                 Arrival: {item.arrival} <br />
//                 Time: {item.arrivalTime} <br />
//                 Taxi time: {item.taxiTime}
//               </td>
//               <td>{item.customerDetails}</td>
//               <td>
//                 <button type="button" className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//         </div>

//     </div>
//     </div>
//   );
// };

// export default Reports;

// ==========================================================================

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

const YogaContact = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");



  // const [contactData, setContactData] = useState({
  //   name: "Turiya Yoga",
  //   contactPerson: "Emanuel Wintermeyer",
  //   address: "Herbartstrasse, 12, 60316 Frankfurt am Main",
  //   phone: "+49(0)69 2013 4987",
  //   email: "info@turiyayoga.de",
  //   description:
  //     "Wir bieten Yogalehrer Ausbildungen auf höchstem Niveau! Werde Yogalehrer mit Turiya Yoga!",
  //   instructions:
  //     "Wenn Ihr Fragen habt oder euch für eine Ausbildung anmelden wollt schickt uns doch bitte einfach eine kurze Nachricht über unser Kontaktformular. Schaut euch in unserem Video an was euch bei einer Yogalehrer Ausbildung bei Turiya Yoga erwartet.",
  //   image:
  //     "https://www.turiyayoga.de/media/content_images/616260424_contact.webp", // Replace with actual image URL
  // });

  const [contactData, setContactData] = useState('');

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);


  useEffect(() => {
    axios.get(BASE_URL + '/contact').then((response) => {
      console.log("response", response.data.data);
      setContactData(response.data.data);
    }).catch((error) => {
      console.log("error",error)
    })
  }, []);

  
  // Dynamic data state
  console.log("data",contactData && contactData[0].address);
  


  return (
    <div className="container-fluid mt-3">
      <div className="card p-5 shadow-sm" style={{ border: "none" }}>
        <div className="row bg-light p-3 mb-3">
          <div className="col-md-6">
            <h4>User Query</h4>
          </div>
          <div className="col-sm-6 d-flex justify-content-end">
            <Link to="/manage_contact" className="btn btn-success">Add contact</Link>
          </div>
        </div>

        <div className="row">
          <div
            style={{
              margin: "auto",
              padding: "20px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}>
           <img
  src={`${BASE_URL_IMAGE}${contactData?.[0]?.image || ''}`}
  alt={`${contactData?.[0]?.name || 'Default'} Contact`}
  style={{
    width: "300px",
    height: "147px",
    borderRadius: "10px",
    marginBottom: "20px",
  }}
/>
            <h3>{contactData && contactData[0].name}</h3>
            <p>
              <strong>Contact Person:</strong> {contactData && contactData[0].contactPerson}
            </p>
            <p>
              <strong>Address:</strong> {contactData && contactData[0].address}
            </p>
            <p>
              <strong>Phone:</strong> {contactData && contactData[0].phone}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactData && contactData[0].email}`}>{contactData && contactData[0].email}</a>
            </p>
            <p>{contactData && contactData[0].description}</p>
            <p>{contactData && contactData[0].instructions}</p>
            <Link
              to={`/manage_contact/${contactData && contactData[0]._id}`}
              // to="/manage_contact"
              className="btn btn-primary"
              // style={{
              //   background: "#007bff",
              //   color: "#fff",
              //   padding: "10px 20px",
              //   border: "none",
              //   borderRadius: "5px",
              //   cursor: "pointer",
              // }}
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaContact;
