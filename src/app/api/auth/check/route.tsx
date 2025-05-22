import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        return NextResponse.json({ message: "check api" }, { status: 200 })
    }catch (err) {
        console.log("check api err: " + err)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}