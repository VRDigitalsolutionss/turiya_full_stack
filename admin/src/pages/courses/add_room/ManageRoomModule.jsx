import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../../config";


const ManageRoomModule = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  const { id } = useParams();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [formData, setFormData] = useState({
    // room: "",
    offers: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Reset form data
    // setFormData({
    //   room: "",
    //   offers: "",
    //   price: "",
    // });
    const payload = {
      'moduleId':id, 
      'RoomOffers':formData.offers,
      'RoomPrice':formData.price,
      'status':'active',


     
}
    axios.post(BASE_URL + '/add_room',payload).then((response) => {
      console.log("response", response.status);
      if (response.status === 201) {
        alert("Room Added Successfully");
      } else {
        alert("Room Added Error");
      }
    }).catch((error) => {
  console.log("error", error.message);
})



  };

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm">
        <div
          className="card-header text-white"
          style={{ backgroundColor: "#8bc34a" }}>
          <h3>Manage Modules</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* <div className="mb-3">
              <label htmlFor="room" className="form-label">
                Room
              </label>
              <input
                type="text"
                id="room"
                name="room"
                value={formData.room}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Room Number"
              />
            </div> */}
            <div className="mb-3">
              <label htmlFor="offers" className="form-label">
                Enter Your Room Offers
              </label>
              <input
                type="text"
                id="offers"
                name="offers"
                value={formData.offers}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Room Offers"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Price"
              />
            </div>
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageRoomModule;
