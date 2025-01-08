import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";



const ManageModuleCategories = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios.get(BASE_URL + `/get_course_category/${id}`).then((response) => {
        // setCategory()
        setCategory(response.data.data.category)
        setSlug(response.data.data.slug || "")
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
  const [slug, setSlug] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!id) {
      if (category.trim() !== "") {
        try {
          // Send the category to the API
          const response = await axios.post(BASE_URL + "/add_course_category_latest", {
            category: category,
            slug: slug
          });
          alert("course category added successfully")
          navigate('/courses/course_Categories')
        } catch (error) {
          console.error("Error adding category:", error.response?.data || error.message);
        }

      }
    } else {
      if (category.trim() !== "") {
        try {
          // Send the category to the API
          const response = await axios.put(BASE_URL + `/edit_course_category/${id}`, {
            category: category,
            slug: slug
          });
          alert("course category updated successfully")
          navigate('/courses/course_Categories')

        } catch (error) {
          console.error("Error adding category:", error.response?.data || error.message);
        }

      }
    }
  };

  
  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };


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
              onChange={(e) => {
                setCategory(e.target.value);
                setSlug(generateSlug(e.target.value))
              }}
              placeholder="Enter a category name"
            />
          </div>
          <div className="form-group my-3">
            <label>Enter slug:</label>
            <input
              type="text"
              className="form-control"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="Enter slug for the category"
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
