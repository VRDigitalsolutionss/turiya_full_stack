

// ==================================================================================

// src/components/ContactForm.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";


const ContactForm = () => {
  // Define the state for each input field
  const [contact, setContact] = useState({
    name: "",
    contactPerson: "",
    address: "",
    phone: "",
    email: "",
    description: "",
    instructions: "",
    image: null,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const { id } = useParams();
  // ========================================= editor content ==================================================
 



   const fetchData = () => {
    if (id) {
      axios
        .get(BASE_URL + `/contact/${id}`)
        .then((response) => {
          console.log("response contact", response);
          
          // Setting the contact data to state
          setContact({
            name: response.data.data.name || "",
            contactPerson: response.data.data.contactPerson || "",
            address: response.data.data.address || "",
            phone: response.data.data.phone || "",
            email: response.data.data.email || "",
            description: response.data.data.description || "",
            instructions: response.data.data.instructions || "",
            // image: response.data.data.image || "",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };


  useEffect(() => {
    fetchData();
  }, [id]); // Assuming `id` is dynamic and may change




  const [editorContent, setEditorContent] = useState("");

  // Define the toolbar and other settings in the `modules` object
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"], // This adds a button to remove formatting
    ],
  };

  // Define the formats allowed by the editor in the `formats` array
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];


  const handleEditorChange = (content) => {
    setEditorContent(content);
    // Slider_Paragraph: extractedText,
    // const content3 = getTextBetweenTags(content);
    // setabout_Second_Section((prevState) => ({
    //   ...prevState,

    //   about_Second_Section_Peragraph_Content: content3,
    // }));
  };

  // ==============================================================================================================

  const [file, setFile] = useState('');
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };


  const handleChangeImage = (e) => {
      // Handle image change
      const file = e.target.files[0]; // Get the selected file
    setContact({ ...contact, image: file });
    setFile(file)
  }
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
console.log("contact",contact)
// Create a new FormData object
const formData = new FormData();
formData.append('name', contact.name);
formData.append('contactPerson', contact.contactPerson);
formData.append('address', contact.address);
formData.append('phone', contact.phone);
formData.append('email', contact.email);
formData.append('description', contact.description);
formData.append('instructions', contact.instructions);
formData.append('file', file.name); // Image file

    
  // Append the actual file, not just the file name
  if (contact.image) {
    formData.append('file', file.name); // Correctly append the file object
  }

  // Debugging: Check all form data entries
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }
    console.log("formData",formData);
  //   console.log("file",file.name)
  // console.log("formData",formData);

    if (id) {
      try {
        const response = await axios.put(
          BASE_URL + `/edit_contact/${id}`,
          formData
        );
        alert("Contact updated successfully");
        setSuccess("Contact updated successfully");
        if (response.status == 200) {
          alert("Contact updated successfully");
        }
        console.log("response", response);
        // Optionally reset the form
        setContact({
          name: "",
          contactPerson: "",
          address: "",
          phone: "",
          email: "",
          description: "",
          instructions: "",
          image: "",
        });
      } catch (err) {
        setError(
          "Failed to update contact: " + err.response?.data?.message ||
            err.message
        );
      }
    }
    try {
      const response = await axios.post(
        BASE_URL +  "/add_contact",
        formData
      );
      alert("Contact created successfully");
      setSuccess("Contact created successfully");
      if (response.status == 200) {
        alert("Contact created successfully");
      }
      console.log("response", response);
      // Optionally reset the form
      setContact({
        name: "",
        contactPerson: "",
        address: "",
        phone: "",
        email: "",
        description: "",
        instructions: "",
        image: "",
      });
    } catch (err) {
      setError(
        "Failed to create contact: " + err.response?.data?.message ||
          err.message
      );
    }
  };

  return (
    <div>
      <h2 className="my-3">Create Contact</h2>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>} */}

      <div className="card p-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Contact Person:</label>
            <input
              type="text"
              name="contactPerson"
              value={contact.contactPerson}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={contact.address}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={contact.description}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Instructions:</label>
            <input
              type="text"
              name="instructions"
              value={contact.instructions}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Image URL (optional):</label>
            <input
              type="file"
              name="image"
         
              onChange={handleChangeImage}
              className="form-control"
            />
          </div>

          
          {/* <ReactQuill
              value={editorContent}
              onChange={handleEditorChange}
              modules={modules} // Pass the modules prop
              formats={formats} // Pass the formats prop
              // style={{ marginBottom: "10px" }}

              style={{ height: "100px", marginBottom: "30px" }}
              placeholder="Enter Your Content here..."
            /> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
