import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ImageUploadModal = ({ setShowModal }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleAddImages = async () => {
    if (selectedFiles.length === 0) return alert("No files selected!");

    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("images", file));

    try {
      const response = await axios.post(`${BASE_URL}/uploadimages`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Images uploaded successfully!");
      setUploadedImages(response.data.images); // Reload images
      setSelectedFiles([]); // Clear selected files
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images");
    }
  };

  const handleDelete = async (imageUrl) => {
    try {
      await axios.post(`${BASE_URL}/deleteuploadedimages`, { url: imageUrl });
      setUploadedImages((prev) => prev.filter((img) => img.url !== imageUrl));
      alert("Image deleted successfully!");
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Failed to delete image");
    }
  };

  const fetchUploadedImages = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/uploadedimages`);
      setUploadedImages(response.data.images);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => alert("Link copied to clipboard!"))
      .catch((error) => console.error("Error copying link:", error));
  };


  useEffect(() => {
    fetchUploadedImages();
  }, [])

  return (
    <>
      <div
        className="modal show d-block"
        style={{ background: "rgba(0, 0, 0, 0.5)", zIndex: "1000000" }}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Manage Images</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <div className="row d-flex justify-content-between">
                  <div className="col-lg-8 col-md-6 col-12 col-12">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="form-control mb-2"
                    />
                  </div>
                  <button
                    className="btn btn-success py-0 col-lg-3 col-md-6 col-12"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddImages();
                    }}
                  >
                    Add Images
                  </button>
                </div>
                {/* Show Selected Images */}
                <div className="mt-3">
                  <h6>Selected Images:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedFiles.length > 0 ? (
                      selectedFiles.map((file, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(file)}
                          alt="Selected"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      ))
                    ) : (
                      <p>No files selected</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Images Table */}
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>URL</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {uploadedImages.length > 0 ? (
                    uploadedImages.map((image, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={image.url}
                            alt="Uploaded"
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td>{image.url}</td>
                        <td className=" d-flex justify-content-between">
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDelete(image.url)
                            }}
                          >
                            <MdDelete/>
                          </button>
                          <button
                            className="btn btn-info ml-2 text-white"
                            onClick={(e) => {
                              e.preventDefault();
                              handleCopyLink(image.url);
                            }}
                          >
                            <FaCopy/>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center">
                        No images available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUploadModal;
