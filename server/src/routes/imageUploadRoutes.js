const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { uploadImages, getUploadedImages, deleteImage } = require("../controller/imageUploadController");

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|webp/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Images only!"));
    }
  },
});

router.post("/uploadimages", upload.array("images"), uploadImages);

router.get("/uploadedimages", getUploadedImages);

router.post("/deleteuploadedimages", deleteImage);

module.exports = router;
