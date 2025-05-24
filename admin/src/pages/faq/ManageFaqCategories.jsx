import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";


function ManageFaqCategories() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const { id } = useParams();
  // Example parameter ID
  console.log("paramsId: ", id);
  useEffect(() => {
    if (id) {
      axios
        .get(BASE_URL + `/faq_category/${id}`)
        .then((response) => {

          console.log("response params id", response.data.data)

          setFaqCategory(response.data.data.
            faqCategory
          )
          // Set the name fsetield

        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Reset form fields if no paramsId is provided

    }
  }, []);


  const [faqCategory, setFaqCategory] = useState("");

  const handleInputChange = (e) => {
    setFaqCategory(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered FAQ Category Name:", faqCategory);
    const payload = {
      faqCategory: faqCategory
    }


    if (id) {
      axios.put(BASE_URL + `/edit_faq_category/${id}`, payload).then((response) => {
        console.log(response);


        if (response.status == 200) {
          alert("success");
          navigate('/faq/add_faq_categories')
        } else {
          alert('faild');
        }



      }).catch((err) => {
        console.log(err);

      });

    } else {
      axios.post(BASE_URL + '/add_faq_category', payload).then((response) => {
        console.log(response);

        if (response.status == 201) {
          alert('Success');
          navigate('/faq/add_faq_categories')
        }

      }).catch((err) => {

        console.log(err);
        alert('faild');
      });
    }

  };

  return (
    <div className="container-fluid mt-2">
      <div className="card shadow-sm p-3" style={{ border: "none" }}>
        <div className="card-body">
          <h3 className="card-title">Manage Faq Categories</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-4">
              <label htmlFor="faqCategory">Enter Faq Category Name:</label>
              <input
                type="text"
                className="form-control mt-2"
                id="faqCategory"
                placeholder="Enter FAQ Category Name"
                value={faqCategory}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ManageFaqCategories;
