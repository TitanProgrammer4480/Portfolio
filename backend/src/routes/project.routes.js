import express from "express";
import {  } from "../controllers/project.controller.js";

const projectRouter = express.Router();

projectRouter.post("/", () => {console.log("project");});

export default projectRouter;