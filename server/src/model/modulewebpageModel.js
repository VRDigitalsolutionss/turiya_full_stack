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
        },
        faqs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "FAQ",
            },
        ],
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
