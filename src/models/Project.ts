import mongoose, { Schema, Document } from 'mongoose';

interface IProject extends Document {
    name: string;
    desc: string;
    githubLink: string;
    demoLink?: string;
}

const projectSchema: Schema = new Schema(
{
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
        required: true
    },
    demoLink: {
        type: String,
        default: null,
    },
  },
  { timestamps: true }
);

const Project = mongoose.models?.Project || mongoose.model<IProject>('Project', projectSchema);

export default Project;