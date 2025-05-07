import { NextResponse, NextRequest } from "next/server";
import connectDb from "@/lib/db"
import Project from "../../../models/Project";

export async function GET() {
    try {
        await connectDb();
    
        const projects = await Project.find();
    
        if (projects.length === 0) {
            return NextResponse.json(
                { message: "Keine Tech-Daten gefunden." },
                { status: 404 }
            );
        }
    
        return NextResponse.json(projects, { status: 200 });
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
      await connectDb();
  
      const newProject = await req.json();
  
      if (!newProject.name || !newProject.desc || !newProject.githubLink) {
        return NextResponse.json(
          { message: "Name, Beschreibung und GitHub-Link sind erforderlich!" },
          { status: 400 }
        );
      }
  
      const project = new Project({
        name: newProject.name,
        desc: newProject.desc,
        githubLink: newProject.githubLink,
        demoLink: newProject.demoLink || "",
      });
  
      await project.save();
  
      return NextResponse.json(
        { message: "Projekt erfolgreich erstellt!", project },
        { status: 201 }
      );
    } catch (error) {
      console.error("POST /api/project error:", error);
      return NextResponse.json(
        { message: "Fehler beim Erstellen des Projekts." },
        { status: 500 }
      );
    }
}

export async function PATCH() {
    await connectDb()
    return new Response("test project patch")
}

export async function DELETE() {
    await connectDb()
    return new Response("test project delete")
}