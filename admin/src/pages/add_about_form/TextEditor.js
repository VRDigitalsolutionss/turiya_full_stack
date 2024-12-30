import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill stylesheet

function TextEditor() {
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
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h2>Edit About History Section</h2>
          <div className="col-sm-6">
            <label>Slider Paragraph:</label>
            <ReactQuill
              value={editorContent}
              onChange={handleEditorChange}
              modules={modules} // Pass the modules prop
              formats={formats} // Pass the formats prop
              style={{ marginBottom: "10px" }}
            />
          </div>

          <div className="col-sm-6">
            <label>Slider Paragraph:</label>
            <ReactQuill
              value={editorContent}
              onChange={handleEditorChange}
              modules={modules} // Pass the modules prop
              formats={formats} // Pass the formats prop
              style={{ marginBottom: "10px" }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <label>Slider Video Link:</label>
          <input
            type="url"
            placeholder="Enter video link"
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div className="col-sm-6">
          <label>Slide Image:</label>
          <input type="file" style={{ width: "100%", marginBottom: "10px" }} />
        </div>
        <button
          style={{
            padding: "10px 20px",
            background: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}>
          Submit
        </button>
      </div>
    </>
  );
}

export default TextEditor;
