import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

const ManageAddFAQ = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchFaqCategory();
    if (!token) {
      navigate("/login");
    }
  }, []);

  const { id } = useParams();
  // Example parameter ID
  console.log("paramsId: ", id);

  const fetchFaqCategory = () => {
    // Fetch the FAQ category based on the provided ID
    // Example API call
    axios
     .get(BASE_URL + `/faq_category`)
     .then((response) => {
        console.log("response of faq category", response.data.data);
       // Set the category field
       setOptions(response.data.data)
      })
     .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (id) {
      axios
        .get(BASE_URL + `/get_faq/${id}`)
        .then((response) => {
          console.log("response params id",response.data.data)
          // Set the name field
          const data = response.data.data;

          setCategory(data.category)
          setQuestion(data.question)
          setAnswer(data.answer)
 

          // answer
          // : 
          // "<p>enter answer</p>"
          // category
          // : 
          // "General Information 1"
          // createdAt
          // : 
          // "2024-11-29T02:45:07.090Z"
          // question
          // : 
          // "<p>rishu</p>"
          // status
          // : 
          // "active"
          // updatedAt
          // : 
          // "2024-11-29T02:45:07.090Z"
          // __v
          // : 
          // 0
          // _id
          // : 
          // "67492ab3445a0f03cecd8681"

        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Reset form fields if no paramsId is provided
    }
  }, []);

  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleQuestionChange = (value) => {
    setQuestion(value);
  };

  const handleAnswerChange = (value) => {
    setAnswer(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ category, question, answer });

    console.log("Submit", category, question, answer);

    // =============================================================================================
    const payload = {
      category: category,
      question: question,
      answer: answer,
      status: "active",
    };

    if (id) {
      axios
        .put(BASE_URL +  `/edit_faq/${id}`, payload)
        .then((response) => {
          console.log(response);

          if (response.status == 200) {
            alert("success");

            setCategory("");
            setQuestion("");
            setAnswer("");
          } else {
            alert("faild");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(BASE_URL +  "/add_faq", payload)
        .then((response) => {
          console.log(response);

          if (response.status == 201) {
            alert("Success");

            setCategory("");
            setQuestion("");
            setAnswer("");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("faild");
        });
    }
  };

  const [options, setOptions] = useState([
    { value: "", label: "Select Category" },
    { value: "1", label: "200H AYA Yogalehrer Ausbildung - Intensiv" },
    { value: "3", label: "60H Senioren Yoga" },
    { value: "2", label: "60H Yin Yoga" },
  ]);

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm p-4" style={{ border: "none" }}>
        <div className="bg-light px-3 py-2 mb-4">
          <h4 className="py-1">Manage FAQ</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {/* Category selection using radio buttons */}
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                value="Certification & participation requirements"
                onChange={handleCategoryChange}
              />
              <label className="form-check-label">
                Certification & participation requirements
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                value="Yoga training content & important information"
                onChange={handleCategoryChange}
              />
              <label className="form-check-label">
                Yoga training content & important information
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                value="Daily routine"
                onChange={handleCategoryChange}
              />
              <label className="form-check-label">Daily routine</label>
            </div>
          </div>

          {/* Category selection using a dropdown */}
          <div className="my-3">
            <label htmlFor="dynamicSelect" className="form-label">
              Select an Option
            </label>
            <select
              id="dynamicSelect"
              className="form-select"
              value={category}
              onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              {options.map((item, index) => (
                <option key={index} value={item.faqCategory
                }>
                  {item.faqCategory
                  }
                </option>
              ))}
            </select>
          </div>

          {/* Question input */}
          <div className="mb-3">
            <label className="form-label">Enter question: </label>
            <ReactQuill
              value={question}
              onChange={handleQuestionChange}
              placeholder="Enter Question Here ..."
              style={{ height: "200px", marginBottom: "50px" }}
            />
          </div>

          {/* Answer input */}
          <div className="mb-3">
            <label className="form-label">Enter answer: </label>
            <ReactQuill
              value={answer}
              onChange={handleAnswerChange}
              placeholder="Enter answer Here ..."
              style={{ height: "200px", marginBottom: "50px" }}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>

        {/* Display submitted data */}
      </div>
    </div>
  );
};

export default ManageAddFAQ;
