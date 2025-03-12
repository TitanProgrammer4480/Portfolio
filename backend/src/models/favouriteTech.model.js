import mongoose from "mongoose";

const favouriteTechSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const favouriteTech = mongoose.model("FavouriteTech", favouriteTechSchema);

export default favouriteTech;