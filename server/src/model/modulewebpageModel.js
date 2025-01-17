const mongoose = require("../config/db");

const modulewebpageschema = new mongoose.Schema(
    {
        courseModuleCategory: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        bannerButton: {
            type: String,
            required: false
        },
        pageUrl: {
            type: String,
            trim: true,
        },
        metaTitle: {
            type: String,
            trim: true,
        },
        metaDescription: {
            type: String,
            trim: true,
        },
        canonicalLink: {
            type: String,
            trim: true,
        },
        yogaTeamSliderHeading: {
            type: String,
            trim: true,
        },
        yogaTeamSliderParagraph: {
            type: String,
            trim: true,
        },
        yogaTeamSliderVideoLink: {
            type: String,
            trim: true,
        },
        yogaTeamSlideImage: {
            type: String,
            trim: true,
        },
        about_first_section_Heading: {
            type: String,
            trim: true,
        },
        about_first_section_sub_Paragraph: {
            type: String,
            trim: true,
        },
        about_first_section_Paragraph_Content: {
            type: String,
            trim: true,
        },
        faqs: {
            type: Object,
            required: false,
        },
        modules: {
            type: Array,
            required: true,
        },
        selectedButton: {
            type: Array,
            required: true,
        },
        selectedSections: {
            type: Array,
            required: true,
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

const ModuleWebpages = mongoose.model("module_webpage", modulewebpageschema);

module.exports = ModuleWebpages;
