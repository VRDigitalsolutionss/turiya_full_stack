// import React, { useState } from "react";

// const ManageFeedback = () => {
//   const [formData, setFormData] = useState({
//     feedbackType: "Turiya Yogalehrer Ausbildung",
//     youtubeLink: "",
//     feedbackContent: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleOptionChange = (e) => {
//     setFormData({ ...formData, feedbackType: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);

//   };

//   return (
//     <div className="container-fluid mt-2">
//       <div className="card shadow-sm p-3" style={{border:"none"}}>
//         <div className="bg-light p-3">
//           <h4>Manage Feedback</h4>
//         </div>
//         <div className="card-body">
//           <form onSubmit={handleSubmit}>
//             {/* Feedback Type Selection */}
//             <div className="form-group mb-3">
//               <label className="form-label d-block">Feedback Type:</label>
//               <div className="form-check mb-3">
//                 <input
//                   type="radio"
//                   name="feedbackType"
//                   value="Turiya Yogalehrer Ausbildung"
//                   checked={formData.feedbackType === "Turiya Yogalehrer Ausbildung"}
//                   onChange={handleOptionChange}
//                   className="form-check-input"
//                 />
//                 <label className="form-check-label">
//                   Turiya Yogalehrer Ausbildung
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   type="radio"
//                   name="feedbackType"
//                   value="Manu & Suzana als Ausbilder | Indien"
//                   checked={formData.feedbackType === "Manu & Suzana als Ausbilder | Indien"}
//                   onChange={handleOptionChange}
//                   className="form-check-input"
//                 />
//                 <label className="form-check-label">
//                   Manu & Suzana als Ausbilder | Indien
//                 </label>
//               </div>
//             </div>

//             {/* YouTube Video Link */}
//             <div className="form-group mb-4 mt-4">
//               <label htmlFor="youtubeLink">Enter YouTube Video Link:</label>
//               <textarea
//                 id="youtubeLink"
//                 name="youtubeLink"
//                 value={formData.youtubeLink}
//                 onChange={handleInputChange}
//                 className="form-control mt-2"
//                 rows="3"
//                 placeholder="Paste YouTube embed code here"
//               ></textarea>
//             </div>

//             {/* Feedback Content */}
//             <div className="form-group mb-4">
//               <label htmlFor="feedbackContent">Feedback Content:</label>
//               <textarea
//                 id="feedbackContent"
//                 name="feedbackContent"
//                 value={formData.feedbackContent}
//                 onChange={handleInputChange}
//                 className="form-control mt-2"
//                 rows="3"
//                 placeholder="Enter feedback content here"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageFeedback;

// ==============================================================================

// import React, { useState, useRef, useEffect } from "react";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// const ManageFeedback = () => {
//   const [formData, setFormData] = useState({
//     feedbackType: "Turiya Yogalehrer Ausbildung",
//     youtubeLink: "",
//     feedbackContent: "",
//   });

//   const fileInputRef = useRef(null); // Ref for file input (if needed)

//   const { id } = useParams();

  
//   // ==================================================================================================================


//   useEffect(() => {
//     if (id) {
//       // Fetch data based on the provided ID
//       axios
//         .get(`http://127.0.0.1:7000/api/Videotestimonial/${id}`)
//         .then((response) => {
//           const data = response.data.data;

//           // Update formData with the response
//           setFormData({
//             feedbackType: data.feedbackType || "Turiya Yogalehrer Ausbildung", // Default if not provided
//             youtubeLink: data.youtubeLink || "",
//             feedbackContent: data.feedbackContent || "",
//           });
//         })
//         .catch((err) => {
//           console.log("Error fetching testimonial data:", err);
//         });
//     } else {
//       // Reset form fields if no ID is provided
//       setFormData({
//         feedbackType: "Turiya Yogalehrer Ausbildung",
//         youtubeLink: "",
//         feedbackContent: "",
//       });
//     }
//   }, [id]);



//   // ===========================================================================================================================


//   // const id = useParams();
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleOptionChange = (e) => {
//     setFormData({ ...formData, feedbackType: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);

//     // Reset form inputs
//     setFormData({
//       feedbackType: "Turiya Yogalehrer Ausbildung",
//       youtubeLink: "",
//       feedbackContent: "",
//     });

//     // Reset file input (if any file inputs are added)
//     if (fileInputRef.current) {
//       fileInputRef.current.value = ""; // Reset file input value
//     }

//     // alert("Form submitted successfully!");

//     const payload = {
//       feedbackType: formData.feedbackType,
//       youtubeLink: formData.youtubeLink,
//       feedbackContent: formData.feedbackContent,
//     };

//     // Clear all input fields

//     // ==========================================================================

//     if (id) {
     
//     } else {
//       axios
//         .post(`http://127.0.0.1:7000/api/add_video_testimonial`, payload)
//         .then((response) => {
//           console.log(response.data);
//           console.log("status: ", response.status);

//           if (response.status == 201) {
//             alert("added successfully");
//           } else {
//             alert("somthing went wrong");
//           }

//           setFormData({
//             feedbackType: "Turiya Yogalehrer Ausbildung",
//             youtubeLink: "",
//             feedbackContent: "",
//           });
//         })
//         .catch((err) => {
//           console.log(err);

//           alert("error");
//         });
//     }
//   };

//   return (
//     <div className="container-fluid mt-2">
//       <div className="card shadow-sm p-3" style={{ border: "none" }}>
//         <div className="bg-light p-3">
//           <h4>Manage Feedback</h4>
//         </div>
//         <div className="card-body">
//           <form onSubmit={handleSubmit}>
//             {/* Feedback Type Selection */}
//             <div className="form-group mb-3">
//               <label className="form-label d-block">Feedback Type:</label>
//               <div className="form-check mb-3">
//                 <input
//                   type="radio"
//                   name="feedbackType"
//                   value="Turiya Yogalehrer Ausbildung"
//                   checked={
//                     formData.feedbackType === "Turiya Yogalehrer Ausbildung"
//                   }
//                   onChange={handleOptionChange}
//                   className="form-check-input"
//                 />
//                 <label className="form-check-label">
//                   Turiya Yogalehrer Ausbildung
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   type="radio"
//                   name="feedbackType"
//                   value="Manu & Suzana als Ausbilder | Indien"
//                   checked={
//                     formData.feedbackType ===
//                     "Manu & Suzana als Ausbilder | Indien"
//                   }
//                   onChange={handleOptionChange}
//                   className="form-check-input"
//                 />
//                 <label className="form-check-label">
//                   Manu & Suzana als Ausbilder | Indien
//                 </label>
//               </div>
//             </div>

//             {/* YouTube Video Link */}
//             <div className="form-group mb-4 mt-4">
//               <label htmlFor="youtubeLink">Enter YouTube Video Link:</label>
//               <textarea
//                 id="youtubeLink"
//                 name="youtubeLink"
//                 value={formData.youtubeLink}
//                 onChange={handleInputChange}
//                 className="form-control mt-2"
//                 rows="3"
//                 placeholder="Paste YouTube embed code here"></textarea>
//             </div>

//             {/* Feedback Content */}
//             <div className="form-group mb-4">
//               <label htmlFor="feedbackContent">Feedback Content:</label>
//               <textarea
//                 id="feedbackContent"
//                 name="feedbackContent"
//                 value={formData.feedbackContent}
//                 onChange={handleInputChange}
//                 className="form-control mt-2"
//                 rows="3"
//                 placeholder="Enter feedback content here"></textarea>
//             </div>

//             {/* File Input (if required) */}
//             <div className="form-group mb-4">
//               <label htmlFor="feedbackFile">Upload File (Optional):</label>
//               <input
//                 type="file"
//                 id="feedbackFile"
//                 className="form-control mt-2"
//                 ref={fileInputRef} // Attach ref for file input
//               />
//             </div>

//             {/* Submit Button */}
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageFeedback;


// ======================================================================================================================================


import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

const ManageFeedback = () => {
  const [formData, setFormData] = useState({
    feedbackType: "Turiya Yogalehrer Ausbildung",
    youtubeLink: "",
    feedbackContent: "",
  });

  const [thumbnailUrl, setThumbnailUrl] = useState(null); // State for storing thumbnail URL
  const fileInputRef = useRef(null); // Ref for file input (if needed)
  const { id } = useParams();

  // Fetch data on component mount if ID is provided
  useEffect(() => {
    if (id) {
      axios
        .get(BASE_URL + `/Videotestimonial/${id}`)
        .then((response) => {
          const data = response.data.data;

          setFormData({
            feedbackType: data.feedbackType || "Turiya Yogalehrer Ausbildung",
            youtubeLink: data.youtubeLink || "",
            feedbackContent: data.feedbackContent || "",
          });

          // Set the thumbnail if a YouTube link exists
          if (data.youtubeLink) {
            setThumbnailUrl(getYouTubeThumbnail(data.youtubeLink));
          }
        })
        .catch((err) => {
          console.log("Error fetching testimonial data:", err);
        });
    } else {
      // Reset form fields if no ID is provided
      setFormData({
        feedbackType: "Turiya Yogalehrer Ausbildung",
        youtubeLink: "",
        feedbackContent: "",
      });
      setThumbnailUrl(null); // Reset thumbnail
    }
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "youtubeLink") {
      const thumbnail = getYouTubeThumbnail(value);
      setThumbnailUrl(thumbnail);
    }
  };

  // Extract video ID and return the thumbnail URL
  const getYouTubeThumbnail = (link) => {
    try {
      const videoId = link.split("v=")[1]?.split("&")[0] || link.split("/").pop();
      return `https://img.youtube.com/vi/${videoId}/0.jpg`; // Default thumbnail (0.jpg)
    } catch (err) {
      console.error("Invalid YouTube link:", link);
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    const payload = {
      feedbackType: formData.feedbackType,
      youtubeLink: formData.youtubeLink,
      feedbackContent: formData.feedbackContent,
    };

    if (id) {
      axios
        .put(BASE_URL + `/edit_video_testimonial/${id}`, payload)
        .then((response) => {
          if (response.status) {
            alert("Added successfully");
          } else {
            alert("Something went wrong");
          }
          setFormData({
            feedbackType: "Turiya Yogalehrer Ausbildung",
            youtubeLink: "",
            feedbackContent: "",
          });
          setThumbnailUrl(null); // Clear thumbnail
        })
        .catch((err) => {
          console.log(err);
          alert("Error submitting form");
        });
    } else {
      axios
        .post(BASE_URL + `/add_video_testimonial`, payload)
        .then((response) => {


          console.log("response of adding video testimonial", response)
          if (response.status === 201) {
            alert("Added successfully");
          } else {
            alert("Something went wrong");
          }
          setFormData({
            feedbackType: "Turiya Yogalehrer Ausbildung",
            youtubeLink: "",
            feedbackContent: "",
          });
          setThumbnailUrl(null); // Clear thumbnail
        })
        .catch((err) => {
          console.log(err);
          alert("Error submitting form");
        });
    }
  };

  return (
    <div className="container-fluid mt-2">
      <div className="card shadow-sm p-3" style={{ border: "none" }}>
        <div className="bg-light p-3">
          <h4>Manage Feedback</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Feedback Type Selection */}
            {/* <div className="form-group mb-3">
              <label className="form-label d-block">Feedback Type:</label>
              <div className="form-check mb-3">
                <input
                  type="radio"
                  name="feedbackType"
                  value="Turiya Yogalehrer Ausbildung"
                  checked={
                    formData.feedbackType === "Turiya Yogalehrer Ausbildung"
                  }
                  onChange={handleInputChange}
                  className="form-check-input"
                />
                <label className="form-check-label">
                  Turiya Yogalehrer Ausbildung
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="feedbackType"
                  value="Manu & Suzana als Ausbilder | Indien"
                  checked={
                    formData.feedbackType ===
                    "Manu & Suzana als Ausbilder | Indien"
                  }
                  onChange={handleInputChange}
                  className="form-check-input"
                />
                <label className="form-check-label">
                  Manu & Suzana als Ausbilder | Indien
                </label>
              </div>
            </div> */}
 <div className="form-group mb-3">
      <label className="form-label d-block">Feedback Type:</label>
      <div className="form-check mb-3">
        <input
          type="radio"
          name="feedbackType"
          value="Turiya Yogalehrer Ausbildung"
          checked={formData.feedbackType === "Turiya Yogalehrer Ausbildung"}
          onChange={handleInputChange}
          className="form-check-input"
        />
        <label className="form-check-label">
          Turiya Yogalehrer Ausbildung
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="feedbackType"
          value="Manu & Suzana als Ausbilder | Indien"
          checked={
            formData.feedbackType  === "Manu & Suzana als Ausbilder | Indien"
          }
          onChange={handleInputChange}
          className="form-check-input"
        />
        <label className="form-check-label">
          Manu & Suzana als Ausbilder | Indien
        </label>
      </div>
      </div>
            {/* YouTube Video Link */}
            <div className="form-group mb-4 mt-4">
              <label htmlFor="youtubeLink">Enter YouTube Video Link:</label>
              <textarea
                id="youtubeLink"
                name="youtubeLink"
                value={formData.youtubeLink}
                onChange={handleInputChange}
                className="form-control mt-2"
                rows="3"
                placeholder="Paste YouTube embed code here"
              
              ></textarea>
            </div>

            {/* Display Thumbnail if Available */}
            {/* {thumbnailUrl && (
              <div className="mb-4">
                <label>Video Thumbnail:</label>
                <img
                  src={thumbnailUrl}
                  alt="Video Thumbnail"
                  className="img-fluid mt-2"
                  style={{ maxWidth: "200px" }}
                />
              </div>
            )} */}

            {/* Feedback Content */}
            <div className="form-group mb-4">
              <label htmlFor="feedbackContent">Feedback Content:</label>
              <textarea
                id="feedbackContent"
                name="feedbackContent"
                value={formData.feedbackContent}
                onChange={handleInputChange}
                className="form-control mt-2"
                rows="3"
                placeholder="Enter feedback content here"
              ></textarea>
            </div>

            {/* File Input */}
     

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageFeedback;

