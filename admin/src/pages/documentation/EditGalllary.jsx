// import React, { useState } from 'react';

// const EditGallery = () => {
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("File:", file);
//     console.log("Name:", name);
//     alert("submited successfully");
//     setFile(null);
//     setName('');
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <div className="card p-4 shadow-sm" style={{border:'none'}}>
//         <h4 className="mb-4">Manage Gallery</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Upload Gallery Images:</label>
//             <input
//               type="file"
//               className="form-control"
//               onChange={handleFileChange}

//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Enter Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={handleNameChange}
//             />
//           </div>
//           <button type="submit" className="btn btn-info">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditGallery;

// ======================================================================================================

// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';

// const EditGallery = () => {
//   const [file, setFile] = useState('');
//   const [name, setName] = useState("");
//   const fileInputRef = useRef(null); // Create a ref for the file input

//   const paramsId = '673d8a0346ef22e9eee7c423';

//   useEffect(() => {

//     if (paramsId) {
//       axios.get('http://127.0.0.1:7000/api/gallery/673d8a0346ef22e9eee7c423').then((response) => {
//         console.log(response.data.data);

//         // setFile(response.data.data.file);

//         setName(response.data.data.name);

//         if (fileInputRef.current) {
//           fileInputRef.current.value = response.data.data.file; // Reset the file input field
//         }
//       }).catch((err) => {
//         console.log(err);
//       });
//     } else {
//       // Reset form fields if no paramsId is provided
//       setFile(null);
//       setName('');
//       if (fileInputRef.current) {
//         fileInputRef.current.value = ''; // Reset file input field
//       }
//     }

//   }, []);

//   // ===============================================================================================

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:7000/api/gallery/673d8a0346ef22e9eee7c423")
//       .then((response) => {
//         console.log(response.data.data);

//         setName(response.data.data.name);

//         // If the response includes a file URL
//         if (response.data.data.file) {
//           setFile(response.data.data.file); // Store the file URL in state
//         }

//         // setFileUrl(response.data.data.file);

//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   // =========================================================================================================

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("File:", file);
//     console.log("Name:", name);

//     // ====================================================================================================

//     if (name && file ) {
//       const payload = {
//         "name": name,
//         "file":file.name
//     }
//           axios.post('http://127.0.0.1:7000/api/add_gallery',payload).then((response) => {
//             console.log(response);

//             if(response.status == 201){
//               alert("Gallery Added successfully");

//               // Clear the file input and name field
//               setFile(null);
//               setName("");
//               if (fileInputRef.current) {
//                 fileInputRef.current.value = ""; // Reset the file input field
//               }

//             } else {
//               alert("something went wrong")
//             }

//           }).catch((err) => {
//             console.log(err);
//           });

//     } else {
//       alert("All fields are required");
//     }
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <div className="card p-4 shadow-sm" style={{ border: 'none' }}>
//         <h4 className="mb-4">Manage Gallery</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Upload Gallery Images:</label>
//             <input
//               type="file"
//               className="form-control"
//               onChange={handleFileChange}
//               ref={fileInputRef} // Attach the ref to the file input
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Enter Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={handleNameChange}
//             />
//           </div>
//           <button type="submit" className="btn btn-info">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditGallery;

// ====================================================================================================

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

const EditGallery = () => {
  const [fileUrl, setFileUrl] = useState(""); // For existing file URL
  const [name, setName] = useState("");
  const fileInputRef = useRef(null); // Ref for the file input

  const { id } = useParams();
  // Example parameter ID
  console.log("paramsId: ", id);

  // ===========================================================================================
  useEffect(() => {
    if (id) {
      axios
        .get(BASE_URL + `/gallery/${id}`)
        .then((response) => {
          console.log("response params id", response);
          const data = response.data.data;

          // Set the name field
          setName(data.name);

          // Set the file URL (assume API returns file URL for existing image)
          setFileUrl(data.file);
        })
        .catch((err) => {
          console.error("Error fetching gallery data:", err);
        });
    } else {
      // Reset form fields if no paramsId is provided
      // setFileUrl("");
      // setName("");
      // if (fileInputRef.current) {
      //   fileInputRef.current.value = ""; // Reset file input field
      // }
    }
  }, [id]); // Dependency array to run effect when `id` changes

  // ============================================================================================================

  // useEffect(() => {
  //   if (id) {
  //     axios
  //       .get(`http://127.0.0.1:7000/api/gallery/${id}`)
  //       .then((response) => {
  //         console.log("response params id", response);
  //         const data = response.data.data;

  //         // Set the name field
  //         setName(data.name);

  //         // Set the file URL (assume API returns file URL)
  //         setFileUrl(data.file);
  //         fileInputRef.current.files[0]
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     // Reset form fields if no paramsId is provided
  //     // setFileUrl("");
  //     // setName("");
  //     // if (fileInputRef.current) {
  //     //   fileInputRef.current.value = ""; // Reset file input field
  //     // }
  //   }
  // }, []);

  const handleFileChange = (e) => {
    setFileUrl(URL.createObjectURL(e.target.files[0])); // For previewing new file
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log("name", name);
  //   console.log("file", fileUrl);
  //   // Create a FormData object

  //   if (name && fileUrl) {
  //     const formData = new FormData();
  //     formData.append("name", name);
  //     formData.append("file", fileUrl);
  //     console.log("formData", formData);

  //     try {
  //       // Send the data to the API
  //       const response = await axios.post(
  //         "http://127.0.0.1:7000/api/add_gallery",
  //         formData
  //       );

  //       console.log("Response:", response);
  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //     }

  //   } else {
  //     alert("Something went wrong");
  //   }

  // };

  // =========================================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && fileUrl) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", fileInputRef.current.files[0]);

      if (id) {
        // Update gallery
        axios
          .put(BASE_URL + `/edit_gallery/${id}`, formData)
          .then((response) => {
            console.log("Response:", response.status);
            if (response.status === 200) {
              alert("Gallery updated successfully");

              setFileUrl("");
              setName("");
              if (fileInputRef.current) {
                fileInputRef.current.value = ""; // Reset file input field
              }
            } else {
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      } else {
        try {
          const response = await axios.post(
            BASE_URL + "/add_gallery",
            formData
          );
          console.log("Response:", response.status);
          if (response.status === 201) {
            alert("gallery added successfully");
            // Reset form fields if no paramsId is provided
            setFileUrl("");
            setName("");
            if (fileInputRef.current) {
              fileInputRef.current.value = ""; // Reset file input field
            }
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    } else {
      alert("Please provide both a name and file.");
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <h4 className="mb-4">Manage Gallery</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Upload Gallery Images:</label>
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={handleFileChange}
              ref={fileInputRef} // Attach the ref to the file input
            />
            {id && fileUrl && (
              <div style={{ maxWidth: "100px" }}>
                <p>Preview:</p>
                <img
                  src={fileUrl}
                  alt="Preview"
                  style={{
                    maxWidth: "100px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    padding: "5px",
                  }}
                />
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Enter Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={handleNameChange}
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

export default EditGallery;

// ==================================================================================================
