import mongoose from "mongoose";

const techSchema = new mongoose.Schema(
    {
        projectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Tech = mongoose.model("Tech", techSchema);

export default Tech;