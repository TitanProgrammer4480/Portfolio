import { NextResponse, NextRequest } from "next/server";
import connectDb from "@/lib/db"
import Tech from "@/models/Tech";

export async function GET() {
    try {
        await connectDb();
    
        const techs = await Tech.find();
    
        if (techs.length === 0) {
            return NextResponse.json(
                { message: "Keine Tech-Daten gefunden." },
                { status: 404 }
            );
        }
    
        return NextResponse.json(techs, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDb()
        const newTech = await req.json();
    
        if (!newTech.name || !newTech.desc || !newTech.link) {
            return NextResponse.json(
                { message: "Alle Felder (Name, Beschreibung, Link) sind erforderlich!" },
                { status: 400 }
            );
        }
    
        const tech = new Tech({
          name: newTech.name,
          desc: newTech.desc,
          link: newTech.link,
        });
    
        await tech.save();
    
        return NextResponse.json(
          { message: "Tech wurde erfolgreich erstellt!", tech },
          { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    try {
        await connectDb();
        const data = await req.json();

        if(!data._id  || !data.name || !data.desc || !data.link) {
            return NextResponse.json({ message: "name, description or link are required" }, { status: 400 });
        }
        
        const tech = await Tech.findOneAndUpdate(
            { _id: data._id },
            {
                name: data.name,
                desc: data.desc,
                link: data.link
            },
            { new: true }
        );
        
        if(!tech) {
            return NextResponse.json({ message: "No Tech found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Updated Tech" }, { status: 200 });
    }catch (err) {
        console.log("tech patch route: " + err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await connectDb();
        const data = await req.json();

        if(!data._id) {
            return NextResponse.json({ message: "tech id is required" }, { status: 400 });
        }

        const tech = await Tech.findByIdAndDelete(data._id);

        if(!tech) {
            return NextResponse.json({ message: "no tech found" }, { status: 400 });
        }

        return NextResponse.json({ message: "Deleted Tech" }, { status: 200 });
    }catch (err) {
        console.log("tech delete route: " + err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}