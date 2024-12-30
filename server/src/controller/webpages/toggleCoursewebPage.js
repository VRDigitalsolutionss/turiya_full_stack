const CourseWebpages = require("../../model/coursewebpageModel");

const toggleCourseWebpageStatus2 = async (req, res) => {
    try {
        const { id } = req.params;


        console.log("req data", id);

        // const courseWebpage = await CourseWebpages.findByIdAndUpdate(id, { $set: { status: courseWebpage.status === "active"? "inactive" : "active" } });
        const courseWebpage = await CourseWebpages.findById(id);
        if (!courseWebpage) {
            return res.status(404).json({
                success: false,
                message: "Course Webpage not found",
            });
        }
console.log("Course Webpage",courseWebpage)
        courseWebpage.status = courseWebpage.status === "active" ? "inactive" : "active";

        await courseWebpage.save();

        res.status(200).json({
            success: true,
            message: "Course Webpage status updated successfully",
            data: courseWebpage,
        });
    } catch (error) {
        console.error("Error toggling Course Webpage status:", error);
        res.status(500).json({
            success: false,
            message: "Failed to toggle Course Webpage status",
            error: error.message,
        });
    }
};

module.exports = {
    toggleCourseWebpageStatus2,
};