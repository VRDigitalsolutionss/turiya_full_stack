
// ====================================================================================================

import React, { useState, useRef, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

const EditBlog = () => {
  const [blogHeading, setBlogHeading] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [blogContent, setBlogContent] = useState("");
  const fileInputRef = useRef(null); // Ref for the file input

  const { id } = useParams();
  // Example parameter ID
  console.log("paramsId: ", id);
  useEffect(() => {
    if (id) {
      axios
        .get(BASE_URL + `/blog/${id}`)
        .then((response) => {
          console.log("response params id", response);
          const data = response.data.data;

          // Set the name field
          setBlogHeading(data.blogHeading);
          setBlogContent(data.blogContent);
          // Set the file URL (assume API returns file URL)
          setBlogImage(data.blogImage);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Reset form fields if no paramsId is provided
      setBlogHeading("");
      setBlogContent("");
      // Set the file URL (assume API returns file URL)
      setBlogImage(null);
    }
  }, []);

  // Handle file change for the blog image
  const handleFileChange = (e) => {
    setBlogImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append('blogHeading', blogHeading);
    formData.append('blogContent', blogContent);
    formData.append('BlogImage', blogImage);
    console.log("formdata to be send",formData)

      // const payload = {
      //   blogHeading: blogHeading,
      //   blogContent: blogContent,
      //   file: blogImage.name,
      // };


    if (blogHeading && blogContent && blogImage) {


     
    

 
       

      axios
        .post(BASE_URL + "/add_blog", formData,{ headers: {
          "Content-Type": "multipart/form-data",
        }})
        .then((response) => {
          console.log(response);

          if (response.status == 201) {
            alert("Blog Created successfully");

            setBlogHeading("");
            setBlogImage(null);
            setBlogContent("");
            if (fileInputRef.current) {
              fileInputRef.current.value = ""; // Reset file input field
            }
          } else {
            alert("something went wrong");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="bg-light p-3 mb-3">
          <h4>Edit Blog</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter Blog Heading:</label>
            <input
              type="text"
              className="form-control"
              value={blogHeading}
              onChange={(e) => setBlogHeading(e.target.value)}
              placeholder="Enter blog heading"
            />
          </div>

          {/* =============================================================================== */}

          <div className="mb-3">
            <label className="form-label">Upload Blog Images:</label>
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
              accept="image/*"
              ref={fileInputRef} // Attach ref to the file input
            />
            {blogImage && (
              <div className="mt-3">
                <label>Preview:</label>
                {typeof blogImage === "string" ? (
                  // Display image if it's a URL
                  <img
                    src={blogImage}
                    alt="Blog Preview"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                ) : (
                  // Display image preview if it's a file
                  <img
                    src={URL.createObjectURL(blogImage)}
                    alt="Blog Preview"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                )}
              </div>
            )}
          </div>

          {/* ==================================================================================== */}
          <div className="mb-3">
            <label className="form-label">Enter Blog Content:</label>
            <ReactQuill
              value={blogContent}
              onChange={setBlogContent}
              placeholder="Write your blog content here..."
            />
          </div>

          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
