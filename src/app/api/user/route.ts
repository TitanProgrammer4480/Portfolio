import { NextRequest, NextResponse } from "next/server"
import connectDb from "../../../lib/db"
import User from "../../../models/User"
import bcrypt from "bcryptjs"

export async function GET() {
    try {
        await connectDb();
        const users = await User.find().select("-password");

        if(!users) {
            return NextResponse.json({ message: "there are no users" }, { status: 404});
        }

        return NextResponse.json(users, { status: 200 });
    }catch (err) {
        console.log("user get route: " + err);
        return NextResponse.json({ mesage: "Internal Server Error"}, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDb();
        const data = await req.json();

        if(!data.name || !data.password || !data.tier) {
            return NextResponse.json({ message: "No name, password or tier is provided" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = new User({
            name: data.name,
            password: hashedPassword,
            tier: data.tier
        });

        await user.save();

        return NextResponse.json({ message: "create new user", user }, { status: 201 });
    }catch (err) {
        console.log("user post route: " + err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await connectDb();
        const data = await req.json();

        if(!data._id) {
            return NextResponse.json({ message: "User id is required"}, { status: 400 })
        }

        const user = await User.deleteOne({ _id: data._id });

        if(!user) {
            return NextResponse.json({ message: "No User found"}, { status: 404 })
        }

        return NextResponse.json({ message: "successfully deleted user" }, { status: 200 })
    }catch (err) {
        console.log("user delete route" + err)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}