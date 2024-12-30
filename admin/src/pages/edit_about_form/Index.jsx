import React, { useState } from "react";
import TextEditor from "./TextEditor";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./comman.scss";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const useNavigate = useNavigate();
  const token = localStorage.getItem("token");

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
  const [editorContent1, setEditorContent1] = useState("");
  const [editorContent2, setEditorContent2] = useState("");
  const [editorContent3, setEditorContent3] = useState("");

  const handleEditorChange1 = (content) => {
    setEditorContent1(content);
    // Slider_Paragraph: extractedText,

    setEdit_About_History_Section((prevState) => ({
      ...prevState,

      Slider_Paragraph: content,
    }));
  };

  const handleEditorChange2 = (content) => {
    setEditorContent2(content);
    // Slider_Paragraph: extractedText,
    const content2 = getTextBetweenTags(content);
    setAboutFirstSection((prevState) => ({
      ...prevState,

      about_First_Section_Peragraph_Content: content2,
    }));
  };

  const handleEditorChange3 = (content) => {
    setEditorContent3(content);
    // Slider_Paragraph: extractedText,
    const content3 = getTextBetweenTags(content);
    setabout_Second_Section((prevState) => ({
      ...prevState,

      about_Second_Section_Peragraph_Content: content3,
    }));
  };

  const handle_edit_slider_Paragraph_value = (content) => {
    setEditorContent(content);
  };

  // ==============================================================================================
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [image, setImage] = useState(null);

  const [aboutFirstSection, setAboutFirstSection] = useState({
    about_First_Section_heading: "",
    about_First_Section_Sub_Peragraph: "",
    about_First_Section_Peragraph_Content: "",
  });

  const [edit_About_History_Section, setEdit_About_History_Section] = useState({
    Slider_Heading: "",
    Slider_Paragraph: "",
    Slider_videolink: "",
    Slide_Image: "",
  });

  const [about_Second_Section, setabout_Second_Section] = useState({
    about_Second_Section_Heading: "",
    about_Second_Section_Sub_Peragraph: "",
    about_Second_Section_Peragraph_Content: "",
  });

  const [metaContent, setmetaContent] = useState({
    meta_Title: "",
    meta_Description: "",
    meta_Keywords: "",
  });

  const Handle_EditAbout_History_Section = (e) => {
    const { name, value } = e.target;

    // Use the previous state to update the specific field
    setEdit_About_History_Section((prevState) => ({
      ...prevState, // Spread the previous state
      [name]: value, // Update the value of the specific field
    }));
  };

  const Handle_AboutFirstSection = (e) => {
    const { name, value } = e.target;

    // Use the previous state to update the specific field
    setAboutFirstSection((prevState) => ({
      ...prevState, // Spread the previous state
      [name]: value, // Update the value of the specific field
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setEdit_About_History_Section((prevState) => ({
      ...prevState,

      Slide_Image: e.target.files[0],
    }));
  };

  const getTextBetweenTags = (htmlString) => {
    const match = htmlString.match(/<p>(.*?)<\/p>/);
    return match ? match[1] : "";
  };

  const handle_About_Second_Section = (e) => {
    const { name, value } = e.target;

    // Use the previous state to update the specific field
    setabout_Second_Section((prevState) => ({
      ...prevState, // Spread the previous state
      [name]: value, // Update the value of the specific field
    }));
  };
  // Example usage
  const htmlString = "<p>ewrtrewrtrt</p>";

  const handleMetaContent = (e) => {
    const { name, value } = e.target;

    // Use the previous state to update the specific field
    setmetaContent((prevState) => ({
      ...prevState, // Spread the previous state
      [name]: value, // Update the value of the specific field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("edit", edit_About_History_Section);
    console.log("first_section", aboutFirstSection);
    console.log("last_section", about_Second_Section);
    console.log("meta", metaContent);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#fff", padding: "20px" }}>
        <div className="row">
          <div className="form_heading_box">
            <h4 className="form_heading"> Edit About History Section new</h4>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Slider Heading:</label>
            <textarea
              name="Slider_Heading"
              value={aboutFirstSection.Slider_Heading}
              onChange={Handle_EditAbout_History_Section}
              style={{
                width: "100%",
                minHeight: "150px",
                marginBottom: "10px",
              }}
              class="form-control"
            />

            {/* ========================================== */}

            {/* ==================================================== */}
          </div>
          <div className="col-sm-6">
            <label className="form-label">Slider Paragraph: new</label>

            <ReactQuill
              value={editorContent1}
              onChange={handleEditorChange1}
              modules={modules}
              formats={formats}
              style={{ height: "200px" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label className="form-label">Slider Video Link:</label>
            <textarea
              type="text"
              name="Slider_videolink" // Set the name attribute correctly to match the state key
              value={edit_About_History_Section.Slider_videolink}
              className="form-control"
              onChange={Handle_EditAbout_History_Section}
              style={{ width: "100%", minHeight: "50px", marginBottom: "10px" }}
            />
          </div>
          <div className="col-sm-6">
            <label for="formFileSm" class="form-label">
              Slide Image:
            </label>
            <input
              type="file"
              class="form-control form-control-sm"
              onChange={handleImageChange}
              style={{ width: "100%", marginBottom: "10px" }}
              id="formFileSm"
            />
          </div>
        </div>
        {/* =========================== */}
        <div className="row mt-4">
          <div className="form_heading_box">
            <h4 className="form_heading">About First Section</h4>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Heading :</label>
            <textarea
              value={aboutFirstSection.about_First_Section_heading}
              onChange={Handle_AboutFirstSection}
              style={{
                width: "100%",
                minHeight: "150px",
                marginBottom: "10px",
              }}
              class="form-control"
              name="about_First_Section_heading"
            />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Sub Peragraph :</label>
            <input
              type="text"
              className="form-control"
              id="Sub Peragraph :"
              name="about_First_Section_Sub_Peragraph"
              value={aboutFirstSection.about_First_Section_Sub_Peragraph}
              onChange={Handle_AboutFirstSection}
            />
          </div>
          <div className="col-sm-12 mt-4">
            <label className="form-label"> Peragraph Content :</label>

            <ReactQuill
              value={editorContent2}
              onChange={handleEditorChange2}
              modules={modules} // Pass the modules prop
              formats={formats} // Pass the formats prop
              style={{ marginBottom: "10px" }}
            />
          </div>
        </div>
        {/* =================================================== */}
        <div className="row mt-4">
          <div className="form_heading_box">
            <h4 className="form_heading">About Seacond Section</h4>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Heading :</label>
            <textarea
              value={about_Second_Section.about_Second_Section_Heading}
              onChange={handle_About_Second_Section}
              style={{
                width: "100%",
                minHeight: "150px",
                marginBottom: "10px",
              }}
              class="form-control"
              name="about_Second_Section_Heading"
            />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Sub Peragraph :</label>
            <input
              type="text"
              className="form-control"
              id="Sub Peragraph :"
              onChange={handle_About_Second_Section}
              name="about_Second_Section_Sub_Peragraph"
              value={about_Second_Section.about_Second_Section_Sub_Peragraph}
            />
          </div>
          <div className="col-sm-12 mt-4">
            <label className="form-label"> Peragraph Content :</label>

            <ReactQuill
              value={editorContent3}
              onChange={handleEditorChange3}
              modules={modules} // Pass the modules prop
              formats={formats} // Pass the formats prop
              style={{ marginBottom: "10px" }}
            />
          </div>
        </div>
        {/* =========================================== */}
        <div className="row mt-4">
          <div className="form_heading_box">
            <h4 className="form_heading">Meta Content</h4>
          </div>
          <div className="col-sm-12">
            <label className="form-label">Meta Title :</label>
            <textarea
              value={metaContent.meta_Title}
              onChange={handleMetaContent}
              name="meta_Title"
              style={{
                width: "100%",
                minHeight: "150px",
                marginBottom: "10px",
              }}
              class="form-control"
            />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Meta Description:</label>
            <input
              type="text"
              className="form-control"
              value={metaContent.meta_Description}
              onChange={handleMetaContent}
              name="meta_Description"
            />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Meta Keywords:</label>
            <input
              type="text"
              className="form-control"
              value={metaContent.meta_Keywords}
              onChange={handleMetaContent}
              name="meta_Keywords"
            />
          </div>

          <div className="col-sm-12">
            <button className="btn btn-info mt-3" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
