const ImageUpload = require("../model/ImageUpload");

const uploadImages = async (req, res) => {
    try {
        const uploadedFiles = req.files.map((file) => {
            return {
                url: `${process.env.BASE_URL_IMAGE}/${file.filename}`,
                filename: file.filename,
            };
        });

        // Save to database
        const savedImages = await ImageUpload.insertMany(uploadedFiles);

        res.status(200).json({ success: true, images: savedImages });
    } catch (error) {
        console.error("Error uploading images:", error);
        res.status(500).json({ success: false, message: "Failed to upload images" });
    }
};


const getUploadedImages = async (req, res) => {
    try {
        const images = await ImageUpload.find().sort({ uploadDate: -1 });
        res.status(200).json({ success: true, images });
    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ success: false, message: "Failed to fetch images" });
    }
};


const deleteImage = async (req, res) => {
    const { url } = req.body;

    try {
        const filename = url.split("/uploads/")[1];

        // Remove from database
        const deletedImage = await ImageUpload.findOneAndDelete({ filename });

        if (!deletedImage) {
            return res.status(404).json({ success: false, message: "Image not found in database" });
        }

        res.status(200).json({ success: true, message: "Image deleted successfully" });
    } catch (error) {
        console.error("Error deleting image:", error);
        res.status(500).json({ success: false, message: "Failed to delete image" });
    }
};


module.exports = {
    uploadImages,
    getUploadedImages,
    deleteImage
}