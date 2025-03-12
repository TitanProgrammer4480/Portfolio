import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true
        },
        githubLink: {
            type: String,
            required: true,
        },
        exampleLink: {
            type: String,
        },
        example: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;