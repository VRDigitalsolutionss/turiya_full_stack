const mongoose = require("../config/db");

const courseWebpageSchema = new mongoose.Schema(
    {
        courseCategory: {
            type: String,
            required: true,
            trim: true,
        },
        pageUrl: {
            type: String,
            required: true,
            trim: true,
        },
        metaTitle: {
            type: String,
            required: true,
            trim: true,
        },
        metaDescription: {
            type: String,
            required: true,
            trim: true,
        },
        metaKeywords: {
            type: String,
            required: true,
            trim: true,
        },
        yogaTeamSliderHeading: {
            type: String,
            required: true,
            trim: true,
        },
        yogaTeamSliderParagraph: {
            type: String,
            required: true,
            trim: true,
        },
        yogaTeamSliderVideoLink: {
            type: String,
            required: true,
            trim: true,
        },
        yogaTeamSlideImage: {
            type: String,
            required: true,
            trim: true,
        },
        about_first_section_Heading: {
            type: String,
            required: true,
            trim: true,
        },
        about_first_section_sub_Paragraph: {
            type: String,
            required: true,
            trim: true,
        },
        about_first_section_Paragraph_Content: {
            type: String,
            required: true,
            trim: true,
        },faqs: {
            type: Array,
            required: false,
        },
        modules: {
            type: Array,
          
        },
        selectedButton: {
            type: Array,
      
        },
        selectedSections: {
            type: Array,
            
        },
        status: {
            type: String,
            trim: true,
            default: "active",
        },
    },
    {
        timestamps: true,
    }
);

const CourseWebpages = mongoose.model("course_webpage", courseWebpageSchema);

module.exports = CourseWebpages;
