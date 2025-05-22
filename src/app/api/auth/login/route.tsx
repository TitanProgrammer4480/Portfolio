import { NextRequest, NextResponse } from "next/server"
import connectDb from "@/lib/db";
import User from "@/models/User";
import generateToken from "@/lib/utils";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
    try {
        await connectDb();
        const data = await req.json();
        if(!data.name || !data.password) {
            return NextResponse.json({ error: "Name and password are required" }, { status: 400 });
        }
        
        const user = await User.findOne({ name: data.name }).select("-tier");
        
        if(!user) {
            return NextResponse.json({ error: "No user found" }, { status: 404 });
        }

        const validatedPassword = await bcrypt.compare(data.password, user.password);

        if(!validatedPassword) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const token  = await generateToken(user._id)

        const cookieStore = await cookies();

        await cookieStore.set("jwt", token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: true
        });

        return NextResponse.json({ message: "successfully logged in", user: { _id: user._id, name: user.name,  } }, { status: 200 });
    }catch (err) {
        console.log("login api err: " + err)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
    
}