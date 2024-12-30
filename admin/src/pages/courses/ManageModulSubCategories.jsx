import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";


const ManageModuleCategories = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  useEffect(() => {
    fetchCourseCategories();
    if (!token) {
      navigate("/login");
    }
  }, []);

  const { id } = useParams();


  const [selectedCategory, setSelectedCategory] = useState("");
  const [moduleCategory, setModuleCategory] = useState("");

  const [courseCategoriesData, setCourseCategoriesData] = useState('');


  const fetchCourseCategories = async () => {
    try {
      // Send the category to the API
      const response = await axios.get(BASE_URL + "/course_categories_latest");

      // Add the new category to the categories list (local state)
      console.log("course_categories data ", response.data.data);
      setCourseCategoriesData(response.data.data);
    } catch (error) {
      console.error("Error adding category:", error.response?.data || error.message);
    }

  };


console.log("course_categories data options", courseCategoriesData)

  useEffect(() => {
    if (id) {
      axios
        .get(BASE_URL + `/module_categories/${id}`)
        .then((response) => {
          console.log(response.data.data.modulecategory);
          setSelectedCategory(response.data.data.category);
          setModuleCategory(response.data.data.modulecategory || "")
        });
    }  },[]);
  // Sample categories for the dropdown
  const categories = [
    "500H AYA Yogalehrer Blockausbildung | 100h Einzelmodule",
    "200H AYA Yogalehrer Ausbildung - Intensiv",
    "60H Senioren Yoga",
    "60H Yin Yoga",
    "Alle Kommenden Kurse",
  ];

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Category:", selectedCategory);
    console.log("Entered Module Category:", moduleCategory);



    const payload =  {
      "category": selectedCategory,
      "modulecategory":moduleCategory,
      "status": "active"
    }
    if (id) {
      axios
        .put(BASE_URL + `/edit_module_category/${id}`, payload)
        .then((response) => {
          console.log(response);

          if (response.status == 200) {
            alert("success");

            setSelectedCategory("");
            setModuleCategory("");
          } else {
            alert("faild");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(BASE_URL + "/add_module_category", payload)
        .then((response) => {
          console.log(response);

          if (response.status == 201) {
            alert("Success");

            setSelectedCategory("");
            setModuleCategory("");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("faild");
        });
    }


  };

  return (
    <div className="container-fluid mt-5">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <h4>Manage Module Categories</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label>Categories</label>
            <select
              className="form-control"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              required>
              <option value="">Select Category</option>
              {courseCategoriesData && courseCategoriesData.map((category, index) => (
                <option key={index} value={category._id}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group my-3">
            <label>Enter Module Categories :</label>
            <input
              type="text"
              className="form-control"
              value={moduleCategory}
              onChange={(e) => setModuleCategory(e.target.value)}
              placeholder="Enter module category"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageModuleCategories;
