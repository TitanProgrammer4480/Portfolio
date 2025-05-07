import { NextResponse, NextRequest } from "next/server";
import connectDb from "@/lib/db"
import Tech from "../../../models/Tech";

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
        return NextResponse.json(
            { message: "Fehler beim Abrufen der Tech-Daten." },
            { status: 500 }
        );
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
        return NextResponse.json(
          { message: "Es gab ein Problem beim Erstellen des Techs." },
          { status: 500 }
        );
    }
}

export async function PATCH() {
    await connectDb()
    return new Response("test tech patch")
}

export async function DELETE() {
    await connectDb()
    return new Response("test tech delete")
}