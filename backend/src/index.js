import express from "express";
import authRouter from "./routes/auth.routes.js";
import techRouter from "./routes/tech.routes.js";
import projectRouter from "./routes/project.routes.js";

const app = express();

app.use("/api/auth", authRouter);
app.use("/api/tech", techRouter);
app.use("/api/projects", projectRouter)

app.listen(() => {
    console.log("server is running");
});