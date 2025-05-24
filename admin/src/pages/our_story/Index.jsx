import React, { useState } from "react";
import TextEditor from "./TextEditor";
const Index = () => {
  const useNavigate = useNavigate();
  const token = localStorage.getItem("token");

  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      heading,
      paragraph,
      videoLink,
      image,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
          maxWidth: "600px",
          margin: "auto",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}>
        <h2>Edit About History Section</h2>

        <label>Slider Heading:</label>
        <textarea
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          style={{ width: "100%", minHeight: "50px", marginBottom: "10px" }}
        />

        <label>Slider Paragraph:</label>
        <TextEditor />

        <label>Slider Video Link:</label>
        <input
          type="url"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Slide Image:</label>
        <input
          type="file"
          onChange={handleImageChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Index;
