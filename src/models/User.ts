import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    password: string;
    tier: number;
}

const userSchema: Schema = new Schema(
{
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    tier: {
        type: Number,
        required: true
    },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model<IUser>('User', userSchema);

export default User;