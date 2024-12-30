import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../../config";
const ManageMealOffer = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { id } = useParams();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [formData, setFormData] = useState({
    roomNumber: "",
    mealOffers: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);


    const payload = {
      'moduleId':id,  // The ID of the module to be updated with the meal
      'MealOffers':formData.mealOffers,
      'MealPrice':formData.price,
      'status':"active"
    };



    console.log("meal offers:", formData)
    axios
      .post(BASE_URL + "/add_meal", payload)
      .then((response) => {
        console.log("response of adding room:", response);
        alert('meal added successfully');
        setFormData({

      
          roomNumber: "",
          mealOffers: "",
          price: "",
        });
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    // Reset form data
  };

  return (
    <div className="container-fluid mt-2">
      <div className="card shadow-sm">
        <div
          className="card-header text-white"
          style={{ backgroundColor: "#8bc34a" }}>
          <h3>Manage Modules</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="roomNumber" className="form-label">
                Room Number
              </label>
              <input
                type="text"
                id="roomNumber"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Room Number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mealOffers" className="form-label">
                Enter Your Meals Offers
              </label>
              <input
                type="text"
                id="mealOffers"
                name="mealOffers"
                value={formData.mealOffers}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Meal Offers"
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

export default ManageMealOffer;
