import mongoose, { Schema, Document } from 'mongoose';

interface ITech extends Document {
    name: string;
    desc: string;
    link: string;
}

const techSchema: Schema = new Schema(
{
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true
    },
  },
  { timestamps: true }
);

const Tech = mongoose.models?.Tech || mongoose.model<ITech>('Tech', techSchema);

export default Tech;