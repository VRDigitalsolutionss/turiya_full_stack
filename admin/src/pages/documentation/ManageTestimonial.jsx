// import React, { useState } from "react";

// const ManageTestimonial = () => {
//   const [name, setName] = useState("");
//   const [designation, setDesignation] = useState("");
//   const [feedbackContent, setFeedbackContent] = useState("");
//   const [profileImage, setProfileImage] = useState(null);

//   const handleFileChange = (e) => {
//     setProfileImage(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Name:", name);
//     console.log("Designation:", designation);
//     console.log("Feedback Content:", feedbackContent);
//     console.log(
//       "Profile Image:",
//       profileImage ? profileImage.name : "No file selected"
//     );
//   };

//   return (
//     <div className="container-fluid mt-2">
//       <div className="card p-4 shadow-sm " style={{ border: "none" }}>
//         <div className="bg-light p-3 mb-3">
//           <h4>Manage Feedback</h4>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Designation:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Feedback content:</label>
//             <textarea
//               className="form-control"
//               rows="4"
//               value={feedbackContent}
//               onChange={(e) => setFeedbackContent(e.target.value)}></textarea>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Profile Image:</label>
//             <input
//               type="file"
//               className="form-control"
//               onChange={handleFileChange}
//             />
//           </div>
//           <button type="submit" className="btn btn-info">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ManageTestimonial;


// ==================================================================================


// import React, { useState } from 'react';

// const ManageFeedback = () => {
//   const [name, setName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [feedbackContent, setFeedbackContent] = useState('');
//   const [profileImage, setProfileImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setProfileImage(file);
//     setPreviewImage(URL.createObjectURL(file)); // Preview image
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Name:", name);
//     console.log("Designation:", designation);
//     console.log("Feedback Content:", feedbackContent);
//     console.log("Profile Image:", profileImage ? profileImage.name : "No file selected");




//   };

//   return (
//     <div className="container mt-5">
//       <div className="card p-4 shadow-sm" style={{border:'none'}}>
//         <h4 className="mb-4">Manage Feedback</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter name"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Designation:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               placeholder="Enter designation"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Feedback content:</label>
//             <textarea
//               className="form-control"
//               rows="4"
//               value={feedbackContent}
//               onChange={(e) => setFeedbackContent(e.target.value)}
//               placeholder="Enter feedback content"
//             ></textarea>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Profile Image:</label>
//             <input
//               type="file"
//               className="form-control"
//               onChange={handleFileChange}
//               accept="image/*"
//             />
//           </div>
//           {previewImage && (
//             <div className="mt-3">
//               <img src={previewImage} alt="Preview" width="100" height="100" className="rounded-circle" />
//             </div>
//           )}
//           <button type="submit" className="btn btn-primary mt-4">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ManageFeedback;


// =======================================================================================================


// import React, { useState, useRef, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// const ManageFeedback = () => {
//   const [name, setName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [feedbackContent, setFeedbackContent] = useState('');
//   const [profileImage, setProfileImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);
//   const fileInputRef = useRef(null); // Ref for the file input


//   const { id } = useParams();
//   // Example parameter ID
//   console.log("paramsId: " , id);
//     useEffect(() => {
//       if (id) {
//         axios
//           .get(`
//            http://127.0.0.1:7000/api/testimonial/${id}`)
//           .then((response) => {
  
//             console.log("response params id",response)
//             const data = response.data.data;
//             setName(data.name);
//             setDesignation(data.designation);
//             setFeedbackContent(data.feedbackContent);
   
//             setProfileImage(data.profileImage);
          
//             // Set the name field
           
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       } else {
//         // Reset form fields if no paramsId is provided
//         setDesignation('');
//         setFeedbackContent('');
      
//         setProfileImage(null);

//       }
//     }, []);
  
  
  
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setProfileImage(file);
//     setPreviewImage(URL.createObjectURL(file)); // Preview image
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Name:", name);
//     console.log("Designation:", designation);
//     console.log("Feedback Content:", feedbackContent);
//     console.log("Profile Image:", profileImage ? profileImage.name : "No file selected");

//     // Clear all input fields
//     setName('');
//     setDesignation('');
//     setFeedbackContent('');
//     setProfileImage(null);
//     setPreviewImage(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = ''; // Reset the file input
//     }

//     alert("Submitted successfully");
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <div className="card p-4 shadow-sm" style={{ border: 'none' }}>
//         <h4 className="mb-4">Manage Feedback</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter name"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Designation:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               placeholder="Enter designation"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Feedback content:</label>
//             <textarea
//               className="form-control"
//               rows="4"
//               value={feedbackContent}
//               onChange={(e) => setFeedbackContent(e.target.value)}
//               placeholder="Enter feedback content"
//             ></textarea>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Profile Image:</label>
//             <input
//               type="file"
//               className="form-control"
//               onChange={handleFileChange}
//               accept="image/*"
//               ref={fileInputRef} // Attach ref to the file input
//             />
//           </div>
//           {previewImage && (
//             <div className="mt-3">
//               <img src={previewImage} alt="Preview" width="100" height="100" className="rounded-circle" />
//             </div>
//           )}
//           <button type="submit" className="btn btn-primary mt-4">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ManageFeedback;


// ==================================================================================



// import React, { useState, useRef, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ManageFeedback = () => {
//   const [name, setName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [feedbackContent, setFeedbackContent] = useState('');
//   const [profileImage, setProfileImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null); // Local preview image
//   const fileInputRef = useRef(null); // Ref for the file input

//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       axios
//         .get(`http://127.0.0.1:7000/api/testimonial/${id}`)
//         .then((response) => {
//           const data = response.data.data;
//           setName(data.name);
//           setDesignation(data.designation);
//           setFeedbackContent(data.feedbackContent);
//           setProfileImage(data.profileImage); // Set profile image from API
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       // Reset form fields if no paramsId is provided
//       // setName('');
//       // setDesignation('');
//       // setFeedbackContent('');
//       // setProfileImage(null);
//     }
//   }, [id]);

//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0]; // Get the first file from the file input
//     setFile(selectedFile); // Update the state with the selected file
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const payload = {
//       "name": name,
//       "designation": designation,
//       "feedbackContent": feedbackContent,
//       "profileImage": file.name
//     };

//     console.log("Name:", name);
//     console.log("Designation:", designation);
//     console.log("Feedback Content:", feedbackContent);
//     console.log("Profile Image:",file);

//     // Clear all input fields

//     // ==========================================================================

//     if (id) {
//       // Update existing feedback
//       axios
//        .put(`http://127.0.0.1:7000/api/edit_testimonial/${id}`,payload)
//        .then((response) => {
//          console.log(response.data);
         
//          alert("Submitted successfully");

//           setName('');
//           setDesignation('');
//           setFeedbackContent('');
//           setProfileImage(null);
//          setPreviewImage(null);
         
//          if (fileInputRef.current) {
//           fileInputRef.current.value = ''; // Reset the file input
//         }

//         })
//        .catch((err) => {
//          console.log(err);
//          alert("something went wrong");
//         });
//     } else {

//       console.log("add payload", payload);
//       axios
//        .post(`http://127.0.0.1:7000/api/add_testimonial`,payload)
//        .then((response) => {
//          console.log(response.data);
         


//          alert("added successfully")
//           setName('');
//           setDesignation('');
//           setFeedbackContent('');
//           setProfileImage(null);
//           setPreviewImage(null);
//         })
//        .catch((err) => {
//          console.log(err);
         
//          alert("error")
//         });
//     }
//   };

//   return (
//     <div className="container-fluid mt-3">
//       <div className="card p-4 shadow-sm" style={{ border: 'none' }}>
//         <h4 className="mb-4">Manage Feedback</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter name"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Designation:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               placeholder="Enter designation"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Feedback content:</label>
//             <textarea
//               className="form-control"
//               rows="4"
//               value={feedbackContent}
//               onChange={(e) => setFeedbackContent(e.target.value)}
//               placeholder="Enter feedback content"
//             ></textarea>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Profile Image:</label>
//             <input
//               type="file"
//               className="form-control"
//               onChange={handleFileChange}
//               accept="image/*"
//               ref={fileInputRef}
//             />
//             {/* Show the preview if a local file is selected */}
//             {previewImage && (
//               <div className="mt-3">
//                 <img
//                   src={previewImage}
//                   alt="Preview"
//                   width="100"
//                   height="100"
//                   className="rounded-circle"
//                 />
//               </div>
//             )}
//             {/* Show the profile image fetched from the API if no local file is selected */}
//             {!previewImage && profileImage && (
//               <div className="mt-3">
//                 <img
//                   src={profileImage}
//                   alt="Fetched Profile"
//                   width="100"
//                   height="100"
//                   className="rounded-circle"
//                 />
//               </div>
//             )}
//           </div>
//           <button type="submit" className="btn btn-primary mt-4">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ManageFeedback;


// ==============================================================================


import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL,BASE_URL_IMAGE } from '../../config';
const ManageFeedback = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [feedbackContent, setFeedbackContent] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // Local preview image
  const fileInputRef = useRef(null); // Ref for the file input

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(BASE_URL + `/testimonial/${id}`)
        .then((response) => {
          const data = response.data.data;
          setName(data.name);
          setDesignation(data.designation);
          setFeedbackContent(data.feedbackContent);
          setProfileImage(data.profileImage); // Set profile image from API
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Reset form fields if no paramsId is provided
      // setName('');
      // setDesignation('');
      // setFeedbackContent('');
      // setProfileImage(null);
    }
  }, [id]);

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the first file from the file input
    setFile(selectedFile); // Update the state with the selected file

    // Generate a local preview of the selected image
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Set the local preview image
      };
      reader.readAsDataURL(selectedFile); // Convert the file to a Data URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData to handle both text and file data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('designation', designation);
    formData.append('feedbackContent', feedbackContent);
    
    if (file) {
      formData.append('profileImage', file); // Append the file to FormData
    } else if (profileImage) {
      formData.append('profileImage', profileImage); // Use the existing profile image if no new file
    }

    if (id) {
      // Update existing feedback
      axios
        .put(BASE_URL + `/edit_testimonial/${id}`, formData)
        .then((response) => {
          console.log(response.data);
          alert('Submitted successfully');

          // Reset the form
          setName('');
          setDesignation('');
          setFeedbackContent('');
          setProfileImage(null);
          setPreviewImage(null);
          setFile(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset the file input
          }
        })
        .catch((err) => {
          console.log(err);
          alert('Something went wrong');
        });
    } else {
      // Add new feedback
      axios
        .post(BASE_URL + '/add_testimonial', formData)
        .then((response) => {
          console.log(response.data);
          alert('Added successfully');

          // Reset the form
          setName('');
          setDesignation('');
          setFeedbackContent('');
          setProfileImage(null);
          setPreviewImage(null);
          setFile(null);
        })
        .catch((err) => {
          console.log(err);
          alert('Error');
        });
    }
  };

  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{ border: 'none' }}>
        <h4 className="mb-4">Manage Feedback</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Designation:</label>
            <input
              type="text"
              className="form-control"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              placeholder="Enter designation"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Feedback content:</label>
            <textarea
              className="form-control"
              rows="4"
              value={feedbackContent}
              onChange={(e) => setFeedbackContent(e.target.value)}
              placeholder="Enter feedback content"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Profile Image:</label>
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
              accept="image/*"
              ref={fileInputRef}
            />
            {/* Show the preview if a local file is selected */}
            {previewImage && (
              <div className="mt-3">
                <img
                  src={previewImage}
                  alt="Preview"
                  width="100"
                  height="100"
                  className="rounded-circle"
                />
              </div>
            )}
            {/* Show the profile image fetched from the API if no local file is selected */}
            {!previewImage && profileImage && (
              <div className="mt-3">
                <img
                  src={profileImage}
                  alt="Fetched Profile"
                  width="100"
                  height="100"
                  className="rounded-circle"
                />
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ManageFeedback;

