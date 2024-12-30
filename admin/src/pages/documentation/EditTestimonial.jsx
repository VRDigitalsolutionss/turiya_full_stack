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


import React, { useState, useRef } from 'react';

const ManageFeedback = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [feedbackContent, setFeedbackContent] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null); // Ref for the file input

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setPreviewImage(URL.createObjectURL(file)); // Preview image
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Designation:", designation);
    console.log("Feedback Content:", feedbackContent);
    console.log("Profile Image:", profileImage ? profileImage.name : "No file selected");

    // Clear all input fields
    setName('');
    setDesignation('');
    setFeedbackContent('');
    setProfileImage(null);
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset the file input
    }

    alert("Submitted successfully");
  };

  return (
    <div className="container mt-5">
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
              ref={fileInputRef} // Attach ref to the file input
            />
          </div>
          {previewImage && (
            <div className="mt-3">
              <img src={previewImage} alt="Preview" width="100" height="100" className="rounded-circle" />
            </div>
          )}
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ManageFeedback;
