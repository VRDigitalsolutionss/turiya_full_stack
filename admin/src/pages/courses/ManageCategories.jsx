import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";



const ManageModuleCategories = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios.get(BASE_URL + `/get_course_category/${id}`).then((response) => {
        console.log("category", response.data.data)
        
        setCategory(response.data.data.category)

        }).catch((error) => {
        console.log(error)
      })
    }

  }, []);




  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Handle input change
  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if category input is not empty

    const payload = {
      "category": category
    };

    if (!id) {
      if (category.trim() !== "") {
        try {
          // Send the category to the API
          const response = await axios.post(BASE_URL + "/add_course_category_latest", payload);
    alert("course category added successfully")
          // Add the new category to the categories list (local state)
          // setCategories([...categories, response.data.category]);
    
          // Clear the input field after successful submission
          setCategory("");
    
          console.log("Category added successfully:", response.data);
        } catch (error) {
          console.error("Error adding category:", error.response?.data || error.message);
        }
    
      }
    } else {
      if (category.trim() !== "") {
        try {
          // Send the category to the API
          const response = await axios.put(BASE_URL + `/edit_course_category/${id}`, payload);
    alert("course category updated successfully")
          // Add the new category to the categories list (local state)
          // setCategories([...categories, response.data.category]);
    
          // Clear the input field after successful submission
          setCategory("");
    
          console.log("Category added successfully:", response.data);
        } catch (error) {
          console.error("Error adding category:", error.response?.data || error.message);
        }
    
      }
}



    
  };
  console.log(categories);
  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="bg-light p-3 mb-3">
          <h4>Manage course Categories</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label>Enter Course Categories:</label>
            <input
              type="text"
              className="form-control"
              value={category}
              onChange={handleInputChange}
              placeholder="Enter a category name"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {/* Display submitted categories */}
      </div>
    </div>
  );
};

export default ManageModuleCategories;
