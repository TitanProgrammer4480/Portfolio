import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const POST = async () => {
    try {
        const cookieStore = await cookies();
        await cookieStore.set("jwt", "", { maxAge: 0 });
        return NextResponse.json({ message: "successfully logged out" }, { status: 200 });
    }catch (err) {
        console.log("logout api err: " + err);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}