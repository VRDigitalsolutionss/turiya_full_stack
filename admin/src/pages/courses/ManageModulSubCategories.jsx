import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";


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
  const [moduleCategorySlug, setModuleCategorySlug] = useState("");

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

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  console.log("course_categories data options", courseCategoriesData)

  useEffect(() => {
    if (id) {
      axios
        .get(BASE_URL + `/module_categories/${id}`)
        .then((response) => {
          console.log(response.data);
          setSelectedCategory(response.data.data.category);
          setModuleCategory(response.data.data.modulecategory || "")
          setModuleCategorySlug(response.data.data.slug || "")
        });
    }
  }, []);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      "category": selectedCategory,
      "modulecategory": moduleCategory,
      "slug": moduleCategorySlug,
      "status": "active"
    }
    if (id) {
      axios
        .put(BASE_URL + `/edit_module_category/${id}`, payload)
        .then((response) => {
          console.log(response);

          if (response.status == 200) {
            alert("success");
            navigate('/courses/modulSubCategories')
          } else {
            alert("faild");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(BASE_URL + "/add_module_category_latest", payload)
        .then((response) => {
          // console.log(response);

          if (response.status == 201) {
            alert("Success");
            navigate('/courses/modulSubCategories')
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
              required
            >
              <option value="">Select Category</option>
              {courseCategoriesData &&
                courseCategoriesData.map((category) => (
                  <option key={category._id} value={category._id}>
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
              onChange={(e) => {
                setModuleCategory(e.target.value)
                setModuleCategorySlug(generateSlug(e.target.value))
              }}
              placeholder="Enter module category"
              required
            />
          </div>
          <div className="form-group my-3">
            <label>Enter Slug for Module Categories :</label>
            <input
              type="text"
              className="form-control"
              value={moduleCategorySlug}
              onChange={(e) => setModuleCategorySlug(e.target.value)}
              placeholder="Enter slug for module category"
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
