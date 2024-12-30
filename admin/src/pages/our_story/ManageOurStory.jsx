import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../add_about_form/comman.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BASE_URL_IMAGE } from "../../config";



const ManageOurStory = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { id } = useParams();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

    useEffect(() => {
        if (id) {
            axios
            .get(BASE_URL + `/our_story/${id}`)
            .then((response) => {
              console.log("response received", response.data.data);
      
              const data = response.data.data;
      
              // Set values for `edit_About_History_Section`
              setEdit_About_History_Section({
                Slider_Heading: data.Slider_Heading || "",
                Slider_Paragraph: data.Slider_Paragraph || "",
                Slider_videolink: data.Slider_videolink || "",
                Slide_Image: data.Slide_Image || "",
              });
              // setImage(data.Slide_Image || "")
              setEditorContent1(data.Slider_Paragraph || "");
              setEditorContent3(data.about_Second_Section_Peragraph_Content || "");
              // Set values for `aboutFirstSection`
              setAboutFirstSection({
                about_First_Section_heading: data.about_First_Section_heading || "",
                about_First_Section_Sub_Peragraph:
                  data.about_First_Section_Sub_Peragraph || "",
                about_First_Section_Peragraph_Content:
                  data.about_First_Section_Peragraph_Content || "",
              });
      
              // Set values for `about_Second_Section`
              setabout_Second_Section({
                about_Second_Section_Heading: data.about_Second_Section_Heading || "",
                about_Second_Section_Sub_Peragraph:
                  data.about_Second_Section_Sub_Peragraph || "",
                about_Second_Section_Peragraph_Content:
                  data.about_Second_Section_Peragraph_Content || "",
              });
      
              // Set values for `metaContent`
              setmetaContent({
                meta_Title: data.meta_Title || "",
                meta_Description: data.meta_Description || "",
                meta_Keywords: data.meta_Keywords || "",
              });
      
              // Set other individual states if needed
              setHeading(data.Slider_Heading || "");
              setParagraph(data.Slider_Paragraph || "");
              setVideoLink(data.Slider_videolink || "");
              setImage(data.Slide_Image || null);
              setEditorContent2(data.Slider_Paragraph || null);
              // setEditorContent3(data.Slider_Paragraph || null);
            })
            .catch((error) => {
              console.log(error);
            });
      }

  }, []);

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

  // const Handle_AboutFirstSection = (e) => {
  //   const { name, value } = e.target;

  //   // Use the previous state to update the specific field
  //   setAboutFirstSection((prevState) => ({
  //     ...prevState, // Spread the previous state
  //     [name]: value, // Update the value of the specific field
  //   }));
  // };

  // =========================== new added code =================`

  const Handle_AboutFirstSection = (e) => {
    const { name, value } = e.target;

    // Use the previous state to update the specific field
    setAboutFirstSection((prevState) => ({
      ...prevState, // Spread the previous state
      [name]: value, // Update the value of the specific field
    }));
  };
  const [imagePreview, setImagePreview] = useState(null);
  // =================================================================
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
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

  // ======================================================================================================================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();

    // Append fields for the Slider Section
    formData.append(
      "Slider_Heading",
      edit_About_History_Section.Slider_Heading
    );
    formData.append(
      "Slider_Paragraph",
      edit_About_History_Section.Slider_Paragraph
    );
    formData.append(
      "Slider_videolink",
      edit_About_History_Section.Slider_videolink
    );
    formData.append("Slide_Image", image); // Add image file

    // Append fields for the About First Section
    formData.append(
      "about_First_Section_heading",
      aboutFirstSection.about_First_Section_heading
    );
    formData.append(
      "about_First_Section_Sub_Peragraph",
      aboutFirstSection.about_First_Section_Sub_Peragraph
    );
    formData.append(
      "about_First_Section_Peragraph_Content",
      aboutFirstSection.about_First_Section_Peragraph_Content
    );

    // Append fields for the About Second Section
    formData.append(
      "about_Second_Section_Heading",
      about_Second_Section.about_Second_Section_Heading
    );
    formData.append(
      "about_Second_Section_Sub_Peragraph",
      about_Second_Section.about_Second_Section_Sub_Peragraph
    );
    formData.append(
      "about_Second_Section_Peragraph_Content",
      about_Second_Section.about_Second_Section_Peragraph_Content
    );

    // Append fields for Meta Content
    formData.append("meta_Title", metaContent.meta_Title);
    formData.append("meta_Description", metaContent.meta_Description);
    formData.append("meta_Keywords", metaContent.meta_Keywords);

    // Append status (if required)
    formData.append("status", "active");

    if (id) {
      try {
        // Send a POST request to the API endpoint
        const response = await axios.put(
          `http://127.0.0.1:7000/api/edit_our_story/${id}`,
          formData
        );

        // Handle success
        console.log("Data submitted successfully:", response.data);
        console.log("Data submitted successfully:", response.status);

        if (response.status === 200) {
          alert("Success");

          setEdit_About_History_Section({
            Slider_Heading: "",
            Slider_Paragraph: "",
            Slider_videolink: "",
            Slide_Image: "",
          });

          setabout_Second_Section({
            about_Second_Section_Heading: "",
            about_Second_Section_Sub_Peragraph: "",
            about_Second_Section_Peragraph_Content: "",
          });

          setmetaContent({
            meta_Title: "",
            meta_Description: "",
            meta_Keywords: "",
          });

          setEdit_About_History_Section({
            Slider_Heading: "",
            Slider_Paragraph: "",
            Slider_videolink: "",
            Slide_Image: "",
          });

          setabout_Second_Section({
            about_Second_Section_Heading: "",
            about_Second_Section_Sub_Peragraph: "",
            about_Second_Section_Peragraph_Content: "",
          });

          setmetaContent({
            meta_Title: "",
            meta_Description: "",
            meta_Keywords: "",
          });


          setAboutFirstSection({
            about_First_Section_heading: "",
            about_First_Section_Sub_Peragraph: "",
            about_First_Section_Peragraph_Content: "",
          });


          setImage(null);
          setEditorContent1("");
          setEditorContent2("");
          setEditorContent3("");
         
        } else {
          alert("Failed");
        }
      } catch (error) {
        // Handle error
        console.error("Error submitting data:", error);
      }
    } else {
      try {
        // Send a POST request to the API endpoint
        const response = await axios.post(
          "http://127.0.0.1:7000/api/add_our_story/",
          formData
        );

        // Handle success
        console.log("Data submitted successfully:", response.data);
        console.log("Data submitted successfully:", response.status);

        if (response.status === 201) {
          alert("Success");
// navigate('/component/alert')
          setEdit_About_History_Section({
            Slider_Heading: "",
            Slider_Paragraph: "",
            Slider_videolink: "",
            Slide_Image: "",
          });

          setabout_Second_Section({
            about_Second_Section_Heading: "",
            about_Second_Section_Sub_Peragraph: "",
            about_Second_Section_Peragraph_Content: "",
          });

          setmetaContent({
            meta_Title: "",
            meta_Description: "",
            meta_Keywords: "",
          });

          setEdit_About_History_Section({
            Slider_Heading: "",
            Slider_Paragraph: "",
            Slider_videolink: "",
            Slide_Image: "",
          });

          setabout_Second_Section({
            about_Second_Section_Heading: "",
            about_Second_Section_Sub_Peragraph: "",
            about_Second_Section_Peragraph_Content: "",
          });

          setmetaContent({
            meta_Title: "",
            meta_Description: "",
            meta_Keywords: "",
          });

          setAboutFirstSection({
            about_First_Section_heading: "",
            about_First_Section_Sub_Peragraph: "",
            about_First_Section_Peragraph_Content: "",
          });

          setImage(null);
          setEditorContent1("");
          setEditorContent2("");
          setEditorContent3("");
        } else {
          alert("Failed");
        }
      } catch (error) {
        // Handle error
        console.error("Error submitting data:", error);
      }
    }
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#fff", padding: "20px" }}>
        <div className="row">
          <div className="form_heading_box">
            <h4 className="form_heading"> Edit About History Section</h4>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Slider Heading:</label>
            <textarea
              name="Slider_Heading"
              value={edit_About_History_Section.Slider_Heading}
              onChange={Handle_EditAbout_History_Section} // Use the correct function
              style={{
                width: "100%",
                minHeight: "150px",
                marginBottom: "10px",
              }}
              className="form-control"
            />

            {/* ========================================== */}

            {/* ==================================================== */}
          </div>
          <div className="col-sm-6">
            <label className="form-label">Slider Paragraph:</label>

            <ReactQuill
              value={editorContent1}
              onChange={handleEditorChange1}
              modules={modules}
              formats={formats}
              style={{ height: "100px" }}
              placeholder="Enter Your Content here..."
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
             {/* {imagePreview || image ? (
      <div style={{ marginBottom: "10px" }}>
        <img
          src={imagePreview || `http://127.0.0.1:7000/uploads/${image}`}
          alt="Slider"
          style={{ width: "100px", height: "auto", marginBottom: "10px" }}
        />
      </div>
    ) : null} */}
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
              style={{ height: "100px", marginBottom: "30px" }}
              placeholder="Enter Your Content here..."
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
              // style={{ marginBottom: "10px" }}

              style={{ height: "100px", marginBottom: "30px" }}
              placeholder="Enter Your Content here..."
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

export default ManageOurStory;
