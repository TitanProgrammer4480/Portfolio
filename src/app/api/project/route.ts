import { NextResponse, NextRequest } from "next/server";
import connectDb from "@/lib/db"
import Project from "../../../models/Project";

export async function GET() {
    try {
        await connectDb();
    
        const projects = await Project.find();
    
        if (projects.length === 0) {
            return NextResponse.json(
                { message: "Keine Project-Daten gefunden." },
                { status: 404 }
            );
        }
    
        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Fehler beim Abrufen der Project-Daten." },
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

export async function PATCH(req: NextRequest) {
    try {
        await connectDb();
        const data = await req.json();

        if(!data._id || !data.name || !data.desc || !data.githubLink) {
            console.log(data)
            return NextResponse.json({ message: "id, name, description or githublink are required" }, { status: 400 });
        }
        
        const tech = await Project.findOneAndUpdate(
            { _id: data._id },
            {
                name: data.name,
                desc: data.desc,
                githubLink: data.link
            },
            { new: true }
        );
        
        if(!tech) {
            return NextResponse.json({ message: "No Project found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Updated Project" }, { status: 200 });
    }catch (err) {
        console.log("project patch route: " + err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await connectDb();
        const data = await req.json();

        if(!data._id) {
            return NextResponse.json({ message: "project id is required" }, { status: 400 });
        }

        const tech = await Project.findByIdAndDelete(data._id);

        if(!tech) {
            return NextResponse.json({ message: "no project found" }, { status: 400 });
        }

        return NextResponse.json({ message: "Deleted Project" }, { status: 200 });
    }catch (err) {
        console.log("project delete route: " + err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}